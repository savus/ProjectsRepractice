import { Component } from "react";
import "../css/main-header.css";
import { TActiveLinkState } from "../types";

type State = {
  activeLinkState: TActiveLinkState;
  ariaExpandedState: boolean;
};

export class MainHeader extends Component<{ useReact: boolean }> {
  state: State = {
    activeLinkState: "none",
    ariaExpandedState: false,
  };

  render() {
    const { activeLinkState, ariaExpandedState } = this.state;
    const { useReact } = this.props;
    return (
      <>
        <header id="main-header" className="container header-primary">
          <nav className="navbar flex-and-align">
            <div id="site-logo">Logo</div>
            <button
              className="navbar-toggler btn btn-secondary"
              aria-expanded={ariaExpandedState}
              aria-controls="navbarDropdown"
              onClick={() => {
                this.setState({ ariaExpandedState: !ariaExpandedState });
              }}
            >
              <span className="trigram">
                <i className="fa-solid fa-bars"></i>
              </span>
              <span className="x-icon">
                <i className="fa-solid fa-x"></i>
              </span>
            </button>
            <ul className="navbar-nav ul-defaults-none flex-and-align">
              <li
                className={`nav-link ${
                  activeLinkState === "to-do" ? "active" : ""
                }`}
                data-link="to-do"
                onClick={() => {
                  if (useReact) {
                    this.setState({ activeLinkState: "to-do" });
                  }
                }}
              >
                To Do List
              </li>
              <li
                className={`nav-link ${
                  activeLinkState === "item 2" ? "active" : ""
                }`}
                data-link=""
                onClick={() => {
                  if (useReact) {
                    this.setState({ activeLinkState: "item 2" });
                  }
                }}
              >
                Item 2
              </li>
              <li
                className={`nav-link ${
                  activeLinkState === "item 3" ? "active" : ""
                }`}
                data-link=""
                onClick={() => {
                  if (useReact) {
                    this.setState({ activeLinkState: "item 3" });
                  }
                }}
              >
                Item 3
              </li>
              <li
                className={`nav-link ${
                  activeLinkState === "item 4" ? "active" : ""
                }`}
                data-link=""
                onClick={() => {
                  if (useReact) {
                    this.setState({ activeLinkState: "item 4" });
                  }
                }}
              >
                Item 4
              </li>
            </ul>
          </nav>
        </header>
      </>
    );
  }
}
