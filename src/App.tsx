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
import { Requests } from "./api";
import { useEffect, useState } from "react";
import { TPortfolioCard } from "./types";
import { PortfolioCard } from "./components/PortfolioCard";

function App() {
  const [allPortfolioCards, setAllPortfolioCards] = useState<TPortfolioCard[]>(
    []
  );
  const refetchData = () => {
    Requests.getAllPortfolioCards().then(setAllPortfolioCards);
  };

  useEffect(() => {
    refetchData();
  }, []);

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
                {allPortfolioCards.map((card) => (
                  <PortfolioCard key={card.id} card={card} />
                ))}
              </div>
            </section>
          </ScreenLayout>
        </ActiveLinkProvider>
      </MainSectionLayout>
    </>
  );
}

export default App;
