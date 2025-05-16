"use client";

import React from "react";
import Link from "next/link";
import { FaXTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa6";

interface SocialLinkFooter {
  name: string;
  href: string;
  icon: React.ReactNode;
  ariaLabel: string;
}

// These are example social links.
// The user of your template should replace these with their own, or remove them.
const footerSocialLinks: SocialLinkFooter[] = [
  {
    name: "X (Twitter)",
    href: "https://x.com/yourprofile",
    icon: <FaXTwitter size={20} />,
    ariaLabel: "Follow on X (formerly Twitter)",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/7nguyennguyen3",
    icon: <FaLinkedinIn size={20} />,
    ariaLabel: "Connect on LinkedIn",
  },
  {
    name: "GitHub",
    href: "https://github.com/7nguyennguyen3",
    icon: <FaGithub size={20} />,
    ariaLabel: "View projects on GitHub",
  },
];

const footerNavLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Education", href: "/education" },
  { name: "About", href: "/about" },
  { name: "Connect", href: "/connect" },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const websiteOwnerName = "Nguyen Nguyen";

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 font-sans text-gray-500 dark:text-gray-400 selection:bg-blue-100 selection:text-blue-700 dark:selection:bg-blue-800 dark:selection:text-blue-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between text-center md:text-left space-y-4 md:space-y-0">
            <div className="text-sm md:order-1">
              &copy; {currentYear} {websiteOwnerName}.
              <br />
              All Rights Reserved
            </div>

            {/* Right: Social Media Links (for the user's website) */}
            {footerSocialLinks.length > 0 && (
              <div className="flex justify-center md:justify-end items-center space-x-4 md:order-3">
                {footerSocialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel}
                    className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-150"
                  >
                    <span className="sr-only">{link.name}</span>
                    {link.icon}
                  </a>
                ))}
              </div>
            )}

            {/* Center: Footer Navigation Links (for the user's website) */}
            {footerNavLinks.length > 0 && (
              <nav
                className="flex flex-wrap justify-center items-center gap-x-4 sm:gap-x-6 md:order-2"
                aria-label="Footer navigation"
              >
                {footerNavLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-150 hover:underline"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            )}

            {/* Fallback divs for layout consistency */}
            {!footerNavLinks.length && footerSocialLinks.length > 0 && (
              <div className="md:order-2"></div>
            )}
            {!footerSocialLinks.length && footerNavLinks.length > 0 && (
              <div className="md:order-3"></div>
            )}
            {!footerNavLinks.length && !footerSocialLinks.length && (
              <div className="md:order-2"></div>
            )}
            {!footerNavLinks.length && !footerSocialLinks.length && (
              <div className="md:order-3"></div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
