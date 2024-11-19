import { Button } from "@/components/ui/button";
import { ArrowDownRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Landing = () => {
  return (
    <section className="py-32 flex justify-center items-center min-h-screen">
      <div className="container">
        <div className="grid items-center gap-36 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h3>A Smart Way to Connect </h3>
            <div>
              <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
                Smart Business Cards
              </h1>
              <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
                Designed to Impress.
              </h1>
            </div>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
              Connect Instantly with Your Custom NFC Business Card from Connect
              My Circle
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Button className="w-full sm:w-auto">Get Started</Button>
              <Button variant="outline" className="w-full sm:w-auto">
                Learn More
                <ArrowDownRight className="ml-2 size-4" />
              </Button>
            </div>
          </div>
          <Image
            src={"/landing/landing.png"}
            width={1200}
            height={1200}
            alt="Landing Image"
            className="rounded-lg w-[30vw]"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default Landing;
