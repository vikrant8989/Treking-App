"use client";

import type React from "react";
import { useState } from "react";
import Image from "next/image";
import { Pencil, Eye, EyeOff, CalendarIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { BirthDayComponent } from "../components/birthday-calendar";

export default function ProfileEditPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [birthday, setBirthday] = useState<Date | undefined>();
  const [showCalendar, setShowCalendar] = useState(false);
  const [formData, setFormData] = useState({
    name: "Ashely Scott",
    phone: "123-456-7890",
    email: "example@email.com",
    password: "232312322",
    birthday: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData, birthday);
  };

  return (
    <div className="py-8 px-4">
      <div className="w-[70%] mx-auto">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                alt="Profile picture"
                fill
                className="object-cover"
              />
            </div>
            <button
              className="absolute top-0 right-0 bg-purple-500 text-white p-2 rounded-full shadow-md"
              aria-label="Edit profile picture"
            >
              <Pencil className="h-4 w-4" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-1">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" value={formData.name} onChange={handleChange} className="bg-gray-100" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} className="bg-gray-100" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} className="bg-gray-100" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                className="bg-gray-100 pr-10"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="birthday">Birthday</Label>
            <div className="relative">
              <Input
                id="birthday"
                name="birthday"
                type="text"
                placeholder="Your Birthday"
                value={birthday ? birthday.toISOString().split("T")[0] : ""}
                readOnly
                className="bg-gray-100 cursor-pointer pr-10"
                onClick={() => setShowCalendar((prev) => !prev)}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                onClick={() => setShowCalendar((prev) => !prev)}
                aria-label="Select birthday"
              >
                <CalendarIcon className="h-5 w-5" />
              </button>
              {showCalendar && (
                <div className="absolute top-full right-0 mt-2 bg-white shadow-md p-2 rounded-md border z-50">
                  <BirthDayComponent
                    onDateSelect={(date) => {
                      setBirthday(date);
                      setShowCalendar(false);
                    }}
                    closeCalendar={() => setShowCalendar(false)}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-start">
            <Button type="submit" className="bg-purple-500 hover:bg-purple-600">
              Save changes
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
