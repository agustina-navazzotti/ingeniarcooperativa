const buttonMenu = document.querySelector("nav button");
const navMenu = document.querySelector("nav ul");

buttonMenu.addEventListener("click", () => {
    navMenu.classList.toggle("menu-visible")
  })

