import React, { useEffect, useRef, VideoHTMLAttributes } from "react";
import Hls from "hls.js";

// Extend VideoHTMLAttributes to inherit all standard video attributes
interface VideoPlayerProps extends VideoHTMLAttributes<HTMLVideoElement> {
  src: string; // URL твоего M3U8 файла (make src required and specific for m3u8)
  poster?: string; // URL превьюшки (optional, but keep it for video tag)
  // We can remove controls here as it's already part of VideoHTMLAttributes
  // controls?: boolean; //  управление видео (already in VideoHTMLAttributes)
  // Add other video attributes as needed, but VideoHTMLAttributes already covers most
}

const VideoPlayerHLS: React.FC<VideoPlayerProps> = (props) => {
  const { src, poster, ...videoProps } = props; // Destructure props, including src, poster and the rest as videoProps
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.ERROR, (_event, data) => {
        // ✅ Removed explicit type annotation for 'event' - let TypeScript infer the type
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              // try to recover network error
              console.log("fatal network error encountered, try to recover");
              hls.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              console.log("fatal media error encountered, try to recover");
              hls.recoverMediaError();
              break;
            default:
              // cannot recover
              console.log("Unrecoverable Error", data);
              hls.destroy();
              break;
          }
        }
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Fallback для старых Safari
      video.src = src;
      video.addEventListener("error", (e: Event) => {
        // ✅ Kept type annotation for 'e' for the standard video 'error' event
        console.error("Video Error", e);
      });
    }
  }, [src]);

  // Spread videoProps onto the video tag, this will include attributes like controls, autoPlay, loop, muted, etc.
  return <video ref={videoRef} poster={poster} {...videoProps} />;
};

export default VideoPlayerHLS;
