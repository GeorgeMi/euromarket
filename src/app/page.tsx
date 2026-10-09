import Hero from "@/components/Hero";
import Applications from "@/components/Applications";
import Technologies from "@/components/Technologies";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import SplashScreen from "@/components/SplashScreen";

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
