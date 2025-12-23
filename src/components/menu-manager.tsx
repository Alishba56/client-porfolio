"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { Badge } from "./ui/badge";

// Types
type MenuItem = {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  video?: string; // optional
  link: string;
};

// Initial Data
const INITIAL_MENU: MenuItem[] = [
  {
    id: "1",
    name: "Kashmir Waadi Banaspati ",
    description:
      "I worked as an Assistant Producer on the Kashmir Waadi Banaspati .",
    category: "TVC/DVC Projects",
    image: "/khasmirbansapati.jpeg",
    // ❌ NO VIDEO → image hi rahegi
    link: "/kashmir",
  },
  {
    id: "2",
    name: " Zic lubricant",
    description:
      "Worked as Second Assistant Director",
    category: "TVC/DVC Projects",
    image: "/zic.jpeg",
    link: "/zic",
  },
  {
    id: "3",
    name: "Abdullah Shah Ghazi",
    description:
      "A soulful photographic exploration of the iconic shrine.",
    category: "Photography",
    image: "/abdullah-shah.png",
    link: "https://std34267.my.canva.site/",
  },
  {
    id: "4",
    name: "The Last Voice",
    description:
      "for last voice \"Late at night, a music composer hears mysterious whispers through his headphones and realizes he is not alone in the room\"",
    category: "Filmmaking",
    image: "/thelast.jpeg",
    // video: "/last-voice.mp4", // ✅
    link: "https://drive.google.com/file/d/14sZKrkkoFjoLtYlbOuA_DPgaVM9SxskR/view",
  },
];

const CATEGORIES = ["All", "Filmmaking", "Photography", "TVC/DVC Projects"];

export function MenuManager() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? INITIAL_MENU
      : INITIAL_MENU.filter((item) => item.category === activeCategory);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">

        {/* Categories */}
        <div className="flex justify-center mb-12">
          <div className="flex gap-1 p-1 bg-gray-200 dark:bg-gray-800 rounded-xl">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-semibold rounded-lg ${
                  activeCategory === category
                    ? "bg-white dark:bg-gray-700 shadow"
                    : "text-gray-600 dark:text-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredItems.map((item) => {
            const showVideo =
              hoveredId === item.id &&
              item.video &&
              item.video.endsWith(".mp4");

            return (
              <motion.div
                key={item.id}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
              >
                {/* Image / Video */}
                <div className="relative h-56 overflow-hidden">
                  <AnimatePresence>
                    {showVideo ? (
                      <motion.video
                        key="video"
                        src={item.video}
                        autoPlay
                        muted
                        loop
                        className="absolute inset-0 w-full h-full object-cover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    ) : (
                      <motion.img
                        key="image"
                        src={item.image}
                        alt={item.name}
                        className="absolute inset-0 w-full h-full object-cover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}
                  </AnimatePresence>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col">
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>

                  <Badge variant="outline" className="w-fit mb-4">
                    {item.category}
                  </Badge>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                    {item.description}
                  </p>

                  <Link href={item.link}>
                    <Button variant="ghost" size="sm" className="flex gap-2">
                      Details <ExternalLink className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
