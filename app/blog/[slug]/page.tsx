import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import Image from "next/image";
import { fetchAPI } from "@/lib/wordpress";

interface BlogPost {
  id: number;
  slug: string;
  date: string;
  featured_media: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
}

interface Media {
  source_url: string;
}

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogSingle({ params }: Props) {
  const { slug } = await params;

  const posts: BlogPost[] = await fetchAPI(`/posts?slug=${slug}`);

  const post = posts[0];

  if (!post) {
    return (
      <>
        <Header />
        <div className="py-32 text-center text-4xl font-bold">
          Blog Not Found
        </div>
        <Footer />
      </>
    );
  }

  let image = "/images/placeholder.jpg";

  if (post.featured_media) {
    try {
      const media: Media = await fetchAPI(
        `/media/${post.featured_media}`
      );

      image = media.source_url;
    } catch {}
  }

  return (
    <>
      <Header />

      <main className="py-28 bg-white">

        <div className="max-w-5xl mx-auto px-6">

          <div className="relative w-full h-[500px] rounded-3xl overflow-hidden mb-10">

            <Image
              src={image}
              alt={post.title.rendered}
              fill
              unoptimized
              className="object-cover"
            />

          </div>

          <p className="text-orange-500 font-semibold mb-4">

            {new Date(post.date).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}

          </p>

          <h1
            className="text-5xl font-bold mb-10"
            dangerouslySetInnerHTML={{
              __html: post.title.rendered,
            }}
          />

          <article
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{
              __html: post.content.rendered,
            }}
          />

        </div>

      </main>

      <Footer />

    </>
  );
}