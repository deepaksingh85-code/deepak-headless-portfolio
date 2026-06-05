import Image from "next/image";

const projects = [
  {
    title: "Headless WordPress Platform",
    category: "Next.js + WordPress",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
    description:
      "Headless CMS using WordPress REST API and Next.js frontend.",
  },
  {
    title: "Shopify Fashion Store",
    category: "Shopify",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
    description:
      "Custom Shopify storefront with advanced filtering and metafields.",
  },
  {
    title: "WooCommerce Integration",
    category: "WordPress",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    description:
      "WooCommerce store integrated with CRM and marketing automation.",
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="mb-14">
          <p className="text-sm font-medium text-orange-500 uppercase tracking-widest mb-3">
            Portfolio
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Featured Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-60">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <span className="text-orange-500 text-sm font-medium">
                  {project.category}
                </span>

                <h3 className="text-xl font-semibold mt-2 mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>

                <button className="mt-5 text-orange-500 font-medium hover:underline">
                  View Project →
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}