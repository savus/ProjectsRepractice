import { Component } from "react";

export class NavbarToggler extends Component {
  state = {
    ariaExpandedState: false,
  };

  render() {
    const { ariaExpandedState } = this.state;
    return (
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
    );
  }
}
