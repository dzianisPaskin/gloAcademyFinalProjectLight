import { smoothScroll } from "./modules/smoothScroll";
import { openModal } from "./modules/openModal";
import { closeModal } from "./modules/closeModal";
import { mainSlider } from "./modules/mainSlider";
import { maskPhone } from "./modules/maskPhone";
import { sendForm } from "./modules/sendForm";
import { accordion } from "./modules/accordion";

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
maskPhone({ formId: "form" }, '+7 (____) __ __ __');
sendForm({ formId: "form" });
accordion();

