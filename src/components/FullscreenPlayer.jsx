"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

export default function Fullscreenwithmiddleplayer({ videoDetails, onClose }) {
  const playerRef = useRef(null);
  const videoRef = useRef(null);

  // Init Video.js player
  useEffect(() => {
    if (!videoRef.current) return;

    if (!playerRef.current) {
      const player = videojs(videoRef.current, {
        controls: true,
        autoplay: false,
        muted: false,
        preload: "auto",
        playsinline: true,
        fluid: true,
        poster: videoDetails?.poster || "",
        html5: {
          vhs: {
            enableLowInitialPlaylist: true,
            smoothQualityChange: true,
          },
        },
      });

      playerRef.current = player;

      // Load source
      if (videoDetails?.hls_stream) {
        player.src({
          src: videoDetails.hls_stream,
          type: "application/x-mpegURL",
        });
      }

      player.ready(() => {
        player.play().catch(() => console.log("Autoplay blocked"));
      });
    }
    // We want this to run only once on mount to initialize the player.
    // The player is updated in a separate effect.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const player = playerRef.current;
    if (!player || !videoDetails?.hls_stream) return;

    player.pause();
    player.src({
      src: videoDetails.hls_stream,
      type: "application/x-mpegURL",
    });
    if (videoDetails.poster) {
      player.poster(videoDetails.poster);
    }
    player.play().catch(() => console.log("Autoplay blocked"));
  }, [videoDetails]);

  const handleClose = () => {
    if (playerRef.current) {
      playerRef.current.pause();
      playerRef.current.dispose();
      playerRef.current = null;
    }
    if (onClose) onClose();
  };

  if (!videoDetails?.hls_stream) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex flex-col">
      {/* Top overlay bar */}
      <div className="absolute top-0 left-0 right-0 flex items-center gap-3 px-3 py-2 bg-black/50 z-50">
        {onClose && (
          <button
            onClick={handleClose}
            className="p-2 text-white/80 hover:text-white transition-colors duration-300 cursor-pointer"
          >
            <svg
              width="38"
              height="56"
              viewBox="0 0 38 56"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.4855 16.606C23.2895 15.798 24.5928 15.798 25.3968 16.606C26.2008 17.414 26.2008 18.7237 25.3968 19.5317L16.9701 27.9999L25.3968 36.4682L25.5384 36.625C26.198 37.4376 26.1506 38.6363 25.3968 39.3939C24.643 40.1514 23.4502 40.199 22.6415 39.5361L22.4855 39.3939L12.6032 29.4628C12.2171 29.0747 12 28.5486 12 27.9999C12 27.4512 12.2171 26.9251 12.6032 26.5371L22.4855 16.606Z"
                fill="currentColor"
              />
            </svg>
          </button>
        )}
        <div className="text-white text-2xl font-semibold truncate">
          {videoDetails?.name}
        </div>
      </div>

      <div className="flex-grow flex items-center justify-center px-2">
        <div className="w-full max-w-6xl aspect-video">
          <video
            ref={videoRef}
            className="video-js vjs-default-skin vjs-big-play-centered w-full h-full"
            controls
          />
        </div>
      </div>
    </div>
  );
}
