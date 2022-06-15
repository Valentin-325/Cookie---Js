const hamburger = document.querySelector(".hamburger");
const NavMenu = document.querySelector(".menu-btn");


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    NavMenu.classList.toggle("active");

})

document.querySelectorAll(".linkuri").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    NavMenu.classList.remove("active");
}))

