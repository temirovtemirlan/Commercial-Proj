import type { FC } from "react";
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
import { cn } from "helpers/style";

interface HeaderProps {
  title: string;
  className?: string;
}
export const Header: FC<HeaderProps> = (props) => (
  <h1 className={cn("text-[80px] font-semibold", props.className)}>
    {props.title}
  </h1>
);

const view = { threshold: 0.2, triggerOnce: true };

const App: FC = () => {
  const [monsterCorpRef, monsterCorpInView] = useInView(view);
  const [monsreelsRef, monsreelsInView] = useInView({
    ...view,
    threshold: 0.9,
  });

  return (
    <>
      <LazyMotion features={domAnimation}>
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
            <span className="legend-2lvl">Исскуство создавать будущее.</span>

            <p className="text-1lvl">
              Мы не просто создаем бренды, контент и технологии. <br /> Мы
              строим реальность, которой хочется быть частью. <br /> <br />В
              мире, где каждый борется за внимание, выигрывают те, кто умеет{" "}
              <br />
              захватывать воображение. Monster Corp. — это экосистема,
              <br /> где данные превращаются в стратегию, технологии — в эмоции,
              <br /> а идеи — в культуру.
            </p>
          </AnimatedComponent>
        </Container>

        {/* Monsreels */}
        <Container className="bg-[#f5f5f7] xl:pt-[150px] pt-[80px] xl:pb-[100px] overflow-hidden">
          <AnimatedComponent
            tag="legend"
            className="legend-3lvl"
            initial={{ y: 40, opacity: 0 }}
            animate={monsreelsInView ? { y: 0, opacity: 1 } : undefined}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            Monsreels
          </AnimatedComponent>
          <div ref={monsreelsRef} />

          <MonsReels inView={monsreelsInView} />
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
          <Container className="pt-[100px] pb-[100px] bg-[#161617]">
            <LogoCubeAnimation />
          </Container>
        </LazyLoadLayout>

        <FooterVideo />

        <ContactForm />

        <Footer />
      </LazyMotion>

      <FloatingActionButtons />
    </>
  );
};

export default App;
