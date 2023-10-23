import { educations } from "../data/educations";

const Educations = () => {
  return (
    <div className="mb-2">
      <div className="flex my-3 gap-1.5">
        <h2 className="text-2xl font-bold pt-1 text-black">Education</h2>
      </div>

      <ul className="pl-7 text-[15px] flex flex-col gap-1 text-neutral-900">
        {educations.map((education, index) => (
          <li key={index} className="marker:text-accent list-disc">
            <p>
              <span className="font-semibold text-base">{education.title}</span>{" "}
              in {education.major}.
            </p>
            <p className="text-sm">{education.university}</p>
            <p className="text-xs italic">{education.duration}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Educations;
