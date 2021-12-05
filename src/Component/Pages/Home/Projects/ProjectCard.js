import React from 'react';
import { Link } from 'react-router-dom';
const ProjectCard = ({ project }) => {
  const { projectName, live, clientSide, serverSide, _id } = project;
  console.log(project.projectPhoto);
    return (
      <div className="m-2 ">
        <div
          className="card h-72 bg-no-repeat w-auto mx-4 rounded-sm transform hover:-translate-y-1 hover:scale-110 duration-500 ease-in-out border "
          // style={{
          //   backgroundImage: `url(${project.projectPhoto[0]}) `,
          // }}
        >
          <div>
            <img
              className="h-36 w-full"
              src={project.projectPhoto[0]}
              alt="projectPhoto"
            />
          </div>
          <div>
            <h1 className="text-2xl font-semibold  text-white text-center">
              {projectName}
            </h1>
            <div className="flex justify-center mt-9">
              <a
                className="text-white mx-2"
                href={live}
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </a>
              <a
                className="text-white mx-1"
                href={clientSide}
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </a>
              <a
                className="text-white mx-2"
                href={serverSide}
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                  />
                </svg>
              </a>
            </div>
            <button
              type="button"
              className="w-full p-2 bg-gray-400 bg-opacity-30 hover:bg-gray-800 text-2xl hover:bg-opacity-50  hover:text-yellow-500 transition duration-500 flex fixed bottom-0 text-white justify-center"
            >
              <Link to={`/projects/${_id}`}> Details</Link>
              <span className="px-1 mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 hover:text-yellow-500 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    );
};

export default ProjectCard;