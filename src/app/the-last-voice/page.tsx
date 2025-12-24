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
import { div } from "framer-motion/client";
import { Navbar } from "@/src/components/navbar";
import { Footer } from "@/src/components/footer";

/* 🔥 Slider Images */
const sliderImages = [
  "/thelastvoice2.jpeg",
  "/thelastvoice5.jpeg",
  "/thelastvoice6.jpeg",
];

export default function TheLastVoicePage() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % sliderImages.length);

  const prevSlide = () =>
    setCurrent((prev) =>
      prev === 0 ? sliderImages.length - 1 : prev - 1
    );

  return (
    <div>
        <Navbar/>
    <section className="min-h-screen bg-background text-foreground py-20">
      <div className="container mx-auto px-4 max-w-6xl">

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
            The Last Voice
          </h1>

          <p className="text-lg text-muted-foreground max-w-3xl">
            When silence speaks, it’s already too late.
          </p>
        </motion.div>

        {/* ================= POSTERS ================= */}
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          <motion.div className="rounded-2xl sm:w-[400px]  overflow-hidden shadow-lg bg-black">
            <Image
              src="/thelastvoice.jpeg"
              alt="The Last Voice Poster"
              width={800}
              height={800}
              className="h-[500px] "
              priority
            />
          </motion.div>

          <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className=" rounded-2xl  "
        >
          <h2 className="text-2xl font-semibold mb-6">
            Credits
          </h2>

          <div className="grid grid-cols-1  gap-4 text-sm">
            <p><strong>Director:</strong> Yaseen Ali Abidi</p>
            <p><strong>Writer:</strong> Rida Batool</p>
            <p><strong>Producers:</strong> Yaseen Ali Abidi, Rida Batool</p>
            <p><strong>Assistant Director:</strong> Rida Batool</p>
            <p><strong>Cinematography:</strong> Yaseen Ali Abidi</p>
            <p><strong>Editor:</strong> Yaseen Ali Abidi, Rida Batool</p>
            <p><strong>Cast:</strong> Baasil Salman</p>
            <p><strong>Duration:</strong> 1m 33s</p>
          </div>
        </motion.div>

        </div>

        {/* ================= DESCRIPTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mb-16"
        >
          <h2 className="text-2xl font-bold mb-4">
        LogLine
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong>The Last Voice </strong> Late at night, a music composer hears mysterious whispers through 
            his headphones and realizes he is not alone in the room,

          </p>
        </motion.div>

        {/* ================= CREDITS ================= */}
      
        {/* ================= IMAGE SLIDER ================= */}
        <div className="relative max-w-4xl object-contain mx-auto mb-20">
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
                alt="Film Still"
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
          <Link
            href="https://drive.google.com/file/d/14sZKrkkoFjoLtYlbOuA_DPgaVM9SxskR/view"
            target="_blank"
          >
            <Button size="lg" className="flex items-center gap-2">
              Watch 
              <ExternalLink className="w-4 h-4" />
            </Button>
          </Link>
        </div>

      </div>
    </section>
    <Footer />
    </div>);
}
