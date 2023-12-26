import { Component } from "react";

export class ListComponent extends Component {
  render() {
    return (
      <>
        <div className="list-container">
          <div className="to-do-list">
            <header className="list-header">
              <div>To Do List</div>
              <button className="add-item-button">X</button>
            </header>

            <div className="list-body">
              <div className="list-items">
                <ul className="ul-defaults-none">
                  <li className="list-item">
                    <div className="item-text">Item 1</div>
                    <input type="text" id="item1" />
                    <div className="btn-group">
                      <button className="edit-button btn">Edit</button>
                      <button className="delete-button btn">Delete</button>
                    </div>
                  </li>
                  <li className="list-item">
                    <div className="item-text">Item 1</div>
                    <input type="text" id="item1" />
                    <div className="btn-group">
                      <button className="edit-button btn">Edit</button>
                      <button className="delete-button btn">Delete</button>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="open-list-tab">
                <i className="fa-solid fa-chevron-up"></i>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
