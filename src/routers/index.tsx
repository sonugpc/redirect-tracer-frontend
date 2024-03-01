import Footer from "components/Footer/Footer";
import HeaderContainer from "containers/HeaderContainer/HeaderContainer";
import MediaRunningContainer from "containers/MediaRunningContainer/MediaRunningContainer";
import MediaRunningContainerForSafari from "containers/MediaRunningContainer/MediaRunningContainerForSafari";
import Page404 from "containers/Page404/Page404";
import PageAbout from "containers/PageAbout/PageAbout";
import PageContact from "containers/PageContact/PageContact";
import PageHome from "containers/PageHome/PageHome";
import PagePrivacy from "containers/PagePrivacy/PagePrivacy";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import isSafariBrowser from "utils/isSafariBrowser";
import ScrollToTop from "./ScrollToTop";
import { Page } from "./types";

export const pages: Page[] = [
  { path: "/", exact: true, component: PageHome },

  { path: "/about", component: PageAbout },
  { path: "/contact", component: PageContact },
  { path: "/privacy", component: PagePrivacy },
];

const Routes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <HeaderContainer />
      <Switch>
        {pages.map(({ component, path, exact }) => {
          return (
            <Route
              key={path}
              component={component}
              exact={!!exact}
              path={path}
            />
          );
        })}
        <Route component={Page404} />
      </Switch>
      <Footer />
      {/* MEDIA */}

      {/* //is Safari on an apple touch-screen device */}
      {isSafariBrowser() ? (
        <MediaRunningContainerForSafari />
      ) : (
        <MediaRunningContainer />
      )}
    </BrowserRouter>
  );
};

export default Routes;
