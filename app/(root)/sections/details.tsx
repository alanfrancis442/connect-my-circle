"use client";

import TextRevealByWord from "@/components/ui/text-reveal";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Details = () => {
  const ref = useRef(null);
  const inview = useInView(ref, { once: true, margin: "200px 0px 0px 0px" });

  return (
    <div
      ref={ref}
      className="flex justify-center items-center min-h-screen py-16"
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
          duration: 2.5,
          delay: 0.5,
          ease: "easeInOut",
        }}
        className="container  overflow-clip relative"
      >
        <video
          muted
          autoPlay
          loop
          className="h-[800px] w-[1400px] object-cover rounded-xl sticky top-0 md:top-32"
          src="/details/details.webm"
        ></video>
        <TextRevealByWord
          className="text-white"
          text="Elevate your networking game with smart, personalized business cards that make a lasting impression."
        />
      </motion.div>
    </div>
  );
};

export default Details;
