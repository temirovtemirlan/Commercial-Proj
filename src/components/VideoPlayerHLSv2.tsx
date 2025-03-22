import { useRef, useState, useEffect, type FC } from "react";
import Hls from "hls.js";
import { cn } from "helpers/style";
import { getVideoType } from "helpers/getTypeVideo.ts";

// Глобальная ссылка на текущее воспроизводимое видео
let activeVideoRef: HTMLVideoElement | null = null;

export interface VideoPlayerHLSv2Props {
  src: string[] | string;
  posterSrc?: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  title?: string;
  isFullScreen?: boolean;
}

const VideoPlayerHLSv2: FC<VideoPlayerHLSv2Props> = ({
  src,
  posterSrc,
  width = "100%",
  height = "auto",
  className,
  title,
  isFullScreen,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (typeof src === "string" && src.endsWith(".m3u8")) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(src);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          console.log("HLS Manifest загружен");
        });
        hls.on(Hls.Events.ERROR, (_event, data) => {
          if (data.fatal) {
            switch (data.type) {
              case Hls.ErrorTypes.NETWORK_ERROR:
                console.log("Ошибка сети, перезапуск загрузки...");
                hls.startLoad();
                break;
              case Hls.ErrorTypes.MEDIA_ERROR:
                console.log("Ошибка медиа, попытка восстановления...");
                hls.recoverMediaError();
                break;
              default:
                console.log("Критическая ошибка", data);
                hls.destroy();
                break;
            }
          }
        });
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = src;
      }
    }
  }, [src]);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (activeVideoRef && activeVideoRef !== videoRef.current) {
      activeVideoRef.pause();
    }

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
      activeVideoRef = videoRef.current;
    }
  };

  const handleEnterFullScreen = () => {
    const videoEl = videoRef.current;
    if (videoEl) {
      if (videoEl.requestFullscreen) {
        videoEl.requestFullscreen();
      } else if ((videoEl as any).webkitRequestFullscreen) {
        (videoEl as any).webkitRequestFullscreen();
      } else if ((videoEl as any).mozRequestFullScreen) {
        (videoEl as any).mozRequestFullScreen();
      } else if ((videoEl as any).msRequestFullscreen) {
        (videoEl as any).msRequestFullscreen();
      }
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updatePlayState = () => setIsPlaying(!video.paused);

    video.addEventListener("play", updatePlayState);
    video.addEventListener("pause", updatePlayState);
    video.addEventListener("ended", updatePlayState);

    return () => {
      video.removeEventListener("play", updatePlayState);
      video.removeEventListener("pause", updatePlayState);
      video.removeEventListener("ended", updatePlayState);
    };
  }, []);

  return (
    <div className={cn("relative", className)}>
      <video
        ref={videoRef}
        poster={posterSrc}
        controls={false}
        title={title}
        className="w-full h-full object-cover"
        width={width}
        height={height}
        playsInline
        preload="none"
      >
        {typeof src === "string" && !src.endsWith(".m3u8") ? (
          <source src={src.trim()} type={getVideoType(src)} />
        ) : (
          Array.isArray(src) &&
          src.map((el, index) => (
            <source
              key={index}
              src={el.trim()}
              type={getVideoType(el.trim())}
            />
          ))
        )}
      </video>
      <div className="absolute inset-0 w-full" onClick={togglePlay} />
      <button className="absolute bottom-5 right-5" onClick={togglePlay}>
        {isPlaying ? pauseIcon : playIcon}
      </button>
      {isFullScreen && (
        <button
          className="absolute bottom-5 right-16"
          onClick={handleEnterFullScreen}
        >
          {fullScreenIcon}
        </button>
      )}
    </div>
  );
};

const fullScreenIcon = (
  <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
    <rect width="35" height="35" rx="17.5" fill="#E7E7EB" />
    <path
      d="M12.5 19.5H10.5V24.5H15.5V22.5H12.5V19.5ZM10.5 15.5H12.5V12.5H15.5V10.5H10.5V15.5ZM22.5 22.5H19.5V24.5H24.5V19.5H22.5V22.5ZM19.5 10.5V12.5H22.5V15.5H24.5V10.5H19.5Z"
      fill="#6D6D6F"
    />
  </svg>
);

const playIcon = (
  <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
    <rect width="35" height="35" rx="17.5" fill="#E7E7EB" />
    <path
      d="M13.5 22.087V12.919C13.5 11.985 14.063 11.495 14.76 11.495C15.146 11.495 15.387 11.559 15.727 11.767L23.195 16.17C23.857 16.56 24.215 16.877 24.215 17.494C24.215 18.112 23.857 18.429 23.195 18.819L15.727 23.222C15.387 23.43 15.146 23.495 14.761 23.495C14.063 23.495 13.5 23.022 13.5 22.087Z"
      fill="#6D6D6F"
    />
  </svg>
);

const pauseIcon = (
  <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
    <rect width="35" height="35" rx="17.5" fill="#E7E7EB" />
    <path
      d="M23 12.393V22.607C23 23.376 22.403 24 21.667 24H20.333C19.597 24 19 23.376 19 22.607V12.393C19 11.623 19.597 11 20.333 11H21.667C22.403 11 23 11.624 23 12.393ZM14.667 11H13.333C12.597 11 12 11.624 12 12.393V22.607C12 23.376 12.597 24 13.333 24H14.667C15.403 24 16 23.376 16 22.607V12.393C16 11.623 15.403 11 14.667 11Z"
      fill="#6D6D6F"
    />
  </svg>
);

export default VideoPlayerHLSv2;
