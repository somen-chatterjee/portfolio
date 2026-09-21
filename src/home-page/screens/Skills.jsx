import Tilt from "../../components/Tilt";
import { skills } from "../../data/portfolio";

const MARQUEE = [
    "Kotlin", "Flutter", "Dart", "Android SDK", "Coroutines", "Jetpack",
    "Firebase", "GitHub Actions", "USB OTG", "FFI", "MethodChannels",
    "GetX", "BLoC", "Shorebird", "Fastlane", "AAR", "Isolates",
    "Material 3", "S3", "Dio", "ProGuard", "CMake",
];

function Skills() {
    return (
        <section
            id="skills"
            className="relative py-24 px-6 md:px-16 lg:px-40 overflow-hidden"
        >
            <div className="absolute inset-0 grid-bg opacity-30 -z-10" />

            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-14 reveal">
                    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--primary-2)] font-semibold mb-3">
                        <span className="w-6 h-px bg-[var(--primary-2)]" />
                        Technical Skills
                        <span className="w-6 h-px bg-[var(--primary-2)]" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-semibold text-white">
                        Tools I <span className="text-gradient">build with</span>
                    </h2>
                    <p className="text-sm text-[var(--muted)] mt-4 max-w-xl mx-auto">
                        Native mobile, cross-platform, hardware integration —
                        and everything in between.
                    </p>
                </div>

                <div className="relative mb-12 overflow-hidden mask-fade">
                    <div className="marquee">
                        {[...MARQUEE, ...MARQUEE].map((t, i) => (
                            <span
                                key={i}
                                className="whitespace-nowrap text-xs font-medium text-white/70 bg-white/[0.04] border border-white/10 px-4 py-2 rounded-full backdrop-blur"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skills.map((group, i) => (
                        <div
                            key={group.title}
                            className="reveal h-full"
                            style={{ transitionDelay: `${(i % 2) * 60}ms` }}
                        >
                            <Tilt max={3} className="h-full">
                                <div className="card-glass card-glow rounded-2xl p-6 h-full">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="w-1.5 h-6 rounded-full bg-gradient-to-b from-[var(--primary)] to-[var(--accent)]" />
                                    <h3 className="text-base md:text-lg font-semibold text-white">
                                        {group.title}
                                    </h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {group.items.map((item) => (
                                        <span
                                            key={item}
                                            className="text-xs font-medium text-white/75 bg-white/[0.04] hover:bg-white/10 hover:text-white transition-colors px-3 py-1.5 rounded-full border border-white/10"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            </Tilt>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
