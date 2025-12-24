"use client";

import { motion ,AnimatePresence} from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/hob2.jpeg",
  "/church3.jpeg", 
  "/church2.jpeg", 
  "/hob3.jpeg",
  "/thelastvoice5.jpeg",
  "/cursed4.jpeg",
  "/thelastvoice2.jpeg",
  "/hob6.jpeg",
  "/hob4.jpeg",
];

/* 🔥 Skills */
const jobTitles = [
"Production Assistance",
"Team collaboration ",
"Visual Production & Direction",
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % jobTitles.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-20"
    >
      {/* ===== Crossfade Background ===== */}
      {images.map((img, i) => (
        <motion.div
          key={img}
          className="absolute inset-0 z-0"
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <Image
            src={img}
            alt="Hero Background"
            fill
            className="object-cover"
            priority={i === 0}
          />
        </motion.div>
      ))}

      {/* ===== Overlay ===== */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* ===== Content ===== */}
      <div className="relative z-20 min-h-screen flex items-center justify-center text-center text-white px-4">
        <div>
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Yaseen {""}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
               Abidi
            </span>
          </motion.h1>

            <div className="h-16 sm:h-20 mb-6 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentTitleIndex}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold from-white to-gray-300 "
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
              >
                {jobTitles[currentTitleIndex]}
              </motion.h2>
            </AnimatePresence>
          </div>

          {/* ===== Buttons ===== */}
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/portfolio">
              <Button size="lg" className="rounded-full bg-black px-8">
                Portfolio <ArrowRight className="ml-1 w-4 h-4" />
              </Button>
            </Link>

            <Link href="/about">
              <Button size="lg" className="rounded-full bg-black px-8">
                About <ArrowRight className="ml-1 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
