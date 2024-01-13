const menuBar = document.querySelector(".hamburger");
const menuNav = document.querySelector(".navbar");
const menuList = document.querySelector(".menu");

menuBar.addEventListener("click", () => {
  menuBar.classList.toggle("is-active");
  menuList.classList.toggle("menu-active");
});

window.addEventListener("scroll", () => {
  menuNav.classList.toggle("nav-scroll-active", window.scrollY > 0);

  windowPosition = window.scrollY > 200;
  menuBar.classList.toggle("btn-active", windowPosition);

  menuBar.classList.remove("is-active");
  menuList.classList.remove("menu-active");
});
