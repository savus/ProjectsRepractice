import { TListItem } from "./types";

const BASE_URL = "http://localhost:3000";

export const Requests = {
  fetchData: (endpoints: string) =>
    fetch(`${BASE_URL}/${endpoints}`).then((response) => response.json()),

  postNewItem: (item: Omit<TListItem, "id">): Promise<TListItem[]> =>
    fetch(`${BASE_URL}/ListItems`, {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "Content-Type": "application/json" },
    }).then((response) => response.json()),

  postNewItemOptimistic: (item: TListItem): Promise<unknown> =>
    fetch(`${BASE_URL}/ListItems`, {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      if (!response.ok) {
        throw new Error(`Could not post item`);
      } else {
        return response.json();
      }
    }),

  updateListItem: (
    id: number,
    body: Partial<TListItem>
  ): Promise<TListItem[]> =>
    fetch(`${BASE_URL}/ListItems/${id}`, {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    }).then((response) => response.json()),

  updateListItemOptimistic: (
    id: number,
    body: Partial<TListItem>
  ): Promise<unknown> =>
    fetch(`${BASE_URL}/ListItems/${id}`, {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      if (!response.ok) {
        throw new Error(`Could not update Item ${id}`);
      } else {
        return response.json();
      }
    }),

  deleteListItem: (id: number): Promise<TListItem[]> =>
    fetch(`${BASE_URL}/ListItems/${id}`, {
      method: "DELETE",
    }).then((response) => response.json()),

  deleteListItemOptimistic: (id: number): Promise<unknown> =>
    fetch(`${BASE_URL}/ListItems/${id}`, {
      method: "DELETE",
    }).then((response) => {
      if (!response.ok) {
        throw new Error(`Could not delete Item ${id}`);
      } else {
        return response.json();
      }
    }),
};
