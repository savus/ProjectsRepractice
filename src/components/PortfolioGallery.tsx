import { PortfolioCard } from "./PortfolioCard";
import "../css/portfolio-gallery.css";
import { FilterLink } from "./shared/Portfolio/FilterLink";
import { usePortfolioCards } from "./providers/PortfolioCardsProvider";
import { useState } from "react";

export type TFilterLinkState = "all" | "web" | "app" | "ui";

export const PortfolioGallery = () => {
  const { allPortfolioCards } = usePortfolioCards();
  const [filterLinkState, setFilterLinkState] =
    useState<TFilterLinkState>("all");
  const [userSearchInput, setUserSearchInput] = useState("");

  const filteredCards = allPortfolioCards.filter((card) => {
    const userInput = userSearchInput.toLowerCase().trim();
    if (userInput.includes("all") || filterLinkState === "all") return true;
    else if (
      userInput.includes(card.dataItem) ||
      filterLinkState === card.dataItem
    )
      return true;
    else return false;
  });

  return (
    <section className="portfolio-section">
      <div className="container search-container">
        <label htmlFor="search">
          <input
            type="text"
            id="search"
            className="search-input"
            placeholder="Search..."
            value={userSearchInput}
            onChange={(e) => {
              setUserSearchInput(e.target.value);
            }}
          />
          <i className="fas fa-search"></i>
        </label>
        <ul className="ul-defaults-none portfolio-filter-nav">
          <FilterLink
            dataFilter="all"
            linkText="All Work"
            filterLinkState={filterLinkState}
            setFilterLinkState={setFilterLinkState}
          />
          <FilterLink
            dataFilter="web"
            linkText="Web Development"
            filterLinkState={filterLinkState}
            setFilterLinkState={setFilterLinkState}
          />
          <FilterLink
            dataFilter="app"
            linkText="App Development"
            filterLinkState={filterLinkState}
            setFilterLinkState={setFilterLinkState}
          />
          <FilterLink
            dataFilter="ui"
            linkText="Ui Design"
            filterLinkState={filterLinkState}
            setFilterLinkState={setFilterLinkState}
          />
        </ul>
      </div>
      <div className="portfolio-grid">
        {filteredCards.map((card) => (
          <PortfolioCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
};
