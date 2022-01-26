// Components
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { MarqueeServices } from "./components/MarqueeServices";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#0c1f5a] via-[#06102D] to-[#0C1F5A] flex flex-col">
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
