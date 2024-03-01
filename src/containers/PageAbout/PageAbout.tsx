import SectionHero from "components/SectionHero/SectionHero";
import React, { FC } from "react";
import SectionFounder from "./SectionFounder";
import SectionStatistic from "./SectionStatistic";
import { Helmet } from "react-helmet";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import Config from "../../../config";
import WhatIsRedirectChecker from "components/RedirectPageInfo/WhatIsRedirectChecker";

export interface PageAboutProps {
  className?: string;
}

const PageAbout: FC<PageAboutProps> = ({ className = "" }) => {
  return (
    <div className={` overflow-hidden relative ${className}`}>
      <Helmet>
        <title>About | WhereGoes.online </title>
      </Helmet>

      {/* ======== BG GLASS ======== */}
      <BgGlassmorphism />

      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
        {Config.ABOUT_US_CONTENT.map((res: any, index: number) => (
          <WhatIsRedirectChecker
            key={index}
            heading={res.heading}
            content={res.subHeading}
          />
        ))}

        {/* <div className="relative py-16">
          <BackgroundSection />
          <SectionStatistic />
        </div> */}

        <SectionSubscribe2 />
      </div>
    </div>
  );
};

export default PageAbout;
