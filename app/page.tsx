import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";

import { fetchAPI } from "@/lib/wordpress";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Home() {
  const [
    home,
    services,
    portfolio,
    timeline,
    blogs,
  ] = await Promise.all([
    fetchAPI("/pages?slug=home"),
    fetchAPI("/service?_embed&orderby=date&order=asc"),
    fetchAPI("/portfolio?_embed"),
    fetchAPI("/timeline"),
    fetchAPI("/posts?_embed&per_page=3"),
  ]);

  const acf = home[0]?.acf;

  let heroImage = "";

  if (acf?.hero_image) {
    try {
      const media = await fetchAPI(`/media/${acf.hero_image}`);
      heroImage = media.source_url;
    } catch (error) {
      console.log(error);
    }
  }

  const heroData = {
    ...acf,
    hero_image: heroImage,
  };

  return (
    <>
      <Header />

      <Hero data={heroData} />

      <Services data={services} />

      <About />

      <Portfolio data={portfolio} />

      <Testimonials data={timeline} />

      <Blog data={blogs} />

      <Contact />

      <Footer />
    </>
  );
}