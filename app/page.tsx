import HeroParallax from "@/components/hero-parallax";
import Image from "next/image";
import banner from "@/public/banner.png";
import PropertyFilter from "@/components/property-filter";
import Navbar from "@/components/nav-bar";
import FeaturedProperties from "@/components/featured-properties";
import AboutUs from "@/components/aboutUs";
import Testimonial from "@/components/testimonial";

import Footer from "@/components/footer";
import Service from "@/components/service";
import Contact from "@/components/contact";

const Home = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="fixed z-50 top-o w-full px-4 md:px-0">
        <Navbar />
      </div>
      <HeroParallax />
      <div className="relative z-20">
        <PropertyFilter />
      </div>
      <FeaturedProperties />

      <AboutUs />
      <Service />

      <Testimonial />
      <Contact />

      <Footer />
    </div>
  );
};

export default Home;
