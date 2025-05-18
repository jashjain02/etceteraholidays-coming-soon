"use client";

import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import Image from "next/image";
import { Plane, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log("Email submitted:", email);
    // You might want to add API call to save email
    setEmail("");
    // Optionally show a success message
  };

  if (!mounted) {
    return null;
  }

  return (
    <main className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background image is handled in globals.css */}
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px] z-0"></div>
      
      {/* Main container wrapper - Takes up full viewport with spacing */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 py-12 md:py-16">
        {/* Main transparent card - contains ALL content with reduced width */}
        <div className="max-w-4xl w-[85%] sm:w-[80%] md:w-[75%] lg:w-[70%] h-auto my-8 md:my-12 bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 flex flex-col items-center justify-center text-center">
          
          {/* Logo */}
          <div className="mb-6 mx-auto">
            <div className="relative w-[250px] sm:w-[320px] md:w-[400px] lg:w-[480px] h-[100px] sm:h-[128px] md:h-[160px] lg:h-[192px] mx-auto">
              <Image
                src="/Logo.png"
                alt="Etcetera Holidays"
                width={480}
                height={192}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="w-full max-w-2xl mx-auto mb-12">
            <CountdownTimer />
          </div>

          {/* Email signup */}
          <div className="w-full max-w-md mx-auto mb-12">
            <div className="bg-white/20 backdrop-blur-md rounded-lg p-6 shadow-lg border border-white/30">
              <h3 className="text-lg font-semibold mb-2 text-white">
                Be the first to know when we launch
              </h3>
              <p className="text-sm text-white/90 mb-4">
                Subscribe for exclusive deals and updates
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  className="bg-white/20 text-white placeholder:text-white/70 border-white/30 flex-grow"
                  required
                />
                <Button type="submit" className="bg-teal-500 hover:bg-teal-600">
                  <Plane className="mr-2 h-4 w-4" />
                  Notify Me
                </Button>
              </form>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="w-full max-w-md mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-5 shadow-lg border border-white/30">
              <p className="text-sm text-white mb-4">
                Connect with us on social media
              </p>
              <div className="flex justify-center space-x-6">
                <a href="#" className="text-white hover:text-blue-400 transition-colors">
                  <div className="bg-white/30 hover:bg-white/40 p-3 rounded-full">
                    <Facebook size={20} />
                  </div>
                </a>
                <a href="https://www.instagram.com/etceteraholidayz/" className="text-white hover:text-pink-400 transition-colors">
                  <div className="bg-white/30 hover:bg-white/40 p-3 rounded-full">
                    <Instagram size={20} />
                  </div>
                </a>
                <a href="#" className="text-white hover:text-blue-700 transition-colors">
                  <div className="bg-white/30 hover:bg-white/40 p-3 rounded-full">
                    <Linkedin size={20} />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-auto text-xs text-white/80">
            <p>© 2023 Etcetera Holidays. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </main>
  );
}