import type { FC } from "react";
import Container from "./Container";
import { useInView } from "react-intersection-observer";
import Lottie from "lottie-react";
import { AnimatedComponent } from "common/ui/animatedComponent";

import FINGER from "../../public/lotti/FINGER.json";
import THUNDER from "../../public/lotti/THUNDER.json";
import CHANNEL from "../../public/lotti/CHANNEL.json";

const animationVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const CultureSection: FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  return (
    <Container className="xl:py-[200px] py-[100px] overflow-hidden bg-[#f5f5f7]">
      <AnimatedComponent
        tag="span"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : undefined}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="gradient-legend-1lvl text-center inline-block"
        ref={ref}
      >
        Мы не создаем контент.
      </AnimatedComponent>

      <AnimatedComponent
        tag="span"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : undefined}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="legend-2lvl w-full text-center inline-block"
      >
        Мы создаем культуру.
      </AnimatedComponent>

      <div className="grid lg:grid-cols-2 lg:grid-rows-2 lg:h-[660px] gap-5 mt-16">
        <AnimatedComponent
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="row-span-2 w-full h-full px-10 ss:px-[60px] bg-[#fff] max-lg:py-10 rounded-3xl flex flex-row md:flex-col justify-center items-start gap-8"
        >
          <span className="w-[72px] h-[72px]">
            <Lottie animationData={FINGER} />
          </span>

          <p className="text-[#1a1a1c] text-3xl md:text-[44px] xl:text-[56px] md:leading-[50px] xl:leading-[60px] font-bold">
            Бренды должны быть больше, чем логотипы.
          </p>
        </AnimatedComponent>

        <AnimatedComponent
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="h-full py-2.5 px-10 ss:px-[60px] bg-[#fff] rounded-3xl flex justify-start gap-x-8 items-center max-lg:py-10"
        >
          <span className="w-[72px] h-[72px]">
            <Lottie animationData={THUNDER} />
          </span>

          <p className="text-[#1a1a1c] text-2xl ss:text-[32px] xl:text-[44px] ss:leading-[38px] xl:leading-[50px] font-bold">
            Реклама должна <br /> быть больше, <br /> чем креатив.
          </p>
        </AnimatedComponent>

        <AnimatedComponent
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={animationVariants}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="h-full py-2.5 px-10 ss:px-[60px] bg-[#fff] rounded-3xl flex justify-start gap-x-8 items-center max-lg:py-10"
        >
          <span className="w-[72px] h-[72px]">
            <Lottie animationData={CHANNEL} />
          </span>

          <p className="text-[#00c5c7] text-2xl ss:text-[32px] xl:text-[44px] ss:leading-[38px] xl:leading-[50px] font-bold">
            Маркетинг должен <br />
            быть больше <br />
            чем цифры.
          </p>
        </AnimatedComponent>
      </div>

      <div className="grid max-md:justify-center md:grid-cols-[1fr,1px,1fr] items-center gap-8 lg:gap-11 mt-[50px]">
        <div className="flex justify-center md:block md:ml-auto">
          <svg
            className="w-[254px] md:w-[354px] md:h-[43px]"
            width="354"
            height="43"
            viewBox="0 0 354 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M43.6528 25.6824L35.0099 17.3583H17.4647L8.73475 25.6824V17.3164H0.00644156L0 34.0467L17.4647 42.4111V29.8646L26.1946 34.0467L34.9229 29.8646V42.4127L52.3795 34.0483L52.3811 17.3164H43.6528V25.6824Z"
              fill="#111111"
            />
            <path
              d="M17.4647 8.95191L0 0.585938L0.00644156 8.95191H17.4647Z"
              fill="#111111"
            />
            <path
              d="M52.3882 0.585938L34.9219 8.95191H52.3817L52.3882 0.585938Z"
              fill="#111111"
            />
            <path
              d="M282.51 10.4779H298.025V16.1532H283.761V25.2783H298.025V32.3478H281.965V41.473H308.697V1.28125H282.51V10.469V10.4779Z"
              fill="#111111"
            />
            <path
              d="M336.269 1.28711H317.867V41.4788H328.592V29.6546H334.169L341.355 41.4788H353.34V39.9863L345.126 27.2415C355.735 20.3507 352.741 1.34073 336.269 1.28711ZM336.269 20.5205H328.592V10.4748C331.104 10.4748 333.74 10.4122 336.269 10.4748C342.365 10.5284 342.07 20.5205 336.269 20.5205Z"
              fill="#111111"
            />
            <path
              d="M92.561 41.4798H103.527V1.17188H99.6842L82.9622 18.6357L66.5441 1.17188H62.5938V41.4798H73.56V23.5602L82.4349 32.5245H83.6325L92.561 23.5602V41.4798Z"
              fill="#111111"
            />
            <path
              d="M111.613 21.4454C111.613 49.2945 154.638 49.2945 154.638 21.4454C154.638 -6.4037 111.613 -6.34114 111.613 21.4454ZM122.642 21.4454C122.642 6.98461 143.681 6.98461 143.681 21.4454C143.681 35.9062 122.642 36.0313 122.642 21.4454Z"
              fill="#111111"
            />
            <path
              d="M187.837 20.9801L166.619 1.12109H162.723V41.4826H173.814V21.7309L194.96 41.5363H198.794V1.29091H187.837V20.9801Z"
              fill="#111111"
            />
            <path
              d="M244.161 10.4748H254.466V41.4788H265.075V10.4748H275.317V1.28711H244.152V10.4748H244.161Z"
              fill="#111111"
            />
            <path
              d="M240.451 29.1978H230.075C230.075 34.31 216.955 34.3547 216.955 29.6625C216.955 26.8472 220.431 26.2126 224.614 25.9803C233.73 25.3547 239.718 22.3695 239.834 13.6377C240.201 -3.70995 207.597 -3.70995 207.838 13.6377H218.018C218.018 8.29305 229.288 8.7578 229.646 13.5215C229.878 16.5691 226.768 17.1947 222.987 17.5969C214.658 18.4639 206.516 19.6615 206.516 29.7251C206.516 46.599 240.666 46.876 240.433 29.1978H240.451Z"
              fill="#111111"
            />
          </svg>
        </div>

        <AnimatedComponent
          initial={{ width: "10px", x: -5 }}
          animate={inView ? { width: "1px", x: 0 } : undefined}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="max-md:w-full bg-[#424245] h-px md:h-24 lg:h-[60px]"
        />

        <p className="max-w-[466px] max-md:text-center w-full text-[#6e6e7b] text-2xl font-semibold uppercase">
          МЫ создаем новые смыслы.
          <br />
          Мы формируем будущее бизнеса.
          <br />
          Мы Monster Corp.
        </p>
      </div>
    </Container>
  );
};

export default CultureSection;
