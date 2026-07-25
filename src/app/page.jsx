import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

export default function Page() {
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
    </>
  );
}
