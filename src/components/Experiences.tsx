import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { experience } from "../data/experience";

const Experiences = () => {
  return (
    <div>
      <div className="flex my-3 gap-1.5">
        <FontAwesomeIcon icon={faBriefcase} className="text-4xl text-accent" />
        <h2 className="text-2xl font-bold pt-1 text-black">Work Experience</h2>
      </div>

      <ul className="pl-7 text-sm flex flex-col gap-1">
        {experience.map((item, index) => (
          <li key={index} className="marker:font-bold list-decimal">
            <p className="text-base">
              <span className="font-bold text-neutral-900">
                {item.designation}
              </span>
              &nbsp;-&nbsp;
              <span className="text-sm font-medium text-neutral-800">
                {item.company}
              </span>
              &nbsp;&nbsp;
              <span className="text-xs text-neutral-700">
                {item.type ? item.type : ""}
              </span>
            </p>
            <p className="text-xs text-neutral-700">({item.duration})</p>

            <ul className="pl-7 text-sm flex flex-col gap-1 m-1">
              {item.points.map((point) => (
                <li
                  key={item.id}
                  className="marker:text-accent list-disc text-neutral-900"
                >
                  {point}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experiences;
