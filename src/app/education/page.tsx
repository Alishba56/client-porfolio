"use client"

import { Footer } from "@/src/components/footer"
import { Navbar } from "@/src/components/navbar"
import { motion } from "framer-motion"
import { School } from "lucide-react"

const educationData = [
  {
    institution: "St Lawrence's High School",
    degree: "Matriculation",
    duration: "2008 – 2019",
    description:
      "Completed matriculation with strong academic foundation while actively participating in arts and creative activities that nurtured storytelling and teamwork skills.",
  },
  {
    institution: "St Patrick's College",
    degree: "Intermediate",
    duration: "2020 – 2022",
    description:
      "Focused on communication, analysis, and collaborative projects, strengthening creative thinking and problem-solving abilities.",
  },
  {
    institution: "Institute of Business Management",
    degree: "Bachelor's in Media Studies",
    duration: "2023 – Present",
    description:
      "Pursuing Media Studies with emphasis on cinematography and photography, gaining hands-on experience in visual storytelling, lighting, and post-production.",
  },
]

export default function EducationPage() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      <Navbar />

      <section className="relative py-28 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Education
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              My academic journey shaped through learning, creativity, and media exploration.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">

            {/* Center Line */}
            <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-gray-300 via-gray-200 to-transparent hidden md:block"></div>

            <div className="space-y-24">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0
                      ? "md:justify-start"
                      : "md:justify-end"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-6 hidden md:flex">
                    <div className="h-3.5 w-3.5 rounded-full bg-gray-900"></div>
                  </div>

                  {/* Card */}
                  <div className="md:w-[45%] relative group">
                    <div className="relative rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm hover:shadow-md transition">
                      
                      <div className="flex items-center gap-4 mb-4">
                        <School className="h-7 w-7 text-gray-700" />
                        <span className="text-sm text-gray-500">
                          {edu.duration}
                        </span>
                      </div>

                      <h3 className="text-lg font-semibold text-gray-900">
                        {edu.institution}
                      </h3>

                      <p className="text-gray-700 font-medium mt-1">
                        {edu.degree}
                      </p>

                      <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                        {edu.description}
                      </p>

                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
