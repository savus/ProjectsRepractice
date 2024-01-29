import { MainHeader } from "./components/MainHeader";
import { MainSectionLayout } from "./components/layouts/MainSectionLayout";
import { ScreenLayout } from "./components/layouts/ScreenLayout";
import { ToDoList } from "./components/ToDoList";
import "./css/base.css";
import "./css/theme.css";
import "./css/responsive.css";

import { HeaderLinkProvider } from "./components/providers/HeaderLinkProvider";
import { ListItemsProvider } from "./components/providers/ListItemsProvider";
import { OptimisticRenderingProvider } from "./components/providers/OptimisticRenderingProvider";
import { UseReactProvider } from "./components/providers/UseReactProvider";
import { PortfolioGallery } from "./components/PortfolioGallery";
import { PortfolioCardsProvider } from "./components/providers/PortfolioCardsProvider";
import { InputText } from "./components/shared/InputText";
import { useState } from "react";

type TUserInformation = {
  userName: string;
};
function App() {
  const [userInformation, setUserInformation] =
    useState<TUserInformation | null>(null);
  return (
    <>
      <MainSectionLayout>
        <HeaderLinkProvider>
          <UseReactProvider>
            <MainHeader />
            <ScreenLayout id={"to-do-list"} dataAnimation="slideFadeInRight">
              <OptimisticRenderingProvider>
                <ListItemsProvider>
                  <ToDoList />
                </ListItemsProvider>
              </OptimisticRenderingProvider>
            </ScreenLayout>
          </UseReactProvider>
          <ScreenLayout
            id={"portfolio-gallery"}
            dataAnimation={"slideFadeInRight"}
          >
            <PortfolioCardsProvider>
              <PortfolioGallery />
            </PortfolioCardsProvider>
          </ScreenLayout>
          <ScreenLayout id={"user-info-form"} dataAnimation="slideFadeInRight">
            <div className="container-md">
              <header className="header-primary flex-and-align">
                <h3>User Info Form</h3>
              </header>
              <div className="user-info-display">
                <div className="username">{userInformation?.userName}</div>
              </div>
              <form
                action="#"
                className="user-form flex-and-align"
                onSubmit={(e) => {
                  e.preventDefault();
                  console.log("submitted");
                }}
              >
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

                <InputText
                  labelFor="submit"
                  labelText=""
                  inputProps={{
                    type: "submit",
                    value: "Submit",
                    className: "btn btn-primary",
                  }}
                />
              </form>
            </div>
          </ScreenLayout>
        </HeaderLinkProvider>
      </MainSectionLayout>
    </>
  );
}

export default App;
