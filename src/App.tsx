import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Reputation from "./components/Reputation";

function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <Hero />
        <Reputation />
        <About />
      </div>
    </>
  );
}

export default App;
