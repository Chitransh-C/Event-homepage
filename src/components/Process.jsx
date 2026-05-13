import { motion } from 'framer-motion';

const steps = [
  { num: "01", title: "Discovery", desc: "Understanding your vision, values, and the emotions you want to evoke." },
  { num: "02", title: "Concept Design", desc: "Mood boards, spatial layouts, and sensory experience mapping." },
  { num: "03", title: "Experience Planning", desc: "The logistics of magic. Vendor curation and production timelines." },
  { num: "04", title: "Production", desc: "On-site execution with meticulous attention to every detail." },
  { num: "05", title: "Celebration", desc: "The final masterpiece. Your story told through an unforgettable event." },
];

import RevealText from './RevealText';
import ScrollReveal from './ScrollReveal';

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-gold uppercase tracking-[0.4em] text-[10px] mb-8 block"
          >
            The Journey
          </motion.span>
          <RevealText 
            text="How we bring dreams to life." 
            className="text-5xl md:text-8xl font-serif text-brand-ivory leading-tight" 
          />
        </div>

        <div className="relative">
          {/* Horizontal Line */}
          <div className="hidden md:block absolute top-[48px] left-0 w-full h-[1px] bg-brand-gold/10" />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-16 md:gap-12">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 0.1}>
                <div className="w-24 h-24 rounded-full border border-brand-gold/20 flex items-center justify-center mb-10 bg-brand-midnight relative z-10 mx-auto md:mx-0 group hover:border-brand-gold transition-all duration-500">
                  <span className="text-2xl font-serif text-brand-gold group-hover:scale-110 transition-transform duration-500">{step.num}</span>
                </div>
                <h3 className="text-2xl font-serif text-brand-ivory mb-6 text-center md:text-left">{step.title}</h3>
                <p className="text-brand-ivory/40 text-sm leading-relaxed text-center md:text-left">{step.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative Background Text */}
      <div className="absolute -bottom-10 left-0 w-full whitespace-nowrap opacity-[0.02] pointer-events-none select-none">
        <span className="text-[200px] font-serif text-brand-ivory font-bold uppercase tracking-widest">
          EXPERIENCE DESIGN PRODUCTION EMOTION
        </span>
      </div>
    </section>
  );
}
