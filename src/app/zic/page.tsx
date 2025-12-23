// app/projects/zic-dvc.tsx
"use client";

import Image from "next/image";
import { Navbar } from "@/src/components/navbar";
import { Footer } from "@/src/components/footer";

// Import your images
import bikeImage1 from "@/public/bike.jpeg";
import bikeImage2 from "@/public/bike1.jpeg";

import carImage1 from "@/public/car.jpeg";
import carImage2 from "@/public/car1.jpeg";

import truckImage1 from "@/public/truck.jpeg";
import truckImage2 from "@/public/truck1.jpeg";
import zicHero from "@/public/zic.jpeg"; // ZIC background image
import Link from "next/link";


export default function ZICProject() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Navbar />

      {/* Hero Section with ZIC background */}
      <section className="relative h-[60vh] w-full flex items-center justify-center">
        <Image
          src={zicHero}
          alt="ZIC Background"
          fill
          className="object-cover opacity-70"
        />
        <h1 className="absolute text-4xl md:text-6xl font-bold text-white text-center px-4">
          ZIC
        </h1>
      </section>

      {/* Project Description */}
      <section className="max-w-5xl mx-auto py-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
         My Contribution

        </h2>
        <p className="text-gray-700 leading-relaxed text-lg mb-6">
          For this project of ZIC Lubricant, I worked as the Second Assistant Director. During pre-production, I supported the director and first assistant director by gathering references for the shots. On set, I coordinated with the team to manage the execution efficiently. I also handled logging, meticulously noting every perfect take in the logbook. This role allowed me to contribute to both the creative and organizational aspects of the production.
        </p>
      </section>

      

      {/* Car Section */}
      <section className="max-w-5xl mx-auto pb-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Car DVC</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
          <Image src={carImage1} alt="Car Image 1" className="h-[300px] rounded-lg shadow-lg" />
          <Image src={carImage2} alt="Car Image 2" className="rounded-lg h-[300px] shadow-lg" />
        </div>
        <Link
          href="https://www.instagram.com/reel/DQbf31sAO6p/?igsh=dW11d2h5YTdnYzVj" // Replace with your Car video link
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Watch 
        </Link>
      </section>
      {/* Bike Section */}
      <section className="max-w-5xl mx-auto py-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Bike DVC</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
          <Image src={bikeImage1} alt="Bike Image 1" className=" h-[300px] rounded-lg shadow-lg" />
          <Image src={bikeImage2} alt="Bike Image 2" className="h-[300px] rounded-lg shadow-lg" />
        </div>
        <Link
          href="https://www.instagram.com/reel/DRd5mr7idbD/?igsh=MXB5eDY3YXdsODMyOA%3D%3D" // Replace with your Bike video link
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Watch 
        </Link>
      </section>

      {/* Truck Section */}
      <section className="max-w-5xl mx-auto py-10 ">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Truck DVC</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
          <Image src={truckImage1} alt="Truck Image 1" className="rounded-lg h-[300px] shadow-lg" />
          <Image src={truckImage2} alt="Truck Image 2" className="rounded-lg h-[300px] shadow-lg" />
        </div>
        <Link
          href="https://www.instagram.com/reel/DRl7bCgFRkk/" // Replace with your Truck video link
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Watch 
        </Link>
      </section>

      <Footer />
    </div>
  );
}