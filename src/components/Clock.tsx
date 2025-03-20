import { memo, useCallback, useState, type FC } from "react";
import { useInterval } from "usehooks-ts";
import { AnalogClock } from "@hoseinh/react-analog-clock";
import type { TimeZone } from "../fusion/type";
import emptyPicture from "app/assets/picture/empty-picture.png";
// import clockBgImage from "app/assets/picture/clockBgImage.png";

interface IClockProps {
  timeZone: TimeZone;
}

const analogClockProps = {
  whiteNumbers: true,
  customBg: emptyPicture,
  backgroundColor: "#161617",
  borderColor: "#333333",
  handBaseColor: "white",
  handColor: {
    hour: "white",
    minute: "white",
    second: "red",
  },
  handLength: { hour: "20px", minute: "40px", second: "40px" },
  size: "116px",
};

const image = (
  <img
    src={"/clockBgImage.png"}
    width={100}
    height={100}
    alt="clock bg custom image"
    className="absolute z-[1] object-cover pointer-events-none"
  />
);

const Clock: FC<IClockProps> = memo(({ timeZone }) => {
  const getTimeInTimeZone = useCallback((timeZone: TimeZone) => {
    return new Date(new Date().toLocaleString("en-US", { timeZone: timeZone }));
  }, []);

  const [time, setTime] = useState(getTimeInTimeZone(timeZone));

  useInterval(() => {
    setTime(getTimeInTimeZone(timeZone));
  }, 1000);

  return (
    <div className="pointer-events-none relative flex items-center justify-center">
      {image}
      <AnalogClock
        key={time.toString()}
        staticDate={time}
        {...analogClockProps}
      />
    </div>
  );
});

Clock.displayName = "Clock";

export default Clock;
