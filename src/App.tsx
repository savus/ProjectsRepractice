import { MainHeader } from "./components/MainHeader";
import { MainSectionLayout } from "./components/layouts/MainSectionLayout";
import { ScreenLayout } from "./components/layouts/ScreenLayout";
import { ToDoList } from "./components/ToDoList";
import "./css/base.css";
import "./css/theme.css";
import "./css/responsive.css";

import "./css/portfolio-gallery.css";
import { portfolioImages } from "./portfolio-images";
import { ActiveLinkProvider } from "./components/providers/ActiveLinkProvider";
import { ListItemsProvider } from "./components/providers/ListItemsProvider";
import { OptimisticRenderingProvider } from "./components/providers/OptimisticRenderingProvider";
import { UseReactProvider } from "./components/providers/UseReactProvider";
import { FilterLink } from "./components/shared/Portfolio/FilterLink";

function App() {
  return (
    <>
      <MainSectionLayout>
        <ActiveLinkProvider>
          <UseReactProvider>
            <MainHeader />
            <ScreenLayout id={"to-do-list"} dataAnimation="slideFadeInRight">
              <OptimisticRenderingProvider>
                <ListItemsProvider>
                  <ToDoList />
                </ListItemsProvider>
              </OptimisticRenderingProvider>
            </ScreenLayout>
          </UseReactProvider>
          <ScreenLayout
            id={"portfolio-gallery"}
            dataAnimation={"slideFadeInRight"}
          >
            <section className="portfolio-section">
              <div className="container search-container">
                <label htmlFor="search">
                  <input
                    type="text"
                    id="search"
                    className="search-input"
                    placeholder="Search..."
                  />
                  <i className="fas fa-search"></i>
                </label>
                <ul className="ul-defaults-none portfolio-filter-nav">
                  <FilterLink dataFilter="all" linkText="All Work" />
                  <FilterLink dataFilter="web" linkText="Web Development" />
                  <FilterLink dataFilter="app" linkText="App Development" />
                  <FilterLink dataFilter="ui" linkText="Ui Design" />
                </ul>
              </div>
              <div className="portfolio-grid">
                <div className="portfolio-card" data-item="web">
                  <div className="card-body">
                    <img
                      src={portfolioImages.Portfolio1}
                      alt="portfolio-icon"
                    />
                    <a href="#" className="card-popup-box">
                      <div>Web Development</div>
                      <h3>Food Website</h3>
                    </a>
                  </div>
                </div>
                <div className="portfolio-card" data-item="web">
                  <div className="card-body">
                    <img
                      src={portfolioImages.Portfolio2}
                      alt="portfolio-icon"
                    />
                    <a href="#" className="card-popup-box">
                      <div>Web Development</div>
                      <h3>Skate Website</h3>
                    </a>
                  </div>
                </div>
                <div className="portfolio-card" data-item="web">
                  <div className="card-body">
                    <img
                      src={portfolioImages.Portfolio3}
                      alt="portfolio-icon"
                    />
                    <a href="#" className="card-popup-box">
                      <div>Web Development</div>
                      <h3>Art Website</h3>
                    </a>
                  </div>
                </div>
                <div className="portfolio-card" data-item="web">
                  <div className="card-body">
                    <img
                      src={portfolioImages.Portfolio4}
                      alt="portfolio-icon"
                    />
                    <a href="#" className="card-popup-box">
                      <div>Web Development</div>
                      <h3>Website Layouts</h3>
                    </a>
                  </div>
                </div>
                <div className="portfolio-card" data-item="app">
                  <div className="card-body">
                    <img
                      src={portfolioImages.Portfolio5}
                      alt="portfolio-icon"
                    />
                    <a href="#" className="card-popup-box">
                      <div>APP Development</div>
                      <h3>Money App</h3>
                    </a>
                  </div>
                </div>
                <div className="portfolio-card" data-item="app">
                  <div className="card-body">
                    <img
                      src={portfolioImages.Portfolio6}
                      alt="portfolio-icon"
                    />
                    <a href="#" className="card-popup-box">
                      <div>APP Development</div>
                      <h3>Game App</h3>
                    </a>
                  </div>
                </div>
                <div className="portfolio-card" data-item="ui">
                  <div className="card-body">
                    <img
                      src={portfolioImages.Portfolio7}
                      alt="portfolio-icon"
                    />
                    <a href="#" className="card-popup-box">
                      <div>UI Design</div>
                      <h3>Cool UI</h3>
                    </a>
                  </div>
                </div>
                <div className="portfolio-card" data-item="ui">
                  <div className="card-body">
                    <img
                      src={portfolioImages.Portfolio8}
                      alt="portfolio-icon"
                    />
                    <a href="#" className="card-popup-box">
                      <div>UI</div>
                      <h3>Game UI</h3>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </ScreenLayout>
        </ActiveLinkProvider>
      </MainSectionLayout>
    </>
  );
}

export default App;
