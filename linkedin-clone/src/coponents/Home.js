import React from "react";
import Footer from "./Footer";
import ForthSection from "./ForthSection";
import HeroSection from "./HeroSection";
import Header from "./singUPHome/Header";
import Testimonials from "./Testimonials";
import TrouverTravailSection from "./TrouverTravailSection";

function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <TrouverTravailSection />
      {/* <Testimonials/> */}
      <ForthSection />
      <Footer />
    </div>
  );
}

export default Home;
