const OFFSETS = { about: 76 };

export function scrollTo(id, offset) {
    const el = document.getElementById(id);
    if (!el) return;
    const y =
        el.getBoundingClientRect().top +
        window.scrollY -
        (offset ?? OFFSETS[id] ?? 20);
    window.scrollTo({ top: y, behavior: "smooth" });
}
