import { useEffect } from "react";

export function useGlobalCursor() {
    useEffect(() => {
        if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches)
            return;
        if (window.matchMedia?.("(hover: none)").matches) return;

        let raf = 0;
        let x = 0;
        let y = 0;
        let currentCard = null;
        const body = document.body;

        const tick = () => {
            raf = 0;
            body.style.setProperty("--gx", `${x}px`);
            body.style.setProperty("--gy", `${y}px`);
            if (currentCard) {
                const r = currentCard.getBoundingClientRect();
                currentCard.style.setProperty("--mx", `${x - r.left}px`);
                currentCard.style.setProperty("--my", `${y - r.top}px`);
            }
        };

        const onMove = (e) => {
            x = e.clientX;
            y = e.clientY;
            currentCard = e.target?.closest?.(".card-glow") || null;
            if (!raf) raf = requestAnimationFrame(tick);
        };

        window.addEventListener("pointermove", onMove, { passive: true });
        return () => {
            window.removeEventListener("pointermove", onMove);
            cancelAnimationFrame(raf);
        };
    }, []);
}
