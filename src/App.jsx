import { Twitter, Mail, Instagram, ArrowRight } from "react-feather";

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
        {/* Navbar */}
        <nav className="w-full py-7 flex md:flex-col items-center fixed">
          <div className="container mx-auto px-4 text-center relative">
            <h2 className="text-2xl text-[#D2DCF9] uppercase">
              Creative Studio
            </h2>
            <div className="flex items-center gap-8 absolute top-0 bottom-0 right-0 text-[#7895ED]">
              <Instagram />
              <Twitter />
              <Mail />
            </div>
          </div>
        </nav>

        {/* Hero */}
        <div className="container mx-auto px-4 text-center flex flex-col justify-center flex-grow z-0">
          {/* Hero Text */}
          <div className="text-7xl font-bold uppercase mb-5">
            <h1 className="text-[#7895ED] antialiased">
              Take care of the content <br />
              <span className="text-[#D2DCF9]">We tell the story</span>
            </h1>
          </div>
          <p className="text-2xl text-[#D2DCF9] mb-16">
            We are a Creative Studio based in Uruguay.
          </p>

          {/* Hero CTA */}
          <a className="flex items-center gap-2 px-6 py-3 bg-[#51E075] hover:bg-[#83e29b] text-[#06102D] uppercase self-center font-semibold text-xl leading-5 cursor-pointer transition-all">
            See our work <ArrowRight />
          </a>

          <img
            src="./images/prism1.png"
            className="absolute bottom-1/4 right-[18%] w-96 floating drop-shadow-xl"
          />
          <img
            src="./images/prism2.png"
            className="absolute top-[20%] left-[25%] w-40 floating drop-shadow-xl"
          />

          {/* Services Carousel */}
          <div className="absolute bottom-20 -z-10 pointer-events-none flex">
            <div className="flex gap-48 text-[150px] text-[#0c1f5a54] leading-none uppercase whitespace-nowrap font-[Bauziet] animate-translate">
              {services.map((service) => (
                <span>{service}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
