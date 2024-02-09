const messageContainer = document.getElementById('messageContainer')
const titleEl = document.getElementById('title')
const textEl = document.getElementById('text')

const titlePlaceholder = titleEl.innerHTML
const textPlaceholder = textEl.innerHTML

titleEl.innerHTML = ''
textEl.innerHTML = ''

setTimeout(() => {
   messageContainer.style.scale = 1
   messageContainer.style.opacity = 1
   setTimeout(() => {
      showMessage()
   }, 1000)
}, 500)

const showMessage = () => {
   let title = message.title
   let text = message.text

   if (title != null) {
      write(titleEl, title)
   } else {
      write(titleEl, titlePlaceholder)
   }

   if (text != null) {
      write(textEl, text)
   } else {
      write(textEl, textPlaceholder)
   }
}

const write = (element, content) => {
   Array.from(content).forEach((char, key) => {
      setTimeout(() => {
         element.innerHTML += char
      }, key * 30)
   })
}

const linkTransition = link => {
   navbar.onmouseleave = null
   if (link == 'index') {
      navbar.style.opacity = 0
   }
   messageContainer.style.transition = '0.5s'
   messageContainer.style.opacity = 0
   setTimeout(() => {
      if (link == 'index') {
         document.location.href = '../index.html'
      } else {
         document.location.href = 'gift.html'
      }
   }, 600)
}
