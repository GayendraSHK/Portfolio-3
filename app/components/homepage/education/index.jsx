// @flow strict
import { educations } from "@/utils/data/educations";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import lottieFile from '../../../assets/lottie/study.json';
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Education() {
  return (
    <div id="education" className="relative z-50 my-14 border-t border-slate-800/90 pt-2 lg:my-24">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10 opacity-35"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-sky-300/60 to-transparent" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="h-[2px] w-12 sm:w-20 bg-slate-700"></span>
          <span className="section-heading w-fit rounded-md border border-slate-700/80 bg-slate-900/70 p-2 px-4 text-sm md:px-5 md:text-base">
            Educations
          </span>
          <span className="h-[2px] w-12 sm:w-20 bg-slate-700"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="h-full w-full sm:w-3/4">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {
                educations.map(education => (
                  <GlowCard key={education.id} identifier={`education-${education.id}`}>
                    <div className="panel-card relative p-3 text-white">
                      <Image
                        src="/blur-23.svg"
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-40"
                      />
                      <div className="flex justify-center">
                        <p className="text-xs text-teal-300 sm:text-sm">
                          {education.duration}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-5 px-3 py-5 sm:gap-x-8">
                        <div className="text-sky-300 transition-all duration-300 hover:scale-110">
                          <BsPersonWorkspace size={36} />
                        </div>
                        <div>
                          <p className="mb-2 text-base font-semibold uppercase tracking-wide text-slate-100 sm:text-xl">
                            {education.title}
                          </p>
                          <p className="text-sm text-slate-300 sm:text-base">{education.institution}</p>
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

export default Education;