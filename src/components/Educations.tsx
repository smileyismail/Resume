import { faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import IconHeading from "./UI/IconHeading";

import { educations } from "../data/educations";

const Educations = () => {
  return (
    <div className="mb-2">
      <IconHeading title="Education" icon={faUserGraduate} />

      <ul className="pl-7 flex flex-col gap-1 text-neutral-900">
        {educations.map((education, index) => (
          <li key={index} className="marker:text-accent list-disc">
            <p className="text-sm">
              <span className="font-semibold">{education.title}</span> in{" "}
              {education.major}.
            </p>
            <p className="text-xs">{education.university}</p>
            <p className="text-xs italic">{education.duration}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Educations;
