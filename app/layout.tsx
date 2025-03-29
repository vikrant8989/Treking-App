import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import type React from "react";
import { Navbar1 } from "@/components/shadcnblocks-com-navbar1";
import { ScrollArea } from "@/components/ui/scroll-area";

const demoData = {
  logo: {
    url: "/",
    src: "/company-logo/mad-club1.png",
    alt: "company logo",
    title: "MADCLUB",
  },
  menu: [
    {
      title: "Blog",
      url: "/blog",
    },
  ],
  mobileExtraLinks: [],
  auth: {
    signup: { text: "Sign up", url: "/auth" },
  },
};

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Trekking App",
  description: "Explore nature with us",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning={true}>
      <body className={`${montserrat.variable} font-sans antialiased h-full`}>
        <div className="sticky top-0 z-50 bg-white shadow-sm">
          <Navbar1 {...demoData} />
        </div>

        <div className="h-[calc(100vh-5rem)]">
          <ScrollArea className="h-full">       
            <main className="min-h-full">{children}</main>
          </ScrollArea>
        </div>
      </body>
    </html>
  );
}
