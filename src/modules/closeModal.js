export const closeModal = () => {
  const overlay = document.querySelector(".modal-overlay");
  const modal = document.querySelector(".modal-callback");

  overlay.addEventListener("click", (e) => {
    if (e.target.closest(".modal-overlay")) {
      modal.style.display = "none";
      overlay.style.display = "none";
    }
  });
  modal.addEventListener("click", (e) => {
    if (e.target.closest(".modal-close")) {
      overlay.style.display = "none";
      modal.style.display = "none";
    }
  });
};
