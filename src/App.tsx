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
        <aside className="list-container">
          <div className="list-tab">
            <i className="fa-solid fa-chevron-up"></i>
          </div>
          <div className="list-items">
            <ul>
              <li className="list-item">Item</li>
              <li className="list-item">Item</li>
              <li className="list-item">Item</li>
              <li className="list-item">Item</li>
              <li className="list-item">Item</li>
              <li className="list-item">Item</li>
            </ul>
          </div>
        </aside>
      </main>
    </>
  );
}

export default App;
