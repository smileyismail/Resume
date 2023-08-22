import React from "react";

import { FaLaptopCode } from "react-icons/fa";

import { courses } from "../data/courses";

const Courses = () => {
  return (
    <div>
      <div className="flex gap-1.5 justify-start items-center my-3">
        <FaLaptopCode className="text-3xl text-accent" />
        <h2 className="text-2xl font-bold mb-1 text-black">Courses</h2>
      </div>
      <ul className="pl-7 text-sm flex flex-col gap-1.5 text-neutral-900">
        {courses.map((courses) => (
          <li key={courses.id} className="marker:text-accent list-disc">
            <p className="text-sm">{courses.title}</p>
            <p className="text-xs">{courses.platform}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
