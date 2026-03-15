import Image from "next/image";
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Experience from "@/components/Experience"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import GithubActivity from "@/components/GithubActivity"
import DevOpsPipeline from "@/components/DevOpsPipeline"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main>

      <Navbar />

      <Hero />

      <Experience />

      <Skills />

      {/* <DevOpsPipeline /> */}

      <Projects />

      {/* <GithubActivity /> */}

      <Contact />

      <Footer />

    </main>
  );
}
