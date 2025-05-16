"use client";

import React, { useState } from "react";
import {
  Menu,
  X,
  BookOpen,
  UserCircle,
  MessageSquareHeart,
  Home,
  Handshake,
} from "lucide-react";
import Link from "next/link";

interface NavLink {
  href: string;
  label: string;
  icon?: React.ReactNode;
}

// Navigation links data
const navLinks: NavLink[] = [
  { href: "/services", label: "Services", icon: <Handshake size={18} /> },
  { href: "/education", label: "Education", icon: <BookOpen size={18} /> },
  { href: "/about", label: "About", icon: <UserCircle size={18} /> },
  {
    href: "/connect",
    label: "Let's Connect",
    icon: <MessageSquareHeart size={18} />,
  },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-lg 
    sticky top-0 z-50"
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2">
          <Link
            href="/"
            className="hover:scale-110 hover:bg-white rounded-full p-1
          hover:text-slate-900 transition-all duration-200 ease-in-out"
          >
            <Home href="/" />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-slate-300 hover:bg-slate-700 hover:text-white transition-all duration-200 ease-in-out group"
              >
                {link.icon && (
                  <span className="mr-2 opacity-80 group-hover:opacity-100">
                    {link.icon}
                  </span>
                )}
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all duration-200"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Uses Framer Motion for smooth transition, but can be done with CSS transitions too */}
      {/* For simplicity, a conditional rendering with Tailwind transition classes is used here */}
      <div
        className={`md:hidden ${
          isOpen ? "max-h-screen shadow-xl" : "max-h-0"
        } overflow-hidden transition-max-height duration-700 ease-in-out`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800">
          {navLinks.map((link) => (
            <a
              key={`mobile-${link.label}`}
              href={link.href}
              onClick={() => setIsOpen(false)} // Close menu on link click
              className="flex items-center px-3 py-3 rounded-md text-base font-medium text-slate-300 hover:bg-slate-700 hover:text-white transition-all duration-200 ease-in-out group"
            >
              {link.icon}
              <span className="ml-3">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
