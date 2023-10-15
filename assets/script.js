const modal = document.querySelector(".modal");

const overlay = document.querySelector(".overlay");

//Modal Function open
const openModal = () => {
  console.log("Modal is open");
  modal.classList.add("active");
  overlay.classList.add("overlayactive");
};

//Modal Function close

const closeModal = () => {
  modal.classList.remove("active");
  overlay.classList.remove("overlayactive");
};
