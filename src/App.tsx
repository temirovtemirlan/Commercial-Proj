import { type FC, useEffect, useState } from "react";
import { domAnimation, LazyMotion } from "motion/react";
import { useInView } from "react-intersection-observer";

import Container from "components/Container";
import MonsReels from "components/MonsReels";
import Footer from "components/Footer";
import Directions from "components/Directions";
import Tariff from "components/Tariff";
import LogoCubeAnimation from "common/LogoCubeAnimation";
import WhyMonsterCorp from "components/WhyMonsterCorp";
import CultureSection from "components/CultureSection";
import FooterVideo from "components/FooterVideo";
import ContactForm from "common/ContactForm";
import LazyLoadLayout from "components/LazyLoadLayout";
import OurIndicators from "components/OurIndicators";
import FloatingActionButtons from "components/FloatingActionButtons";
import { AnimatedComponent } from "common/ui/animatedComponent";
import SectionVideos from "components/SectionVideos";
import SectionHeader from "components/SectionHeader";
import FixedHeader from "components/FixedHeader.tsx";
import { inViewProps } from "data/index";

const scrollThreshold = 1000;

const App: FC = () => {
  const [monsterCorpRef, monsterCorpInView] = useInView(inViewProps);
  const [monsReelsRef, monsReelsInView] = useInView({
    ...inViewProps,
    threshold: 0.9,
  });
  const [isScrollTo, setIsScrollTo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        setIsScrollTo(true);
      } else {
        setIsScrollTo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollThreshold]);

  return (
    <>
      <LazyMotion features={domAnimation}>
        {isScrollTo && <FixedHeader />}
        <SectionHeader />

        {/* Monster Corp. */}
        <Container className="bg-[#f5f5f7] xl:pt-[100px] pt-[50px] text-center">
          <div ref={monsterCorpRef} />

          <AnimatedComponent
            className="w-full text-center"
            initial={{ y: 100, opacity: 0 }}
            animate={monsterCorpInView ? { y: 0, opacity: 1 } : undefined}
            transition={{ duration: 0.8 }}
          >
            <legend className="gradient-legend-1lvl">Monster Corp.</legend>
            <span className="legend-2lvl">Болашақты құру өнері. </span>

            <p className="text-1lvl text-balance">
              Біз тек брендтер, мазмұн және технологиялар жасап қана қоймаймыз.
              <br />
              Біз бір бөлігі болғымыз келетін шындықты жасаймыз.
              <br /> <br />
              Әркімнің назарына талас жүріп жатқан әлемде қиялды баурай
              алатындар ұтады.
              <br />
              Monster Corp. — бұл деректер стратегияға, технологиялар —
              сезімдерге, ал идеялар мәдениетке айналатын экожүйе.
            </p>
          </AnimatedComponent>
        </Container>

        {/* Monsreels */}
        <Container className="bg-[#f5f5f7] xl:pt-[150px] pt-[80px] xl:pb-[100px] overflow-hidden">
          <AnimatedComponent
            tag="legend"
            className="legend-3lvl"
            initial={{ y: 40, opacity: 0 }}
            animate={monsReelsInView ? { y: 0, opacity: 1 } : undefined}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            Monsreels
          </AnimatedComponent>
          <div ref={monsReelsRef} />

          <MonsReels inView={monsReelsInView} />
        </Container>

        {/* Почему Monster Corp? */}
        <WhyMonsterCorp />

        {/* Video content*/}
        <div className="relative w-full max-w-full px-5 md:px-10 lg:px-0 overflow-hidden pb-[100px]">
          <video
            autoPlay
            muted
            playsInline
            preload="none"
            loop
            className="max-lg:w-full max-md:h-[320px] max-lg:h-[400px] object-cover"
          >
            <source
              src="https://storage.googleapis.com/mkit_monster_bucket/Video/MKIT/IMAC_V4.mp4"
              type="video/mp4"
            />
            <source
              src="https://storage.googleapis.com/mkit_monster_bucket/Video/MKIT/Video_MKIT_IMAC_V4.webm"
              type="video/webm"
            />
          </video>
        </div>

        <div className="relative bg-[#161617] py-[100px] mt-[50px]">
          <Directions />

          <OurIndicators />
        </div>

        {/* Мы не создаем контент. */}
        <CultureSection />

        <SectionVideos />

        <Tariff />

        <LazyLoadLayout className="pt-[100px]">
          <Container className="pt-[100px] pb-[200px] bg-[#161617]">
            <LogoCubeAnimation />
          </Container>
        </LazyLoadLayout>

        <div className="relative">
          <div className="sticky top-0">
            <div className="relative">
              <FooterVideo />
            </div>
          </div>

          <div
            className="sticky top-0 left-0 h-[50vh] w-full"
            style={{
              background:
                "linear-gradient(0deg, var(--bg-0), var(--bg-0) 25%, transparent)",
            }}
          />

          <div className="sticky top-0" draggable="false">
            <ContactForm />
          </div>
        </div>

        <Footer />
      </LazyMotion>

      <FloatingActionButtons />
    </>
  );
};

export default App;
