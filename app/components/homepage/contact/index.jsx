// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from './contact-form';
import Image from "next/image";

function ContactSection() {
  return (
    <div id="contact" className="relative mt-24 my-12 text-slate-100 lg:my-16">

      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10 opacity-35"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-teal-300/60 to-transparent" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="h-[2px] w-20 bg-slate-700"></span>
          <span className="section-heading w-fit rounded-md border border-slate-700/80 bg-slate-900/70 p-2 px-5 text-sm md:text-base">
            CONTACT
          </span>
          <span className="h-[2px] w-20 bg-slate-700"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <ContactForm />
        <div className="lg:w-3/4 ">
          <div className="flex flex-col gap-5 lg:gap-9">
            <p className="flex items-start gap-3 text-sm md:text-xl">
              <MdAlternateEmail
                className="mt-0.5 cursor-pointer rounded-full border border-slate-700 bg-slate-900/80 p-2 text-sky-200 transition-all duration-300 hover:scale-110 hover:border-sky-300"
                size={34}
              />
              <span className="break-all text-slate-300">{personalData.email}</span>
            </p>
            <p className="flex items-start gap-3 text-sm md:text-xl">
              <IoMdCall
                className="mt-0.5 cursor-pointer rounded-full border border-slate-700 bg-slate-900/80 p-2 text-sky-200 transition-all duration-300 hover:scale-110 hover:border-sky-300"
                size={34}
              />
              <span className="text-slate-300">
                {personalData.phone}
              </span>
            </p>
            <p className="flex items-start gap-3 text-sm md:text-xl">
              <CiLocationOn
                className="mt-0.5 cursor-pointer rounded-full border border-slate-700 bg-slate-900/80 p-2 text-sky-200 transition-all duration-300 hover:scale-110 hover:border-sky-300"
                size={34}
              />
              <span className="text-slate-300 break-words">
                {personalData.address}
              </span>
            </p>
          </div>
          <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10">
            <Link target="_blank" rel="noreferrer" href={personalData.github}>
              <IoLogoGithub
                className="cursor-pointer rounded-full border border-slate-700 bg-slate-900/80 p-3 text-slate-200 transition-all duration-300 hover:scale-110 hover:border-teal-300 hover:text-teal-200"
                size={48}
              />
            </Link>
            <Link target="_blank" rel="noreferrer" href={personalData.linkedIn}>
              <BiLogoLinkedin
                className="cursor-pointer rounded-full border border-slate-700 bg-slate-900/80 p-3 text-slate-200 transition-all duration-300 hover:scale-110 hover:border-sky-300 hover:text-sky-200"
                size={48}
              />
            </Link>
            <Link target="_blank" rel="noreferrer" href={personalData.whatsapp} aria-label="Chat on WhatsApp">
              <FaWhatsapp
                className="cursor-pointer rounded-full border border-slate-700 bg-slate-900/80 p-3 text-slate-200 transition-all duration-300 hover:scale-110 hover:border-emerald-300 hover:text-emerald-200"
                size={48}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;