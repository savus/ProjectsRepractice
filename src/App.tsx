import { MainHeader } from "./components/MainHeader";
import { MainSectionLayout } from "./components/layouts/MainSectionLayout";
import { ScreenLayout } from "./components/layouts/ScreenLayout";
import { ToDoList } from "./components/ToDoList";
import "./css/base.css";
import "./css/theme.css";
import "./css/responsive.css";
import { useEffect, useState } from "react";
import { TActiveLinkState, TListItem } from "./types";
import { Requests } from "./api";

const useReact = true;

function App() {
  const [allListItems, setAllListItems] = useState<TListItem[]>([]);
  const [activeLinkState, setActiveLinkState] =
    useState<TActiveLinkState>("none");
  const [useOptimisticRendering, setUseOptimisticRendering] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = () => {
    setIsLoading(true);
    return Requests.getAllListItems()
      .then(setAllListItems)
      .finally(() => {
        setIsLoading(false);
      });
  };

  const postNewItem = (item: Omit<TListItem, "id">) => {
    setIsLoading(true);
    return Requests.postNewItem(item)
      .then(fetchData)
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

    return Requests.postNewItemOptimistic(newItem).then((response) => {
      if (!response.ok) {
        setAllListItems(allListItems);
      } else return;
    });
  };

  const updateListItem = (itemID: number, input: string) => {
    setIsLoading(true);
    return Requests.updateListItem(itemID, { content: input })
      .then(fetchData)
      .finally(() => {
        setIsLoading(false);
      });
  };

  const updateListItemOpt = (itemID: number, input: string) => {
    setAllListItems(
      allListItems.map((item) =>
        item.id === itemID ? { ...item, content: input } : item
      )
    );

    return Requests.updateListItemOptimistic(itemID, { content: input }).then(
      (response) => {
        if (!response.ok) {
          setAllListItems(allListItems);
        } else return;
      }
    );
  };

  const deleteListItem = (itemID: number) => {
    setIsLoading(true);
    return Requests.deleteListItem(itemID)
      .then(fetchData)
      .finally(() => {
        setIsLoading(false);
      });
  };

  const deleteListItemOpt = (itemID: number) => {
    setAllListItems(allListItems.filter((item) => item.id !== itemID));
    return Requests.deleteListItemOptimistic(itemID).then((response) => {
      if (!response.ok) {
        setAllListItems(allListItems);
      } else return;
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <MainSectionLayout>
        <MainHeader
          useReact={useReact}
          activeLinkState={activeLinkState}
          setActiveLinkState={(activeLinkState) => {
            setActiveLinkState(activeLinkState);
          }}
          useOptimisticRendering={useOptimisticRendering}
          setUseOptimisticRendering={(optimisticRendering) => {
            setUseOptimisticRendering(optimisticRendering);
          }}
        />
        <ScreenLayout
          id={"to-do"}
          activeLinkState={activeLinkState}
          dataAnimation="slideFadeInRight"
        >
          <ToDoList
            useReact={useReact}
            postNewItem={useOptimisticRendering ? postNewItemOpt : postNewItem}
            itemsList={allListItems}
            updateListItem={
              useOptimisticRendering ? updateListItemOpt : updateListItem
            }
            deleteListItem={
              useOptimisticRendering ? deleteListItemOpt : deleteListItem
            }
          />
        </ScreenLayout>
      </MainSectionLayout>
    </>
  );
}

export default App;
