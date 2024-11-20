import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Smartphone, Zap, Share2, Shield } from "lucide-react";
import Image from "next/image";

export default function Landing() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <span className="px-3 py-1 text-sm font-semibold bg-blue-50 text-blue-600 rounded-full">
                  Introducing SmartTap
                </span>
                <h1 className="text-5xl font-bold leading-tight lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
                  Revolutionize Your Networking
                </h1>
                <p className="text-xl text-gray-600">
                  The NFC-powered business card that makes sharing your
                  professional info as easy as a tap.
                </p>
              </div>
              <div className="flex gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-full text-lg font-semibold transition-all hover:scale-105">
                  Get Your SmartTap Card
                </Button>
                <Button
                  variant="outline"
                  className="px-8 py-6 rounded-full text-lg font-semibold"
                >
                  Learn More <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 mix-blend-overlay" />
              <img
                src="https://picsum.photos/800/1200"
                alt="SmartTap Card Demo"
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
