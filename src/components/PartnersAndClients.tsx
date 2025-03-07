import { type FC } from "react";
import { cn } from "helpers/style.ts";

// import ADIDAS from "../../public/ADIDAS.png";
import BAKAI from "assets/picture/BAKAI.png";
import BMW from "assets/picture/BMW.png";
import BOOBLIK from "assets/picture/BOOBLIK.png";

import BOSS from "assets/picture/BOSS.png";
import BR from "assets/picture/BR.png";
import COCA_COLA from "assets/picture/COCA_COLA.png";
import DAIRY_SPRING from "assets/picture/DAIRY_SPRING.png";
import DODO from "assets/picture/DODO.png";
import ECO_MILK from "assets/picture/ECO_MILK.png";
import GLOVO from "assets/picture/GLOVO.png";
import JOY from "assets/picture/JOY.png";
import KONTI from "assets/picture/KONTI.png";
import NIKE from "assets/picture/NIKE.png";
import PAPAJOHNS from "assets/picture/PAPAJOHNS.png";
import PAUL from "assets/picture/PAUL.png";
import PEPSI from "assets/picture/PEPSI.png";
import PUMA from "assets/picture/PUMA.png";
import SILKWAY from "assets/picture/SILKWAY.png";
// import SONUN from "../../public/SONUN.png";
import CALIPSO from "assets/picture/CALIPSO.png";
import QADYR from "assets/picture/QADYR.png";
import ENESAI from "assets/picture/ENESAI.png";

const partners = [
  { src: BOSS, alt: "BOSS", className: "h-10" },
  { src: BR, alt: "BR", className: "h-16" },
  { src: COCA_COLA, alt: "COCA_COLA", className: "h-16" },
  { src: DAIRY_SPRING, alt: "DAIRY_SPRING", className: "h-16" },
  { src: DODO, alt: "DODO", className: "h-16" },
  { src: ECO_MILK, alt: "ECO_MILK", className: "h-16" },
  { src: GLOVO, alt: "GLOVO", className: "h-16" },
  { src: JOY, alt: "JOY", className: "h-16" },
  { src: KONTI, alt: "KONTI", className: "h-16" },
  { src: NIKE, alt: "NIKE", className: "h-12" },
  { src: PAPAJOHNS, alt: "PAPAJOHNS", className: "h-12" },
  { src: PAUL, alt: "PAUL", className: "h-16" },
  { src: PEPSI, alt: "PEPSI", className: "h-16" },
  { src: PUMA, alt: "PUMA", className: "h-16" },
  { src: SILKWAY, alt: "SILKWAY", className: "h-16" },
  { src: "/SONUN.png", alt: "SONUN", className: "h-16" },
  { src: "/ADIDAS.png", alt: "ADIDAS", className: "h-16" },
  { src: BAKAI, alt: "BAKAI", className: "h-16" },
  { src: BMW, alt: "BMW", className: "h-16" },
  { src: BOOBLIK, alt: "BOOBLIK", className: "h-16" },
  { src: CALIPSO, alt: "CALIPSO", className: "h-12" },
  { src: QADYR, alt: "QADYR", className: "h-12" },
  { src: ENESAI, alt: "ENESAI", className: "h-20" },
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
