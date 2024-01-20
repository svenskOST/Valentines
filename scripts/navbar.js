const navbar = document.getElementsByClassName('navbar')[0]
const navLinks = Array.from(document.getElementsByClassName('navLink'))
const indicator = document.getElementById('indicator')

navLinks.forEach((navLink, key) => {
   navLink.onmouseenter = () => {
      deactivateAll()
      activateCurrent(navLink)
      indicator.style.transform = `var(--pos-${key + 1})`
   }
})

const reset = index => {
   deactivateAll()
   activateCurrent(navLinks[index - 1])
   indicator.style.transform = `var(--pos-${index})`
}

const deactivateAll = () => {
   navLinks.forEach(navLink => {
      navLink.getElementsByClassName('icon')[0].classList.remove('iconActive')
      navLink.getElementsByClassName('text')[0].classList.remove('textActive')
   })
}

const activateCurrent = current => {
   current.getElementsByClassName('icon')[0].classList.add('iconActive')
   current.getElementsByClassName('text')[0].classList.add('textActive')
}
