import { useState, type FC } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "helpers/style";

// prettier-ignore
const containerVariants = {
  open: { transition: { staggerChildren: 0.1, staggerDirection: -1, opacity: 1 } },
  closed: { transition: { staggerChildren: 0.1, delayChildren: 0.1, opacity: 0 } }
};
// prettier-ignore
const itemVariants = {
  open: { opacity: 1, scale: 1, transition: { duration: 0.2, ease: "linear" } },
  closed: { opacity: 0, scale: 0, transition: { duration: 0.2, ease: "linear" } },
};

type langType = "kg" | "uz" | "en" | "ru" | "kz";

interface ILangData {
  language: string;
  lang: langType;
}

const langData: ILangData[] = [
  // { language: "kyrgyzstan", lang: "kg" },
  // { language: "uzbekistan", lang: "uz" },
  { language: "english", lang: "en" },
  { language: "russian", lang: "ru" },
  // { language: "kazakhstan", lang: "kz" },
];

const LanguageComponent: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [langSelect, setLangSelect] = useState<langType>("ru");

  const onOpenHandler = (lang: langType) => {
    setLangSelect(lang);
    setIsOpen(false);
  };

  return (
    <div className="fixed top-8 md:top-[70px] right-5 md:right-10 z-10">
      <div className="flex">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={containerVariants}
              className="flex items-center gap-0 h-10 z-[9] overflow-hidden"
              //   className="flex items-center gap-0 bg-white h-10 pr-5 translate-x-4 z-[9]"
              style={{ borderRadius: "50px 0px 0px 50px" }}
            >
              {langData.map((item, index) => (
                <motion.button
                  key={index}
                  className={cn("p-1 h-full bg-white group")}
                  variants={itemVariants}
                  onClick={() => onOpenHandler(item.lang)}
                >
                  <span
                    className={cn(
                      "px-3 py-1 rounded-full",
                      langSelect === item.lang
                        ? "bg-[#0171e3] text-white"
                        : "bg-white text-black group-hover:bg-[#eee] transition-colors duration-300 ease-in-out"
                    )}
                  >
                    {item.lang}
                  </span>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          className="inline-flex justify-center items-center w-10 h-10 bg-white rounded-full shadow-[0px_8px_16px_0px_rgba(0,0,0,0.06)] z-10"
          style={isOpen ? { borderRadius: "0px 50px 50px 0px" } : {}}
          onClick={() => setIsOpen((prev) => !prev)}
          animate={{
            borderTopLeftRadius: isOpen ? "0px" : "50px",
            borderBottomLeftRadius: isOpen ? "0px" : "50px",
            borderTopRightRadius: "50px",
            borderBottomRightRadius: "50px",
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
            delay: isOpen ? 0 : 0.3,
          }}
        >
          {isOpen ? (
            <svg
              className="rotate-[270deg]"
              width="16"
              height="10"
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
          ) : (
            langSelect
          )}
        </motion.button>
      </div>
    </div>
  );
};

export default LanguageComponent;
