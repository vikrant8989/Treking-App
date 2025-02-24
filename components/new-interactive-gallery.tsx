/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { HoverButton } from "./ui/hover-button";
import { CheckCircle, Flame, MapPin, Zap } from "lucide-react";
import { useRouter } from "next/navigation";
import { Badge } from "./ui/badge";
const mediaItems = [
  {
    id: 1,
    type: "image",
    title: "Ladakh Adventure",
    desc: "Breathtaking high-altitude landscapes.",
    url: "./ladakh.jpg",
    span: "md:col-span-1 md:row-span-1 sm:col-span-1 sm:row-span-1",
    difficulty: "Challenging",
  },
  {
    id: 2,
    type: "image",
    title: "Goa Beach Vibes",
    desc: "Golden sands and blue waves.",
    url: "./goa.jpg",
    span: "md:col-span-1 md:row-span-1 col-span-1 sm:col-span-1 sm:row-span-1",
    difficulty: "Easy",
  },
  {
    id: 3,
    type: "image",
    title: "Coorg Coffee Trails",
    desc: "Lush greenery and serene plantations.",
    url: "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb",
    span: "md:col-span-1 md:row-span-1 sm:col-span-1 sm:row-span-1",
    difficulty: "Moderate",
  },
  {
    id: 4,
    type: "image",
    title: "Rajasthan Safari",
    desc: "Golden dunes and vibrant culture.",
    url: "./desert.jpg",
    span: "md:col-span-1 md:row-span-1 sm:col-span-1 sm:row-span-1",
    difficulty: "Moderate",
  },
  {
    id: 5,
    type: "video",
    title: "Varanasi Ghats",
    desc: "A spiritual journey along the Ganges.",
    url: "https://cdn.pixabay.com/video/2020/05/25/40130-424930032_large.mp4",
    span: "md:col-span-1 md:row-span-1 sm:col-span-1 sm:row-span-1",
    difficulty: "Easy",
  },
  {
    id: 6,
    type: "image",
    title: "Andaman Islands",
    desc: "Crystal-clear waters and coral reefs.",
    url: "./andaman.jpg",
    span: "md:col-span-1 md:row-span-1 sm:col-span-1 sm:row-span-1",
    difficulty: "Moderate",
  },
  {
    id: 7,
    type: "video",
    title: "Manali Snowfall",
    desc: "A winter wonderland experience.",
    url: "https://cdn.pixabay.com/video/2020/07/30/46026-447087782_large.mp4",
    span: "md:col-span-1 md:row-span-1 sm:col-span-1 sm:row-span-1",
    difficulty: "Challenging",
  },
];

const difficultyStyles : any = {
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
  const router = useRouter();
  return (
    <div className="container mx-auto px-4 pr-6 py-8 ">
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
        {items.map((item, index) => (
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
            <MediaItem item={item} className="absolute inset-0 w-full h-full" />

            {/* Difficulty Badge positioned at top-right with dynamic colors & icons */}
            <Badge
              className={`absolute top-2 right-2 text-white px-2 py-1 rounded-md flex items-center ${
                difficultyStyles[item.difficulty]?.bg
              }`}
            >
              {difficultyStyles[item.difficulty]?.icon}
              {item.difficulty}
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
        ))}
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
}
