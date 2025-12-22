"use client";

import { Footer } from "@/src/components/footer";
import { Navbar } from "@/src/components/navbar";
import { motion } from "framer-motion";
import { School } from "lucide-react";

const educationData = [
  {
    institution: "St Lawrence's High School",
    degree: "Matriculation",
    duration: "2008 – 2019",
    description: "Completed matriculation with strong academic performance. Engaged in arts and media activities, building early skills in creativity, storytelling, and teamwork.",
  },
  {
    institution: "St Patrick's College",
    degree: "Intermediate",
    duration: "2020 – 2022",
    description: "Completed intermediate studies with focus on analytical and communication skills. Participated in creative projects, enhancing problem-solving, collaboration, and initiative.",
  },
  {
    institution: "Institute of Business Management",
    degree: "Bachelor's in Media Studies",
    duration: "2023 – Present",
    description: "Pursuing Media Studies with emphasis on cinematography and photography. Gained hands-on experience in composition, lighting, post-production, and visual storytelling projects.",
  },
];


export default function EducationPage() {
  return (
    <div>
     <Navbar />
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid justify-center lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight justify-center flex text-gray-900 dark:text-white sm:text-4xl">Education</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            My academic journey and the qualifications I've earned along the way.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl  grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-start justify-between"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative w-full">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative sm:px-7 px-1 py-6 h-[370px] sm:h-[280px]  bg-white dark:bg-gray-800 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                  <div className="flex-shrink-0 ">
                    <School className="h-8 w-8 mb-10 text-indigo-500" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-400">{edu.duration}</div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{edu.institution}</h3>
                    <p className="text-md font-medium text-indigo-500 dark:text-indigo-400">{edu.degree}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{edu.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
      <Footer />
    </div>
  );
}