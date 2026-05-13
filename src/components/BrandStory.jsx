import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import aboutImg from '../assets/about.png';

import RevealText from './RevealText';
import ScrollReveal from './ScrollReveal';

export default function BrandStory() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section id="story" ref={containerRef} className="py-24 md:py-40 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        <ScrollReveal direction="right" className="relative h-[400px] md:h-[800px] overflow-hidden">
          <motion.div style={{ y }} className="w-full h-[120%]">
            <img 
              src={aboutImg} 
              alt="Our Story"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[2s]"
            />
          </motion.div>
          <div className="absolute top-6 left-6 md:top-10 md:left-10 w-full h-full border border-brand-gold/20 -z-10 translate-x-3 translate-y-3 md:translate-x-6 md:translate-y-6" />
        </ScrollReveal>

        <div className="max-w-xl">
          <ScrollReveal direction="left">
            <span className="text-brand-gold uppercase tracking-[0.4em] text-[10px] mb-8 block">Our Essence</span>
            <RevealText 
              text="Artistry in every moment." 
              className="text-5xl md:text-8xl font-serif text-brand-ivory mb-12 leading-[1.1]" 
            />
            <p className="text-brand-ivory/60 text-xl font-light leading-relaxed mb-8">
              Blueberry Events was founded on the belief that Indian celebrations are a rich tapestry of culture and emotion. We don't just organize; we compose experiences that honor heritage while embracing modern luxury.
            </p>
            <p className="text-brand-ivory/60 text-xl font-light leading-relaxed mb-16">
              From the grand palaces of Udaipur to the contemporary skylines of Mumbai, our team works in harmony to ensure your vision is realized with uncompromising elegance and bespoke precision.
            </p>
            
            <div className="grid grid-cols-2 gap-12 py-12 border-y border-brand-ivory/10">
              <div>
                <h4 className="text-4xl font-serif text-brand-gold mb-3 tracking-wider">12+</h4>
                <p className="text-[10px] uppercase tracking-[0.3em] text-brand-ivory/40 font-bold">Years of Expertise</p>
              </div>
              <div>
                <h4 className="text-4xl font-serif text-brand-gold mb-3 tracking-wider">500+</h4>
                <p className="text-[10px] uppercase tracking-[0.3em] text-brand-ivory/40 font-bold">Grand Events</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
