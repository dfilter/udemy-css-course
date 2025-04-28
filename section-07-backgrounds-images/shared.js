const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const planButton = document.querySelectorAll(".plan button");
const cancelButton = document.querySelector(".modal__action--negative");

function showModalBackdrop() {
  backdrop.style.display = "block";
  modal.style.display = "block";
}

function hideModalBackdrop() {
  backdrop.style.display = "none";
  modal.style.display = "none";
}

planButton.forEach((button) => {
  button.addEventListener("click", showModalBackdrop);
});

backdrop.addEventListener("click", hideModalBackdrop);
cancelButton.addEventListener("click", hideModalBackdrop);
