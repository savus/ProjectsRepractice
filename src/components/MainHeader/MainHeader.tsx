import "./css/main-header.css";
import "./css/base.css";
import "./css/theme.css";
import "./css/responsive.css";

import { LinkItem } from "../shared/Header/LinkItem";
import { NavbarToggler } from "../shared/Header/NavbarToggler";
import { DropdownMenu } from "../shared/Header/DropdownMenu";

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
            <DropdownMenu />
          </ul>
        </nav>
      </header>
    </>
  );
};
