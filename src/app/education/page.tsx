"use client";

import React from "react";
import { Brain } from "lucide-react";
import Education from "@/components/_education/Education";
import Experience from "@/components/_education/Experience";
import Projects from "@/components/_education/Projects";

const EducationPage: React.FC = () => {
  return (
    <main className="flex flex-col items-center bg-gray-50 dark:bg-gray-900 min-h-screen font-sans">
      <header className="w-full py-20 md:py-28 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl sm:text-5xl font-medium text-gray-800 dark:text-gray-100 mb-5 tracking-tight">
            Learning & Expertise
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
            A clear overview of my academic background, certifications, and the
            skills I've cultivated.
          </p>
        </div>
      </header>
      <Education />
      {/* <Experience /> */}
      <Projects />
    </main>
  );
};

export default EducationPage;
