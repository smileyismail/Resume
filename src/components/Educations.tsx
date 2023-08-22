import React from "react";

import { FaUserGraduate } from "react-icons/fa";

import { educations } from "../data/educations";

const Educations = () => {
  return (
    <div>
      <div className="flex gap-1.5 justify-start items-center my-3">
        <FaUserGraduate className="text-3xl text-accent" />
        <h2 className="text-2xl font-bold mb-1 text-black">Education</h2>
      </div>
      <ul className="pl-7 text-sm flex flex-col gap-1 text-neutral-900">
        {educations.map((education, index) => (
          <li key={index} className="marker:text-accent list-disc">
            <p className="text-sm">{education.title}</p>
            <p className="text-xs">{education.university}</p>
            <p className="text-xs italic">{education.duration}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Educations;
