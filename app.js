const dom = {
  sidebar: document.getElementById('sidebar'),
  overlay: document.getElementById('overlay')
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
  if (timeouts.closeMenu === false || timeouts.closeMenu === undefined) {
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