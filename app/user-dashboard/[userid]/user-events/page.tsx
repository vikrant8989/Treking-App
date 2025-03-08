/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image"
import { MoreHorizontal, Plus } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

export default function MySocials() {
  const socials = [
    {
      id: 1,
      title: "Dream",
      subtitle: "Starry Night",
      image: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=300&h=300&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Young Forever",
      subtitle: "Sky Night",
      image: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=300&h=300&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Young Forever",
      subtitle: "Sky Night",
      image: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=300&h=300&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Run",
      subtitle: "Mountain Diaries",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=300&h=300&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Young Forever",
      subtitle: "Sky Night",
      image: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=300&h=300&auto=format&fit=crop",
    },
  ]

  return (
    <div className="mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Socials</h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {socials.map((social) => (
          <SocialCard key={social.id} title={social.title} subtitle={social.subtitle} image={social.image} />
        ))}

        <JoinMoreCard />
      </div>

      <div className="mt-8 flex justify-center">
        <Tabs defaultValue="joined" className="w-full max-w-xs">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger
              value="joined"
              className="bg-purple-500 text-white data-[state=active]:bg-purple-500 data-[state=active]:text-white"
            >
              Joined
            </TabsTrigger>
            <TabsTrigger value="saved">Saved</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  )
}

function SocialCard({ title, subtitle, image } : any) {
  return (
    <div className="bg-white rounded-lg p-6 flex flex-col items-center shadow-sm border border-gray-100">
      <div className="relative w-full mb-4">
        <div className="absolute top-0 right-0">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
        <div className="w-24 h-24 rounded-full overflow-hidden mx-auto relative">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>
      </div>
      <h3 className="font-medium text-lg">{title}</h3>
      <p className="text-gray-500 text-sm">{subtitle}</p>
    </div>
  )
}

function JoinMoreCard() {
  return (
    <div className="bg-lavender-100 rounded-lg p-6 flex flex-col items-center shadow-sm border border-lavender-200">
      <div className="relative w-full mb-4">
        <div className="absolute top-0 right-0">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
        <div className="w-24 h-24 rounded-full overflow-hidden mx-auto bg-white flex items-center justify-center">
          <Plus className="h-8 w-8 text-indigo-500" />
        </div>
      </div>
      <h3 className="font-medium text-lg">Join More</h3>
      <p className="text-gray-500 text-sm invisible">Placeholder</p>
    </div>
  )
}

