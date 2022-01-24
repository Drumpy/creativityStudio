import { Twitter, Mail, Instagram, Menu, Globe } from "react-feather";

export function Navbar() {
  return (
    <nav className="w-full py-5 md:py-7 flex items-center fixed top-0 bg-[#06102D80] backdrop-blur-md md:bg-transparent z-30">
      <div className="w-full flex justify-between sm:justify-center xl:container lg:container md:container sm:container mx-auto px-4 relative">
        {/* Menu */}
        <div className="sm:hidden text-[#7895ED]">
          <Menu />
        </div>
        {/* Logo */}
        <h2 className="text-lg md:text-2xl text-[#D2DCF9] uppercase">
          Kaverno Studio
        </h2>
        {/* Social Icons */}
        <div className="hidden lg:flex items-center gap-8 absolute top-0 right-0 lg:right-4 text-[#7895ED]">
          <Instagram />
          <Twitter />
          <Mail />
        </div>
        {/* Language */}
        <div className="sm:hidden text-[#7895ED]">
          <Globe />
        </div>
      </div>
    </nav>
  );
}
