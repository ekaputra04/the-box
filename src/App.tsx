import About from "./components/About";
import Consultation from "./components/Consultation";
import ContactForm from "./components/ContactForm";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Projects";
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
        <Project />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}

export default App;
