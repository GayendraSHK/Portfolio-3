"use client";

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { FiCode, FiGlobe, FiX } from 'react-icons/fi';

const SingleProject = ({ project }) => {
  const { name, description, tools = [], code, demo, image, featured, role } = project;
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    globalThis.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      globalThis.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const hasCode = Boolean(code);
  const hasDemo = Boolean(demo);

  const codeClass = hasCode
    ? 'bg-slate-950 text-slate-100 hover:bg-slate-900'
    : 'cursor-not-allowed bg-slate-950/50 text-slate-500';
  const demoClass = hasDemo
    ? 'bg-gradient-to-r from-[#9176ff] to-[#7e66ff] text-white hover:brightness-110'
    : 'cursor-not-allowed bg-[#7e66ff]/40 text-indigo-200/60';

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group w-full cursor-pointer overflow-hidden rounded-3xl border border-slate-800/90 bg-[#0a1220] text-left shadow-[0_20px_55px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-600/90"
        aria-label={`Open details for ${name}`}
      >
        <div className="relative h-52 overflow-hidden bg-[#e7e7e3] sm:h-64">
          <Image
            src={image || '/png/placeholder.png'}
            alt={name}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
          {featured && (
            <span className="absolute right-4 top-4 rounded-full border border-indigo-300/50 bg-[#8a6bff] px-3 py-1 text-xs font-semibold text-indigo-50 shadow-md">
              Featured
            </span>
          )}
        </div>

        <div className="space-y-4 bg-[#0a1220] p-4 sm:p-5">
          <h3 className="line-clamp-2 text-xl font-semibold leading-tight text-slate-100 sm:text-2xl">
            {name}
          </h3>
          <p className="line-clamp-3 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            {description}
          </p>

          <div className="flex flex-wrap gap-2">
            {tools.slice(0, 4).map((tool) => (
              <span
                key={`${project.id}-${tool}`}
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-sm font-medium text-slate-300"
              >
                {tool}
              </span>
            ))}
          </div>

          <div className="rounded-lg border border-slate-700/80 bg-slate-900/70 px-4 py-3 text-center text-sm font-semibold uppercase tracking-[0.14em] text-sky-200">
            Click To View More Info
          </div>
        </div>
      </button>

      {isMounted && isOpen && createPortal(
        <dialog
          open
          className="no-scrollbar fixed inset-0 z-[200] m-0 h-screen w-screen max-h-none max-w-none border-0 bg-black/70 p-0 backdrop-blur-sm"
          onCancel={(event) => {
            event.preventDefault();
            setIsOpen(false);
          }}
        >
          <div className="no-scrollbar relative flex h-full w-full items-start justify-center overflow-y-auto px-3 py-3 sm:px-4 sm:py-8 md:items-center">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="fixed right-5 top-5 z-[210] rounded-full border border-slate-500 bg-slate-900/95 p-2 text-slate-200 shadow-lg transition-colors hover:text-white"
              aria-label="Close dialog"
            >
              <FiX size={18} />
            </button>

            <div
              className="no-scrollbar relative max-h-[94vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-slate-700 bg-[#081221] shadow-2xl"
              aria-label={`${name} details`}
            >
              <div className="h-12 sm:h-14" aria-hidden="true" />

              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative min-h-[260px] bg-slate-100 lg:min-h-[420px]">
                  <Image
                    src={image || '/png/placeholder.png'}
                    alt={name}
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                <div className="space-y-5 p-4 sm:p-6 lg:p-8">
                  <div className="space-y-2">
                    <p className="section-kicker">Project Detail</p>
                    <h3 className="text-xl font-bold leading-tight text-slate-100 sm:text-2xl lg:text-3xl">{name}</h3>
                    {role && <p className="text-sm font-medium text-teal-300">Role: {role}</p>}
                  </div>

                  <p className="text-sm leading-7 text-slate-300 lg:text-base">{description}</p>

                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool) => (
                      <span
                        key={`${project.id}-modal-${tool}`}
                        className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-sm font-medium text-slate-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
                    {hasCode ? (
                      <Link
                        href={code}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-base font-semibold transition-all ${codeClass}`}
                      >
                        <FiCode size={18} />
                        Code
                      </Link>
                    ) : (
                      <span className={`inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-base font-semibold ${codeClass}`}>
                        <FiCode size={18} />
                        Code
                      </span>
                    )}

                    {hasDemo ? (
                      <Link
                        href={demo}
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-base font-semibold transition-all ${demoClass}`}
                      >
                        <FiGlobe size={18} />
                        Live Demo
                      </Link>
                    ) : (
                      <span className={`inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-base font-semibold ${demoClass}`}>
                        <FiGlobe size={18} />
                        Live Demo
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </dialog>
      , document.body)}
    </>
  );
};

export default SingleProject;

SingleProject.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tools: PropTypes.arrayOf(PropTypes.string),
    code: PropTypes.string,
    demo: PropTypes.string,
    image: PropTypes.string,
    featured: PropTypes.bool,
    role: PropTypes.string,
  }).isRequired,
};