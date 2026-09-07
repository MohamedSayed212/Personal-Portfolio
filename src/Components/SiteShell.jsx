import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
// import WhatsAppFloat from "./WhatsAppFloat";

function SiteShell() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
      {/* <WhatsAppFloat /> */}
    </>
  );
}

export default SiteShell;
