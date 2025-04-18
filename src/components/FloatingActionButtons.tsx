import { useEffect, useState, type FC } from "react";
import { AnimatePresence, motion } from "motion/react";
import { NavLink } from "react-router-dom";
import { cn } from "helpers/style";

const icons = [
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
          fill="black"
        />
      </svg>
    ),
    name: "Phone",
    link: "tel:+996 509 711 811",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.02961 1.50004C4.93461 1.50004 1.59711 4.83754 1.59711 8.93254C1.59711 10.245 1.94211 11.52 2.58711 12.645L1.53711 16.5L5.47461 15.465C6.56211 16.0575 7.78461 16.3725 9.02961 16.3725C13.1246 16.3725 16.4621 13.035 16.4621 8.94004C16.4621 6.95254 15.6896 5.08504 14.2871 3.68254C13.5994 2.98812 12.7804 2.43752 11.8777 2.06281C10.9751 1.68811 10.0069 1.4968 9.02961 1.50004ZM9.03711 2.75254C10.6871 2.75254 12.2321 3.39754 13.4021 4.56754C13.9761 5.14168 14.4313 5.82342 14.7414 6.57373C15.0516 7.32403 15.2107 8.12816 15.2096 8.94004C15.2096 12.345 12.4346 15.1125 9.02961 15.1125C7.91961 15.1125 6.83211 14.82 5.88711 14.25L5.66211 14.1225L3.32211 14.7375L3.94461 12.4575L3.79461 12.2175C3.17552 11.2338 2.84786 10.0948 2.84961 8.93254C2.85711 5.52754 5.62461 2.75254 9.03711 2.75254ZM6.39711 5.49754C6.27711 5.49754 6.07461 5.54254 5.90211 5.73004C5.73711 5.91754 5.24961 6.37504 5.24961 7.28254C5.24961 8.19754 5.91711 9.07504 5.99961 9.20254C6.10461 9.33004 7.31961 11.205 9.18711 12C9.62961 12.2025 9.97461 12.315 10.2446 12.3975C10.6871 12.54 11.0921 12.5175 11.4146 12.4725C11.7746 12.42 12.5096 12.0225 12.6671 11.5875C12.8246 11.1525 12.8246 10.785 12.7796 10.7025C12.7271 10.6275 12.6071 10.5825 12.4196 10.5C12.2321 10.395 11.3171 9.94504 11.1521 9.88504C10.9796 9.82504 10.8746 9.79504 10.7321 9.97504C10.6121 10.1625 10.2521 10.5825 10.1471 10.7025C10.0346 10.83 9.92961 10.845 9.74961 10.755C9.55461 10.6575 8.95461 10.4625 8.24961 9.83254C7.69461 9.33754 7.32711 8.73004 7.21461 8.54254C7.12461 8.36254 7.20711 8.25004 7.29711 8.16754C7.37961 8.08504 7.49961 7.95004 7.57461 7.83754C7.67211 7.73254 7.70211 7.65004 7.76211 7.53004C7.82211 7.40254 7.79211 7.29754 7.74711 7.20754C7.70211 7.12504 7.32711 6.19504 7.16961 5.82754C7.01961 5.46754 6.86961 5.51254 6.74961 5.50504C6.64461 5.50504 6.52461 5.49754 6.39711 5.49754Z"
          fill="black"
        />
      </svg>
    ),
    name: "WhatsApp",
    link: "https://wa.me/9960509711811?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%20%D0%BF%D0%B8%D1%88%D1%83%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0!",
  },
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.7097 3.6545C20.7097 3.6545 22.6523 2.897 22.4904 4.73664C22.4365 5.49415 21.9508 8.1454 21.573 11.0131L20.278 19.5079C20.278 19.5079 20.17 20.7524 19.1987 20.9688C18.2273 21.1852 16.7704 20.2113 16.5005 19.9949C16.2847 19.8326 12.4534 17.3977 11.1043 16.2074C10.7265 15.8827 10.2948 15.2335 11.1582 14.476L16.8244 9.06525C17.4719 8.41595 18.1194 6.90095 15.4213 8.7406L7.86655 13.8808C7.86655 13.8808 7.00315 14.4219 5.3843 13.9349L1.87671 12.8527C1.87671 12.8527 0.581605 12.0411 2.79408 11.2295C8.19035 8.68645 14.8278 6.0893 20.7097 3.6545Z"
          fill="black"
        />
      </svg>
    ),
    name: "Telegram",
    link: "https://t.me/MonstrCorpBot",
  },
];

const btnStl =
  "inline-flex justify-center items-center w-12 h-12 bg-white rounded-full shadow-[0px_8px_16px_0px_rgba(0,0,0,0.06)]";
const scrollThreshold = 1000;

// prettier-ignore
const containerVariants = {
  open: { transition: { staggerChildren: 0.1, staggerDirection: -1 } },
  closed: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};
// prettier-ignore
const itemVariants = {
  open: { opacity: 1, scale: 1, transition: { duration: 0.2, ease: "linear" } },
  closed: { opacity: 0, scale: 0, transition: { duration: 0.2, ease: "linear" } },
};

const FloatingActionButtons: FC = () => {
  const [isScrollTo, setIsScrollTo] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const onOpenHandler = () => setIsOpen(false);
  const onScrollTo = () => window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        setIsScrollTo(true);
      } else {
        setIsScrollTo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollThreshold]);

  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Проверка на сенсорное устройство
    const checkIfTouchDevice = () => {
      setIsTouchDevice(window.matchMedia("(pointer: coarse)").matches);
    };

    // Проверка при монтировании компонента
    checkIfTouchDevice();

    // Прослушивание изменений при изменении типа устройства
    window.addEventListener("resize", checkIfTouchDevice);

    return () => {
      window.removeEventListener("resize", checkIfTouchDevice);
    };
  }, []);

  return (
    <div className="fixed right-8 ss:right-10 bottom-[50px] ss:bottom-[100px] z-[10]">
      <div className="flex flex-col gap-4">
        <div
          className="flex flex-col gap-4"
          onMouseEnter={!isTouchDevice ? () => setIsOpen(true) : undefined}
          onMouseLeave={!isTouchDevice ? () => setIsOpen(false) : undefined}
        >
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={containerVariants}
                className="flex flex-col items-center space-y-3"
              >
                {icons.map((item, index) => (
                  <motion.button
                    key={index}
                    className={cn(btnStl)}
                    variants={itemVariants}
                    onClick={onOpenHandler}
                  >
                    <NavLink
                      to={item?.link}
                      target={item.link.includes("https") ? "_blank" : "_self"}
                    >
                      {item.icon}
                    </NavLink>
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {isScrollTo && (
            <button
              className={cn(btnStl)}
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {isOpen ? (
                <span className="rotate-180">
                  <Arrow />
                </span>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
                    fill="black"
                  />
                </svg>
              )}
            </button>
          )}
        </div>

        <div className="h-12">
          <AnimatePresence>
            {isScrollTo && (
              <motion.button
                className={cn(btnStl)}
                onClick={onScrollTo}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { duration: 0.2 } },
                }}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <Arrow />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default FloatingActionButtons;

const Arrow = () => (
  <svg
    width="18"
    height="12"
    viewBox="0 0 12 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 6L6 1L1 6"
      stroke="black"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
