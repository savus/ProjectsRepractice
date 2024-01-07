import { useState } from "react";
import { TListItem } from "../types";

export const ListItemComponent = ({
  item: { id, content },
  updateListItem,
  deleteListItem,
}: {
  item: TListItem;
  updateListItem: (id: number, input: string) => Promise<unknown>;
  deleteListItem: (id: number) => Promise<unknown>;
}) => {
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
          data-tooltip="Click to edit"
          onClick={() => {
            if (editModeState === "") {
              setEditModeState("edit-mode");
            } else {
              setEditModeState("");
              updateListItem(id, itemInputState);
            }
          }}
        >
          Edit
        </button>
        <button
          className="delete-button btn btn-primary"
          data-tooltip="Click to delete"
          onClick={() => {
            deleteListItem(id);
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
};
