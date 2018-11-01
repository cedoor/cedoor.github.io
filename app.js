const dom = {
  sidebar: document.getElementById('sidebar'),
  overlay: document.getElementById('overlay'),
  blinking: document.getElementsByClassName('blinking'),
  terminalText: document.getElementById('terminal-text'),
  scrollUp: document.getElementById('scroll-up'),
  whoami: document.getElementById('whoami'),
  projects: document.getElementById('projects'),
  experience: document.getElementById('experience'),
  education: document.getElementById('education'),
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
 *
 * @param commands
 */
app.startTerminal = (commands) => {
  const userInformations = 'cedoor'

  let currentDirectory = '~'
  let i = 0

  function getHeading () {
    return userInformations + '[ ' + currentDirectory + ' ]$ '
  }

  function writeCommand (name, callback) {
    if (name !== '') {
      dom.terminalText.innerHTML += name[0]

      setTimeout(() => {
        writeCommand(name.substring(1), callback)
      }, 60)
    } else {
      setTimeout(callback, 300)
    }
  }

  function run (command) {
    i++

    if (command === undefined) {
      app.startTerminal(commands)
    } else {
      setTimeout(() => {
        switch (command.name) {
          case 'ls':
          case 'whoami':
          case 'ps aux':
            writeCommand(command.name, () => {
              dom.terminalText.innerHTML += '<br>' + command.output + '<br>' + getHeading()

              run(commands[i])
            })
            break
          case 'clear':
            writeCommand(command.name, () => {
              dom.terminalText.innerHTML = getHeading()

              run(commands[i])
            })
            break
          case 'cd':
          case 'kill -9':
            writeCommand(command.name + ' ' + command.argument, () => {
              if (command.name === 'cd') {
                switch (command.argument) {
                  case '..':
                    currentDirectory = currentDirectory.substring(0, currentDirectory.lastIndexOf('/'))
                    break
                  case '~':
                    currentDirectory = '~'
                    break
                  default:
                    currentDirectory += '/' + command.argument
                }
              }

              dom.terminalText.innerHTML += '<br>' + getHeading()

              run(commands[i])
            })
            break
        }
      }, 1500)
    }
  }

  dom.terminalText.innerHTML = getHeading()

  run(commands[i])
}

/** Initialization of some behaviors **/

// Cursor blinking
setInterval(() => {
  for (const element of dom.blinking) {
    element.style.opacity = element.style.opacity === '0' ? '1' : '0'
  }
}, 600)

// Taijitu rotation
window.onscroll = () => {
  dom.scrollUp.style.transform = `rotate(${window.pageYOffset / 5}deg)`
}

// Terminal animation
app.startTerminal([{
  name: 'whoami',
  output: 'cedoor'
}, {
  name: 'ls',
  output: 'Programming Learning Running'
}, {
  name: 'clear'
}, {
  name: 'ps aux',
  output: '1 tty2 Sl+ 2:10 distractions<br>2 tty2 Sl+ 1:30 concentration<br>3 tty2 Sl+ 3:20 relax'
}, {
  name: 'clear'
}, {
  name: 'kill -9',
  argument: '1'
},{
  name: 'cd',
  argument: 'Programming'
},{
  name: 'clear'
}, {
  name: 'ls',
  output: 'JavaScript Python C Java'
}, {
  name: 'cd',
  argument: '~'
}, {
  name: 'clear'
}])

// Cookies
window.addEventListener('load', function () {
  window.cookieconsent.initialise({
    'palette': {
      'popup': {
        'background': '#414141'
      },
      'button': {
        'background': '#5f6d71'
      }
    },
    'theme': 'edgeless'
  })
})