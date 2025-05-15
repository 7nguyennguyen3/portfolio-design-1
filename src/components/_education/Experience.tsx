import { useState } from "react";
import {
  Briefcase,
  CalendarDays,
  Link as LinkIcon,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface ExperienceItemData {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string[];
  keySkills: string[];
  companyUrl?: string;
  logoIcon?: React.ReactNode;
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
    duration: "2017 - 2019",
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

const sectionContainerAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: "easeInOut", staggerChildren: 0.15 },
  },
};
const experienceItemAnimation = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

const Experience: React.FC = () => {
  const [showAllExperiences, setShowAllExperiences] = useState(false);

  const experiencesToDisplay = showAllExperiences
    ? experiencesData
    : experiencesData.slice(0, INITIAL_EXPERIENCES_TO_SHOW);

  const toggleShowExperiences = () => {
    setShowAllExperiences(!showAllExperiences);
  };

  return (
    <section id="experience" className="py-12 md:py-16 w-full">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-medium text-gray-800 dark:text-gray-100 mb-2 flex items-center gap-2.5">
            <Briefcase
              size={26}
              className="text-gray-500 dark:text-gray-400 shrink-0"
            />
            Experience
          </h2>
          <p className="text-md text-gray-600 dark:text-gray-400 font-light">
            My professional roles and contributions.
          </p>
        </div>

        {experiencesData.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">
            Experience details will be available soon.
          </p>
        ) : (
          <div className="space-y-10 md:space-y-12">
            {experiencesToDisplay.map((exp) => (
              <div key={exp.id} className="relative">
                <div className="flex flex-col sm:flex-row items-start mb-2 sm:mb-1">
                  <div className="flex-grow">
                    <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100">
                      {exp.role}
                    </h3>
                    <p className="text-md text-gray-500 dark:text-gray-400">
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-150 group hover:underline"
                        >
                          {exp.company}
                          <LinkIcon
                            size={12}
                            className="inline-block ml-1 opacity-50 group-hover:opacity-100"
                          />
                        </a>
                      ) : (
                        exp.company
                      )}
                    </p>
                  </div>
                  <div className="shrink-0 text-xs text-gray-400 dark:text-gray-500 mt-1 sm:mt-1.5 flex items-center gap-1.5 sm:pl-4">
                    <CalendarDays size={14} />
                    {exp.duration}
                  </div>
                </div>
                <ul className="space-y-2 mb-4 text-sm text-gray-700 dark:text-gray-300 font-light leading-relaxed">
                  {exp.description.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-gray-400 dark:text-gray-500 mt-1.5">
                        &bull;
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {exp.keySkills && exp.keySkills.length > 0 && (
                  <div>
                    <div className="flex flex-wrap gap-2">
                      {exp.keySkills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 text-xs font-medium text-gray-600 bg-gray-100 dark:text-gray-300 dark:bg-gray-700/60 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {experiencesData.length > INITIAL_EXPERIENCES_TO_SHOW && (
          <div className="mt-12 md:mt-16 text-center">
            <button
              onClick={toggleShowExperiences}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-md transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            >
              {showAllExperiences ? (
                <>
                  <ChevronUp size={16} /> Show Less
                </>
              ) : (
                <>
                  <ChevronDown size={16} /> Show More (
                  {experiencesData.length - INITIAL_EXPERIENCES_TO_SHOW})
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
