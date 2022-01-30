// Components
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { MarqueeServices } from "./components/MarqueeServices";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#0c1f5a] via-[#06102D] to-[#0C1F5A] flex flex-col relative overflow-hidden">
        <AnimatedCursor
          innerSize={20}
          outerSize={35}
          color="81, 224, 117"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={2}
        />
        <Navbar />
        <Hero />
        <MarqueeServices />
      </div>
      <section
        id="services"
        className="min-h-screen bg-gradient-to-br from-[#D2DCF9] via-[#E8EDFC] to-[#D2DCF9] flex flex-col justify-center items-center pt-32"
      >
        <Services />
      </section>
    </>
  );
}

export default App;
