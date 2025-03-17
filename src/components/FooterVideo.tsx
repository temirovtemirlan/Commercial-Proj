import { type FC, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "components/Container.tsx";
import { cn } from "helpers/style.ts";

interface FooterVideoProps {
  className?: string;
}

const FooterVideo: FC<FooterVideoProps> = ({ className }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null); // Контейнер нужен для отслеживания прокрутки

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // offset: ["start end", "end start"], // Анимация от начала контейнера до его конца
    offset: ["center center", "end start"], // Изменили здесь
  });

  //  Плавное изменение масштаба от 1 до 1.5 (можно настроить)
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  useEffect(() => {
    if (videoRef.current) {
      // Дополнительные настройки видео, если нужны (например, autoplay, loop)
      videoRef.current.muted = true; // Отключаем звук по умолчанию, чтобы разрешить автовоспроизведение во многих браузерах
      videoRef.current.play().catch((error) => {
        // Обработка ошибок воспроизведения, например, если autoplay заблокирован
        console.error("Autoplay failed:", error);
      });
    }
  }, []);

  return (
    <Container className={cn("pb-[120px] bg-[#161617]", className)}>
      <div ref={containerRef} style={{ height: "250vh", position: "relative" }}>
        {/* Высота контейнера больше, чем viewport, чтобы была прокрутка*/}
        <motion.video
          ref={videoRef}
          style={{
            width: "100%",
            height: "70dvh",
            // maxHeight: "800px",
            // Растягиваем видео на всю ширину/высоту контейнера (или задаем фиксированные размеры)
            objectFit: "cover", // Важно для правильного масштабирования без искажений!
            objectPosition: "top",
            position: "sticky", // Видео "прилипает" во время прокрутки
            top: 0,
            scale: scale, // Применяем анимацию масштаба
            willChange: "transform", // Оптимизация производительности
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

      {/*<video*/}
      {/*
      {/*  className="max-h-[730px] h-full w-full object-cover"*/}
      {/*  loop*/}
      {/*  autoPlay*/}
      {/*  muted*/}
      {/*  playsInline*/}
      {/*/>*/}
    </Container>
  );
};

export default FooterVideo;
