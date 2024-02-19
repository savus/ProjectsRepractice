import { useState } from "react";
import { ProfileInformation } from "../ProfileInformation";
import { ErrorMessage } from "../shared/ErrorMessage";
import { PhoneInput } from "../shared/PhoneInput";
import { TextInput } from "../shared/TextInput";
import "./css/base.css";
import "./css/theme.css";
import "./css/responsive.css";
import "./css/user-info-form.css";
import { Validations } from "../../utils/validations";
import { useUserInformation } from "../providers/UserInformationProvider";

const firstNameErrorMessage = "First Name Is Invalid";
const lastNameErrorMessage = "Last Name Is Invalid";
const emailErrorMessage = "Email Is Invalid";
const cityErrorMessage = "City Is Invalid";

export const UserInformationForm = () => {
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [cityInput, setCityInput] = useState("");

  const [submitAttempted, setSubmitAttempted] = useState(false);

  const firstNameIsValid = Validations.isNameValid(firstNameInput);
  const lastNameIsValid = Validations.isNameValid(lastNameInput);
  const emailIsValid = Validations.isEmailValid(emailInput);
  const cityIsValid = Validations.cityIsValid(cityInput);

  const showFirstNameError = !firstNameIsValid && submitAttempted;
  const showLastNameError = !lastNameIsValid && submitAttempted;
  const showEmailError = !emailIsValid && submitAttempted;
  const showCityError = !cityIsValid && submitAttempted;

  const doBadInputsExist =
    !firstNameIsValid || !lastNameIsValid || !emailIsValid || !cityIsValid;

  const { setUserInformation } = useUserInformation();

  return (
    <>
      <div className="container-md">
        <header className="header-primary flex-and-align">
          <h3>User Info Form</h3>
        </header>
        <ProfileInformation />
        <form
          action="#"
          className="user-form "
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitAttempted(true);
            if (!doBadInputsExist) {
              setUserInformation({
                firstName: firstNameInput,
                lastName: lastNameInput,
                city: cityInput,
                email: emailInput,
              });
            }
          }}
        >
          <div className="container input-field-container flex-and-align">
            <div className="form-left-side">
              <TextInput
                labelFor={"first-name"}
                labelText={"Enter Your First Name"}
                inputProps={{
                  placeholder: "type here...",
                  className: "input-primary",
                  value: firstNameInput,
                  onChange: (e) => setFirstNameInput(e.target.value),
                }}
              />

              <ErrorMessage
                message={firstNameErrorMessage}
                show={showFirstNameError}
              />

              <TextInput
                labelFor={"last-name"}
                labelText={"Enter Your Last Name"}
                inputProps={{
                  placeholder: "type here...",
                  className: "input-primary",
                  value: lastNameInput,
                  onChange: (e) => setLastNameInput(e.target.value),
                }}
              />
              <ErrorMessage
                message={lastNameErrorMessage}
                show={showLastNameError}
              />
            </div>
            <div className="form-right-side">
              <TextInput
                labelFor={"email"}
                labelText={"Enter Your Email"}
                inputProps={{
                  placeholder: "type here...",
                  className: "input-primary",
                  value: emailInput,
                  onChange: (e) => setEmailInput(e.target.value),
                }}
              />

              <ErrorMessage message={emailErrorMessage} show={showEmailError} />

              <TextInput
                labelFor={"city"}
                labelText={"Enter Your City"}
                inputProps={{
                  placeholder: "type here...",
                  className: "input-primary",
                  list: "cities",
                  value: cityInput,
                  onChange: (e) => setCityInput(e.target.value),
                }}
              />

              <ErrorMessage message={cityErrorMessage} show={showCityError} />
            </div>
          </div>

          <PhoneInput />

          <div className="submit-button-container">
            <TextInput
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
