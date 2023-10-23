import { developerSkills } from "../data/skills";

const Skills = () => {
  return (
    <div className="mb-2">
      <div className="flex my-3 gap-1.5">
        <h2 className="text-2xl font-bold pt-1 text-black">Skills</h2>
      </div>

      <ul className="pl-7 text-[15px] flex flex-col gap-1">
        {developerSkills.map((skill, index) => (
          <li
            key={index}
            className="marker:text-accent list-disc text-neutral-900"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
