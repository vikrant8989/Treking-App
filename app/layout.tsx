import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import type React from "react" // Import React
import { Book, Sunset, Trees, Zap } from "lucide-react";
import { Navbar1 } from "@/components/shadcnblocks-com-navbar1";
import { StackedCircularFooter } from "@/components/ui/stacked-circular-footer";
import { ScrollArea } from "@/components/ui/scroll-area";


const demoData = {
  logo: {
    url: "/",
    src: "https://www.shadcnblocks.com/images/block/block-1.svg",
    alt: "blocks for shadcn/ui",
    title: "Trekterra.com",
  },
  menu: [
    {
      title: "Blog",
      url: "/blog",
    },
  ],
  mobileExtraLinks: [
    { name: "Press", url: "/press" },
    { name: "Contact", url: "/contact" },
    { name: "Imprint", url: "/imprint" },
    { name: "Sitemap", url: "/sitemap" },
  ],
  auth: {
    login: { text: "Log in", url: "/login" },
    signup: { text: "Sign up", url: "/signup" },
  },
};
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Trekking App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
    <body className={`${montserrat.variable} font-sans antialiased` }>
      {/* Sticky Navbar */}
      <div className="sticky top-0 z-50 bg-white shadow-sm">
        <Navbar1 {...demoData} />
      </div>

      <div className="min-h-screen">
          <ScrollArea className="h-full w-full">
            <div className="">
              {children}
            </div>
            <StackedCircularFooter/>
          </ScrollArea>
        </div>
    </body>
  </html>
  )
}

