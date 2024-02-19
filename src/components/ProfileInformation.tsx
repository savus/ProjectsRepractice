import { useUserInformation } from "./providers/UserInformationProvider";

export const ProfileInformation = () => {
  const { userInformation } = useUserInformation();
  if (!userInformation) {
    return (
      <>
        <div className="user-info-display">No User Information Given</div>
      </>
    );
  }
  return (
    <>
      <div className="user-info-display">
        <div>First Name: {userInformation?.firstName}</div>
        <div>Last Name: {userInformation?.lastName}</div>
        <div>City: {userInformation?.city}</div>
        <div>Email: {userInformation?.email}</div>
      </div>
    </>
  );
};
