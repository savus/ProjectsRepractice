import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { TListItem } from "../../types";
import { Requests } from "../../api";
import toast from "react-hot-toast";

type TListItemsProvider = {
  allListItems: TListItem[];
  isLoading: boolean;
  setIsLoading: (input: boolean) => void;
  postNewItem: (item: Omit<TListItem, "id">) => Promise<void>;
  postNewItemOpt: (item: Omit<TListItem, "id">) => Promise<unknown>;
  updateListItem: (id: number, input: string) => Promise<void>;
  updateListItemOpt: (id: number, input: string) => Promise<unknown>;
  deleteListItem: (id: number) => Promise<void>;
  deleteListItemOpt: (id: number) => Promise<unknown>;
};

const serverErrorMessage = "Oops... something went wrong";
const endPoints = "ListItems";

const ListItemContext = createContext<TListItemsProvider>(
  {} as TListItemsProvider
);

export const ListItemsProvider = ({ children }: { children: ReactNode }) => {
  const [allListItems, setAllListItems] = useState<TListItem[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  const fetchData = () => {
    setIsLoading(true);
    return Requests.fetchData(endPoints)
      .then(setAllListItems)
      .catch(() => {
        toast.error(serverErrorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const postNewItem = (item: Omit<TListItem, "id">) => {
    setIsLoading(true);
    return Requests.postNewItem(item)
      .then(fetchData)
      .then(() => {
        toast.success("Item created successfully");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const postNewItemOpt = (item: Omit<TListItem, "id">) => {
    const highestListItemId =
      allListItems.length > 0
        ? allListItems.sort((a, b) => a.id - b.id)[allListItems.length - 1].id
        : 0;
    const nextItemId = highestListItemId + 1;
    const newItem = { ...item, id: nextItemId };
    setAllListItems([...allListItems, newItem]);

    return Requests.postNewItemOptimistic(newItem).catch(() => {
      toast.error(serverErrorMessage);
      setAllListItems(allListItems);
    });
  };

  const updateListItem = (itemID: number, input: string) => {
    setIsLoading(true);
    return Requests.updateListItem(itemID, { content: input })
      .then(fetchData)
      .catch(() => {
        toast.error(serverErrorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const updateListItemOpt = (id: number, input: string) => {
    setAllListItems(
      allListItems.map((item) =>
        item.id === id ? { ...item, content: input } : item
      )
    );

    return Requests.updateListItemOptimistic(id, { content: input }).catch(
      () => {
        toast.error(serverErrorMessage);
        setAllListItems(allListItems);
      }
    );
  };

  const deleteListItem = (itemID: number) => {
    setIsLoading(true);
    return Requests.deleteListItem(itemID)
      .then(fetchData)
      .catch(() => {
        toast.error(serverErrorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const deleteListItemOpt = (id: number) => {
    setAllListItems(allListItems.filter((item) => item.id !== id));
    return Requests.deleteListItemOptimistic(id).catch(() => {
      toast.error(serverErrorMessage);
      setAllListItems(allListItems);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ListItemContext.Provider
      value={{
        allListItems,
        isLoading,
        setIsLoading,
        postNewItem,
        postNewItemOpt,
        updateListItem,
        updateListItemOpt,
        deleteListItem,
        deleteListItemOpt,
      }}
    >
      {children}
    </ListItemContext.Provider>
  );
};

export const useListItems = () => useContext(ListItemContext);
