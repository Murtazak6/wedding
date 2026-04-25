"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Envelope from "@/components/Envelope";
import CinematicReveal from "@/components/CinematicReveal";
import Hero from "@/components/Hero";
import MainContent from "@/components/MainContent";
import MusicPlayer from "@/components/MusicPlayer";
import { weddingConfig } from "@/config/weddingConfig";

export default function Home() {
  const [stage, setStage] = useState(0); // 0: Envelope, 1: Reveal, 2: Invitation

  return (
    <main className="relative overflow-x-hidden">
      <AnimatePresence mode="wait">
        {stage === 0 && (
          <Envelope 
            key="envelope"
            config={weddingConfig} 
            onOpen={() => setStage(1)} 
          />
        )}
        
        {stage === 1 && (
          <CinematicReveal 
            key="reveal"
            config={weddingConfig} 
            onComplete={() => setStage(2)} 
          />
        )}
      </AnimatePresence>

      {/* Main Invitation - Always rendered but only visible after stage 2 */}
      <div className={`transition-opacity duration-1000 ${stage === 2 ? "opacity-100" : "opacity-0 h-0 overflow-hidden"}`}>
        {stage === 2 && (
          <>
            <Hero config={weddingConfig} />
            <MainContent config={weddingConfig} />
          </>
        )}
      </div>

      {/* Music Player only active after user interacts (Stage 1+) */}
      {stage >= 1 && weddingConfig.audio.enabled && (
        <MusicPlayer src={weddingConfig.audio.src} />
      )}
    </main>
  );
}
