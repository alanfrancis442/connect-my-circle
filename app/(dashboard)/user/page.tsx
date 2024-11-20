"use client";
import BlurFade from "@/components/ui/blur-fade";
import { PencilRuler, Plus } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const dummyCards = [
  { id: 1, title: "Summer Collection", image: "/showcase/card1.webp" },
  { id: 2, title: "Winter Essentials", image: "/showcase/card2.webp" },
  { id: 3, title: "Spring Fashion", image: "/showcase/card3.webp" },
  { id: 4, title: "Autumn Styles", image: "/showcase/card4.webp" },
];

const Page = () => {
  const router = useRouter();

  return (
    <div className="p-2 flex flex-col h-screen">
      {/* Greeting Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold">Welcome back, User!</h1>
        <p className="text-gray-600">
          Here&apos;s what&apos;s happening with your network
        </p>
      </div>

      {/* Recent Activity */}
      <div className="bg-[#F2F3F7] p-12 rounded-3xl shadow h-full w-full flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dummyCards.map((card, i) => (
            <BlurFade key={card.id} duration={1} inView delay={0.25 * i}>
              <div className="relative aspect-square w-full overflow-clip rounded-3xl group shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-full w-full transition-transform hover:scale-125 rounded-lg duration-500">
                  <Image
                    src={card.image}
                    fill
                    sizes="(max-width: 640px) 100vw, 
                           (max-width: 1024px) 50vw,
                           25vw"
                    alt={card.title}
                    className="object-cover"
                    draggable={false}
                    priority={i === 0}
                  />
                </div>
                <div className="text-[#CDEA68] w-[90%] absolute z-50 flex bottom-4 left-4 items-center justify-between group-hover:-translate-y-2 translate-y-28 transition-transform duration-300">
                  <h3 className="text-2xl font-bold mt-4">{card.title}</h3>
                  <span
                    onClick={() => {
                      // Encode the product data as URL-safe string
                      const encodedProduct = encodeURIComponent(
                        JSON.stringify(card)
                      );
                      router.push(
                        `/cardedit/${card.id}?data=${encodedProduct}`
                      );
                    }}
                    className="p-4 bg-[#CDEA68] text-black rounded-full cursor-pointer"
                  >
                    <PencilRuler />
                  </span>
                </div>
              </div>
            </BlurFade>
          ))}

          {/* Add New Card Button */}
          <BlurFade duration={1} inView delay={0.25 * dummyCards.length}>
            <div className="relative aspect-square w-full overflow-clip rounded-3xl group cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-full w-full bg-gray-200 hover:bg-gray-300 transition-all duration-300 flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                  <span className="p-4 bg-[#CDEA68] text-black rounded-full">
                    <Plus size={24} />
                  </span>
                  <p className="text-gray-600 font-medium">Buy New Card</p>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </div>
  );
};

export default Page;
