import Sidebar from "@/components/sidebar";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import About from "@/components/about";
import Contact from "@/components/contact";
import "./Home.scss";

export default function Home() {
  return (
    <div className="Home" id="home">
      <Sidebar />
      <main className="Home__main">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
}
