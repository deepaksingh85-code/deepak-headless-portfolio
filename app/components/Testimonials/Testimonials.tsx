"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "2020",
    title: "Started WordPress Development",
    description:
      "Started building WordPress websites, custom themes and business solutions.",
  },
  {
    year: "2022",
    title: "Shopify Development",
    description:
      "Worked on Shopify stores, theme customization and ecommerce projects.",
  },
  {
    year: "2024",
    title: "React & Next.js",
    description:
      "Expanded into React.js and Next.js development for modern web applications.",
  },
  {
    year: "2025",
    title: "Headless CMS & Integrations",
    description:
      "Built Headless WordPress projects, REST APIs, HubSpot and Salesforce integrations.",
  },
  {
    year: "2026",
    title: "Senior Developer",
    description:
      "Delivering enterprise WordPress, Shopify and Headless Commerce solutions.",
  },
];

export default function Timeline() {
  return (
    <section
      id="journey"
      className="py-24 bg-slate-950 text-white overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-orange-500 uppercase tracking-widest text-sm font-medium">
            My Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Professional Timeline
          </h2>

          <p className="text-slate-400 mt-5 max-w-2xl mx-auto">
            My journey from WordPress development to modern headless CMS and
            ecommerce solutions.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-orange-500 -translate-x-1/2"></div>

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -100 : 100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              className={`relative mb-16 flex items-center ${
                index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"
              }`}
            >
              {/* Card */}
              <div className="w-full md:w-[45%]">
                <div
                  className="
                    bg-slate-900
                    border
                    border-slate-800
                    rounded-2xl
                    p-6
                    hover:border-orange-500
                    hover:-translate-y-2
                    hover:shadow-[0_0_30px_rgba(249,115,22,0.2)]
                    transition-all
                    duration-500
                  "
                >
                  <span className="inline-block text-orange-500 font-bold text-lg mb-3">
                    {item.year}
                  </span>

                  <h3 className="text-xl font-semibold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Timeline Dot */}
              <div
                className="
                  hidden
                  md:block
                  absolute
                  left-1/2
                  w-6
                  h-6
                  bg-orange-500
                  rounded-full
                  border-4
                  border-slate-950
                  -translate-x-1/2
                  shadow-lg
                "
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}