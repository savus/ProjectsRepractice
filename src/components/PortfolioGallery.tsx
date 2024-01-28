import { PortfolioCard } from "./PortfolioCard";
import "../css/portfolio-gallery.css";
import { FilterLink } from "./shared/Portfolio/FilterLink";
import { usePortfolioCards } from "./providers/PortfolioCardsProvider";
import { useState } from "react";

export const PortfolioGallery = () => {
  const { allPortfolioCards } = usePortfolioCards();
  const [activeLinkState, setActiveLinkState] = useState("all");
  return (
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
          <FilterLink
            dataFilter="all"
            linkText="All Work"
            activeLinkState={activeLinkState}
            setActiveLinkState={setActiveLinkState}
          />
          <FilterLink
            dataFilter="web"
            linkText="Web Development"
            activeLinkState={activeLinkState}
            setActiveLinkState={setActiveLinkState}
          />
          <FilterLink
            dataFilter="app"
            linkText="App Development"
            activeLinkState={activeLinkState}
            setActiveLinkState={setActiveLinkState}
          />
          <FilterLink
            dataFilter="ui"
            linkText="Ui Design"
            activeLinkState={activeLinkState}
            setActiveLinkState={setActiveLinkState}
          />
        </ul>
      </div>
      <div className="portfolio-grid">
        {allPortfolioCards.map((card) => (
          <PortfolioCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
};
