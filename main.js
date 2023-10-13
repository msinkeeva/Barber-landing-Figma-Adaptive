const menuBtn = document.querySelector(".menu__btn")
const menuMobile = document.querySelector(".header__menu-list")
const hideBtn = document.querySelector(".hide-img")

menuBtn.addEventListener("click", () => {
  menuMobile.classList.add("menu__open")
})

hideBtn.addEventListener("click", () => {
  menuMobile.classList.remove("menu__open")
})