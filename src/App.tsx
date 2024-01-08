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

  const fetchData = () => {
    return Requests.getAllListItems().then(setAllListItems);
  };

  const postNewItem = (item: Omit<TListItem, "id">) => {
    return Requests.postNewItem(item).then(fetchData);
  };

  const postNewItemOpt = (item: Omit<TListItem, "id">) => {
    const highestListItemId = allListItems.sort((a, b) => a.id - b.id)[
      allListItems.length - 1
    ].id;
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
    return Requests.updateListItem(itemID, { content: input }).then(fetchData);
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
    return Requests.deleteListItem(itemID).then(fetchData);
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
        />
        <ScreenLayout id={"to-do"}>
          {activeLinkState === "to-do" && (
            <ToDoList
              useReact={useReact}
              postNewItem={postNewItem}
              itemsList={allListItems}
              updateListItem={updateListItemOpt}
              deleteListItem={deleteListItemOpt}
            />
          )}
        </ScreenLayout>
      </MainSectionLayout>
    </>
  );
}

export default App;
