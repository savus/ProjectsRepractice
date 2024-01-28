import { THeaderLinkState } from "../../../types";
import { capitalizeEachWordInString } from "../../../utils/transformations";
import { useHeaderState } from "../../providers/HeaderLinkProvider";
import { useReactContext } from "../../providers/UseReactProvider";

export const LinkItem = ({ dataLink }: { dataLink: THeaderLinkState }) => {
  const isLinkActive = (input: string) =>
    headerLinkState === input ? "active" : "";
  const { headerLinkState, setHeaderLinkState } = useHeaderState();
  const { useReact } = useReactContext();
  return (
    <li
      className={`nav-link ${isLinkActive(dataLink)}`}
      data-link={dataLink}
      onClick={() => {
        if (useReact) {
          setHeaderLinkState(dataLink);
        }
      }}
    >
      {capitalizeEachWordInString(dataLink, "-")}
    </li>
  );
};
