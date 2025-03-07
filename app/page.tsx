"use client";

import Carousel from "@/components/ui/carousel";
import ActivityCards from "@/components/activity-cards";
import BentoGallery from "@/components/new-interactive-gallery";
import { TestimonialsSection } from "@/components/testimonials-with-marquee";
import { FloatingButtonExample } from "@/components/whatsapp-integration-ui";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";

const slideData = [
  {
    title: "Mystic Mountains",
    button: "Explore",
    src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Urban Dreams",
    button: "Explore",
    src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Neon Nights",
    button: "Explore",
    src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Desert Whispers",
    button: "Explore",
    src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const testimonials = [
  {
    author: {
      name: "Emma Thompson",
      handle: "@emmaexplores",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    },
    text: "This platform made planning my trekking adventure so much easier! The trail guides and community tips were incredibly helpful.",
    href: "https://twitter.com/emmaexplores",
  },
  {
    author: {
      name: "David Park",
      handle: "@davidhiker",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    text: "I found the perfect trekking routes thanks to this website. The real-time weather updates and gear recommendations were a lifesaver!",
    href: "https://twitter.com/davidhiker",
  },
  {
    author: {
      name: "Sofia Rodriguez",
      handle: "@sofiatreks",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    },
    text: "The best resource for trekkers! I discovered hidden trails and connected with fellow adventurers. Highly recommend it!",
  },
];

export default function Page() {
  return (
    <div>
      <Carousel slides={slideData} />
      <ActivityCards />
      <BentoGallery />
      <div className="w-[350px] sm:w-[350px]  md:w-[390px] lg:w-full">
        <TestimonialsSection
          title="Trusted by User worldwide"
          description="Hear from real users who have experienced the benefits of our platform firsthand."
          testimonials={testimonials}
        />
      </div>
      <div className="fixed bottom-4 right-4 z-50">
        <FloatingButtonExample />
      </div>
      <StackedCircularFooter />
    </div>
  );
}
