// Components
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
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
      <section className="min-h-screen bg-gray-900">
        <p>Prueba</p>
      </section>
    </>
  );
}

export default App;
