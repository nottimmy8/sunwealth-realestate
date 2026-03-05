import HeroParallax from "@/components/hero-parallax";
import PropertyFilter from "@/components/property-filter";
import Navbar from "@/components/nav-bar";
import FeaturedProperties from "@/components/featured-properties";
import AboutUs from "@/components/aboutUs";
import Testimonial from "@/components/testimonial";
import Footer from "@/components/footer";
import Service from "@/components/service";
import Contact from "@/components/contact";
import Blog from "@/components/blog";

const Home = () => {
  return (
    <div className="w-full min-h-screen">
      <HeroParallax />
      <div className="relative z-20">
        <PropertyFilter />
      </div>
      <FeaturedProperties />

      <AboutUs />
      <Service />

      <Blog />

      <Testimonial />
      <Contact />

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
