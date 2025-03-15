import { type FC, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

interface IProps {
  companyLogo: string[];
  delayInterval: number;
}

const CompanyLogoCubeAnimation: FC<IProps> = ({
  companyLogo: images,
  delayInterval: autoplayDelay,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoplayDelay);

    return () => clearInterval(intervalId); // Очищаем интервал при размонтировании компонента
  }, [images.length, autoplayDelay]);

  const variants = {
    enter: {
      y: "100%",
      opacity: 0,
      rotateY: 90,
      transition: {
        duration: 0.8,
        ease: "easeInOut", // Добавил easing для более плавной анимации
      },
    },
    center: {
      y: "0%",
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
    exit: {
      y: "-100%",
      opacity: 0,
      rotateY: -90,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className={`relative h-16 w-full overflow-hidden`}>
      <AnimatePresence initial={false} custom={currentIndex}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="absolute top-0 left-0 h-full w-full object-contain"
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
        />
      </AnimatePresence>
    </div>
  );
};

export default CompanyLogoCubeAnimation;
