import Hero from "@/components/sections/Hero";
import Applications from "@/components/sections/Applications";
import Technologies from "@/components/sections/Technologies";
import About from "@/components/sections/About";
import WhyUs from "@/components/sections/WhyUs";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";
import SplashScreen from "@/components/layout/SplashScreen";

export default function Home() {
  return (
    <>
      <SplashScreen />
      <Hero />
      <Applications />
      <Technologies />
      <About />
      <WhyUs />
      <Services />
      <Portfolio />
      <Contact />
    </>
  );
}
