
import { WelcomeSection } from "@/components/sections/Welcome.section";
import { AboutMe } from "@/components/sections/AboutMe.section";
import { Projects } from "@/components/sections/Projects.section";
import { Contact } from "@/components/sections/Contact.section";

export default function Home() {
  return (
    <main>
      <WelcomeSection />
      <AboutMe />
      <Projects />
      <Contact />
    </main>
  );
}
