import { ComponentProps } from "react";

export type THeaderLinkState =
  | "none"
  | "to-do-list"
  | "portfolio-gallery"
  | "user-info-form"
  | "item 4";

export type TFilterLinkState = "all" | "web" | "app" | "ui";

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

export type TPhoneInputState = [string, string, string];

export type TUserInformation = {
  firstName: string;
  lastName: string;
  city: string;
  email: string;
};
