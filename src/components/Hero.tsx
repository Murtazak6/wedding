"use client";

import { motion } from "framer-motion";
import { WeddingConfig } from "@/types/wedding";
import BackgroundCarousel from "./BackgroundCarousel";

interface HeroProps {
  config: WeddingConfig;
}

export default function Hero({ config }: HeroProps) {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden text-center px-4">
      {/* Background Media */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        {config.video.enabled ? (
          <div className="absolute inset-0">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={config.video.src} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ) : (
          <BackgroundCarousel images={config.heroImages} />
        )}
        <div className="absolute inset-0 islamic-pattern opacity-10 pointer-events-none" />
      </motion.div>

      <div className="relative z-10 space-y-8 text-white max-w-4xl">
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-4xl md:text-6xl font-arabic text-primary"
        >
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.2 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif">Save the Date</h2>
          <div className="font-serif text-sm md:text-lg text-primary/90 italic leading-relaxed max-w-2xl mx-auto space-y-4">
            <p>
              By the grace of Allah, and the blessings of the Duat Mutlaqeen (A.S), we solicit the pleasure of your company at the
            </p>
            <p className="text-xl md:text-2xl not-italic font-bold tracking-widest uppercase border-y border-primary/20 py-4">
              Sacred Union of
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.2 }}
          className="space-y-8 pt-4"
        >
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="text-3xl md:text-5xl font-arabic text-primary">
                {config.families.couple1.groomArabic} , {config.families.couple1.brideArabic}
              </div>
              <div className="text-2xl md:text-4xl font-accent text-primary">
                {config.families.couple1.groom} & {config.families.couple1.bride}
              </div>
            </div>

            {config.families.couple2 && (
              <>
                <div className="flex items-center justify-center gap-4 opacity-40">
                  <div className="h-[1px] w-8 bg-primary" />
                  <span className="font-serif italic text-xs">and</span>
                  <div className="h-[1px] w-8 bg-primary" />
                </div>

                <div className="space-y-2">
                  <div className="text-3xl md:text-5xl font-arabic text-primary">
                    {config.families.couple2.groomArabic} , {config.families.couple2.brideArabic}
                  </div>
                  <div className="text-2xl md:text-4xl font-accent text-primary">
                    {config.families.couple2.groom} & {config.families.couple2.bride}
                  </div>
                </div>
              </>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer"
          onClick={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
            }
          }}
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
