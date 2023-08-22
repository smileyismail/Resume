import React from "react";

import { FaScrewdriverWrench } from "react-icons/fa6";

import { skills } from "../data/skills";

const Skills = () => {
  return (
    <div>
      <div className="flex gap-1.5 justify-start items-center my-3">
        <FaScrewdriverWrench className="text-3xl text-accent" />
        <h2 className="text-2xl font-bold mb-1 text-black">Skills</h2>
      </div>
      <ul className="pl-7 text-sm flex flex-col gap-1">
        {skills.map((skill) => (
          <li
            key={skill.id}
            className="marker:text-accent list-disc text-neutral-900"
          >
            {skill.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
