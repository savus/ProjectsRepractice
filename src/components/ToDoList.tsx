import { Component } from "react";
import "../css/to-do-list.css";
import { TListItem } from "../types";
import { ListItemComponent } from "./ListItemComponent";

type State = {
  itemFormActiveState: "active" | "";
  toolTipText: "Add new item" | "Close";
};

export class ToDoList extends Component<{
  useReact: boolean;
  itemsList: TListItem[];
  updateListItem: (id: number, input: string) => Promise<unknown>;
  deleteListItem: (id: number) => Promise<unknown>;
}> {
  state: State = {
    itemFormActiveState: "",
    toolTipText: "Add new item",
  };

  render() {
    const { itemFormActiveState, toolTipText } = this.state;
    const { useReact, itemsList, updateListItem, deleteListItem } = this.props;
    return (
      <>
        <div id="to-do-list" className="container-md">
          <header id="to-do-header" className="header-primary flex-centered">
            <div className="title">To Do List</div>
            <div
              className="add-item-button"
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
              {itemsList.map((item) => (
                <ListItemComponent
                  key={item.id}
                  item={item}
                  updateListItem={updateListItem}
                  deleteListItem={deleteListItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
}
