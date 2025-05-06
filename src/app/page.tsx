import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Suspense } from "react";
import { Intro } from "@/features/intro";
import { AboutMe } from "@/features/about-me";
import { Skills } from "@/features/skills";
import { ProjectsShowcase } from "@/features/projects";
import { Contact } from "@/features/contact";
import { PremiumBackground } from "@/components/animations/premium-background";
import { SectionAnimation } from "@/components/animations/section-animation";

export default async function Home() {
  // await new Promise((resolve) => setTimeout(resolve, 10000000));
  // throw Error();
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <SectionAnimation />
        <PremiumBackground />
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
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
