const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const planButton = document.querySelectorAll(".plan button");
const cancelButton = document.querySelector(".modal__action--negative");
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");

function showModalBackdrop() {
  backdrop.classList.add("open");
  modal.classList.add("open");
}

function hideModalBackdrop() {
  backdrop.classList.remove("open");
  modal.classList.remove("open");
  mobileNav.classList.remove("open");
}

planButton.forEach((button) => {
  button.addEventListener("click", showModalBackdrop);
});

backdrop.addEventListener("click", hideModalBackdrop);
cancelButton.addEventListener("click", hideModalBackdrop);

toggleButton.addEventListener("click", () => {
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});
