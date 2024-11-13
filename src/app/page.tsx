import Hero from "@/components/Hero";
import Wrapper from "@/components/Wrapper";
import SectionOne from "@/components/SectionOne";
import Footer from "@/components/Footer";
import SectionTwo from "@/components/SectionTwo";
import SectionThree from "@/components/SectionThree";
import MapsSection from "@/components/MapsSection";

export default function Home() {
  return (
    <Wrapper>
      <div className=" flex flex-col h-[850px] xl:h-full gap-20">
        <Hero />
        <SectionOne />
        <SectionTwo/>
        <SectionThree/>
        <MapsSection/>
        <Footer />
      </div>
    </Wrapper>
  );
}
