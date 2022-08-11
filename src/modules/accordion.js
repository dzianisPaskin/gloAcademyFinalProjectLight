export const accordion = () => {
  const accordion = document.querySelector(".accordeon");
  const elem = accordion.querySelectorAll(".element");
  const elemContent = accordion.querySelectorAll(".element-content");

  accordion.addEventListener("click", (e) => {
    const target = e.target.closest(".element");

    if (!target.classList.contains("active")) {
      elem.forEach((el, ind) => {
        if (el === target) {
          elemContent[ind].style.display = "block";
          el.classList.add("active");
        }
      });
    } else {
      elem.forEach((el, ind) => {
        if (el === target) {
          el.classList.remove("active");
          elemContent[ind].style.display = "none";
        }
      });
    }
  });
};
