import { ReactNode } from "react";
import { TActiveLinkState } from "../../types";

export const ScreenLayout = ({
  id,
  children,
  dataAnimation,
  activeLinkState,
}: {
  id: string;
  children: ReactNode;
  dataAnimation: string;
  activeLinkState: TActiveLinkState;
}) => {
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
