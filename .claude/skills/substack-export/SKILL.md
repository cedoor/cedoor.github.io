---
name: substack-export
description: >
  Use when the user wants to publish, copy, move, or export a cedoor.dev blog
  post to Substack, or otherwise prepare MDX blog content for a platform that
  doesn't support MDX, KaTeX, .bib citations, or the site's ThemedIllustration
  component. Triggers on "substack", "copiare su substack", "portare il post
  su substack", or requests for a copy-pasteable version of a post.
---

# Substack export

## Overview

Converts a published MDX post from this blog into a single self-contained
HTML page the author opens in a browser and copies, piece by piece, into
Substack's own editor. Substack has no publishing API (see below), no MDX
support, no `.bib` bibliography, and silently downgrades uploaded SVGs to
low-quality JPGs, so the deliverable has to route around each of those gaps
rather than assume anything translates automatically.

**Don't use this for a post containing KaTeX math** (`$$...$$`, `\(...\)`).
Substack's editor doesn't render LaTeX and this skill has no answer for that
yet; flag the post to the user instead of silently stripping or mangling the
math.

**There is no way to automate the actual publishing.** Substack has no public
API for creating or publishing posts (its "Developer API" only does LinkedIn
profile lookups). Unofficial reverse-engineered libraries exist, but they
require storing a live session cookie as a secret (equivalent to full account
takeover if leaked) and can break silently whenever Substack changes an
internal endpoint. Don't reach for one without the user explicitly accepting
that risk; the copy-paste deliverable below is the intended output.

## Usage

Invoke as `/substack-export <slug>`, where `<slug>` is the target post's
filename in `src/content/blog/` without the `.mdx` extension, for example
`/substack-export the-harness-the-context-the-flow`. If invoked with no
argument, or with a slug that doesn't match any file in that directory, ask
which post to convert before doing anything else. Don't guess from context
(a recently-opened file, the newest post) when the argument is missing.

## What Substack's editor does and doesn't support

| MDX / site feature | Substack support | What to do |
|---|---|---|
| Frontmatter (title, date, tags, summary) | no | title/summary go in separate editor fields, drop the rest |
| `import` statements, MDX components | no | strip entirely |
| `[@key]` citations against `references-data.bib` | no `.bib` | Substack has native footnotes; see Citations below |
| `<ThemedIllustration>` (light/dark SVG pair) | no theme swap, SVG downgraded to JPG on upload | rasterize the light SVG to PNG yourself; see Images below |
| relative links (`/blog/...`) | breaks off-site | rewrite to absolute `https://cedoor.dev/...` |
| fenced code blocks | supported, but paste sometimes lands as plain text | keep as `<pre><code>`, warn the user to reapply Substack's code block if needed |
| bold / links / headings / lists | supported | preserve as real HTML (see Delivery below), don't flatten to markdown syntax |

## Citations: footnote markers, not inline links

Substack has native footnotes, but they are an editor-native object: pasted
HTML can create superscript-looking text, not a real interactive footnote.
So:

1. Find every `[@key]` in the post, in order of first appearance, and resolve
   each against `src/data/references-data.bib`. Only look up keys this post
   actually cites, the file is shared across every post on the blog.
2. Assign one footnote number per unique key, at its first meaningful
   appearance, even if the source is cited again later. An essay cites a
   source once and refers back to it in prose; it doesn't re-flag every
   mention.
3. Replace `[@key]` with a plain, non-clickable marker: `<sup
   class="fn">[n]</sup>`. Do not turn it into a hyperlink on the source's
   name instead, that undersells a feature Substack actually has natively.
4. After the article, add a footnote-content list, one row per number, each
   with its own small "copy" button: `Author, "Title", Year — URL`.
5. Tell the user explicitly how to finish the job: paste the body first, then
   for each `[n]` marker, delete it, open a Substack footnote at that exact
   spot (format menu or `+`), and paste in the matching numbered row.

## Images: rasterize the light variant yourself

1. Always use the **light** SVG of the pair (`*-light.svg`), never dark.
   Substack's reading surface is light by default; dark mode is a reader-side
   opt-in toggle, not automatic. A light image against an opted-in dark
   background just looks like a pale card; a dark image against the default
   light background looks broken.
2. Check the light SVG has an opaque full-canvas `<rect>` behind the content
   (the hand-authored illustrations on this site do, the Inkscape-exported
   ones may not). If it's missing, that's a bug in the project's own asset,
   not just this export: add `<rect x="<viewBox x>" y="<viewBox y>"
   width="<viewBox width>" height="<viewBox height>" fill="#fafaf7"/>` as
   the first drawn element (right after `</defs>`) to the actual
   `public/static/images/*.svg` source file, matching a sibling illustration
   that already does this, then continue. Fix the source, don't paper over
   it downstream.
3. **Rasterize against pure white (`#ffffff`), not the site's own `--bg`
   token.** The site's light theme is a warm off-white (`#fafaf7`), but
   Substack's actual post background is pure white: embedding a `#fafaf7`
   image reads as a faint grey box once it lands on Substack's white. Never
   edit the project's real SVG to white, that file has to stay correct for
   the site itself. Instead make a throwaway copy with just the background
   rect's fill swapped, and rasterize that:
   `sed 's/fill="#fafaf7"/fill="#ffffff"/' <name>-light.svg >
   /tmp/<name>-white.svg && rsvg-convert --zoom=2 /tmp/<name>-white.svg -o
   <name>.png`. Use `--zoom`, not explicit `-w`/`-h` pixel dimensions: some
   of this site's SVGs have a `viewBox` whose aspect ratio doesn't match
   their declared `width`/`height` attributes (deliberate cropping), and
   forcing pixel dimensions from those attributes stretches or letterboxes
   the render instead of reproducing what the site actually shows.
4. **Always view the resulting PNG with Read before embedding it.** A
   viewBox/attribute mismatch, or a background rect that didn't exist to
   begin with, both fail silently, not with an error.
5. Base64-encode the PNG (`base64 -i file.png -o file.b64`) and embed it at
   the same spot the `<ThemedIllustration>` occupied, as this exact block
   (the CSS and the `.copy-image-btn` click handler already live in
   `template.html`, don't rewrite them):

   ```html
   <figure class="fig-block">
     <img src="data:image/png;base64,..." alt="<original alt text>" />
     <div class="fig-actions">
       <span class="fig-filename"><name>.png</span>
       <button class="copy-btn small copy-image-btn">Copia immagine</button>
     </div>
     <figcaption class="copy-caption"><original caption></figcaption>
   </figure>
   ```

   One click on "Copia immagine" puts **only** the PNG bytes (`image/png`)
   on the clipboard, nothing else. An earlier version also bundled the
   caption as a second `text/plain` representation on the same
   `ClipboardItem`, on the theory that each paste target would pick
   whichever representation it could use; in practice, pasting into
   Substack's editor took the text and dropped the image, since the editor
   prefers text/plain when it's present rather than treating the two
   representations as target-dependent alternatives. Don't reintroduce that:
   image-only is what actually pastes an image. The caption stays visible in
   the page's `<figcaption>` for the user to select and copy by hand into
   Substack's separate image-caption field. That is the deliberate
   replacement for a download-and-manually-upload step, tell the user they
   can paste the image directly at that point in the Substack editor instead
   of uploading a file. Do the base64 substitution with a script that reads
   the files from disk (Python/sed), never by pasting the base64 blob
   through a text-editing tool call: a few hundred KB of base64 text is dead
   context weight for zero benefit.

## Delivery: fill in `template.html`, don't hand-author the page

This skill ships a working shell at `template.html` (same directory as this
file): CSS tokens matching the site's own (`src/styles/global.css`), the
instructions box, the title/summary meta rows, the article container, the
footnote list, and the copy-button JavaScript, including the "Copia
immagine" clipboard handler and the clone-and-strip logic that keeps base64
image data and image-copy buttons out of what the "Copia
articolo" button puts on the clipboard, are already built and were validated
end to end against a real post. Copy it to a working file and fill in these
placeholders with a script (Python, not by hand through an editing tool):

| Placeholder | Content |
|---|---|
| `{{TITLE}}` | the post's frontmatter `title` (appears twice: page heading and meta row) |
| `{{SUMMARY}}` | the post's frontmatter `summary` |
| `{{HOWTO_EXTRA_ITEMS}}` | one `<li>` per applicable caveat (images to upload, code blocks that may paste flat, footnotes to insert); omit any that don't apply to this post |
| `{{HOWTO_COPY_EXTRA}}` | `, marcatori [n]` if the post has footnotes, else an empty string |
| `{{ARTICLE_HTML}}` | the converted post body per the Citations and Images sections above |
| `{{FOOTNOTES_SECTION}}` | the eyebrow line plus the `.fn-list` block (one `.fn-row` per numbered source), or an empty string if the post cites nothing |
| `{{SOURCE_FILE}}` | the original `.mdx` filename |
| `{{FOOTER_SUMMARY}}` | a short clause naming what was actually transformed, only for the parts that applied to this post |

Load the `artifact-design` skill before publishing regardless, it still
governs restraint for anything genuinely new you add, but treat the template
as the baseline to fill in, not prose to reimplement from memory: the
clipboard handling in particular encodes a bug that only showed up once a
real user tried the button (see Common mistakes), don't rewrite it fresh and
risk reintroducing it.

If a specific post needs something the template has no slot for (a table, a
blockquote, an unusual layout), extend `template.html` itself so the next
export benefits too, rather than one-off patching the generated page.

## Common mistakes

- Hand-authoring the HTML/CSS/JS shell from scratch instead of filling in
  `template.html`'s placeholders: regenerating it invites regressions in
  bugs that were already found and fixed (see the clone-and-strip clipboard
  logic in Delivery above), for zero benefit, the shell doesn't need to
  change per post.
- Guessing which post to convert when the skill is invoked with no argument,
  instead of asking. See Usage above.
- Leaving citations as inline hyperlinks instead of footnote markers: it
  works, but throws away a feature Substack has natively.
- Rasterizing the dark SVG, or forcing pixel dimensions from the SVG's
  declared `width`/`height` instead of using `--zoom` against its viewBox.
- Pasting base64 image data through a text-editing tool call instead of a
  disk-level script.
- If you do end up editing `template.html`'s copy logic: letting the "Copia
  articolo" button serialize the image blocks as-is leaks the "Copia
  immagine" button's markup and the base64 blob into the pasted Substack
  text. The clone-and-replace step exists specifically to prevent this,
  don't remove it.
- Letting the "how to use" instructions box get copied along with the
  article body, so it ends up inside the actual Substack post: keep the
  instructions outside the element the copy button targets.
- Attempting to convert KaTeX math along with everything else: not handled
  by this skill, flag it to the user instead.
- Reaching for an unofficial Substack API library to auto-publish without
  first flagging the account-takeover and breakage risk to the user.
