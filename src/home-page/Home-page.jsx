import Headers from "./screens/Headers";
import Home from "./screens/Home";
import About from "./screens/About";
import Skills from "./screens/Skills";
import Experience from "./screens/Experience";
import Projects from "./screens/Projects";
import Process from "./screens/Process";
import Contact from "./screens/Contact";
import { useReveal } from "../hooks/useReveal";
import { useGlobalCursor } from "../hooks/useGlobalCursor";

function HomePage() {
    useReveal();
    useGlobalCursor();
    return (
        <div className="overflow-x-hidden bg-[var(--bg)] text-[var(--text)]">
            <Headers />
            <main>
                <Home />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Process />
                <Contact />
            </main>
        </div>
    );
}

export default HomePage;
