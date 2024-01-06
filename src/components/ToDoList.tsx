import { Component } from "react";
import "../css/to-do-list.css";

type State = {
  itemFormActiveState: "active" | "";
  toolTipText: "Add new item" | "Close";
};

export class ToDoList extends Component<{ useReact: boolean }> {
  state: State = {
    itemFormActiveState: "",
    toolTipText: "Add new item",
  };

  render() {
    const { itemFormActiveState, toolTipText } = this.state;
    const { useReact } = this.props;
    return (
      <>
        <div id="to-do-list" className="container-md">
          <header id="to-do-header" className="header-primary flex-centered">
            <div className="title">To Do List</div>
            <div
              className="add-item-button tooltip-above"
              data-tooltip={`${toolTipText}`}
              onClick={() => {
                if (useReact) {
                  itemFormActiveState === "active"
                    ? this.setState({
                        itemFormActiveState: "",
                        toolTipText: "Add new item",
                      })
                    : this.setState({
                        itemFormActiveState: "active",
                        toolTipText: "Close",
                      });
                }
              }}
            >
              +
            </div>
            <form
              action="#"
              id="add-item-form"
              className={`flex-centered ${itemFormActiveState}`}
            >
              <h3>New Item</h3>
              <div className="input-primary">
                <input
                  type="text"
                  id="new-item-input"
                  placeholder="type here..."
                />
              </div>
              <input
                type="submit"
                id="add-item-confirm"
                value="Confirm"
                className="btn btn-primary"
              />
            </form>
          </header>
          <div id="to-do-body">
            <ul id="list-container" className="ul-defaults-none">
              <li className="list-item edit-mode flex-centered">
                <div className="item-content">Shop</div>
                <div className="item-input-container input-primary">
                  <input
                    type="text"
                    className="item-input"
                    placeholder="Shop"
                  />
                </div>
                <div className="btn-group">
                  <button
                    className="edit-button btn btn-primary tooltip-above"
                    data-tooltip="Click to edit"
                  >
                    Edit
                  </button>
                  <button
                    className="delete-button btn btn-primary tooltip-below"
                    data-tooltip="Click to delete"
                  >
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
