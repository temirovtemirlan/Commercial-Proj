import type { FC } from "react";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import { divideArray } from "helpers/array";
import CompanyLogoCubeAnimation from "./CubeAnimationSwiper";
import { AnimatedComponent } from "common/ui/animatedComponent";

const URL = "https://storage.googleapis.com/mkit_monster_bucket/Logo";

const companyLogo = [
  `${URL}/DODO.png`,
  `${URL}/NIKE.png`,
  `${URL}/ADIDAS.png`,
  `${URL}/PUMA.png`,
  `${URL}/ECO_MILK.png`,
  `${URL}/PEPSI.png`,
  `${URL}/BR.png`,
  `${URL}/BMW.png`,
  `${URL}/BOSS.png`,
  `${URL}/GLOVO.png`,
  `${URL}/COCA_COLA.png`,
  `${URL}/DAIRY_SPRING.png`,
  `${URL}/PAPAJOHNS.png`,
  `${URL}/KONTI.png`,
  `${URL}/PAUL.png`,
  `${URL}/SONUN.png`,
  `${URL}/JOY.png`,
  `${URL}/CALIPSO.png`,
  `${URL}/QADYR.png`,
  `${URL}/SILKWAY.png`,
  `${URL}/ENESAI.png`,
  `${URL}/BOOBLIK.png`,
  `${URL}/BAKAI.png`,
  `${URL}/ELBATA.png`,
  `${URL}/KFC.png`,
  `${URL}/PEPSI.png`,
];

const LogoCubeAnimation: FC = () => {
  const [ref, inView] = useInView({ threshold: 0.6, triggerOnce: true });
  const { t } = useTranslation();

  const dataOne = divideArray(divideArray(companyLogo, 2)[0], 7);
  const dataTwo = divideArray(divideArray(companyLogo, 2)[1], 7);

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
          {t("logoCubeAnimation.title")}
        </AnimatedComponent>

        <AnimatedComponent
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : undefined}
          transition={{ duration: 0.6 }}
          className="text-[32px] leading-9 md:leading-[36px] font-semibold text-balance"
        >
          <p
            dangerouslySetInnerHTML={{
              __html: t("logoCubeAnimation.description"),
            }}
          />
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
