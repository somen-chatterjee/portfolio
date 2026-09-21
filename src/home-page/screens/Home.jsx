import PrimaryBtn from "../../components/Primary-btn";
import SecondaryBtn from "../../components/Secondary-btn";
import Stat from "../../components/Stat";
import { man, download } from "../../assets/assets";
import { profile, stats } from "../../data/portfolio";

function scrollTo(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
}

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
                        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white">
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

                    <div className="grid grid-cols-3 mt-14 lg:mt-16 rounded-2xl overflow-hidden card-glass max-w-lg">
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

                    <div className="absolute -bottom-5 -left-5 card-glass rounded-2xl px-4 py-3 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#A855F7] to-[#22D3EE] flex items-center justify-center text-white text-lg font-semibold">
                            ⌘
                        </div>
                        <div>
                            <div className="text-[10px] uppercase tracking-widest text-[var(--muted)]">
                                Focus
                            </div>
                            <div className="text-sm font-semibold text-white">
                                Mobile Engineering
                            </div>
                        </div>
                    </div>

                    <div className="absolute -top-3 -right-3 card-glass rounded-full px-3 py-1.5 text-[10px] font-medium text-white flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                        v4.7 · Shipping
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
