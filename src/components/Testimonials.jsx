import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Eleanor Vance",
    role: "Private Client",
    text: "Blueberry Events didn't just plan our wedding; they captured the very essence of our relationship and turned it into an atmosphere. It was truly dreamlike.",
  },
  {
    name: "Marcus Thorne",
    role: "Entertainment Director",
    text: "The level of production and artistic vision provided by the team is unparalleled. They are the only choice for high-end immersive experiences.",
  }
];

import RevealText from './RevealText';
import ScrollReveal from './ScrollReveal';

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-gold uppercase tracking-[0.4em] text-[10px] mb-8 block"
          >
            Kind Words
          </motion.span>
          <RevealText 
            text="Client Stories." 
            className="text-5xl md:text-8xl font-serif text-brand-ivory leading-tight" 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.2}>
              <div className="glass p-16 relative group hover:border-brand-gold/30 transition-all duration-700">
                <Quote className="text-brand-gold/10 absolute top-10 right-10 w-20 h-20 group-hover:text-brand-gold/20 transition-colors duration-700" />
                <p className="text-2xl md:text-3xl font-serif text-brand-ivory mb-12 italic leading-relaxed relative z-10">
                  "{t.text}"
                </p>
                <div className="flex items-center space-x-6">
                  <div className="w-12 h-[1px] bg-brand-gold/50" />
                  <div>
                    <h4 className="text-brand-gold font-serif text-2xl tracking-wide">{t.name}</h4>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-brand-ivory/30 font-bold mt-1">{t.role}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
