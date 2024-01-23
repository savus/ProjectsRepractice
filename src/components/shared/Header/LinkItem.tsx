import { TActiveLinkState } from "../../../types";
import { capitalizeEachWordInString } from "../../../utils/transformations";
import { useLinkState } from "../../providers/ActiveLinkProvider";

export const LinkItem = ({
  useReact,
  dataLink,
}: {
  useReact: boolean;
  dataLink: TActiveLinkState;
}) => {
  const isLinkActive = (input: string) =>
    activeLinkState === input ? "active" : "";
  const { activeLinkState, setActiveLinkState } = useLinkState();
  return (
    <li
      className={`nav-link ${isLinkActive(dataLink)}`}
      data-link={dataLink}
      onClick={() => {
        if (useReact) {
          setActiveLinkState(dataLink);
        }
      }}
    >
      {capitalizeEachWordInString(dataLink, "-")}
    </li>
  );
};
