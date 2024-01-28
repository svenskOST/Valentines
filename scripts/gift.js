onload = () => {
   const c = setTimeout(() => {
      document.body.classList.remove('not-loaded')
      navbar.style.bottom = '-' + navbar.clientHeight + 'px'
      clearTimeout(c)
   }, 1000)
}
