document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const header = document.querySelector(".header");
  const headerInfo = document.querySelector(".header__info");
  const headerUl = document.querySelector(".header-ul");
  const headerButtons = document.querySelector(".header__info__buttons");

  function closeMenu() {
    header.classList.remove("active");
    headerInfo.classList.remove("active");
    headerUl.classList.remove("active");
    headerButtons.classList.remove("active");
  }

  menuIcon.addEventListener("click", function () {
    header.classList.toggle("active");
    headerInfo.classList.toggle("active");
    headerUl.classList.toggle("active");
    headerButtons.classList.toggle("active");
  });

  const links = document.querySelectorAll(".header__info__links a");
  links.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("scroll", closeMenu);
});
