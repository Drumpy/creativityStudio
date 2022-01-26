import { Twitter, Mail, Instagram, Menu, Globe } from "react-feather";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

export function Navbar() {
  const { i18n } = useTranslation();

  const changeLanguage = () => {
    i18n.language === "en"
      ? i18n.changeLanguage("sp")
      : i18n.changeLanguage("en");
  };

  return (
    <motion.nav
      variants={fadeIn("down")}
      initial="initial"
      animate="animate"
      className="w-full py-5 md:py-6 flex items-center fixed top-0 bg-[#06102D80] backdrop-blur-md md:bg-transparent z-30"
    >
      <div className="w-full flex justify-between sm:justify-center xl:container lg:container md:container sm:container mx-auto px-4 relative">
        {/* Menu */}
        <div className="sm:hidden text-[#7895ED]">
          <button className="hover:text-[#A5B8F3] transition-all">
            <Menu />
          </button>
        </div>
        <a href="#">
          <svg
            width="30"
            height="30"
            viewBox="0 0 285 277"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M214.712 5.72205e-06L62.1317 124.815V0H0.475751L0.475713 232.748L285 5.72205e-06H214.712Z"
              fill="#D2DCF9"
            />
            <path
              d="M0.223148 232.954L0.16736 233L0 232.954H0.223148Z"
              fill="#D2DCF9"
            />
            <path
              d="M0 277L210.902 103L284.5 277H224.68L180.359 177.94L61.842 277H0Z"
              fill="#D2DCF9"
            />
            <path
              d="M109 277L163.062 232L184 277H171.643H126.242H109Z"
              fill="#58E77C"
            />
          </svg>
        </a>

        {/* Social Icons */}
        <div className="hidden lg:flex items-center gap-6 absolute top-0 bottom-0 right-0 lg:right-4 text-[#7895ED]">
          <a href="#" className="hover:text-[#A5B8F3] transition-all">
            <Instagram width={20} />
          </a>
          <a href="#" className="hover:text-[#A5B8F3] transition-all">
            <Twitter width={20} />
          </a>
          <a href="#" className="hover:text-[#A5B8F3] transition-all">
            <Globe width={20} onClick={() => changeLanguage()} />
          </a>
        </div>
        {/* Language */}
        <div className="sm:hidden text-[#7895ED]">
          <button className="hover:text-[#A5B8F3] transition-all">
            <Globe onClick={() => changeLanguage()} />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
