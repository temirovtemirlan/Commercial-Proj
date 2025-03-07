import type { CSSProperties, FC } from "react";
import { cn } from "helpers/style.ts";

interface VimeoEmbedProps {
  videoId: string;
  videoURL: string;
  width?: string | number;
  height?: string | number;
  responsive?: boolean;

  className?: string;

  title?: string;
}

const VimeoEmbed: FC<VimeoEmbedProps> = ({
  videoId,
  videoURL,
  width = "100%", // По умолчанию 100% ширины контейнера
  height = "auto", // Автоматическая высота
  responsive = true, // Адаптивность включена по умолчанию
  className,
  title,
}) => {
  const videoUrl = `https://player.vimeo.com/video/${videoId}?h=${videoURL}&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`;

  const iframeStyle: CSSProperties = {
    position: responsive ? "absolute" : "relative", // Адаптивность или фиксированные размеры
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  };

  const wrapperStyle: CSSProperties = {
    paddingTop: responsive ? "56.25%" : "0", // Соотношение сторон 16:9 для адаптивности (9 / 16 * 100%)
    position: "relative",
    width: width,
    height: height === "auto" && responsive ? 0 : height, // Авто высота только для адаптивности
    overflow: "hidden", // Скрываем возможные выходы iframe за границы
  };

  return (
    <div className={cn("", className)} style={wrapperStyle}>
      <iframe
        src={videoUrl}
        style={iframeStyle}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture" // Убрал clipboard-write и encrypted-media (не всегда нужны)
        allowFullScreen // Более современный способ запросить полноэкранный режим
        title={title} // Важно для доступности
      />
    </div>
  );
};

export default VimeoEmbed;
