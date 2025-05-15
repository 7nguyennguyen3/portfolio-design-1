"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Brain,
  Users,
  Cpu,
  Settings2,
  ClipboardList,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const sectionAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.15,
    },
  },
};

const categoryAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      staggerChildren: 0.07,
    },
  },
};

const skillItemAnimation = {
  hidden: { opacity: 0, x: -15 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const OVERALL_SECTION_TITLE = "My Skills & Strengths";
const OVERALL_SECTION_ICON = Brain;

const SOFT_SKILLS_TITLE = "Soft Skills";
const SOFT_SKILLS_ICON = Users;
const softSkillsData: { id: string; name: string }[] = [
  { id: "s1", name: "Effective Communication" },
  { id: "s2", name: "Team Collaboration & Teamwork" },
  { id: "s3", name: "Problem-Solving & Critical Thinking" },
  { id: "s4", name: "Adaptability & Flexibility" },
  { id: "s5", name: "Empathy & Active Listening" },
  { id: "s6", name: "Time Management & Organization" },
  { id: "s7", name: "Creativity & Innovative Thinking" },
  { id: "s8", name: "Leadership & Initiative" },
];

const TECHNICAL_SKILLS_TITLE = "Technical Skills";
const TECHNICAL_SKILLS_ICON = Settings2;
const technicalSkillsData: { id: string; name: string }[] = [
  { id: "t1", name: "Data Analysis (Excel, Google Sheets)" },
  { id: "t2", name: "Market Research & Reporting" },
  { id: "t3", name: "CRM Software (e.g., HubSpot Basics)" },
  { id: "t4", name: "Microsoft Office Suite (Word, PowerPoint, Excel)" },
  { id: "t5", name: "Google Workspace (Docs, Sheets, Slides)" },
  { id: "t6", name: "Project Coordination Tools (e.g., Trello, Asana)" },
  { id: "t7", name: "Content Management Systems (e.g., WordPress Basics)" },
  { id: "t8", name: "Digital Marketing Fundamentals" },
];

const Skills: React.FC = () => {
  const OverallIcon = OVERALL_SECTION_ICON;
  const SoftSkillsIcon = SOFT_SKILLS_ICON;
  const TechnicalSkillsIcon = TECHNICAL_SKILLS_ICON;

  const titleContentFadeIn = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.1 },
    },
  };

  return (
    <motion.section
      className="py-16 md:py-20 lg:py-24 w-full font-sans bg-white dark:bg-gray-900 selection:bg-blue-100 selection:text-blue-700"
      variants={sectionAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 md:mb-16"
          variants={categoryAnimation}
        >
          <div className="inline-block mb-4 p-3 bg-blue-100 dark:bg-blue-500/20 rounded-full shadow-sm">
            <OverallIcon
              size={30}
              className="text-blue-600 dark:text-blue-400"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-50">
            {OVERALL_SECTION_TITLE}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-16">
          {softSkillsData.length > 0 && (
            <motion.div variants={categoryAnimation}>
              <div className="flex items-center mb-5 md:mb-6">
                <SoftSkillsIcon
                  size={22}
                  className="text-blue-500 dark:text-blue-400 mr-3 shrink-0"
                />
                <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-100">
                  {SOFT_SKILLS_TITLE}
                </h3>
              </div>
              <ul className="space-y-2.5 sm:space-y-3">
                {softSkillsData.map((skill) => (
                  <motion.li
                    key={skill.id}
                    variants={skillItemAnimation}
                    className="flex items-center text-gray-600 dark:text-gray-300/90"
                  >
                    <span className="text-blue-500 dark:text-blue-400 mr-2.5 shrink-0">
                      &bull;
                    </span>
                    <span>{skill.name}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}

          {technicalSkillsData.length > 0 && (
            <motion.div variants={categoryAnimation}>
              <div className="flex items-center mb-5 md:mb-6">
                <TechnicalSkillsIcon
                  size={22}
                  className="text-blue-500 dark:text-blue-400 mr-3 shrink-0"
                />
                <h3 className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-gray-100">
                  {TECHNICAL_SKILLS_TITLE}
                </h3>
              </div>
              <ul className="space-y-2.5 sm:space-y-3">
                {technicalSkillsData.map((skill) => (
                  <motion.li
                    key={skill.id}
                    variants={skillItemAnimation}
                    className="flex items-center text-gray-600 dark:text-gray-300/90"
                  >
                    <span className="text-blue-500 dark:text-blue-400 mr-2.5 shrink-0">
                      &bull;
                    </span>
                    <span>{skill.name}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>

        {softSkillsData.length === 0 && technicalSkillsData.length === 0 && (
          <motion.p
            variants={categoryAnimation}
            className="text-center text-lg text-gray-500 dark:text-gray-400 font-light mt-8"
          >
            Details about my core skills will be available soon.
          </motion.p>
        )}
      </div>
      <motion.div
        className="mt-16 md:mt-24 text-center"
        variants={titleContentFadeIn}
      >
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto font-light text-base">
          Click the button below to view my educational background and projects.
        </p>

        <Link
          href="/education"
          className="inline-flex items-center justify-center gap-2
                        px-5 py-2.5 text-sm font-medium
                        text-blue-600 dark:text-blue-400
                        hover:bg-blue-50 dark:hover:bg-gray-800
                        rounded-md transition-colors duration-150
                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                        dark:focus:ring-offset-gray-900 group border border-blue-200 dark:border-blue-800/50 hover:border-blue-300 dark:hover:border-blue-700"
        >
          Explore Education & Projects
          <ArrowRight
            size={16}
            className="transition-transform duration-200 ease-in-out group-hover:translate-x-1"
          />
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default Skills;
