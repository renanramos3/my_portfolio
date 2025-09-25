import "./App.css";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

function App() {
    return (
        <div className="App">
            <div className="Container">
                <NavBar />
                <section id="hero">
                    <Hero />
                </section>
                <section id="about">
                    <AboutMe />
                </section>
                <section id="projects">
                    <Projects />
                </section>
                <Footer />
            </div>
        </div>
    );
}

export default App;
