import Contact from "@/components/Contact/Contact";
import JetEngine from "@/components/JetEngine/JetEngine";
import Projects from "@/components/Projects/Projects";
import FooterContact from "@/components/Contact/ContactFooter";

export default function Home() {
  return (
    <main className="relative w-full">
      <JetEngine modelPath="/models/CFM_Engine.glb" />
      <Projects />
      <FooterContact />
    </main>
  );
}
