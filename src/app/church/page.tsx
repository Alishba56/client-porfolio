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

/* 🔥 Slider Images */
const sliderImages = [
  "/church.jpeg",
  "/church2.jpeg",
  "/church3.jpeg",
  "/church4.jpeg",
  "/church5.jpeg",
];

export default function TheLastGoodByePage() {
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
          className="mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Documentary · Photo Story
          </Badge>

          <h1 className="text-4xl flex justify-center md:text-5xl font-bold ">
            The Last GoodBye
          </h1>

        
        </motion.div>

        {/* ================= POSTERS ================= */}
        <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-10 mb-20">
          <motion.div className=" overflow-hidden  bg-black">
            <Image
              src="/church1.jpeg"
              alt="The Last GoodBye Poster"
              width={600}
              height={800}
              className="w-full h-[400px] "
              priority
            />
          </motion.div>

           <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className=" rounded-2xl mb-20"
        >
          <h2 className="text-2xl font-semibold mb-6">
            Credits
          </h2>

          <div className="grid grid-cols-1 gap-4 text-sm">
            <p><strong>Photographer:</strong> Yaseen Ali</p>
            <p><strong>Project Type:</strong> Documentary Photo Story</p>
            <p><strong>Location:</strong> St. Patrick’s Cathedral, Karachi</p>
            <p><strong>Date:</strong> 29 March 2025</p>

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
            About the Project
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong>The Last GoodBye</strong> is a documentary photo
            series documenting the funeral of Sister Jeannine Geuns,
            a founding member of the Marie Adelaide Leprosy Centre
            (MALC). Held at St. Patrick’s Cathedral, Karachi, the
            ceremony brought together people from diverse faiths to
            honor her life of service.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Through quiet moments, rituals, and collective silence,
            the project reflects themes of compassion, unity, and
            remembrance, preserving a final farewell to a life
            devoted to helping others.
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
              className=" overflow-hidden shadow-xl bg-black"
            >
              <Image
                src={sliderImages[current]}
                alt="The Last GoodBye Still"
                width={1000}
                height={800}
                className="w-full  object-cover"
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

        {/* ================= VIEW BUTTON ================= */}
        <div className="flex justify-center">
          <Link
            href="https://drive.google.com/file/d/1uYjKLoL74nI387Ds9VGICInDROrct2Bh/view"
            target="_blank"
          >
            <Button size="lg" className="flex items-center gap-2">
              View Photo Reel
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
