import { languages } from "../data/languages";

const Languages = () => {
  return (
    <div>
      <div className="flex my-3 gap-1.5">
        <h2 className="text-2xl font-bold pt-1 text-black">Languages</h2>
      </div>

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
