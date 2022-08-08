export const smoothScroll = () => {
  const menuItems = document.querySelectorAll(".top-menu>.top-menu__list>li>a");
  const mainItem = document.querySelector(`a[href='#services']`)


  mainItem.addEventListener('click', (e) => {
    e.preventDefault()
    const blockID = mainItem.getAttribute('href')
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })

  menuItems.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault()

      const blockID = anchor.getAttribute('href');

      document.querySelector(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  })
}