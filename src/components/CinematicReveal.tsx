"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { WeddingConfig } from "@/config/weddingConfig";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

interface CinematicRevealProps {
  config: WeddingConfig;
  onComplete: () => void;
}

export default function CinematicReveal({ config, onComplete }: CinematicRevealProps) {
  const [index, setIndex] = useState(0);
  
  const sequence = [
    config.announcement.intro,
    "With immense joy and gratitude...",
    "With the blessings and duas of Syedna Mufaddal Saifuddin (TUS)...",
    "We invite you to celebrate the sacred union of...",
    `${config.families.couple1.groomArabic} و ${config.families.couple1.brideArabic} (${config.families.couple1.groom} & ${config.families.couple1.bride})`,
    `${config.families.couple2.groomArabic} و ${config.families.couple2.brideArabic} (${config.families.couple2.groom} & ${config.families.couple2.bride})`
  ];

  const couple1Index = sequence.length - 2;
  const couple2Index = sequence.length - 1;

  useEffect(() => {
    if (index < sequence.length - 1) {
      const timer = setTimeout(() => setIndex(idx => idx + 1), 3500);
      return () => clearTimeout(timer);
    }
  }, [index, sequence.length]);

  const getBackgroundImage = () => {
    if (index === couple1Index) return config.families.couple1.image;
    if (index === couple2Index) return config.families.couple2.image;
    return null;
  };

  const backgroundImage = getBackgroundImage();

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[90] bg-secondary flex items-center justify-center p-8 text-center overflow-hidden"
    >
      {/* Background Cinematic Images */}
      <AnimatePresence mode="wait">
        {backgroundImage ? (
          <motion.div
            key={backgroundImage}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.3, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 z-0"
          >
            <Image
              src={backgroundImage}
              alt="Couple Photo"
              fill
              className="object-cover object-top"
              unoptimized
            />
          </motion.div>
        ) : (
          <motion.div 
            key="pattern"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 islamic-pattern z-0" 
          />
        )}
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 via-transparent to-secondary/80 z-1" />
      
      <div className="relative max-w-4xl w-full z-10 flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="space-y-8 flex flex-col items-center w-full"
          >
            {index < couple1Index ? (
              <h2 className={`text-2xl md:text-5xl font-serif text-primary leading-tight px-4 ${index === 0 ? "text-4xl md:text-6xl font-arabic" : ""}`}>
                {sequence[index]}
              </h2>
            ) : (
              <div className="flex flex-col items-center space-y-6 w-full">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 1 }}
                  className="relative w-48 h-64 md:w-64 md:h-80 rounded-lg overflow-hidden border-2 border-primary/30 shadow-2xl"
                >
                  <Image
                    src={index === couple1Index ? config.families.couple1.image : config.families.couple2.image}
                    alt="Couple"
                    fill
                    className="object-cover object-top"
                    unoptimized
                  />
                </motion.div>

                <div className="space-y-3">
                  <motion.p 
                    initial={{ opacity: 0, letterSpacing: "0.1em" }}
                    animate={{ opacity: 0.6, letterSpacing: "0.3em" }}
                    className="text-primary uppercase text-[10px] md:text-xs font-sans"
                  >
                    Celebrating the sacred union of
                  </motion.p>
                  <h2 className="text-3xl md:text-5xl font-arabic text-white drop-shadow-lg">
                    {index === couple1Index ? 
                      `${config.families.couple1.groomArabic} و ${config.families.couple1.brideArabic}` : 
                      `${config.families.couple2.groomArabic} و ${config.families.couple2.brideArabic}`
                    }
                  </h2>
                  <p className="text-xl md:text-2xl font-serif text-primary/90">
                    ({index === couple1Index ? 
                      `${config.families.couple1.groom} & ${config.families.couple1.bride}` : 
                      `${config.families.couple2.groom} & ${config.families.couple2.bride}`
                    })
                  </p>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {index === sequence.length - 1 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="mt-12"
          >
            <button
              onClick={onComplete}
              className="group flex items-center gap-2 text-primary font-sans tracking-[0.4em] uppercase text-[10px] border-b border-primary/30 pb-2 hover:border-primary transition-all bg-secondary/40 backdrop-blur-sm px-6 py-2 rounded-t-sm"
            >
              Enter Invitation
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        )}
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {sequence.map((_, i) => (
          <div 
            key={i} 
            className={`w-1 h-1 md:w-1.5 md:h-1.5 rounded-full transition-all duration-500 ${i === index ? "bg-primary w-4 md:w-6" : "bg-primary/20"}`}
          />
        ))}
      </div>
    </motion.div>
  );
}
