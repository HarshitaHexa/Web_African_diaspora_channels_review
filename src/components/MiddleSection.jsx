"use client";

import { useState, useEffect } from "react";
import BackgroundPlayer from "./background-player";
import VideoPlayer from "./VideoPlayer";
import Fullscreenwithmiddleplayer from "./Fullscreenwithmiddleplayer";

export default function MiddleSection({ videodata }) {
  const [playingUrl, setPlayingUrl] = useState(null);
  const onStartPlayer = (url) => {
    setPlayingUrl(url);
    document.body.classList.add("no-scroll"); //TODO: if no fullscreen videoplayer use then need to hide this
  };
  const onClosePlayer = () => {
    setPlayingUrl(null);
    document.body.classList.remove("no-scroll"); //TODO: if no fullscreen videoplayer use then need to hide this
  };

  if (!videodata) return null;

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden px-4">
      {/* Background Video*/}
      {!playingUrl && (
        <>
          <div className="absolute inset-0 w-full h-full">
            <BackgroundPlayer trailerUrl={videodata.trailer_hls_stream} />
          </div>

          <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
          <div className="relative z-20 px-4 text-white max-w-4xl mx-auto flex flex-col items-center justify-center h-full text-center">
            <h1 className="text-sm sm:text-3xl md:text-5xl font-bold mb-4">
              {videodata.tagLine || ""}
            </h1>
            <p className="text-lg sm:text-base md:text-xl mb-6 text-gray-200 w-full sm:w-4/5 md:w-full">
              {videodata.description || ""}
            </p>
            <button
              className="bg-[#4E915E] hover:bg-[#4E915E] text-black font-bold px-6 py-3 rounded-lg"
              onClick={() => onStartPlayer(videodata.hls_stream)}
            >
              START WATCHING
            </button>
          </div>
        </>
      )}
      {/* Video Player Section*/}
      {playingUrl && (
        <Fullscreenwithmiddleplayer // TODO: Need to change the component of videoplayer once it confirm
          videoDetails={videodata}
          onClose={onClosePlayer}
        />
        // <div className="relative z-20 w-full max-w-3xl mx-auto">
        //   <VideoPlayer videoDetails={videodata} onClose={onClosePlayer} />
        // </div>
      )}
    </section>
  );
}
