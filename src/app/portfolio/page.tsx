"use client"

import Image from "next/image"
import { Footer } from "@/src/components/footer"
import { MenuManager } from "@/src/components/menu-manager"
import { Navbar } from "@/src/components/navbar"
import { motion } from "framer-motion"

export default function MenuPage() {
  return (
    <div>
      <Navbar />

      <main className="min-h-screen bg-background text-foreground">
        <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">

          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/yaseen3.jpg"
              alt="Portfolio Hero"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-bl from-black via-black/20 to-transparent z-1" />

          {/* Content */}
  
  <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl text-white md:text-7xl font-bold mb-4 tracking-tighter">
               Creative <span className="text-white text-primary">Portfolio</span>
            </h1>
            <p className="text-xl  text-white text-blacktext-muted-foreground max-w-2xl mx-auto">
            Explore our diverse collection of projects, from captivating filmmaking to stunning photography.
            </p>
          </motion.div>
        </div>
        </section>

        <MenuManager />
      </main>

      <Footer />
    </div>
  )
}
