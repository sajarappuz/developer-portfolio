import Hero from "@/components/Hero";
import About from "./about/page";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";


export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <hr className="my-10 hidden md:block" />
      <Skills/>
      <hr className="my-10 hidden md:block" />
      <Projects/>
      <hr className="my-10 hidden md:block" />
    </div>
  )
}
