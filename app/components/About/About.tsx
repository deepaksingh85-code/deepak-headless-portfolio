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
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Image */}
          <div>
            <div className="relative w-full max-w-md mx-auto">
              <Image
                src="/images/deepak.jpeg"
                alt="Deepak Kumar Singh"
                width={500}
                height={500}
                className="rounded-3xl object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div>
            <p className="text-sm font-medium text-orange-500 uppercase tracking-widest mb-3">
              About Me
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Building websites that perform & convert
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              I'm Deepak Kumar Singh, a WordPress and Shopify Developer
              with 8+ years of experience building modern websites,
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              I specialize in WordPress, WooCommerce, Shopify,
              React.js and Next.js. My focus is creating fast,
              scalable and user-friendly digital experiences.
            </p>

            <h3 className="text-xl font-semibold mb-4">
              Skills & Technologies
            </h3>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium hover:bg-orange-100 transition"
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