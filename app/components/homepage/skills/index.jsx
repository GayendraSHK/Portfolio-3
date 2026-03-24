// @flow strict

import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function Skills() {
  return (
    <div id="skills" className="relative z-50 my-14 border-t border-slate-800/90 pt-2 lg:my-24">
      <div className="absolute left-[42%] top-6 h-[100px] w-[100px] translate-x-1/2 rounded-full bg-sky-200 opacity-10 blur-3xl"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-sky-300/60 to-transparent" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="h-[2px] w-20 bg-slate-700"></span>
          <span className="section-heading w-fit rounded-md border border-slate-700/80 bg-slate-900/70 p-2 px-5 text-sm md:text-base">
            Skills
          </span>
          <span className="h-[2px] w-20 bg-slate-700"></span>
        </div>
      </div>

      <div className="w-full my-12">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skillsData.map((skill) => (
            <div className="group relative m-3 flex h-fit min-w-fit w-36 cursor-pointer flex-col items-center justify-center rounded-lg transition-all duration-500 hover:scale-[1.08] sm:m-5"
              key={skill}>
              <div className="h-full w-full rounded-xl border border-slate-700/80 bg-slate-900/70 shadow-none transition-all duration-500 group-hover:border-sky-400/70">
                <div className="flex -translate-y-[1px] justify-center">
                  <div className="w-3/4">
                    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-sky-300/60 to-transparent" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-3 p-6">
                  <div className="h-8 sm:h-10">
                    <Image
                      src={skillsImage(skill)?.src}
                      alt={skill}
                      width={40}
                      height={40}
                      className="h-full w-auto rounded-lg"
                    />
                  </div>
                  <p className="text-sm text-slate-100 sm:text-lg">
                    {skill}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;