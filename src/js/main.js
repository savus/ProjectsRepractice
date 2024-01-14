document.addEventListener("DOMContentLoaded", function () {
  const useJavascript = true;
  if (useJavascript) {
    const navLinkClass = ".nav-link";
    const navbarClass = ".navbar-nav";

    const active = "active";

    const listItemClass = ".list-item";

    const navbarTogglerClass = ".navbar-toggler";

    const screenClass = ".screen";

    const dataFilter = "[data-filter]";
    const portfolioCardData = "[data-item]";

    const navlinksNavbar = document.querySelector(navbarClass);

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
        const dataLink = target.dataset.link;
        const element = document.getElementById(dataLink);
        setActive(target, navLinkClass);
        setActive(element, screenClass);
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

    const filterLinks = document.querySelectorAll(dataFilter);
    const portfolioCardItems = document.querySelectorAll(portfolioCardData);

    for (const link of filterLinks) {
      link.addEventListener("click", function () {
        setActive(link, dataFilter);
        const filter = this.dataset.filter;
        portfolioCardItems.forEach((card) => {
          if (filter === "all") {
            card.style.display = "block";
          } else if (card.dataset.item === filter) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      });
    }
  }
});
