import { FaWordpress, FaShopify } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const services = [
  {
    icon: <FaWordpress size={28} />,
    title: "WordPress Development",
    description:
      "Custom WordPress websites, themes, plugins and WooCommerce solutions tailored to your business needs.",
  },
  {
    icon: <FaShopify size={28} />,
    title: "Shopify Development",
    description:
      "Build, customize and optimize Shopify stores with modern design and seamless user experience.",
  },
  {
    icon: <SiNextdotjs size={28} />,
    title: "Headless CMS Development",
    description:
      "Build fast and scalable headless websites using WordPress, React and Next.js.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="mb-14">
          <p className="text-sm font-medium text-orange-500 uppercase tracking-widest mb-3">
            What I Do
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Services
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-orange-500 hover:-translate-y-2 transition-all duration-300 shadow-sm"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-orange-100 text-orange-500 mb-6">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}