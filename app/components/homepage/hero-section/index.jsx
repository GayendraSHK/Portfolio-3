// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between pb-8 pt-6 lg:pb-14 lg:pt-10">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="pointer-events-none absolute -top-[98px] -z-10 opacity-40"
      />

      <div className="grid grid-cols-1 items-start gap-y-8 lg:grid-cols-2 lg:gap-14">
        <div className="hero-fade-in order-2 flex flex-col items-start justify-center p-1 pb-8 sm:p-2 sm:pb-10 lg:order-1 lg:pt-8">
          <h1 className="section-kicker-2 mb-3">Hello,</h1>
          <h1 className="text-2xl font-bold leading-tight text-slate-100 sm:text-3xl md:text-5xl md:font-extrabold md:leading-[1.15]">
            This is {personalData.name}, {" "}
            <span className="block text-sky-300">I&apos;m Full Stack Developer.</span>
          </h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 md:text-base">
            I am {personalData.name}, a {personalData.designation} focused on crafting
            production-ready applications with thoughtful architecture, clean user
            experiences, and measurable business impact.
          </p>

          <div className="my-6 flex items-center gap-3 sm:my-8 sm:gap-4">
            <Link
              href={personalData.github}
              target="_blank"
              className="rounded-full border border-slate-700 bg-slate-900/70 p-3 text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 hover:text-sky-300"
            >
              <BsGithub size={20} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target="_blank"
              className="rounded-full border border-slate-700 bg-slate-900/70 p-3 text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-teal-400 hover:text-teal-300"
            >
              <BsLinkedin size={20} />
            </Link>
          </div>

          <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
            <Link
              href="#contact"
              className="rounded-xl border border-sky-400/40 bg-sky-400/10 px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em] text-sky-200 transition-all duration-300 hover:-translate-y-1 hover:bg-sky-400/20 md:px-6 md:text-sm"
            >
              <span className="flex items-center justify-center gap-2">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </span>
            </Link>

            <Link
              className="flex items-center justify-center gap-2 rounded-xl border border-teal-300/40 bg-teal-300/10 px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em] text-teal-200 transition-all duration-300 hover:-translate-y-1 hover:bg-teal-300/20 md:px-6 md:text-sm"
              role="button"
              target="_blank"
              href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>
        </div>

        <div className="panel-card hero-fade-in order-1 relative overflow-hidden lg:order-2">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-sky-400/80 to-teal-300/80"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-teal-300/80 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>
          <div className="no-scrollbar overflow-x-auto border-t border-slate-800 px-3 py-4 sm:px-4 lg:px-8 lg:py-8">
            <code className="block min-w-[300px] break-words text-[11px] sm:text-xs md:text-sm lg:text-base" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
              <div className="blink">
                <span className="mr-2 text-sky-300">const</span>
                <span className="mr-2 text-slate-100">coder</span>
                <span className="mr-2 text-sky-300">=</span>
                <span className="text-slate-500">{'{'}</span>
              </div>
              <div>
                <span className="ml-4 mr-2 lg:ml-8 text-slate-100">name:</span>
                <span className="text-slate-500">{`'`}</span>
                <span className="text-amber-300">{personalData.name}</span>
                <span className="text-slate-500">{`',`}</span>
              </div>
              <div className="ml-4 mr-2 lg:ml-8">
                <span className="text-slate-100">skills:</span>
                <span className="text-slate-500">{` ['`}</span>
                <span className="text-amber-300">React</span>
                <span className="text-slate-500">{"', '"}</span>
                <span className="text-amber-300">Node.js</span>
                <span className="text-slate-500">{"', '"}</span>
                <span className="text-amber-300">MongoDB</span>
                <span className="text-slate-500">{"', "}</span>
                <span className="text-amber-300">MySQL</span>
                <span className="text-slate-500">{"', "}</span>
                <span className="text-amber-300">.Net</span>
                <span className="text-slate-500">{"', "}</span>
                <span className="text-amber-300">MsSQL</span>
                <span className="text-slate-500">{"', "}</span>
                <span className="text-amber-300">NextJs</span>
                <span className="text-slate-500">{"'],"}</span>
              </div>
              <div>
                <span className="ml-4 mr-2 lg:ml-8 text-slate-100">hardWorker:</span>
                <span className="text-orange-300">true</span>
                <span className="text-slate-500">,</span>
              </div>
              <div>
                <span className="ml-4 mr-2 lg:ml-8 text-slate-100">quickLearner:</span>
                <span className="text-orange-300">true</span>
                <span className="text-slate-500">,</span>
              </div>
              <div>
                <span className="ml-4 mr-2 lg:ml-8 text-slate-100">problemSolver:</span>
                <span className="text-orange-300">true</span>
                <span className="text-slate-500">,</span>
              </div>
              <div>
                <span className="ml-4 mr-2 lg:ml-8 text-teal-300">availableForWork:</span>
                <span className="text-orange-300">function</span>
                <span className="text-slate-500">{'() {'}</span>
              </div>
              <div>
                <span className="ml-8 mr-2 lg:ml-16 text-orange-300">return</span>
                <span className="text-slate-500">{`(`}</span>
              </div>
              <div>
                <span className="ml-12 text-cyan-300 lg:ml-24">this.</span>
                <span className="mr-2 text-slate-100">writesCleanCode</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 text-cyan-300 lg:ml-24">this.</span>
                <span className="mr-2 text-slate-100">collaborative</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 text-cyan-300 lg:ml-24">this.</span>
                <span className="mr-2 text-slate-100">skills.length</span>
                <span className="mr-2 text-amber-300">&gt;=</span>
                <span className="text-orange-300">3</span>
              </div>
              <div><span className="ml-8 mr-2 text-slate-500 lg:ml-16">{`);`}</span></div>
              <div><span className="ml-4 text-slate-500 lg:ml-8">{`};`}</span></div>
              <div><span className="text-slate-500">{`};`}</span></div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;