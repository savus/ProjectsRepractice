import { Component } from "react";
import { ListItem } from "../../types";

export class ToDoItem extends Component<{ item: ListItem }> {
  render() {
    const { item } = this.props;
    return (
      <>
        <li className="list-item" key={item.id}>
          <div className="item-text">{item.content}</div>
          <input type="text" id="item1" />
          <div className="btn-group">
            <button className="edit-button btn">Edit</button>
            <button className="delete-button btn">Delete</button>
          </div>
        </li>
      </>
    );
  }
}
