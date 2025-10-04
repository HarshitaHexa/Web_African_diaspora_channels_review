"use client";
import Image from "next/image";

export default function Footer() {
  const platforms = [
    { name: "Roku", src: "/platforms/roku.png" },
    { name: "Fire TV", src: "/platforms/firetv.png" },
    { name: "Android", src: "/platforms/androidtv.png" },
    { name: "Apple TV", src: "/platforms/appletv.png" },
    { name: "Samsung", src: "/platforms/samsung.png" },
    { name: "LG", src: "/platforms/lg.png" },
    { name: "Youtube", src: "/platforms/youtube.png" },
    { name: "image4", src: "/platforms/image4.png" },
  ];

  return (
    <footer className="py-6 bg-black border-t border-gray-800">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10">
        {/* Platforms row */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6 sm:gap-8 md:gap-10">
          {platforms.map((p) => (
            <Image
              key={p.name}
              src={p.src}
              alt={p.name}
              width={80}
              height={80}
              className="object-contain flex-shrink-0"
            />
          ))}
          <Image
            key="image2"
            src="/platforms/image2.png"
            alt="image2"
            width={80}
            height={80}
            className="object-contain flex-shrink-0 filter invert"
          />
        </div>

        {/* Secondary logos */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-4 md:mt-0">
          <Image
            key="image1"
            src="/platforms/image1.png"
            alt="image1"
            width={80}
            height={80}
            className="object-contain flex-shrink-0 filter invert"
          />
          <Image
            key="image3"
            src="/platforms/image3.png"
            alt="image3"
            width={80}
            height={80}
            className="object-contain flex-shrink-0"
          />
        </div>
      </div>
    </footer>
  );
}
