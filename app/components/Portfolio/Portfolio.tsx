import Image from "next/image";

interface Portfolio {
  id: number;
  title: {
    rendered: string;
  };
  acf: {
    short_description: string;
    project_link: string;
  };
  _embedded?: {
    "wp:featuredmedia": {
      source_url: string;
    }[];
  };
}

interface PortfolioProps {
  data: Portfolio[];
}

export default function Portfolio({
  data,
}: PortfolioProps) {
  const projects = data || [];

  return (
    <section id="work" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <div className="mb-14">
          <p className="text-sm font-semibold tracking-[4px] uppercase text-orange-500 mb-3">
            PORTFOLIO
          </p>

          <h2 className="text-5xl font-bold text-slate-900">
            Featured Projects
          </h2>
        </div>

        {/* Portfolio Grid */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (

            <div
              key={project.id}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-orange-500 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl"
            >

              {/* Image */}

              <div className="relative h-64 overflow-hidden">

                <Image
                  src={
                    project._embedded?.["wp:featuredmedia"]?.[0]
                      ?.source_url || "/images/placeholder.jpg"
                  }
                  alt={project.title.rendered}
                  fill
                  unoptimized
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

              </div>

              {/* Content */}

              <div className="p-7">

                <p className="text-orange-500 text-sm font-semibold uppercase tracking-widest mb-3">
                  PORTFOLIO
                </p>

                <h3
                  className="text-3xl font-bold text-slate-900 leading-tight mb-4"
                  dangerouslySetInnerHTML={{
                    __html: project.title.rendered,
                  }}
                />

                <p className="text-gray-600 leading-8 mb-6">
                  {project.acf?.short_description}
                </p>

                <a
                  href={project.acf?.project_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:gap-3 transition-all duration-300"
                >
                  View Project →
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

