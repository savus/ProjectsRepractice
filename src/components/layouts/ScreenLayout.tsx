import { ReactNode } from "react";
import { useLinkState } from "../providers/ActiveLinkProvider";

export const ScreenLayout = ({
  id,
  children,
  dataAnimation,
}: {
  id: string;
  children: ReactNode;
  dataAnimation: string;
}) => {
  const { activeLinkState } = useLinkState();
  const screenIsActive = () => (activeLinkState === id ? "active" : "");
  return (
    <>
      <section
        id={id}
        className={`screen flex-and-align ${screenIsActive()}`}
        data-animation={dataAnimation}
      >
        {children}
      </section>
    </>
  );
};
