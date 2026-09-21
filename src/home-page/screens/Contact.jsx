import {
    linkedin,
    github,
    whatsapp,
    instagram,
    mail,
    phone,
} from "../../assets/assets";
import { profile } from "../../data/portfolio";

const SOCIALS = [
    { icon: linkedin, href: profile.linkedin, label: "LinkedIn" },
    { icon: github, href: profile.github, label: "GitHub" },
    { icon: instagram, href: profile.instagram, label: "Instagram" },
    { icon: whatsapp, href: profile.whatsapp, label: "WhatsApp" },
];

function Contact() {
    return (
        <section
            id="contact"
            className="relative py-28 px-6 md:px-16 lg:px-40 overflow-hidden"
        >
            <div className="absolute w-[700px] h-[700px] bg-[var(--primary)] opacity-25 rounded-full -top-40 -right-40 blur-[100px]" />
            <div className="absolute w-[500px] h-[500px] bg-[var(--accent)] opacity-15 rounded-full -bottom-20 -left-40 blur-[100px]" />
            <div className="absolute inset-0 grid-bg opacity-30 -z-10" />

            <div className="relative max-w-4xl mx-auto text-center reveal">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--primary-2)] font-semibold mb-4">
                    <span className="w-6 h-px bg-[var(--primary-2)]" />
                    Contact
                    <span className="w-6 h-px bg-[var(--primary-2)]" />
                </div>
                <h2 className="text-4xl md:text-6xl font-semibold leading-[1.05] text-white">
                    Let's build something<br />
                    <span className="text-gradient">people actually use</span>
                </h2>
                <p className="text-sm md:text-base text-[var(--muted)] mt-6 max-w-xl mx-auto leading-relaxed">
                    Open to mobile engineering roles, freelance builds, and
                    hardware / cross-platform integrations. Drop a line.
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <a
                        href={`mailto:${profile.email}`}
                        className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium text-xs bg-gradient-to-r from-[#A855F7] to-[#7C3AED] shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset,0_10px_30px_-8px_rgba(168,85,247,0.55)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.16)_inset,0_16px_40px_-8px_rgba(168,85,247,0.8)] transition-all duration-200 hover:-translate-y-0.5 overflow-hidden"
                    >
                        <img src={mail} alt="" className="w-4 h-4 relative z-10" />
                        <span className="relative z-10">{profile.email}</span>
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </a>
                    <a
                        href={`tel:${profile.phone}`}
                        className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-xs font-medium bg-white/[0.04] border border-white/10 backdrop-blur hover:bg-white/10 hover:border-white/25 hover:-translate-y-0.5 transition-all overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            <img src={phone} alt="" className="w-4 h-4" />
                            {profile.phone}
                        </span>
                        <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </a>
                </div>

                <div className="flex justify-center gap-3 mt-10">
                    {SOCIALS.map((s) => (
                        <a
                            key={s.label}
                            href={s.href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={s.label}
                            className="w-11 h-11 flex items-center justify-center rounded-full card-glass hover:-translate-y-1 hover:bg-white/10 transition-all"
                        >
                            <img
                                src={s.icon}
                                alt=""
                                className="w-5 h-5 brightness-0 invert opacity-80"
                            />
                        </a>
                    ))}
                </div>

                <div className="mt-16 pt-8 border-t border-white/10 text-xs text-[var(--muted-2)] flex flex-col md:flex-row justify-between gap-2">
                    <div>
                        © {new Date().getFullYear()} {profile.name}. Built with
                        React + Tailwind.
                    </div>
                    <div>{profile.location}</div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
