document.addEventListener("DOMContentLoaded", function () {
  const useJavascript = false;
  if (useJavascript) {
    const open = "open";
    const dataToggle = "[data-toggle]";
    const active = "active";
    const confirmButton = "confirm-button";
    const cancelButton = "cancel-button";
    const navbarClass = ".navbar";
    const navbarLink = ".navbar-link";

    const setActive = (element, selector) => {
      if (document.querySelector(`${selector}.${active}`) !== null) {
        document
          .querySelector(`${selector}.${active}`)
          .classList.remove(active);
      }
      element.classList.add(active);
    };

    /* main header */

    const navbar = document.querySelector(navbarClass);

    navbar.addEventListener("click", function (e) {
      const target = e.target;
      if (target.className.includes("navbar-link")) {
        setActive(target, navbarLink);
      }
    });

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
