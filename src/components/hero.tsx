"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/yaseen3.jpg",
  "/yaseen2.jpg",
  "/yaseen4.jpg",
  "/yaseen3.jpg",
  "/yaseen2.jpg",
  "/yaseen4.jpg",
  "/yaseen3.jpg",
  "/yaseen2.jpg",
  "/yaseen4.jpg",
  "/yaseen3.jpg",
  "/yaseen2.jpg",
  "/yaseen4.jpg",
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
            sizes="100vw"
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
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Capturing{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Beautiful Moments
            </span>
          </motion.h1>

          <motion.p
            className="text-xl max-w-2xl mx-auto mb-10 font-semibold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Professional photography that tells your story.
          </motion.p>

          <div className="flex gap-4 justify-center">
            <Link href="/portfolio">
              <Button size="lg" className="rounded-full bg-black  px-8">
                My Work <ArrowRight className="ml-1 w-4 h-4" />
              </Button>
            </Link>

            <Link href="/resume.pdf" download>
              <Button size="lg" className="rounded-full bg-black  px-8">
                CV <Download className="ml-1 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
