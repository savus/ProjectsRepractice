export const FilterLink = ({
  dataFilter,
  linkText,
  activeLinkState,
  setActiveLinkState,
}: {
  dataFilter: string;
  linkText: string;
  activeLinkState: string;
  setActiveLinkState: (input: string) => void;
}) => {
  const isLinkActive = () => (activeLinkState === dataFilter ? "active" : "");
  return (
    <li
      className={`filter-link ${isLinkActive()}`}
      data-filter={dataFilter}
      onClick={() => {
        setActiveLinkState(dataFilter);
      }}
    >
      {linkText}
    </li>
  );
};
