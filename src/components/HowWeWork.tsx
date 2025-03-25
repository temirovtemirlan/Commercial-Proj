import { useMemo, type FC } from "react";
import { m } from "motion/react";
import { Header } from "common/Header";
import Container from "components/Container.tsx";
import MonstriliCarousel from "components/MonstriliCarousel.tsx";
import { cn } from "helpers/style.ts";

interface HowWeWorkProps {
  className?: string;
}

const howWeWorkCarousel = [
  {
    icon: (
      <svg
        width="67"
        height="55"
        viewBox="0 0 67 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12.2133"
          cy="12.1869"
          r="9.81178"
          stroke="white"
          strokeWidth="3.03155"
        />
        <path
          d="M24.2199 41.8937V52.8991H1.51578V41.8937C1.51578 35.6241 6.59827 30.5417 12.8678 30.5417C19.1374 30.5417 24.2199 35.6241 24.2199 41.8937Z"
          stroke="white"
          strokeWidth="3.03155"
        />
        <circle
          cx="52.747"
          cy="12.1869"
          r="9.82755"
          stroke="white"
          strokeWidth="3"
        />
        <path
          d="M64.7689 41.8937V52.9148H42.0332V41.8937C42.0332 35.6154 47.1228 30.5259 53.401 30.5259C59.6793 30.5259 64.7689 35.6154 64.7689 41.8937Z"
          stroke="white"
          strokeWidth="3"
        />
        <circle
          cx="12.2133"
          cy="12.1869"
          r="9.81178"
          stroke="white"
          strokeWidth="3.03155"
        />
        <path
          d="M24.2199 41.8937V52.8991H1.51578V41.8937C1.51578 35.6241 6.59827 30.5417 12.8678 30.5417C19.1374 30.5417 24.2199 35.6241 24.2199 41.8937Z"
          stroke="white"
          strokeWidth="3.03155"
        />
        <circle cx="28.1144" cy="27.942" r="1.74863" fill="white" />
        <circle cx="34.0411" cy="27.942" r="1.74863" fill="white" />
        <circle cx="39.9684" cy="27.942" r="1.74863" fill="white" />
        <circle
          cx="12.2133"
          cy="12.1869"
          r="9.82755"
          stroke="white"
          strokeWidth="3"
        />
        <path
          d="M24.2357 41.8937V52.9148H1.5V41.8937C1.5 35.6154 6.58956 30.5259 12.8678 30.5259C19.1461 30.5259 24.2357 35.6154 24.2357 41.8937Z"
          stroke="white"
          strokeWidth="3"
        />
      </svg>
    ),
    title: "Формальная часть",
    bgColor: "bg-gradient-to-b from-[#fda504] to-[#f96a1b]",
    stages: [
      "Первая встреча и брифинг",
      "Коммерческое предложение",
      "Подготовка, согласование и подписание контракта",
      "Предоплата",
    ],
  },
  {
    icon: (
      <svg
        width="40"
        height="55"
        viewBox="0 0 40 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M38.507 15.6227V48.6059C38.507 51.0327 36.5397 53 34.1129 53H6.12117C3.69437 53 1.72705 51.0327 1.72705 48.6059V6.39412C1.72705 3.96732 3.69436 2 6.12117 2H24.0145M38.507 15.6227L24.0145 2M38.507 15.6227H28.4086C25.9818 15.6227 24.0145 13.6554 24.0145 11.2286V2M9.26237 29.1365H31.1718M9.26237 38.8673H31.1718"
          stroke="white"
          strokeWidth="3"
        />
      </svg>
    ),
    title: "Креативная часть",
    bgColor: "bg-gradient-to-b from-[#fea800] to-[#ffcb03]",
    stages: [
      "Разработка идеи",
      "Презентация концепции",
      "Доработка идеи",
      "Согласование концепции",
    ],
  },
  {
    icon: (
      <svg
        width="59"
        height="59"
        viewBox="0 0 59 59"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M52.9396 23.1833C52.1388 22.2104 51.384 21.292 51.0227 20.4213C50.6343 19.4859 50.5116 18.2557 50.3719 16.9556C50.1504 14.8019 49.8965 12.3551 48.2437 10.7075C46.5909 9.05982 44.1544 8.80083 41.9956 8.57762C40.6938 8.44301 39.4653 8.31522 38.5281 7.92844C37.6592 7.56721 36.7391 6.81069 35.7661 6.00986C34.0623 4.60927 32.1369 3.02295 29.6952 3.02295C27.2535 3.02295 25.3247 4.60927 23.6225 6.00986C22.6496 6.81069 21.7312 7.56721 20.8605 7.92844C19.9251 8.31522 18.6949 8.4396 17.3948 8.57762C15.2411 8.80083 12.7943 9.053 11.1467 10.7058C9.49903 12.3585 9.24004 14.7951 9.01683 16.9556C8.88223 18.2557 8.75444 19.4859 8.36765 20.4213C8.00643 21.292 7.2499 22.2104 6.44908 23.1833C5.05019 24.8872 3.46387 26.8126 3.46387 29.256C3.46387 31.6994 5.05019 33.6264 6.44908 35.3269C7.2499 36.2998 8.00643 37.2199 8.36765 38.0889C8.75444 39.0244 8.87882 40.2546 9.01683 41.5563C9.24004 43.71 9.49222 46.1568 11.1467 47.8045C12.8012 49.4521 15.236 49.7094 17.3948 49.9326C18.6949 50.0672 19.9251 50.195 20.8605 50.5835C21.7312 50.943 22.6496 51.6996 23.6225 52.5004C25.3264 53.901 27.2535 55.4873 29.6952 55.4873C32.1369 55.4873 34.0657 53.901 35.7661 52.5004C36.7391 51.6996 37.6592 50.943 38.5281 50.5835C39.4653 50.195 40.6938 50.0724 41.9956 49.9326C44.1493 49.7111 46.596 49.4572 48.2437 47.8045C49.8914 46.1517 50.1504 43.7152 50.3719 41.5563C50.5065 40.2546 50.6343 39.0261 51.0227 38.0889C51.384 37.2199 52.1388 36.2998 52.9396 35.3269C54.3402 33.623 55.9265 31.6976 55.9265 29.256C55.9265 26.8143 54.3402 24.8855 52.9396 23.1833ZM50.5712 33.3777C49.663 34.4818 48.7242 35.6234 48.1858 36.9149C47.6269 38.2644 47.4701 39.7775 47.3185 41.2394C47.1311 43.0455 46.9556 44.7511 46.0712 45.6354C45.1869 46.5198 43.4813 46.6953 41.6752 46.8827C40.2133 47.0343 38.7002 47.1911 37.3508 47.75C36.0592 48.285 34.9176 49.2238 33.8152 50.1354C32.3839 51.3128 31.0345 52.4237 29.6918 52.4237C28.3491 52.4237 26.9979 51.3128 25.5684 50.1354C24.4643 49.2272 23.3227 48.2884 22.0328 47.75C20.6833 47.1911 19.1703 47.0343 17.7067 46.8827C15.9005 46.6953 14.1949 46.5198 13.3106 45.6354C12.4263 44.7511 12.2508 43.0455 12.0651 41.2394C11.9134 39.7775 11.7567 38.2644 11.1961 36.9149C10.6611 35.6234 9.72224 34.4818 8.81066 33.3777C7.6418 31.9481 6.53768 30.5986 6.53768 29.256C6.53768 27.9133 7.64861 26.5621 8.82429 25.1326C9.73246 24.0285 10.6713 22.8869 11.2097 21.5953C11.7703 20.2475 11.9271 18.7345 12.0787 17.2708C12.2644 15.4647 12.4416 13.7591 13.326 12.8748C14.2103 11.9905 15.9091 11.815 17.7101 11.6208C19.1737 11.4776 20.6799 11.3209 22.043 10.7688C23.3329 10.2338 24.4745 9.29495 25.5786 8.38337C27.0082 7.20769 28.3594 6.09506 29.702 6.09506C31.0447 6.09506 32.3942 7.20769 33.8254 8.38337C34.9278 9.29155 36.0694 10.2304 37.361 10.7688C38.7105 11.3294 40.2235 11.4862 41.6854 11.6361C43.4916 11.8235 45.1972 12.0007 46.0815 12.8833C46.9658 13.766 47.1413 15.4732 47.3287 17.2794C47.4804 18.743 47.6371 20.2561 48.196 21.6038C48.731 22.8954 49.6699 24.037 50.5814 25.1411C51.7588 26.5707 52.8698 27.9218 52.8698 29.2645C52.8698 30.6072 51.7486 31.9481 50.5712 33.3777Z"
          fill="white"
        />
        <path
          d="M30.0515 15.1602C27.1906 15.1598 24.3939 16.0078 22.0151 17.597C19.6362 19.1862 17.782 21.445 16.687 24.088C15.5919 26.731 15.3053 29.6393 15.8632 32.4452C16.4211 35.2512 17.7985 37.8286 19.8213 39.8516C21.8441 41.8747 24.4214 43.2524 27.2273 43.8107C30.0331 44.3689 32.9415 44.0826 35.5846 42.9879C38.2277 41.8932 40.4868 40.0392 42.0762 37.6606C43.6657 35.2819 44.514 32.4853 44.514 29.6244C44.514 25.7886 42.9904 22.1098 40.2781 19.3973C37.5659 16.6847 33.8873 15.1606 30.0515 15.1602ZM37.8535 26.6904C32.3619 29.5001 28.8383 35.4245 28.8025 35.4841C28.6626 35.7225 28.4693 35.9252 28.2378 36.0763C28.0063 36.2274 27.7429 36.3227 27.4684 36.3548C27.3994 36.363 27.33 36.3669 27.2605 36.3667C27.0191 36.3667 26.7802 36.3178 26.5582 36.2229C26.3362 36.128 26.1358 35.9891 25.9689 35.8147L21.9767 31.6453C21.8143 31.4752 21.6869 31.2748 21.6019 31.0555C21.5169 30.8363 21.4759 30.6024 21.4813 30.3673C21.4867 30.1322 21.5383 29.9004 21.6333 29.6852C21.7282 29.4701 21.8646 29.2757 22.0347 29.1133C22.2047 28.9508 22.4051 28.8235 22.6244 28.7385C22.8437 28.6535 23.0775 28.6125 23.3126 28.6179C23.5478 28.6232 23.7795 28.6749 23.9947 28.7698C24.2098 28.8648 24.4042 29.0012 24.5666 29.1712L27.0236 31.7373C28.6935 29.4609 31.8951 25.7225 36.2246 23.5041C36.4338 23.397 36.6621 23.3322 36.8964 23.3134C37.1306 23.2945 37.3663 23.322 37.5899 23.3942C37.8136 23.4664 38.0208 23.582 38.1998 23.7343C38.3788 23.8866 38.526 24.0727 38.6331 24.2819C38.7401 24.4911 38.805 24.7194 38.8238 24.9536C38.8427 25.1879 38.8152 25.4236 38.743 25.6472C38.6707 25.8709 38.5552 26.0781 38.4029 26.2571C38.2505 26.4361 38.0645 26.5833 37.8552 26.6904H37.8535Z"
          fill="white"
        />
      </svg>
    ),
    title: "Реализация",
    bgColor: "bg-gradient-to-b from-[#1bc2fc] to-[#1d72f1]",
    stages: [
      "Согласование локации и съемки",
      "Создание 3D графики и предварительный просмотр видео",
      "Эффекты VFX и SFX, стилизация",
      "Презентация готового видео",
    ],
  },
];

const HowWeWork: FC<HowWeWorkProps> = ({ className }) => {
  // prettier-ignore
  const editedHtml = useMemo(() => {
    return howWeWorkCarousel.map((el) => (
      <m.div
        className={cn("flex items-start px-5 py-10 flex-col justify-between w-full h-[300px] rounded-[28px] overflow-hidden relative", el.bgColor)}
        initial="initial"
        whileHover="hover"
        animate="initial"
      >
        <m.span variants={{ initial: { opacity: 1 }, hover: { opacity: 0, transition: { duration: 0.2 } } }}>
          {el.icon}
        </m.span>

        <m.p
          className="relative justify-start text-white text-[32px] font-bold leading-9"
          variants={{
            initial: { y: 0 },
            hover: { y: -180, transition: { duration: 0.3 , ease: 'linear' }},
            exit: { y: 0, transition: { duration: 0.3, delay: 0.3, ease: 'linear' }},
          }}
        >
          {el.title}
        </m.p>

        <m.div
          className="flex flex-col gap-1 absolute bottom-5"
          variants={{
            initial: { opacity: 0, y: 20 },
            hover: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.2, delay: 0.2 }},
            exit: { opacity: 0, y: 20, transition: { duration: 0.5, ease: "easeIn" }},
          }}
        >
          {el.stages?.map((text, index) => (
            <m.p
              key={index}
              className="text-white text-xl"
              variants={{
                initial: { opacity: 0, x: -40 },
                hover: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut", delay: index * 0.3 }},
                exit: { opacity: 0, x: -40, transition: { duration: 0.3, ease: "easeIn" }},
              }}
            >
            {index+1}.  {text}
            </m.p>
          ))}
        </m.div>
      </m.div>
    ));
  }, []);

  return (
    <div className={cn("py-[100px]", className)}>
      <Container className={"overflow-hidden"}>
        <Header className={"text-[56px] mb-[80px]"} title={"Как мы работаем"} />
        <MonstriliCarousel
          className={"monsreel-carousel"}
          items={editedHtml}
          slidesPerView={3}
          nextEl={"next-afa9c933kdaadjkdf"}
          prevEl={"prev-sak303031kajkadff"}
        />
      </Container>
    </div>
  );
};

export default HowWeWork;
