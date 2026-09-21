function SecondaryBtn({ title = "Button", onBtnClick, image }) {
    return (
        <button
            onClick={onBtnClick}
            className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full text-[var(--text)] font-medium text-xs bg-white/5 border border-white/10 backdrop-blur hover:bg-white/10 hover:border-white/25 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-200 overflow-hidden"
        >
            <span className="relative z-10 flex items-center gap-2">
                {image}
                {title}
            </span>
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        </button>
    );
}

export default SecondaryBtn;
