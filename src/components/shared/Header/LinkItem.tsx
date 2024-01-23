import { TActiveLinkState } from "../../../types";
import { capitalizeEachWordInString } from "../../../utils/transformations";
import { useLinkState } from "../../providers/ActiveLinkProvider";
import { useReactContext } from "../../providers/UseReactProvider";

export const LinkItem = ({ dataLink }: { dataLink: TActiveLinkState }) => {
  const isLinkActive = (input: string) =>
    activeLinkState === input ? "active" : "";
  const { activeLinkState, setActiveLinkState } = useLinkState();
  const { useReact } = useReactContext();
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
