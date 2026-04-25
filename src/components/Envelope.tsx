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
        {/* Envelope Visual */}
        <motion.div 
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="relative w-64 h-48 bg-white shadow-2xl rounded-sm border-2 border-primary/20 flex items-center justify-center group"
        >
          {/* Gold Foil Seal */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-primary rounded-full shadow-lg flex items-center justify-center border-4 border-white z-10">
            <span className="text-white font-serif text-xl">K</span>
          </div>
          
          <div className="p-8 space-y-4">
            <p className="font-arabic text-secondary text-sm opacity-60 italic">
              {config.announcement.intro}
            </p>
            <div className="w-12 h-[1px] bg-primary/30 mx-auto" />
            <p className="font-serif text-secondary tracking-widest uppercase text-xs">
              {config.families.familyName}
            </p>
          </div>
        </motion.div>

        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl font-serif text-secondary">A Blessed Invitation</h1>
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
