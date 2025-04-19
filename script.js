// Lightbox functionality
document.addEventListener("DOMContentLoaded", function () {
  const photos = document.querySelectorAll(".photo-item");
  const modal = document.createElement("div");
  modal.className = "modal";

  const modalContent = document.createElement("img");
  modalContent.className = "modal-content";

  const closeSpan = document.createElement("span");
  closeSpan.className = "close";
  closeSpan.innerHTML = "&times;";

  modal.appendChild(closeSpan);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  // Open modal when photo is clicked
  photos.forEach((photo) => {
    photo.addEventListener("click", function () {
      modal.style.display = "block";
      modalContent.src = this.src;
      modalContent.alt = this.alt;
    });
  });

  // Close modal
  closeSpan.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Close when clicking outside image
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Keyboard navigation
  document.addEventListener("keydown", function (e) {
    if (modal.style.display === "block") {
      if (e.key === "Escape") {
        modal.style.display = "none";
      }
    }
  });
});
