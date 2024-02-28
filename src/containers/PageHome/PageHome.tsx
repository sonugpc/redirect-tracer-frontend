import React from "react";

import { Helmet } from "react-helmet";

import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import PageSearch from "containers/PageSearch/PageSearch";
import WhatIsRedirectChecker from "components/RedirectPageInfo/WhatIsRedirectChecker";

//
//

//

const PageHome: React.FC = () => {
  return (
    <div className=" relative">
      <Helmet>
        <title>URL Redirect Tracer , Url Expender | WhereGoes.online </title>
      </Helmet>

      {/* ======== ALL SECTIONS ======== */}
      <div className="relative overflow-hidden">
        {/* ======== BG GLASS ======== */}
        <BgGlassmorphism />

        {/* ======= START CONTAINER ============= */}

        <PageSearch />
      </div>
    </div>
  );
};

export default PageHome;
