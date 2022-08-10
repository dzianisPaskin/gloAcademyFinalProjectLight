export const openModal = () => {
  const header = document.querySelector(".header");
  const overlay = document.querySelector(".modal-overlay");
  const modal = document.querySelector(".modal-callback");
  const btnCall = document.querySelector('.button-services')

  header.addEventListener("click", (e) => {
    if (e.target.closest(".callback-btn")) {

      overlay.style.display = "block";
      modal.style.display = "block";
    }
  });

  btnCall.addEventListener('click', (e) => {
    overlay.style.display = "block";
    modal.style.display = "block";
  })
};
