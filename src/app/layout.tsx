import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/animations/SmoothScroll";
import MouseGlow from "@/components/ui/MouseGlow";
import Loader from "@/components/ui/Loader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/ui/FloatingCTA";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050608",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Exotic Co. | Engineering the Future",
  description:
    "Exotic Co. is a premium global software engineering company building intelligent AI, Web, Mobile, and Cloud solutions that help enterprises innovate, scale, and lead.",
  keywords: ["Software Engineering", "AI Solutions", "Web3", "Enterprise Software", "Cloud DevOps", "UI/UX Design"],
  authors: [{ name: "Exotic Co." }],
  creator: "Exotic Co.",
  publisher: "Exotic Co.",
  metadataBase: new URL("https://exotic.co"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://exotic.co",
    title: "Exotic Co. | Engineering the Future",
    description: "Premium global software engineering company building intelligent AI, Web, Mobile, and Cloud solutions.",
    siteName: "Exotic Co.",
    images: [
      {
        url: "/assets/ExoticCo_BDM X Cover Page.png",
        width: 1200,
        height: 630,
        alt: "Exotic Co. Cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Exotic Co. | Engineering the Future",
    description: "Premium global software engineering company building intelligent AI, Web, Mobile, and Cloud solutions.",
    images: ["/assets/ExoticCo_BDM X Cover Page.png"],
    creator: "@exoticco",
  },
  icons: {
    icon: "/assets/Logo.png",
    shortcut: "/assets/Logo.png",
    apple: "/assets/Logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Exotic Co.",
  url: "https://exotic.co",
  logo: "https://exotic.co/assets/Logo.png",
  description: "Exotic Co. is a premium global software engineering company building intelligent AI, Web, Mobile, and Cloud solutions.",
  contactPoint: {
    "@type": "ContactPoint",
    email: "contact@exotic.co",
    contactType: "customer service"
  },
  sameAs: [
    "https://twitter.com/exoticco",
    "https://github.com/exoticco",
    "https://linkedin.com/company/exoticco"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased bg-background text-foreground selection:bg-primary selection:text-white overflow-x-hidden min-h-screen flex flex-col`}>
        <Loader />
        <MouseGlow />
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
        <FloatingCTA />
      </body>
    </html>
  );
}
