import { smoothScroll } from "./modules/smoothScroll";
import { openModal } from "./modules/openModal";
import { closeModal } from "./modules/closeModal";
import { mainSlider } from "./modules/mainSlider";
import { sendForm } from "./modules/sendForm";
import { accordion } from "./modules/accordion";

smoothScroll();
openModal();
closeModal();
mainSlider();
sendForm({ formId: "form" });
accordion()
