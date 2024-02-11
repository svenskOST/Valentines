const giftLabel = document.getElementById('giftLabel')
const gift = document.getElementById('gift')
const background = document.getElementsByClassName('background')[0]
const audio = document.getElementsByTagName('audio')[0]

const hideNavbar = () => {
   navbar.style.bottom = '-' + navbar.clientHeight + 'px'
}
const showNavbar = () => {
   navbar.style.bottom = '7vh'
}

setTimeout(() => {
   giftLabel.style.opacity = 1
   gift.style.opacity = 1
}, 10)

gift.onclick = () => {
   audio.play()
   hideNavbar()
   giftLabel.style.opacity = 0
   gift.style.opacity = 0

   setTimeout(() => {
      gift.style.display = 'none'
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
   }, 2000)
}
