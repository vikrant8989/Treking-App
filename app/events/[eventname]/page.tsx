/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Mountain,
  Clock,
  Ruler,
  MapPin,
  ArrowUp,
  Tent,
  Users,
  Navigation,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { notFound } from "next/navigation";
import { treks } from "../data/trek";
import Carousel from "@/components/ui/carousel";

interface PageProps {
  params: {
    eventname: string;
  };
}

export default function TrekDetails({ params }: PageProps) {
  const eventName = params.eventname;
  console.log(eventName, "eve");
  const trekData: any = treks.find((trek) => trek.slug == eventName);
  console.log(trekData, "dddd");
  if (!trekData) {
    <div>loading..</div>;
  }
  return (
    <div className="min-h-screen bg-background">
      <div className="relative h-[60vh] w-full">
        <Carousel slides={trekData.heroImage} />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
                {trekData.reviews.map((review: any, idx: any) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-lg border">
                    <Image
                      src={review.image || "/placeholder.svg"}
                      alt={review.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">{review.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {review.location}
                      </p>
                      <p className="mt-2">{review.text}</p>
                      <button className="text-primary text-sm mt-2">
                        Read More
                      </button>
                    </div>
                  </div>
                ))}
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
    </div>
  );
}
