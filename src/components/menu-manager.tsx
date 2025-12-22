"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import Image from "next/image";
import { Badge } from "./ui/badge";

// Types
type MenuItem = {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  links?: {
    label: string;
    url: string;
  }[];
};

// Initial Data
const INITIAL_MENU: MenuItem[] = [
  {
    id: "1",
    name: "Kashmir Waadi Banaspati Cooking Oil",
    description:
      "I worked as an Assistant Producer on the Kashmir Waadi Banaspati Cooking Oil project, representing Stimulus Production House as part of the Stimulus team.",
    category: "TV Commercial",
    image: "/khasmirbansapati.jpeg",
    links: [
      {
        label: "Watch Reel",
        url: "https://www.instagram.com/reel/DR7J-w9k6Lx/",
      },
     
    ],
  },
  {
    id: "2",
    name: "ZIC DVC",
    description:
      "Worked as Second Assistant Director, handling coordination, logging, and on-set execution.",
    category: "TV Commercial",
    image: "/Zic.png",
    links: [
      {
        label: "Bike Reel",
        url: "https://www.instagram.com/reel/DRd5mr7idbD/?igsh=MXB5eDY3YXdsODMyOA%3D%3D",
      },
      {
        label: "Car Reel",
        url: "https://www.instagram.com/reel/DQbf31sAO6p/?igsh=dW11d2h5YTdnYzVj",
      },
      {
        label: "Truck  Reel",
        url: "https://www.instagram.com/reel/DRl7bCgFRkk/",
      },
    ],
  },
  {
    id: "3",
    name: "Eco-Friendly Living Campaign",
    description:
      "A dynamic campaign promoting sustainable living through strong visuals.",
    category: "Photography",
    image: "/makeing.mp4",
    links: [
      {
        label: "View Project",
        url: "https://example.com",
      },
      {
        label: "Gallery",
        url: "https://example.com/gallery",
      },
    ],
  },
];

const CATEGORIES = ["All", "Filmmaking", "Photography", "TV Commercial"];

export function MenuManager() {
  const [items] = useState<MenuItem[]>(INITIAL_MENU);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">

        {/* Categories */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-1 flex-wrap p-1 bg-gray-200 dark:bg-gray-800 rounded-xl">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${
                  activeCategory === category
                    ? "bg-white text-gray-900 shadow-md dark:bg-gray-700 dark:text-white"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden h-full flex flex-col">
                  <Image
                    src={item.image}
                    width={600}
                    height={400}
                    alt={item.name}
                    className="w-full h-56 object-cover"
                  />

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2">
                      {item.name}
                    </h3>

                    <Badge variant="outline" className="w-fit mb-4">
                      {item.category}
                    </Badge>

                    <p className="text-sm text-gray-600 dark:text-gray-400 flex-grow">
                      {item.description}
                    </p>

                    {/* Links */}
                    <div className="mt-6 flex flex-wrap gap-3">
                      {item.links?.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            variant="ghost"
                            size="sm"
                            className="flex items-center gap-2"
                          >
                            {link.label}
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
