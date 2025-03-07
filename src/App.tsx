import { type FC } from "react";
import Container from "components/Container.tsx";
import { cn } from "helpers/style.ts";
import HowWeWork from "components/HowWeWork.tsx";
// import { TariffStart } from "components/TariffBlock.tsx";

import PartnersAndClients from "components/PartnersAndClients.tsx";
import MonsReels from "components/MonsReels.tsx";
import VimeoEmbed from "components/VimeoEmbed.tsx";
import { Tab, TabList, Tabs, TabPanel } from "react-tabs";

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
    <div>
      <Container className={"py-[70px]"}>
        <div className={"flex justify-between items-center"}>
          <Header title={"Monster"} />
          <p className={"text-black text-2xl grow-1 "}>Разработка...</p>
        </div>
      </Container>
      {/* Showreel */}
      <div>
        <Tabs className={cn("Monstr-Showreel")}>
          <TabPanel>
            <VimeoEmbed
              className={"object-center object-cover bg-black"}
              height={"700px"}
              videoId="1062541479"
              videoURL="8723c86694"
            />
          </TabPanel>
          <TabPanel>
            <VimeoEmbed
              className={"object-center object-cover bg-black"}
              height={"700px"}
              videoId="1062541728"
              videoURL="09b53bea7e"
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
      {/* Tariff */}
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

      {/*<VimeoEmbed videoId={"1062552326"} videoURL={"e4348904e6"} />*/}

      <Container>
        <div>
          <VimeoEmbed
            className={"object-center object-cover bg-black"}
            height={"700px"}
            videoId="1062549483"
            videoURL="a20cba6903"
          />
        </div>
        <div className={"flex gap-5 mt-5"}>
          <div className={"bg-[#f5f5f7] w-full h-[517.61px]"}></div>
          <div className={"bg-[#f5f5f7] w-full h-[517.61px]"}></div>
        </div>
        <div className={"mt-5"}>
          <VimeoEmbed
            className={"object-center object-cover bg-black"}
            height={"700px"}
            videoId="1062549677"
            videoURL="ba1d2644d3"
          />
        </div>
        <div className="mt-5">
          <VimeoEmbed
            className={"object-center object-cover bg-black"}
            height={"700px"}
            videoId="1062541479"
            videoURL="8723c86694"
          />
        </div>

        <div className="mt-5">
          <VimeoEmbed
            className={"object-center object-cover bg-black"}
            height={"700px"}
            videoId="1062541728"
            videoURL="09b53bea7e"
          />
        </div>
      </Container>
      <Container className={"pt-[100px] pb-[200px]"}>
        <Header className={"text-[56px] mb-[60px]"} title={"Наши клиенты"} />
        <PartnersAndClients />
      </Container>
      {/*<script src="https://player.vimeo.com/api/player.js"></script>*/}
    </div>
  );
};

export default App;
