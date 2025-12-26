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
  "/hob2.jpeg",
  "/hob3.jpeg",
  "/hob4.jpeg",
  "/hob5.jpeg",
  "/hob6.jpeg",

];

export default function HublotPage() {
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
      <div className="container mx-auto px-4 max-w-6xl">

        {/* ================= TITLE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Badge variant="outline" className="mb-4">
            TV Commercial · Luxury
          </Badge>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hublot Watch Commercial
          </h1>
            <p className="text-muted-foreground leading-relaxed">
                     As a storyteller, I showcased both sides of the brand sports and luxury appealing to both audiences

          </p>

          
        </motion.div>

        {/* ================= POSTERS ================= */}
<div className="flex justify-center items-center mb-20">
        <motion.div className="flex justify-center items-center bg-black  overflow-hidden">
  <Image
    src="/hob.jpeg"
    alt="Hublot Poster"
    width={600}
    height={800}
    className="max-h-[600px] w-full object-cover"
    priority
  />
</motion.div>

        </div>

    
        {/* ================= CREDITS ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className=" sm:mx-20  p-8 mb-8"
        >
          <h2 className="text-2xl font-semibold mb-6">
            Credits
          </h2>

          <div className="grid grid-cols-1 gap-4 text-sm">
            <p><strong>Director:</strong> Yaseen Ali Abidi</p>
            <p><strong>Writers:</strong> Rida Batool, Yaseen Ali Abidi</p>
            <p><strong>Producers:</strong> Yaseen Ali Abidi, Rida Batool</p>
            <p><strong>Assistant Director:</strong> Rida Batool</p>
            <p><strong>Cinematography:</strong> Yaseen Ali Abidi</p>
            <p><strong>Cast:</strong> Baasil Salman</p>
            <p><strong>Editor:</strong> Yaseen Ali Abidi, Rida Batool</p>
            <p><strong>Duration:</strong> 1 Minute 18 Seconds</p>
          </div>
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
                alt="Hublot Still"
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
          <Link href="https://drive.google.com/file/d/1qcwYb5_qJg1qOvEvsTN0axWjE8I5UZlE/view?usp=sharing" >
            <Button size="lg" className="flex items-center gap-2">
              Watch 
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
