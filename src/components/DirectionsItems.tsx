import { FC, useEffect, useState } from "react";
import { cn } from "helpers/style";
import { useInView } from "react-intersection-observer";
import VideoPlayerHLS from "components/VideoPlayerHLS.tsx";

const loadedVideos = new Set<string>();

interface DirectionsItemsProps {
  className?: string;
  item: {
    title: string;
    titleGradient: string;
    descOne: string;
    list: string[];
    descTwo: string;
    video: string;
    upcText?: string;
  };
}

const DirectionsItems: FC<DirectionsItemsProps> = ({ className, item }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Загружает видео только один раз
    threshold: 0.5, // Срабатывает, когда видео видно на 50%
  });
  const [isLoaded, setIsLoaded] = useState(loadedVideos.has(item.video));
  useEffect(() => {
    if (inView && !isLoaded) {
      loadedVideos.add(item.video); // Добавляем видео в кэш
      setIsLoaded(true);
    }
  }, [inView, isLoaded, item.video]);

  return (
    <div
      ref={ref}
      className={cn(
        "directions-items flex flex-col md:flex-row md:rounded-3xl rounded-xl overflow-hidden bg-black h-[910px] md:h-[850px] lg:max-h-[680px] lg:min-h-[680px] w-full",
        // "flex flex-col md:flex-row md:rounded-3xl rounded-xl overflow-hidden bg-black h-[910px] md:h-[850px] lg:max-h-[680px] lg:min-h-[680px] ",
        // "grid lg:grid-cols-2 w-full bg-black max-h-[900px] min-h-[900px] md:max-h-[680px] md:min-h-[680px] rounded-[28px] overflow-hidden",
        className
      )}
    >
      <div className="w-full h-[280px] bg-[#111111] lg:hidden">
        <div className={cn("w-full h-full")}>
          {isLoaded ? (
            <video
              className={"size-full object-cover pointer-events-none"}
              src={item.video}
              loop
              muted
              playsInline
              controls={false}
              autoPlay={true}
            />
          ) : null}
        </div>
      </div>

      <div className="w-full px-6 py-8 md:p-10">
        <div className="inline-flex flex-col justify-start items-start gap-[22px]">
          <legend
            className={cn(
              "justify-center md:text-[55px] text-[42px] font-bold leading-tight",
              item.titleGradient
            )}
            style={{
              background: item.titleGradient,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {item.title}
          </legend>

          <div className="lg:self-stretch lg:justify-start">
            {item.upcText && (
              <p className="text-white text-base md:text-lg leading-relaxed">
                {item.upcText}
              </p>
            )}

            <p
              className={`text-white text-base md:text-lg leading-relaxed ${
                item.upcText ? "mt-6" : ""
              }`}
            >
              {item.descOne}
            </p>

            <ul className="text-white text-base md:text-lg leading-relaxed list-disc list-outside mt-6 pl-5">
              {item.list.map((el) => (
                <li key={el}>{el}</li>
              ))}
            </ul>

            <p
              dangerouslySetInnerHTML={{ __html: item.descTwo }}
              className="text-white text-base md:text-lg leading-relaxed mt-6"
            ></p>
          </div>
        </div>
      </div>

      <div className="h-[680px] bg-[#111111] w-full max-lg:hidden">
        <div className={cn("h-full")} ref={ref}>
          {isLoaded ? (
            <VideoPlayerHLS
              className={"size-full object-cover pointer-events-none"}
              src={item.video}
              autoPlay
              muted
              controls={false}
              loop
            />
          ) : (
            // <video
            //   className={"size-full object-cover pointer-events-none"}
            //   src={item.video}
            //   loop
            //   muted
            //   playsInline
            //   controls={false}
            //   autoPlay={isLoaded}
            // />
            // <VideoFrame {...props} />
            <div className={"size-full bg-[#111111]"} />
          )}
        </div>
        {/*<video*/}
        {/*  src={item.video}*/}
        {/*  loop*/}
        {/*  muted*/}
        {/*  controls={false}*/}
        {/*  playsInline*/}
        {/*></video>*/}
      </div>
    </div>
  );
};

export default DirectionsItems;
