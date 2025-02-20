import { Facebook, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function Footer() {
  return (
    <>
      <div className="lg:flex px-8 md:px-16 lg:px-32 py-24">
        <div className="lg:w-2/3">
          <div className="flex items-center gap-4">
            <img src="/images/logo.png" alt="" className="h-8" />
            <img src="/images/TheBox.png" alt="" className="h-4" />
          </div>
          <div className="grid grid-cols-3 lg:grid-cols-5 mt-4">
            <div className="space-y-2 col-span-1">
              <p className="font-semibold text-blue-900 text-md">ADDRESS</p>
              <p className="font-semibold text-blue-900 text-md">PHONE</p>
              <p className="font-semibold text-blue-900 text-md">EMAIL</p>
            </div>
            <div className="space-y-2 col-span-2 lg:col-span-4">
              <p>6391 Elgin St. Celina, Delaware 10299</p>
              <p>+84 1102 2703</p>
              <p>
                <a href="mailto:hello@thebox">hello@thebox.com</a>
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-4 mt-8 lg:mt-0 lg:w-1/3">
          <p className="font-semibold text-blue-900 text-md">NEWSLETTER:</p>
          <div className="flex justify-start items-center gap-4">
            <Input placeholder="Your email here..." />
            <Button className="bg-blue-900 hover:bg-blue-950">Subscribe</Button>
          </div>
          <p className="font-semibold text-blue-900 text-md">SOCIAL:</p>
          <div className="flex gap-4">
            <div className="p-2 border border-blue-900 rounded-full">
              <Facebook color="#1e3a8a" />
            </div>
            <div className="p-2 border border-blue-900 rounded-full">
              <Linkedin color="#1e3a8a" />
            </div>
            <div className="p-2 border border-blue-900 rounded-full">
              <Twitter color="#1e3a8a" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-900 px-8 md:px-16 lg:px-32 py-4">
        <p className="font-thin text-white text-sm">
          Slicing by ptekaptra © 2025. All rights reserved.
        </p>
      </div>
    </>
  );
}
