import { useState } from "react";
import "./css/to-do-list.css";
import "./css/base.css";
import "./css/theme.css";
import "./css/responsive.css";
import { ListItemComponent } from "./ListItemComponent";
import { isListItemValid } from "../../utils/validations";
import { ErrorMessage } from "../shared/ErrorMessage";
import { useListItems } from "../providers/ListItemsProvider";

export const ToDoList = () => {
  const { allListItems, postNewItemOpt, isLoading } = useListItems();

  const [itemFormActiveState, setItemFormActiveState] = useState<"active" | "">(
    ""
  );

  const [toolTipText, setToolTipText] = useState<"Add new item" | "Close">(
    "Add new item"
  );

  const [newItemInput, setNewInput] = useState("");

  const [submitAttempted, setSubmitAttempted] = useState(false);

  const formInputErrorMessage = "Item must have more than 0 characters";

  const formInputIsValid = isListItemValid(newItemInput);

  const showFormErrorMessage = submitAttempted && !formInputIsValid;

  const doBadInputsExist = !formInputIsValid;

  const sortedList = [...allListItems].sort((a, b) => b.id - a.id);

  const resetValues = () => {
    setSubmitAttempted(false);
  };

  return (
    <>
      <div className="container-md">
        <header id="to-do-header" className="header-primary flex-and-align">
          <div className="title">To Do List</div>
          <div
            className="add-item-button btn btn-secondary"
            data-tooltip={`${toolTipText}`}
            onClick={() => {
              if (itemFormActiveState === "active") {
                setItemFormActiveState("");
                setToolTipText("Add new item");
              } else {
                setItemFormActiveState("active");
                setToolTipText("Close");
              }
            }}
          >
            +
          </div>
          <form
            action="#"
            id="add-item-form"
            className={`flex-and-align ${itemFormActiveState}`}
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitAttempted(true);
              if (!doBadInputsExist) {
                if (!isLoading) {
                  postNewItemOpt({ content: newItemInput });
                  resetValues();
                }
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
                onChange={(e) => setNewInput(e.target.value)}
              />
            </div>
            <ErrorMessage
              message={formInputErrorMessage}
              show={showFormErrorMessage}
            />
            <input
              type="submit"
              id="add-item-confirm"
              value={`${isLoading ? "Waiting..." : "Confirm"}`}
              className="btn btn-primary"
            />
          </form>
        </header>
        <div id="to-do-body">
          <ul id="list-container" className="ul-defaults-none">
            {sortedList.map((item) => (
              <ListItemComponent key={item.id} item={item} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
