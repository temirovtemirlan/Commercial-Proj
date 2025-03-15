import type { FC } from "react";
import { divideArray } from "helpers/array";
import CompanyLogoCubeAnimation from "./CubeAnimationSwiper";
import { Header } from "../../App";

const companyLogo = [
  "https://storage.googleapis.com/mkit_monster_bucket/Logo/DODO.png",
  "https://storage.googleapis.com/mkit_monster_bucket/Logo/NIKE.png",
  "https://storage.googleapis.com/mkit_monster_bucket/Logo/ADIDAS.png",
  "https://storage.googleapis.com/mkit_monster_bucket/Logo/PUMA.png",
  "https://storage.googleapis.com/mkit_monster_bucket/Logo/ECO_MILK.png",
  "https://storage.googleapis.com/mkit_monster_bucket/Logo/PEPSI.png",
  "https://storage.googleapis.com/mkit_monster_bucket/Logo/BR.png",
  "https://storage.googleapis.com/mkit_monster_bucket/Logo/BMW.png",
  "https://storage.googleapis.com/mkit_monster_bucket/Logo/BOSS.png",
  "https://storage.googleapis.com/mkit_monster_bucket/Logo/GLOVO.png",
  "https://storage.googleapis.com/mkit_monster_bucket/Logo/COCA_COLA.png",
  "https://storage.googleapis.com/mkit_monster_bucket/Logo/DAIRY_SPRING.png",
  "https://storage.googleapis.com/mkit_monster_bucket/Logo/PAPAJOHNS.png",
  "https://storage.googleapis.com/mkit_monster_bucket/Logo/KONTI.png",
  "https://storage.googleapis.com/mkit_monster_bucket/Logo/PAUL.png",
  "https://storage.googleapis.com/mkit_monster_bucket/Logo/SONUN.png",
  "https://storage.googleapis.com/mkit_monster_bucket/Logo/JOY.png",
  "https://storage.googleapis.com/mkit_monster_bucket/Logo/CALIPSO.png",
  "https://storage.googleapis.com/mkit_monster_bucket/Logo/QADYR.png",
  "https://storage.googleapis.com/mkit_monster_bucket/Logo/SILKWAY.png",
  "https://storage.googleapis.com/mkit_monster_bucket/Logo/ENESAI.png",
  "https://storage.googleapis.com/mkit_monster_bucket/Logo/BOOBLIK.png",
  "https://storage.googleapis.com/mkit_monster_bucket/Logo/BAKAI.png",
  "https://storage.googleapis.com/mkit_monster_bucket/Logo/ELBATA.png",
];

const LogoCubeAnimation: FC = () => {
  const divideFourCompanyLogo = divideArray(companyLogo, 6);

  return (
    <div>
      <legend className={"legend-3lvl text-white mb-20 text-center"}>
        Наши клиенты
      </legend>

      <div className="flex flex-wrap ss:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-24 gap-x-6  w-full h-full">
        <CompanyLogoCubeAnimation
          companyLogo={divideFourCompanyLogo[0]}
          delayInterval={5000}
          // delayInterval={3000}
        />
        <CompanyLogoCubeAnimation
          companyLogo={divideFourCompanyLogo[1]}
          delayInterval={4500}
          // delayInterval={2500}
        />
        <CompanyLogoCubeAnimation
          companyLogo={divideFourCompanyLogo[2]}
          delayInterval={5500}
          // delayInterval={3500}
        />
        <CompanyLogoCubeAnimation
          companyLogo={divideFourCompanyLogo[3]}
          delayInterval={6000}
          // delayInterval={4000}
        />
        <CompanyLogoCubeAnimation
          companyLogo={divideFourCompanyLogo[4]}
          delayInterval={7000}
          // delayInterval={5000}
        />
        <CompanyLogoCubeAnimation
          companyLogo={divideFourCompanyLogo[5]}
          delayInterval={6500}
          // delayInterval={4500}
        />
      </div>
    </div>
  );
};

export default LogoCubeAnimation;
