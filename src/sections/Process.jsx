import Tilt from "../components/Tilt";
import { process } from "../data/portfolio";

const ICONS = [
    // Discover
    <svg
        key="0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-6 h-6"
    >
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" strokeLinecap="round" />
    </svg>,
    // Architect
    <svg
        key="1"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-6 h-6"
    >
        <path d="M3 9l9-6 9 6-9 6-9-6z" strokeLinejoin="round" />
        <path d="M3 15l9 6 9-6M3 12l9 6 9-6" strokeLinejoin="round" />
    </svg>,
    // Build
    <svg
        key="2"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-6 h-6"
    >
        <path d="m13 2-8 12h6l-2 8 8-12h-6l2-8z" strokeLinejoin="round" />
    </svg>,
    // Ship
    <svg
        key="3"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-6 h-6"
    >
        <path
            d="M12 2s6 4 6 10c0 3-2 6-6 8-4-2-6-5-6-8 0-6 6-10 6-10z"
            strokeLinejoin="round"
        />
        <circle cx="12" cy="11" r="2" />
    </svg>,
];

function Process() {
    return (
        <section
            id="process"
            className="relative flex flex-col lg:flex-row items-start justify-center gap-12 lg:gap-20 py-24 px-6 md:px-16 lg:px-24 overflow-hidden max-w-7xl mx-auto"
        >
            <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-[var(--accent)] opacity-10 rounded-full blur-[100px] -z-10" />

            <div className="flex flex-col items-start gap-4 max-w-md lg:sticky lg:top-28 reveal">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--primary-2)] font-semibold">
                    <span className="w-6 h-px bg-[var(--primary-2)]" />
                    Work Process
                </div>
                <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight">
                    From idea to{" "}
                    <span className="text-gradient">Play Store</span> — the way
                    I ship
                </h2>
                <p className="text-[var(--muted)] tracking-wide font-light text-sm leading-relaxed">
                    I keep the process light and honest. Understand the problem
                    first, pick the smallest architecture that fits, build
                    end-to-end, and set up CI/CD so releases are boring.
                </p>
                <p className="text-[var(--muted-2)] tracking-wide font-light text-sm leading-relaxed">
                    Whether it's a driver-less USB OTG library or a 1K-user
                    event app, the steps are the same.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 md:auto-rows-fr gap-8 flex-1 min-w-0 max-w-2xl">
                {process.map((p, i) => (
                    <div
                        key={p.step}
                        className={`reveal h-full ${i % 2 === 0 ? "md:-mt-6" : ""}`}
                        style={{ transitionDelay: `${i * 60}ms` }}
                    >
                        <Tilt max={3} className="h-full">
                            <div className="relative flex flex-col items-start card-glass card-glow gap-2 p-7 rounded-2xl min-h-[320px] h-full hover:shadow-[0_0_36px_rgba(168,85,247,0.45)] hover:border-[rgba(168,85,247,0.5)] transition-[box-shadow,border-color] duration-300">
                                <div className="flex items-center justify-between w-full mb-3">
                                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[var(--primary)]/30 to-[var(--accent)]/20 border border-white/10 text-white">
                                        {ICONS[i]}
                                    </div>
                                    <span className="text-4xl font-bold text-white/[0.08] tabular-nums">
                                        {p.step}
                                    </span>
                                </div>
                                <h3 className="text-white text-lg font-semibold">
                                    {p.title}
                                </h3>
                                <p className="text-[var(--muted)] font-light text-sm leading-relaxed">
                                    {p.blurb}
                                </p>
                            </div>
                        </Tilt>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Process;
