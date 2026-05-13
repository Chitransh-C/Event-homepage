import { motion } from 'framer-motion';
import heroImg from '../assets/hero.png';
import RevealText from './RevealText';
import MagneticButton from './MagneticButton';

export default function Hero() {
  return (
    <section className="relative min-h-screen md:h-screen w-full overflow-hidden flex items-start md:items-center justify-center pt-40 md:pt-0">
      {/* Background Image with Zoom Animation */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          src={heroImg} 
          alt="Luxury Indian Wedding"
          className="w-full h-full object-cover"
          initial={{ scale: 1.3, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            scale: { duration: 25, ease: "linear", repeat: Infinity, repeatType: "alternate" },
            opacity: { duration: 3, ease: [0.22, 1, 0.36, 1] }
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-midnight/80 via-brand-midnight/40 to-brand-midnight" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.span
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block text-brand-gold uppercase tracking-[0.4em] md:tracking-[0.5em] text-[8px] md:text-xs mb-6 md:mb-10"
        >
          Exclusive Indian Event Design & Planning
        </motion.span>
        
        <RevealText 
          text="Grand Indian Celebrations." 
          delay={2.2}
          className="text-3xl sm:text-6xl md:text-8xl font-serif text-brand-ivory mb-8 md:mb-12 leading-tight tracking-tight" 
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 3.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto text-brand-ivory/50 text-lg md:text-xl font-light mb-16 leading-relaxed"
        >
          From royal palace weddings in Rajasthan to high-octane Bollywood nights, <br className="hidden md:block" />
          we design immersive experiences rooted in heritage and luxury.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 4.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row items-center justify-center gap-8"
        >
          <MagneticButton className="px-12 py-5 bg-brand-gold text-brand-midnight uppercase tracking-[0.3em] font-bold hover:bg-brand-ivory transition-all duration-500 shadow-xl shadow-brand-gold/10">
            Get Proposal
          </MagneticButton>
          <MagneticButton className="px-12 py-5 border border-brand-ivory/20 text-brand-ivory uppercase tracking-[0.2em] font-light hover:bg-brand-ivory/10 transition-all duration-500 backdrop-blur-sm">
            Explore Experiences
          </MagneticButton>
        </motion.div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute left-10 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-brand-gold/20 to-transparent" />
      <div className="absolute right-10 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-brand-gold/20 to-transparent" />

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 6, duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center group cursor-pointer"
        onClick={() => document.getElementById('experiences')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[9px] uppercase tracking-[0.5em] mb-4 text-brand-gold opacity-40 group-hover:opacity-100 transition-opacity">Discover</span>
        <div className="w-[1px] h-16 bg-brand-gold/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: [-64, 64] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full bg-brand-gold" 
          />
        </div>
      </motion.div>
    </section>
  );
}
