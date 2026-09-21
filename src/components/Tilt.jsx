import { useRef } from "react";

export default function Tilt({ children, className = "", max = 5, ...rest }) {
    const ref = useRef();
    const raf = useRef();

    const onMove = (e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        if (raf.current) cancelAnimationFrame(raf.current);
        raf.current = requestAnimationFrame(() => {
            el.classList.add("tilting");
            el.style.setProperty("--ry", `${x * max}deg`);
            el.style.setProperty("--rx", `${-y * max}deg`);
        });
    };

    const onLeave = () => {
        const el = ref.current;
        if (!el) return;
        if (raf.current) cancelAnimationFrame(raf.current);
        el.classList.remove("tilting");
        el.style.setProperty("--rx", "0deg");
        el.style.setProperty("--ry", "0deg");
    };

    return (
        <div
            ref={ref}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            className={`tilt ${className}`}
            {...rest}
        >
            {children}
        </div>
    );
}
