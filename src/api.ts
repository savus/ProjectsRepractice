import { ListItem } from "./types";

const BASE_URL = "http://localhost:3000";

const ToDoListRequests = {
  getAllListItems: () =>
    fetch(`${BASE_URL}`).then((response) => response.json()),

  postListItem: (body: Partial<ListItem>) =>
    fetch(`${BASE_URL}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    }).then((response) => response.json()),

  updateListItem: (id: number, body: Partial<ListItem>) =>
    fetch(`${BASE_URL}/${id}`, {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    }).then((response) => response.json()),
};
