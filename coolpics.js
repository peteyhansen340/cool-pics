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
        navMenu.classList.remove("show");
      }
    });
  
    // Image modal viewer
    const modal = document.getElementById("image-viewer"); // Using the existing modal from HTML
    const modalImage = modal.querySelector("img");
    const captionText = modal.querySelector(".image-caption");
    const closeBtn = modal.querySelector(".close-viewer");
  
    // Event handler for clicking gallery images
    document.querySelectorAll(".gallery img").forEach((img) => {
      img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImage.src = img.src;
        captionText.innerText = img.alt;
      });
    });
  
    // Close modal on click
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    // Close modal when clicking outside the image
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  
  // Viewer Template Function (kept for future dynamic use)
  function viewerTemplate(imageUrl, altText) {
    return `
      <div class="modal">
          <span class="close">&times;</span>
          <img class="modal-content" src="${imageUrl}" alt="${altText}">
          <div>${altText}</div>
      </div>`;
  }
  