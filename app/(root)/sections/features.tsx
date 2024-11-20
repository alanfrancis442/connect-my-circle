"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

type ContainerElement = Element & {
  querySelector(selector: string): Element | null;
};

const data = [
  {
    title: "Instant Sharing",
    description:
      "Share your contact info with a simple tap on any NFC-enabled device. No more fumbling with paper cards.",
  },
  {
    title: "Always Up-to-Date",
    description:
      "Update your information anytime, and it's instantly reflected on your card. Never worry about outdated info.",
  },
  {
    title: "Secure & Private",
    description:
      "Control what information you share and with whom, ensuring your privacy and security.",
  },
  {
    title: "Eco-Friendly",
    description:
      "Reduce paper waste by using a digital business card. Make a positive impact on the environment.",
  },
  {
    title: "Customizable Designs",
    description:
      "Personalize your card with themes, colors, and layouts that match your brand and style.",
  },
  {
    title: "Analytics & Insights",
    description:
      "Track how often your card is viewed and shared. Gain valuable insights into your networking efforts.",
  },
];

const Features = () => {
  const container = useRef(null!);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add({ isNotMobile: "(min-width: 780px)" }, () => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.utils
          .toArray<ContainerElement>(".elem-container")
          .forEach((item) => {
            const image = item.querySelector("._images");
            const text = item.querySelector("._text-content");
            gsap.to(image, {
              scrollTrigger: {
                trigger: item,
                start: "top 30%",
                end: "bottom 20%",
                scrub: true,
                // markers: true,
              },
              yPercent: 25,
              duration: 1,
              ease: "power2.inOut",
            });
            gsap.to(text, {
              scrollTrigger: {
                trigger: item,
                start: "top 80%",
                end: "bottom 20%",
                scrub: true,
                // markers: true,
              },
              yPercent: -50,
              duration: 1,
              ease: "power2.inOut",
            });
          });
        gsap.to("svg", {
          yPercent: 250,
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "top 50%",
            end: "bottom top",
            scrub: 1,
            // markers: true,
          },
        });
      });
    },
    { scope: container }
  );

  return (
    <section ref={container} className="md:px-16 px-8 md:pt-16 w-full relative">
      <div className="flex flex-col items-center text-center">
        <h2 className="my-6 text-pretty font-RobotoCondensed font-bold text-4xl md:text-6xl max-sm:text-3xl">
          Features that make us unique
        </h2>
      </div>
      <div className=" mt-16 flex gap-8 flex-wrap justify-center">
        {data.map((item, i) => (
          <div
            key={i}
            className={cn(
              "flex justify-between gap-5 items-end elem-container container max-sm:flex-col-reverse",
              {
                "flex-row-reverse": i % 2 === 0,
              }
            )}
          >
            <div className="w-1/2 _text-content max-sm:w-full">
              <h1 className="font-RobotoCondensed xl:text-6xl lg:text-4xl text-3xl md:mb-8 mb-5">
                {item.title}
              </h1>
              <div className="lg:text-2xl text-xl max-sm:text-base tracking-tight">
                {item.description}
              </div>
            </div>
            <div className="overflow-y-clip max-sm:w-full">
              <Image
                src={`/feature/card${i + 1}.webp`}
                alt="why attend"
                width={500}
                height={500}
                className="rounded-lg _images max-lg:w-[35vw] w-[25vw] max-sm:w-full"
                draggable={false}
              ></Image>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
