import { MainSectionLayout } from "./components/layouts/MainSectionLayout";
import { ScreenLayout } from "./components/layouts/ScreenLayout";
import { ToDoList } from "./components/ToDoList/ToDoList";
import "./css/user-info-form.css";

import { HeaderLinkProvider } from "./components/providers/HeaderLinkProvider";
import { ListItemsProvider } from "./components/providers/ListItemsProvider";
import { OptimisticRenderingProvider } from "./components/providers/OptimisticRenderingProvider";
import { PortfolioGallery } from "./components/PortfolioGallery";
import { PortfolioCardsProvider } from "./components/providers/PortfolioCardsProvider";
import { useState } from "react";
import { UserInformationForm } from "./components/UserInformationForm";
import { allCities } from "./utils/all-cities";
import { MainHeader } from "./components/MainHeader/MainHeader";

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
          <MainHeader />
        </HeaderLinkProvider>
      </MainSectionLayout>

      <MainSectionLayout>
        <HeaderLinkProvider>
          <ScreenLayout id={"to-do-list"} dataAnimation="slideFadeInRight">
            <OptimisticRenderingProvider>
              <ListItemsProvider>
                <ToDoList />
              </ListItemsProvider>
            </OptimisticRenderingProvider>
          </ScreenLayout>
        </HeaderLinkProvider>
      </MainSectionLayout>

      <MainSectionLayout>
        <HeaderLinkProvider>
          <ScreenLayout
            id={"portfolio-gallery"}
            dataAnimation={"slideFadeInRight"}
          >
            <PortfolioCardsProvider>
              <PortfolioGallery />
            </PortfolioCardsProvider>
          </ScreenLayout>
        </HeaderLinkProvider>
      </MainSectionLayout>

      <MainSectionLayout>
        <HeaderLinkProvider>
          <ScreenLayout id={"user-info-form"} dataAnimation="slideFadeInRight">
            <UserInformationForm userData={userInformation} />
          </ScreenLayout>
        </HeaderLinkProvider>
      </MainSectionLayout>

      <datalist id="cities">
        {allCities.map((city) => (
          <option key={city}>{city}</option>
        ))}
      </datalist>
    </>
  );
}

export default App;
