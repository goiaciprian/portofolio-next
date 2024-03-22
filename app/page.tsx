
import { WelcomeSection } from "@/app/sections/Welcome.section";
import { AboutMe } from "@/app/sections/AboutMe.section";
import { Projects } from "@/app/sections/Projects.section";
import { Contact } from "@/app/sections/Contact.section";
import { BackTop } from "./components/BackTop.component";

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
