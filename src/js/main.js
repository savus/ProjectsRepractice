document.addEventListener("DOMContentLoaded", function () {
  const useJavascript = true;
  if (useJavascript) {
    const navLinkClass = ".nav-link";
    const navbarClass = ".navbar-nav";
    const active = "active";
    const listItemClass = ".list-item";

    const navlinksNavbar = document.querySelector(navbarClass);

    const navbarTogglerClass = ".navbar-toggler";

    const setActive = (element, selector) => {
      if (document.querySelector(`${selector}.${active}`) !== null)
        document
          .querySelector(`${selector}.${active}`)
          .classList.remove(active);

      element.classList.add(active);
    };

    const toggleClass = (element, className) => {
      if (element.className.includes(className)) {
        element.classList.remove(className);
      } else {
        element.classList.add(className);
      }
    };

    navlinksNavbar.addEventListener("click", function (e) {
      const target = e.target;
      if (target.className.includes("nav-link")) {
        setActive(target, navLinkClass);
      }
    });

    const toggleNavDropdown = ({ target }) => {
      const expanded = target.getAttribute("aria-expanded") === "true" || false;
      target.setAttribute("aria-expanded", !expanded);
    };

    const navbarToggler = document.querySelector(navbarTogglerClass);

    navbarToggler.addEventListener("click", toggleNavDropdown);

    const listItems = document.querySelectorAll(listItemClass);

    listItems.forEach((item) => {
      item.addEventListener("click", function (e) {
        const target = e.target;
        if (target.className.includes("edit-button")) {
          toggleClass(item, "edit-mode");
        } else if (target.className.includes("delete-button")) {
          console.log("delete button clicked");
        }
      });
    });
  }
});
