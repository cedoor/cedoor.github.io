const dom = {
  sidebar: document.getElementById('sidebar'),
  overlay: document.getElementById('overlay'),
  blinking: document.getElementsByClassName('blinking'),
  terminalText: document.getElementById('terminal-text'),
  scrollUp: document.getElementById('scroll-up'),
  experienceTimeline: document.getElementById('experience-timeline'),
  experienceRight: document.getElementById('experience-right'),
  experienceLeft: document.getElementById('experience-left'),
  whoami: document.getElementById('whoami'),
  projects: document.getElementById('projects'),
  experience: document.getElementById('experience'),
  skills: document.getElementById('skills')
}

const timeouts = {}
const app = {}

/**
 * Open the side menu.
 */
app.openMenu = (sidebarEffect = 'slideInLeft', overlayEffect = 'fadeIn') => {
  if (timeouts.openMenu === false || timeouts.openMenu === undefined) {
    dom.sidebar.style.display = 'block'
    dom.overlay.style.display = 'block'

    dom.sidebar.classList.toggle(sidebarEffect)
    dom.overlay.classList.toggle(overlayEffect)

    timeouts.openMenu = true
    setTimeout(() => {
      dom.sidebar.classList.toggle(sidebarEffect)
      dom.overlay.classList.toggle(overlayEffect)

      timeouts.openMenu = false
    }, 500)
  }
}

/**
 * Close the side menu.
 */
app.closeMenu = (sidebarEffect = 'slideOutLeft', overlayEffect = 'fadeOut') => {
  if ((timeouts.closeMenu === false || timeouts.closeMenu === undefined) && dom.sidebar.style.display === 'block') {
    dom.sidebar.classList.toggle(sidebarEffect)
    dom.overlay.classList.toggle(overlayEffect)

    timeouts.closeMenu = true
    setTimeout(() => {
      dom.sidebar.classList.toggle(sidebarEffect)
      dom.overlay.classList.toggle(overlayEffect)

      dom.sidebar.style.display = 'none'
      dom.overlay.style.display = 'none'

      timeouts.closeMenu = false
    }, 500)
  }
}

/**
 * Scroll the page to the element id specified in the parameters.
 * @param event
 * @param id
 */
app.scrollTo = (event, id) => {
  event.preventDefault()

  app.closeMenu()

  dom[id].scrollIntoView({
    block: 'start',
    behavior: 'smooth'
  })
}

/**
 * Scroll up the web page.
 */
app.scrollUp = () => {
  if (window.pageYOffset === 0) {
    window.scroll({
      top: 2500,
      behavior: 'smooth'
    })
  } else {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }
}

/**
 * Move the experience timeline to the right.
 */
app.experienceRight = () => {
  dom.experienceTimeline.scroll({
    left: dom.experienceTimeline.scrollLeft + 250,
    behavior: 'smooth'
  })
}

/**
 * Move the experience timeline to the left.
 */
app.experienceLeft = () => {
  dom.experienceTimeline.scroll({
    left: dom.experienceTimeline.scrollLeft - 250,
    behavior: 'smooth'
  })
}

/** Initialization of some behaviors **/

// Cursor blinking
setInterval(() => {
  for (const element of dom.blinking) {
    element.style.opacity = element.style.opacity === '0' ? '1' : '0'
  }
}, 600)

// Type writer
let i = 0

const text = dom.terminalText.innerText

dom.terminalText.innerText = ''

function typeWriter () {
  if (i < text.length) {
    dom.terminalText.innerHTML += text.charAt(i)

    let speed = 40
    if (text.charAt(i) === ',') {
      speed = 200
    } else if (text.charAt(i) === '.') {
      speed = 800
    }

    i++

    setTimeout(typeWriter, speed)
  }
}

setTimeout(typeWriter, 1000)

// Taijitu rotation
window.onscroll = () => {
  dom.scrollUp.style.transform = `rotate(${window.pageYOffset / 5}deg)`
}

// Shortcuts

window.onkeydown = (event) => {
  if (event.keyCode === 39) {
    app.experienceRight()
  } else if (event.keyCode === 37) {
    app.experienceLeft()
  }
}