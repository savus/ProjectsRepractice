import { Component } from "react";
import { ToDoItem } from "./ToDoItem";
import { ListItem } from "../../types";

const useReact = false;

export class ListComponent extends Component<{ itemsList: ListItem[] }> {
  state = {
    newItemContainer: "",
  };

  render() {
    const { itemsList } = this.props;
    const { newItemContainer } = this.state;
    return (
      <>
        <div className="list-container">
          <div className="to-do-list">
            <header className="list-header">
              <div>To Do List</div>
              <button
                className={`add-item-button`}
                data-toggle="open"
                onClick={() => {
                  if (useReact) {
                    newItemContainer === "open"
                      ? this.setState({ newItemContainer: "" })
                      : this.setState({ newItemContainer: "open" });
                  }
                }}
              >
                +
              </button>
              <div id="new-item-container" className={`${newItemContainer}`}>
                <input type="text" id="new-item-input" />
                <div className="btn-group">
                  <button
                    id="confirm-button"
                    className="btn"
                    onClick={() => {
                      if (useReact) {
                        newItemContainer === "open"
                          ? this.setState({ newItemContainer: "" })
                          : this.setState({ newItemContainer: "open" });
                      }
                    }}
                  >
                    Confirm
                  </button>
                  <button
                    id="cancel-button"
                    className="btn"
                    onClick={() => {
                      if (useReact) {
                        newItemContainer === "open"
                          ? this.setState({ newItemContainer: "" })
                          : this.setState({ newItemContainer: "open" });
                      }
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </header>

            <div className="list-body">
              <div className="list-items">
                <ul className="ul-defaults-none">
                  {itemsList.map((item) => (
                    <ToDoItem key={item.id} item={item} />
                  ))}
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
