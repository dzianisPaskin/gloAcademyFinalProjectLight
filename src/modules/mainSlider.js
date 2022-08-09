export const mainSlider = () => {
 
  const slides = document.querySelectorAll(".item");
  const dots = document.querySelectorAll('.dot')
  const tableText = document.querySelectorAll('.table')
  
  
  let currentSlide = 0;


  
  const autoSlide = () => {
    slides[currentSlide].classList.remove('item-active')
    dots[currentSlide].classList.remove('dot-active')
    tableText[currentSlide].style.visibility = 'hidden'
    tableText[currentSlide].style.opacity = 0
    currentSlide++

    if(currentSlide >= slides.length) {
      currentSlide = 0
    }
    slides[currentSlide].classList.add('item-active')
    dots[currentSlide].classList.add('dot-active')
    tableText[currentSlide].style.visibility = 'visible'
    tableText[currentSlide].style.opacity = 1
  };

  const startSlide = () => {
    setInterval(autoSlide, 3000)
  }

  const stopSlide = () => {};

  startSlide()

};
