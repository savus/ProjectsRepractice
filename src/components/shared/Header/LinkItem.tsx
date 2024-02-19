import { THeaderLinkState } from "../../../types";
import { capitalizeEachWordInString } from "../../../utils/transformations";
import { useHeaderState } from "../../providers/HeaderLinkProvider";

export const LinkItem = ({ dataLink }: { dataLink: THeaderLinkState }) => {
  const isLinkActive = (input: string) =>
    headerLinkState === input ? "active" : "";
  const { headerLinkState, setHeaderLinkState } = useHeaderState();
  return (
    <li
      className={`nav-link ${isLinkActive(dataLink)}`}
      data-link={dataLink}
      onClick={() => {
        setHeaderLinkState(dataLink);
      }}
    >
      {capitalizeEachWordInString(dataLink, "-")}
    </li>
  );
};
