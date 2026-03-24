"use client";

// @flow strict
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: "/#about", label: "About" },
    { href: "/#experience", label: "Experience" },
    { href: "/#skills", label: "Skills" },
    { href: "/#projects", label: "Projects" },
    { href: "/#education", label: "Education" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="sticky top-3 z-[80] mb-6">
      <div className="panel-card px-3 py-3 sm:px-4 sm:py-2.5 md:px-5 md:py-3 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-[#2dd4bf] text-3xl font-bold"
            onClick={closeMenu}
          >
            <img
              src="/Name_Logo.png"
              alt="Kaveesha Gayendra"
              width={333}
              height={100}
              className="h-9 w-auto rounded-full object-contain sm:h-10"
            />
          </Link>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-900/70 p-2 text-slate-200 md:hidden"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              aria-controls="navbar-default"
            >
              {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
            </button>
          </div>
        </div>

        <ul
          className={`mt-3 grid grid-cols-2 gap-2 ${menuOpen ? "" : "hidden"} md:mt-0 md:ml-3 md:flex md:w-auto md:flex-wrap md:items-center md:justify-end md:gap-1 lg:gap-2`}
          id="navbar-default"
        >
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                className="block rounded-lg border border-slate-700/70 px-3 py-2 text-center text-[11px] font-medium uppercase tracking-[0.14em] text-slate-200 transition-all duration-300 hover:bg-sky-500/10 hover:text-sky-300 md:border-transparent md:px-2 md:text-left md:text-[11px] md:tracking-[0.12em] lg:px-3 lg:text-xs lg:tracking-[0.16em]"
                href={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="col-span-2 md:col-span-1">
            <Link
              className="block rounded-lg border border-teal-300/40 bg-teal-300/10 px-3 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-teal-200 transition-all hover:bg-teal-300/20 hover:text-teal-100 md:ml-1 md:text-[11px] lg:ml-2 lg:text-xs"
              href="/#contact"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;