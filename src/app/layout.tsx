import type { Metadata, Viewport } from "next";
import { Mona_Sans as FontSans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { env } from "@/env";
import { LenisProvider } from "@/components/animations/lenis";
import "@/styles/globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap", // Improve font loading performance
});

export const metadata: Metadata = {
  title: `${env.NEXT_PUBLIC_AUTHOR_NAME} | Frontend Developer Portfolio`,
  description:
    "Professional portfolio showcasing frontend development skills and projects",
  keywords: [
    "frontend developer",
    "react",
    "next.js",
    "portfolio",
    "web developer",
    "fullstack developer",
  ],
  authors: [{ name: env.NEXT_PUBLIC_AUTHOR_NAME }],
  creator: env.NEXT_PUBLIC_AUTHOR_NAME,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} min-h-screen font-sans antialiased`}
      >
        <ThemeProvider>
          <LenisProvider>{children}</LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
