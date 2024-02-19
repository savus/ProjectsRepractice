import { ReactNode, createContext, useContext, useState } from "react";
import { TUserInformation } from "../../types";

type TUserInformationProvider = {
  userInformation: TUserInformation | null;
  setUserInformation: (userInformation: TUserInformation | null) => void;
};

const UserInformationContext = createContext({} as TUserInformationProvider);

export const UserInformationProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [userInformation, setUserInformation] =
    useState<TUserInformation | null>(null);
  return (
    <UserInformationContext.Provider
      value={{ userInformation, setUserInformation }}
    >
      {children}
    </UserInformationContext.Provider>
  );
};

export const useUserInformation = () => useContext(UserInformationContext);
