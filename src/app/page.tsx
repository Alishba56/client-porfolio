import About from "../components/about";

import { Hero } from "../components/hero";



export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Hero />
      <About/>
    </main>
  )
}
