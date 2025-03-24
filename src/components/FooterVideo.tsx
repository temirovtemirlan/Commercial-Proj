import { type FC, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";

interface FooterVideoProps {
  className?: string;
}

// http://192.168.0.149:5173/

const FooterVideo: FC<FooterVideoProps> = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const isMobile = useMediaQuery("(max-width: 820px)");
  const isTablet = useMediaQuery("(min-width: 820px) and (max-width: 1090px)");
  const isDesktop = useMediaQuery("(min-width: 1090px)");

  // Прогресс прокрутки
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Инвертируем масштаб: из большего в нормальный
  const scale = useTransform(scrollYProgress, [1, 0], [1.5, 1]);
  // const scale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);

  // **Новое преобразование для ширины:**
  // Уменьшаем ширину от 100% до, например, 70% при прокрутке вниз
  const width = useTransform(scrollYProgress, [1, 0], ["66.5%", "90%"]);
  // const width = useTransform(scrollYProgress, [0, 1], ["66%", "88%"]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play();
    }
  }, []);

  let containerStyle;

  if (isMobile) {
    containerStyle = "3000px";
  } else if (isTablet) {
    containerStyle = "1500px";
  } else if (isDesktop) {
    containerStyle = "3000px";
  }

  return (
    <div
      className="relative pt-[300px] pb-[120px] bg-[#161617] w-full"
      ref={containerRef}
      style={{ height: containerStyle }}
    >
      <div
        className="absolute inset-0 w-full h-full"
        style={{ clipPath: "inset(0)" }}
      >
        <motion.video
          ref={videoRef}
          style={{
            width: width, // **Применяем новое преобразование ширины**
            maxWidth: "100%",
            maxHeight: "100dvh",
            height: "100dvh",
            objectFit: "cover",
            position: "sticky",
            marginLeft: "auto",
            marginRight: "auto",
            top: 0,
            scale: scale, // Изменяем масштаб
            // left: left, // Смещение для центрирования (уменьшено до -15%)
            willChange: "transform",
          }}
          src="https://storage.googleapis.com/mkit_monster_bucket/Video/MKIT/SAIT.MONSTER_6.mp4"
          loop
          autoPlay
          muted
          playsInline
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
      </div>
    </div>
  );
};

export default FooterVideo;
