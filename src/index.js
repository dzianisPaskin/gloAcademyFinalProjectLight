import { smoothScroll } from "./modules/smoothScroll";
import { openModal } from "./modules/openModal";
import { closeModal } from "./modules/closeModal";
import { mainSlider } from "./modules/mainSlider";
import { sendForm } from "./modules/sendForm";
import { accordion } from "./modules/accordion";


const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  slidesPerGroup: 3,
  loop: true,

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
accordion()
