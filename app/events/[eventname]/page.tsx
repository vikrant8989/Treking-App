"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import {
  Mountain,
  Clock,
  Ruler,
  MapPin,
  ArrowUp,
  Tent,
  Users,
  Navigation,
  ScrollText,
  LocateIcon,
  Calendar,
  Route,
  Map,
  Flower,
  Sun,
  Leaf,
  Snowflake,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { treks } from "../data/trek";
import Carousel from "@/components/ui/carousel";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { galleryImages } from "../data/gallery-image";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { use, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "An unforgettable trek! The trails were scenic, and reaching the summit was the most rewarding experience. Can't wait for my next adventure!",
      name: "Aarav Mehta",
      designation: "Adventure Enthusiast",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The trek was challenging yet exhilarating! The panoramic views from the top were absolutely breathtaking. Highly recommend it!",
      name: "Sophia Patel",
      designation: "Nature Photographer",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "One of the best treks I’ve ever been on! The guides were excellent, and the journey was filled with stunning landscapes and peaceful moments.",
      name: "Rohan Verma",
      designation: "Fitness Coach",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Camping under the stars after a long trek was a surreal experience. The trail was well-marked, and the whole journey felt magical!",
      name: "Emily Carter",
      designation: "Backpacker & Explorer",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "A perfect blend of adventure and tranquility! The sunrise at the peak was mesmerizing. Definitely a must-do trek!",
      name: "Neha Sharma",
      designation: "Travel Blogger",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return <AnimatedTestimonials testimonials={testimonials} />;
}


const galleryTabs = [
  { value: "spring", label: "Spring", icon: Flower },
  { value: "summer", label: "Summer", icon: Sun },
  { value: "autumn", label: "Autumn", icon: Leaf },
  { value: "winter", label: "Winter", icon: Snowflake },
];

export default function Page({ params }: { params: Promise<{ eventname: string }> }) {
  const { eventname } = use(params); 
  const trekData: any = treks.find((trek) => trek.slug == eventname);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  console.log(trekData, "dddd");
  if (!trekData) {
    return <div>No trek Data exists</div>;
  }
  return (
    <div className="bg-background">
      <div className="relative w-full">
        <Carousel slides={trekData.heroImage} />
        <div className="absolute bottom-4 right-10 space-x-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={() =>
              document
                .getElementById("trek-info")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <ScrollText className="w-4 h-4 mr-2" />
            Trek Information
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={() =>
              document
                .getElementById("photo-gallery")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <LocateIcon className="w-4 h-4 mr-2" />
            Photo Gallery
          </Button>
        </div>
      </div>

      <div className="mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <Mountain className="w-8 h-8 text-primary" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                TREK DIFFICULTY
              </p>
              <p className="font-semibold">{trekData.difficulty}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-8 h-8 text-primary" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                TREK DURATION
              </p>
              <p className="font-semibold">{trekData.duration}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Ruler className="w-8 h-8 text-primary" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                TOTAL TREK DISTANCE
              </p>
              <p className="font-semibold">{trekData.distance}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-8 h-8 text-primary" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                BASECAMP
              </p>
              <p className="font-semibold">{trekData.basecamp}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ArrowUp className="w-8 h-8 text-primary" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                HIGHEST ALTITUDE
              </p>
              <p className="font-semibold">{trekData.altitude}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Tent className="w-8 h-8 text-primary" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                ACCOMMODATION TYPE
              </p>
              <p className="font-semibold">{trekData.accommodation}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Users className="w-8 h-8 text-primary" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                SUITABLE FOR
              </p>
              <p className="font-semibold">{trekData.ageRange}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Navigation className="w-8 h-8 text-primary" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">
                PICKUP POINT
              </p>
              <p className="font-semibold">{trekData.pickupPoint}</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold">{trekData.subtitle}</h2>
            <div className="prose prose-gray max-w-none dark:prose-invert">
              {trekData.description
                .split("\n\n")
                .map((paragraph: any, idx: any) => (
                  <p key={idx}>{paragraph}</p>
                ))}
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">
                Trekkers share why they loved {trekData.title}
              </h2>
              <div className="grid gap-6">
                <AnimatedTestimonialsDemo />
              </div>
            </div>
          </div>

          <div className="md:col-span-1">
            <Card className="p-6 sticky top-4">
              <div className="space-y-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-3xl font-bold">₹{trekData.price}</span>
                  <span className="text-sm text-muted-foreground">
                    + 5% GST
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  + Rs 210 Trek Insurance
                </p>
                <Button className="w-full">Book Now</Button>
                <div className="space-y-2">
                  <a
                    href="#"
                    className="text-sm text-primary hover:underline block"
                  >
                    Inclusions and Exclusions
                  </a>
                  <a
                    href="#"
                    className="text-sm text-primary hover:underline block"
                  >
                    Scholarships & waivers
                  </a>
                  <a
                    href="#"
                    className="text-sm text-primary hover:underline block"
                  >
                    Cancellation policy
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <section id="photo-gallery" className="mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6 text-left">Photo Gallery</h2>
        <Tabs defaultValue={galleryTabs[0]?.value || "tab-1"}>
          <ScrollArea>
            <TabsList className="mb-3 h-auto -space-x-px bg-background p-0 shadow-sm shadow-black/5 rtl:space-x-reverse flex justify-center">
              {galleryTabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="relative overflow-hidden rounded-none border border-border py-2 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 first:rounded-s last:rounded-e data-[state=active]:bg-muted data-[state=active]:after:bg-primary"
                >
                  {tab.icon && (
                    <tab.icon
                      className="-ms-0.5 me-1.5 opacity-60"
                      size={16}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  )}
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
          {galleryTabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {galleryImages[tab.value as keyof typeof galleryImages]?.map(
                  (image, i) => (
                    <Image
                      key={i}
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      width={300}
                      height={225}
                      className="rounded-lg object-cover w-full aspect-[4/3] cursor-pointer"
                      onClick={() => setSelectedImage(image.src)}
                    />
                  )
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative flex items-center justify-center">
              <motion.img
                src={selectedImage}
                alt="Selected Preview"
                className="rounded-lg object-cover 
                  w-[90vw] h-auto sm:w-[80vw] sm:h-[60vh] 
                  md:w-[70vw] md:h-[70vh] 
                  lg:w-[60vw] lg:h-[80vh] 
                  aspect-[4/3] sm:aspect-[16/9] max-w-full max-h-screen"
              />

              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 p-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-colors"
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section id="trek-info" className="mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Complete Trek Information</h2>
        <div className="prose prose-gray max-w-none dark:prose-invert mb-6">
          <p className="text-lg italic">
            We have always wanted trekkers to be well-informed before they go on
            a Himalayan trek. Knowledge is the difference between a safe trek
            and a dangerous one. It&lsquo;s also the difference between a
            wholesome experience and a superficial experience.
          </p>
          <p>
            Use this section to learn about the {eventname}. It has in-depth
            information about each day of the trek, what to expect, and how you
            need to prepare for it. Many years of expertise have gone into this
            content. Trekkers find these extremely useful.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="itinerary">
            <AccordionTrigger className="flex gap-4 text-left">
              <Calendar className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Quick Itinerary</h3>
                <p className="text-sm text-muted-foreground">
                  Get your trek plan
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-14">
              {/* Add itinerary content here */}
              <p>Detailed day-by-day itinerary of the trek would go here.</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="daily-plan">
            <AccordionTrigger className="flex gap-4 text-left">
              <Route className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold">How Does Each Day Look</h3>
                <p className="text-sm text-muted-foreground">
                  Complete day-wise guide with photos
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-14">
              {/* Add daily plan content here */}
              <p>
                Detailed description of each day&apos;s activities, challenges,
                and sights would go here.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="difficulty">
            <AccordionTrigger className="flex gap-4 text-left">
              <Mountain className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold">How Difficult Is {eventname}?</h3>
                <p className="text-sm text-muted-foreground">
                  Why fitness is important for the trek
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-14">
              {/* Add difficulty content here */}
              <p>
                Explanation of the trek&apos;s difficulty level and fitness
                requirements would go here.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="best-time">
            <AccordionTrigger className="flex gap-4 text-left">
              <Calendar className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold">Best Time To Do {eventname}</h3>
                <p className="text-sm text-muted-foreground">
                  Time your Trek well
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-14">
              {/* Add best time content here */}
              <p>
                Information about the best seasons and months to undertake this
                trek would go here.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="travel-plan">
            <AccordionTrigger className="flex gap-4 text-left">
              <Map className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold">
                  How to Plan Your Travel for the {eventname}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Plan your travel with this
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pl-14">
              {/* Add travel plan content here */}
              <p>
                Detailed travel planning information, including transportation
                options and logistics, would go here.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
}
