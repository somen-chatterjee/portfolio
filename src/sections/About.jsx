import PrimaryBtn from "../components/Primary-btn";
import SecondaryBtn from "../components/Secondary-btn";
import { man, download } from "../assets/assets";
import { profile, socials } from "../data/portfolio";

import { scrollTo } from "../utils/scroll";

function About() {
    return (
        <section
            id="about"
            className="relative flex items-center justify-center py-24 px-6 md:px-16 lg:px-40"
        >
            <div className="w-full max-w-6xl card-glass card-glow rounded-3xl flex flex-col md:flex-row items-center gap-12 md:gap-20 px-8 md:px-20 py-16 md:py-20 reveal hover:shadow-[0_0_36px_rgba(168,85,247,0.45)] hover:border-[rgba(168,85,247,0.5)] transition-[box-shadow,border-color] duration-300">
                <div className="relative flex-shrink-0">
                    <div className="w-[280px] h-[360px] rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-[0_30px_60px_-20px_rgba(168,85,247,0.4)]">
                        <img
                            className="w-full h-full object-cover"
                            src={man}
                            alt={profile.name}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    </div>

                    <div className="absolute flex -bottom-6 left-1/2 -translate-x-1/2 rounded-2xl p-2 gap-1 bg-white/[0.06] backdrop-blur-2xl backdrop-saturate-150 border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_18px_40px_-16px_rgba(168,85,247,0.5)]">
                        {socials.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={s.label}
                                className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white/10 hover:-translate-y-0.5 transition-[transform,background-color] duration-200 will-change-transform"
                            >
                                <img
                                    src={s.icon}
                                    alt=""
                                    className="w-5 h-5 brightness-0 invert opacity-80"
                                />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex-1">
                    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--primary-2)] font-semibold mb-4">
                        <span className="w-6 h-px bg-[var(--primary-2)]" />
                        About Me
                    </div>
                    <h2 className="text-3xl md:text-5xl font-semibold leading-tight text-white">
                        Mobile Engineer
                        <br />
                        <span className="text-gradient">
                            who ships end-to-end
                        </span>
                    </h2>
                    <p className="text-sm md:text-base font-light text-[var(--muted)] mt-5 leading-relaxed">
                        {profile.aboutLong}
                    </p>
                    <p className="text-sm font-light text-[var(--muted-2)] mt-4 leading-relaxed">
                        Based in {profile.location}. Currently at Dreamcast,
                        owning mobile and desktop delivery.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-8">
                        <PrimaryBtn
                            title="My Projects"
                            onBtnClick={() => scrollTo("projects")}
                        />
                        <SecondaryBtn
                            title="Download CV"
                            image={
                                <img
                                    src={download}
                                    alt=""
                                    className="w-4 h-4 brightness-0 invert opacity-80"
                                />
                            }
                            onBtnClick={() =>
                                window.open(profile.linkedin, "_blank")
                            }
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
