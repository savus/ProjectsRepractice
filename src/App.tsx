import { MainHeader } from "./components/MainHeader";
import { MainSectionLayout } from "./components/layouts/MainSectionLayout";
import "./css/base.css";
import "./css/theme.css";

function App() {
  return (
    <>
      <MainSectionLayout>
        <MainHeader />
      </MainSectionLayout>
    </>
  );
}

export default App;
