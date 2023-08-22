import React from "react";

import { AiFillProject } from "react-icons/ai";
import { HiExternalLink } from "react-icons/hi";

import { projects } from "../data/projects";

const Projects = () => {
  return (
    <div>
      <div className="flex gap-1.5 justify-start items-center my-3">
        <AiFillProject className="text-4xl text-accent" />
        <h2 className="text-2xl font-bold mb-1 text-black">Projects</h2>
      </div>
      <ul className="pl-7 text-sm flex flex-col gap-1">
        {projects.map((project) => (
          <li key={project.id} className="marker:font-bold list-decimal">
            <div className="flex gap-1 justify-cen items-center">
              <p className="text-base font-bold text-neutral-900">
                {project.title}
              </p>
              -
              <a href={project.link} target="_">
                <HiExternalLink className="text-accent text-2xl" />
              </a>
              <p className="text-xs text-neutral-700">({project.tools})</p>
            </div>

            <ul className="pl-7 text-sm flex flex-col gap-1 m-1">
              {project.points.map((point) => (
                <li
                  key={project.id}
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
