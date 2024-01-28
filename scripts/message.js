const message = document.getElementById('message')
const titleEl = document.getElementById('title')
const textEl = document.getElementById('text')

const titlePlaceholder = titleEl.innerHTML
const textPlaceholder = textEl.innerHTML

titleEl.innerHTML = ''
textEl.innerHTML = ''

setTimeout(() => {
   message.style.scale = 1
   message.style.opacity = 1
   setTimeout(() => {
      fetchData()
   }, 1000)
}, 500)

const fetchData = async () => {
   try {
      const response = await fetch('../message.json')
      var data = await response.json()

      var title = data.title
      var text = data.text

      if (data.title != null) {
         write(titleEl, title)
      } else {
         write(titleEl, titlePlaceholder)
      }
      if (data.text != null) {
         write(textEl, text)
      } else {
         write(textEl, textPlaceholder)
      }
   } catch (error) {
      console.error('Error: ', error)
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
      document.location.href = `./${link}.html`
   }, 600)
}
