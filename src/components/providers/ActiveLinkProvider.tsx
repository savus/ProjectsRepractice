import { ReactNode, createContext, useContext, useState } from "react";
import { TActiveLinkState } from "../../types";

type TActiveLinkProvider = {
  activeLinkState: TActiveLinkState;
  setActiveLinkState: (input: TActiveLinkState) => void;
};

const ActiveLinkContext = createContext<TActiveLinkProvider>(
  {} as TActiveLinkProvider
);

export const ActiveLinkProvider = ({ children }: { children: ReactNode }) => {
  const [activeLinkState, setActiveLinkState] =
    useState<TActiveLinkState>("none");
  return (
    <ActiveLinkContext.Provider value={{ activeLinkState, setActiveLinkState }}>
      {children}
    </ActiveLinkContext.Provider>
  );
};

export const useLinkState = () => useContext(ActiveLinkContext);
