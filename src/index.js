import { smoothScroll } from "./modules/smoothScroll";
import { openModal } from "./modules/openModal";
import { closeModal } from "./modules/closeModal";
import { mainSlider } from "./modules/mainSlider";
import { sendForm } from "./modules/sendForm";
import { accordion } from "./modules/accordion";
import { maskPhone } from "./modules/maskPhone";

const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  slidesPerGroup: 3,
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1124: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  navigation: {
    prevEl: ".arrow-left",
    nextEl: ".arrow-right",
  },
});

smoothScroll();
openModal();
closeModal();
mainSlider();
sendForm({ formId: "form" });
accordion();

maskPhone({ formId: "form" }, '+7 (__) --');
