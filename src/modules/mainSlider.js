export const mainSlider = () => {
  const slides = document.querySelectorAll(".item");
  const tableText = document.querySelectorAll(".table");
  let currentSlide = 0;
  tableText[currentSlide].classList.add("active")
  setTimeout(() => tableText[currentSlide].classList.remove("active"), 2700);

  const showText = () => {
    slides[currentSlide].classList.add("item-active");

    setTimeout(() => tableText[currentSlide].classList.add("active"), 300);
  };
  const hideText = () => {
    slides[currentSlide].classList.remove("item-active");

    setTimeout(() => tableText[currentSlide].classList.remove("active"), 2700);
  };

  const autoSlide = () => {
    hideText();

    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    showText();
  };

  const startSlide = () => {
    setInterval(autoSlide, 3000);
  };

  startSlide();
};
