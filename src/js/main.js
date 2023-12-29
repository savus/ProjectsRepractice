document.addEventListener("DOMContentLoaded", function () {
  const useJavascript = true;
  if (useJavascript) {
    const open = "open";
    const dataToggle = "[data-toggle]";
    const confirmButton = "confirm-button";
    const cancelButton = "cancel-button";
    /* TO DO LIST APP */

    const addItemButtonClass = ".add-item-button";
    const newItemModalButton = document.querySelector(addItemButtonClass);
    const newItemModalId = "new-item-container";
    const newItemModal = document.getElementById(newItemModalId);
    const newItemButtons = document.querySelectorAll(".btn-group button");

    const toggleOpen = (element) => {
      if (element.className.includes(open)) element.classList.remove(open);
      else element.classList.add(open);
    };

    newItemModalButton.addEventListener("click", () => {
      toggleOpen(newItemModal);
    });

    newItemButtons.forEach((button) => {
      button.addEventListener("click", function () {
        toggleOpen(newItemModal);
      });
    });
  }
});
