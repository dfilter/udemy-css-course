const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const planButton = document.querySelectorAll(".plan button");
const cancelButton = document.querySelector(".modal__action--negative");
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");

function openModal() {
  backdrop?.classList.add("open");
  modal?.classList.add("open");
}

function closeModal() {
  backdrop?.classList.remove("open");
  modal?.classList.remove("open");
  mobileNav?.classList.remove("open");
}

planButton.forEach((button) => {
  button.addEventListener("click", openModal);
});
toggleButton?.addEventListener("click", () => {
  backdrop?.classList.add("open");
  mobileNav?.classList.add("open");
});

backdrop?.addEventListener("click", closeModal);
cancelButton?.addEventListener("click", closeModal);
