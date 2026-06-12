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
  const home = await fetchAPI("/pages?slug=home");

  const acf = home[0].acf;

  const media = await fetchAPI(`/media/${acf.hero_image}`);

  const heroData = {
    ...acf,
    hero_image: media.source_url,
  };

  return (
    <>
      <Header />
      <Hero data={heroData} />
      <Services />
      <About />
      <Portfolio />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}