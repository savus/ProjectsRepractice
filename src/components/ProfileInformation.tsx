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
        UserName: {userInformation?.userName}
      </div>
    </>
  );
};
