import { ReactNode, createContext, useContext, useState } from "react";

type OptimisticRenderingProvider = {
  useOptimisticRendering: boolean;
  setUseOptimisticRendering: (input: boolean) => void;
};

const OptimisticRenderingContext = createContext<OptimisticRenderingProvider>(
  {} as OptimisticRenderingProvider
);

export const OptimisticRenderingProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [useOptimisticRendering, setUseOptimisticRendering] = useState(true);
  return (
    <OptimisticRenderingContext.Provider
      value={{ useOptimisticRendering, setUseOptimisticRendering }}
    >
      {children}
    </OptimisticRenderingContext.Provider>
  );
};

export const useOptRendering = () => useContext(OptimisticRenderingContext);
