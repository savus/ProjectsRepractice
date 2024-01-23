import { TPortfolioCard } from "../types";

export const PortfolioCard = ({
  card: { dataItem, image, popupTitle, popupDescription },
}: {
  card: TPortfolioCard;
}) => {
  return (
    <div className="portfolio-card" data-item={dataItem}>
      <div className="card-body">
        <img src={image} alt="portfolio-icon" />
        <a href="#" className="card-popup-box">
          <div>{popupTitle}</div>
          <h3>{popupDescription}</h3>
        </a>
      </div>
    </div>
  );
};
