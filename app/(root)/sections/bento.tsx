import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import BlurFade from "@/components/ui/blur-fade";
import {
  PersonIcon,
  Share1Icon,
  MobileIcon,
  // ScannerIcon,
  Link1Icon,
  MixerHorizontalIcon,
} from "@radix-ui/react-icons";

const features = [
  {
    Icon: PersonIcon,
    name: "Digital Identity",
    description: "Create your professional digital identity in seconds",
    href: "/",
    cta: "Create Now",
    background: (
      <BlurFade duration={1.5} inViewMargin="350px 0px 0px 0px" inView>
        <video
          loop
          muted
          autoPlay
          src="/displayvideo.webm"
          className="absolute w-full object-cover"
        />
      </BlurFade>
    ),
    className: "col-span-2 row-span-2 sm:col-span-2 sm:row-span-3",
  },
  {
    Icon: Share1Icon,
    name: "Easy Sharing",
    description: "Share your digital card with a single tap or scan",
    href: "/",
    cta: "Learn how",
    background: (
      <BlurFade duration={1.5} inViewMargin="350px 0px 0px 0px" inView>
        <img
          src="/cards/share-card.png"
          className="absolute -right-20 -top-20 "
        />
      </BlurFade>
    ),
    className: "col-span-1 row-span-1 sm:col-span-1 sm:row-span-2",
  },
  {
    Icon: MobileIcon,
    name: "Mobile First",
    description: "Optimized for all mobile devices and platforms",
    href: "/",
    cta: "View demo",
    background: (
      <BlurFade duration={1.5} inViewMargin="350px 0px 0px 0px" inView>
        <img
          src="/cards/mobile-card.png"
          className="absolute -right-20 -top-20 "
        />
      </BlurFade>
    ),
    className: "col-span-1 row-span-1 sm:col-span-1 sm:row-span-2",
  },
  {
    Icon: MobileIcon,
    name: "QR Connect",
    description: "Instant connection through smart QR code scanning",
    href: "/",
    cta: "Try it",
    background: (
      <BlurFade duration={1.5} inViewMargin="350px 0px 0px 0px" inView>
        <img src="/cards/qr-card.png" className="absolute -right-20 -top-20 " />
      </BlurFade>
    ),
    className: "col-span-1 row-span-1 sm:col-span-1 sm:row-span-2",
  },
  {
    Icon: Link1Icon,
    name: "Social Links",
    description: "Connect all your social profiles in one place",
    href: "/",
    cta: "Connect now",
    background: (
      <BlurFade duration={1.5} inViewMargin="350px 0px 0px 0px" inView>
        <img
          src="/cards/social-card.png"
          className="absolute -right-20 -top-20 "
        />
      </BlurFade>
    ),
    className: "col-span-1 row-span-1 sm:col-span-1 sm:row-span-2",
  },
  {
    Icon: MixerHorizontalIcon,
    name: "Customization",
    description: "Personalize your card with themes and layouts",
    href: "/",
    cta: "Customize",
    background: (
      <BlurFade duration={1.5} inViewMargin="350px 0px 0px 0px" inView>
        <img
          src="/cards/custom-card.png"
          className="absolute -right-20 -top-20 "
        />
      </BlurFade>
    ),
    className: "col-span-1 row-span-1 sm:col-span-1 sm:row-span-1",
  },
];

export default function Bento() {
  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-center gap-20 py-16 px-6 overflow-clip">
      <h1 className="md:text-6xl text-3xl capitalize font-bold">
        Features that make us unique
      </h1>
      <BentoGrid className="grid container gap-4 grid-cols-2 grid-rows-auto sm:grid-cols-3 sm:grid-rows-5">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}
