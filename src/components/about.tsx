"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import profile from "@/public/image.jpeg"
import { Button } from "./ui/button"
import Link from "next/link"
import { Download } from "lucide-react"

const jobTitles = [
  "Media Studies Student",
  "Creative Thinker",
  "Digital Storyteller",
  "Visual Communication",
  "Content & Media Creator",
  "Creative Media Enthusiast",
]

export default function Hero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex(
        (prev) => (prev + 1) % jobTitles.length
      )
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center
      bg-black px-4"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          {/* Name */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4
            text-white tracking-tight"
          >
            Yaseen Ali
          </motion.h1>

          {/* Animated Job Titles */}
          <div className="h-14 sm:h-16 mb-6 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentTitleIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4 }}
                className="text-xl sm:text-2xl font-medium text-white"
              >
                {jobTitles[currentTitleIndex]}
              </motion.h2>
            </AnimatePresence>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto md:mx-0 mb-8 leading-relaxed">
            I am a Media Studies student with a strong passion for digital media,
            creative storytelling, and visual communication. I enjoy exploring
            modern media platforms and expressing ideas through meaningful
            content, design, and creative visuals.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="/resume.pdf" download className="px-6 flex gap-5 py-3 justify-center items-center rounded-full border border-gray-600
              text-gray-300 hover:border-purple-400 hover:text-purple-400
              transition font-medium">
                CV <Download className="ml-1 w-4 h-4" />
            </Link>
            <a
              href="portfolio"
              className="px-6 py-3 rounded-full border border-gray-600
              text-gray-300 hover:border-purple-400 hover:text-purple-400
              transition font-medium"
            >
              View Portfolio
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-2xl"></div>
            <Image
              src={profile}
              alt="Yaseen Ali"
              priority
              className="relative rounded-full w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80
              object-cover border border-gray-700 shadow-2xl"
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
