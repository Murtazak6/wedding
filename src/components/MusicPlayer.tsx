"use client";

import { useState, useRef, useEffect } from "react";
import { Music, Music2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MusicPlayerProps {
  src: string;
}

export default function MusicPlayer({ src }: MusicPlayerProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setIsMounted(true);
    // Show tooltip after a short delay
    const timer = setTimeout(() => setShowTooltip(true), 3000);
    
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          // Reset audio to start
          audioRef.current.currentTime = 0;
          await audioRef.current.play();
          setIsPlaying(true);
          setShowTooltip(false);
          console.log("Audio playing successfully");
        } catch (error) {
          console.log("Playback failed initially, will retry on next interaction:", error);
          // If auto-play fails, we keep isPlaying as false so the user can click the button
        }
      }
    };

    // Small delay to ensure the DOM is ready and interaction is registered
    const playTimer = setTimeout(playAudio, 1000);

    return () => {
      clearTimeout(timer);
      clearTimeout(playTimer);
    };
  }, [src]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => console.log("Audio play blocked by browser"));
      }
      setIsPlaying(!isPlaying);
      setShowTooltip(false);
    }
  };

  if (!isMounted) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute bottom-16 right-0 bg-white px-4 py-2 rounded-full shadow-lg text-[10px] uppercase tracking-widest text-secondary whitespace-nowrap border border-primary/20 pointer-events-none"
          >
            Play Background Nasheed
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={togglePlay}
        className="w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center border border-primary/20 text-secondary"
      >
        {isPlaying ? (
          <Music className="w-5 h-5 animate-pulse" />
        ) : (
          <Music2 className="w-5 h-5 opacity-40" />
        )}
      </motion.button>
      
      <audio ref={audioRef} src={src} loop />
    </div>
  );
}
