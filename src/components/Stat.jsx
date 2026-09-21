import { useEffect, useRef, useState } from "react";
import { useCountUp } from "../hooks/useCountUp";

function parseTarget(value) {
    const m = String(value).match(/(\d+)/);
    const n = m ? parseInt(m[1], 10) : 0;
    const suffix = m ? value.replace(m[1], "") : value;
    return { n, suffix };
}

export default function Stat({ value, label }) {
    const ref = useRef();
    const [started, setStarted] = useState(false);
    const { n, suffix } = parseTarget(value);
    const count = useCountUp(n, { start: started, duration: 1400 });

    useEffect(() => {
        if (!ref.current) return;
        const io = new IntersectionObserver(
            ([e]) => {
                if (e.isIntersecting) {
                    setStarted(true);
                    io.disconnect();
                }
            },
            { threshold: 0.5 }
        );
        io.observe(ref.current);
        return () => io.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className="flex flex-col items-center px-5 py-4 min-w-[140px] flex-1"
        >
            <div className="text-2xl md:text-3xl font-semibold tabular-nums bg-gradient-to-r from-[#c084fc] to-[#22d3ee] bg-clip-text text-transparent">
                {count}
                {suffix}
            </div>
            <div className="text-[var(--muted)] font-light text-xs mt-1 text-center">
                {label}
            </div>
        </div>
    );
}
