import Biography from "@/components/_homepage/Biography";
import ContactMe from "@/components/_homepage/Contact";
import FeaturedExperience from "@/components/_homepage/FeaturedExperience";
import HeroBanner from "@/components/_homepage/HeroBanner";
import PortfolioCarousel from "@/components/_homepage/PortfolioCarousel";
import Skills from "@/components/_homepage/Skills";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroBanner />
      <Biography />
      <PortfolioCarousel />
      {/* <FeaturedExperience /> */}
      <Skills />
      <ContactMe />
    </div>
  );
};

export default HomePage;
