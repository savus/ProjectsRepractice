export const FilterLink = ({
  dataFilter,
  linkText,
}: {
  dataFilter: string;
  linkText: string;
}) => {
  return (
    <li className="filter-link" data-filter={dataFilter}>
      {linkText}
    </li>
  );
};
