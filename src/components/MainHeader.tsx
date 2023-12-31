import { Component } from "react";
import "../css/main-header.css";
import { TActiveLinkState } from "../types";

type State = {
  ariaExpandedState: boolean;
};

export class MainHeader extends Component<{
  useReact: boolean;
  activeLinkState: TActiveLinkState;
  setActiveLinkState: (activeLinkState: TActiveLinkState) => void;
  useOptimisticRendering: boolean;
  setUseOptimisticRendering: (optimisticRendering: boolean) => void;
}> {
  state: State = {
    ariaExpandedState: false,
  };

  render() {
    const { ariaExpandedState } = this.state;
    const {
      useReact,
      activeLinkState,
      setActiveLinkState,
      useOptimisticRendering,
      setUseOptimisticRendering,
    } = this.props;
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
                    setActiveLinkState("to-do");
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
                    setActiveLinkState("item 2");
                    setUseOptimisticRendering(!useOptimisticRendering);
                  }
                }}
              >
                {`${
                  useOptimisticRendering ? "Turn off" : "Turn on"
                } Optimistic Rendering`}
              </li>
              <li
                className={`nav-link ${
                  activeLinkState === "item 3" ? "active" : ""
                }`}
                data-link=""
                onClick={() => {
                  if (useReact) {
                    setActiveLinkState("item 3");
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
                    setActiveLinkState("item 4");
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
