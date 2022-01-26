// Components
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { MarqueeServices } from "./components/MarqueeServices";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#0c1f5a] via-[#06102D] to-[#0C1F5A] flex flex-col">
        <AnimatedCursor
          innerSize={8}
          outerSize={20}
          color="81, 224, 117"
          outerAlpha={0.2}
          innerScale={0.5}
          outerScale={3}
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
