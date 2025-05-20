"use client";

import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import Image from "next/image";
import { Plane, Facebook, Instagram, Linkedin } from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState("");
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Safari detection that runs only on client side
    const isSafariCheck = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    setIsSafari(isSafariCheck);
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  if (!mounted) {
    return null;
  }

  return (
    <main className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/10 z-0"></div>
      
      {/* Main container wrapper */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 py-8 md:py-12">
        {/* Main transparent card - adjusted opacity for cross-browser consistency */}
        <div className={`max-w-5xl w-[85%] sm:w-[80%] md:w-[75%] lg:w-[70%] h-auto my-8 md:my-12 rounded-2xl p-6 md:p-8 lg:p-10 flex flex-col items-center justify-center text-center
          ${isSafari 
            ? 'bg-white/15 safari-card' // Lower opacity for Safari
            : 'bg-white/10 backdrop-blur-lg'}`}>
          
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
                unoptimized={true}
              />
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="w-full max-w-2xl mx-auto mb-10">
            <CountdownTimer />
          </div>

          {/* Email signup - adjusted opacity for Safari */}
          <div className="w-full max-w-md mx-auto mb-10">
            <div className={`rounded-lg p-5 shadow-lg border border-white/30
              ${isSafari 
                ? 'bg-white/25 safari-card-inner' // Higher opacity for Safari
                : 'bg-white/20 backdrop-blur-md'}`}>
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
                  className={`border-white/30 flex-grow
                    ${isSafari 
                      ? 'bg-white/25 text-white placeholder:text-white/70 safari-input' 
                      : 'bg-white/20 text-white placeholder:text-white/70'}`}
                  required
                />
                <Button type="submit" className="bg-teal-500 hover:bg-teal-600 text-white">
                  <Plane className="mr-2 h-4 w-4" />
                  Notify Me
                </Button>
              </form>
            </div>
          </div>

          {/* Social Media Links - adjusted opacity for Safari */}
          <div className="w-full max-w-md mx-auto mb-6">
            <div className={`rounded-lg p-4 shadow-lg border border-white/30
              ${isSafari 
                ? 'bg-white/15 safari-card-inner' 
                : 'bg-white/10 backdrop-blur-md'}`}>
              <p className="text-sm text-white mb-3">
                Connect with us on social media
              </p>
              <div className="flex justify-center space-x-6">
                <a href="#" className="text-white hover:text-blue-400 transition-colors">
                  <div className="bg-white/30 hover:bg-white/40 p-3 rounded-full">
                    <Facebook size={20} />
                  </div>
                </a>
                <a href="https://www.instagram.com/etceteraholidayz/" 
                   className="text-white hover:text-pink-400 transition-colors"
                   target="_blank" 
                   rel="noopener noreferrer">
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
          <footer className="mt-auto text-xs text-white/80 pt-2">
            <p>© {new Date().getFullYear()} Etcetera Holidays. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </main>
  );
}