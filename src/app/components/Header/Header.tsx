"use client";
import Image from "next/image";
import React, { useState } from "react";
import header from "./Header.module.scss";

const MenuIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 12H21"
      stroke="#F9F9F9"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 6H21"
      stroke="#F9F9F9"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 18H21"
      stroke="#F9F9F9"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 6L6 18"
      stroke="#F9F9F9"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 6L18 18"
      stroke="#F9F9F9"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className={header.header}>
        <div className={header.bgCustomGradient}>
          <div className="pl-[30px] pr-[30px] pt-[17px] pb-[11px] md:pt-[6px] md:px-6 sm:px-10 md:px-16 lg:px-53 font-(family-name:--font-figtree) pt-[5px] font-extrabold text-center h-auto md:h-[46px] md:max-w-[1440px] mx-auto">
            <span className="color text-[#00E7F9] text-[16px] md:text-[22px]">
              🚀 FRESH BEGINNINGS SALE:
              <span className="text-white tracking-[-0.2px] text-[14.5px] md:text-[22px]">
                Extra 25% OFF,
              </span>
            </span>{" "}
            <span className="text-white tracking-[-0.2px] text-[14.5px] md:text-[22px] relative -top-[6px] md:top-0">
              Limited Spots - start your journey today!
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between relative pt-[16px] md:pt-[35px] z-50 px-16 sm:px-10 lg:px-0px md:px-53 justify-end md:gap-0 md:pt-0 md:justify-between md:max-w-[100%] gap-[53px] mx-auto">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold tracking-tight text-white">
            <Image
              className={header.hero_banner}
              src="/logo.svg"
              alt="Phone displaying app interface"
              width={173}
              height={74}
            />
          </a>

          {/* Desktop Navigation Links (Unchanged) */}
          <div className="hidden md:flex items-center gap-8 text-brand-text-secondary mt-[-52px] gap-[45px]">
            <a href="#" className="text-[18px] font-semibold text-[#A9A9A9]">
              About us
            </a>
            <a href="#" className="text-[18px] font-semibold text-[#A9A9A9]">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button - Toggles state */}
          <button
            className={`${header.burger_menu} md:hidden relative left-[38px]`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Panel - Uses classes from the SCSS module */}
      <div className={`${header.mobileMenu} ${isMenuOpen ? header.open : ""}`}>
        <nav className="flex flex-col items-center gap-8">
          <a
            href="#"
            className={header.navLink}
            onClick={() => setIsMenuOpen(false)}
          >
            About us
          </a>
          <a
            href="#"
            className={header.navLink}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </nav>
        <a
          href="#"
          className="bg-brand-accent text-white font-semibold py-3 px-6 rounded-lg"
          onClick={() => setIsMenuOpen(false)}
        >
          Get Started
        </a>
      </div>
    </>
  );
};
