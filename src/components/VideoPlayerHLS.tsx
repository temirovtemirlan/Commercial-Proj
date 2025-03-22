// import React, { useEffect, useRef, VideoHTMLAttributes } from "react";
// import Hls from "hls.js";
//
// // Extend VideoHTMLAttributes to inherit all standard video attributes
// interface VideoPlayerProps extends VideoHTMLAttributes<HTMLVideoElement> {
//   src: string; // URL твоего M3U8 файла (make src required and specific for m3u8)
//   poster?: string; // URL превьюшки (optional, but keep it for video tag)
//   // We can remove controls here as it's already part of VideoHTMLAttributes
//   // controls?: boolean; //  управление видео (already in VideoHTMLAttributes)
//   // Add other video attributes as needed, but VideoHTMLAttributes already covers most
// }
//
// const VideoPlayerHLS: React.FC<VideoPlayerProps> = (props) => {
//   const { src, poster, ...videoProps } = props; // Destructure props, including src, poster and the rest as videoProps
//   const videoRef = useRef<HTMLVideoElement>(null);
//
//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;
//
//     if (Hls.isSupported()) {
//       const hls = new Hls();
//       hls.loadSource(src);
//       hls.attachMedia(video);
//       hls.on(Hls.Events.ERROR, (_event, data) => {
//         // ✅ Removed explicit type annotation for 'event' - let TypeScript infer the type
//         if (data.fatal) {
//           switch (data.type) {
//             case Hls.ErrorTypes.NETWORK_ERROR:
//               // try to recover network error
//               console.log("fatal network error encountered, try to recover");
//               hls.startLoad();
//               break;
//             case Hls.ErrorTypes.MEDIA_ERROR:
//               console.log("fatal media error encountered, try to recover");
//               hls.recoverMediaError();
//               break;
//             default:
//               // cannot recover
//               console.log("Unrecoverable Error", data);
//               hls.destroy();
//               break;
//           }
//         }
//       });
//     } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
//       // Fallback для старых Safari
//       video.src = src;
//       video.addEventListener("error", (e: Event) => {
//         // ✅ Kept type annotation for 'e' for the standard video 'error' event
//         console.error("Video Error", e);
//       });
//     }
//   }, [src]);
//
//   // Spread videoProps onto the video tag, this will include attributes like controls, autoPlay, loop, muted, etc.
//   return <video ref={videoRef} poster={poster} {...videoProps} />;
// };
//
// export default VideoPlayerHLS;

// HLS 2

// import React, { useEffect, useRef } from "react"; // ❌ Removed VideoHTMLAttributes import
// import Hls from "hls.js";
//
// // Extend VideoHTMLAttributes to inherit all standard video attributes
// interface VideoPlayerProps {
//   // ✅ No longer extending VideoHTMLAttributes
//   src: string; // URL твоего M3U8 файла (make src required and specific for m3u8)
//   poster?: string; // URL превьюшки (optional, but keep it for video tag)
//   controls?: boolean; //  управление видео (explicitly add controls prop back if needed)
//   autoPlay?: boolean; // explicitly add autoPlay prop back if needed
//   muted?: boolean; // explicitly add muted prop back if needed
//   className?: string; // explicitly add className prop back if needed
//   style?: React.CSSProperties; // explicitly add style prop back if needed
//   // Add other video attributes you want to support explicitly here, e.g., loop, preload, width, height, etc.
// }
//
// const VideoPlayerHLS: React.FC<VideoPlayerProps> = (props) => {
//   const { src, poster, controls, autoPlay, muted, className, style } = props; // ✅ Destructure only explicitly defined props
//   const videoRef = useRef<HTMLVideoElement>(null);
//
//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;
//
//     if (Hls.isSupported()) {
//       const hls = new Hls();
//       hls.loadSource(src);
//       hls.attachMedia(video);
//       hls.on(Hls.Events.ERROR, (_event, data) => {
//         // ✅ Removed explicit type annotation for 'event' - let TypeScript infer the type
//         if (data.fatal) {
//           switch (data.type) {
//             case Hls.ErrorTypes.NETWORK_ERROR:
//               // try to recover network error
//               console.log("fatal network error encountered, try to recover");
//               hls.startLoad();
//               break;
//             case Hls.ErrorTypes.MEDIA_ERROR:
//               console.log("fatal media error encountered, try to recover");
//               hls.recoverMediaError();
//               break;
//             default:
//               // cannot recover
//               console.log("Unrecoverable Error", data);
//               hls.destroy();
//               break;
//           }
//         }
//       });
//     } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
//       // Fallback для старых Safari
//       video.src = src;
//       video.addEventListener("error", (e: Event) => {
//         // ✅ Kept type annotation for 'e' for the standard video 'error' event
//         console.error("Video Error", e);
//       });
//     }
//   }, [src]);
//
//   // Spread videoProps onto the video tag, this will include attributes like controls, autoPlay, loop, muted, etc.
//   return (
//     <video
//       ref={videoRef}
//       poster={poster}
//       controls={controls} // ✅ Pass controls prop explicitly
//       autoPlay={autoPlay} // ✅ Pass autoPlay prop explicitly
//       muted={muted} // ✅ Pass muted prop explicitly
//       className={className} // ✅ Pass className prop explicitly
//       style={style} // ✅ Pass style prop explicitly
//     />
//   );
// };
//
// export default VideoPlayerHLS;

// Chinese Code 3

// import React, { useEffect, useRef } from "react";
// import Hls from "hls.js";
//
// interface VideoPlayerProps {
//   src: string;
//   poster?: string;
//   controls?: boolean;
//   autoPlay?: boolean;
//   muted?: boolean;
//   className?: string;
//   style?: React.CSSProperties;
// }
//
// const MAX_RETRIES = 3;
// const RETRY_DELAY_MS = 1000;
//
// const VideoPlayerHLS: React.FC<VideoPlayerProps> = ({
//   src,
//   poster,
//   controls = true,
//   autoPlay = false,
//   muted = false,
//   className,
//   style,
// }) => {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const hlsInstance = useRef<Hls | null>(null);
//   const retryCount = useRef(0);
//
//   useEffect(() => {
//     const videoElement = videoRef.current;
//     if (!videoElement) return;
//
//     const initHls = () => {
//       if (hlsInstance.current) {
//         hlsInstance.current.destroy();
//       }
//
//       if (Hls.isSupported()) {
//         const hls = new Hls({
//           enableWorker: true,
//           lowLatencyMode: true,
//           liveSyncDurationCount: 3,
//           pLoader: createCustomLoader(),
//         });
//
//         hlsInstance.current = hls;
//
//         hls.loadSource(src);
//         hls.attachMedia(videoElement);
//
//         hls.on(Hls.Events.MANIFEST_PARSED, () => {
//           retryCount.current = 0;
//           if (autoPlay) {
//             videoElement.play().catch((error) => {
//               console.warn("Autoplay failed:", error);
//             });
//           }
//         });
//
//         hls.on(Hls.Events.ERROR, handleHlsError);
//       } else if (videoElement.canPlayType("application/vnd.apple.mpegurl")) {
//         videoElement.src = src;
//         videoElement.addEventListener("error", handleNativeError);
//       }
//     };
//
//     const createCustomLoader = () => {
//       return (context: any, config: any) => {
//         const loader = new Hls.DefaultConfig.loader(context, config);
//         const originalLoad = loader.load.bind(loader);
//
//         loader.load = (context: any, config: any, callbacks: any) => {
//           if (context.url.startsWith("/") && !context.url.startsWith("//")) {
//             const baseUrl = new URL(src).origin;
//             context.url = baseUrl + context.url;
//           }
//           return originalLoad(context, config, callbacks);
//         };
//
//         return loader;
//       };
//     };
//
//     const handleHlsError = (_event: any, data: any) => {
//       if (!data.fatal) return;
//
//       switch (data.type) {
//         case Hls.ErrorTypes.NETWORK_ERROR:
//           if (retryCount.current < MAX_RETRIES) {
//             console.warn(
//               `Network error, retrying (${retryCount.current + 1}/${MAX_RETRIES})...`
//             );
//             setTimeout(() => {
//               hlsInstance.current?.startLoad();
//               retryCount.current++;
//             }, RETRY_DELAY_MS * retryCount.current);
//           } else {
//             console.error("Max network retries reached");
//             destroyPlayer();
//           }
//           break;
//
//         case Hls.ErrorTypes.MEDIA_ERROR:
//           console.warn("Media error, recovering...");
//           hlsInstance.current?.recoverMediaError();
//           break;
//
//         default:
//           console.error("Unrecoverable error");
//           destroyPlayer();
//           break;
//       }
//     };
//
//     const handleNativeError = () => {
//       console.error("Native HLS error:", videoElement?.error);
//     };
//
//     const destroyPlayer = () => {
//       if (hlsInstance.current) {
//         hlsInstance.current.destroy();
//         hlsInstance.current = null;
//       }
//     };
//
//     initHls();
//
//     return () => {
//       destroyPlayer();
//       if (videoElement) {
//         videoElement.removeEventListener("error", handleNativeError);
//       }
//     };
//   }, [src, autoPlay]);
//
//   return (
//     <video
//       ref={videoRef}
//       poster={poster}
//       controls={controls}
//       autoPlay={autoPlay}
//       muted={muted}
//       className={className}
//       style={style}
//       playsInline
//       preload="auto"
//     />
//   );
// };
//
// export default VideoPlayerHLS;

// Code 4 from Github

import React, { useEffect, useRef } from "react";
import Hls from "hls.js";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  controls?: boolean;
  autoPlay?: boolean;
  muted?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const VideoPlayerHLS: React.FC<VideoPlayerProps> = (props) => {
  const { src, poster, controls, autoPlay, muted, className, style } = props;
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        console.log("Manifest loaded, video is ready to play");
      });
      hls.on(Hls.Events.ERROR, (_event, data) => {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              console.log("Fatal network error encountered, trying to recover");
              hls.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              console.log("Fatal media error encountered, trying to recover");
              hls.recoverMediaError();
              break;
            default:
              console.log("Unrecoverable error", data);
              hls.destroy();
              break;
          }
        }
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
    }
  }, [src]);

  return (
    <video
      ref={videoRef}
      poster={poster}
      controls={controls}
      autoPlay={autoPlay}
      muted={muted}
      className={className}
      style={style}
    />
  );
};

export default VideoPlayerHLS;
