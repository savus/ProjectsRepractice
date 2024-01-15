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

import "./css/portfolio-gallery.css";
import { portfolioImages } from "./portfolio-images";
import { ActiveLinkProvider } from "./components/providers/ActiveLinkProvider";

const useReact = true;

function App() {
  const [allListItems, setAllListItems] = useState<TListItem[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  const fetchData = () => {
    setIsLoading(true);
    return Requests.getAllListItems()
      .then(setAllListItems)
      .finally(() => {
        setIsLoading(false);
      });
  };

  // const postNewItem = (item: Omit<TListItem, "id">) => {
  //   setIsLoading(true);
  //   return Requests.postNewItem(item)
  //     .then(fetchData)
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // };

  const postNewItemOpt = (item: Omit<TListItem, "id">) => {
    const highestListItemId =
      allListItems.length > 0
        ? allListItems.sort((a, b) => a.id - b.id)[allListItems.length - 1].id
        : 0;
    const nextItemId = highestListItemId + 1;
    const newItem = { ...item, id: nextItemId };
    setAllListItems([...allListItems, newItem]);

    return Requests.postNewItemOptimistic(newItem).then((response) => {
      if (!response.ok) {
        setAllListItems(allListItems);
      } else return;
    });
  };

  // const updateListItem = (itemID: number, input: string) => {
  //   setIsLoading(true);
  //   return Requests.updateListItem(itemID, { content: input })
  //     .then(fetchData)
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // };

  const updateListItemOpt = (itemID: number, input: string) => {
    setAllListItems(
      allListItems.map((item) =>
        item.id === itemID ? { ...item, content: input } : item
      )
    );

    return Requests.updateListItemOptimistic(itemID, { content: input }).then(
      (response) => {
        if (!response.ok) {
          setAllListItems(allListItems);
        } else return;
      }
    );
  };

  // const deleteListItem = (itemID: number) => {
  //   setIsLoading(true);
  //   return Requests.deleteListItem(itemID)
  //     .then(fetchData)
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // };

  const deleteListItemOpt = (itemID: number) => {
    setAllListItems(allListItems.filter((item) => item.id !== itemID));
    return Requests.deleteListItemOptimistic(itemID).then((response) => {
      if (!response.ok) {
        setAllListItems(allListItems);
      } else return;
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <MainSectionLayout>
        <ActiveLinkProvider>
          <MainHeader useReact={useReact} />
          <ScreenLayout id={"to-do"} dataAnimation="slideFadeInRight">
            <ToDoList
              useReact={useReact}
              postNewItem={postNewItemOpt}
              itemsList={allListItems}
              updateListItem={updateListItemOpt}
              deleteListItem={deleteListItemOpt}
              isLoading={isLoading}
            />
          </ScreenLayout>
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
                  <li className="filter-link active" data-filter="all">
                    All Work
                  </li>
                  <li className="filter-link" data-filter="web">
                    Web Development
                  </li>
                  <li className="filter-link" data-filter="app">
                    App Development
                  </li>
                  <li className="filter-link" data-filter="ui">
                    Ui Design
                  </li>
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
