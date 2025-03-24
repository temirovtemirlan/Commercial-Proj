import type { FC } from "react";
import { useInView } from "react-intersection-observer";
import { divideArray } from "helpers/array";
import CompanyLogoCubeAnimation from "./CubeAnimationSwiper";
import { AnimatedComponent } from "common/ui/animatedComponent";

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
  const [ref, inView] = useInView({ threshold: 0.6, triggerOnce: true });
  const dataOne = divideArray(divideArray(companyLogo, 2)[0], 6);
  const dataTwo = divideArray(divideArray(companyLogo, 2)[1], 6);

  return (
    <div ref={ref}>
      <div className="flex justify-between md:flex-row flex-col w-full mb-[150px] gap-y-6 gap-x-10 text-white">
        <AnimatedComponent
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.4, delay: 0.1 }}
          tag="legend"
          className="legend-3lvl"
        >
          Наши клиенты
        </AnimatedComponent>

        <AnimatedComponent
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : undefined}
          transition={{ duration: 0.6 }}
          className="text-[32px] leading-9 md:leading-[36px] font-semibold text-balance"
        >
          Мы гордимся работой с компаниями, <br className="hidden lg:block" />{" "}
          которые задают правила игры на своих рынках.
        </AnimatedComponent>
      </div>

      <AnimatedComponent
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : undefined}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-24 gap-x-6 w-full h-full"
      >
        <CompanyLogoCubeAnimation images={dataOne[0]} delayInterval={5000} />
        <CompanyLogoCubeAnimation images={dataOne[1]} delayInterval={4500} />
        <CompanyLogoCubeAnimation images={dataOne[2]} delayInterval={7500} />
        <CompanyLogoCubeAnimation images={dataOne[3]} delayInterval={6000} />
        <CompanyLogoCubeAnimation images={dataOne[4]} delayInterval={7000} />
        <CompanyLogoCubeAnimation images={dataOne[5]} delayInterval={6500} />
      </AnimatedComponent>

      <AnimatedComponent
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : undefined}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-24 gap-x-6 w-full h-full mt-20"
      >
        <CompanyLogoCubeAnimation images={dataTwo[0]} delayInterval={7500} />
        <CompanyLogoCubeAnimation images={dataTwo[1]} delayInterval={8000} />
        <CompanyLogoCubeAnimation images={dataTwo[2]} delayInterval={5000} />
        <CompanyLogoCubeAnimation images={dataTwo[3]} delayInterval={9500} />
        <CompanyLogoCubeAnimation images={dataTwo[4]} delayInterval={8500} />
        <CompanyLogoCubeAnimation images={dataTwo[5]} delayInterval={9500} />
      </AnimatedComponent>
    </div>
  );
};

export default LogoCubeAnimation;
