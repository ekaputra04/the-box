import About from "./components/About";
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
      </div>
    </>
  );
}

export default App;
