import { ReactNode } from "react";

export const ScreenLayout = ({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) => {
  return (
    <>
      <section id={id} className="screen flex-and-align">
        {children}
      </section>
    </>
  );
};
