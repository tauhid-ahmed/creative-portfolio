import Header from "@/components/header";
import Footer from "@/components/footer";
import ScrollProgress from "@/components/scroll-progress";
import { Suspense } from "react";
import { Intro } from "@/features/intro";
import { AboutMe } from "@/features/about-me";
import { Skills } from "@/features/skills";
import { ProjectsShowcase } from "@/features/projects-showcase";
import { Contact } from "@/features/contact";
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
        <ProjectsShowcase />
        <Contact />
        <Footer />
        {/* <PremiumBackground /> */}
      </Suspense>
    </main>
  );
}
