const background = document.getElementsByClassName('background')[0]
const audio = document.getElementsByTagName('audio')[0]

const hideNavbar = () => {
   navbar.style.bottom = '-' + navbar.clientHeight + 'px'
}
const showNavbar = () => {
   navbar.style.bottom = '7vh'
}

audio.play()

setTimeout(() => {
   hideNavbar()
   setTimeout(() => {
      background.style.opacity = 1
      setTimeout(() => {
         background.classList.remove('not-loaded')
         setTimeout(() => {
            onmousemove = m => {
               if (m.clientY > 0.8 * window.innerHeight) {
                  showNavbar()
               } else if (m.clientY < 0.7 * window.innerHeight) {
                  hideNavbar()
               }
            }
         }, 2000)
      }, 5000)
   }, 1000)
}, 1000)
