import { ReactNode } from "react";
import { useHeaderState } from "../providers/HeaderLinkProvider";

export const ScreenLayout = ({
  id,
  children,
  dataAnimation,
}: {
  id: string;
  children: ReactNode;
  dataAnimation: string;
}) => {
  const { headerLinkState } = useHeaderState();
  const screenIsActive = () => (headerLinkState === id ? "active" : "");
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
