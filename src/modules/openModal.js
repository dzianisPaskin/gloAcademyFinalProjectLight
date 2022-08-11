export const openModal = () => {

  const overlay = document.querySelector(".modal-overlay");
  const modal = document.querySelector(".modal-callback");
  const orderCall = document.querySelectorAll(".fancyboxModal");


  window.addEventListener("click", (e) => {
    const target = e.target.closest(".fancyboxModal");
    if (target) {
      orderCall.forEach((el) => {
        if (el === target) overlay.style.display = "block";
        modal.style.display = "block";
      });
    }
  });
};
