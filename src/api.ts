import { TListItem, TPortfolioCard } from "./types";

const BASE_URL = "http://localhost:3000";

export const Requests = {
  getAllEndpoints: (endpoints: string) =>
    fetch(`${BASE_URL}/${endpoints}`).then((response) => response.json()),

  postNewItem: (item: Omit<TListItem, "id">) =>
    fetch(`${BASE_URL}/ListItems`, {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "Content-Type": "application/json" },
    }).then((response) => response.json()),

  postNewItemOptimistic: (item: TListItem) =>
    fetch(`${BASE_URL}/ListItems`, {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "Content-Type": "application/json" },
    }),

  updateListItem: (id: number, body: Partial<TListItem>) =>
    fetch(`${BASE_URL}/ListItems/${id}`, {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    }).then((response) => response.json()),

  updateListItemOptimistic: (id: number, body: Partial<TListItem>) =>
    fetch(`${BASE_URL}/ListItems/${id}`, {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    }),

  deleteListItem: (id: number) =>
    fetch(`${BASE_URL}/ListItems/${id}`, {
      method: "DELETE",
    }).then((response) => response.json()),

  deleteListItemOptimistic: (id: number) =>
    fetch(`${BASE_URL}/ListItems/${id}`, {
      method: "DELETE",
    }),

  getAllPortfolioCards: (): Promise<TPortfolioCard[]> =>
    fetch(`${BASE_URL}/PortfolioCards`).then((response) => response.json()),
};
