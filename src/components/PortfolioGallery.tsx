import { PortfolioCard } from "./PortfolioCard";
import "../css/portfolio-gallery.css";
import { FilterLink } from "./shared/Portfolio/FilterLink";
import { usePortfolioCards } from "./providers/PortfolioCardsProvider";
import { useState } from "react";
import { TFilterLinkState } from "../types";

export const PortfolioGallery = () => {
  const { allPortfolioCards } = usePortfolioCards();
  const [filterLinkState, setFilterLinkState] =
    useState<TFilterLinkState>("all");
  const [userSearchInput, setUserSearchInput] = useState("");
  const [useSearch, setUseSearch] = useState(false);

  const filteredCards = allPortfolioCards.filter((card) => {
    if (useSearch) {
      const userInput = userSearchInput.toLowerCase().trim();
      if (
        userInput.length === 0 ||
        userInput.includes("all") ||
        userInput.includes(card.dataItem)
      )
        return true;
    } else {
      if (filterLinkState === "all" || filterLinkState === card.dataItem)
        return true;
    }
    return false;
  });

  return (
    <section
      className="portfolio-section"
      onClick={() => {
        setUserSearchInput("");
      }}
    >
      <div className="container search-container">
        <button
          className="search-button btn btn-primary"
          onClick={() => {
            setUseSearch(!useSearch);
          }}
        >
          Search
        </button>
        <hr />
        {useSearch ? (
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
        ) : (
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
        )}
      </div>
      <div className="portfolio-grid">
        {filteredCards.map((card) => (
          <PortfolioCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
};
