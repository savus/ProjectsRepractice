import "../css/main-header.css";
import { LinkItem } from "./shared/Header/LinkItem";
import { NavbarToggler } from "./shared/Header/NavbarToggler";

export const MainHeader = () => {
  return (
    <>
      <header id="main-header" className="container header-primary">
        <nav className="navbar flex-and-align">
          <div id="site-logo">Logo</div>
          <NavbarToggler />
          <ul className="navbar-nav ul-defaults-none flex-and-align">
            <LinkItem dataLink="to-do-list" />
            <LinkItem dataLink="portfolio-gallery" />
            <LinkItem dataLink="user-info-form" />
            <LinkItem dataLink="item 4" />
          </ul>
        </nav>
      </header>
    </>
  );
};
