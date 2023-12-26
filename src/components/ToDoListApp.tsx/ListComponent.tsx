import { Component } from "react";
import { ToDoItem } from "./ToDoItem";
import { ListItem } from "../../types";

export class ListComponent extends Component<{ itemsList: ListItem[] }> {
  render() {
    const { itemsList } = this.props;
    return (
      <>
        <div className="list-container">
          <div className="to-do-list">
            <header className="list-header">
              <div>To Do List</div>
              <button className="add-item-button">+</button>
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
