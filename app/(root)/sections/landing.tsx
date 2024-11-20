"use client";

import React, { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { DoubleSide, TextureLoader } from "three";
import * as THREE from "three";

interface CardProps {
  position: [number, number, number];
}

function Card(props: CardProps) {
  const ref = useRef<THREE.Mesh>(null);
  const texture = useLoader(TextureLoader, "/showcase/Banner.png");

  useFrame((state) => {
    const elapsedTime = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.y = elapsedTime * 0.2;

      ref.current.position.y = Math.sin(elapsedTime * 0.5) * 0.005;

      ref.current.rotation.z = elapsedTime * 0.05;

      ref.current.rotation.x = Math.sin(elapsedTime * 0.5) * 0.01;
    }
  });

  return (
    <mesh {...props} ref={ref}>
      <planeGeometry args={[3, 4.5, 4]} /> {/* reduced size for mobile */}
      <meshStandardMaterial map={texture} side={DoubleSide} />
    </mesh>
  );
}

const Landing: React.FC = () => {
  return (
    <div className="h-screen px-4 md:px-8 w-full flex flex-col items-start justify-between relative">
      <div className="h-[60vh] md:h-full w-full absolute top-0 left-0">
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Card position={[0, 0.5, 0.5]} />
        </Canvas>
      </div>

      <section className="my-4 md:my-10 w-full absolute bottom-0 left-0 px-4 md:px-10">
        <h2 className="text-4xl md:text-7xl tracking-tighter uppercase font-bold">
          Smart Business Cards
          <br />
          <span className="text-[#CDEA68] text-5xl md:text-8xl">
            Designed to Impress.
          </span>
        </h2>
        <p className="text-base md:text-lg mt-3 md:mt-4 uppercase tracking-tighter">
          We help businesses grow by creating unique digital experiences.
        </p>
        <div className="flex flex-col md:flex-row gap-2 md:gap-4 mt-4 md:mt-6">
          <div className="bg-gray-200 px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-sm md:text-base">
            +100 successful projects
          </div>
          <div className="bg-gray-200 px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-sm md:text-base">
            +40 happy customers
          </div>
          <div className="bg-gray-200 px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-sm md:text-base">
            HubSpot certified
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
