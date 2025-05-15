"use client";

import { motion } from "framer-motion";
import { Mail, Send, MessageCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

const sectionAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemAnimation = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const ContactMe: React.FC = () => {
  const userEmail = "example@gmail.com";

  return (
    <motion.section
      className="py-16  w-full flex justify-center 
      bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-800
      font-sans selection:bg-blue-100 selection:text-blue-700 dark:selection:bg-blue-800 dark:selection:text-blue-200"
      variants={sectionAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div className="mb-10 md:mb-12" variants={itemAnimation}>
          <div className="inline-block mb-4 p-3 bg-blue-100 dark:bg-blue-900/40 rounded-full">
            <MessageCircle
              size={32}
              className="text-blue-600 dark:text-blue-400"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-gray-900 dark:text-gray-100 mb-3">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg mx-auto font-light">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of something meaningful.
          </p>
        </motion.div>

        <motion.div variants={itemAnimation} className="mb-8 md:mb-10">
          <a
            href={`mailto:${userEmail}`}
            className="inline-flex items-center justify-center gap-2
                       text-lg font-medium text-blue-600 dark:text-blue-400
                       hover:text-blue-700 dark:hover:text-blue-300
                       transition-colors duration-200 group"
          >
            <Mail
              size={20}
              className="text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors"
            />
            <span>{userEmail}</span>
          </a>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 font-light">
            (Preferred for initial contact)
          </p>
        </motion.div>

        <motion.div variants={itemAnimation}>
          <Link
            href="/connect"
            className="inline-flex items-center justify-center gap-2
                       px-5 py-2.5 text-sm font-medium
                       text-blue-600 dark:text-blue-400
                       hover:bg-blue-50 dark:hover:bg-gray-800
                       rounded-md transition-colors duration-150
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                       dark:focus:ring-offset-gray-900/50 group
                       border border-blue-200 dark:border-blue-800/50 hover:border-blue-300 dark:hover:border-blue-700"
          >
            See All Contact Options
            <Send
              size={16}
              className="transition-transform duration-200 ease-in-out group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactMe;
