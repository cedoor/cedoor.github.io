---
name: blog-post
description: >
  Write, draft, outline, or edit a blog post for the user's personal blog at
  cedoor.dev, an Astro MDX blog by a software engineer. Most posts are about
  software engineering itself, including AI-native engineering practice, and
  about the author's broader curiosity: politics, sociology, technology, and
  society. Programmable cryptography and privacy (applied ZK/MPC/FHE), the
  author's day job specialty, comes up occasionally rather than as the blog's
  main subject. Use it for any post regardless of topic. Use this whenever the
  user wants to write an article, a technical writeup, an essay, a memo, or a
  draft for their site, or asks to revise prose for it, even if they don't
  literally say "blog". It encodes the MDX frontmatter schema, KaTeX math
  conventions, the rehype-citation citation format, the acknowledgements
  pattern, and the author's specific writing voice, so drafts come out
  publishable instead of generic.
---

# Blog post (cedoor.dev)

This skill helps write posts for cedoor.dev, a software engineer's personal
Astro 6 MDX blog. Most posts are about software engineering itself, including
how AI-native engineering practice is reshaping the job, and about the
author's broader curiosity: politics, sociology, technology, and society.
Programmable cryptography and privacy (ZK proofs, MPC, FHE), the author's
day-to-day specialty, shows up every so often, not as the blog's anchor. The
author writes for technically literate readers regardless of topic. The voice
guidance below applies to every post; the math and citation mechanics matter
only on the subset of posts that actually need them, mainly the cryptography
ones and any post that cites external sources.

The single most important thing this skill carries is the author's **voice**.
The mechanics (frontmatter, math, citations) are easy to get right once;
getting the voice right is what makes a draft feel like theirs. Spend your
attention there.

## Post file format

A post is one MDX file. The filename is the slug, so `greco.mdx` is served at
`/blog/greco`. In the blog repository these live under `src/content/blog/`; when
that directory exists, put new posts there. The slug should be short, lowercase,
and hyphenated.

### Frontmatter

Every post opens with YAML frontmatter. Only `title` and `date` are required;
add the rest when they apply.

```yaml
---
title: GRECO in a nutshell           # required
date: '2025-12-05'                   # required, 'YYYY-MM-DD', quoted
tags: ['cryptography', 'fhe', 'zk']  # optional, lowercase, used for search/display
summary: An introduction to GRECO... # optional, becomes the <meta description>
bibliography: references-data.bib    # include only if the post cites sources
images: ['/static/images/x.svg']     # optional, og-image paths
draft: true                          # optional, true keeps it out of the build
---
```

Write a `summary` whenever the post is non-trivial: it is the search-result and
social-preview text, so make it a single clear sentence describing what the
reader will learn, not a teaser. Default new drafts to `draft: true` so they are
not published before the author is ready.

## Writing voice

These are not arbitrary style rules; each one captures something specific
about how this author actually writes. Internalize the reasoning, don't just
pattern-match the rules. For an essay or analytical post,
`the-harness-the-context-the-flow.mdx` is the clearest working example of this
voice at its best: simple register, dry and clear prose, sentences that flow
into each other, sections that hand off to one another instead of sitting
side by side.

**No em dashes, and no hyphen used as a sentence pause.** Do not write `—` and
do not write ` - ` between clauses. The author dislikes them strongly.
Restructure instead: use a comma, a full stop, parentheses, or a colon. If a
sentence seems to need a dash, it usually wants to be two sentences or a clause
reordered.

**Favor flowing sentences, with rare short ones at a real pivot.** The author
writes mostly in longer, connected sentences that carry the reader through the
reasoning. A short sentence does show up, but alone, as a section opener or the
turn in an argument ("Yet the bill always arrives.", "AI is different in kind,
not just degree."), never as a run of several short sentences stacked for
effect. If a punchy line isn't landing on a genuine pivot, lengthen it back into
the surrounding prose.

**Sections hand off to each other, not just sentences.** A paragraph should
flow into the next, but so should a whole section: close each one with a line
that sets up what comes next, the way `the-harness-the-context-the-flow.mdx`
ends "What the harness is made of" with "Isolating the box is the easy part,
what goes inside each one is the harder question, and it gets its own pillar
next." Avoid sections that read as disconnected mini-essays glued together
under one title.

**Prose first, bullets rarely.** Explain in paragraphs. Reach for a bulleted
list only when the items are genuinely a parallel enumeration that the reader
will want to scan, for example a short list of distinct properties or steps.
Never nest bullets. When you do use a list, keep each item a real, comparable
unit. Most of a good post here is prose.

**No filler openers.** Cut "It's worth noting that", "It's important to remember
that", "Notably", "Importantly", "Certainly", "Of course". They add nothing.
Start with the actual point.

**No restating conclusion.** Do not end with a paragraph that summarizes what was
just said in different words. A closing should land a final thought, point
forward, or connect back to the opening idea, not recap the article. (A short
explicit "Conclusions" section is fine when the post is long and argumentative;
what to avoid is the empty "In summary, we saw that..." reflex.)

**Keep vocabulary simple and direct.** The author is not a native English
speaker and prefers plain words over ornate ones. Choose the common word. Avoid
showy verbs and abstract nouns when a concrete phrasing exists.

**Bold key terms on first introduction.** When a central concept, system, or
acronym first appears, set it in **bold** (for example **FHE**, **GRECO**, the
**Learning With Errors** assumption). This gives the reader anchors. Don't
overdo it: bold the term once, on introduction, not every time.

**Ground abstraction in something concrete.** On cryptography and other math-heavy
topics, this means a tangible scenario worked out before the formalism: six
hospitals that want an aggregate without revealing their numbers, or a toy
modulus `q = 105` worked out by hand. On AI, engineering, and society posts, the
same move looks different: a specific number from a named study or report
(Gloria Mark's 47-second attention span, the Artificial Analysis benchmark score
for one model across three harnesses, the Stanford AI Index's training-cost
figures), or a real named tool used as the working example (OpenCode's
permission map, Nesso's actual workflow). Either way, look for the smallest
concrete instance, a worked example or a hard number, that makes the abstract
claim click, and lead with it before the general point.

**First person is welcome when it's earned.** The author writes "I've personally
spent the past few years working on this" where they have real experience. Use
"I" for genuine perspective or experience, not as decoration.

**An occasional blockquote can voice an imagined skeptic.** Sometimes a short
blockquote interrupts with an objection or a needling question, "So, what's
the plan then?", "Ok, the hallowed Stack Overflow existed, but the gap between
their answer and your problem still forced you to think.", and the paragraph
right after answers it directly. Reach for this occasionally, as a change of
pace, not as something every post needs.

### A looser register for personal or anecdotal posts

Not every post is an analytical essay. On a short personal reflection or a
pure anecdote, like `hello-world.mdx` or
`the-wonderful-story-of-amerigo-dumini.mdx`, the register can loosen:
informal phrasing, comedic timing through short exclamations, irony carried
by italicizing a single word ("_heroically_ took full responsibility", he was
welcomed back as a "_hero_"), an occasional swearword inside an imagined
voice ("What the fuck is an ISP?" in `financial-awareness.mdx`), even
code-switching into another language for a punchline that doesn't translate.
The core rules above (no em dashes, bold on first mention, simple vocabulary)
still hold; what loosens is the tone, not the mechanics. Reach for this
register only when the post itself is personal or a story, not for essays or
technical writeups.

## Math (KaTeX)

Math renders through `remark-math` + `rehype-katex`. The KaTeX stylesheet is
loaded automatically only on posts whose raw body contains `$$`, `\[`, or `\(`,
so you never manage CSS yourself; just write the math.

- Inline: `$pk = (p_0, p_1)$`
- Display: wrap in `$$ ... $$` on their own lines.

For multi-line aligned display math, use an `aligned` environment inside the
display delimiters:

```
$$
\begin{aligned}
c_0 &= pk_0 \cdot u + e_1 + \Delta \cdot m \\
c_1 &= pk_1 \cdot u + e_2
\end{aligned}
$$
```

Introduce symbols in prose right after the math so the reader knows what each one
means, the way the author explains $u$, $e_1$, $e_2$, and $\Delta$ immediately
after showing the encryption equations.

## Citations

Citations use `rehype-citation` against a shared BibTeX file
(`src/data/references-data.bib`, referenced in frontmatter as
`bibliography: references-data.bib`). To cite, drop the BibTeX key inline:

- Single: `GRECO [@Bot24], a zero-knowledge proof of correct encryption`
- Multiple: stack adjacent single-key brackets, one per source, the pattern
  recent posts actually use: `Haidt and Twenge have argued the connection is
  causal [@AnxiousGeneration] [@Twenge2018]`. A single bracket with keys
  separated by `;` (`the Schwartz–Zippel lemma [@Sch80; @Zip79]`) is equally
  valid and reads a touch tighter when naming one shared idea.

The rendered bibliography is produced by a footnote marker. End any post that has
citations with exactly this, as the last section:

```markdown
## References

[^ref]
```

If you introduce a citation key that is not yet in the `.bib` file, tell the user
which keys are missing and what entries they need to add, since the build pulls
from that shared file and you should not silently invent keys.

## Linking to earlier posts

When a post builds on or refers back to an idea from an earlier one, link it
inline with a relative path instead of restating the argument:
`[understanding debt](/blog/beyond-technical-debt)`. Use the linked post's
actual slug, and only link when the reference genuinely carries the argument
forward, not as a courtesy mention.

## Acknowledgements

Posts that came out of discussion with others open with a single italic
acknowledgements line, immediately after the frontmatter (and any imports),
followed by a horizontal rule:

```markdown
_Special thanks to [Giacomo Corrias](https://github.com/0xjei), [Enrico Bottazzi](https://x.com/backaes) and Marv for feedback and discussions._

---
```

Only include this when the author actually names collaborators. Ask who to credit
rather than inventing names.

## Takeaways box (long technical comparisons only)

On a long, dense post that compares two systems or approaches, a short
bulleted "Takeaways" section right after any acknowledgements, before the
prose begins, gives the reader a scannable summary up front:

```markdown
## **Takeaways**

- **Challenges**: one line on the problem.
- **Emerging solutions**: one line per approach compared.
- **Goals**: what success looks like.

---
```

This is not standard on every post, reach for it only when the piece is long
and detailed enough that a reader benefits from knowing the shape of the
argument before diving in.

## Images and illustrations

Place image files in `public/static/images/` and reference them with an absolute
path: `![alt text](/static/images/example.png)`. Never append query strings like
`?theme-aware`; Astro does not process them.

For an illustration that must adapt to light and dark themes, provide two files
(`example.svg` and `example-dark.svg`) and render them with the project's
component instead of a plain Markdown image:

```mdx
import ThemedIllustration from '../../components/ThemedIllustration.astro'

<ThemedIllustration
  lightSrc="/static/images/example.svg"
  darkSrc="/static/images/example-dark.svg"
  alt="example illustration"
/>
```

The author cannot generate the image assets; when a post needs one, describe what
the illustration should show and where the files go, and leave the reference in
place for them to fill.

## How to work

Writing a good post happens across up to four phases. Each phase typically runs
in its own session so it gets the model and reasoning effort it actually needs:
organizing raw links doesn't need the same weight as stress-testing a thesis.
The author drives every transition manually: `/clear`, then `/model <alias>`,
then `/effort <level>`, then pasting the previous phase's artifact as the
opening message of the new session. If the skill doesn't pick itself back up
from that first message, the author can force it with `/blog-post`.

Each artifact is self-contained: open it with a one-line header naming which
phase produced it, so a session that starts from `/clear`, and therefore has no
memory of anything before that artifact, can tell what it's looking at without
being told again.

**Never invent the author's substance**, in any phase. Opinions, stances,
personal anecdotes, numbers, sources, and lived experience are the author's to
supply. When you need one and don't have it, ask rather than fabricate a
plausible-sounding version, the same way you ask who to credit instead of
inventing collaborators. This matters most on non-technical posts (politics,
society, investments, reflection), where there is no "correct" answer to fill
in: a fabricated opinion reads as confident and is exactly wrong.

No phase auto-advances into the next. Propose the transition once its exit
checkpoint passes; the author can always override a checkpoint and proceed
anyway, they just aren't swept into the next phase without saying so.

### Phase 0 — Source Gathering (optional)

**Model:** Sonnet, effort: medium

Skip this phase when the author arrives with just a thesis or a few bullets and
go straight to Phase 1. Use it only when they already have raw material to
organize first: links, notes, data, quotes collected before settling on an
angle.

1. Collect what the author hands you (links, pasted text, data) plus anything
   they describe from memory.
2. For each source, add a one-line note on why it might be relevant. Don't
   filter yet: organizing isn't the same as deciding what to use.
3. Preserve quotes or data verbatim, not paraphrased, so nothing is lost before
   the summarizing that happens in later phases.
4. Flag explicit gaps: topics the author mentioned wanting to cover but hasn't
   supplied material for yet.

**Artifact — Source Sheet:** each source with its relevance note, verbatim
quotes/data worth keeping, and flagged gaps.

Exit checkpoint:
- [ ] Every source has a relevance note
- [ ] Quotes/data are verbatim, not paraphrased
- [ ] Gaps are flagged, not silently dropped

Transition: `/clear` → `/model opus` → `/effort xhigh`, paste the Source Sheet
as the first message of Phase 1.

### Phase 1 — Brainstorm & Outline

**Model:** Opus, effort: xhigh

Goal: a structured, approved outline that is the sole input for Phase 2.

1. Expect the author to arrive with at least a rough thesis, a few bullets, or
   a Phase 0 Source Sheet. If they arrive empty, ask for one before proceeding.
2. Act as a sparring partner: stress-test the thesis, surface gaps, propose
   angles the author may not have considered. Do not generate bulk prose.
3. Find the spine by asking **one question at a time and waiting for the
   answer before the next** (this is how the author prefers to work). The
   questions worth settling: what is the single idea the reader should walk
   away with, who is that reader, and what concrete scenario or sharp question
   does the piece open from. Skip a question the author already answered.
4. Build the outline together, iteratively. For each section define: title,
   guiding question, 2-3 key points, sources to cite if known, and a
   transition note to the next section.
5. Check for redundancy: are any two sections making the same argument? Merge
   or differentiate explicitly.
6. State the article-level thesis in one sentence and confirm it.

**Artifact — Outline Document:** title, one-sentence thesis, tags, and per
section its title, guiding question, key points, sources, transition note,
plus any open questions flagged for drafting.

Exit checkpoint:
- [ ] One-sentence thesis
- [ ] Every section has a guiding question and at least 2 key points
- [ ] Transitions between sections are noted
- [ ] No redundant sections
- [ ] Sources identified where applicable

Transition: `/clear` → `/model sonnet` → `/effort high`, paste the Outline
Document as the first message of Phase 2.

### Phase 2 — Drafting

**Model:** Sonnet, effort: high

Goal: a complete first draft that follows the outline, in the voice described
earlier in this skill.

1. Take the Outline Document as the sole input. Don't ask about the
   brainstorming that produced it, it isn't in this session's context.
2. Write the full article section by section, following the outline, in the
   voice above and grounded in small concrete examples where the topic is
   technical.
3. Move forward; don't revise sections already written. If a structural
   problem emerges (a section doesn't work, an argument falls apart), record
   it under a **Side Notes** section at the end instead of fixing it mid-draft.
4. Leave placeholders for anything Phase 3 needs to resolve: citations as
   `[CITE: what this claim needs]`, images as `[TODO: what the illustration
   should show]` (see Citations and Images above for the formats these
   become).
5. If voice calibration is unclear, ask for a sample of prior writing.
6. Before proposing the transition, check the exit checkpoint. If any item
   fails, keep drafting in this same session until it passes: don't hand an
   incomplete section to Phase 3 as a note instead of writing it.

**Artifact — First Draft:** the complete article in MDX, frontmatter included,
placeholders marked, Side Notes section for structural concerns.

Exit checkpoint:
- [ ] Every section from the outline has real prose, not a stub
- [ ] No section was skipped
- [ ] Side Notes captured, if any
- [ ] Unresolved parts are marked as placeholders, not silently omitted

Transition: `/clear` → `/model opus` → `/effort high`, paste the First Draft
as the first message of Phase 3.

### Phase 3 — Editing & Polish

**Model:** Opus, effort: high

Goal: structural editing, consistency, and final polish. Judge the text on its
own, not on how it was produced.

1. Take the First Draft as the sole input. Don't ask about the brainstorming
   or drafting that produced it.
2. First pass, structural: does the article flow? Is the thesis supported?
   Are there redundancies, gaps, or sections out of order?
3. Second pass, paragraph-level: tighten arguments, improve clarity, keep
   terminology and tone consistent. This is the pass to hunt specifically for
   the voice tells described earlier: em dashes and ` - ` pauses, filler
   openers, runs of punchy fragments stacked as slogans, stray nested bullets,
   and any closing paragraph that just restates the piece.
4. Third pass, fine editing: grammar, phrasing, formatting, and placeholder
   resolution. Resolve `[CITE: ...]` against the shared `.bib` file; if a key
   doesn't exist yet, tell the author which keys are missing instead of
   inventing one. Resolve `[TODO: ...]` image placeholders per the Images
   section above; the author still has to supply the actual asset files.
5. Present changes as a diff or a revised full document, with a brief summary
   of what changed and why.
6. Flag any unresolved issue for the author's decision instead of guessing.

**Artifact — Final Article:** the complete, polished MDX post, a change log of
key edits, and a list of remaining open decisions for the author.

Exit checkpoint:
- [ ] All three passes done
- [ ] No `[CITE: ...]` or `[TODO: ...]` placeholder left unresolved or unflagged
- [ ] Change log written
- [ ] Open questions listed, if any

## Skeleton

The minimal shape of any post. Only `title` and `date` are required; add the
other lines when they apply.

```mdx
---
title: <title>
date: '<YYYY-MM-DD>'
tags: ['<tag>']
summary: <one clear sentence on what the reader takes away>
draft: true
---

<Open with a concrete scenario or a sharp motivating question, in prose.>

## <First idea>

<Explanation in prose, grounded in a small concrete example.>
```

For a technical post that cites sources, add `bibliography: references-data.bib`
to the frontmatter, an acknowledgements line if collaborators are credited, and
close with the references marker:

```mdx
---
title: <title>
date: '<YYYY-MM-DD>'
tags: ['<tag>']
summary: <one clear sentence on what the reader learns>
bibliography: references-data.bib
draft: true
---

_Special thanks to <collaborators> for feedback and discussions._

---

<Open with a concrete scenario or a sharp motivating question, in prose.>

## <First idea>

<Explanation, grounded in a small concrete example before any formalism.>

## References

[^ref]
```
