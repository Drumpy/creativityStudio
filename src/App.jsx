// Components
import { Navbar } from "./components/Navbar";
// Icons
import { ArrowRight } from "react-feather";

const services = [
  "Design",
  "Web Development",
  "Branding",
  "Video Production",
  "Video Editing",
];

function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#0C1F5A] via-[#06102D] to-[#0C1F5A] flex flex-col">
        <Navbar />
        {/* Hero */}
        <div className="xl:container mx-auto px-4 flex flex-col flex-grow justify-center items-center text-center z-0">
          {/* Hero Text */}
          <div className="text-6xl md:text-6xl lg:text-7xl font-bold uppercase mt-20 mb-5 relative">
            <h1 className="text-[#7895ED] antialiased">
              Take care of the content
              <span className="block text-[#D2DCF9]">We tell the story</span>
            </h1>
            {/* <img
              src="./images/prism1.png"
              className="absolute bottom-1/4 right-[18%] w-96 -rotate-[20deg] floating drop-shadow-xl pointer-events-none"
            />
            <img
              src="./images/prism2.png"
              className="absolute top-[20%] left-[25%] w-40 floating drop-shadow-xl pointer-events-none"
            /> */}
          </div>
          <p className="text-xl lg:text-2xl text-[#D2DCF9] mb-16">
            We are a Creative Studio based in Uruguay.
          </p>

          {/* Hero CTA */}
          <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
            <a className="flex items-center justify-center gap-2 px-6 py-3 bg-[#51E075] border border-[#51E075] hover:bg-[#83e29b] hover:border-[#83e29b] text-[#06102D] uppercase sm:self-center font-semibold text-xl leading-5 cursor-pointer transition-all">
              See Our Work <ArrowRight />
            </a>
            <a className="flex items-center justify-center px-6 py-3 text-[#7895ED] border border-[#7895ED] uppercase font-semibold text-xl leading-6 cursor-pointer transition-all">
              Contact Us
            </a>
          </div>

          {/* Services Carousel */}
          {/* <div className="hidden relative bottom-24 -z-10 pointer-events-none lg:flex overflow-hidden">
            <div className="flex gap-48 text-[150px] text-[#0c1f5a54] leading-none uppercase whitespace-nowrap font-[Bauziet] animate-translate">
              {services.map((service) => (
                <span>{service}</span>
              ))}
            </div>
          </div> */}
        </div>
      </div>
      <section className="min-h-screen bg-gray-900">
        <p>Prueba</p>
      </section>
    </>
  );
}

export default App;
