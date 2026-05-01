// @flow strict
import Link from 'next/link';

function Footer() {
  return (
    <footer className="relative mt-20 border-t border-slate-800/80 bg-[#061322]/70 text-slate-200 backdrop-blur-sm">
      <div className="mx-auto px-6 sm:px-10 lg:max-w-[72rem] xl:max-w-[80rem] 2xl:max-w-[90rem] py-6 lg:py-8">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-2/3 bg-gradient-to-r from-transparent via-sky-400/70 to-transparent"></div>
        </div>
        <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Portfolio by{" "}
            <Link
              target="_blank"
              href="https://www.linkedin.com/"
              className="font-medium text-teal-300 transition-colors hover:text-sky-300"
            >
              Kaveesha Gayendra
            </Link>
          </p>
          <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
            Software Engineer • Full Stack Developer • IT Undergraduate
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;