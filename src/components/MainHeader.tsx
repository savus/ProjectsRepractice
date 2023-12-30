import { Component } from "react";
import "../css/main-header.css";

export class MainHeader extends Component {
  render() {
    return (
      <>
        <header id="main-header" className="flex-centered">
          <div id="site-logo">Logo</div>
          <nav className="navbar">
            <ul className="navbar-nav ul-defaults-none flex-centered">
              <li className="nav-link" data-link="to-do">
                To Do List
              </li>
              <li className="nav-link" data-link="">
                To Do List 2
              </li>
              <li className="nav-link" data-link="">
                To Do List 3
              </li>
              <li className="nav-link" data-link="">
                To Do List 4
              </li>
            </ul>
          </nav>
        </header>
      </>
    );
  }
}
