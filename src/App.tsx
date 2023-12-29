import { useEffect, useState } from "react";
import { ToDoListRequests } from "./api";
import { NavbarHeader } from "./components/NavbarHeader";
import "./css/base.css";
import "./css/styles.css";
import "./css/theme.css";
import { ListItem } from "./types";
import { ListComponent } from "./components/ToDoListApp.tsx/ListComponent";

const useReact = true;

const portfolioData = [
  { title: "Home Development", dataFilter: "web" },
  { title: "Home Development", dataFilter: "web" },
  { title: "Home Development", dataFilter: "web" },
  { title: "Home Development", dataFilter: "web" },
  { title: "Home Development", dataFilter: "web" },
];

function App() {
  const [listItems, setListItems] = useState<ListItem[]>([]);

  const refetchData = () => {
    return ToDoListRequests.getAllListItems().then(setListItems);
  };

  useEffect(() => {
    refetchData();
  }, []);

  return (
    <>
      <main>
        <NavbarHeader useReact={useReact} logo={"Logo"} />
        <ListComponent useReact={useReact} itemsList={listItems} />
      </main>
    </>
  );
}

export default App;
