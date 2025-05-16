import { useState } from "react";
import { Layers, Link as LinkIcon, ChevronDown, ChevronUp } from "lucide-react";

interface ProjectItemData {
  id: string;
  projectName: string;
  subtitle: string;
  purpose: string[];
  skillsApplied: string[];
  projectUrl?: string;
}

const projectsData: ProjectItemData[] = [
  {
    id: "projVersaAI",
    projectName: "Versa-AI",
    subtitle:
      "AI-powered document interaction platform with intelligent PDF conversations.",
    purpose: [
      "An AI-driven document intelligence platform enabling users to interact with PDFs conversationally, as if chatting with an expert on the document's content.",
      "It extracts key insights, summarizes reports, and answers contextual questions from PDFs, streamlining document analysis and information retrieval.",
    ],
    skillsApplied: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Zustand",
      "Node.js",
      "FastAPI",
      "Python",
      "Langchain",
      "OpenAI",
      "Firebase",
      "JWT",
    ],
    projectUrl: "https://versa-ai.co/",
  },
  {
    id: "projPetalSoft",
    projectName: "PetalSoft",
    subtitle: "An E-Commerce Web App for selling skincares and perfumes.",
    purpose: [
      "A custom-built e-commerce web application designed from scratch for selling skincare and perfume products online.",
      "It processes customer payments, features an integrated chatbot for support, and provides an admin dashboard for managing inventory, orders, and sales analytics.",
    ],
    skillsApplied: [
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "Stripe",
      "Cloudinary",
      "JWT Auth",
      "Vercel",
      "Framer Motion",
      "Zustand",
      "Tailwind CSS",
      "Shadcn-UI",
      "React Email",
    ],
    projectUrl: "https://www.petalsoft.store/",
  },
];

const INITIAL_PROJECTS_TO_SHOW = projectsData.length;

const Projects: React.FC = () => {
  const [showAllProjects, setShowAllProjects] = useState(true);

  const projectsToDisplay = showAllProjects
    ? projectsData
    : projectsData.slice(0, INITIAL_PROJECTS_TO_SHOW);

  const toggleShowProjects = () => {
    setShowAllProjects(!showAllProjects);
  };

  return (
    <section id="projects" className="py-12 md:py-16 w-full">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-medium text-gray-800 dark:text-gray-100 mb-2 flex items-center gap-2.5">
            <Layers
              size={26}
              className="text-gray-500 dark:text-gray-400 shrink-0"
            />
            Projects
          </h2>
          <p className="text-md text-gray-600 dark:text-gray-400 font-light">
            A selection of my key projects.
          </p>
        </div>

        {projectsData.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">
            Project details will be available soon.
          </p>
        ) : (
          <div className="space-y-10 md:space-y-12">
            {projectsToDisplay.map((proj) => (
              <div key={proj.id} className="relative">
                <div className="mb-2 sm:mb-3">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100">
                    {proj.projectUrl ? (
                      <a
                        href={proj.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-150 group hover:underline"
                      >
                        {proj.projectName}
                        <LinkIcon
                          size={12}
                          className="inline-block ml-1.5 opacity-50 group-hover:opacity-100"
                        />
                      </a>
                    ) : (
                      proj.projectName
                    )}
                  </h3>
                  <p className="text-md text-gray-500 dark:text-gray-400">
                    {proj.subtitle}
                  </p>
                </div>

                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5 mt-3">
                  Overview:
                </h4>
                <ul className="space-y-2 mb-4 text-sm text-gray-700 dark:text-gray-300 font-light leading-relaxed">
                  {proj.purpose.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-gray-400 dark:text-gray-500 mt-1.5">
                        &bull;
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {proj.skillsApplied && proj.skillsApplied.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Skills Applied:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {proj.skillsApplied.map((skill, idx) => (
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

        {projectsData.length > INITIAL_PROJECTS_TO_SHOW &&
          projectsData.length > 2 && (
            <div className="mt-12 md:mt-16 text-center">
              <button
                onClick={toggleShowProjects}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-md transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              >
                {showAllProjects ? (
                  <>
                    <ChevronUp size={16} /> Show Less
                  </>
                ) : (
                  <>
                    <ChevronDown size={16} /> Show More (
                    {projectsData.length - INITIAL_PROJECTS_TO_SHOW})
                  </>
                )}
              </button>
            </div>
          )}
      </div>
    </section>
  );
};

export default Projects;
