import React from "react";
import { Link } from "react-router-dom";
import logoImg from "images/logo.png";
import LogoSvg from "./LogoSvg";

export interface LogoProps {
  img?: string;
  imgLight?: string;
}

const Logo: React.FC<LogoProps> = ({}) => {
  return (
    <Link to="/" className="ttnc-logo inline-block text-primary-6000">
      {/* THIS USE FOR MY MULTI DEMO */}
      {/* IF YOU ARE MY CLIENT. PLESE DELETE THIS CODE AND YOU YOUR IMAGE PNG BY BELLOW CODE */}
      <LogoSvg />
    </Link>
  );
};

export default Logo;
