import "./App.css";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // duração da animação em ms
            once: true, // anima apenas uma vez ao entrar na tela
        });
    }, []);

    return (
        <div className="App">
            <div className="Container">
                <NavBar />
                <section id="hero" data-aos="fade-right">
                    <Hero />
                </section>
                <section id="about" data-aos="fade-up">
                    <AboutMe />
                </section>
                <section id="projects" data-aos="fade-up">
                    <Projects />
                </section>
                <Footer />
            </div>
        </div>
    );
}

export default App;
