import { PortfolioCard } from "./PortfolioCard";
import "../css/portfolio-gallery.css";
import { FilterLink } from "./shared/Portfolio/FilterLink";
import { usePortfolioCards } from "./providers/PortfolioCardsProvider";

export const PortfolioGallery = () => {
  const { allPortfolioCards } = usePortfolioCards();
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
  );
};
