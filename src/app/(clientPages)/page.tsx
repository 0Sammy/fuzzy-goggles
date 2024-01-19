//Components
import HeroSection from "@/components/(LandingPageComponents)/HeroSection";
import SecondSection from "@/components/(LandingPageComponents)/SecondSection";
import Partnership from "@/components/(LandingPageComponents)/Partnership";
import ThirdSection from "@/components/(LandingPageComponents)/ThirdSection";
import FourthSection from "@/components/(LandingPageComponents)/FourthSection";
import Testimonial from "@/components/(LandingPageComponents)/Testimonial";
import Contact from "@/components/(LandingPageComponents)/Contact";
import CTA from "@/components/(LandingPageComponents)/CTA"


export default function Home () {
  
  return (
    <main className="bg-white">
      <HeroSection />
      <SecondSection />
      <Partnership />
      <ThirdSection />
      <FourthSection />
      <Testimonial />
      <Contact />
      <CTA />
    </main>
  )
}
