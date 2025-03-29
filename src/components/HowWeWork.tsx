import { useMemo, type FC } from "react";
import { m } from "motion/react";
// import { Header } from "common/Header";
import Container from "components/Container.tsx";
import MonstriliCarousel from "components/MonstriliCarousel.tsx";
import { cn } from "helpers/style.ts";

interface HowWeWorkProps {
  className?: string;
}

const howWeWorkCarousel = [
  {
    icon: "/Idea.svg",
    title: "Идею, которая может стать новой категорией",
    bgColor: "bg-gradient-to-b from-[#1e69f5] to-[#1ec7fa]",
    // stages: [
    //   "Первая встреча и брифинг",
    //   "Коммерческое предложение",
    //   "Подготовка, согласование и подписание контракта",
    //   "Предоплата",
    // ],
  },
  {
    icon: "/Check.svg",
    title: "Айдентику, которую <br/> не перепутают",
    bgColor: "bg-gradient-to-b from-[#fea800] to-[#ffcb03]",
    // stages: [
    //   "Разработка идеи",
    //   "Презентация концепции",
    //   "Доработка идеи",
    //   "Согласование концепции",
    // ],
  },
  {
    icon: "/Play.svg",
    title: "Контент, который вызывает эмоции и репосты",
    bgColor: "bg-gradient-to-b from-[#273833] to-[#0f1315]",
  },
  {
    icon: "/YouTube.svg",
    title: "Цифровые решения, которые работают 24/7",
    bgColor: "bg-gradient-to-b from-[#0d1177] to-[#753fc1]",
  },
  {
    icon: "/Strategy.svg",
    title: "Стратегию, за которой стоит интеллект и интуиция",
    bgColor: "bg-gradient-to-b from-[#fc5b73] to-[#fa2941]",
  },
  {
    icon: "/Team.svg",
    title: "Стратегию, за которой стоит интеллект и интуиция",
    bgColor: "bg-gradient-to-b from-[#1bc2fc] to-[#1d72f1]",
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

        <img src={`https://storage.googleapis.com/mkit_monster_bucket/Icons${el.icon}`} alt="icon" />

        <legend className="w-full max-w-[450px] text-white text-[35px] font-bold leading-tight" dangerouslySetInnerHTML={{__html: el.title}}/>

        {/*<m.span variants={{ initial: { opacity: 1 }, hover: { opacity: 0, transition: { duration: 0.2 } } }}>*/}
        {/*  {el.icon}*/}
        {/*</m.span>*/}

        {/*<m.p*/}
        {/*  className="relative justify-start text-white text-[32px] font-bold leading-9"*/}
        {/*  variants={{*/}
        {/*    initial: { y: 0 },*/}
        {/*    hover: { y: -180, transition: { duration: 0.3 , ease: 'linear' }},*/}
        {/*    exit: { y: 0, transition: { duration: 0.3, delay: 0.3, ease: 'linear' }},*/}
        {/*  }}*/}
        {/*>*/}
        {/*  {el.title}*/}
        {/*</m.p>*/}

        {/*<m.div*/}
        {/*  className="flex flex-col gap-1 absolute bottom-5"*/}
        {/*  variants={{*/}
        {/*    initial: { opacity: 0, y: 20 },*/}
        {/*    hover: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.2, delay: 0.2 }},*/}
        {/*    exit: { opacity: 0, y: 20, transition: { duration: 0.5, ease: "easeIn" }},*/}
        {/*  }}*/}
        {/*>*/}
        {/*  {el.stages?.map((text, index) => (*/}
        {/*    <m.p*/}
        {/*      key={index}*/}
        {/*      className="text-white text-xl"*/}
        {/*      variants={{*/}
        {/*        initial: { opacity: 0, x: -40 },*/}
        {/*        hover: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut", delay: index * 0.3 }},*/}
        {/*        exit: { opacity: 0, x: -40, transition: { duration: 0.3, ease: "easeIn" }},*/}
        {/*      }}*/}
        {/*    >*/}
        {/*    {index+1}.  {text}*/}
        {/*    </m.p>*/}
        {/*  ))}*/}
        {/*</m.div>*/}
      </m.div>
    ));
  }, []);

  return (
    <div className={cn("", className)}>
      <Container className={"overflow-hidden"}>
        {/*<Header className={"text-[56px] mb-[80px]"} title={"Как мы работаем"} />*/}
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
