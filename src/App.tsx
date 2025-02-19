import About from "./components/About";
import Consultation from "./components/Consultation";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Reputation from "./components/Reputation";
import Services from "./components/Services";

function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <Hero />
        <Reputation />
        <About />
        <Services />
        <Experience />
        <Consultation />
      </div>
    </>
  );
}

export default App;
