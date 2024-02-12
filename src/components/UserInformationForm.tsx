import { TUserInformation } from "../App";
import { ProfileInformation } from "./ProfileInformation";
import { InputText } from "./shared/InputText";

export const UserInformationForm = ({
  userData,
}: {
  userData: TUserInformation | null;
}) => {
  return (
    <>
      <div className="container-md">
        <header className="header-primary flex-and-align">
          <h3>User Info Form</h3>
        </header>
        <ProfileInformation userData={userData} />
        <form
          action="#"
          className="user-form "
          onSubmit={(e) => {
            e.preventDefault();
            console.log("submitted");
          }}
        >
          <div className="container input-field-container flex-and-align">
            <div className="form-left-side">
              <InputText
                labelFor={"first-name"}
                labelText={"Enter Your First Name"}
                inputProps={{
                  placeholder: "type here...",
                  className: "input-primary",
                }}
              />
              <InputText
                labelFor={"last-name"}
                labelText={"Enter Your Last Name"}
                inputProps={{
                  placeholder: "type here...",
                  className: "input-primary",
                }}
              />
            </div>
            <div className="form-right-side">
              <InputText
                labelFor={"email"}
                labelText={"Enter Your Email"}
                inputProps={{
                  placeholder: "type here...",
                  className: "input-primary",
                }}
              />
              <InputText
                labelFor={"city"}
                labelText={"Enter Your City"}
                inputProps={{
                  placeholder: "type here...",
                  className: "input-primary",
                }}
              />
            </div>
          </div>

          <div className="submit-button-container">
            <InputText
              labelFor="submit"
              labelText=""
              inputProps={{
                type: "submit",
                value: "Submit",
                className: "btn btn-primary",
              }}
            />
          </div>
        </form>
      </div>
    </>
  );
};
