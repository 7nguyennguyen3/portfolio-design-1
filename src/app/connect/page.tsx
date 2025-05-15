"use client";

import React, { useState } from "react";
import {
  FaXTwitter,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa6"; // Using fa6 for potentially newer icons, ensure this is installed
import { Mail, Phone, Copy, CheckCircle, MessageCircle } from "lucide-react"; // Lucide for consistency

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
  ariaLabel: string;
}

const socialMediaLinks: SocialLink[] = [
  {
    name: "X (Twitter)",
    href: "https://x.com/yourprofile", // Placeholder
    icon: <FaXTwitter size={20} />, // Slightly smaller icons for the boxes
    ariaLabel: "Follow on X (formerly Twitter)",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/7nguyennguyen3/", // Placeholder
    icon: <FaLinkedinIn size={20} />,
    ariaLabel: "Connect on LinkedIn",
  },
  {
    name: "GitHub",
    href: "https://github.com/7nguyennguyen3", // Placeholder
    icon: <FaGithub size={20} />,
    ariaLabel: "View projects on GitHub",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCE-2B6ke-mXRCqQ0Zy11Wjw", // Standard placeholder
    icon: <FaYoutube size={20} />,
    ariaLabel: "Subscribe on YouTube",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/yourprofile", // Placeholder
    icon: <FaInstagram size={20} />,
    ariaLabel: "Follow on Instagram",
  },
  {
    name: "Facebook",
    href: "https://facebook.com/yourprofile", // Placeholder
    icon: <FaFacebookF size={20} />,
    ariaLabel: "Connect on Facebook",
  },
];

// Configurable contact details and preferences for the template user
const contactConfig = {
  email: "your.email@example.com", // Placeholder
  phone: "+1 (555) 123-4567", // Placeholder
  displayPhone: true, // User can set to false to hide phone
  displayEmail: true, // User can set to false to hide email

  // User can define their preferred contact methods and notes
  preferencesTitle: "My Preferred Channels",
  contactNotes: [
    {
      method: "Email",
      details:
        "This is the best way to reach me for general inquiries and detailed discussions. I typically respond within 24-48 hours.",
      icon: <Mail size={18} className="text-blue-500 dark:text-blue-400" />,
    },
    {
      method: "Text Message",
      details:
        "For quick questions or urgent matters, feel free to send a text if you have my number. (Please mention your name!)",
      icon: (
        <MessageCircle
          size={18}
          className="text-green-500 dark:text-green-400"
        />
      ),
    },
    // User can add more or remove as needed
  ],

  pageIntro:
    "I'm always open to new connections, collaborations, and conversations. Here’s how you can reach me.",
  pageOutro: "Looking forward to hearing from you!",
};

const ConnectPage: React.FC = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const handleCopy = (textToCopy: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      if (type === "email") {
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
      } else if (type === "phone") {
        setPhoneCopied(true);
        setTimeout(() => setPhoneCopied(false), 2000);
      }
    });
  };

  return (
    <main className="bg-white dark:bg-gray-900 min-h-screen font-sans text-gray-800 dark:text-gray-200 selection:bg-blue-100 selection:text-blue-700 dark:selection:bg-blue-800 dark:selection:text-blue-200">
      <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
        <header className="text-center mb-16 md:mb-20">
          <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-gray-900 dark:text-gray-50 mb-4">
            Get in Touch
          </h1>
          {contactConfig.pageIntro && (
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto font-light">
              {contactConfig.pageIntro}
            </p>
          )}
        </header>

        <div className="space-y-14 md:space-y-16">
          {/* Contact Preferences / Notes Section */}
          {contactConfig.contactNotes &&
            contactConfig.contactNotes.length > 0 && (
              <section aria-labelledby="contact-preferences-heading">
                <h2
                  id="contact-preferences-heading"
                  className="text-2xl font-medium tracking-tight text-gray-900 dark:text-gray-100 mb-6"
                >
                  {contactConfig.preferencesTitle || "Contact Preferences"}
                </h2>
                <div className="space-y-6">
                  {contactConfig.contactNotes.map((note, index) => (
                    <div
                      key={index}
                      className="flex p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
                    >
                      <div className="flex-shrink-0 mr-4 mt-1">
                        {note.icon || (
                          <MessageCircle
                            size={20}
                            className="text-gray-400 dark:text-gray-500"
                          />
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100 mb-1">
                          {note.method}
                        </h3>
                        <p className="text-base font-light text-gray-600 dark:text-gray-400 leading-relaxed">
                          {note.details}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

          {/* Direct Contact Information */}
          {(contactConfig.displayEmail && contactConfig.email) ||
          (contactConfig.displayPhone && contactConfig.phone) ? (
            <section aria-labelledby="direct-contact-heading">
              <h2
                id="direct-contact-heading"
                className="text-2xl font-medium tracking-tight text-gray-900 dark:text-gray-100 mb-6"
              >
                Direct Contact
              </h2>
              <div className="space-y-5">
                {contactConfig.displayEmail && contactConfig.email && (
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3.5 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="flex items-center mb-2 sm:mb-0">
                      <Mail
                        size={18}
                        className="text-gray-500 dark:text-gray-400 mr-3 shrink-0"
                      />
                      <a
                        href={`mailto:${contactConfig.email}`}
                        className="text-base text-blue-600 dark:text-blue-400 hover:underline break-all"
                      >
                        {contactConfig.email}
                      </a>
                    </div>
                    <button
                      onClick={() => handleCopy(contactConfig.email!, "email")}
                      title="Copy email address"
                      className={`inline-flex items-center justify-center text-xs px-3 py-1.5 rounded-md transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 whitespace-nowrap min-w-[80px]
                        ${
                          emailCopied
                            ? "bg-green-500 hover:bg-green-600 text-white focus:ring-green-400"
                            : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 focus:ring-blue-500"
                        }`}
                    >
                      {emailCopied ? (
                        <CheckCircle size={14} />
                      ) : (
                        <Copy size={14} />
                      )}
                      <span className="ml-1.5">
                        {emailCopied ? "Copied" : "Copy"}
                      </span>
                    </button>
                  </div>
                )}

                {contactConfig.displayPhone && contactConfig.phone && (
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3.5 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="flex items-center mb-2 sm:mb-0">
                      <Phone
                        size={18}
                        className="text-gray-500 dark:text-gray-400 mr-3 shrink-0"
                      />
                      <span className="text-base text-gray-700 dark:text-gray-300">
                        {contactConfig.phone}
                      </span>
                    </div>
                    <button
                      onClick={() => handleCopy(contactConfig.phone!, "phone")}
                      title="Copy phone number"
                      className={`inline-flex items-center justify-center text-xs px-3 py-1.5 rounded-md transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-900 whitespace-nowrap min-w-[80px]
                        ${
                          phoneCopied
                            ? "bg-green-500 hover:bg-green-600 text-white focus:ring-green-400"
                            : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 focus:ring-blue-500"
                        }`}
                    >
                      {phoneCopied ? (
                        <CheckCircle size={14} />
                      ) : (
                        <Copy size={14} />
                      )}
                      <span className="ml-1.5">
                        {phoneCopied ? "Copied" : "Copy"}
                      </span>
                    </button>
                  </div>
                )}
              </div>
            </section>
          ) : null}

          {/* Social Media Links */}
          {socialMediaLinks.length > 0 && (
            <section aria-labelledby="social-media-heading">
              <h2
                id="social-media-heading"
                className="text-2xl font-medium tracking-tight text-gray-900 dark:text-gray-100 mb-6"
              >
                Follow My Work
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {socialMediaLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel}
                    className="flex items-center space-x-2.5 p-3.5 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-150 group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                  >
                    <span className="text-gray-400 dark:text-gray-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-150">
                      {link.icon}
                    </span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {link.name}
                    </span>
                  </a>
                ))}
              </div>
            </section>
          )}

          {contactConfig.pageOutro && (
            <p className="text-center text-lg text-gray-600 dark:text-gray-400 pt-8 md:pt-12 font-light">
              {contactConfig.pageOutro}
            </p>
          )}
        </div>
      </div>
    </main>
  );
};

export default ConnectPage;
