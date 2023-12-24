import { NavbarHeader } from "./components/NavbarHeader";
import "./css/base.css";
import "./css/styles.css";
import "./css/theme.css";

const portfolioData = [
  { title: "Home Development", dataFilter: "web" },
  { title: "Home Development", dataFilter: "web" },
  { title: "Home Development", dataFilter: "web" },
  { title: "Home Development", dataFilter: "web" },
  { title: "Home Development", dataFilter: "web" },
];

function App() {
  return (
    <>
      <main>
        <NavbarHeader />
      </main>
    </>
  );
}

export default App;
