import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface IconHeadingProps {
  title: string;
  icon: IconDefinition;
}

const IconHeading: React.FC<IconHeadingProps> = ({ title, icon }) => {
  return (
    <div className="flex mb-3 gap-1.5">
      <FontAwesomeIcon icon={icon} className="text-3xl text-accent" />
      <h2 className="text-2xl font-bold text-black">{title}</h2>
    </div>
  );
};

export default IconHeading;
