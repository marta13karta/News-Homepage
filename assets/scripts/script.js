const burgerButton = document.querySelector(".burger-btn");
const closeButton = document.querySelector(".close-btn");
const menu = document.querySelector(".mobile-nav");
const overlay = document.createElement("div");
overlay.classList.add("overlay");

burgerButton.addEventListener("click", () => {
  menu.classList.add("active");
  document.body.appendChild(overlay);
  overlay.classList.add("active");
  document.body.classList.add("no-scroll");
});

closeButton.addEventListener("click", () => {
  menu.classList.remove("active");
  document.body.removeChild(overlay);
  document.body.classList.remove("no-scroll");
});
