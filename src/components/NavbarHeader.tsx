import { useState } from "react";
import { TNavbarLinkActive } from "../types";

export const NavbarHeader = ({
  useReact,
  logo,
}: {
  useReact: boolean;
  logo: string;
}) => {
  const [anchorTagActive, setAnchorTagActive] =
    useState<TNavbarLinkActive>("none");
  return (
    <>
      <header className="main-header">
        <nav className="navbar">
          <div className="logo">{logo}</div>
          <ul className="navbar-nav ul-defaults-none">
            <li>
              <a
                href="#"
                className={`navbar-link ${
                  anchorTagActive === "To Do List" ? "active" : ""
                }`}
                onClick={() => {
                  if (useReact) {
                    setAnchorTagActive("To Do List");
                  }
                }}
                data-open="to-do"
              >
                To Do List
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`navbar-link ${
                  anchorTagActive === "Item 2" ? "active" : ""
                }`}
                onClick={() => {
                  if (useReact) {
                    setAnchorTagActive("Item 2");
                  }
                }}
              >
                Item 2
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`navbar-link ${
                  anchorTagActive === "Item 3" ? "active" : ""
                }`}
                onClick={() => {
                  if (useReact) {
                    setAnchorTagActive("Item 3");
                  }
                }}
              >
                Item 3
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`navbar-link ${
                  anchorTagActive === "Item 4" ? "active" : ""
                }`}
                onClick={() => {
                  if (useReact) {
                    setAnchorTagActive("Item 4");
                  }
                }}
              >
                Item 4
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`navbar-link ${
                  anchorTagActive === "Item 5" ? "active" : ""
                }`}
                onClick={() => {
                  if (useReact) {
                    setAnchorTagActive("Item 5");
                  }
                }}
              >
                Item 5
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
