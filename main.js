const modal = document.querySelector(".modal__wrap");
const openModalBtn = document.querySelector(".wrap");
const iconCloseModal = document.querySelector(".modal__heading i");
const buttonCloseModal = document.querySelector(".modal__footer button");
const overlay = document.getElementById("modal__overlay");

function toggleModal() {
  modal.classList.toggle("hide");
}

openModalBtn.addEventListener("click", toggleModal);
iconCloseModal.addEventListener("click", toggleModal);
buttonCloseModal.addEventListener("click", toggleModal);
overlay.addEventListener("click", toggleModal)

modal.addEventListener("click", (e) => {
  if (e.target == e.currentTarget) toggleModal();
});


// document.getElementById("modal__btn").onclick = function () {
//   document.getElementById("modal__wrap").style.display = 'block';
// };

// document.getElementById("hide-icon").onclick = function () {
//   document.getElementById("modal__wrap").style.display = 'none';
// };

// document.getElementById("modal__overlay").onclick = function () {
//   document.getElementById("modal__wrap").style.display = 'none';
// };


