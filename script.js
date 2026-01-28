const modals = Array.from(document.querySelectorAll(".modal"));

const handleOpenClick = (event) => {
  const button = event.currentTarget;
  const targetId = button.dataset.modalTarget;
  const modal = document.getElementById(targetId);

  if (!modal) {
    return;
  }

  modal.showModal();
};

const handleCloseClick = (event) => {
  const button = event.currentTarget;
  const modal = button.closest(".modal");

  if (!modal) {
    return;
  }

  modal.close();
};

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

const openButtons = Array.from(document.querySelectorAll(".nav-button"));
openButtons.forEach((button) => {
  button.addEventListener("click", handleOpenClick);
});


const closeButtons = Array.from(document.querySelectorAll("[data-close]"));
closeButtons.forEach((button) => {
  button.addEventListener("click", handleCloseClick);
});

modals.forEach((modal) => {
  modal.addEventListener("click", handleBackdropClick);
});
