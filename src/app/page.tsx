import About from "../components/about";
import EducationPage from "../components/education";
import { Footer } from "../components/footer";
import { Hero } from "../components/hero";
import { MenuManager } from "../components/menu-manager";
import { Navbar } from "../components/navbar";


export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Hero />
      <About/>
    </main>
  )
}
