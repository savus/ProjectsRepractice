import { MainHeader } from "./components/ToDoListApp.tsx/MainHeader";
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
        <header className="main-header">
          <nav className="navbar">
            <div className="logo">Logo</div>
            <ul className="navbar-nav"></ul>
          </nav>
        </header>
      </main>
    </>
  );
}

export default App;
