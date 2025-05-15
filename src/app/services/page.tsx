"use client";

import React from "react";
import {
  Briefcase,
  Code,
  Database,
  Smartphone,
  DollarSign,
  Cloud,
  Settings,
  PenTool,
  Search,
} from "lucide-react";

interface ServiceItem {
  id: string;
  icon?: React.ReactNode;
  name: string;
  description: string;
  price?: string;
  features?: string[];
}

const servicesConfig = {
  pageTitle: "My Services",
  pageIntro:
    "As a full-stack developer, I offer a range of services to bring your digital projects to life, from initial concept to final deployment and beyond.",
  services: [
    {
      id: "web-dev",
      icon: <Code size={28} className="text-blue-500 dark:text-blue-400" />,
      name: "Custom Web Application Development",
      description:
        "Building responsive, scalable, and secure web applications tailored to your specific business needs using modern technologies (e.g., React, Node.js, Python/Django).",
      price: "Project-based (Request a Quote)",
      features: [
        "Frontend (React, Vue, Angular)",
        "Backend (Node.js, Python, Ruby)",
        "API Development",
        "Database Integration",
      ],
    },
    {
      id: "mobile-dev",
      icon: (
        <Smartphone size={28} className="text-green-500 dark:text-green-400" />
      ),
      name: "Mobile App Development (Cross-Platform)",
      description:
        "Developing intuitive and high-performance mobile applications for iOS and Android using frameworks like React Native or Flutter.",
      price: "Starting at $5,000",
      features: [
        "React Native",
        "Flutter",
        "iOS & Android",
        "Push Notifications",
        "Offline Support",
      ],
    },
    {
      id: "db-design",
      icon: (
        <Database size={28} className="text-purple-500 dark:text-purple-400" />
      ),
      name: "Database Design & Optimization",
      description:
        "Designing efficient database schemas, optimizing queries, and managing data for relational (SQL) and NoSQL databases.",
      price: "$100 - $150/hr",
      features: [
        "SQL (PostgreSQL, MySQL)",
        "NoSQL (MongoDB, Firebase)",
        "Schema Design",
        "Query Optimization",
      ],
    },
    {
      id: "api-dev",
      icon: (
        <Settings size={28} className="text-yellow-500 dark:text-yellow-400" />
      ),
      name: "API Development & Integration",
      description:
        "Creating robust RESTful or GraphQL APIs for your applications and integrating third-party services to extend functionality.",
      features: [
        "REST APIs",
        "GraphQL",
        "Third-party Integrations",
        "Authentication & Authorization",
      ],
    },
    {
      id: "ui-ux-design",
      icon: <PenTool size={28} className="text-pink-500 dark:text-pink-400" />,
      name: "UI/UX Design & Prototyping",
      description:
        "Crafting user-friendly interfaces and intuitive user experiences, from wireframes and prototypes to final designs. (Can collaborate with dedicated designers or provide foundational design).",
      price: "Contact for details",
      features: [
        "Wireframing",
        "Prototyping (Figma, Adobe XD)",
        "Responsive Design",
        "User Research Insights",
      ],
    },
    {
      id: "cloud-deployment",
      icon: <Cloud size={28} className="text-teal-500 dark:text-teal-400" />,
      name: "Cloud Deployment & DevOps",
      description:
        "Assisting with deploying applications to cloud platforms (AWS, Google Cloud, Azure) and setting up CI/CD pipelines for efficient development workflows.",
      features: [
        "AWS, GCP, Azure",
        "Docker, Kubernetes",
        "CI/CD Pipelines",
        "Serverless Architecture",
      ],
    },
    {
      id: "seo-consulting",
      icon: (
        <Search size={28} className="text-indigo-500 dark:text-indigo-400" />
      ),
      name: "Technical SEO Consulting",
      description:
        "Optimizing website structure, performance, and on-page elements to improve search engine visibility and ranking.",
      price: "$80 - $120/hr",
      features: [
        "Site Audits",
        "Performance Optimization",
        "Structured Data",
        "Keyword Analysis (Technical aspects)",
      ],
    },
  ] as ServiceItem[], // Type assertion
  pricingDisclaimer:
    "Please note: Prices are indicative and may vary based on project scope and complexity. Contact me for a detailed quote.",
};

const ServicesPage: React.FC = () => {
  return (
    <main className="bg-white dark:bg-gray-900 min-h-screen font-sans text-gray-800 dark:text-gray-200 selection:bg-blue-100 selection:text-blue-700 dark:selection:bg-blue-800 dark:selection:text-blue-200">
      <div className="max-w-4xl mx-auto px-6 py-20 md:py-28">
        <header className="text-center mb-16 md:mb-20">
          <h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-gray-900 dark:text-gray-50 mb-4">
            {servicesConfig.pageTitle}
          </h1>
          {servicesConfig.pageIntro && (
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light">
              {servicesConfig.pageIntro}
            </p>
          )}
        </header>

        {servicesConfig.services.length > 0 ? (
          <div className="space-y-12 md:space-y-16">
            {servicesConfig.services.map((service) => (
              <section
                key={service.id}
                aria-labelledby={`service-${service.id}-heading`}
                className="p-6 md:p-8 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 bg-gray-50 dark:bg-gray-800/50"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4">
                  {service.icon && (
                    <div className="flex-shrink-0 mr-5 mb-3 sm:mb-0 p-2.5 bg-gray-100 dark:bg-gray-700 rounded-lg">
                      {service.icon}
                    </div>
                  )}
                  <h2
                    id={`service-${service.id}-heading`}
                    className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-gray-100"
                  >
                    {service.name}
                  </h2>
                </div>

                <p className="text-base font-light text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
                  {service.description}
                </p>

                {service.features && service.features.length > 0 && (
                  <div className="mb-5">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Key Features/Technologies:
                    </h4>
                    <ul className="flex flex-wrap gap-2">
                      {service.features.map((feature, index) => (
                        <li
                          key={index}
                          className="text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 px-2.5 py-1 rounded-full"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {service.price && (
                  <div className="flex items-center text-sm text-gray-700 dark:text-gray-300 bg-green-50 dark:bg-green-900/30 p-3 rounded-md">
                    <DollarSign
                      size={18}
                      className="mr-2 text-green-600 dark:text-green-400 flex-shrink-0"
                    />
                    <span className="font-medium">Price:</span>
                    <span className="ml-1.5 font-light">{service.price}</span>
                  </div>
                )}
              </section>
            ))}

            {servicesConfig.pricingDisclaimer && (
              <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-16 font-light">
                {servicesConfig.pricingDisclaimer}
              </p>
            )}
          </div>
        ) : (
          <div className="text-center py-12">
            <Briefcase
              size={48}
              className="mx-auto text-gray-400 dark:text-gray-500 mb-4"
            />
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Services information coming soon.
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default ServicesPage;
