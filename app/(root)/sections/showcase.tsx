"use client";
import BlurFade from "@/components/ui/blur-fade";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MoveUpRight, ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";

const productData = [
  { title: "Premium Hoodie", price: "$59.99" },
  { title: "Classic Tee", price: "$29.99" },
  { title: "Urban Jacket", price: "$89.99" },
  { title: "Street Wear Cap", price: "$24.99" },
];

const Showcase = () => {
  const ref = useRef(null);
  const inview = useInView(ref, { once: true });
  const router = useRouter();

  return (
    <div
      ref={ref}
      className="flex justify-center items-center flex-col py-16 gap-12 md:px-4"
    >
      <div className="text-center mb-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inview ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Featured Collection
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inview ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-400 text-lg"
        >
          Discover our latest designs and trending styles
        </motion.p>
      </div>

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
        className="md:min-w-[90vw] max-sm:h-screen min-w-full p-12 bg-[#272627] flex justify-center items-center rounded-xl relative"
      >
        <div className="absolute top-1/4 left-24 z-10 text-white max-w-lg">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inview ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-6xl md:text-7xl font-bold mb-6"
          >
            New Collection 2024
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inview ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-200"
          >
            Explore our latest fashion lineup featuring premium materials and
            contemporary designs.
          </motion.p>
        </div>
        <Image
          src={"/showcase/Banner.png"}
          width={800}
          height={800}
          alt="Showcase Image"
          className="rounded-lg w-[100vw] md:w-[50vw]"
          draggable={false}
        ></Image>
        <motion.div
          onClick={() => router.push("/store")}
          className="absolute right-10 bottom-10 font-bold text-[#CDEA68] border-2 rounded-full flex justify-center items-center pl-4 gap-5 cursor-pointer"
          whileHover={{
            scale: 1.05,
            backgroundColor: "#CDEA68",
            color: "black",
            borderColor: "#CDEA68",
            transition: {
              duration: 0.3,
              ease: "easeInOut",
            },
          }}
        >
          Buy Now{" "}
          <motion.span
            className="bg-white p-3 rounded-full m-1"
            whileHover={{
              x: 3,
              backgroundColor: "white",
              transition: {
                duration: 0.2,
                ease: "easeInOut",
              },
            }}
          >
            <MoveUpRight />
          </motion.span>
        </motion.div>
      </motion.div>
      <div className="container max-md:px-4 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {productData.map((product, i) => (
            <BlurFade key={i} duration={1} inView delay={0.25 + i * 0.15}>
              <div className="relative aspect-square w-full overflow-clip rounded-3xl group">
                <div className="h-full w-full transition-transform hover:scale-125 rounded-lg duration-500">
                  <Image
                    src={`/showcase/card${i + 1}.webp`}
                    fill
                    sizes="(max-width: 640px) 100vw, 
                           (max-width: 1024px) 50vw,
                           25vw"
                    alt="Showcase Image"
                    className="object-cover "
                    draggable={false}
                    priority={i === 0}
                  />
                </div>
                <div className="text-[#CDEA68] w-[90%] absolute z-50 flex flex-col bottom-4 left-4 group-hover:-translate-y-2 translate-y-28 transition-transform duration-300">
                  <h3 className="text-2xl font-bold">{product.title}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-white text-lg">{product.price}</span>
                    <span className="p-4 bg-[#CDEA68] text-black rounded-full">
                      <ShoppingBag />
                    </span>
                  </div>
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
