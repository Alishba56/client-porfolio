// app/projects/kashmir-waadi.tsx (Next.js page)
"use client";

import Image from "next/image";
import { Navbar } from "@/src/components/navbar";
import { Footer } from "@/src/components/footer";
import projectImage from "@/public/khasmirbansapati.jpeg";
import projectImage2 from "@/public/kashmir.jpeg";
import Link from "next/link";

export default function page() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[60vh] w-full bg-gray-800 flex items-center justify-center">
        <Image
          src={projectImage}
          alt="Kashmir Waadi Banaspati Cooking Oil"
          fill
          className="object-cover opacity-70"
        />
        <h1 className="absolute text-4xl md:text-6xl font-bold text-white text-center px-4">
          Kashmir Waadi Banaspati
        </h1>
      </section>
      {/* Project Description */}
      <section className="max-w-5xl mx-auto p-6 md:p-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                   My Contribution
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg mb-6">
          Kashmir Waadi Banaspati Cooking Oil: I worked as an Assistant Producer on the Kashmir Waadi Banaspati Cooking Oil project, representing Stimulus Production House as part of the Stimulus team. During the shoot, I assisted the Producer in coordinating between departments, managing timelines, and ensuring smooth on-set operations. I also helped oversee the workflow, track progress, and maintain communication between the crew and production team to ensure the project stayed on track and aligned with the creative vision.
        </p>
 {/* Project Gallery */}
      <section className="max-w-5xl mx-auto p-6 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Image
            src={projectImage}
            alt="Project Image 1"
            className="rounded-lg shadow-lg"
          />
          <Image
            src={projectImage2}
            alt="Project Image 2"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>
        {/* Watch Video Button */}
        <Link
          href="https://www.instagram.com/reel/DR7J-w9k6Lx/" // Replace with your video link
          target="_blank"
          rel="noopener noreferrer"
          className="ml-12 bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Watch TVC
        </Link>
      </section>

     

      <Footer />
    </div>
  );
}
