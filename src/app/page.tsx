import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Suspense } from "react";
import { Intro } from "@/features/intro";
import { AboutMe } from "@/features/about-me";
import { Skills } from "@/features/skills";
import { ProjectsShowcase } from "@/features/projects";
import { Contact } from "@/features/contact";
import { PremiumBackground } from "@/components/animations/premium-background";

export default function Home() {
  return (
    <main className="min-h-screen">
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
