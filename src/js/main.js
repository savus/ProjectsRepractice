document.addEventListener("DOMContentLoaded", function () {
  const useJavascript = false;
  if (useJavascript) {
    const navLinkClass = ".nav-link";
    const navbarClass = ".navbar-nav";
    const active = "active";

    const navlinksNavbar = document.querySelector(navbarClass);

    const setActive = (element, selector) => {
      if (document.querySelector(`${selector}.${active}`) !== null)
        document
          .querySelector(`${selector}.${active}`)
          .classList.remove(active);

      element.classList.add(active);
    };

    navlinksNavbar.addEventListener("click", function (e) {
      const target = e.target;
      if (target.className.includes("nav-link")) {
        setActive(target, navLinkClass);
      }
    });
  }
});
