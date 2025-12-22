"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={'/auto.mp4'}
      >
        <source src="/auto.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 text-center text-white">
        
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Capturing{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
            Beautiful Moments
          </span>
        </motion.h1>

        <motion.p
          className="text-xl max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Professional photography that tells your story.
        </motion.p>

        <div className="flex gap-4 justify-center ">
          <Link href="/portfolio">
            <Button size="lg" className="text-1xl rounded-full px-8">
              Portfolio <ArrowRight className="ml-1 w-4 h-4" />
            </Button>
          </Link>
          <a href="/resume.pdf" download="resume.pdf">
            <Button size="lg" className="text-1xl rounded-full px-8">
              Resume <Download className="ml-1 w-4 h-4" />
            </Button>
          </a>
         
        </div>

      </div>
    </section>
  );
}
