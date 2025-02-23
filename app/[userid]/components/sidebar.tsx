/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {
  User2,
  Users,
  Calendar,
  Map,
  Settings,
  HelpCircle,
  LogOut,
  Trash2,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const menuItems = [
  { icon: User2, text: "My Profile", href: "/profile" },
  { icon: Users, text: "My Communities", href: "/communities" },
  { icon: Calendar, text: "My Events", href: "/events" },
  { icon: Map, text: "My Treks", href: "/treks" },
  { icon: Settings, text: "Settings", href: "/settings" },
  { icon: HelpCircle, text: "Support", href: "/support" },
];

export default function Sidebar() {
  return (
    <div className="bg-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out border-r">
      <div className="px-4">
        <div className="flex items-center space-x-3">
          <Avatar className="cursor-pointer">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-lg font-semibold">John Doe</h2>
            <p className="text-sm text-gray-500">john@example.com</p>
          </div>
        </div>
      </div>
      <nav className="space-y-1 px-3">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-purple-50 hover:text-purple-600 transition-colors"
          >
            <item.icon className="w-5 h-5" />
            <span>{item.text}</span>
          </Link>
        ))}
      </nav>
      <div className="px-4 mt-auto space-y-2">
        <button className="flex items-center space-x-3 px-3 py-2 w-full rounded-lg text-gray-600 hover:bg-purple-50 hover:text-purple-600 transition-colors">
          <LogOut className="w-5 h-5" />
          <span>Log out</span>
        </button>
        <button className="flex items-center space-x-3 px-3 py-2 w-full rounded-lg text-red-600 hover:bg-red-50 transition-colors">
          <Trash2 className="w-5 h-5" />
          <span>Delete account</span>
        </button>
      </div>
    </div>
  );
}
