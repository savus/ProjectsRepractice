import { Component } from "react";
import "../css/to-do-list.css";
import { TListItem } from "../types";
import { ListItemComponent } from "./ListItemComponent";
import { isListItemValid } from "../utils/validations";
import { ErrorMessage } from "./shared/ErrorMessage";

type State = {
  itemFormActiveState: "active" | "";
  toolTipText: "Add new item" | "Close";
  newItemInput: string;
  isSubmitted: boolean;
};

export class ToDoList extends Component<{
  useReact: boolean;
  itemsList: TListItem[];
  postNewItem: (item: Omit<TListItem, "id">) => Promise<unknown>;
  updateListItem: (id: number, input: string) => Promise<unknown>;
  deleteListItem: (id: number) => Promise<unknown>;
}> {
  state: State = {
    itemFormActiveState: "",
    toolTipText: "Add new item",
    newItemInput: "",
    isSubmitted: false,
  };

  render() {
    const formInputErrorMessage = "Item must have more than 0 characters";
    const { itemFormActiveState, toolTipText, newItemInput, isSubmitted } =
      this.state;
    const { useReact, itemsList, updateListItem, deleteListItem, postNewItem } =
      this.props;

    const formInputIsValid = isListItemValid(newItemInput);

    const showFormErrorMessage = isSubmitted && !formInputIsValid;

    const doBadInputsExist = !formInputIsValid;

    const sortedList = [...itemsList].sort((a, b) => b.id - a.id);
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
              onSubmit={(e) => {
                e.preventDefault();
                this.setState({ isSubmitted: true });
                if (doBadInputsExist) {
                  alert("Bad Inputs");
                } else {
                  postNewItem({ content: newItemInput });
                  this.setState({
                    newItemInput: "",
                    itemFormActiveState: "",
                    toolTipText: "Add new item",
                  });
                }
              }}
            >
              <h3>New Item</h3>
              <div className="input-primary">
                <input
                  type="text"
                  id="new-item-input"
                  placeholder="type here..."
                  value={newItemInput}
                  onChange={(e) =>
                    this.setState({ newItemInput: e.target.value })
                  }
                />
              </div>
              <ErrorMessage
                message={formInputErrorMessage}
                show={showFormErrorMessage}
              />
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
              {sortedList.map((item) => (
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
