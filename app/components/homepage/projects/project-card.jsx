// @flow strict

import * as React from 'react';
import PropTypes from 'prop-types';

function ProjectCard({ project }) {

  return (
    <div className="panel-card relative w-full overflow-hidden rounded-xl">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-sky-300/70 to-teal-300/70"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-teal-300/70 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="ml-3 text-center text-base text-teal-300 lg:text-xl">
          {project.name}
        </p>
      </div>
      <div className="overflow-hidden border-t border-slate-800 px-4 py-4 lg:px-8 lg:py-8">
        <code className="text-xs md:text-sm lg:text-base" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
          <div className="blink">
            <span className="mr-2 text-sky-300">const</span>
            <span className="mr-2 text-slate-100">project</span>
            <span className="mr-2 text-sky-300">=</span>
            <span className="text-slate-500">{'{'}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-slate-100">name:</span>
            <span className="text-slate-500">{`'`}</span>
            <span className="text-amber-300">{project.name}</span>
            <span className="text-slate-500">{`',`}</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className=" text-slate-100">tools:</span>
            <span className="text-slate-500">{` ['`}</span>
            {
              project.tools.map((tag, i) => (
                <React.Fragment key={`${tag}-${i}`}>
                  <span className="text-amber-300">{tag}</span>
                  {
                    project.tools?.length - 1 !== i &&
                    <span className="text-slate-500">{`', '`}</span>
                  }
                </React.Fragment>
              ))
            }
            <span className="text-slate-500">{"],"}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-slate-100">myRole:</span>
            <span className="text-orange-300">{project.role}</span>
            <span className="text-slate-500">,</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-slate-100">Description:</span>
            <span className="text-cyan-300">{' ' + project.description}</span>
            <span className="text-slate-500">,</span>
          </div>
          <div><span className="text-slate-500">{`};`}</span></div>
        </code>
      </div>
    </div>
  );
};

export default ProjectCard;

ProjectCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    role: PropTypes.string,
    tools: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};