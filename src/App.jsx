import { Twitter, Mail, Instagram, ArrowRight } from "react-feather";

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

        <div className="container mx-auto px-4 text-center flex flex-col justify-center flex-grow">
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
          <a className="flex items-center gap-2 px-6 py-3 bg-[#51E075] hover:bg-[#83e29b] text-[#06102D] uppercase self-center font-semibold text-xl leading-5 cursor-pointer transition-all">
            See your work <ArrowRight />
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
