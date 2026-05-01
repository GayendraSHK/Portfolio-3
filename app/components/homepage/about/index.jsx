// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";


function AboutSection() {
  return (
    <div id="about" className="relative my-14 lg:my-20">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="w-fit rotate-90 rounded-md border border-slate-700/80 bg-slate-900/70 p-2 px-5 text-base font-semibold uppercase tracking-[0.16em] text-slate-200">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-slate-700"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="panel-card order-2 p-6 lg:order-1 lg:p-8">
          <p className="section-kicker mb-3">
            Who I am?
          </p>
          <p className="text-sm leading-7 text-slate-300 lg:text-lg lg:leading-8">
            {personalData.description}
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={430}
            height={430}
            alt="Kaveesha Gayendra"
            className="h-[430px] w-[430px] rounded-2xl border border-slate-700/70 object-cover transition-all duration-700 hover:scale-[1.04]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;