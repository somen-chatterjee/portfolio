import { experience, education } from "../data/portfolio";

function Experience() {
    return (
        <section
            id="experience"
            className="relative py-24 px-6 md:px-16 lg:px-40 overflow-hidden"
        >
            <div className="absolute -left-40 top-1/3 w-[500px] h-[500px] bg-[var(--primary)] opacity-10 rounded-full blur-[100px] -z-10" />

            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-14 reveal">
                    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--primary-2)] font-semibold mb-3">
                        <span className="w-6 h-px bg-[var(--primary-2)]" />
                        Experience
                        <span className="w-6 h-px bg-[var(--primary-2)]" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-semibold text-white">
                        4+ years shipping{" "}
                        <span className="text-gradient">production apps</span>
                    </h2>
                </div>

                <div className="relative pl-8">
                    <div className="absolute left-[7px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-[var(--primary)] via-[var(--accent)] to-transparent" />

                    {experience.map((job, i) => (
                        <div
                            key={job.company + job.period}
                            className="relative mb-10 last:mb-0 reveal"
                            style={{ transitionDelay: `${i * 80}ms` }}
                        >
                            <div
                                className={`absolute -left-8 top-3 w-4 h-4 rounded-full bg-[var(--bg-2)] border-2 border-[var(--primary)] ${
                                    job.current ? "glow-pulse" : ""
                                }`}
                            />

                            <div className="card-glass card-glow rounded-2xl p-6 md:p-8 hover:-translate-y-0.5 hover:shadow-[0_0_36px_rgba(168,85,247,0.45)] hover:border-[rgba(168,85,247,0.5)] transition-[transform,box-shadow,border-color] duration-300 ease-out">
                                <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                                    <div>
                                        <h3 className="text-lg md:text-xl font-semibold text-white">
                                            {job.role}
                                        </h3>
                                        <div className="text-sm text-[var(--primary-2)] font-medium mt-0.5">
                                            {job.company} · {job.location}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {job.current && (
                                            <span className="text-[10px] uppercase tracking-wide bg-emerald-500/15 text-emerald-300 border border-emerald-400/30 px-2 py-0.5 rounded-full font-semibold">
                                                Current
                                            </span>
                                        )}
                                        <span className="text-xs text-[var(--muted)] font-medium">
                                            {job.period}
                                        </span>
                                    </div>
                                </div>
                                <ul className="mt-3 space-y-2">
                                    {job.highlights.map((h, k) => (
                                        <li
                                            key={k}
                                            className="text-sm text-[var(--muted)] leading-relaxed flex gap-2"
                                        >
                                            <span className="text-[var(--accent)] mt-1">
                                                ▸
                                            </span>
                                            <span>{h}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 card-glass rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 reveal">
                    <div>
                        <div className="text-xs uppercase tracking-widest text-[var(--primary-2)] font-semibold mb-1">
                            Education
                        </div>
                        <div className="text-lg font-semibold text-white">
                            {education.degree}
                        </div>
                        <div className="text-sm text-[var(--muted)] mt-1">
                            {education.school}
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div>
                            <div className="text-xs text-[var(--muted)]">
                                Year
                            </div>
                            <div className="text-lg font-semibold text-white tabular-nums">
                                {education.year}
                            </div>
                        </div>
                        <div>
                            <div className="text-xs text-[var(--muted)]">
                                CGPA
                            </div>
                            <div className="text-lg font-semibold text-white tabular-nums">
                                {education.cgpa}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;
