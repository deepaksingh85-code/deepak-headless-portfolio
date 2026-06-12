export const dynamic = "force-dynamic";
export const revalidate = 0;

import Image from "next/image";

const skills = [
  "WordPress",
  "WooCommerce",
  "Shopify",
  "React.js",
  "Next.js",
  "JavaScript",
  "PHP",
  "HTML",
  "CSS",
  "REST API",
  "Headless CMS",
  "Git",
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}

          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <Image
                src="/images/deepak.jpeg"
                alt="Deepak Kumar Singh"
                width={500}
                height={600}
                className="rounded-3xl object-cover shadow-lg"
              />
            </div>
          </div>

          {/* Right Content */}

          <div>

            <p className="text-sm font-semibold tracking-[4px] uppercase text-orange-500 mb-4">
              ABOUT ME
            </p>

            <h2 className="text-3xl md:text-3xl font-bold text-slate-900 leading-tight mb-8">
              Building high-performance websites & modern digital experiences
            </h2>

            <p className="text-sm text-gray-600 leading-6 mb-6">
              I'm <strong>Deepak Kumar Singh</strong>, a Full Stack Web Developer
              specializing in <strong>WordPress, Shopify, React.js, Next.js,
              and PHP</strong>. I build modern, scalable, and SEO-friendly
              websites that deliver exceptional user experiences.
            </p>

            <p className="text-sm text-gray-600 leading-8 mb-6">
              With expertise in <strong>WooCommerce, Headless CMS, REST APIs,
              JavaScript, and custom web development</strong>.
            </p>

            {/* Skills */}

            <h3 className="text-xl font-bold text-slate-900 mb-5">
              Skills & Technologies
            </h3>

            <div className="flex flex-wrap gap-3">

              {skills.map((skill) => (

                <span
                  key={skill}
                  className="px-5 py-2 bg-gray-100 rounded-full text-sm font-medium text-slate-700 hover:bg-orange-500 hover:text-white transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>

              ))}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}