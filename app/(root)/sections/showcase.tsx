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
      className="flex justify-center items-center flex-col py-16 gap-12"
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
      <div className="container flex gap-5">
        {Array.from({ length: 4 }, (_, i) => (
          <BlurFade key={i} duration={1} inView delay={0.25 + i * 0.15}>
            <div key={i} className="flex justify-center items-center ">
              <div className=" flex flex-row justify-center items-center rounded-md overflow-clip">
                <Image
                  src={`/showcase/card${i + 1}.webp`}
                  width={500}
                  height={500}
                  alt="Showcase Image"
                  className="rounded-lg w-[20vw] "
                  draggable={false}
                ></Image>
              </div>
            </div>
          </BlurFade>
        ))}
      </div>
    </div>
  );
};

export default Showcase;
