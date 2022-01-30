import { ArrowRight } from "react-feather";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "../variants";

export function Hero() {
  const { t } = useTranslation();

  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="xl:container mx-auto px-4 flex flex-col flex-grow justify-center items-center text-center z-10 overflow-hidden"
    >
      {/* Hero Text */}
      <motion.div
        variants={fadeIn()}
        className="text-5xl md:text-6xl lg:text-7xl font-[Inter Var] font-bold uppercase lg:mt-20 relative grow flex flex-col justify-end"
      >
        <h1 className="text-[#7895ED] antialiased mb-4">
          {t("HERO_TITLE_UP")}
          <span className="block text-[#D2DCF9] animated-text">
            {t("HERO_TITLE_DOWN")}
          </span>
        </h1>
        {/* <img
        src="./images/prism2.png"
        className="hidden lg:block absolute -bottom-[40%] -right-12 floating drop-shadow-xl pointer-events-none"
      /> */}
        {/* <img
        src="./images/prism2.png"
        className="hidden lg:block absolute top-[20%] left-0 w-40 floating drop-shadow-xl pointer-events-none"
      /> */}
      </motion.div>
      <motion.p
        variants={fadeIn()}
        className="text-xl lg:text-2xl text-[#D2DCF9] lg:mb-28"
      >
        {t("HERO_SUBTITLE")}
      </motion.p>

      {/* Hero CTA */}
      <motion.div
        variants={fadeIn()}
        className="flex flex-col sm:flex-row gap-4 w-full justify-end sm:justify-center grow mb-16 sm:m-0"
      >
        <a
          href="#services"
          className="flex items-center justify-center lg:self-start gap-2 px-6 py-3 bg-[#51E075] border rounded border-[#51E075] hover:bg-[#83e29b] hover:border-[#83e29b] text-[#06102D] uppercase sm:self-center font-semibold text-xl leading-5 cursor-pointer transition-all"
        >
          {t("CTA_PRIMARY_TITLE")} <ArrowRight />
        </a>
        <a className="flex items-center justify-center lg:self-start px-6 py-3 text-[#7895ED] hover:text-[#A5B8F3] border rounded border-[#7895ED] hover:border-[#A5B8F3] uppercase font-semibold text-xl leading-6 cursor-pointer transition-all sm:self-center">
          {t("CTA_SECONDARY_TITLE")}
        </a>
      </motion.div>
    </motion.div>
  );
}
