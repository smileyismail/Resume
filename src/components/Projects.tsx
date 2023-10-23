import { HiExternalLink } from "react-icons/hi";

import { projects } from "../data/projects";

const Projects = () => {
  return (
    <div>
      <div className="flex mb-3 gap-1.5">
        <h2 className="text-2xl font-bold pt-1 text-black">Projects</h2>
      </div>

      <ul className="pl-7 text-[15px] flex flex-col gap-1">
        {projects.map((project, index) => (
          <li key={index} className="marker:font-bold list-decimal">
            <div className="flex gap-1 justify-cen items-center">
              <p className="font-bold text-base text-neutral-900">
                {project.title}
              </p>
              -
              <a href={project.link} target="_">
                <HiExternalLink className="text-accent text-2xl" />
              </a>
              <p className="text-sm text-neutral-700">({project.tools})</p>
            </div>

            <ul className="pl-7 flex flex-col gap-1 m-1">
              {project.points.map((point, index) => (
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

export default Projects;
