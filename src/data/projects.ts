export const projects = [
  {
    id: "cryptiqverse",
    title: "CryptiqVerse",
    slug: "cryptiqverse",
    category: "Blockchain",
    tagline: "The Future of Web3 Real Estate & Commerce",
    description: "CryptiqVerse is a revolutionary platform blending blockchain technology with real-world applications. It serves as an ultimate hub for virtual and physical asset management, NFT marketplaces, and decentralized finance integrations. Built for scale, engineered for security.",
    problem: "Traditional real estate and digital asset marketplaces are fragmented, lacking transparency, and plagued by high fees, slow transactions, and poor user experiences.",
    solution: "We engineered a unified Web3 ecosystem that provides instant settlement, cryptographic security, and an immersive user interface. By bridging physical assets with blockchain tokenization, we created a borderless, trustless marketplace.",
    results: [
      { label: "Transaction Speed", value: "< 2s" },
      { label: "Uptime", value: "99.99%" },
      { label: "Smart Contracts", value: "Audited" }
    ],
    features: [
      { icon: "Globe", title: "Decentralized Marketplace", desc: "Peer-to-peer trading with zero intermediaries." },
      { icon: "Lock", title: "Smart Contract Automation", desc: "Trustless escrows and automated settlements." },
      { icon: "Layers", title: "Asset Tokenization", desc: "Fractional ownership of high-value real estate." },
      { icon: "Zap", title: "Real-time Estimator", desc: "AI-driven price feeds and market valuations." }
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Solidity", "Web3.js", "Node.js", "IPFS", "PostgreSQL"],
    link: "https://cryptiqverse.xyz/",
    images: [],
    isFlagship: true,
    branding: {
      logo: "/assets/projects/cryptiqverse-logo.jpg",
      logoFallback: "/assets/projects/cryptiqverse-logo.jpg",
      heroImage: "",
      ogImage: "/assets/projects/cryptiqverse-logo.jpg",
      alt: "CryptiqVerse logo",
      color: "blue"
    }
  },
  {
    id: "elite-skill-hub",
    title: "Elite Skill Hub",
    slug: "elite-skill-hub",
    category: "Web Apps",
    tagline: "Where Skills Meet Victory",
    description: "A premium gaming platform built for modern browsers with high-performance rendering. Experience competitive gameplay with flawless 60FPS fluid mechanics and real-time leaderboards.",
    techStack: ["React", "TypeScript", "Vite", "Canvas API", "WebGL"],
    images: [],
    isFlagship: true,
    link: "https://elite-skill-hub.example.com",
    branding: {
      logo: "/assets/projects/elite-skill-hub-logo-transparent.png",
      logoFallback: "/assets/projects/elite-skill-hub-logo-transparent.png",
      heroImage: "",
      ogImage: "/assets/projects/elite-skill-hub-logo-transparent.png",
      alt: "Elite Skill Hub logo",
      color: "purple"
    }
  }
];

export const projectCategories = ["All", "Blockchain", "Web Apps"];
