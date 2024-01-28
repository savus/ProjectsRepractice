import { ReactNode, createContext, useContext, useState } from "react";
import { THeaderLinkState } from "../../types";

type THeaderLinkProvider = {
  headerLinkState: THeaderLinkState;
  setHeaderLinkState: (input: THeaderLinkState) => void;
};

const HeaderLinkContext = createContext<THeaderLinkProvider>(
  {} as THeaderLinkProvider
);

export const HeaderLinkProvider = ({ children }: { children: ReactNode }) => {
  const [headerLinkState, setHeaderLinkState] =
    useState<THeaderLinkState>("none");
  return (
    <HeaderLinkContext.Provider value={{ headerLinkState, setHeaderLinkState }}>
      {children}
    </HeaderLinkContext.Provider>
  );
};

export const useHeaderState = () => useContext(HeaderLinkContext);
