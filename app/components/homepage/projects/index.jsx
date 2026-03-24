import { projectsData } from '@/utils/data/projects-data';
import SingleProject from './single-project';

const Projects = () => {

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
          {projectsData.slice(0, 6).map((project) => (
            <SingleProject key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;