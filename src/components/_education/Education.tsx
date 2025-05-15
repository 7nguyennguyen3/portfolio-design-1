"use client";

import {
  CalendarDays,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  Link as LinkIcon,
} from "lucide-react";
import { useState } from "react";

interface EducationItemData {
  id: string;
  type: string;
  institution: string;
  credential: string;
  durationOrDate: string;
  description: string;
  institutionUrl?: string;
  credentialUrl?: string;
}

const educationData: EducationItemData[] = [
  {
    id: "edu1",
    type: "University",
    institution: "State University",
    credential: "B.S. in Computer Science",
    durationOrDate: "2014 - 2018",
    description:
      "Focused on foundational computer science principles, including data structures, algorithms, and software design. Graduated with honors.",
    institutionUrl: "https://example.edu/stateuniversity",
  },
  {
    id: "edu2",
    type: "Bootcamp",
    institution: "Dev Master Bootcamp",
    credential: "Full-Stack Web Development",
    durationOrDate: "2019",
    description:
      "Intensive program covering MERN stack, Python/Django, and modern software engineering practices. Completed multiple portfolio projects.",
    institutionUrl: "https://example.com/devmasterbootcamp",
    credentialUrl: "https://example.com/devmasterbootcamp/certificate/123",
  },
  {
    id: "edu3",
    type: "Online Course",
    institution: "Udemy",
    credential: "Advanced React and Redux",
    durationOrDate: "Completed Oct 2020",
    description:
      "In-depth study of advanced React patterns, state management with Redux Toolkit, and performance optimization strategies.",
    credentialUrl: "https://www.udemy.com/course/advanced-react-redux-example/",
  },
  {
    id: "edu4",
    type: "Certification",
    institution: "Cloud Cert Inc.",
    credential: "Certified Cloud Practitioner",
    durationOrDate: "Issued Dec 2021",
    description:
      "Validated foundational knowledge of cloud services and their application in modern infrastructure.",
    credentialUrl: "https://example.com/cloudcert/verify/456",
  },
  {
    id: "edu5",
    type: "University",
    institution: "Tech Institute Online",
    credential: "M.S. in Data Science",
    durationOrDate: "2021 - 2023",
    description:
      "Advanced studies in machine learning, big data analytics, and statistical modeling. Thesis on predictive maintenance.",
    institutionUrl: "https://example.edu/techinstitute",
  },
];

const INITIAL_EDUCATION_ITEMS_TO_SHOW = 3;

interface TimelineItemProps {
  edu: EducationItemData;
  isExpanded: boolean;
  onToggleExpand: () => void;
  isLast: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  edu,
  isExpanded,
  onToggleExpand,
  isLast,
}) => {
  return (
    <div className="relative pl-8 py-3">
      <div className="absolute left-0 top-[calc(1.125rem+3px)] transform -translate-y-1/2">
        <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full"></div>
      </div>
      {!isLast && (
        <div className="absolute left-[3.5px] top-[calc(1.125rem+7px)] bottom-0 w-px bg-gray-200 dark:bg-gray-700"></div>
      )}

      <div className="ml-4 cursor-pointer group" onClick={onToggleExpand}>
        <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-1">
          <div className="flex-grow">
            <h3 className="text-base font-medium text-gray-800 dark:text-gray-100">
              {edu.credential}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {edu.institutionUrl ? (
                <a
                  href={edu.institutionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-150 group-hover:underline"
                >
                  {edu.institution}
                  <LinkIcon
                    size={11}
                    className="inline-block ml-1 opacity-50 group-hover:opacity-100"
                  />
                </a>
              ) : (
                edu.institution
              )}
              <span className="mx-1 text-gray-300 dark:text-gray-600">•</span>
              <span className="text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500">
                {edu.type}
              </span>
            </p>
          </div>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-1 sm:mt-0.5 whitespace-nowrap flex items-center shrink-0 sm:pl-4">
            <CalendarDays size={13} className="inline mr-1.5" />
            {edu.durationOrDate}
          </p>
        </div>
        <div
          className={`mt-1 text-gray-400 dark:text-gray-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-150 ${
            isExpanded ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        >
          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </div>
      </div>

      {isExpanded && (
        <div key="details" className="ml-4 mt-0 pl-0 pr-2 pb-2 overflow-hidden">
          <div className="text-sm text-gray-600 dark:text-gray-300 font-light leading-relaxed space-y-2 pt-2">
            <p>{edu.description}</p>
            {edu.credentialUrl && (
              <a
                href={edu.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400 inline-flex items-center gap-1"
              >
                View Credential <LinkIcon size={13} />
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const Education: React.FC = () => {
  const [showAllEducation, setShowAllEducation] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const educationToDisplay = showAllEducation
    ? educationData
    : educationData.slice(0, INITIAL_EDUCATION_ITEMS_TO_SHOW);

  const toggleShowEducation = () => {
    setShowAllEducation(!showAllEducation);
  };

  return (
    <section id="education" className="py-12 md:py-16 w-full">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-medium text-gray-800 dark:text-gray-100 mb-2 flex items-center gap-2.5">
            <GraduationCap
              size={26}
              className="text-gray-500 dark:text-gray-400 shrink-0"
            />
            Education
          </h2>
          <p className="text-md text-gray-600 dark:text-gray-400 font-light">
            My academic journey and foundational learning.
          </p>
        </div>

        {educationData.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">
            Education details will be available soon.
          </p>
        ) : (
          <div className="relative">
            <div className="-my-3">
              {educationToDisplay.map((edu, index) => (
                <TimelineItem
                  key={edu.id}
                  edu={edu}
                  isExpanded={expandedId === edu.id}
                  onToggleExpand={() =>
                    setExpandedId(expandedId === edu.id ? null : edu.id)
                  }
                  isLast={
                    index === educationToDisplay.length - 1 &&
                    (!showAllEducation ||
                      educationToDisplay.length === educationData.length)
                  }
                />
              ))}
            </div>
          </div>
        )}

        {educationData.length > INITIAL_EDUCATION_ITEMS_TO_SHOW && (
          <div className="mt-10 text-center">
            <button
              onClick={toggleShowEducation}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-md transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            >
              {showAllEducation ? (
                <>
                  <ChevronUp size={16} /> Show Less
                </>
              ) : (
                <>
                  <ChevronDown size={16} /> Show More (
                  {educationData.length - INITIAL_EDUCATION_ITEMS_TO_SHOW})
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Education;
