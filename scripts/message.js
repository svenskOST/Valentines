const message = document.getElementById('message')
const titleEl = document.getElementById('title')
const textEl = document.getElementById('text')

const titlePlaceholder = 'Ditt meddelande'
const textPlaceholder =
   'Här visas ditt personliga meddelande till mottagaren av webbsidan. Följ instruktionerna i guide.txt för att skriva ditt meddelande.'

const titleContent = titleEl.innerHTML
const textContent = textEl.innerHTML

titleEl.innerHTML = ''
textEl.innerHTML = ''

setTimeout(() => {
   message.style.scale = 1
   message.style.opacity = 1
   setTimeout(() => {
      showMessage()
   }, 1000)
}, 500)

const showMessage = () => {
   if (titleContent != 'Skriv din titel här') {
      write(titleEl, titleContent)
   } else {
      write(titleEl, titlePlaceholder)
   }

   if (textContent != 'Skriv din text här') {
      write(textEl, textContent)
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
   message.style.transition = '0.5s'
   message.style.opacity = 0
   setTimeout(() => {
      if (link == 'index') {
         document.location.href = '../index.html'
      } else {
         document.location.href = 'gift.html'
      }
   }, 600)
}
