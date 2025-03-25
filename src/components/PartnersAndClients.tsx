import type { FC } from "react";
import { cn } from "helpers/style.ts";
import { Header } from "common/Header";

// import ADIDAS from "../../public/ADIDAS.png";
// import BAKAI from "../../public/BAKAI.png";
// import BMW from "../../public/BMW.png";
// import BOOBLIK from "../../public/BOOBLIK.png";

// import BOSS from "../../public/BOSS.png";
// import BR from "../../public/BR.png";
// import COCA_COLA from "../../public/COCA_COLA.png";
// import DAIRY_SPRING from "../../public/DAIRY_SPRING.png";
// import DODO from "../../public/DODO.png";
// import ECO_MILK from "../../public/ECO_MILK.png";
// import GLOVO from "../../public/GLOVO.png";
// import JOY from "../../public/JOY.png";
// import KONTI from "../../public/KONTI.png";
// import NIKE from "../../public/NIKE.png";
// import PAPAJOHNS from "../../public/PAPAJOHNS.png";
// import PAUL from "../../public/PAUL.png";
// import PEPSI from "../../public/PEPSI.png";
// import PUMA from "../../public/PUMA.png";
// import SILKWAY from "../../public/SILKWAY.png";
// import SONUN from "../../public/SONUN.png";
// import CALIPSO from "../../public/CALIPSO.png";
// import QADYR from "../../public/QADYR.png";
// import ENESAI from "../../public/ENESAI.png";

const partners = [
  // 1 row
  { src: "/DODO.png", alt: "DODO", className: "h-16" },
  { src: "/NIKE.png", alt: "NIKE", className: "h-12" },
  { src: "/ADIDAS.png", alt: "ADIDAS", className: "h-16" },
  { src: "/PUMA.png", alt: "PUMA", className: "h-16" },

  // 2 row
  { src: "/ECO_MILK.png", alt: "ECO_MILK", className: "h-16" },
  { src: "/PEPSI.png", alt: "PEPSI", className: "h-16" },
  { src: "/BR.png", alt: "BR", className: "h-16" },
  { src: "/BMW.png", alt: "BMW", className: "h-16" },

  // 3 row
  { src: "/BOSS.png", alt: "BOSS", className: "h-10" },
  { src: "/GLOVO.png", alt: "GLOVO", className: "h-16" },
  { src: "/COCA_COLA.png", alt: "COCA_COLA", className: "h-16" },
  { src: "/DAIRY_SPRING.png", alt: "DAIRY_SPRING", className: "h-16" },

  // 4 row
  { src: "/PAPAJOHNS.png", alt: "PAPAJOHNS", className: "h-12" },
  { src: "/KONTI.png", alt: "KONTI", className: "h-16" },
  { src: "/PAUL.png", alt: "PAUL", className: "h-16" },
  { src: "/SONUN.png", alt: "SONUN", className: "h-16" },

  // 5 row
  { src: "/JOY.png", alt: "JOY", className: "h-16" },
  { src: "/CALIPSO.png", alt: "CALIPSO", className: "h-12" },
  { src: "/QADYR.png", alt: "QADYR", className: "h-12" },
  { src: "/SILKWAY.png", alt: "SILKWAY", className: "h-16" },

  // 6 row
  { src: "/ENESAI.png", alt: "ENESAI", className: "h-20" },
  { src: "/BOOBLIK.png", alt: "BOOBLIK", className: "h-16" },
  { src: "/BAKAI.png", alt: "BAKAI", className: "h-16" },
  {
    src: "/ELBATA.png",
    alt: "ELBATA",
    className: "h-20",
  },
];

interface PartnersAndClientsProps {
  className?: string;
}

const PartnersAndClients: FC<PartnersAndClientsProps> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <div className={"w-full mb-[60px] flex justify-between items-start"}>
        <Header
          className="text-[56px] leading-[45px] text-white text-nowrap -translate-y-3"
          title={"Наши клиенты"}
        />

        <p className="w-full max-w-[700px] justify-start text-white text-[32px] font-semibold leading-[35px]">
          Мы гордимся работой с компаниями, которые задают правила игры на своих
          рынках.
        </p>
      </div>

      <div className={"flex justify-center"}>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-[repeat(4,200px)] gap-x-20 gap-y-20 justify-items-center items-center ">
          {partners?.map((el, index) => (
            <img
              key={index}
              className={cn("select-none pointer-events-none", el.className)}
              src={el.src}
              alt={el.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersAndClients;
