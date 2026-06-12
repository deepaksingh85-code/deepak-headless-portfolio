export const dynamic = "force-dynamic";
export const revalidate = 0;
import Image from "next/image";
import Link from "next/link";
import { fetchAPI } from "@/lib/wordpress";

interface BlogPost {
  id: number;
  slug: string;
  date: string;
  featured_media: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  _embedded?: {
    "wp:featuredmedia": {
      source_url: string;
    }[];
  };
}
export default async function Blog() {
const blogs: BlogPost[] = await fetchAPI(
  "/posts?_embed&per_page=3"
);


  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex justify-between items-center mb-14">
          <div>
            <p className="text-orange-500 uppercase tracking-[4px] text-sm font-semibold">
              BLOG
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              Latest Articles
            </h2>
          </div>

          <Link
            href="/blog"
            className="hidden md:inline-flex text-orange-500 font-semibold"
          >
            View All →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

{blogs.map((blog) => (
            <article
              key={blog.id}
              className="group bg-white border rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >

              <div className="relative h-60">

               <Image
  src={
    blog._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "/images/placeholder.webp"
  }
  alt={blog.title.rendered}
  fill
  unoptimized
  className="object-cover group-hover:scale-105 transition duration-500"
/>

              </div>

              <div className="p-6">

                <p className="text-orange-500 text-sm font-semibold uppercase">
                  Deepak Blogs
                </p>

                <h3
                  className="text-2xl font-bold mt-3 mb-3"
                  dangerouslySetInnerHTML={{
                    __html: blog.title.rendered,
                  }}
                />

                <div
                  className="text-gray-600 line-clamp-3"
                  dangerouslySetInnerHTML={{
                    __html: blog.excerpt.rendered,
                  }}
                />

                <p className="text-gray-400 mt-5">
                  {new Date(blog.date).toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}
                </p>

                <Link
                  href={`/blog/${blog.slug}`}
                  className="inline-flex mt-5 text-orange-500 font-semibold"
                >
                  Read Article →
                </Link>

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}