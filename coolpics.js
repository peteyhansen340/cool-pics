// JavaScript to handle the responsive menu button and image modal viewer

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const navMenu = document.querySelector("nav ul.menu");

  // Toggle navigation menu visibility
  menuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("show");
  });

  // Handle window resize event to reset menu visibility
  window.addEventListener("resize", () => {
      if (window.innerWidth >= 1000) {
          navMenu.classList.remove("show");
          navMenu.style.display = "flex";
      } else {
          navMenu.style.display.remove("show");
          navMenu.style.display = "none";
      }
  });

  // Modal image viewer
  const modal = document.createElement("div");
  modal.id = "imageModal";
  modal.classList.add("modal");
  modal.innerHTML = `
      <span class="close">&times;</span>
      <img class="modal-content" id="modalImage">
      <div id="caption"></div>
  `;
  document.body.appendChild(modal);

  const modalImage = document.getElementById("modalImage");
  const captionText = document.getElementById("caption");
  const closeBtn = document.querySelector(".close");

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

// Viewer Template Function
function viewerTemplate(imageUrl, altText) {
  return `
      <div class="modal">
          <span class="close">&times;</span>
          <img class="modal-content" src="${imageUrl}" alt="${altText}">
          <div>${altText}</div>
      </div>`;
}     
