import { useEffect } from "react";

export function useReveal() {
    useEffect(() => {
        const io = new IntersectionObserver(
            (entries) => {
                for (const e of entries) {
                    if (e.isIntersecting) {
                        e.target.classList.add("revealed");
                        io.unobserve(e.target);
                    }
                }
            },
            { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
        );
        document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);
}
