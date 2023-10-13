import React from "react";

import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import IconHeading from "./UI/IconHeading";

import { callCenterCourses } from "../data/courses";

const Courses = () => {
  return (
    <div>
      <IconHeading title="Courses" icon={faLaptopCode} />

      <ul className="pl-7 flex flex-col gap-1.5 text-neutral-900">
        {callCenterCourses.map((course, index) => (
          <li key={index} className="marker:text-accent list-disc">
            <p className="text-sm">{course.title}</p>
            <p className="text-xs">{course.platform}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
