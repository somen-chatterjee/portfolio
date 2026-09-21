import PrimaryBtn from "../components/Primary-btn";
import SecondaryBtn from "../components/Secondary-btn";
import Stat from "../components/Stat";
import { man, download } from "../assets/assets";
import { profile, stats } from "../data/portfolio";

import { scrollTo } from "../utils/scroll";

function Home() {
    return (
        <section id="home" className="relative w-full overflow-hidden">
            <div className="aurora" />
            <div className="absolute inset-0 grid-bg -z-10 opacity-70" />

            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 pt-20 lg:pt-32 px-6 md:px-16 lg:px-40 pb-24">
                <div className="flex-1 order-2 lg:order-1 relative z-10">
                    <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/10 rounded-full pl-1.5 pr-4 py-1.5 backdrop-blur mb-6">
                        <span className="relative flex w-2 h-2">
                            <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
                            <span className="relative rounded-full w-2 h-2 bg-emerald-400" />
                        </span>
                        <span className="text-xs font-medium text-[var(--muted)]">
                            Available for work · Jaipur, IN
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold leading-[1.05]">
                        <span className="block text-white">Hello, I'm</span>
                        <span className="block text-gradient">
                            {profile.name}
                        </span>
                    </h1>

                    <div className="flex flex-wrap items-center gap-2 mt-5 text-sm md:text-base">
                        <span className="px-3 py-1 rounded-full text-white font-medium bg-gradient-to-r from-[rgba(168,85,247,0.25)] to-[rgba(34,211,238,0.2)] border border-[rgba(168,85,247,0.4)] shadow-[0_0_18px_-6px_rgba(168,85,247,0.6)]">
                            {profile.role}
                        </span>
                        <span className="text-[var(--muted-2)]">·</span>
                        <span className="text-[var(--muted)]">
                            {profile.subtitle}
                        </span>
                    </div>

                    <p className="text-base font-light text-[var(--muted)] mt-6 max-w-xl leading-relaxed">
                        {profile.bio}
                    </p>

                    <div className="flex flex-wrap gap-3 mt-8">
                        <PrimaryBtn
                            title="Say Hello"
                            onBtnClick={() => scrollTo("contact")}
                        />
                        <SecondaryBtn
                            title="View Projects"
                            image={
                                <img
                                    src={download}
                                    alt=""
                                    className="w-4 h-4 opacity-80 brightness-0 invert"
                                />
                            }
                            onBtnClick={() => scrollTo("projects")}
                        />
                    </div>

                    <div className="grid grid-cols-3 mt-14 lg:mt-16 rounded-2xl overflow-hidden card-glass max-w-lg border border-white/15 bg-gradient-to-br from-[rgba(168,85,247,0.08)] to-[rgba(34,211,238,0.05)] shadow-[0_10px_30px_-14px_rgba(168,85,247,0.35)]">
                        {stats.map((s, i) => (
                            <div
                                key={s.label}
                                className={`${
                                    i < stats.length - 1
                                        ? "border-r border-white/10"
                                        : ""
                                }`}
                            >
                                <Stat value={s.value} label={s.label} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative flex-shrink-0 order-1 lg:order-2">
                    <div className="absolute inset-0 rounded-3xl blur-2xl opacity-30 -z-10 bg-gradient-to-tr from-[#A855F7] to-[#22D3EE] scale-90" />

                    <div className="relative w-[280px] h-[360px] md:w-[400px] md:h-[500px] rounded-3xl overflow-hidden card-glass card-glow">
                        <img
                            className="w-full h-full object-cover"
                            src={man}
                            alt={profile.name}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent opacity-60" />
                    </div>

                    <div className="absolute -bottom-6 -left-6 rounded-2xl p-3 pr-5 flex items-center gap-3 bg-white/[0.06] backdrop-blur-2xl backdrop-saturate-150 border border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.25),inset_0_-1px_0_rgba(255,255,255,0.05),0_20px_50px_-16px_rgba(168,85,247,0.5)]">
                        <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-[#A855F7] to-[#22D3EE] flex items-center justify-center shadow-[0_8px_20px_-6px_rgba(168,85,247,0.6)]">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="white"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-5 h-5"
                            >
                                <rect
                                    x="6"
                                    y="2"
                                    width="12"
                                    height="20"
                                    rx="3"
                                />
                                <path d="M11 18h2" />
                            </svg>
                            <span className="absolute inset-0 rounded-xl ring-1 ring-white/25" />
                        </div>
                        <div className="min-w-0">
                            <div className="flex items-center gap-1.5">
                                <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                                <div className="text-[9px] uppercase tracking-[0.18em] text-[var(--muted)] font-semibold">
                                    Currently
                                </div>
                            </div>
                            <div className="text-sm font-semibold text-white tracking-tight leading-tight mt-0.5">
                                Building mobile apps
                            </div>
                        </div>
                    </div>

                    <div className="absolute -top-3 -right-3 flex items-center gap-2 rounded-full pl-2 pr-3.5 py-1.5 bg-white/[0.08] backdrop-blur-2xl backdrop-saturate-150 border border-white/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_8px_20px_-8px_rgba(34,211,238,0.5)]">
                        <span className="relative flex w-2 h-2">
                            <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-70" />
                            <span className="relative w-2 h-2 rounded-full bg-emerald-400" />
                        </span>
                        <span className="text-[10px] font-semibold text-white tracking-wide">
                            Shipping in prod
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
