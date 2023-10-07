import React from "react";

import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

import { courses } from "../data/courses";
import IconHeading from "./UI/IconHeading";

const Courses = () => {
  return (
    <div>
      <IconHeading title="Courses" icon={faLaptopCode} />

      <ul className="pl-7 flex flex-col gap-1.5 text-neutral-900">
        {courses.map((courses, index) => (
          <li key={index} className="marker:text-accent list-disc">
            <p className="text-sm">{courses.title}</p>
            <p className="text-xs">{courses.platform}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
