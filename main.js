const menuBtn = document.querySelector(".menu__btn")
const menuMobile = document.querySelector(".header__menu-list")
const hideBtn = document.querySelector(".hide-img")

menuBtn.addEventListener("click", () => {
  menuMobile.classList.toggle("menu__open")
})

hideBtn.addEventListener("click", () => {
  menuMobile.classList.toggle("menu__open")
})