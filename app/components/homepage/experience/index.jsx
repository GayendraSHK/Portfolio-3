// @flow strict

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import experience from '../../../assets/lottie/code.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Experience() {
  return (
    <div id="experience" className="relative z-50 my-14 border-t border-slate-800/90 pt-2 lg:my-24">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10 opacity-35"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="h-[2px] w-20 bg-slate-700"></span>
          <span className="section-heading w-fit rounded-md border border-slate-700/80 bg-slate-900/70 p-2 px-5 text-sm md:text-base">
            Experiences
          </span>
          <span className="h-[2px] w-20 bg-slate-700"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {
                experiences.map(experience => (
                  <GlowCard key={experience.id} identifier={`experience-${experience.id}`}>
                    <div className="panel-card relative p-3">
                      <Image
                        src="/blur-23.svg"
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-40"
                      />
                      <div className="flex justify-center">
                        <p className="text-xs text-teal-300 sm:text-sm">
                          {experience.duration}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-8 px-3 py-5">
                        <div className="text-sky-300 transition-all duration-300 hover:scale-110">
                          <BsPersonWorkspace size={36} />
                        </div>
                        <div>
                          <p className="mb-2 text-base font-semibold uppercase tracking-wide text-slate-100 sm:text-xl">
                            {experience.title}
                          </p>
                          <p className="text-sm text-slate-300 sm:text-base">
                            {experience.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;