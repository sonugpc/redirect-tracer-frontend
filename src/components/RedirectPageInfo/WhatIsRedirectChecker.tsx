import React, { FC } from "react";
import Heading from "components/Heading/Heading";

export interface ClassNameProps {
  className?: string;
  heading: string;
  content: string;
}

const WhatIsRedirectChecker: FC<ClassNameProps> = ({
  className = "",
  content,
  heading,
}) => {
  return (
    <div className={` relative ${className}`}>
      <Heading desc="">{heading}</Heading>
      <div dangerouslySetInnerHTML={{ __html: content }} className=""></div>
    </div>
  );
};

export default WhatIsRedirectChecker;
