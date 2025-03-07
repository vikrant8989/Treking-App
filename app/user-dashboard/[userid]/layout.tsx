/* eslint-disable @typescript-eslint/no-explicit-any */
import type React from "react";
import Sidebar from "./components/sidebar";
import { Montserrat } from "next/font/google";
import { ScrollArea } from "@/components/ui/scroll-area";


export default async function UserDashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const param = await params;
  const userId = param.userid;
  console.log("Rendering user dashboard layout for user ID:", userId);

  return (
    <div className="flex h-full w-full">
      <div className="sticky z-50 bg-white">
        <Sidebar />
      </div>

      {/* Ensure children takes full width */}
      <div className="h-[calc(100vh-5rem)] flex-1">
        <ScrollArea className="h-full">
          <main className="min-h-full">{children}</main>
        </ScrollArea>
      </div>
    </div>
  );
}
