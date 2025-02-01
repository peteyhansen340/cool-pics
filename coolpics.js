// JavaScript to handle the responsive menu button
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const navMenu = document.querySelector("nav ul.menu");

  // Toggle navigation menu visibility using CSS class
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
});
