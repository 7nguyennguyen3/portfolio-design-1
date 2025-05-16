"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Building,
  CalendarDays,
  ChevronDown,
  ChevronUp,
  Link as LinkIcon,
  NotebookPen,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const sectionAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, type: "spring", stiffness: 120, damping: 18 },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

interface ExperienceItemData {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string[];
  keySkills: string[];
  companyUrl?: string;
}

const experiencesData: ExperienceItemData[] = [
  {
    id: "exp1",
    company: "Innovatech Solutions",
    role: "Senior Project Lead",
    duration: "2022 - Present",
    description: [
      "Led cross-functional teams in the successful delivery of key client projects.",
      "Developed project timelines, managed resources, and ensured adherence to budget.",
      "Fostered strong client relationships through effective communication and expectation management.",
      "Implemented new project management methodologies, improving team efficiency by 15%.",
    ],
    keySkills: [
      "Project Management",
      "Agile Methodologies",
      "Stakeholder Communication",
      "Team Leadership",
    ],
    companyUrl: "https://example.com/innovatech",
  },
  {
    id: "exp2",
    company: "Market Growth Agency",
    role: "Marketing Strategist",
    duration: "2019 - 2021",
    description: [
      "Developed and executed comprehensive marketing strategies for diverse clients, increasing lead generation by an average of 30%.",
      "Managed digital advertising campaigns across multiple platforms (Google Ads, Social Media).",
      "Conducted market research and competitor analysis to identify new opportunities.",
    ],
    keySkills: [
      "Digital Marketing",
      "SEO/SEM",
      "Content Strategy",
      "Google Analytics",
      "Social Media",
    ],
    companyUrl: "https://example.com/marketgrowth",
  },
  {
    id: "exp3",
    company: "Community Outreach Org.",
    role: "Volunteer Coordinator",
    duration: "2017",
    description: [
      "Recruited, trained, and managed a team of over 50 volunteers for various community initiatives.",
      "Organized and promoted fundraising events, exceeding targets by 20%.",
    ],
    keySkills: ["Volunteer Management", "Event Planning", "Public Speaking"],
  },
  {
    id: "exp4",
    company: "Future Systems Ltd.",
    role: "Software Engineer",
    duration: "2021 - 2022",
    description: [
      "Contributed to the development of a large-scale enterprise resource planning (ERP) system.",
      "Worked on both front-end (React, TypeScript) and back-end (Node.js, PostgreSQL) components.",
      "Participated in code reviews, sprint planning, and agile development processes.",
    ],
    keySkills: ["React", "TypeScript", "Node.js", "PostgreSQL", "Agile"],
    companyUrl: "https://example.com/futuresystems",
  },
  {
    id: "exp5",
    company: "Data Insights Corp.",
    role: "Junior Data Analyst",
    duration: "2018 - 2019",
    description: [
      "Assisted senior analysts in data collection, cleaning, and preliminary analysis.",
      "Created dashboards and reports to visualize key performance indicators.",
      "Gained experience with SQL and data visualization tools like Tableau.",
    ],
    keySkills: [
      "Data Analysis",
      "SQL",
      "Tableau",
      "Data Visualization",
      "Excel",
    ],
  },
];

const INITIAL_EXPERIENCES_TO_SHOW = 2;
const TITLE = "Recent Experience";
const ICON = Briefcase;

const titleContentFadeIn = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: 0.1 },
  },
};

const SkillTag: React.FC<{ skill: string }> = ({ skill }) => {
  return (
    <span className="inline-block bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300 text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">
      {skill}
    </span>
  );
};

const FeaturedExperience: React.FC = () => {
  const [showAllExperiences, setShowAllExperiences] = useState(false);

  const experiencesToDisplay = showAllExperiences
    ? experiencesData
    : experiencesData.slice(0, INITIAL_EXPERIENCES_TO_SHOW);

  const toggleShowAllExperiences = () => {
    setShowAllExperiences(!showAllExperiences);
  };

  return (
    <motion.section
      className="py-16 md:py-20 lg:py-24 w-full flex justify-center font-sans selection:bg-blue-100 selection:text-blue-700 dark:selection:bg-blue-900 dark:selection:text-blue-300 bg-white dark:bg-gray-900"
      variants={sectionAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-10 md:mb-12"
          variants={itemAnimation}
        >
          <div className="inline-block mb-4 p-3.5 bg-blue-100 dark:bg-blue-500/20 rounded-full shadow-sm">
            <ICON size={30} className="text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 dark:text-gray-50">
            {TITLE}
          </h2>
        </motion.div>

        {experiencesData.length > 0 ? (
          <div className="space-y-8 md:space-y-10">
            <AnimatePresence initial={false}>
              {experiencesToDisplay.map((exp) => (
                <motion.div
                  key={exp.id}
                  variants={itemAnimation}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  layout
                  className="p-6 border border-gray-200 dark:border-gray-700/70 rounded-xl bg-white dark:bg-gray-800/30 shadow-sm hover:shadow-md transition-all duration-300 ease-in-out"
                >
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-1.5">
                    <h3 className="text-xl font-medium text-gray-800 dark:text-gray-100">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0 flex items-center whitespace-nowrap">
                      <CalendarDays
                        size={14}
                        className="mr-1.5 shrink-0 text-gray-400 dark:text-gray-500"
                      />
                      {exp.duration}
                    </p>
                  </div>

                  {exp.companyUrl ? (
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-md mb-3.5 group text-blue-600 dark:text-blue-400 font-medium hover:underline"
                    >
                      <Building
                        size={15}
                        className="mr-1.5 shrink-0 text-gray-500 dark:text-gray-400 transition-colors group-hover:text-blue-500 dark:group-hover:text-blue-300"
                      />
                      {exp.company}
                      <LinkIcon
                        size={12}
                        className="inline-block ml-1 opacity-60 group-hover:opacity-100 transition-opacity"
                      />
                    </a>
                  ) : (
                    <p className="inline-flex items-center text-md mb-3.5 text-gray-700 dark:text-gray-300 font-medium">
                      <Building
                        size={15}
                        className="mr-1.5 shrink-0 text-gray-500 dark:text-gray-400"
                      />
                      {exp.company}
                    </p>
                  )}

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-base font-light text-gray-600 dark:text-gray-300/90 leading-relaxed"
                      >
                        <span className="mr-2 mt-1 text-blue-500 dark:text-blue-400 shrink-0">
                          &bull;
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  {exp.keySkills && exp.keySkills.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2 mt-4">
                        Key Skills:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.keySkills.map((skill, idx) => (
                          <SkillTag key={idx} skill={skill} />
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <motion.div variants={itemAnimation} className="text-center">
            <p className="text-lg text-gray-500 dark:text-gray-400 font-light">
              Details about my professional experience will be shared soon.
            </p>
          </motion.div>
        )}

        {experiencesData.length > INITIAL_EXPERIENCES_TO_SHOW && (
          <motion.div
            className="text-center mt-10 md:mt-12"
            variants={itemAnimation}
          >
            <button
              onClick={toggleShowAllExperiences}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-md transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 group"
            >
              {showAllExperiences ? (
                <>
                  <ChevronUp
                    size={16}
                    className="transition-transform group-hover:-translate-y-0.5"
                  />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown
                    size={16}
                    className="transition-transform group-hover:translate-y-0.5"
                  />
                  Show More (
                  {experiencesData.length - INITIAL_EXPERIENCES_TO_SHOW})
                </>
              )}
            </button>
          </motion.div>
        )}

        <motion.div
          className="mt-16 md:mt-24 text-center"
          variants={titleContentFadeIn}
        >
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto font-light text-base">
            Click the button below to view my educational background and
            projects.
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
      </div>
    </motion.section>
  );
};

export default FeaturedExperience;
