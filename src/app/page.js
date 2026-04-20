import HeroSection from "./home-page/HeroSection";
import WhyUsSection from "./home-page/WhyUsSection";
import OurServiceSection from "./home-page/OurServiceSection";
import AboutLocation from "./home-page/AboutLocation";
import CtaSection from "./home-page/CtaSection";
import Navbar from "@/components/Navbar";
import { homePageQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
// --- QUERY ---

export default async function Home() {
  const page = await client.fetch(homePageQuery);
  const hero = page?.sections?.find((section) => section._type === "hero");

  return (
    <>
      <Navbar />
      <div id="main-content" className="pt-20">
        <HeroSection hero={hero} />
        <WhyUsSection />
        <OurServiceSection />
        <AboutLocation />
        <CtaSection />
      </div>
    </>
  );
}
