import HeroParallax from "@/components/hero-parallax";
import Image from "next/image";
import banner from "@/public/banner.png";
import PropertyFilter from "@/components/property-filter";
import Navbar from "@/components/nav-bar";
import FeaturedProperties from "@/components/featured-properties";
import AboutUs from "@/components/aboutUs";
import Testimonial from "@/components/testimonial";

const Home = () => {
  return (
    <div className="w-full h-screeen">
      <div className="fixed z-50 top-10  w-full ">
        <Navbar />
      </div>
      <HeroParallax />
      <div className="relative z-20">
        <PropertyFilter />
      </div>
      <FeaturedProperties />

      <AboutUs />

      <Testimonial />

      <footer className="bg-black h-[400px] ">
        <div></div>
      </footer>
    </div>
  );
};

export default Home;
