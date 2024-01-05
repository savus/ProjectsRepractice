import { Component } from "react";
import "../css/to-do-list.css";

export class ToDoList extends Component {
  render() {
    return (
      <>
        <div id="to-do-list" className="container-sm">
          <header id="to-do-header" className="header-primary flex-centered">
            <div className="title">To Do List</div>
            <div className="add-item-button" data-tooltip="< Add New Item">
              +
            </div>
          </header>
          <div id="to-do-body">
            <ul id="list-container" className="ul-defaults-none">
              <li className="list-item flex-centered">
                <div className="item-content">Shop</div>
                <input type="text" className="item-input" placeholder="Shop" />
                <div className="btn-group">
                  <button className="edit-button">Edit</button>
                  <button className="delete-button">Delete</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
