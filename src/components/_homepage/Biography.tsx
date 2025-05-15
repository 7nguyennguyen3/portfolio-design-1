"use client";

import { motion } from "framer-motion";
import { ArrowRight, Feather } from "lucide-react";
import Link from "next/link";
import React from "react";

const sectionAnimation = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] },
  },
};

const Biography: React.FC = () => {
  return (
    <motion.section
      className="py-16 md:py-20 lg:py-24 w-full flex justify-center font-sans selection:bg-blue-100 selection:text-blue-700 dark:selection:bg-blue-800 dark:selection:text-blue-200"
      variants={sectionAnimation}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <motion.div
          className="text-center mb-10 md:mb-12"
          variants={itemAnimation}
        >
          <div className="inline-block mb-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
            <Feather size={32} className="text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-gray-900 dark:text-gray-100 mb-3">
            A Bit About Me
          </h2>
        </motion.div>

        <div className="space-y-5 text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-light">
          <motion.p variants={itemAnimation}>
            My story started when I moved to the US as a kid. I was pretty quiet
            and introverted back then, so I played video games a lot. That’s how
            I first got interested in tech, I wanted to do something relating to
            coding like making video games or something similar. Fast forward to
            now, still a monkey, but with a few extra skills.
          </motion.p>
        </div>

        <motion.div
          className="text-center mt-10 md:mt-14"
          variants={itemAnimation}
        >
          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-2
                       px-5 py-2.5 text-sm font-medium
                       text-blue-600 dark:text-blue-400
                       hover:bg-blue-50 dark:hover:bg-gray-800
                       rounded-md transition-colors duration-150
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                       dark:focus:ring-offset-gray-900 group
                       border border-blue-200 dark:border-blue-800/50 hover:border-blue-300 dark:hover:border-blue-700"
          >
            Read More About Me
            <ArrowRight className="w-4 h-4 transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Biography;
