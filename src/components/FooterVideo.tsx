import { type FC, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "helpers/style.ts";

interface FooterVideoProps {
  className?: string;
}

const FooterVideo: FC<FooterVideoProps> = ({ className }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Прогресс прокрутки
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Инвертируем масштаб: из большего в нормальный
  const scale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);

  // Смещение по горизонтали (чтобы центрировалось) - **Уменьшаем начальное смещение до -15%**
  const left = useTransform(scrollYProgress, [0, 1], ["-15%", "0%"]);

  // **Новое преобразование для ширины:**
  // Уменьшаем ширину от 100% до, например, 70% при прокрутке вниз
  const width = useTransform(scrollYProgress, [0, 1], ["100%", "70%"]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((error) => {
        console.error("Autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div
      className={cn("relative pt-[300px] pb-[120px] bg-[#161617]", className)}
      ref={containerRef}
      style={{ height: "9000px" }}
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
          left: left, // Смещение для центрирования (уменьшено до -15%)
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
  );
};

export default FooterVideo;
