import { useEffect, useState, type FC } from "react";
import { AnimatePresence, motion } from "motion/react";
import i18next from "i18next";
import { cn } from "helpers/style";
import type { langsType } from "fusion/type";
import { DEFAULT_LANG, LANG_STORAGE } from "data/hero";

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

interface ILangData {
  language: string;
  lang: langsType;
}

const langData: ILangData[] = [
  { language: "uzbekistan", lang: "uz" },
  { language: "english", lang: "en" },
  { language: "russian", lang: "ru" },
  { language: "kazakhstan", lang: "kz" },
];

const LanguageComponent: FC<{ theme?: "dark" | "light" }> = ({
  theme = "light",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const langStorage = localStorage.getItem(LANG_STORAGE) || DEFAULT_LANG;
  const [langSelect, setLangSelect] = useState(langStorage as langsType);

  const onOpenHandler = (lang: langsType) => {
    localStorage.setItem(LANG_STORAGE, lang);
    i18next.changeLanguage(lang);
    setLangSelect(lang);
    setIsOpen(false);

    setTimeout(() => window.location.reload(), 1000);
  };

  useEffect(() => {
    if (langStorage) {
      setLangSelect(langStorage as langsType);
    }
  }, [langStorage]);

  return (
    <div className="flex">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={containerVariants}
            className="flex items-center gap-0 h-10 z-[9] overflow-hidden"
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
        className={cn(
          "inline-flex justify-center items-center w-10 h-10 rounded-full",
          isOpen && "bg-white",
          theme === "dark"
            ? "text-white hover:text-black hover:bg-[#eee]"
            : "text-black hover:bg-[#eee]"
        )}
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
              // stroke={theme === "dark" ? "white" : "black"}
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
  );
};

export default LanguageComponent;
