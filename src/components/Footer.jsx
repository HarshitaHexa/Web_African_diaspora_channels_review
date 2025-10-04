"use client";
import Image from "next/image";
import { PLATFORMS, SECONDARY_LOGOS } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="py-6 bg-black border-t border-gray-800">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10">
        {/* Platforms row */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6 sm:gap-8 md:gap-10">
          {PLATFORMS.map((p) => (
            <Image
              key={p.name}
              src={p.src}
              alt={p.name}
              width={80}
              height={80}
              className="object-contain flex-shrink-0"
            />
          ))}
        </div>

        {/* Secondary logos */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-4 md:mt-0">
          {SECONDARY_LOGOS.map((logo) => (
            <Image
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              width={80}
              height={80}
              className={`object-contain flex-shrink-0 ${
                logo.invert ? "filter invert" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}
