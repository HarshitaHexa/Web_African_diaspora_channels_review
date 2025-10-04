"use client";
import React, { memo, useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const BackgroundPlayer = ({ trailerUrl }) => {
  const playerRef = useRef(null);
  const playerElementRef = useRef(null);

  useEffect(() => {
    if (!trailerUrl) return;

    const initPlayer = () => {
      const videoElement = playerElementRef.current;
      if (!videoElement) return;

      // Dispose existing player
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }

      // Initialize video.js
      const player = videojs(videoElement, {
        controls: false,
        autoplay: "muted",
        loop: true,
        muted: true,
        preload: "auto",
        playsinline: true,
        fluid: true,
        responsive: true,
        html5: {
          vhs: {
            enableLowInitialPlaylist: false,
            smoothQualityChange: true,
          },
        },
      });

      playerRef.current = player;

      // Set HLS source
      player.src({
        src: trailerUrl,
        type: "application/x-mpegURL",
      });

      player.ready(() => {
        player.play().catch((err) => console.log("Autoplay blocked:", err));
      });
    };

    const timer = setTimeout(initPlayer, 50);

    return () => {
      clearTimeout(timer);
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [trailerUrl]);

  return (
    <video
      ref={playerElementRef}
      className="video-js vjs-default-skin player w-full h-full object-cover"
      preload="metadata"
      playsInline
      loop
      muted
    />
  );
};

export default memo(BackgroundPlayer);
