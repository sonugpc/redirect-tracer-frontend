import React, { FC } from "react";
import Config from "../../../config";

const PagePrivacy: FC<any> = () => {
  return (
    <div
      className="container mx-auto px-4 py-16 text-xl leading-7 text-gray-800 dark:text-gray-200"
      dangerouslySetInnerHTML={{ __html: Config.privacy }}
    ></div>
  );
};

export default PagePrivacy;
