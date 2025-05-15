"use client";

import React from "react";
import { ArrowRight, PawPrint, TreePine, CookingPot } from "lucide-react"; // Using Lucide for consistent icons

const AboutPage: React.FC = () => {
  const name = "Nguyen Nguyen";
  const taglineParts = [
    "Full-Stack Developer",
    "Lifelong Learner",
    <>
      Animal Enthusiast{" "}
      <PawPrint
        size={18}
        className="inline-block ml-1 mb-0.5 text-gray-500 dark:text-gray-400"
      />
    </>,
  ];

  // Configurable for other users
  const sectionTitles = {
    introduction: "Hello There!",
    journey: "Learning Journey",
    approach: "My Approach", // Changed from "Coding Philosophy"
    skills: "Core Skills", // Could be "Key Strengths", "Expertise"
    interests: "Beyond Work", // Could be "Personal Interests"
    lookingAhead: "Looking Ahead",
  };

  const skillsLink = {
    text: "View Detailed Skills Breakdown", // e.g., "See My Portfolio", "Explore My Projects"
    href: "/skills", // Placeholder, user would define this
  };

  return (
    <main className="bg-white dark:bg-gray-900 min-h-screen font-sans text-gray-800 dark:text-gray-200 selection:bg-blue-100 selection:text-blue-700 dark:selection:bg-blue-800 dark:selection:text-blue-200">
      <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
        {/* Header Section: Name and Tagline */}
        <header className="text-center mb-16 md:mb-20">
          <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-gray-900 dark:text-gray-50 mb-4">
            {name}
          </h1>
          <div className="text-gray-600 dark:text-gray-400 text-lg flex flex-wrap justify-center items-center">
            {taglineParts.map((part, index) => (
              <React.Fragment key={index}>
                <span className="inline-flex items-center">{part}</span>
                {index < taglineParts.length - 1 && (
                  <span className="mx-2.5 text-gray-300 dark:text-gray-600 select-none">
                    •
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </header>

        <div className="space-y-14 md:space-y-16">
          {/* Introduction Section */}
          <section aria-labelledby="introduction-heading">
            <h2
              id="introduction-heading"
              className="text-2xl font-medium tracking-tight text-gray-900 dark:text-gray-100 mb-4"
            >
              {sectionTitles.introduction}
            </h2>
            <p className="text-lg leading-relaxed font-light text-gray-700 dark:text-gray-300">
              I'm {name}, a Full-Stack Developer drawn to creating intuitive and
              effective web applications. My interest in technology started
              early, sparked by video games and leading to explorations in
              computing{" "}
              <span role="img" aria-label="computer">
                💻
              </span>
              . Through practice and building various projects, I've developed
              my skills in modern web development. Here’s a bit more about my
              journey and focus{" "}
              <span role="img" aria-label="rocket">
                🚀
              </span>
              .
            </p>
          </section>

          {/* Learning Journey Section */}
          <section aria-labelledby="journey-heading">
            <h2
              id="journey-heading"
              className="text-2xl font-medium tracking-tight text-gray-900 dark:text-gray-100 mb-4"
            >
              {sectionTitles.journey}
            </h2>
            <p className="text-lg leading-relaxed font-light text-gray-700 dark:text-gray-300">
              I enjoy the process of learning and am always seeking
              opportunities to grow. Starting with front-end development, I've
              progressively broadened my expertise into full-stack capabilities.
              My primary goal is to build applications that are genuinely useful
              and solve real-world problems.
            </p>
          </section>

          {/* My Approach Section */}
          <section aria-labelledby="approach-heading">
            <h2
              id="approach-heading"
              className="text-2xl font-medium tracking-tight text-gray-900 dark:text-gray-100 mb-4"
            >
              {sectionTitles.approach}
            </h2>
            <p className="text-lg leading-relaxed font-light text-gray-700 dark:text-gray-300">
              I approach challenges with persistence, focusing on understanding
              concepts deeply rather than just finding surface-level solutions.
              I find that thoroughly working through a problem solidifies my
              knowledge and improves my ability to tackle similar challenges
              later{" "}
              <span role="img" aria-label="lightbulb">
                💡
              </span>
              .
            </p>
          </section>

          {/* Core Skills Section */}
          <section aria-labelledby="skills-heading">
            <h2
              id="skills-heading"
              className="text-2xl font-medium tracking-tight text-gray-900 dark:text-gray-100 mb-4"
            >
              {sectionTitles.skills}
            </h2>
            <p className="text-lg leading-relaxed font-light text-gray-700 dark:text-gray-300 mb-5">
              I have experience across the full stack, including modern
              languages like TypeScript and Python, frontend frameworks like
              React/Next.js, backend technologies such as Node.js/FastAPI,
              various SQL/NoSQL databases, and essential DevOps tools like
              Docker & Git. I'm always expanding my toolkit!
            </p>
            {skillsLink.href && skillsLink.text && (
              <a
                href={skillsLink.href}
                className="inline-flex items-center text-lg text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-500 font-medium group transition-colors duration-150"
              >
                {skillsLink.text}
                <ArrowRight
                  size={18}
                  className="ml-1.5 transition-transform duration-200 ease-in-out group-hover:translate-x-1"
                />
              </a>
            )}
          </section>

          {/* Beyond Work / Personal Interests Section */}
          <section aria-labelledby="interests-heading">
            <h2
              id="interests-heading"
              className="text-2xl font-medium tracking-tight text-gray-900 dark:text-gray-100 mb-6"
            >
              {sectionTitles.interests}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <CookingPot
                    size={24}
                    className="text-gray-400 dark:text-gray-500"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-1">
                    Learning to Cook
                  </h3>
                  <p className="text-base leading-relaxed font-light text-gray-600 dark:text-gray-400">
                    I enjoy experimenting in the kitchen, often following
                    cooking videos or guides. It feels great when a dish comes
                    out delicious.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <TreePine
                    size={24}
                    className="text-gray-400 dark:text-gray-500"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-1">
                    Walking in Nature
                  </h3>
                  <p className="text-base leading-relaxed font-light text-gray-600 dark:text-gray-400">
                    Taking walks, often in local parks, helps me recharge. Being
                    surrounded by greenery and fresh air is both refreshing and
                    inspiring.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Looking Ahead Section */}
          <section aria-labelledby="looking-ahead-heading">
            <h2
              id="looking-ahead-heading"
              className="text-2xl font-medium tracking-tight text-gray-900 dark:text-gray-100 mb-4"
            >
              {sectionTitles.lookingAhead}
            </h2>
            <div className="space-y-4 text-lg leading-relaxed font-light text-gray-700 dark:text-gray-300">
              <p>
                Currently, I’m focused on developing robust platforms using
                modern web technologies, emphasizing responsive, accessible, and
                performant user experiences{" "}
                <span role="img" aria-label="globe">
                  🌐
                </span>
                .
              </p>
              <p>
                Looking ahead, I aim to contribute effectively to collaborative
                team environments{" "}
                <span role="img" aria-label="collaboration">
                  👨‍💻👩‍💻
                </span>
                , engage with the open-source community{" "}
                <span role="img" aria-label="earth">
                  🌍
                </span>
                , and continue learning to build impactful web solutions.
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
