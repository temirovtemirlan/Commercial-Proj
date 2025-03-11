import { type FC } from "react";
import { Tab, TabList, Tabs, TabPanel } from "react-tabs";
import { domAnimation, LazyMotion } from "motion/react";

import Container from "components/Container.tsx";
import { cn } from "helpers/style.ts";
import HowWeWork from "components/HowWeWork.tsx";
// import { TariffStart } from "components/TariffBlock.tsx";

import PartnersAndClients from "components/PartnersAndClients.tsx";
import MonsReels from "components/MonsReels.tsx";
import Footer from "components/Footer";
// import VimeoEmbed from "components/VimeoEmbed";
import LazyVideoFrame from "components/LazyVideoFrame.tsx";
import LazyLoadLayout from "components/LazyLoadLayout.tsx";
// import Tariff from "components/Tariff";

// import { TariffStart } from "components/TariffBlock";

interface HeaderProps {
  title: string;
  className?: string;
}
export const Header: FC<HeaderProps> = (props) => (
  <h1 className={cn("text-[80px] font-semibold", props.className)}>
    {props.title}
  </h1>
);

const App: FC = () => {
  return (
    <LazyMotion features={domAnimation}>
      <div>
        <>
          <Container className={"py-[70px]"}>
            <div className={"flex justify-between  xl:flex-row flex-col"}>
              <Header title={"Monster"} />
              <p className={"text-black text-2xl grow-1 xl:max-w-[700px]"}>
                Мы – не просто digital-агентство. «Монстр» – это экосистема
                креативных и технологичных решений, созданная для того, чтобы
                выводить бренды на новый уровень. Мы – ваш сокрушительный
                аргумент в борьбе за лидерство.
              </p>
            </div>
          </Container>
          {/* Showreel */}
          <div>
            <Tabs className={cn("Monstr-Showreel")}>
              <TabPanel>
                <LazyVideoFrame
                  videoSrc={
                    "https://storage.googleapis.com/mkit_monster_bucket/Video/CG/CG_REEL_HORIZONTAL_2.mp4"
                  }
                  posterSrc={""}
                />
              </TabPanel>
              <TabPanel>
                <LazyVideoFrame
                  videoSrc={
                    "https://storage.googleapis.com/mkit_monster_bucket/Video/AI/AI_REEL_HORIZONTAL_NEW.mp4"
                  }
                  posterSrc={""}
                />
              </TabPanel>
              <div className={"bg-[#f5f5f7] w-full super-center pt-5"}>
                <TabList className="inline-flex gap-3.5 p-[5px] bg-white rounded-full">
                  <Tab className="tab__delivery_panels whitespace-nowrap px-6 py-2.5">
                    CG REEL
                  </Tab>
                  <Tab className="tab__delivery_panels whitespace-nowrap px-6 py-2.5">
                    AI REEL
                  </Tab>
                </TabList>
              </div>
            </Tabs>
          </div>
          {/*  */}
          <div></div>
          <Container className="bg-[#f5f5f7] pt-[150px] pb-[100px] overflow-hidden">
            <Header className={"text-[56px] pb-[80px]"} title={"Monsreels"} />
            <MonsReels />
          </Container>
          {/*  How we work */}
          <HowWeWork />
        </>

        {/* Tariff */}
        {/* <>
          <Tariff />
        </> */}

        <>
          {/*<Container className={"py-[100px]"}>*/}
          {/*  <Header className={"text-[56px] mb-[60px]"} title={"Изучите тарифы."} />*/}
          {/*  <div className={"flex justify-evenly"}>*/}
          {/*    <TariffStart />*/}
          {/*    <TariffStart />*/}
          {/*    <TariffStart />*/}
          {/*  </div>*/}
          {/*  <hr className={"my-[50px] border-[#d2d2d7]"} />*/}
          {/*  <div className={"flex justify-evenly w-full"}>*/}
          {/*    <div className={"w-[360px]"}>*/}
          {/*      <div className="text-center text-black text-[28px] font-semibold font-['Nunito Sans']">*/}
          {/*        13” or 11”*/}
          {/*        <span*/}
          {/*          className={"text-xs block mt-3 font-normal leading-relaxed"}*/}
          {/*        >*/}
          {/*          Ultra Retina XDR display4 <br /> ProMotion technology <br /> P3*/}
          {/*          wide color <br /> Nano-texture display glass option <br /> on*/}
          {/*          1TB and 2TB models*/}
          {/*        </span>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*    <div className={"w-[360px]"}></div>*/}
          {/*    <div className={"w-[360px]"}></div>*/}
          {/*  </div>*/}
          {/*</Container>*/}
        </>

        {/*<VimeoEmbed videoId={"1062552326"} videoURL={"e4348904e6"} />*/}

        <div>
          <Container>
            <div>
              <LazyVideoFrame
                videoSrc={
                  "https://storage.googleapis.com/mkit_monster_bucket/Video/AI/COCA_COLA_AI_COMMERCIAL.mp4"
                }
              />
              {/*<VimeoEmbed*/}
              {/*  className={"object-center object-cover bg-black"}*/}
              {/*  height={"700px"}*/}
              {/*  videoId="1062549483"*/}
              {/*  videoURL="a20cba6903"*/}
              {/*/>*/}
            </div>
            <div className={"flex gap-5 mt-5"}>
              <div className={"bg-[#f5f5f7] w-full h-[517.61px]"}>
                <LazyVideoFrame
                  className={"h-full"}
                  videoSrc={
                    "https://storage.googleapis.com/mkit_monster_bucket/Video/AI/BAKAI_GPT_REMAKE.mov"
                  }
                  height={"100%"}
                />
              </div>
              <div className={"bg-[#f5f5f7] w-full h-[517.61px]"}>
                <LazyVideoFrame
                  className={"h-full"}
                  videoSrc={
                    "https://storage.googleapis.com/mkit_monster_bucket/Video/CG/INTERSPORT.mp4"
                  }
                  height={"100%"}
                />
              </div>
            </div>
            <div className={"mt-5"}>
              <LazyVideoFrame
                className={"h-full"}
                videoSrc={
                  "https://storage.googleapis.com/mkit_monster_bucket/Video/AI/organic_juice_commercial%20(1080p).mp4"
                }
                height={"100%"}
              />
            </div>
            <div className="mt-5">{/* замена */}</div>

            <div className="mt-5">
              <LazyVideoFrame
                videoSrc={
                  "https://storage.googleapis.com/mkit_monster_bucket/Video/CG/3D_JOY_COMMERCIAL.mp4"
                }
                posterSrc={
                  "https://storage.googleapis.com/mkit_monster_bucket/Poster/JOY_COMMERCIAL_H.webp"
                }
              />
            </div>
          </Container>

          <Container className={"mt-[100px] pt-[100px] pb-[100px] bg-black"}>
            <LazyLoadLayout>
              <PartnersAndClients />
            </LazyLoadLayout>
          </Container>

          <Container className={"py-[100px] bg-black"}>
            <img
              src="https://storage.googleapis.com/mkit_monster_bucket/Poster/JOY_COMMERCIAL_H.webp"
              alt="banner"
            />
          </Container>

          <Footer />
        </div>
      </div>
    </LazyMotion>
  );
};

export default App;
