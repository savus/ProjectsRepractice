import "../css/main-header.css";
import { LinkItem } from "./shared/Header/LinkItem";
import { NavbarToggler } from "./shared/Header/NavbarToggler";

export const MainHeader = ({ useReact }: { useReact: boolean }) => {
  return (
    <>
      <header id="main-header" className="container header-primary">
        <nav className="navbar flex-and-align">
          <div id="site-logo">Logo</div>
          <NavbarToggler />
          <ul className="navbar-nav ul-defaults-none flex-and-align">
            <LinkItem useReact={useReact} dataLink="to-do-list" />
            <LinkItem useReact={useReact} dataLink="portfolio-gallery" />
            <LinkItem useReact={useReact} dataLink="item 3" />
            <LinkItem useReact={useReact} dataLink="item 4" />
          </ul>
        </nav>
      </header>
    </>
  );
};
