// Store modal elements for easy access
const modals = Array.from(document.querySelectorAll(".modal"));

// Open the modal connected to the clicked button
const handleOpenClick = (event) => {
  const button = event.currentTarget;
  const targetId = button.dataset.modalTarget;
  const modal = document.getElementById(targetId);

  if (!modal) {
    return;
  }

  // Use native dialog API to open the modal
  modal.showModal();
};

// Close the modal when clicking a close button
const handleCloseClick = (event) => {
  const button = event.currentTarget;
  const modal = button.closest(".modal");

  if (!modal) {
    return;
  }

  modal.close();
};

// Close the modal when clicking outside the content box
const handleBackdropClick = (event) => {
  const modal = event.currentTarget;
  const rect = modal.getBoundingClientRect();

  const clickIsInside =
    event.clientX >= rect.left &&
    event.clientX <= rect.right &&
    event.clientY >= rect.top &&
    event.clientY <= rect.bottom;

  if (clickIsInside) {
    return;
  }

  modal.close();
};

// Wire up open buttons
const openButtons = Array.from(document.querySelectorAll(".nav-button"));
openButtons.forEach((button) => {
  button.addEventListener("click", handleOpenClick);
});

// Wire up close buttons
const closeButtons = Array.from(document.querySelectorAll("[data-close]"));
closeButtons.forEach((button) => {
  button.addEventListener("click", handleCloseClick);
});

// Close when clicking the backdrop
modals.forEach((modal) => {
  modal.addEventListener("click", handleBackdropClick);
});
