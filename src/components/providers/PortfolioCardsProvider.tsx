import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { TPortfolioCard } from "../../types";
import { Requests } from "../../api";
const endPoints = "PortfolioCards";

type TPorfolioCardsProvider = {
  allPortfolioCards: TPortfolioCard[];
  setAllPortfolioCards: (input: TPortfolioCard[]) => void;
};

const PortfolioCardsContext = createContext<TPorfolioCardsProvider>(
  {} as TPorfolioCardsProvider
);

export const PortfolioCardsProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [allPortfolioCards, setAllPortfolioCards] = useState<TPortfolioCard[]>(
    []
  );

  const [isLoading, setIsLoading] = useState(false);

  const refetchData = () => {
    setIsLoading(true);
    Requests.fetchData(endPoints)
      .then(setAllPortfolioCards)
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    refetchData();
  }, []);

  return (
    <PortfolioCardsContext.Provider
      value={{ allPortfolioCards, setAllPortfolioCards }}
    >
      {children}
    </PortfolioCardsContext.Provider>
  );
};

export const usePortfolioCards = () => useContext(PortfolioCardsContext);
