"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ActivityCards() {
  const [showAll, setShowAll] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [maxActivities, setMaxActivities] = useState(8);
  useEffect(() => {
    const updateMaxActivities = () => {
      if (window.innerWidth < 640) {
        setMaxActivities(4);
      } else if (window.innerWidth < 1024) {
        setMaxActivities(6);
      } else {
        setMaxActivities(8);
      }
    };

    updateMaxActivities();
    window.addEventListener("resize", updateMaxActivities);
    return () => window.removeEventListener("resize", updateMaxActivities);
  }, []);

  const displayedActivities = showAll ? activities : activities.slice(0, maxActivities);

  return (
    <div className="w-full mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Explore Your interests</h2>
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-blue-600 text-sm hover:text-blue-700"
        >
          {showAll ? "Show less" : "View more"}
        </button>
      </div>

      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2"
      >
        <AnimatePresence>
          {displayedActivities.map((activity) => (
            <motion.div
              key={activity.id}
              layoutId={activity.id}
              onClick={() => setSelectedId(activity.id)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative w-40 h-40 rounded-lg overflow-hidden cursor-pointer"
            >
              <Image
                src={activity.imageUrl || "/placeholder.svg"}
                alt={activity.title}
                fill
                className="object-cover transition-transform hover:scale-105 duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-2">
                  <h3 className="text-white text-sm font-semibold truncate">
                    {activity.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedId(null)}
          >
            {activities.map((activity) => {
              if (activity.id === selectedId) {
                return (
                  <motion.div
                    key={activity.id}
                    layoutId={activity.id}
                    className="relative w-full max-w-3xl bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="relative h-[400px]">
                      <Image
                        src={activity.imageUrl || "/placeholder.svg"}
                        alt={activity.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1200px) 100vw, 1200px"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                    <div className="relative p-6 -mt-24">
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {activity.title}
                      </h3>
                      <p className="text-white/90 mb-4">{activity.shortDesc}</p>
                      <div className="bg-white dark:bg-neutral-800 p-2 rounded-xl mt-4">
                        <p className="text-gray-600 dark:text-gray-300">
                          {activity.description}
                        </p>
                        <div className="mt-6 flex gap-4">
                          {activity.features.map((feature, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-2"
                            >
                              <div className="w-2 h-2 rounded-full bg-green-500" />
                              <span className="text-sm text-gray-600 dark:text-gray-400">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedId(null)}
                      className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5"
                      >
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                      </svg>
                    </button>
                  </motion.div>
                );
              }
              return null;
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const activities = [
  {
    id: "biking",
    title: "Mountain Biking",
    imageUrl:
      "https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=1000&auto=format&fit=crop",
    shortDesc: "Experience thrilling mountain trails",
    description:
      "Challenge yourself with exciting mountain biking adventures through scenic trails and diverse terrains. Perfect for both beginners and experienced riders.",
    features: ["All skill levels", "Equipment provided", "Guided tours"],
  },
  {
    id: "rafting",
    title: "White Water Rafting",
    imageUrl:
      "https://images.unsplash.com/photo-1463694372132-6c267f6ba561?q=80&w=1000&auto=format&fit=crop",
    shortDesc: "Navigate through rushing rapids",
    description:
      "Experience the thrill of white water rafting through spectacular river canyons. Our expert guides ensure a safe and exciting adventure.",
    features: ["Professional guides", "Safety equipment", "All levels welcome"],
  },
  {
    id: "trekking",
    title: "Mountain Trekking",
    imageUrl:
      "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=1000&auto=format&fit=crop",
    shortDesc: "Explore scenic mountain paths",
    description:
      "Discover breathtaking views and challenge yourself with guided trekking adventures through pristine mountain landscapes.",
    features: [
      "Guided tours",
      "Various difficulty levels",
      "Beautiful scenery",
    ],
  },
  {
    id: "surfing",
    title: "Ocean Surfing",
    imageUrl:
      "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=1000&auto=format&fit=crop",
    shortDesc: "Catch waves in crystal waters",
    description:
      "Learn to surf or improve your skills with professional instructors in beautiful ocean locations. All equipment provided.",
    features: ["Expert instruction", "Equipment included", "All levels"],
  },
  {
    id: "camping",
    title: "Wilderness Camping",
    imageUrl:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=1000&auto=format&fit=crop",
    shortDesc: "Connect with nature overnight",
    description:
      "Experience the serenity of camping under the stars. Our guided camping trips provide all necessary equipment and expert knowledge.",
    features: ["Equipment provided", "Campfire meals", "Night sky viewing"],
  },
  {
    id: "hiking",
    title: "Trail Hiking",
    imageUrl:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1000&auto=format&fit=crop",
    shortDesc: "Explore scenic hiking trails",
    description:
      "Discover beautiful hiking trails with experienced guides. Perfect for nature enthusiasts and photography lovers.",
    features: ["Guided tours", "Photography spots", "Various trails"],
  },
  {
    id: "climbing",
    title: "Rock Climbing",
    imageUrl:
      "https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=1000&auto=format&fit=crop",
    shortDesc: "Scale natural rock faces",
    description:
      "Experience the thrill of rock climbing with professional instructors. All safety equipment and training provided.",
    features: ["Safety equipment", "Expert instruction", "All levels"],
  },
  {
    id: "kayaking",
    title: "Sea Kayaking",
    imageUrl:
      "https://images.unsplash.com/photo-1463694372132-6c267f6ba561?q=80&w=1000&auto=format&fit=crop",
    shortDesc: "Paddle through coastal waters",
    description:
      "Explore beautiful coastlines and marine life through guided kayaking adventures. Perfect for beginners and experienced paddlers.",
    features: ["Equipment provided", "Marine life viewing", "Guided tours"],
  },
  {
    id: "Rafting",
    title: "River Rafting",
    imageUrl:
      "https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=1000&auto=format&fit=crop",
    shortDesc: "Experience thrilling mountain trails",
    description:
      "Challenge yourself with exciting mountain biking adventures through scenic trails and diverse terrains. Perfect for both beginners and experienced riders.",
    features: ["All skill levels", "Equipment provided", "Guided tours"],
  }
];
