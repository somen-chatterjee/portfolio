function PrimaryBtn({ title = "Button", onBtnClick }) {
    return (
        <button
            onClick={onBtnClick}
            className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium text-xs bg-gradient-to-r from-[#A855F7] to-[#7C3AED] shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset,0_10px_30px_-8px_rgba(168,85,247,0.55)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.16)_inset,0_16px_40px_-8px_rgba(168,85,247,0.8)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 overflow-hidden"
        >
            <span className="relative z-10">{title}</span>
            <span className="relative z-10 transition-transform duration-200 group-hover:translate-x-0.5">
                →
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        </button>
    );
}

export default PrimaryBtn;
