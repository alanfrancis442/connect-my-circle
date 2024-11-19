"use client";
import BlurFade from "@/components/ui/blur-fade";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Showcase = () => {
  const ref = useRef(null);
  const inview = useInView(ref, { once: true });
  return (
    <div
      ref={ref}
      className="flex justify-center items-center flex-col py-16 gap-12 px-8"
    >
      <motion.div
        initial={{
          clipPath: "polygon(49% 45%, 53% 45%, 51% 52%, 48% 52%)",
        }}
        animate={{
          clipPath: inview
            ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
            : "polygon(49% 45%, 53% 45%, 51% 52%, 48% 52%)",
        }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
        }}
        className="min-w-[80vw] p-12 bg-[#272627] flex justify-center items-center rounded-xl"
      >
        <Image
          src={"/showcase/Banner.png"}
          width={800}
          height={800}
          alt="Showcase Image"
          className="rounded-lg w-[50vw] "
          draggable={false}
        ></Image>
      </motion.div>
      <div className="container px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 4 }, (_, i) => (
            <BlurFade key={i} duration={1} inView delay={0.25 + i * 0.15}>
              <div className="relative aspect-square w-full">
                <div className="h-full w-full overflow-hidden rounded-lg">
                  <Image
                    src={`/showcase/card${i + 1}.webp`}
                    fill
                    sizes="(max-width: 640px) 100vw, 
                           (max-width: 1024px) 50vw,
                           25vw"
                    alt="Showcase Image"
                    className="object-cover transition-transform hover:scale-105"
                    draggable={false}
                    priority={i === 0}
                  />
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Showcase;
