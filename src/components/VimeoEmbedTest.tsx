import { useEffect, useRef, useState } from "react";
import type { CSSProperties, FC, ReactNode } from "react";
import { cn } from "fusion/helpers/style"; // Убедись, что путь верный, или замени на "fusion/helpers/style" если это твой путь
import Player from "@vimeo/player";

interface VimeoEmbedProps {
  videoId: string;
  videoURL: string;
  width?: string | number;
  height?: string | number;
  responsive?: boolean;
  className?: string;
  title?: string;
  thumbnailUrl?: string;
  playIcon?: ReactNode;
  showControls?: boolean;
}

const VimeoEmbedTest: FC<VimeoEmbedProps> = ({
  videoId,
  videoURL,
  width = "100%",
  height = "auto",
  responsive = true,
  className,
  title,
  thumbnailUrl,
  playIcon, // Используем переданный playIcon
  showControls = true,
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showPlayer, setShowPlayer] = useState<boolean>(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const playerRef = useRef<Player | null>(null); // Correct type for playerRef

  const videoUrl = `https://player.vimeo.com/video/${videoId}?h=${videoURL}&background=1&controls=0&autoplay=0&muted=0&loop=0&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`;

  const iframeStyle: CSSProperties = {
    position: responsive ? "absolute" : "relative",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  };

  const wrapperStyle: CSSProperties = {
    paddingTop: responsive ? "56.25%" : "0",
    position: "relative",
    width: width,
    height: height === "auto" && responsive ? 0 : height,
    overflow: "hidden",
    cursor: thumbnailUrl ? "pointer" : "auto",
  };

  const thumbnailStyle: CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: thumbnailUrl ? `url(${thumbnailUrl})` : "none",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: showPlayer ? "none" : "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "2em",
    textShadow: "2px 2px 4px #000000",
  };

  const playButtonStyle: CSSProperties = {
    cursor: "pointer",
  };

  const controlsContainerStyle: CSSProperties = {
    position: "absolute",
    bottom: "16px", // Немного увеличил отступ для наглядности
    right: "16px", // Немного увеличил отступ для наглядности
    display: showPlayer && showControls ? "flex" : "none",
    zIndex: 10,
  };

  const controlButtonStyle: CSSProperties = {
    background: "transparent", // Прозрачный фон
    color: "white",
    border: "none",
    padding: "0", // Убрал padding, чтобы SVG не имел лишних отступов внутри кнопки
    cursor: "pointer",
  };

  const handlePlayClick = () => {
    // console.log("handlePlayClick called. isPlaying:", isPlaying); // <--- Добавили лог

    if (thumbnailUrl && !showPlayer) {
      setShowPlayer(true);
      setIsPlaying(true);
      // console.log("Thumbnail click - setShowPlayer(true), setIsPlaying(true)"); // <--- Добавили лог
    } else {
      if (isPlaying) {
        playerRef.current?.pause();
        // console.log("Pause video - playerRef.current?.pause()"); // <--- Добавили лог
      } else {
        playerRef.current?.play();
        // console.log("Play video - playerRef.current?.play()"); // <--- Добавили лог
      }
      setIsPlaying(!isPlaying);
      // console.log("setIsPlaying(!isPlaying) - new isPlaying:", !isPlaying); // <--- Добавили лог
    }
  };

  useEffect(() => {
    let player: Player | null = null; // Локальная переменная для плеера в useEffect

    if (showPlayer && iframeRef.current) {
      player = new Player(iframeRef.current);
      playerRef.current = player; // Сохраняем в ref для доступа вне useEffect

      player.on("play", () => {
        setIsPlaying(true);
      });

      player.on("pause", () => {
        setIsPlaying(false);
      });

      player.on("ended", () => {
        setIsPlaying(false);
      });

      if (isPlaying) {
        player.play();
      }
    }
    return () => {
      if (player) {
        // Используем локальную переменную player для очистки
        player.destroy();
      }
      playerRef.current = null; // Обнуляем ref при unmount
    };
  }, [showPlayer, isPlaying]);

  return (
    <div
      className={cn("", className)}
      style={wrapperStyle}
      onClick={thumbnailUrl && !showPlayer ? handlePlayClick : undefined}
    >
      {thumbnailUrl && !showPlayer && (
        <div style={thumbnailStyle}>
          <div style={playButtonStyle}>{playIcon}</div>
        </div>
      )}

      {showPlayer && (
        <iframe
          ref={iframeRef}
          src={videoUrl}
          style={iframeStyle}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={title}
        />
      )}

      {showControls && showPlayer && (
        <div style={controlsContainerStyle}>
          <button style={controlButtonStyle} onClick={handlePlayClick}>
            {playIcon} {/* Отображаем только playIcon (SVG) */}
          </button>
        </div>
      )}
    </div>
  );
};

export default VimeoEmbedTest;
