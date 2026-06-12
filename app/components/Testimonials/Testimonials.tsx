"use client";

import { motion } from "framer-motion";

interface TimelineItem {
  id: number;
  acf: {
    year: string;
    title: string;
    description: string;
    order: string;
  };
}

interface TimelineProps {
  data?: TimelineItem[];
}

export default function Timeline({ data = [] }: TimelineProps) {
  const timeline = Array.isArray(data)
    ? [...data].sort(
        (a, b) => Number(a.acf.order) - Number(b.acf.order)
      )
    : [];

  return (
    <section
      id="journey"
      className="py-24 bg-slate-950 text-white overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-20">
          <p className="text-orange-500 uppercase tracking-[4px] text-sm font-semibold">
            My Journey
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            Professional Timeline
          </h2>

          <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
            My journey from WordPress development to modern Headless CMS,
            Shopify and scalable web applications.
          </p>
        </div>

        <div className="relative">

          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-orange-500 -translate-x-1/2"></div>

          {timeline.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -80 : 80,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              className={`relative mb-16 flex items-center ${
                index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"
              }`}
            >
              <div className="w-full md:w-[44%]">
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-orange-500 hover:-translate-y-2 transition-all duration-300">

                  <span className="text-orange-500 text-3xl font-bold block mb-5">
                    {item.acf.year}
                  </span>

                  <h3 className="text-2xl font-bold mb-4">
                    {item.acf.title}
                  </h3>

                  <p className="text-slate-400 leading-8">
                    {item.acf.description}
                  </p>

                </div>
              </div>

              <div className="hidden md:block absolute left-1/2 w-6 h-6 bg-orange-500 rounded-full border-4 border-slate-950 -translate-x-1/2" />

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}