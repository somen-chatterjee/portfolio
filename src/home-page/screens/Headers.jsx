import { useEffect, useRef, useState } from "react";
import PrimaryBtn from "../../components/Primary-btn";

const NAV = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "process", label: "Process" },
];

function scrollTo(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Headers() {
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState("home");
    const idleTimer = useRef();

    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY;
            setScrolled(y > 20);
            if (y > 80) setHidden(true);
            clearTimeout(idleTimer.current);
            idleTimer.current = setTimeout(() => setHidden(false), 220);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", onScroll);
            clearTimeout(idleTimer.current);
        };
    }, []);

    useEffect(() => {
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) setActive(e.target.id);
                });
            },
            { rootMargin: "-40% 0px -55% 0px" }
        );
        NAV.forEach((n) => {
            const el = document.getElementById(n.id);
            if (el) io.observe(el);
        });
        return () => io.disconnect();
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 will-change-transform ${
                hidden ? "-translate-y-full" : "translate-y-0"
            } ${
                scrolled
                    ? "bg-[rgba(7,7,15,0.72)] backdrop-blur-xl border-b border-white/5"
                    : "bg-transparent"
            }`}
        >
            <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 py-4">
                <button
                    onClick={() => scrollTo("home")}
                    className="flex items-center gap-3 group"
                >
                    <div className="relative w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#A855F7] to-[#22D3EE] shadow-[0_8px_24px_-8px_rgba(168,85,247,0.6)] group-hover:scale-110 transition-transform">
                        <span className="text-white font-bold text-xl">S</span>
                        <span className="absolute inset-0 rounded-xl ring-1 ring-white/20" />
                    </div>
                    <div className="text-white font-semibold text-2xl tracking-tight">
                        Somen<span className="text-[var(--primary-2)]">.</span>
                    </div>
                </button>

                <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/5 rounded-full px-2 py-1.5 backdrop-blur">
                    {NAV.map((n) => (
                        <button
                            key={n.id}
                            onClick={() => scrollTo(n.id)}
                            className={`relative text-xs font-medium px-4 py-2 rounded-full transition-colors ${
                                active === n.id
                                    ? "text-white"
                                    : "text-[var(--muted)] hover:text-white"
                            }`}
                        >
                            {active === n.id && (
                                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#A855F7]/25 to-[#22D3EE]/20 ring-1 ring-white/10" />
                            )}
                            <span className="relative">{n.label}</span>
                        </button>
                    ))}
                </nav>

                <div className="hidden lg:block">
                    <PrimaryBtn
                        title="Contact"
                        onBtnClick={() => scrollTo("contact")}
                    />
                </div>

                <button
                    onClick={() => setOpen(!open)}
                    className="lg:hidden flex flex-col gap-1.5 w-10 h-10 items-center justify-center rounded-lg bg-white/5 border border-white/10"
                    aria-label="menu"
                >
                    <span
                        className={`block h-0.5 w-5 bg-white transition-all ${
                            open ? "rotate-45 translate-y-2" : ""
                        }`}
                    />
                    <span
                        className={`block h-0.5 w-5 bg-white transition-all ${
                            open ? "opacity-0" : ""
                        }`}
                    />
                    <span
                        className={`block h-0.5 w-5 bg-white transition-all ${
                            open ? "-rotate-45 -translate-y-2" : ""
                        }`}
                    />
                </button>
            </div>

            {open && (
                <nav className="lg:hidden bg-[rgba(7,7,15,0.95)] backdrop-blur-xl border-t border-white/5 px-6 py-4 flex flex-col gap-1">
                    {NAV.map((n) => (
                        <button
                            key={n.id}
                            onClick={() => {
                                scrollTo(n.id);
                                setOpen(false);
                            }}
                            className={`text-left text-sm font-medium py-3 px-3 rounded-lg ${
                                active === n.id
                                    ? "text-white bg-white/5"
                                    : "text-[var(--muted)]"
                            }`}
                        >
                            {n.label}
                        </button>
                    ))}
                    <div className="mt-2">
                        <PrimaryBtn
                            title="Contact"
                            onBtnClick={() => {
                                scrollTo("contact");
                                setOpen(false);
                            }}
                        />
                    </div>
                </nav>
            )}
        </header>
    );
}

export default Headers;
