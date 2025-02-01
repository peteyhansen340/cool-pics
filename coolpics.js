document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.querySelector(".menu-btn");
    const navMenu = document.querySelector("nav ul.menu");
  
    if (!menuBtn || !navMenu) {
      console.error("Menu button or navigation menu not found.");
      return;
    }
  
    // Toggle navigation menu visibility
    menuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  
    // Handle window resize event to reset menu visibility on larger screens
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1000) {
        navMenu.classList.add("show"); // Show the menu by default on larger screens
      } else {
        navMenu.classList.remove("show"); // Hide the menu on smaller screens
      }
    });
  
    // Image modal viewer
    const modal = document.getElementById("image-viewer");
    const modalImage = modal.querySelector("img");
    const captionText = modal.querySelector(".image-caption");
    const closeBtn = modal.querySelector(".close-btn");
  
    // Event handler for clicking gallery images
    document.querySelectorAll(".gallery img").forEach((img) => {
      img.addEventListener("click", () => {
        modal.classList.add("show");
        modalImage.src = img.src;
        captionText.innerText = img.alt;
      });
    });
  
    // Close modal on click
    closeBtn.addEventListener("click", () => {
      modal.classList.remove("show");
    });
  
    // Close modal when clicking outside the image
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("show");
      }
    });
  });
  