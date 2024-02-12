import { TUserInformation } from "../App";

export const ProfileInformation = ({
  userData,
}: {
  userData: TUserInformation | null;
}) => {
  if (!userData) {
    return (
      <>
        <div className="user-info-display">No User Information Given</div>
      </>
    );
  }
  const { userName } = userData;
  return (
    <>
      <div className="user-info-display">UserName: {userName}</div>
    </>
  );
};
