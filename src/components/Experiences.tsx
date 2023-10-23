import { experience } from "../data/experience";

const Experiences = () => {
  return (
    <div>
      <div className="flex my-3 gap-1.5">
        <h2 className="text-2xl font-bold pt-1 text-black">Work Experience</h2>
      </div>

      <ul className="pl-7 text-[15px] flex flex-col gap-1">
        {experience.map((item, index) => (
          <li key={index} className="marker:font-bold list-decimal">
            <p>
              <span className="font-bold text-base text-neutral-900">
                {item.designation}
              </span>
              &nbsp;-&nbsp;
              <span className="text-neutral-800">{item.company}</span>
              &nbsp;&nbsp;
              <span className="text-sm text-neutral-700">
                {item.type ? `(${item.type})` : ""}
              </span>
            </p>
            <p className="text-sm text-neutral-700">({item.duration})</p>

            <ul className="pl-7 flex flex-col gap-1 m-1">
              {item.points.developer.map((point) => (
                <li
                  key={index}
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
