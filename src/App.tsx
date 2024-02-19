import { MainSectionLayout } from "./components/layouts/MainSectionLayout";
import { ScreenLayout } from "./components/layouts/ScreenLayout";
import { ToDoList } from "./components/ToDoList/ToDoList";

import { HeaderLinkProvider } from "./components/providers/HeaderLinkProvider";
import { ListItemsProvider } from "./components/providers/ListItemsProvider";
import { OptimisticRenderingProvider } from "./components/providers/OptimisticRenderingProvider";
import { PortfolioGallery } from "./components/PortfolioGallery";
import { PortfolioCardsProvider } from "./components/providers/PortfolioCardsProvider";
import { UserInformationForm } from "./components/UserInformationForm/UserInformationForm";
import { allCities } from "./utils/all-cities";
import { MainHeader } from "./components/MainHeader/MainHeader";
import { UserInformationProvider } from "./components/providers/UserInformationProvider";

export type TUserInformation = {
  userName: string;
};
function App() {
  return (
    <>
      <MainSectionLayout>
        <HeaderLinkProvider>
          <MainHeader />

          <ScreenLayout id={"to-do-list"} dataAnimation="slideFadeInRight">
            <OptimisticRenderingProvider>
              <ListItemsProvider>
                <ToDoList />
              </ListItemsProvider>
            </OptimisticRenderingProvider>
          </ScreenLayout>

          <ScreenLayout
            id={"portfolio-gallery"}
            dataAnimation={"slideFadeInRight"}
          >
            <PortfolioCardsProvider>
              <PortfolioGallery />
            </PortfolioCardsProvider>
          </ScreenLayout>

          <ScreenLayout id={"user-info-form"} dataAnimation="slideFadeInRight">
            <UserInformationProvider>
              <UserInformationForm />
            </UserInformationProvider>
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
