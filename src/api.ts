import { ListItem } from "./types";

const BASE_URL = "http://localhost:3000";

export const ToDoListRequests = {
  getAllListItems: (): Promise<ListItem[]> =>
    fetch(`${BASE_URL}/ListItems`).then((response) => response.json()),

  postListItem: (body: Partial<ListItem>) =>
    fetch(`${BASE_URL}/ListItems`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    }).then((response) => response.json()),

  updateListItem: (id: number, body: Partial<ListItem>) =>
    fetch(`${BASE_URL}/ListItems/${id}`, {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    }).then((response) => response.json()),
};
