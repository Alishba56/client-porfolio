"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import {
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/src/components/navbar";
import { Footer } from "@/src/components/footer";

/* 🔥 Slider Images (stills) */
const sliderImages = [
  "/cursed.jpeg",
  "/cursed2.jpeg",
  "/cursed3.jpeg",
  "/cursed4.jpeg",
];

export default function CursedPage() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % sliderImages.length);

  const prevSlide = () =>
    setCurrent((prev) =>
      prev === 0 ? sliderImages.length - 1 : prev - 1
    );

  return (
    <div>
        <Navbar />
    <section className="min-h-screen bg-background text-foreground py-20">
      <div className=" mx-auto px-4 max-w-6xl">

        {/* ================= TITLE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Badge variant="outline" className="mb-4">
            Short Film · Horror / Suspense
          </Badge>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Cursed
          </h1>

          <p className="text-lg text-muted-foreground max-w-3xl">
            After a long day at work, an office worker stumbles across
            something unsettling on his way home.
          </p>
        </motion.div>

        {/* ================= POSTERS ================= */}
        <div className="grid grid-cols-1  items-center lg:grid-cols-2 gap-10 mb-20">
          <motion.div className="rounded-2xl sm:w-[500px] overflow-hidden shadow-lg bg-black">
            <Image
              src="/Cursedposter.png"
              alt="Cursed Poster"
              width={500}
              height={800}
              className="w-full h-[500px] "
              priority
            />
          </motion.div>

         <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl p-8 mb-20"
        >
          <h2 className="text-2xl font-semibold mb-6">
            Credits
          </h2>

          <div className="grid grid-cols-1  gap-4 text-sm">
            <p>
              <strong>Writer / Director / Producer / Cinematographer / Editor:</strong> <br />{" "}
              Yaseen Ali Abidi
            </p>
            <p><strong>Cast:</strong> Owasi Artani</p>
            <p><strong>Genre:</strong> Horror / Suspense</p>
            <p><strong>Duration:</strong> 58 seconds</p>
          </div>
        </motion.div>
        </div>

        {/* ================= DESCRIPTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mb-16"
        >
          <h2 className="text-2xl font-semibold mb-4">
            LogLine
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong>Cursed</strong> is a short horror–suspense film that
            explores fear hidden within everyday routines. What begins
            as a normal walk home slowly transforms into a disturbing
            encounter.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            The film relies on atmosphere, silence, and minimal visuals
            to create tension, leaving the audience uneasy long after
            it ends.
          </p>
        </motion.div>

    

        {/* ================= IMAGE SLIDER ================= */}
        <div className="relative max-w-4xl mx-auto mb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl overflow-hidden shadow-xl bg-black"
            >
              <Image
                src={sliderImages[current]}
                alt="Cursed Still"
               width={1200}
  height={800}
  className="w-full h-auto object-contain"
              />
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 text-white p-2 rounded-full"
          >
            <ChevronRight />
          </button>
        </div>

        {/* ================= WATCH BUTTON ================= */}
        <div className="flex justify-center">
          <Link href="https://drive.google.com/file/d/1Dp1D-navBiGCEu4fbbH0IVr2uroCEAds/view?usp=sharing" >
            <Button size="lg" className="flex items-center gap-2">
              Watch Film
              <ExternalLink className="w-4 h-4" />
            </Button>
          </Link>
        </div>

      </div>
    </section>
    <Footer />
    </div>
  );
}
