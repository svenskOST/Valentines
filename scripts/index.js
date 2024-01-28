const body = document.querySelector('body')
const card = document.getElementById('card')
const front = document.getElementById('front')
const yesBtn = document.getElementById('yesBtn')
const noBtn = document.getElementById('noBtn')
const navbarHidden = document.getElementsByClassName('navbarHidden')[0]

var firstInteraction = true

yesBtn.onmousedown = () => {
   yesBtn.style.scale = 0.9
}

yesBtn.onmouseup = () => {
   yesBtn.style.scale = 1
}

yesBtn.onclick = () => {
   if (!firstInteraction) {
      noBtn.style.opacity = 0
   } else {
      setTimeout(() => {
         noBtn.style.opacity = 0
      }, 500)
   }

   card.style.transform = 'rotateY(180deg)'

   setTimeout(() => {
      front.style.opacity = 0
      card.style.marginBottom = '20vh'
      navbarHidden.style.bottom = '10vh'
      navbarHidden.style.opacity = 1
   }, 1500)
}

noBtn.onmouseenter = () => {
   if (firstInteraction) {
      const x1 = yesBtn.offsetLeft
      const y1 = yesBtn.offsetTop
      yesBtn.style.position = 'absolute'
      yesBtn.style.left = `${x1}px`
      yesBtn.style.top = `${y1}px`

      const x2 = noBtn.getBoundingClientRect().left
      const y2 = noBtn.getBoundingClientRect().top
      body.appendChild(noBtn)
      noBtn.style.scale = 0.7
      noBtn.style.position = 'fixed'
      noBtn.style.left = `${x2 + 51.5}px`
      noBtn.style.top = `${y2 - 11.5}px`

      firstInteraction = false
   }

   setTimeout(() => {
      let x = Math.random() * window.innerWidth * 0.9
      let y = Math.random() * window.innerHeight * 0.9
      noBtn.style.left = `${x}px`
      noBtn.style.top = `${y}px`
   }, 1)
}

const linkTransition = link => {
   navbar.onmouseleave = null
   card.style.transition = '0.5s'
   card.style.transform = 'rotateY(90deg)'
   setTimeout(() => {
      document.location.href = `./${link}.html`
   }, 600)
}
