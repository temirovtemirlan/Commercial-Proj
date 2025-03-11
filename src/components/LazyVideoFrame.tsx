import { type FC, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import VideoFrame, { VideoFrameProps } from "components/VideoFrame.tsx";

// Кэш загруженных видео (чтобы не перезапускались при повторном появлении)
const loadedVideos = new Set<string>();

const LazyVideoFrame: FC<VideoFrameProps> = (props) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Загружает видео только один раз
    threshold: 0.5, // Срабатывает, когда видео видно на 50%
  });

  const [isLoaded, setIsLoaded] = useState(loadedVideos.has(props.videoSrc));

  useEffect(() => {
    if (inView && !isLoaded) {
      loadedVideos.add(props.videoSrc); // Добавляем видео в кэш
      setIsLoaded(true);
    }
  }, [inView, isLoaded, props.videoSrc]);

  return (
    <div className="h-full" ref={ref}>
      {isLoaded ? (
        <VideoFrame {...props} />
      ) : (
        <img className="h-full" src={props.posterSrc} alt="Видео превью" />
      )}
    </div>
  );
};

export default LazyVideoFrame;
