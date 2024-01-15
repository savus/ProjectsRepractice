import { useState } from "react";
import { TListItem } from "../types";
import { useListItems } from "./providers/ListItemsProvider";

export const ListItemComponent = ({
  item: { id, content },
  isLoading,
}: {
  item: TListItem;
  isLoading: boolean;
}) => {
  const { updateListItemOpt, deleteListItemOpt } = useListItems();
  const [editModeState, setEditModeState] = useState<"edit-mode" | "">("");
  const [itemInputState, setItemInputState] = useState(content);
  return (
    <li className={`list-item flex-and-align ${editModeState}`}>
      <div className="item-content">{content}</div>
      <div className="item-input-container input-primary">
        <input
          type="text"
          className="item-input"
          placeholder={itemInputState}
          value={itemInputState}
          onChange={(e) => setItemInputState(e.target.value)}
        />
      </div>
      <div className="btn-group">
        <button
          className="edit-button btn btn-primary"
          data-tooltip={`${isLoading ? "Waiting..." : "Click to edit"}`}
          onClick={() => {
            if (editModeState === "") {
              setEditModeState("edit-mode");
            } else {
              setEditModeState("");
              updateListItemOpt(id, itemInputState);
            }
          }}
          disabled={isLoading}
        >
          {`${isLoading ? "Waiting..." : "Edit"}`}
        </button>
        <button
          className="delete-button btn btn-primary"
          data-tooltip={`${isLoading ? "Waiting..." : "Click to delete"}`}
          onClick={() => {
            deleteListItemOpt(id);
          }}
          disabled={isLoading}
        >
          {`${isLoading ? "Waiting..." : "Delete"}`}
        </button>
      </div>
    </li>
  );
};
