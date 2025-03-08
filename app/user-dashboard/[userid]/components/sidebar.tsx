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

const menuItems = [
  { icon: User2, text: "Profile", href: `/user-dashboard/${1}/user-profile`},
  { icon: Users, text: "Communities", href: `/user-dashboard/${1}/user-communities` },
  { icon: Calendar, text: "Events", href: `/user-dashboard/${1}/user-events` },
  { icon: Settings, text: "Settings", href: "/settings" },
  { icon: HelpCircle, text: "Support", href: "/support" },
];

export default function Sidebar() {
  return (
    <div className="bg-white shadow-md h-full w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out border-r">
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
