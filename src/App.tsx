import { MainHeader } from "./components/MainHeader";
import { MainSectionLayout } from "./components/layouts/MainSectionLayout";
import { ScreenLayout } from "./components/layouts/ScreenLayout";
import { ToDoList } from "./components/ToDoList";
import "./css/base.css";
import "./css/theme.css";
import "./css/responsive.css";
import { useEffect, useState } from "react";
import { TListItem } from "./types";
import { Requests } from "./api";

const useReact = true;

function App() {
  const [allListItems, setAllListItems] = useState<TListItem[]>([]);

  const fetchData = () => {
    return Requests.getAllListItems().then(setAllListItems);
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
        <MainHeader useReact={useReact} />
        <ScreenLayout id={"to-do"}>
          <ToDoList
            useReact={useReact}
            itemsList={allListItems}
            updateListItem={updateListItem}
            deleteListItem={deleteListItem}
          />
        </ScreenLayout>
      </MainSectionLayout>
    </>
  );
}

export default App;
