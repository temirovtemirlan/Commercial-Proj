import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const images = Array.from(
  { length: 200 },
  (_, i) => `/ipad/${String(i).padStart(4, "0")}.png`
);

const FrameAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // useScroll отслеживает скролл внутри секции
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"], // Анимация идет от начала до конца контейнера
  });

  const rawFrameIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, images.length - 1]
  );
  const frameIndex = useSpring(rawFrameIndex, { stiffness: 300, damping: 20 });

  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    return frameIndex.onChange((i) => {
      setCurrentImage(images[Math.round(i)]);
    });
  }, [frameIndex]);

  useEffect(() => {
    const handleEnter = () => {
      //   document.body.style.overflow = "hidden"; // Отключаем скролл body
    };

    const handleExit = () => {
      document.body.style.overflow = ""; // Включаем скролл body обратно
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          handleEnter();
        } else {
          handleExit();
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      handleExit();
    };
  }, []);

  return (
    <div className="relative w-full">
      {/* Контейнер с анимацией */}
      <div
        ref={containerRef}
        className="sticky top-0 h-screen flex justify-center items-center overflow-y-auto"
      >
        <motion.img src={currentImage} className="w-full h-auto" />
      </div>
    </div>
  );
};

export default FrameAnimation;
