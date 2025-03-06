import { type FC } from "react";
import Container from "components/Container.tsx";
import { cn } from "helpers/style.ts";
import HowWeWork from "components/HowWeWork.tsx";
// import { TariffStart } from "components/TariffBlock.tsx";

import PartnersAndClients from "components/PartnersAndClients.tsx";
import MonsReels from "components/MonsReels.tsx";

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
          <p className={"text-black text-2xl grow-1 "}>
            maximus ante fermentum sit amet. <br /> Pellentesque commodo lacus
            at sodales sodales.
          </p>
        </div>
      </Container>

      {/* Showreel */}
      <div>
        <div className="bg-[#eee] w-full h-dvh"></div>
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

      <Container>
        <div className={"h-[950px] w-full bg-[#f5f5f7] super-center"}>
          <svg
            width="60"
            height="61"
            viewBox="0 0 60 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="0.385742" width="60" height="60" rx="30" fill="#ADADAD" />
            <path
              d="M45.4746 30.3857L22.2627 43.7871V16.9843L45.4746 30.3857Z"
              fill="white"
            />
          </svg>
        </div>

        <div className={"flex gap-5 mt-5"}>
          <div className={"bg-[#f5f5f7] w-full h-[517.61px]"}></div>
          <div className={"bg-[#f5f5f7] w-full h-[517.61px]"}></div>
        </div>

        <div className={"h-[950px] w-full bg-[#f5f5f7] super-center mt-5"}>
          <svg
            width="60"
            height="61"
            viewBox="0 0 60 61"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="0.385742" width="60" height="60" rx="30" fill="#ADADAD" />
            <path
              d="M45.4746 30.3857L22.2627 43.7871V16.9843L45.4746 30.3857Z"
              fill="white"
            />
          </svg>
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
