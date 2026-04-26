"use client";

import { motion } from "framer-motion";
import { WeddingConfig } from "@/config/weddingConfig";
import { MailOpen } from "lucide-react";

interface EnvelopeProps {
  config: WeddingConfig;
  onOpen: () => void;
}

export default function Envelope({ config, onOpen }: EnvelopeProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-accent islamic-pattern p-4"
    >
      <div className="relative w-full max-w-lg aspect-[4/3] flex flex-col items-center justify-center text-center space-y-8">
        <h1 className="text-2xl md:text-3xl font-serif text-secondary">Save the Date</h1>
        {/* Envelope Visual */}
        <motion.div 
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="relative w-80 h-64 md:w-96 md:h-72 bg-[#FCFAF7] shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-sm border border-primary/20 flex items-center justify-center group"
        >
          {/* Decorative Corner Borders */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-primary/30" />
          <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-primary/30" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-primary/30" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-primary/30" />

          {/* Gold Foil Seal */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-primary via-[#D4AF37] to-primary rounded-full shadow-lg flex items-center justify-center border-4 border-white z-1000">
            <span className="text-white font-serif text-xl font-bold">K</span>
          </div>
          
          <div className="p-12 flex justify-center items-center gap-6 md:gap-10 relative">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <img 
                  src={config.families.couple1.initial_img} 
                  alt="Couple 1 Initials" 
                  className="w-24 md:w-32 h-auto object-contain drop-shadow-[0_5px_15px_rgba(197,164,109,0.3)]" 
                />
              </motion.div>
              
              <div className="text-primary font-accent text-4xl md:text-5xl opacity-40 select-none">&</div>

              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <img 
                  src={config.families.couple2.initial_img} 
                  alt="Couple 2 Initials" 
                  className="w-24 md:w-32 h-auto object-contain drop-shadow-[0_5px_15px_rgba(197,164,109,0.3)]" 
                />
              </motion.div>
          </div>
        </motion.div>

        <div className="space-y-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpen}
            className="group flex items-center gap-3 bg-secondary text-white px-8 py-4 rounded-full shadow-xl hover:bg-primary transition-all duration-500 font-sans tracking-[0.2em] uppercase text-xs"
          >
            <MailOpen className="w-4 h-4 group-hover:animate-bounce" />
            Reveal Invitation
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
