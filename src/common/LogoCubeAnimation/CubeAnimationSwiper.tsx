import { type FC, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

interface IProps {
  images: string[];
  delayInterval: number;
}
const sizeSmall = ["BOSS", "CALIPSO", "NIKE", "QADYR", "PAPAJOHNS", "PAUL"];

const CompanyLogoCubeAnimation: FC<IProps> = ({ images, delayInterval }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, delayInterval);

    return () => clearInterval(intervalId);
  }, [images.length, delayInterval]);

  // prettier-ignore
  const variants = {
    enter: (direction: number) => ({ rotateX: direction > 0 ? 90 : -90, opacity: 0, y: "50%", transition: { duration: 0.6, ease: "easeInOut" }}),
    center: { rotateX: 0, opacity: 1, y: "0%", transition: { duration: 0.6, ease: "easeInOut" }},
    exit: (direction: number) => ({ rotateX: direction > 0 ? -90 : 90, opacity: 0, y: "-50%", transition: { duration: 0.6, ease: "easeInOut" } }),
  };

  const currentLogo = images[currentIndex];
  // prettier-ignore
  const isSmallLogo = currentLogo ? sizeSmall.some((logo) => currentLogo.toUpperCase().includes(logo.toUpperCase())) : false;

  return (
    <div className="relative h-16 w-full overflow-hidden flex justify-center ">
      <AnimatePresence initial={false} custom={currentIndex > 0 ? 1 : -1}>
        <motion.div
          key={currentIndex}
          className="absolute h-full max-w-[260px] w-full"
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          custom={currentIndex > 0 ? 1 : -1}
        >
          <img
            src={images[currentIndex]}
            className="h-full mx-auto object-contain"
            style={{ width: isSmallLogo ? "70%" : "100%" }}
            alt={`Slide ${currentIndex + 1}`}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CompanyLogoCubeAnimation;
