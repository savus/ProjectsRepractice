import { TFilterLinkState } from "../../PortfolioGallery";

export const FilterLink = ({
  dataFilter,
  linkText,
  filterLinkState,
  setFilterLinkState,
}: {
  dataFilter: TFilterLinkState;
  linkText: string;
  filterLinkState: TFilterLinkState;
  setFilterLinkState: (input: TFilterLinkState) => void;
}) => {
  const isLinkActive = () => (filterLinkState === dataFilter ? "active" : "");
  return (
    <li
      className={`filter-link ${isLinkActive()}`}
      data-filter={dataFilter}
      onClick={() => {
        setFilterLinkState(dataFilter);
      }}
    >
      {linkText}
    </li>
  );
};
