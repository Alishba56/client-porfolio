"use client";

import Image from "next/image";
import { Footer } from "@/src/components/footer";
import { MenuManager } from "@/src/components/menu-manager";
import { Navbar } from "@/src/components/navbar";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

/* Animated Titles */
const titles = [
  "Filmmaker",
  "Cinematographer",
  "Video Editor",
  "Photographer",
  "Visual Storyteller",
];

export default function MenuPage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/yaseen4.jpg"
          alt="Portfolio Background"
          fill
          className="object-cover scale-105"
          priority
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-4">
              Crafting <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Visual Stories
              </span>
            </h1>

            {/* Animated Skill Slider */}
            <div className="h-14 overflow-hidden mb-6">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.45 }}
                  className="text-xl md:text-2xl font-semibold tracking-wide text-gray-200"
                >
                  {titles[index]}
                </motion.h2>
              </AnimatePresence>
            </div>

            <p className="text-gray-300 max-w-lg leading-relaxed">
              A curated collection of films, commercials, and photography —
              blending emotion, composition, and cinematic storytelling.
            </p>
          </motion.div>

          {/* RIGHT GLASS CARD */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="hidden lg:block"
          >
            <div className="backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-white text-xl font-semibold mb-5">
                Focus Areas
              </h3>

              <ul className="space-y-3 text-gray-200 text-sm">
                <li>🎬 Narrative & Short Films</li>
                <li>📺 TV Commercials</li>
                <li>📸 Conceptual Photography</li>
                <li>🎞 Editing & Post Production</li>
                <li>🎥 Cinematic Visuals</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <MenuManager />

      <Footer />
    </div>
  );
}
