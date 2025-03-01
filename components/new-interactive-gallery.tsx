/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { HoverButton } from "./ui/hover-button";
import { CheckCircle, Flame, Filter, MapPin, Search, Zap } from "lucide-react";
import { useRouter } from "next/navigation";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

// Extended media items with activity type
const mediaItems = [
  {
    id: 1,
    type: "image",
    title: "Ladakh Adventure",
    desc: "Breathtaking high-altitude landscapes.",
    url: "./ladakh.jpg",
    span: "md:col-span-1 md:row-span-1 sm:col-span-1 sm:row-span-1",
    difficulty: "Challenging",
    activity: "Trekking",
  },
  {
    id: 2,
    type: "image",
    title: "Goa Beach Vibes",
    desc: "Golden sands and blue waves.",
    url: "./goa.jpg",
    span: "md:col-span-1 md:row-span-1 col-span-1 sm:col-span-1 sm:row-span-1",
    difficulty: "Easy",
    activity: "Beach",
  },
  {
    id: 3,
    type: "image",
    title: "Coorg Coffee Trails",
    desc: "Lush greenery and serene plantations.",
    url: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb",
    span: "md:col-span-1 md:row-span-1 sm:col-span-1 sm:row-span-1",
    difficulty: "Moderate",
    activity: "Hiking",
  },
  {
    id: 4,
    type: "image",
    title: "Rajasthan Safari",
    desc: "Golden dunes and vibrant culture.",
    url: "./desert.jpg",
    span: "md:col-span-1 md:row-span-1 sm:col-span-1 sm:row-span-1",
    difficulty: "Moderate",
    activity: "Safari",
  },
  {
    id: 5,
    type: "video",
    title: "Varanasi Ghats",
    desc: "A spiritual journey along the Ganges.",
    url: "https://cdn.pixabay.com/video/2020/05/25/40130-424930032_large.mp4",
    span: "md:col-span-1 md:row-span-1 sm:col-span-1 sm:row-span-1",
    difficulty: "Easy",
    activity: "Cultural",
  },
  {
    id: 6,
    type: "image",
    title: "Andaman Islands",
    desc: "Crystal-clear waters and coral reefs.",
    url: "./andaman.jpg",
    span: "md:col-span-1 md:row-span-1 sm:col-span-1 sm:row-span-1",
    difficulty: "Moderate",
    activity: "Snorkeling",
  },
  {
    id: 7,
    type: "video",
    title: "Manali Snowfall",
    desc: "A winter wonderland experience.",
    url: "https://cdn.pixabay.com/video/2020/07/30/46026-447087782_large.mp4",
    span: "md:col-span-1 md:row-span-1 sm:col-span-1 sm:row-span-1",
    difficulty: "Challenging",
    activity: "Trekking",
  },
];

const difficultyStyles: any = {
  Easy: { bg: "bg-green-600", icon: <CheckCircle className="w-4 h-4 mr-1" /> },
  Moderate: { bg: "bg-yellow-600", icon: <Zap className="w-4 h-4 mr-1" /> },
  Challenging: { bg: "bg-red-600", icon: <Flame className="w-4 h-4 mr-1" /> },
};

const MediaItem = ({
  item,
  className,
  onClick,
}: {
  item: MediaItemType;
  className?: string;
  onClick?: () => void;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isBuffering, setIsBuffering] = useState(true);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "50px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsInView(entry.isIntersecting);
      });
    }, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let mounted = true;

    const handleVideoPlay = async () => {
      if (!videoRef.current || !isInView || !mounted) return;

      try {
        if (videoRef.current.readyState >= 3) {
          setIsBuffering(false);
          await videoRef.current.play();
        } else {
          setIsBuffering(true);
          await new Promise((resolve) => {
            if (videoRef.current) {
              videoRef.current.oncanplay = resolve;
            }
          });
          if (mounted) {
            setIsBuffering(false);
            await videoRef.current.play();
          }
        }
      } catch (error) {
        console.warn("Video playback failed:", error);
      }
    };

    if (isInView) {
      handleVideoPlay();
    } else if (videoRef.current) {
      videoRef.current.pause();
    }

    return () => {
      mounted = false;
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.removeAttribute("src");
        videoRef.current.load();
      }
    };
  }, [isInView]);

  if (item.type === "video") {
    return (
      <div className={`${className} relative overflow-hidden`}>
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          onClick={onClick}
          playsInline
          muted
          loop
          preload="auto"
          style={{
            opacity: isBuffering ? 0.8 : 1,
            transition: "opacity 0.2s",
            transform: "translateZ(0)",
            willChange: "transform",
          }}
        >
          <source src={item.url} type="video/mp4" />
        </video>
        {isBuffering && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/10">
            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          </div>
        )}
      </div>
    );
  }

  return (
    <img
      src={item.url || "/placeholder.svg"}
      alt={item.title}
      className={`${className} object-cover`}
      onClick={onClick}
      loading="lazy"
      decoding="async"
    />
  );
};

// Main Gallery Component
export default function BentoGallery() {
  const [items, setItems] = useState(mediaItems);
  const [filteredItems, setFilteredItems] = useState(mediaItems);
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [activityFilter, setActivityFilter] = useState("");
  const router = useRouter();

  const activities = Array.from(
    new Set(mediaItems.map((item) => item.activity))
  );
  const activityGroups = activities.reduce((acc, activity) => {
    const firstLetter = activity.charAt(0).toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(activity);
    return acc;
  }, {} as Record<string, string[]>);

  // Get unique first letters for activity tabs
  const activityLetters = Object.keys(activityGroups).sort();

  // Apply filters
  useEffect(() => {
    let result = mediaItems;

    // Apply difficulty filter
    if (activeFilter !== "all") {
      result = result.filter((item) => item.difficulty === activeFilter);
    }

    // Apply activity filter
    if (activityFilter) {
      result = result.filter((item) => item.activity === activityFilter);
    }

    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        (item) =>
          item.title.toLowerCase().includes(term) ||
          item.activity.toLowerCase().includes(term) ||
          item.desc.toLowerCase().includes(term)
      );
    }

    setFilteredItems(result);
  }, [activeFilter, searchTerm, activityFilter]);

  // Reset activity filter
  const clearActivityFilter = () => {
    setActivityFilter("");
  };

  return (
    <div className="container mx-auto px-4 pr-6 py-8">
      <div className="mb-8 text-center">
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent 
                     bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900
                     dark:from-white dark:via-gray-200 dark:to-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Explore Breathtaking Destinations
        </motion.h1>
        <motion.p
          className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Discover amazing places across India
        </motion.p>
      </div>

      {/* Filter Section */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-col justify-between md:flex-row gap-4 mb-4">
          {/* Search Bar */}
          <div className="relative flex-grow max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search events..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Difficulty Filter */}
          <div className="flex gap-2 items-center">
            <Filter className="h-4 w-4 text-gray-500 hidden sm:flex" />
            <span className="text-sm font-medium hidden sm:inline">
              Difficulty:
            </span>

            <Button
              variant={activeFilter === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter("all")}
              className="text-xs"
            >
              All
            </Button>
            <Button
              variant={activeFilter === "Easy" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter("Easy")}
              className="text-xs bg-green-600 hover:bg-green-700 text-white"
            >
              <CheckCircle className="w-3 h-3 mr-1" />
              Easy
            </Button>
            <Button
              variant={activeFilter === "Moderate" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter("Moderate")}
              className="text-xs bg-yellow-600 hover:bg-yellow-700 text-white"
            >
              <Zap className="w-3 h-3 mr-1" />
              Moderate
            </Button>
            <Button
              variant={activeFilter === "Challenging" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter("Challenging")}
              className="text-xs bg-red-600 hover:bg-red-700 text-white"
            >
              <Flame className="w-3 h-3 mr-1" />
              Challenging
            </Button>
          </div>
        </div>

        {/* Activity Type Filter */}
        <div className="mt-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-medium">Activity Type:</span>
            {activityFilter && (
              <Badge className="bg-primary">
                {activityFilter}
                <button
                  className="ml-2 hover:text-gray-300"
                  onClick={clearActivityFilter}
                >
                  ×
                </button>
              </Badge>
            )}
          </div>

          <Tabs defaultValue={activityLetters[0]} className="w-full">
            <TabsList className="mb-2 flex flex-wrap h-auto">
              {activityLetters.map((letter) => (
                <TabsTrigger key={letter} value={letter} className="text-sm">
                  {letter}
                </TabsTrigger>
              ))}
            </TabsList>

            {activityLetters.map((letter) => (
              <TabsContent key={letter} value={letter} className="mt-0">
                <div className="flex flex-wrap gap-2">
                  {activityGroups[letter].map((activity) => (
                    <Button
                      key={activity}
                      variant={
                        activityFilter === activity ? "default" : "outline"
                      }
                      size="sm"
                      onClick={() => setActivityFilter(activity)}
                      className="text-xs"
                    >
                      {activity}
                    </Button>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </motion.div>

      {/* Results Count */}
      <div className="mb-4 text-sm text-gray-500">
        Showing {filteredItems.length} of {mediaItems.length} destinations
      </div>

      {/* Gallery Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-3 auto-rows-[200px]"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layoutId={`media-${item.id}`}
              className="relative overflow-hidden rounded-xl cursor-pointer transition-all duration-500 ease-in-out"
              variants={{
                hidden: { y: 50, scale: 0.9, opacity: 0 },
                visible: {
                  y: 0,
                  scale: 1,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    stiffness: 350,
                    damping: 25,
                    delay: index * 0.05,
                  },
                },
              }}
            >
              <MediaItem
                item={item}
                className="absolute inset-0 w-full h-full"
              />

              {/* Difficulty Badge */}
              <Badge
                className={`absolute top-2 right-2 text-white px-2 py-1 rounded-md flex items-center ${
                  difficultyStyles[item.difficulty]?.bg
                }`}
              >
                {difficultyStyles[item.difficulty]?.icon}
                {item.difficulty}
              </Badge>

              {/* Activity Badge */}
              <Badge className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded-md">
                {item.activity}
              </Badge>

              <motion.div
                className="absolute inset-0 flex flex-col justify-end p-4"
                transition={{ duration: 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <HoverButton
                  onClick={() =>
                    router.push(
                      `/events/${item.title.toLowerCase().replace(/ /g, "-")}`
                    )
                  }
                >
                  <div className="flex items-center text-white space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{item.title} | Explore</span>
                  </div>
                </HoverButton>
              </motion.div>
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center py-10 text-gray-500">
            No destinations match your filters. Try adjusting your criteria.
          </div>
        )}
      </motion.div>
    </div>
  );
}

// Types
interface MediaItemType {
  id: number;
  type: string;
  title: string;
  desc: string;
  url: string;
  span: string;
  difficulty: string;
  activity: string;
}
