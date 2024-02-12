import { MainHeader } from "./components/MainHeader";
import { MainSectionLayout } from "./components/layouts/MainSectionLayout";
import { ScreenLayout } from "./components/layouts/ScreenLayout";
import { ToDoList } from "./components/ToDoList";
import "./css/base.css";
import "./css/theme.css";
import "./css/responsive.css";
import "./css/user-info-form.css";

import { HeaderLinkProvider } from "./components/providers/HeaderLinkProvider";
import { ListItemsProvider } from "./components/providers/ListItemsProvider";
import { OptimisticRenderingProvider } from "./components/providers/OptimisticRenderingProvider";
import { UseReactProvider } from "./components/providers/UseReactProvider";
import { PortfolioGallery } from "./components/PortfolioGallery";
import { PortfolioCardsProvider } from "./components/providers/PortfolioCardsProvider";
import { useState } from "react";
import { UserInformationForm } from "./components/UserInformationForm";

export type TUserInformation = {
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
            <UserInformationForm userData={userInformation} />
          </ScreenLayout>
        </HeaderLinkProvider>
      </MainSectionLayout>
    </>
  );
}

export default App;
