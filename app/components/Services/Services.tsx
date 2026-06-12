export const dynamic = "force-dynamic";
export const revalidate = 0;

import { fetchAPI } from "@/lib/wordpress";

interface Service {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  _embedded?: {
    "wp:featuredmedia": {
      source_url: string;
    }[];
  };
}

export default async function Services() {
  const services: Service[] = await fetchAPI(
    "/service?_embed&orderby=date&order=asc"
  );

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <div className="mb-14">
          <p className="text-sm font-semibold tracking-[4px] uppercase text-orange-500 mb-3">
            WHAT I DO
          </p>

          <h2 className="text-5xl font-bold text-slate-900">
            Services
          </h2>
        </div>

        {/* Service Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => (

            <div
              key={service.id}
              className="bg-white rounded-3xl p-10 border border-gray-200 shadow-sm hover:border-orange-400 hover:-translate-y-2 transition-all duration-300"
            >

              {/* Icon */}

              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8">

                <img
                  src={
                    service._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
                    "/images/placeholder.png"
                  }
                  alt={service.title.rendered}
                  className="w-10 h-10 object-contain"
                />

              </div>

              {/* Title */}

              <h3 className="text-xl font-bold text-slate-900 mb-5 leading-tight">
                {service.title.rendered}
              </h3>

              {/* Description */}

              <div
                className="text-gray-600 text-sm leading-8"
                dangerouslySetInnerHTML={{
                  __html: service.content.rendered,
                }}
              />

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}