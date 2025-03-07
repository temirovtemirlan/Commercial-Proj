import { type FC } from "react";
import { cn } from "helpers/style.ts";

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
  { src: "/BOSS.png", alt: "BOSS", className: "h-10" },
  { src: "/BR.png", alt: "BR", className: "h-16" },
  { src: "/COCA_COLA.png", alt: "COCA_COLA", className: "h-16" },
  { src: "/DAIRY_SPRING.png", alt: "DAIRY_SPRING", className: "h-16" },
  { src: "/DODO.png", alt: "DODO", className: "h-16" },
  { src: "/ECO_MILK.png", alt: "ECO_MILK", className: "h-16" },
  { src: "/GLOVO.png", alt: "GLOVO", className: "h-16" },
  { src: "/JOY.png", alt: "JOY", className: "h-16" },
  { src: "/KONTI.png", alt: "KONTI", className: "h-16" },
  { src: "/NIKE.png", alt: "NIKE", className: "h-12" },
  { src: "/PAPAJOHNS.png", alt: "PAPAJOHNS", className: "h-12" },
  { src: "/PAUL.png", alt: "PAUL", className: "h-16" },
  { src: "/PEPSI.png", alt: "PEPSI", className: "h-16" },
  { src: "/PUMA.png", alt: "PUMA", className: "h-16" },
  { src: "/SILKWAY.png", alt: "SILKWAY", className: "h-16" },
  { src: "/SONUN.png", alt: "SONUN", className: "h-16" },
  { src: "/ADIDAS.png", alt: "ADIDAS", className: "h-16" },
  { src: "/BAKAI.png", alt: "BAKAI", className: "h-16" },
  { src: "/BMW.png", alt: "BMW", className: "h-16" },
  { src: "/BOOBLIK.png", alt: "BOOBLIK", className: "h-16" },
  { src: "/CALIPSO.png", alt: "CALIPSO", className: "h-12" },
  { src: "/QADYR.png", alt: "QADYR", className: "h-12" },
  { src: "/ENESAI.png", alt: "ENESAI", className: "h-20" },
];

const absoluteCn = "select-none pointer-events-none";

interface PartnersAndClientsProps {
  className?: string;
}

const PartnersAndClients: FC<PartnersAndClientsProps> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-24 justify-items-center items-center">
        {partners?.map((el, index) => (
          <img
            key={index}
            className={cn(absoluteCn, el.className)}
            src={el.src}
            alt={el.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default PartnersAndClients;
