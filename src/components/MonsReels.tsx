import { CSSProperties, type FC } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import MonstriliCarousel from "components/MonstriliCarousel.tsx";
import VimeoEmbed from "components/VimeoEmbed";
import { cn } from "helpers/style.ts";

interface MonsReelsProps {
  className?: string;
}

const carouselStyle: CSSProperties = {
  background: "#f0f0f0",
  width: "100%",
  height: "700px",
  borderRadius: "28px",
  overflow: "hidden",
};

const CGReelData = [
  <div className={"overflow-hidden"} style={carouselStyle}>
    <VimeoEmbed
      className={"object-center object-cover bg-black"}
      height={"700px"}
      videoId="1062541479"
      videoURL="8723c86694"
    />
  </div>,
  <div style={carouselStyle}>
    {" "}
    <VimeoEmbed
      className={"object-center object-cover bg-black"}
      height={"700px"}
      videoId="1062541728"
      videoURL="09b53bea7e"
    />
  </div>,
  <div style={carouselStyle}>
    {" "}
    <VimeoEmbed
      className={"object-center object-cover bg-black"}
      height={"700px"}
      videoId="1062542176"
      videoURL="901de6ae1e"
    />
  </div>,
  <div style={carouselStyle}>
    {" "}
    <VimeoEmbed
      className={"object-center object-cover bg-black"}
      height={"700px"}
      videoId="1062541781"
      videoURL="b7f04f29da"
    />
  </div>,
  <div style={carouselStyle}>
    {" "}
    <VimeoEmbed
      className={"object-center object-cover bg-black"}
      height={"700px"}
      videoId="1062541904"
      videoURL="731c4ed8de"
    />
  </div>,
  <div style={carouselStyle}>
    {" "}
    <VimeoEmbed
      className={"object-center object-cover bg-black"}
      height={"700px"}
      videoId="1062541950"
      videoURL="bdec51d703"
    />
  </div>,
  <div style={carouselStyle}>
    {" "}
    <VimeoEmbed
      className={"object-center object-cover bg-black"}
      height={"700px"}
      videoId="1062542062"
      videoURL="d5f04ccb0c"
    />
  </div>,
  <div style={carouselStyle}>
    {" "}
    <VimeoEmbed
      className={"object-center object-cover bg-black"}
      height={"700px"}
      videoId="1062542328"
      videoURL="b97a07c69a"
    />
  </div>,
  <div style={carouselStyle}>
    {" "}
    <VimeoEmbed
      className={"object-center object-cover bg-black"}
      height={"700px"}
      videoId="1062542385"
      videoURL="46b0e7deec"
    />
  </div>,
  <div style={carouselStyle}>
    {" "}
    <VimeoEmbed
      className={"object-center object-cover bg-black"}
      height={"700px"}
      videoId="1062542508"
      videoURL="ede78a5812"
    />
  </div>,
  <div style={carouselStyle}>
    {" "}
    <VimeoEmbed
      className={"object-center object-cover bg-black"}
      height={"700px"}
      videoId="1062542238"
      videoURL="69de612b96"
    />
  </div>,
  <div style={carouselStyle}>
    {" "}
    <VimeoEmbed
      className={"object-center object-cover bg-black"}
      height={"700px"}
      videoId="1062541863"
      videoURL="1dbc48b70d"
    />
  </div>,
  <div style={carouselStyle}>
    {" "}
    <VimeoEmbed
      className={"object-center object-cover bg-black"}
      height={"700px"}
      videoId="1063644726"
      videoURL="d73b72292c"
    />
  </div>,
  <div style={carouselStyle}>
    {" "}
    <VimeoEmbed
      className={"object-center object-cover bg-black"}
      height={"700px"}
      videoId="1063642509"
      videoURL="48e6415e3c"
    />
  </div>,
  <div style={carouselStyle}>
    {" "}
    <VimeoEmbed
      className={"object-center object-cover bg-black"}
      height={"700px"}
      videoId="1063643914"
      videoURL="44364efc22"
    />
  </div>,
  <div style={carouselStyle}>
    {" "}
    <VimeoEmbed
      className={"object-center object-cover bg-black"}
      height={"700px"}
      videoId="1063640697"
      videoURL="f02a9c5820"
    />
  </div>,
  <div style={carouselStyle}>
    {" "}
    <VimeoEmbed
      className={"object-center object-cover bg-black"}
      height={"700px"}
      videoId="1063639201"
      videoURL="4a42e58be4"
    />
  </div>,
  <div style={carouselStyle}>
    {" "}
    <VimeoEmbed
      className={"object-center object-cover bg-black"}
      height={"700px"}
      videoId="1063636329"
      videoURL="44bafe9d75"
    />
  </div>,
  <div style={carouselStyle}>
    {" "}
    <VimeoEmbed
      className={"object-center object-cover bg-black"}
      height={"700px"}
      videoId="1063635945"
      videoURL="6317c7570f"
    />
  </div>,
  <div style={carouselStyle}>
    {" "}
    <VimeoEmbed
      className={"object-center object-cover bg-black"}
      height={"700px"}
      videoId="1063638711"
      videoURL="fb67c41de4"
    />
  </div>,
];
const commonCn = "";

const AIReelData = [
  <div className={cn("overflow-hidden", commonCn)} style={carouselStyle}>
    <VimeoEmbed
      className={"object-center object-cover bg-black"}
      height={"700px"}
      videoId="1062549233"
      videoURL="5a009f461e"
    />
  </div>,
  <div className={cn("overflow-hidden", commonCn)} style={carouselStyle}>
    <VimeoEmbed
      className={"object-center object-cover bg-black"}
      height={"700px"}
      videoId="1062549407"
      videoURL="cb6a6c8b09"
    />
  </div>,
  <div className={cn("overflow-hidden", commonCn)} style={carouselStyle}>
    <VimeoEmbed
      className={"object-center object-cover bg-black"}
      height={"700px"}
      videoId="1062549593"
      videoURL="99b51a0fc7"
    />
  </div>,
  <div className={cn("overflow-hidden", commonCn)} style={carouselStyle}>
    <VimeoEmbed
      className={"object-center object-cover bg-black"}
      height={"700px"}
      videoId="1062549632"
      videoURL="91397564b6"
      // https://player.vimeo.com/video/1062549632?h=91397564b6&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
    />
  </div>,
  <div className={cn("overflow-hidden", commonCn)} style={carouselStyle}>
    <VimeoEmbed
      className={"object-center object-cover bg-black"}
      height={"700px"}
      videoId="1062549737"
      videoURL="77a5ea7f39"
      // https://player.vimeo.com/video/1062549737?h=77a5ea7f39&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
    />
  </div>,
  <div className={cn("overflow-hidden", commonCn)} style={carouselStyle}>
    <VimeoEmbed
      className={"object-center object-cover bg-black"}
      height={"700px"}
      videoId="1062552326"
      videoURL="e4348904e6"
      // https://player.vimeo.com/video/1062552326?h=e4348904e6&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
    />
  </div>,
  <div className={cn("overflow-hidden", commonCn)} style={carouselStyle}>
    <VimeoEmbed
      className={"object-center object-cover bg-black"}
      height={"700px"}
      videoId="1062552051"
      videoURL="646255a00f"
      // https://player.vimeo.com/video/1062552051?h=646255a00f&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
    />
  </div>,
  <div className={cn("overflow-hidden", commonCn)} style={carouselStyle}>
    <VimeoEmbed
      className={"object-center object-cover bg-black"}
      height={"700px"}
      videoId="1062552292"
      videoURL="65ae959128"
      // https://player.vimeo.com/video/1062552292?h=65ae959128&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
    />
  </div>,
  <div className={cn("overflow-hidden", commonCn)} style={carouselStyle}>
    <VimeoEmbed
      className={"object-center object-cover bg-black"}
      height={"700px"}
      videoId="1062552161"
      videoURL="c87bd13a6a"
      // https://player.vimeo.com/video/1062552161?h=c87bd13a6a&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
    />
  </div>,
  <div className={cn("overflow-hidden", commonCn)} style={carouselStyle}>
    <VimeoEmbed
      className={"object-center object-cover bg-black"}
      height={"700px"}
      videoId="1062552211"
      videoURL="2476f9ff5d"
      // https://player.vimeo.com/video/1062552211?h=2476f9ff5d&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
    />
  </div>,
  <div className={cn("overflow-hidden", commonCn)} style={carouselStyle}>
    <VimeoEmbed
      className={"object-center object-cover bg-black"}
      height={"700px"}
      videoId="1062551983"
      videoURL="7fcae73275"
      title={"DODO PIZZA"}
      // https://player.vimeo.com/video/1062551983?h=7fcae73275&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
    />
  </div>,
  <div className={cn("overflow-hidden", commonCn)} style={carouselStyle}>
    <VimeoEmbed
      className={"object-center object-cover bg-black"}
      height={"700px"}
      videoId="1062553874"
      videoURL="14a7a9b71a"
      title={"DODO PIZZA"}
      // https://player.vimeo.com/video/1062553874?h=14a7a9b71a&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
    />
  </div>,
  <div className={cn("overflow-hidden", commonCn)} style={carouselStyle}>
    <VimeoEmbed
      className={"object-center object-cover bg-black"}
      height={"700px"}
      videoId="1062554263"
      videoURL="03ca465e99"
      title={"DODO PIZZA"}
      //https://player.vimeo.com/video/1062554263?h=03ca465e99&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
    />
  </div>,
  <div className={cn("overflow-hidden", commonCn)} style={carouselStyle}>
    <VimeoEmbed
      className={"object-center object-cover bg-black"}
      height={"700px"}
      videoId="1062554165"
      videoURL="dbdbcbf50f"
      title={"DODO PIZZA"}
      // https://player.vimeo.com/video/1062554165?h=dbdbcbf50f&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
    />
  </div>,
  <div className={cn("overflow-hidden", commonCn)} style={carouselStyle}>
    <VimeoEmbed
      className={"object-center object-cover bg-black"}
      height={"700px"}
      videoId="1062553945"
      videoURL="b5b26c2c81"
      title="ENESAI"
      // https://player.vimeo.com/video/1062553945?h=b5b26c2c81&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479    />
    />
  </div>,
  <div className={cn("overflow-hidden", commonCn)} style={carouselStyle}>
    <VimeoEmbed
      className={"object-center object-cover bg-black"}
      height={"700px"}
      videoId="1062554332"
      videoURL="45924735dd"
      title="ENESAI"
      // https://player.vimeo.com/video/1062554332?h=45924735dd&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
    />
  </div>,
  <div className={cn("overflow-hidden", commonCn)} style={carouselStyle}>
    <VimeoEmbed
      className={"object-center object-cover bg-black"}
      height={"700px"}
      videoId="1062554055"
      videoURL="2ff8b042f4"
      title="ENESAI"
      // https://player.vimeo.com/video/1062554055?h=2ff8b042f4&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479    />
    />
  </div>,
  <div className={cn("overflow-hidden", commonCn)} style={carouselStyle}>
    <VimeoEmbed
      className={"object-center object-cover bg-black"}
      height={"700px"}
      videoId="1062556025"
      videoURL="7938f2cf9b"
      title="ENESAI"
      // https://player.vimeo.com/video/1062556025?h=7938f2cf9b&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479
    />
  </div>,
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
