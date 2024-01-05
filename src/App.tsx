import { MainHeader } from "./components/MainHeader";
import { MainSectionLayout } from "./components/layouts/MainSectionLayout";
import { ScreenLayout } from "./components/layouts/ScreenLayout";
import { ToDoList } from "./components/ToDoList";
import "./css/base.css";
import "./css/theme.css";
import "./css/responsive.css";

const useReact = true;

function App() {
  return (
    <>
      <MainSectionLayout>
        <MainHeader useReact={useReact} />
        <ScreenLayout id={"to-do"}>
          <ToDoList useReact={useReact} />
        </ScreenLayout>
      </MainSectionLayout>
    </>
  );
}

export default App;
