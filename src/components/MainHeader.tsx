import { Component } from "react";
import "../css/main-header.css";
import { TActiveLinkState } from "../types";

type State = {
  activeLinkState: TActiveLinkState;
};

export class MainHeader extends Component<{ useReact: boolean }> {
  state: State = {
    activeLinkState: "none",
  };

  render() {
    const { activeLinkState } = this.state;
    const { useReact } = this.props;
    return (
      <>
        <header id="main-header" className="container header-primary">
          <nav className="navbar flex-and-align">
            <div id="site-logo">Logo</div>
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
