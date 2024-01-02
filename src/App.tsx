import { MainHeader } from "./components/MainHeader";
import { MainSectionLayout } from "./components/layouts/MainSectionLayout";
import "./css/base.css";
import "./css/theme.css";
import "./css/responsive.css";

import "./css/to-do-list.css";

function App() {
  return (
    <>
      <MainSectionLayout>
        <MainHeader />

        <section id="to-do" className="screen flex-centered">
          <div id="to-do-list" className="container-sm">
            <header id="to-do-header" className="header-primary flex-centered">
              <div className="title">To Do List</div>
              <div className="add-item-button">+</div>
            </header>
            <div id="to-do-body">
              <ul id="list-container">
                <li className="list-item">
                  <div className="item-content">Shop</div>
                  <input
                    type="text"
                    className="item-input"
                    placeholder="Shop"
                  />
                  <div className="btn-group">
                    <button className="edit-button">Edit</button>
                    <button className="delete-button">Delete</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </MainSectionLayout>
    </>
  );
}

export default App;
