import { type FC } from "react";
import Container from "components/Container.tsx";
import { Header } from "../App.tsx";
import MonstriliCarousel from "components/MonstriliCarousel.tsx";
import { cn } from "helpers/style.ts";

interface HowWeWorkProps {
  className?: string;
}

const weWorkcarouselStyle = {
  width: "100%",
  height: "300px",
  borderRadius: "28px",
};

const commonCn = " flex items-end px-2.5 py-8";

const howWeWorkCarousel = [
  <div
    className={cn("bg-gradient-to-b from-[#fda504] to-[#f96a1b]", commonCn)}
    style={weWorkcarouselStyle}
  >
    <div className="w-[380px] h-[132.92px] px-2.5 py-5 bg-white/30 rounded-xl border border-[#dddddd]/30 backdrop-blur-[20px] inline-flex justify-start items-center gap-2.5">
      <div className="relative justify-start text-white text-[32px] font-bold leading-9">
        Первая встреча и брифинг
      </div>
    </div>
  </div>,
  <div
    className={cn("bg-gradient-to-b from-[#fea800] to-[#ffcb03]", commonCn)}
    style={weWorkcarouselStyle}
  >
    <div className="w-[380px] h-[132.92px] px-2.5 py-5 bg-white/30 rounded-xl border border-[#dddddd]/30 backdrop-blur-[20px] inline-flex justify-start items-center gap-2.5">
      <div className="relative justify-start text-white text-[32px] font-bold leading-9">
        Коммерческое
        <br />
        предложение
      </div>
    </div>
  </div>,
  <div
    className={cn("bg-gradient-to-b from-[#1bc2fc] to-[#1d72f1]", commonCn)}
    style={weWorkcarouselStyle}
  >
    <div className="w-[380px] h-[132.92px] px-2.5 py-[3px] bg-white/30 rounded-xl border border-[#dddddd]/30 backdrop-blur-[20px] inline-flex justify-start items-center gap-2.5">
      <div className="w-[358.27px] relative justify-start text-white text-[32px] font-bold leading-9">
        Подготовка
        <br />и Согласование и подписание контракта
      </div>
    </div>
  </div>,
  <div
    className={cn("bg-gradient-to-b from-[#fc5b73] to-[#fa2941]", commonCn)}
    style={weWorkcarouselStyle}
  >
    <div className="w-[380px] h-full max-h-[132.92px] px-2.5 py-[38px] bg-white/30 rounded-xl border border-[#dddddd]/30 backdrop-blur-[20px] inline-flex justify-start items-center gap-2.5">
      <div className="relative justify-start text-white text-[32px] font-bold font-['Nunito_Sans'] leading-9">
        Предоплата
      </div>
    </div>
  </div>,
  <div
    className={cn("bg-gradient-to-b from-[#1e69f5] to-[#1ec7fa]", commonCn)}
    style={weWorkcarouselStyle}
  >
    <div className="w-[380px] h-[132.92px] px-2.5 py-6 bg-white/30 rounded-xl border border-[#dddddd]/30 backdrop-blur-[20px] inline-flex justify-start items-center gap-2.5">
      <div className="relative justify-start text-white text-[32px] font-bold font-['Nunito_Sans'] leading-9">
        Разработка
        <br />
        идеи
      </div>
    </div>
  </div>,

  //
  <div
    className={cn("bg-gradient-to-b from-[#0d1177] to-[#753fc1]", commonCn)}
    style={weWorkcarouselStyle}
  >
    <div className="w-[380px] h-[132.92px] px-2.5 py-6 bg-white/30 rounded-xl border border-[#dddddd]/30 backdrop-blur-[20px] inline-flex justify-start items-center gap-2.5">
      <div className="relative justify-start text-white text-[32px] font-bold font-['Nunito_Sans'] leading-9">
        Презентация концепции
      </div>
    </div>
  </div>,
  <div
    className={cn(
      "bg-gradient-to-b from-[#00e7f7] via-[#d36bf8] to-[#862dcd]",
      commonCn
    )}
    style={weWorkcarouselStyle}
  >
    <div className="w-[380px] h-[132.92px] px-2.5 py-6 bg-white/30 rounded-xl border border-[#dddddd]/30 backdrop-blur-[20px] inline-flex justify-start items-center gap-2.5">
      <div className="relative justify-start text-white text-[32px] font-bold font-['Nunito_Sans'] leading-9">
        Доработка идеи
      </div>
    </div>
  </div>,
  <div
    className={cn(
      "bg-gradient-to-b from-[#00e7f7] via-[#67ff81] to-[#02b520]",
      commonCn
    )}
    style={weWorkcarouselStyle}
  >
    <div className="w-[380px] h-[132.92px] px-2.5 py-6 bg-white/30 rounded-xl border border-[#dddddd]/30 backdrop-blur-[20px] inline-flex justify-start items-center gap-2.5">
      <div className="relative justify-start text-white text-[32px] font-bold font-['Nunito_Sans'] leading-9">
        Согласование концепции
      </div>
    </div>
  </div>,
  <div
    className={cn("bg-gradient-to-b from-[#df1733] to-[#f5b715]", commonCn)}
    style={weWorkcarouselStyle}
  >
    <div className="w-[380px] h-[132.92px] px-2.5 py-6 bg-white/30 rounded-xl border border-[#dddddd]/30 backdrop-blur-[20px] inline-flex justify-start items-center gap-2.5">
      <div className="relative justify-start text-white text-[32px] font-bold font-['Nunito_Sans'] leading-9">
        Создание 3D графики и предварительный просмотр видео
      </div>
    </div>
  </div>,
  <div
    className={cn("bg-gradient-to-b from-[#fb5160] to-[#ed2e4c]", commonCn)}
    style={weWorkcarouselStyle}
  >
    <div className="w-[380px] h-[132.92px] px-2.5 py-6 bg-white/30 rounded-xl border border-[#dddddd]/30 backdrop-blur-[20px] inline-flex justify-start items-center gap-2.5">
      <div className="relative justify-start text-white text-[32px] font-bold font-['Nunito_Sans'] leading-9">
        Эффекты VFX и SFX, стилизация
      </div>
    </div>
  </div>,
  <div
    className={cn("bg-gradient-to-b from-[#273833] to-[#0f1315]", commonCn)}
    style={weWorkcarouselStyle}
  >
    <div className="w-[380px] h-[132.92px] px-2.5 py-6 bg-white/30 rounded-xl border border-[#dddddd]/30 backdrop-blur-[20px] inline-flex justify-start items-center gap-2.5">
      <div className="relative justify-start text-white text-[32px] font-bold font-['Nunito_Sans'] leading-9">
        Презентация готового видео
      </div>
    </div>
  </div>,
  <div className={"w-[380px]"} />,
];

const HowWeWork: FC<HowWeWorkProps> = ({ className }) => {
  return (
    <div className={cn("py-[100px]", className)}>
      <Container className={"overflow-hidden"}>
        <Header className={"text-[56px] mb-[80px]"} title={"Как мы работаем"} />
        <MonstriliCarousel
          className={"monsreel-carousel"}
          items={howWeWorkCarousel}
          nextEl={"afa9c933kdaadjkdf"}
          prevEl={"sak303031kajkadff"}
        />
      </Container>
    </div>
  );
};

export default HowWeWork;
