import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";

import { skills } from "../data/skills";
import IconHeading from "./UI/IconHeading";

const Skills = () => {
  return (
    <div className="mb-2">
      <IconHeading title="Skills" icon={faScrewdriverWrench} />

      <ul className="pl-7 text-sm flex flex-col gap-1">
        {skills.map((skill, index) => (
          <li
            key={index}
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
