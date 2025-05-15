"use client";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { BriefcaseBusiness, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  FaXTwitter,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa6";
import React from "react";
import { FaInstagram } from "react-icons/fa";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeInRight = {
  initial: { opacity: 0, x: 30 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
  },
};

const pulseSlow = {
  scale: [1, 1.03, 1],
  opacity: [0.7, 1, 0.7],
  transition: {
    duration: 3,
    ease: "easeInOut",
    repeat: Infinity,
  },
};

const socialLinksVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 0.6,
    },
  },
};

const socialIconHover = {
  scale: 1.2,
  rotate: 5,
  transition: { type: "spring", stiffness: 300 },
};

const HeroBanner = () => {
  const socialMediaLinks = [
    {
      name: "X (Twitter)",
      href: "https://x.com/yourprofile",
      icon: <FaXTwitter size={22} />,
      ariaLabel: "Follow on X (formerly Twitter)",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/7nguyennguyen3/",
      icon: <FaLinkedinIn size={22} />,
      ariaLabel: "Connect on LinkedIn",
    },
    {
      name: "GitHub",
      href: "https://github.com/7nguyennguyen3",
      icon: <FaGithub size={22} />,
      ariaLabel: "View projects on GitHub",
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@NguyenNguyenFSD",
      icon: <FaYoutube size={22} />,
      ariaLabel: "Subscribe on YouTube",
    },
    {
      name: "Instagram",
      href: "https://instagram.com/yourprofile",
      icon: <FaInstagram size={22} />,
      ariaLabel: "Follow on Instagram",
    },
    {
      name: "Facebook",
      href: "https://facebook.com/yourprofile",
      icon: <FaFacebookF size={22} />,
      ariaLabel: "Connect on Facebook",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-800 py-16 md:py-24 lg:py-28 overflow-hidden">
      <MaxWidthWrapper>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-12 lg:gap-x-16 gap-y-10 md:gap-y-0">
            <motion.div
              className="flex flex-col gap-6 text-center md:text-left order-2 md:order-1"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
              <Badge
                variant="outline"
                className="gap-2 self-center md:self-start border-emerald-500 text-emerald-700 dark:text-emerald-400 dark:border-emerald-600 w-fit py-1 px-3"
              >
                <BriefcaseBusiness size={16} /> Available for Work
              </Badge>

              <motion.h1 className="font-semibold text-4xl lg:text-5xl text-gray-900 dark:text-white tracking-tight leading-tight">
                Hi, I'm a
                <span className="text-blue-600 dark:text-blue-400">
                  {" "}
                  Full-Stack Developer
                </span>
              </motion.h1>

              <motion.p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg mx-auto md:mx-0">
                I have 2 years of experience crafting useful and mindful digital
                products with startups and established brands. Let's build
                something amazing together.
              </motion.p>

              <motion.div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="group rounded-lg text-[16px] bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 
                dark:hover:bg-blue-600 text-white px-8 py-3 transition-all duration-300 ease-in-out transfor
                hover:scale-105 shadow-lg hover:shadow-xl focus-visible:ring-2 focus-visible:ring-blue-500 
                focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-800 w-[200px] self-center"
                >
                  <a href="/connect">
                    Contact Me
                    <ArrowRight
                      size={20}
                      className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex flex-col items-center order-1 md:order-2"
              variants={fadeInRight}
              initial="initial"
              animate="animate"
            >
              <div className="flex flex-col gap-4 items-center">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
                  <motion.div
                    className="w-full h-full rounded-full overflow-hidden shadow-2xl border-4 
                border-white dark:border-gray-700 self-center"
                  >
                    <motion.img
                      src="/profile-pic-resized.png"
                      alt="A portrait of the full-stack developer"
                      className="object-cover w-full h-full"
                      width={256}
                      height={256}
                    />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 rounded-full ring-4 ring-blue-500/20 ring-offset-4 ring-offset-transparent dark:ring-blue-400/20"
                    animate={pulseSlow}
                  />
                </div>
                <motion.h4
                  className="mt-5 mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300 tracking-wider 
                uppercase text-center md:text-right self-center"
                  variants={socialLinksVariants}
                  initial="initial"
                  animate="animate"
                >
                  Connect with me
                </motion.h4>
                <motion.div
                  className="flex justify-center lg:justify-end w-full"
                  variants={socialLinksVariants}
                  initial="initial"
                  animate="animate"
                >
                  <div className="inline-flex flex-wrap justify-center lg:flex-nowrap gap-x-3 sm:gap-x-4 gap-y-3 p-3 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
                    {socialMediaLinks.map((link) => (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.ariaLabel}
                        className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700"
                        whileHover={socialIconHover}
                        whileTap={{ scale: 0.9 }}
                      >
                        {React.cloneElement(link.icon, {
                          size: link.icon.props.size || 20,
                        })}
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default HeroBanner;
