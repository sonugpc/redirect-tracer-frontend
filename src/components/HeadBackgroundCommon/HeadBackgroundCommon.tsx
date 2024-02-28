import React, { FC } from "react";

export interface HeadBackgroundCommonProps {
  className?: string;
  type?: number;
}

const HeadBackgroundCommon: FC<HeadBackgroundCommonProps> = ({
  className = "",
  type = 2,
}) => {
  if (type == 1) {
    className += "bg-gradient-to-r from-violet-600 to-indigo-600 ";
  } else if (type == 2) {
    className += "bg-gradient-to-r from-amber-500 to-pink-500";
  } else {
    className +=
      "bg-opacity-25 bg-primary-100 dark:bg-neutral-800  dark:bg-opacity-40 ";
  }
  return (
    <div
      className={`nc-HeadBackgroundCommon ${className} top-0 absolute h-[400px] left-0 right-0 w-full  `}
      data-nc-id="HeadBackgroundCommon"
    />
  );
};

export default HeadBackgroundCommon;
