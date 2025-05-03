import Header from "@/components/header";
import Footer from "@/components/footer";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import ScrollProgress from "@/components/scroll-progress";
import { Suspense } from "react";
import { Intro } from "@/features/intro";
import { AboutMe } from "@/features/about-me";
import { Skills } from "@/features/skills";
import { PremiumBackground } from "@/components/animations/premium-background";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />

      <Header />

      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            Loading...
          </div>
        }
      >
        <Intro />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        {/* <PremiumBackground /> */}
      </Suspense>
    </main>
  );
}
