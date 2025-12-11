"use client";

import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaMobileAlt,
  FaAndroid,
  FaRobot,
  FaBrain,
  FaCloud,
  FaServer,
  FaTools,
  FaChartLine,
  FaBullhorn,
} from "react-icons/fa";
import { SiDocker } from "react-icons/si";

export default function TechnologiesDetails() {
  const sections = [
    {
      title: "Web Development",
      subtitle: "Modern & scalable web solutions.",
      gradient: "from-sky-500 to-indigo-500",
      cards: [
        {
          icon: <FaReact className="text-sky-500" size={32} />,
          title: "Frontend",
          desc: "Interactive UI with modern frameworks.",
          stack: ["React", "Next.js", "Tailwind", "TypeScript"],
        },
        {
          icon: <FaNodeJs className="text-green-600" size={32} />,
          title: "Backend",
          desc: "High-performance API & databases.",
          stack: ["Node.js", "Express", "MongoDB"],
        },
        {
          icon: <FaServer className="text-indigo-500" size={32} />,
          title: "Integrations",
          desc: "REST, GraphQL & payment APIs.",
          stack: ["REST", "GraphQL", "OAuth"],
        },
      ],
    },

    {
      title: "App Development",
      subtitle: "Cross-platform and native app development.",
      gradient: "from-purple-500 to-pink-500",
      cards: [
        {
          icon: <FaMobileAlt className="text-pink-500" size={32} />,
          title: "Cross Platform",
          desc: "Single codebase for Android & iOS.",
          stack: ["React Native", "Flutter", "Expo"],
        },
        {
          icon: <FaAndroid className="text-green-500" size={32} />,
          title: "Native Apps",
          desc: "Best performance & deep hardware access.",
          stack: ["Kotlin", "Swift"],
        },
        {
          icon: <FaTools className="text-purple-500" size={32} />,
          title: "Deployment",
          desc: "CI/CD, store publishing & automation.",
          stack: ["Play Store", "App Store"],
        },
      ],
    },

    {
      title: "AI & Automation",
      subtitle: "LLMs, intelligent bots & ML systems.",
      gradient: "from-green-500 to-emerald-600",
      cards: [
        {
          icon: <FaBrain className="text-green-700" size={32} />,
          title: "Machine Learning",
          desc: "Predictive models & automation.",
          stack: ["Python", "TensorFlow", "Pandas"],
        },
        {
          icon: <FaRobot className="text-emerald-600" size={32} />,
          title: "AI Agents",
          desc: "Chatbots, RAG & workflow automation.",
          stack: ["OpenAI", "LangChain", "Vector DBs"],
        },
      ],
    },

    {
      title: "Cloud & DevOps",
      subtitle: "Scalable cloud hosting & deployment pipelines.",
      gradient: "from-orange-500 to-red-500",
      cards: [
        {
          icon: <FaCloud className="text-orange-500" size={32} />,
          title: "Cloud Hosting",
          desc: "Fast & secure cloud infrastructure.",
          stack: ["AWS", "Azure", "GCP"],
        },
        {
          icon: <SiDocker className="text-blue-600" size={32} />,
          title: "DevOps",
          desc: "CI/CD automation & containers.",
          stack: ["Docker", "Kubernetes", "GitHub Actions"],
        },
      ],
    },

    {
      title: "IT Consulting",
      subtitle: "Tech strategy, architecture & optimization.",
      gradient: "from-slate-600 to-gray-900",
      cards: [
        {
          icon: <FaTools className="text-gray-600" size={32} />,
          title: "Tech Strategy",
          desc: "Architecture planning & product direction.",
          stack: ["System Design", "Roadmaps"],
        },
        {
          icon: <FaServer className="text-slate-700" size={32} />,
          title: "Optimization",
          desc: "Performance improvement & scaling.",
          stack: ["Load Testing", "Cloud Migration"],
        },
      ],
    },

    {
      title: "Digital Marketing",
      subtitle: "SEO, branding, ads & social media growth.",
      gradient: "from-indigo-600 to-violet-600",
      cards: [
        {
          icon: <FaChartLine className="text-violet-600" size={32} />,
          title: "SEO & Content",
          desc: "Organic growth & ranking improvement.",
          stack: ["SEO", "Keyword Strategy"],
        },
        {
          icon: <FaBullhorn className="text-indigo-600" size={32} />,
          title: "Ads & Promotion",
          desc: "Paid ads & digital campaigns.",
          stack: ["Google Ads", "Meta Ads"],
        },
      ],
    },
  ];

  return (
    <div className="w-full px-4 md:px-10 py-14 space-y-16">

      {/* HEADER */}
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900">Technologies We Use</h1>
        <p className="text-base text-gray-600">
          A complete ecosystem of modern tools to build world-class digital products.
        </p>
      </div>

      {/* SECTIONS */}
      {sections.map((sec, index) => (
        <div key={index} className="space-y-8">
          
          {/* TITLE */}
          <div className={`p-6 rounded-2xl text-white bg-linear-to-r ${sec.gradient}`}>
            <h2 className="text-2xl font-semibold">{sec.title}</h2>
            <p className="text-base opacity-95">{sec.subtitle}</p>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

            {sec.cards.map((card, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-white shadow-md hover:shadow-xl border border-gray-100 transition hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{card.icon}</div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{card.desc}</p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {card.stack.map((item, j) => (
                        <span
                          key={j}
                          className="px-3 py-1 text-xs bg-gray-100 rounded-full text-gray-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      ))}
    </div>
  );
}
