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

  const updateListItem = (itemID: number, input: string) => {
    return Requests.updateListItem(itemID, { content: input }).then(fetchData);
  };

  const deleteListItem = (itemID: number) => {
    return Requests.deleteListItem(itemID).then(fetchData);
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
              updateListItem={updateListItem}
              deleteListItem={deleteListItem}
            />
          )}
        </ScreenLayout>
      </MainSectionLayout>
    </>
  );
}

export default App;
