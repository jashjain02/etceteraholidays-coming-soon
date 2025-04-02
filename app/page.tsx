"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Plane } from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";

export default function Home() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success!",
      description: "You'll be notified when we launch!",
    });
    setEmail("");
  };

  return (
    <main className="min-h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
          alt="Tropical Beach"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <div className="max-w-4xl w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 text-center">
          <div className="mb-8 mx-auto">
            <div className="relative w-[400px] h-[160px] mx-auto">
              <Image
                src="/logo.png"
                alt="Etcetera Holidays"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Exciting Journeys Await!
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            We&apos;re Launching Soon
          </p>

          <CountdownTimer />

          <div className="mt-12">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/20 text-white placeholder:text-white/70 border-white/30"
                  required
                />
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                  <Plane className="mr-2 h-4 w-4" />
                  Notify Me
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}