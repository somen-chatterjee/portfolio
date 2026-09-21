import Tilt from "../../components/Tilt";
import { projects } from "../../data/portfolio";

const BENTO = [
    "lg:col-span-2 lg:row-span-2",
    "lg:col-span-2 lg:row-span-1",
    "lg:col-span-2 lg:row-span-1",
];

function Projects() {
    const featured = projects.filter((p) => p.featured);
    const rest = projects.filter((p) => !p.featured);

    return (
        <section
            id="projects"
            className="relative py-24 px-6 md:px-16 lg:px-40 overflow-hidden"
        >
            <div className="absolute w-[700px] h-[700px] bg-[var(--primary)] opacity-15 rounded-full -top-40 -left-40 blur-[100px] -z-10" />
            <div className="absolute w-[500px] h-[500px] bg-[var(--accent)] opacity-10 rounded-full bottom-0 right-0 blur-[100px] -z-10" />

            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-14 reveal">
                    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--primary-2)] font-semibold mb-3">
                        <span className="w-6 h-px bg-[var(--primary-2)]" />
                        Featured Work
                        <span className="w-6 h-px bg-[var(--primary-2)]" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-semibold text-white">
                        Projects I've{" "}
                        <span className="text-gradient">shipped</span>
                    </h2>
                    <p className="text-sm text-[var(--muted)] mt-4 max-w-xl mx-auto">
                        Driver-less printer frameworks, cross-platform desktop
                        clients, event apps used by 1,000+ concurrent users.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 lg:auto-rows-[minmax(220px,1fr)] gap-6 mb-8">
                    {featured.map((p, i) => {
                        const isHero = i === 0;
                        return (
                            <div
                                key={p.title}
                                className={`reveal h-full ${BENTO[i] ?? ""}`}
                            >
                                <Tilt className="h-full" max={4}>
                                    <div className="group relative rounded-3xl p-6 md:p-8 h-full overflow-hidden card-glass card-glow">
                                        <div className="absolute inset-0 opacity-70 -z-10 bg-gradient-to-br from-[#A855F7]/40 via-[#7C3AED]/25 to-transparent" />
                                        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[var(--primary)] opacity-25 blur-3xl" />
                                        <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-[var(--accent)] opacity-15 blur-3xl" />

                                        <div className="relative flex flex-col h-full">
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                                                <div className="text-[10px] uppercase tracking-widest text-white/80 font-semibold">
                                                    Featured
                                                </div>
                                            </div>
                                            <h3
                                                className={`font-semibold text-white leading-tight ${
                                                    isHero
                                                        ? "text-2xl md:text-3xl"
                                                        : "text-lg md:text-xl"
                                                }`}
                                            >
                                                {p.title}
                                            </h3>
                                            <div className="text-xs text-[var(--accent-2)] mt-2 font-medium">
                                                {p.tag}
                                            </div>
                                            <p
                                                className={`mt-4 text-white/80 leading-relaxed ${
                                                    isHero
                                                        ? "text-base"
                                                        : "text-sm"
                                                }`}
                                            >
                                                {p.blurb}
                                            </p>
                                            {isHero && p.bullets && (
                                                <ul className="mt-5 space-y-2">
                                                    {p.bullets.map((b, k) => (
                                                        <li
                                                            key={k}
                                                            className="text-xs md:text-sm text-white/70 flex gap-2 leading-relaxed"
                                                        >
                                                            <span className="text-[var(--accent)]">
                                                                ▸
                                                            </span>
                                                            <span>{b}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                </Tilt>
                            </div>
                        );
                    })}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {rest.map((p, i) => (
                        <div
                            key={p.title}
                            className="reveal h-full"
                            style={{ transitionDelay: `${(i % 3) * 60}ms` }}
                        >
                            <Tilt max={3} className="h-full">
                                <div className="card-glass card-glow rounded-2xl p-6 flex flex-col h-full">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--primary)]/30 to-[var(--accent)]/20 border border-white/10 flex items-center justify-center mb-4">
                                        <svg
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            className="w-5 h-5 text-white"
                                        >
                                            <path
                                                d="M4 7v10l8 4 8-4V7l-8-4-8 4z"
                                                strokeLinejoin="round"
                                            />
                                            <path d="M4 7l8 4 8-4M12 11v10" />
                                        </svg>
                                    </div>
                                    <h3 className="text-base font-semibold text-white leading-snug">
                                        {p.title}
                                    </h3>
                                    <div className="text-xs text-[var(--primary-2)] mt-1.5 font-medium">
                                        {p.tag}
                                    </div>
                                    <p className="text-sm text-[var(--muted)] mt-3 leading-relaxed flex-1">
                                        {p.blurb}
                                    </p>
                                </div>
                            </Tilt>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
