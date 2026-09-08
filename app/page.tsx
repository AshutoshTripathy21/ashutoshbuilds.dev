import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Experience from "@/components/Experience"
import Skills from "@/components/Skills"
import DevOpsPipeline from "@/components/DevOpsPipeline"
import Projects from "@/components/Projects"
import ProductShowcase from "@/components/ProductShowcase"
import GithubActivity from "@/components/GithubActivity"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <DevOpsPipeline />
      <Projects />
      <ProductShowcase />
      <GithubActivity />
      <Contact />
      <Footer />
    </main>
  );
}
