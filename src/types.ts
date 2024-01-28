import { ComponentProps } from "react";

export type THeaderLinkState =
  | "none"
  | "to-do-list"
  | "portfolio-gallery"
  | "item 3"
  | "item 4";

export type TListItem = {
  id: number;
  content: string;
};

export type InputProps = ComponentProps<"input">;

export type TPortfolioCard = {
  id: number;
  dataItem: string;
  image: string;
  popupTitle: string;
  popupDescription: string;
};
