"use client";

import React, { useState, useRef, useEffect } from "react";

interface AppleInlineMediaProps {
  src: string;
  poster: string;
  alt?: string;
  ariaLabel?: string;
  className?: string;
  mediaClassName?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  playOnHover?: boolean;
  isHovered?: boolean;
}

/**
 * Apple-style dual-layer inline media component (InlineMediaDefault pattern)
 * - Layer 1: Instant high-res fallback poster (0ms paint, zero blank screen)
 * - Layer 2: Hardware-accelerated video element stack with seamless opacity cross-fade
 */
export const AppleInlineMedia: React.FC<AppleInlineMediaProps> = ({
  src,
  poster,
  alt = "App preview",
  ariaLabel,
  className = "",
  mediaClassName = "",
  autoPlay = true,
  loop = true,
  muted = true,
  playOnHover = false,
  isHovered = false,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [hasStartedPlaying, setHasStartedPlaying] = useState(false);

  // If playOnHover is enabled, control playback smoothly
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (playOnHover) {
      if (isHovered) {
        video.currentTime = 0;
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsVideoReady(true);
              setHasStartedPlaying(true);
            })
            .catch(() => {});
        }
      } else {
        video.pause();
      }
    } else if (autoPlay) {
      // In case autoPlay started immediately before listener mounted
      if (!video.paused) {
        setIsVideoReady(true);
        setHasStartedPlaying(true);
      }
    }
  }, [isHovered, playOnHover, autoPlay]);

  const isVideoShowing =
    isVideoReady && (playOnHover ? isHovered && hasStartedPlaying : hasStartedPlaying);

  return (
    <div
      className={`relative inline-media-component-container w-full h-full flex items-center justify-center overflow-hidden ${className}`}
      role="img"
      aria-label={ariaLabel || alt}
    >
      {/* LAYER 1: Fallback Container (Instant high-res poster) */}
      <div
        className={`fallback-container absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-out z-0 ${
          isVideoShowing ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <img
          src={poster}
          alt={alt}
          loading="eager"
          decoding="async"
          className={`max-h-[92%] max-w-[92%] w-auto h-full object-contain pointer-events-none drop-shadow-[0_12px_24px_rgba(0,0,0,0.25)] transition-transform duration-500 ease-out ${mediaClassName}`}
        />
      </div>

      {/* LAYER 2: Video Element Stack (Cross-fades in smoothly when decoded) */}
      <div
        className={`video-element-stack absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-out z-10 ${
          isVideoShowing ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <video
          ref={videoRef}
          src={src}
          autoPlay={autoPlay && !playOnHover}
          loop={loop}
          muted={muted}
          playsInline
          preload={playOnHover ? "metadata" : "auto"}
          onCanPlay={() => setIsVideoReady(true)}
          onPlay={() => {
            setIsVideoReady(true);
            setHasStartedPlaying(true);
          }}
          onPlaying={() => {
            setIsVideoReady(true);
            setHasStartedPlaying(true);
          }}
          className={`max-h-[92%] max-w-[92%] w-auto h-full object-contain pointer-events-none drop-shadow-[0_12px_24px_rgba(0,0,0,0.25)] transition-transform duration-500 ease-out ${mediaClassName}`}
        />
      </div>
    </div>
  );
};
