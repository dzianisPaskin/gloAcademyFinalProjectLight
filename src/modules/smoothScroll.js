export const smoothScroll = () => {
  const menuItems = document.querySelectorAll(".header-link");
  const mainItem = document.querySelector(`a[href='#services']`);
  const arrowUp = document.querySelector(".up");

  const scroll = (e) => {
    e.preventDefault();
    const blockID = mainItem.getAttribute("href");
    document.querySelector(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  arrowUp.addEventListener("click", scroll);
  mainItem.addEventListener("click", scroll);
  menuItems.forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();

      const blockID = anchor.getAttribute("href");

      document.querySelector(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });

  window.addEventListener("scroll", (e) => {
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop < 620) {
      arrowUp.style.display = "none";
    } else {
      arrowUp.style.display = "block";
    }
  });
};
