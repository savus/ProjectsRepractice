import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { TListItem } from "../../types";
import { Requests } from "../../api";

type TListItemsProvider = {
  allListItems: TListItem[];
  postNewItemOpt: (item: Omit<TListItem, "id">) => void;
  updateListItemOpt: (id: number, input: string) => void;
  deleteListItemOpt: (id: number) => void;
};

const ListItemContext = createContext<TListItemsProvider>(
  {} as TListItemsProvider
);

export const ListItemsProvider = ({ children }: { children: ReactNode }) => {
  const [allListItems, setAllListItems] = useState<TListItem[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  const fetchData = () => {
    setIsLoading(true);
    return Requests.getAllListItems()
      .then(setAllListItems)
      .finally(() => {
        setIsLoading(false);
      });
  };

  // const postNewItem = (item: Omit<TListItem, "id">) => {
  //   setIsLoading(true);
  //   return Requests.postNewItem(item)
  //     .then(fetchData)
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // };

  const postNewItemOpt = (item: Omit<TListItem, "id">) => {
    const highestListItemId =
      allListItems.length > 0
        ? allListItems.sort((a, b) => a.id - b.id)[allListItems.length - 1].id
        : 0;
    const nextItemId = highestListItemId + 1;
    const newItem = { ...item, id: nextItemId };
    setAllListItems([...allListItems, newItem]);

    return Requests.postNewItemOptimistic(newItem).then((response) => {
      if (!response.ok) {
        setAllListItems(allListItems);
      } else return;
    });
  };

  // const updateListItem = (itemID: number, input: string) => {
  //   setIsLoading(true);
  //   return Requests.updateListItem(itemID, { content: input })
  //     .then(fetchData)
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // };

  const updateListItemOpt = (id: number, input: string) => {
    setAllListItems(
      allListItems.map((item) =>
        item.id === id ? { ...item, content: input } : item
      )
    );

    return Requests.updateListItemOptimistic(id, { content: input }).then(
      (response) => {
        if (!response.ok) {
          setAllListItems(allListItems);
        } else return;
      }
    );
  };

  // const deleteListItem = (itemID: number) => {
  //   setIsLoading(true);
  //   return Requests.deleteListItem(itemID)
  //     .then(fetchData)
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // };

  const deleteListItemOpt = (id: number) => {
    setAllListItems(allListItems.filter((item) => item.id !== id));
    return Requests.deleteListItemOptimistic(id).then((response) => {
      if (!response.ok) {
        setAllListItems(allListItems);
      } else return;
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ListItemContext.Provider
      value={{
        allListItems,
        postNewItemOpt,
        updateListItemOpt,
        deleteListItemOpt,
      }}
    >
      {children}
    </ListItemContext.Provider>
  );
};

export const useListItems = () => useContext(ListItemContext);
