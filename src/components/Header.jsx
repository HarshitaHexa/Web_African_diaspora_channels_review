"use client";
import Image from "next/image";

export default function Header({ title, selectedIndex, onSelect }) {
  return (
    <header className="bg-black shadow-md sticky top-0 z-[1250] border-t border-gray-800">
      <div className="container px-8 mx-auto flex items-center justify-between py-3 space-x-6">
        <Image
          src="/assets/adc_logo.png"
          alt="App Logo"
          width={100}
          height={80}
          className="flex-shrink-0"
        />

        <div className="flex items-center space-x-6 overflow-x-auto whitespace-nowrap scrollbar-hide cursor-pointer">
          {title?.map((ch, index) => (
            <button
              key={ch.id || ch.name}
              className={`text-lg font-semibold flex-shrink-0 px-2 py-1 transition-colors focus:outline-none
                ${index === selectedIndex ? "text-[#4E915E]" : "text-white"}
                ${index === selectedIndex ? "" : "hover:text-gray-500"}`}
              onClick={() => onSelect(index)}
            >
              {ch.name}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
