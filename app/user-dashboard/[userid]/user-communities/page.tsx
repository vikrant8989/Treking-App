import Image from "next/image"
import { Plus } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"

export default function MySocieties() {
  return (
    <div className="mx-auto p-6 bg-white">
      <h1 className="text-3xl font-bold mb-6">Societies</h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Starry Night Card */}
        <Card className="p-6 flex flex-col items-center">
          <div className="relative w-32 h-32 rounded-full overflow-hidden mb-3">
            <Image
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
              alt="Starry Night"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="font-medium text-center">Starry Night</h3>
        </Card>

        {/* Night Sky Card */}
        <Card className="p-6 flex flex-col items-center">
          <div className="relative w-32 h-32 rounded-full overflow-hidden mb-3">
            <Image
              src="https://images.unsplash.com/photo-1506318137071-a8e063b4bec0"
              alt="Night Sky"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="font-medium text-center">Night Sky</h3>
        </Card>

        {/* Mountain Diaries Card */}
        <Card className="p-6 flex flex-col items-center">
          <div className="relative w-32 h-32 rounded-full overflow-hidden mb-3">
            <Image
              src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5"
              alt="Mountain Diaries"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="font-medium text-center">Mountain Diaries</h3>
        </Card>

        {/* Starry Night Card (Duplicate) */}
        <Card className="p-6 flex flex-col items-center">
          <div className="relative w-32 h-32 rounded-full overflow-hidden mb-3">
            <Image
              src="https://images.unsplash.com/photo-1519681393784-d120267933ba"
              alt="Starry Night"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="font-medium text-center">Starry Night</h3>
        </Card>

        {/* Night Sky Card (Duplicate) */}
        <Card className="p-6 flex flex-col items-center">
          <div className="relative w-32 h-32 rounded-full overflow-hidden mb-3">
            <Image
              src="https://images.unsplash.com/photo-1506318137071-a8e063b4bec0"
              alt="Night Sky"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="font-medium text-center">Night Sky</h3>
        </Card>

        {/* Join More Card */}
        <Card className="p-6 flex flex-col items-center bg-purple-50">
          <div className="relative w-32 h-32 rounded-full bg-white flex items-center justify-center mb-3">
            <Plus className="h-10 w-10 text-purple-500" />
            <div className="absolute top-2 right-2">
              <div className="flex gap-0.5">
                <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                <div className="w-1 h-1 rounded-full bg-gray-400"></div>
                <div className="w-1 h-1 rounded-full bg-gray-400"></div>
              </div>
            </div>
          </div>
          <h3 className="font-medium text-center">Join More</h3>
        </Card>
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

