import { Component } from "react";
import "../css/to-do-list.css";

export class ToDoList extends Component {
  render() {
    return (
      <>
        <div id="to-do-list" className="container-md">
          <header id="to-do-header" className="header-primary flex-centered">
            <div className="title">To Do List</div>
            <div className="add-item-button" data-tooltip="Add New Item">
              +
            </div>
            <form action="#" id="add-item-form" className="flex-centered">
              <h3>New Item</h3>
              <div className="primary-input">
                <input
                  type="text"
                  id="new-item-input"
                  placeholder="type here..."
                />
              </div>
            </form>
          </header>
          <div id="to-do-body">
            <ul id="list-container" className="ul-defaults-none">
              <li className="list-item edit-mode flex-centered">
                <div className="item-content">Shop</div>
                <div className="item-input-container primary-input">
                  <input
                    type="text"
                    className="item-input"
                    placeholder="Shop"
                  />
                </div>
                <div className="btn-group">
                  <button className="edit-button btn btn-primary">Edit</button>
                  <button className="delete-button btn btn-primary">
                    Delete
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
