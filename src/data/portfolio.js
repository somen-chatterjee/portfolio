export const profile = {
    name: "Somen Chatterjee",
    role: "Mobile Engineer",
    subtitle: "Android · Flutter · Flutter Desktop",
    location: "Jaipur, India",
    email: "somenchatterjee007@gmail.com",
    phone: "+91 9928814690",
    linkedin: "https://linkedin.com/in/somen-chatterjee",
    github: "https://github.com/somen-chatterjee",
    instagram: "https://www.instagram.com/superb_somen",
    whatsapp: "https://wa.me/919928814690",
    bio: "Mobile engineer with 4+ years shipping production Android native, Flutter mobile, and Flutter desktop apps serving 10,000+ users. I own features end-to-end — architecture, performance tuning, hardware integration, and store release.",
    aboutLong:
        "I build native Android in Kotlin, cross-platform Flutter apps, and Flutter Desktop clients across Windows, macOS and Linux. Deep work in USB OTG native communication, printer protocol reverse engineering, and AI integrations. Comfortable owning the whole stack: architecture, concurrency, CI/CD, and store release.",
};

export const stats = [
    { value: "4+", label: "Years Experience" },
    { value: "15+", label: "Projects Shipped" },
    { value: "10K+", label: "Users Served" },
];

export const skills = [
    {
        title: "Languages",
        items: ["Kotlin", "Dart", "Java", "Swift", "JavaScript", "C++", "XML", "Kotlin DSL"],
    },
    {
        title: "Native Mobile",
        items: [
            "Android SDK",
            "AndroidX",
            "Material Components",
            "BroadcastReceiver",
            "FileProvider",
            "Bitmap / Canvas",
            "AAR modules",
            "macOS App Sandbox",
        ],
    },
    {
        title: "Cross-Platform",
        items: [
            "Flutter (Material 3)",
            "Flutter Desktop",
            "GetX",
            "Provider",
            "BLoC",
            "Dio",
            "flutter_screenutil",
        ],
    },
    {
        title: "Architecture & Concurrency",
        items: [
            "Multi-module Android",
            "MVVM / MVC",
            "Repository & Facade",
            "State machines",
            "Kotlin Coroutines",
            "Dart Isolates",
            "Producer-Consumer",
        ],
    },
    {
        title: "Networking & Backend",
        items: [
            "REST APIs",
            "Dio interceptors",
            "AWS S3 pre-signed",
            "JWT / OTP auth",
            "Firebase FCM / Auth / RTDB",
            "Razorpay",
            "AdMob",
            "GPT integration",
        ],
    },
    {
        title: "Native Interop & Hardware",
        items: [
            "Dart FFI",
            "win32",
            "MethodChannels (Swift)",
            "Android USB Host API",
            "USB OTG",
            "bulkTransfer / controlTransfer",
        ],
    },
    {
        title: "Printing & Image",
        items: [
            "Canon IVEC / BJL / BJRaster3",
            "Epson ESC/P-R",
            "IEEE-1284",
            "3D CLUT + trilinear",
            "RGB → CMYK",
            "Jarvis-Judice-Ninke",
            "PackBits RLE",
        ],
    },
    {
        title: "Build & DevOps",
        items: [
            "GitHub Actions",
            "Fastlane",
            "Firebase App Distribution",
            "Shorebird OTA",
            "Gradle Kotlin DSL",
            "ProGuard",
            "CMake",
            "Inno Setup",
        ],
    },
];

export const experience = [
    {
        role: "Mobile Application Developer",
        company: "Dreamcast",
        location: "Jaipur",
        period: "Oct 2024 – Present",
        current: true,
        highlights: [
            "Own mobile & desktop delivery across Flutter, Android native and Flutter Desktop — 3 production products shipped in first 12 months.",
            "Expanded team scope into desktop + hardware integration, taking on client work previously outsourced.",
            "Established mobile release practices and code review standards adopted across the mobile team.",
        ],
    },
    {
        role: "Flutter Developer",
        company: "JPLoft",
        location: "Jaipur",
        period: "Nov 2023 – Nov 2024",
        highlights: [
            "Delivered multilingual AI-powered Flutter apps (1K+ downloads, 500+ active users), lifting retention 30% and driving 10% monthly revenue growth via AdMob and IAP.",
            "Built real-time analytics, calendar scheduling, and bulk-ordering modules — cut manual tasks 70%.",
            "Accelerated feature delivery 40% using Flutter + Firebase, Provider and Flutter Localization.",
        ],
    },
    {
        role: "Flutter & Android Developer",
        company: "Volansoft Technologies",
        location: "Jaipur",
        period: "Oct 2021 – Nov 2023",
        highlights: [
            "Built scalable Flutter apps (5K+ downloads, thousands of MAU); 25% campaign participation, 10K+ uploads/month, ₹2–3 lakh+ in monthly wallet transactions.",
            "Delivered enterprise ERP and school-management deployments — cut admin tasks 40%, shortened procurement cycles 45%, lowered stock-outs 30%.",
        ],
    },
];

export const projects = [
    {
        title: "Printer Communication & Reverse Engineering Framework",
        tag: "Native Android · Kotlin · USB OTG",
        featured: true,
        blurb:
            "Driver-less Android print libraries for Canon PIXMA MG2570S, PIXMA G2010 and Epson PM-520 over USB OTG. No vendor SDKs — reusable AAR modules.",
        bullets: [
            "Reverse-engineered Canon IVEC / BJL / BJRaster3 ESC/P and Epson ESC/P-R from USB traffic captures; byte-diffed vs. Windows driver streams.",
            "Streaming raster pipeline (producer-consumer, LinkedBlockingQueue, coroutine Mutex).",
            "Full color pipeline: 3D CLUT, GCR, TAC, Jarvis-Judice-Ninke halftoning, PackBits RLE.",
            "Auto-cancel state machine tolerant to printer, transport and app-side interrupts.",
        ],
    },
    {
        title: "PicBot Desktop — Cloud Photo Backup",
        tag: "Flutter Desktop · Windows / macOS / Linux",
        featured: true,
        blurb:
            "Cross-platform Flutter desktop client for photographers to bulk-upload event photos to an S3-backed backend, with drag-and-drop and Google Drive import.",
        bullets: [
            "Isolate-based compress-and-upload pipeline with retry-with-backoff and streamed multipart PUTs to S3 pre-signed URLs.",
            "Dart FFI (win32 disk-space) and Swift MethodChannels (macOS security-scoped bookmarks).",
            "Windows builds packaged with Inno Setup.",
        ],
    },
    {
        title: "Dreamcast Event App",
        tag: "Flutter · GetX · Firebase · Shorebird",
        featured: true,
        blurb:
            "MVP with agenda, speakers, session booking, media galleries, live polls and Q&A — 1,000+ concurrent users, 100+ events.",
        bullets: [
            "Firebase FCM + Realtime DB + Auth with AES encryption; 100% GDPR audit clearance.",
            "GitHub Actions CI/CD + Firebase App Distribution.",
            "Shorebird OTA for minute-scale bug-fix deployment without store review.",
        ],
    },
    {
        title: "GPT-Integrated Arabic App",
        tag: "Flutter · iOS + Android",
        blurb:
            "AI-powered Arabic app delivering context-aware GPT responses. 1K+ downloads. Monetized with AdMob (~3% CTR) and IAP — 10% monthly revenue growth.",
    },
    {
        title: "Fitness Metrics App",
        tag: "Flutter",
        blurb:
            "Fitness tracker for 500+ active users with real-time graphs, data tables and calendar insights. +30% retention.",
    },
    {
        title: "Water Supplier App",
        tag: "Flutter",
        blurb:
            "On-demand water ordering — 1,000+ orders/month with bulk-order + payment gateway. Calendar scheduling cut manual re-orders 70%.",
    },
    {
        title: "RevuEr — Review & Campaign App",
        tag: "Flutter",
        blurb:
            "5K+ downloads, 25% campaign participation. Users upload 10K+ images/videos and redeem 2K+ rewards monthly.",
    },
    {
        title: "Online Exam Contest + Wallet",
        tag: "Flutter",
        blurb:
            "100+ monthly contests for 800+ active users. ₹2–3 lakh+ in wallet transactions. Payout time cut 35%.",
    },
    {
        title: "School Management (Parents / Students / Teachers)",
        tag: "Flutter · Enterprise",
        blurb:
            "Adopted by 15 schools serving 3.5K students & parents. 90% parent-teacher engagement, 40% less admin workload.",
    },
    {
        title: "ERP for Business Operations",
        tag: "Flutter · Enterprise",
        blurb:
            "12K+ inventory SKUs, 5K purchase orders/month. Automated approvals shortened procurement cycles 45%, cut stock-outs 30%.",
    },
    {
        title: "Space Shooter Flame",
        tag: "Flutter · Flame · GitHub Actions",
        blurb:
            "2D game in Flutter Flame, deployed as a playable web build on GitHub Pages. Full CI/CD with multi-platform builds and beta releases.",
    },
];

export const process = [
    {
        step: "01",
        title: "Discover",
        blurb:
            "Understand the product goal, users, constraints and hardware / platform surface. Map the real flow end to end before touching code.",
    },
    {
        step: "02",
        title: "Architect",
        blurb:
            "Pick the smallest architecture that fits: multi-module Android or feature-modular Flutter, MVVM, repository, and the right concurrency primitive.",
    },
    {
        step: "03",
        title: "Build",
        blurb:
            "Ship features end-to-end — UI, networking, persistence, hardware integration. Reuse platform primitives before reaching for a dependency.",
    },
    {
        step: "04",
        title: "Ship",
        blurb:
            "CI/CD on GitHub Actions, Firebase App Distribution, Shorebird OTA. Signed builds to Play Store and App Store with automated versioning.",
    },
];

export const education = {
    degree: "Bachelor of Technology",
    school: "Rajasthan Technical University, Kota",
    year: "2021",
    cgpa: "7.00",
};
