import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import IconHeading from "./UI/IconHeading";

import { languages } from "../data/languages";

const Languages = () => {
  return (
    <div>
      <IconHeading title="Languages" icon={faLanguage} />

      <ul className="pl-7 flex flex-col gap-1.5 text-neutral-900">
        {languages.map((language, index) => (
          <li key={index} className="marker:text-accent list-disc">
            <p className="text-sm">{language}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Languages;
