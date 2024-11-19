import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import BlurFade from "@/components/ui/blur-fade";
import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";

const features = [
  {
    Icon: FileTextIcon,
    name: "Save your files",
    description: "We automatically save your files as you type.",
    href: "/",
    cta: "Learn more",
    background: (
      <BlurFade duration={1.5} inViewMargin="350px 0px 0px 0px" inView>
        <img
          src="/landing/landing.png"
          className="absolute -right-20 -top-20 opacity-60"
        />
        <video
          src="/displayvideo.webm"
          muted
          autoPlay
          loop
          className=" opacity-0 absolute w-full group-hover:opacity-100 transition-all duration-300"
        ></video>
      </BlurFade>
    ),
    className: "group col-span-2 row-span-3 max-sm:col-span-3",
  },
  {
    Icon: InputIcon,
    name: "Full text search",
    description: "Search through all your files in one place.",
    href: "/",
    cta: "Learn more",
    background: (
      <BlurFade duration={1.5} inViewMargin="350px 0px 0px 0px" inView>
        <img
          src="/landing/landing.png"
          className="absolute -right-20 -top-20 opacity-60"
        />
      </BlurFade>
    ),
    className: "col-span-1 row-span-2 max-sm:col-span-2",
  },
  {
    Icon: GlobeIcon,
    name: "Multilingual",
    description: "Supports 100+ languages and counting.",
    href: "/",
    cta: "Learn more",
    background: (
      <BlurFade duration={1.5} inViewMargin="350px 0px 0px 0px" inView>
        <img
          src="/landing/landing.png"
          className="absolute -right-20 -top-20 opacity-60"
        />
      </BlurFade>
    ),
    className: "start col-span-1 row-span-2",
  },
  {
    Icon: CalendarIcon,
    name: "Calendar",
    description: "Use the calendar to filter your files by date.",
    href: "/",
    cta: "Learn more",
    background: (
      <BlurFade duration={1.5} inViewMargin="350px 0px 0px 0px" inView>
        <img
          src="/landing/landing.png"
          className="absolute -right-20 -top-20 opacity-60"
        />
      </BlurFade>
    ),
    className: "col-span-1 row-span-2 max-sm:col-span-2",
  },
  {
    Icon: BellIcon,
    name: "Notifications",
    description:
      "Get notified when someone shares a file or mentions you in a comment.",
    href: "/",
    cta: "Learn more",
    background: (
      <BlurFade duration={1.5} inViewMargin="350px 0px 0px 0px" inView>
        <img
          src="/landing/landing.png"
          className="absolute -right-20 -top-20 opacity-60"
        />
      </BlurFade>
    ),
    className: "col-span-1 row-span-2 ",
  },
  {
    Icon: BellIcon,
    name: "Know more",
    description: "know more about our designs and other features.",
    href: "/",
    cta: "Learn more",
    background: (
      <BlurFade duration={1.5} inViewMargin="350px 0px 0px 0px" inView>
        <img
          src="/landing/landing.png"
          className="absolute -right-20 -top-20 opacity-60"
        />
      </BlurFade>
    ),
    className: "sm:col-span-1 row-span-1 ",
  },
];

export default function Bento() {
  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-center gap-20 py-16">
      <h1 className="md:text-6xl text-3xl capitalize font-bold">
        Features that make us unique
      </h1>
      <BentoGrid className="grid container gap-4 grid-cols-3 grid-rows-5">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}
