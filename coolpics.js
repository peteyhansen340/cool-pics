// JavaScript to handle the responsive menu button
document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector(".menu-btn");
    const navMenu = document.querySelector("nav ul");
  
    // Toggle navigation menu visibility
    menuBtn.addEventListener("click", () => {
      if (navMenu.style.display === "block") {
        navMenu.style.display = "none";
      } else {
        navMenu.style.display = "block";
      }
    });
  });
  