import type { Metadata } from "next";
import { Geist, Geist_Mono, Recursive, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-calibri",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const recursive = Recursive({
  variable: "--font-recursive",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nguyen Nguyen | Portfolio - Full Stack Developer",
  description:
    "Welcome to the portfolio of Nguyen Nguyen, a Full Stack Developer. Explore my projects and skills in React, Next.js, AI, Langgraph, Langchain, Python, and Typescript.",
  keywords: [
    "portfolio",
    "Nguyen Nguyen",
    "Full Stack Developer",
    "React",
    "Next.js",
    "AI",
    "Langgraph",
    "Langchain",
    "Python",
    "Typescript",
    "web developer",
    "software engineer",
  ],
  authors: [{ name: "Nguyen Nguyen" }],
  creator: "Nguyen Nguyen",
  publisher: "Nguyen Nguyen",

  openGraph: {
    title: "Nguyen Nguyen | Portfolio - Full Stack Developer",
    description:
      "Explore the work of Nguyen Nguyen, a Full Stack Developer specializing in React, Next.js, AI, and more.",
    // url: "https://nguyen.dev", // <-- REPLACE with your actual domain
    siteName: "Nguyen Nguyen Portfolio",
    // images: [ // <-- UNCOMMENT AND REPLACE with your image URL
    //   {
    //     url: "https://yourdomain.com/og-image-nguyen.jpg", // Example: /og-image.png in your public folder
    //     width: 1200,
    //     height: 630,
    //     alt: "Nguyen Nguyen - Full Stack Developer Portfolio",
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image", // Use "summary" if you don't have a large image
    title: "Nguyen Nguyen | Portfolio - Full Stack Developer",
    description:
      "Discover projects by Nguyen Nguyen, skilled in React, Next.js, AI, Langgraph, Langchain, Python, and Typescript.",
    // creator: "@YourTwitterHandle", // <-- REPLACE with your Twitter handle if you have one
    // images: ["https://yourdomain.com/twitter-image-nguyen.jpg"], // <-- UNCOMMENT AND REPLACE with your image URL
  },
  // metadataBase: new URL("https://nguyen.dev"), // <-- REPLACE with your actual domain if you uncomment lines with relative paths
  // icons: { // <-- UNCOMMENT AND ADD your favicons to the public folder
  //   icon: "/favicon.ico",
  //   shortcut: "/favicon-16x16.png",
  //   apple: "/apple-touch-icon.png",
  // },
  robots: {
    // Standard good practice
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} 
        ${recursive.variable} ${roboto.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
