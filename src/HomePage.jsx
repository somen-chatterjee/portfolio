import Header from "./sections/Header";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Process from "./sections/Process";
import Contact from "./sections/Contact";
import { useReveal } from "./hooks/useReveal";
import { useGlobalCursor } from "./hooks/useGlobalCursor";

export default function HomePage() {
    useReveal();
    useGlobalCursor();
    return (
        <div className="overflow-x-hidden bg-[var(--bg)] text-[var(--text)]">
            <Header />
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
