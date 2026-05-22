"use client";

import { useEffect, useRef, useState } from 'react';
import { projectsData } from '@/utils/data/projects-data';
import SingleProject from './single-project';

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const firstExpandedProjectRef = useRef(null);
  const visibleProjects = showAllProjects ? projectsData : projectsData.slice(0, 6);

  useEffect(() => {
    if (!showAllProjects || !firstExpandedProjectRef.current || globalThis.window === undefined) {
      return undefined;
    }

    const isMobile = globalThis.window.matchMedia('(max-width: 767px)').matches;

    if (!isMobile) {
      return undefined;
    }

    const animationFrameId = globalThis.window.requestAnimationFrame(() => {
      firstExpandedProjectRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    return () => globalThis.window.cancelAnimationFrame(animationFrameId);
  }, [showAllProjects]);

  return (
    <div id='projects' className="relative z-50 my-14 lg:my-24">
      <div className="relative md:sticky md:top-10">
        <div className="absolute -top-3 left-0 h-[80px] w-[80px] translate-x-1/2 rounded-full bg-teal-200 opacity-20 blur-3xl"></div>
        <div className="flex items-center justify-start relative">
          <span className="section-heading absolute left-0 w-fit rounded-md border border-slate-700/80 bg-slate-900/70 px-5 py-3 text-sm md:text-base">
            PROJECTS
          </span>
          <span className="h-[2px] w-full bg-slate-700"></span>
        </div>
      </div>

      <div className="pt-16 md:pt-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <div
              key={project.id}
              ref={showAllProjects && index === 6 ? firstExpandedProjectRef : null}
            >
              <SingleProject project={project} />
            </div>
          ))}
        </div>

        {projectsData.length > 6 && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAllProjects((currentValue) => !currentValue)}
              className="rounded-full border border-teal-300/50 bg-slate-900 px-6 py-3 text-sm font-semibold text-teal-200 transition-all duration-300 hover:border-teal-200 hover:bg-slate-800 hover:text-white"
            >
              {showAllProjects ? 'Show Less' : 'Show More Projects'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;