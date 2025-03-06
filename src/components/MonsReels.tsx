import { type FC } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import MonstriliCarousel from "components/MonstriliCarousel.tsx";
import VimeoEmbed from "components/VimeoEmbed.tsx";
import { cn } from "helpers/style.ts";

interface MonsReelsProps {
  className?: string;
}

const carouselStyle = {
  background: "#f0f0f0",
  width: "100%",
  height: "700px",
  borderRadius: "28px",
};

const CGReelData = [
  <div className={"overflow-hidden"} style={carouselStyle}></div>,
  <div style={carouselStyle}>Слайд 2</div>,
  <div style={carouselStyle}>Слайд 3</div>,
  <div style={carouselStyle}>Слайд 4</div>,
  <div style={carouselStyle}>Слайд 5</div>,
  <div style={carouselStyle}>Слайд 5</div>,
  <div style={carouselStyle}>Слайд 5</div>,
  <div style={carouselStyle}>Слайд 5</div>,
  <div style={carouselStyle}>Слайд 5</div>,
  <div style={carouselStyle}>Слайд 5</div>,
  <div style={carouselStyle}>Сл айд 5</div>,
];

const commonCn = "";

const AIReelData = [
  <div className={cn("overflow-hidden", commonCn)} style={carouselStyle}>
    <VimeoEmbed
      className={"object-center object-cover bg-black"}
      height={"700px"}
      videoId="1062549233"
    />
  </div>,
  <div className={cn("", commonCn)} style={carouselStyle}>
    <VimeoEmbed
      className={"object-center object-cover bg-black"}
      height={"700px"}
      videoId="1062542508"
    />
  </div>,
  <div style={carouselStyle}>
    <VimeoEmbed
      className={"object-center object-cover bg-black"}
      height={"700px"}
      videoId="1062549483"
    />
  </div>,
  <div style={carouselStyle}>
    <VimeoEmbed
      className={"object-center object-cover bg-black"}
      height={"700px"}
      videoId="1062549677"
    />
  </div>,
  <div style={carouselStyle}>Слайд 5</div>,
  <div style={carouselStyle}>Слайд 5</div>,
  <div style={carouselStyle}>Слайд 5</div>,
  <div style={carouselStyle}>Слайд 5</div>,
  <div style={carouselStyle}>Слайд 5</div>,
  <div style={carouselStyle}>Слайд 5</div>,
  <div style={carouselStyle}>Сл айд 5</div>,
];

const MonsReels: FC<MonsReelsProps> = ({ className }) => {
  return (
    <Tabs className={cn("Mosnreel-tabs", className)}>
      <TabList className="inline-flex gap-3.5 p-[5px] bg-white rounded-full mb-[80px]">
        <Tab className="tab__delivery_panels whitespace-nowrap px-6 py-2.5">
          CG REEL
        </Tab>
        <Tab className="tab__delivery_panels whitespace-nowrap px-6 py-2.5">
          AI REEL
        </Tab>
      </TabList>

      <TabPanel>
        <MonstriliCarousel
          coreClassName={"monstrili-carousel"}
          className={"monsreel-carousel"}
          items={CGReelData}
          nextEl={"cdf26213a150dc23a"}
          prevEl={"d41d8cd98f00b2dee"}
        />
      </TabPanel>

      <TabPanel>
        <MonstriliCarousel
          coreClassName={"monstrili-carousel"}
          className={"monsreel-carousel"}
          items={AIReelData}
          nextEl={"cdf26213a150dc23a"}
          prevEl={"d41d8cd98f00b2dee"}
        />
      </TabPanel>
    </Tabs>
  );
};

export default MonsReels;
