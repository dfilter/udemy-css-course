const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const planButton = document.querySelectorAll(".plan button");
const cancelButton = document.querySelector(".modal__action--negative");
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");

function showModalBackdrop() {
  backdrop.style.display = "block";
  modal.style.display = "block";
}

function hideModalBackdrop() {
  backdrop.style.display = "none";
  modal.style.display = "none";
  mobileNav.style.display = "none";
}

planButton.forEach((button) => {
  button.addEventListener("click", showModalBackdrop);
});

backdrop.addEventListener("click", hideModalBackdrop);
cancelButton.addEventListener("click", hideModalBackdrop);

toggleButton.addEventListener("click", () => {
  mobileNav.style.display = "block";
  backdrop.style.display = "block";
});
