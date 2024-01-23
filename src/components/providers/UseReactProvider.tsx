import { ReactNode, createContext, useContext, useState } from "react";

type TUseReactContext = {
  useReact: boolean;
  setUseReact: (input: boolean) => void;
};

const UseReactContext = createContext<TUseReactContext>({} as TUseReactContext);

export const UseReactProvider = ({ children }: { children: ReactNode }) => {
  const [useReact, setUseReact] = useState(true);
  return (
    <UseReactContext.Provider value={{ useReact, setUseReact }}>
      {children}
    </UseReactContext.Provider>
  );
};

export const useReactContext = () => useContext(UseReactContext);
