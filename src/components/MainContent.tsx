"use client";

import Countdown from "./Countdown";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";
import SafeDateFormat from "./SafeDateFormat";
import { WeddingConfig } from "@/config/weddingConfig";

interface MainContentProps {
  config: WeddingConfig;
}

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    } 
  }
};

export default function MainContent({ config }: MainContentProps) {
  return (
    <div className="relative z-10 bg-accent islamic-pattern">
      {/* Couples Announcement */}
      <section className="py-24 px-4 max-w-6xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-secondary mb-4">The Happy Couples</h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
          {[config.families.couple1, config.families.couple2].map((couple, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
              className="flex flex-col items-center"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-sm shadow-xl mb-8 group border border-primary/10">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors duration-500 z-10" />
                <Image 
                  src={couple.image} 
                  alt={`${couple.groom} & ${couple.bride}`}
                  fill
                  className="object-cover object-top grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                  unoptimized
                />
              </div>
              <div className="text-center space-y-2">
                <p className="text-3xl md:text-4xl font-arabic text-primary">
                  {couple.groomArabic} , {couple.brideArabic}
                </p>
                <h3 className="text-3xl md:text-4xl font-accent text-primary">
                  {couple.groom} & {couple.bride}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-16 bg-secondary/5 border-y border-primary/10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="text-center"
        >
          <p className="uppercase tracking-widest text-xs mb-8 opacity-60 font-sans">Counting down to the big day</p>
          <Countdown targetDate={config.events[0].date} />
        </motion.div>
      </section>

      {/* Events Section */}
      <section className="py-24 px-4 max-w-6xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-secondary mb-4">Celebration Details</h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {config.events.map((event, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
              className="bg-white p-8 md:p-12 rounded-sm shadow-sm border border-primary/10 hover:border-primary/30 transition-colors"
            >
              <h3 className="text-2xl font-serif text-secondary mb-6 border-b border-primary/10 pb-4">{event.name}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 text-gray-700">
                  <Calendar className="w-5 h-5 text-primary mt-1" />
                  <div className="flex flex-col">
                    <span className="font-sans">
                      <SafeDateFormat date={event.date} />
                    </span>
                    {event.hijriDate && (
                      <span className="font-sans text-sm text-primary/80 font-medium">
                        {event.hijriDate}
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-4 text-gray-700">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-sans">{event.time}</span>
                </div>
                <div className="flex items-start gap-4 text-gray-700">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div className="font-sans">
                    <p className="font-semibold text-secondary">{event.venue}</p>
                    <p className="text-sm opacity-80">{event.address}</p>
                  </div>
                </div>
              </div>
              <a 
                href={event.googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-8 px-6 py-2 border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 font-sans text-sm tracking-widest uppercase"
              >
                View on Map
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Family Section */}
      <section className="py-24 px-4 bg-secondary text-white text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="max-w-4xl mx-auto space-y-10"
        >
          <h2 className="text-3xl md:text-5xl font-arabic text-primary leading-loose">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </h2>
          
          <div className="space-y-8">
            <p className="text-xl md:text-2xl font-serif leading-relaxed italic opacity-90">
              With immense joy and gratitude, and with the blessings and duas of <br className="hidden md:block" />
              <span className="text-primary not-italic font-bold">Syedna Mufaddal Saifuddin (TUS)</span>,
            </p>
            
            <p className="text-lg md:text-xl font-sans leading-relaxed opacity-80">
              We invite you to celebrate the sacred union of
            </p>
            
              <div className="space-y-2">
                <h3 className="text-4xl md:text-6xl font-arabic text-primary">
                  {config.families.couple1.groomArabic} , {config.families.couple1.brideArabic}
                </h3>
                <p className="text-2xl md:text-4xl font-accent text-primary">
                  {config.families.couple1.groom} & {config.families.couple1.bride}
                </p>
              </div>

              <div className="flex items-center justify-center gap-4 opacity-30">
                <div className="h-[1px] w-12 bg-primary" />
                <span className="font-serif italic text-sm">and</span>
                <div className="h-[1px] w-12 bg-primary" />
              </div>

              <div className="space-y-2">
                <h3 className="text-4xl md:text-6xl font-arabic text-primary">
                  {config.families.couple2.groomArabic} , {config.families.couple2.brideArabic}
                </h3>
                <p className="text-2xl md:text-4xl font-accent text-primary">
                  {config.families.couple2.groom} & {config.families.couple2.bride}
                </p>
              </div>
            
            <p className="text-lg md:text-xl font-serif italic text-primary leading-relaxed max-w-2xl mx-auto">
              May Allah bless these unions with سعادة (happiness), بركة (barakat), and رحمة (mercy).
            </p>

            <p className="text-lg md:text-xl font-sans opacity-80">
              Your presence will honor our celebration.
            </p>
          </div>

          <div className="pt-12 border-t border-primary/20 space-y-4">
            <div className="space-y-1">
              <p className="text-2xl md:text-3xl font-arabic text-primary">مع الدعاء</p>
              <p className="text-xs uppercase tracking-[0.2em] opacity-60 font-sans italic">With Duas,</p>
            </div>
            <h2 className="text-2xl md:text-4xl font-serif text-primary tracking-wide">
              {config.families.familyName}
            </h2>
          </div>
        </motion.div>
      </section>

      {/* Stay Tuned Section */}
      <section className="py-24 px-4 bg-accent islamic-pattern border-t border-primary/10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <div className="inline-block p-4 rounded-full bg-secondary/5 text-secondary mb-4">
            <Clock className="w-8 h-8 animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-secondary tracking-tight">Stay Tuned</h2>
          <div className="space-y-4">
            <p className="text-lg md:text-xl text-gray-700 font-sans leading-relaxed">
              {config.stayTuned.message}
            </p>
            <p className="text-sm text-primary uppercase tracking-[0.3em] font-sans font-semibold">
              {config.stayTuned.subtext}
            </p>
          </div>
          <div className="pt-8 flex justify-center gap-6 opacity-30">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="w-2 h-2 rounded-full bg-primary" />
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 text-center border-t border-primary/10 bg-white">
        <p className="font-arabic text-secondary/80 text-lg mb-4">
          With blessings and duas, we invite you to celebrate with us
        </p>
        <div className="text-[10px] uppercase tracking-[0.3em] opacity-40 font-sans">
          Kankroliwala Family Wedding 2026
        </div>
      </footer>
    </div>
  );
}
