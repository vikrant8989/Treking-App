import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SocialLinks } from "./social-links";
const socials = [
  {
    name: "Instagram",
    image: "https://link-hover-lndev.vercel.app/instagram.png",
  },
  {
    name: "LinkedIn",
    image: "https://link-hover-lndev.vercel.app/linkedin.png",
  },
  {
    name: "Twitter",
    image: "/twitter.png",
  },
  {
    name: "Facebook",
    image: "/facebook.png",
  },
];
function StackedCircularFooter() {
  return (
    <footer className="bg-background py-12 w-[95%]">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 md:space-y-12">
          {/* Logo */}
          <div className="mb-4 rounded-full bg-primary/10 p-6 md:p-8">
            <Icons.logo className="w-8 md:w-10" />
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 text-center w-full">
            <a href="#" className="hover:text-primary">
              Home
            </a>
            <a href="#" className="hover:text-primary">
              About
            </a>
            <a href="#" className="hover:text-primary">
              Services
            </a>
            <a href="#" className="hover:text-primary">
              Products
            </a>
            <a href="#" className="hover:text-primary">
              Contact
            </a>
          </nav>

          {/* Social Media Icons */}
          <div className="flex space-x-3 sm:space-x-4 w-full justify-center">
            <SocialLinks socials={socials} />
          </div>

          {/* Newsletter Subscription */}
          <div className="w-full max-w-md px-4">
            <form className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-2">
              <div className="flex-grow">
                <Label htmlFor="email" className="sr-only">
                  Email
                </Label>
                <Input
                  id="email"
                  placeholder="Enter your email"
                  type="email"
                  className="rounded-full"
                />
              </div>
              <Button type="submit" className="rounded-full w-full sm:w-auto">
                Subscribe
              </Button>
            </form>
          </div>

          {/* Copyright */}
          <div className="text-center w-full">
            <p className="text-sm text-muted-foreground">
              © 2024 Your Company. All rights reserved.
            </p>
          </div>
        </div>
      </div>
   </footer>
  );
}


export { StackedCircularFooter };
