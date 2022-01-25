// Components
import { Navbar } from "./components/Navbar";
// Icons
import { ArrowRight } from "react-feather";
import Marquee from "react-fast-marquee";

const services = [
  "Design",
  "Web Development",
  "Branding",
  "Video Production",
  "Video Editing",
];

const servicesStr = services.join(" / ");

function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#0c1f5a] via-[#06102D] to-[#0C1F5A] flex flex-col">
        <Navbar />
        {/* Hero */}
        <div className="xl:container mx-auto px-4 flex flex-col flex-grow justify-center items-center text-center z-10 overflow-hidden">
          {/* Hero Text */}
          <div className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase lg:mt-20 lg:mb-5 relative grow flex flex-col justify-end">
            <h1 className="text-[#7895ED] antialiased mb-4">
              Take care of the content
              <span className="block text-[#D2DCF9]">We tell the story</span>
            </h1>
            <img
              src="./images/prism2.png"
              className="hidden lg:block absolute -bottom-[40%] -right-12 floating drop-shadow-xl pointer-events-none"
            />
            <img
              src="./images/prism2.png"
              className="hidden lg:block absolute top-[20%] left-0 w-40 floating drop-shadow-xl pointer-events-none"
            />
          </div>
          <p className="text-xl lg:text-2xl text-[#D2DCF9] lg:mb-16">
            We are a Creative Studio based in Uruguay.
          </p>

          {/* Hero CTA */}
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-end sm:justify-center grow mb-16 sm:m-0">
            <a className="flex items-center justify-center md:self-start gap-2 px-6 py-3 bg-[#51E075] border border-[#51E075] hover:bg-[#83e29b] hover:border-[#83e29b] text-[#06102D] uppercase sm:self-center font-semibold text-xl leading-5 cursor-pointer transition-all">
              See Our Work <ArrowRight />
            </a>
            <a className="flex items-center justify-center md:self-start px-6 py-3 text-[#7895ED] border border-[#7895ED] uppercase font-semibold text-xl leading-6 cursor-pointer transition-all sm:self-center">
              Contact Us
            </a>
          </div>
        </div>
        <div className="absolute top-[200px] -left-[250px] w-[150%] rotate-[335deg] hidden lg:block pointer-events-none -z-0">
          <Marquee
            gradient={false}
            speed={80}
            className="text-[150px] text-[#0c1f5a31] leading-none uppercase whitespace-nowrap font-[Bauziet] overflow-hidden"
          >
            {servicesStr}
          </Marquee>
        </div>
        <div className="absolute top-[390px] -left-[250px] w-[150%] rotate-[335deg] hidden lg:block pointer-events-none -z-0">
          <Marquee
            gradient={false}
            speed={80}
            className="text-[150px] text-[#0c1f5a31] leading-none uppercase whitespace-nowrap font-[Bauziet] overflow-hidden"
            direction="right"
          >
            {servicesStr}
          </Marquee>
        </div>
      </div>
      <section className="min-h-screen bg-gray-900">
        <p>Prueba</p>
      </section>
    </>
  );
}

export default App;
