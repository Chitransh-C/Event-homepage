import { motion } from 'framer-motion';
import RevealText from './RevealText';
import ScrollReveal from './ScrollReveal';
import MagneticButton from './MagneticButton';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-transparent">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-gold uppercase tracking-[0.5em] text-[10px] mb-8 block"
          >
            The First Step
          </motion.span>
          <RevealText 
            text="Begin Your Journey." 
            className="text-5xl md:text-8xl font-serif text-brand-ivory mb-12 leading-tight" 
          />
          <p className="text-brand-ivory/50 text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Tell us about your vision. We’ll respond with the elegance and artistry that your celebration deserves.
          </p>
        </div>

        <ScrollReveal>
          <form className="glass p-8 md:p-20 space-y-8 md:y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="space-y-4">
                <label className="text-[8px] md:text-[10px] uppercase tracking-[0.4em] text-brand-gold/60 font-bold">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-brand-ivory/10 py-3 md:py-4 text-brand-ivory focus:border-brand-gold outline-none transition-all duration-500 text-base md:text-lg font-light placeholder:text-brand-ivory/20"
                  placeholder="Ex. Alexander Knight"
                />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.4em] text-brand-gold/60 font-bold">Event Type</label>
                <select className="w-full bg-transparent border-b border-brand-ivory/10 py-4 text-brand-ivory focus:border-brand-gold outline-none transition-all duration-500 text-lg font-light appearance-none cursor-pointer">
                  <option className="bg-brand-midnight">Royal Wedding</option>
                  <option className="bg-brand-midnight">Sangeet / Bollywood Night</option>
                  <option className="bg-brand-midnight">Mehendi Ceremony</option>
                  <option className="bg-brand-midnight">Luxury Reception</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.4em] text-brand-gold/60 font-bold">Preferred Date</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-brand-ivory/10 py-4 text-brand-ivory focus:border-brand-gold outline-none transition-all duration-500 text-lg font-light placeholder:text-brand-ivory/20"
                  placeholder="MM / DD / YYYY"
                />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] uppercase tracking-[0.4em] text-brand-gold/60 font-bold">Budget Range</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-brand-ivory/10 py-4 text-brand-ivory focus:border-brand-gold outline-none transition-all duration-500 text-lg font-light placeholder:text-brand-ivory/20"
                  placeholder="$50k - $100k+"
                />
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-[10px] uppercase tracking-[0.4em] text-brand-gold/60 font-bold">Your Vision</label>
              <textarea 
                rows="4"
                className="w-full bg-transparent border-b border-brand-ivory/10 py-4 text-brand-ivory focus:border-brand-gold outline-none transition-all duration-500 text-lg font-light resize-none placeholder:text-brand-ivory/20"
                placeholder="Describe the atmosphere and emotions you wish to evoke..."
              />
            </div>

            <div className="text-center pt-12">
              <MagneticButton className="px-20 py-6 bg-brand-gold text-brand-midnight uppercase tracking-[0.3em] font-bold hover:bg-brand-ivory transition-all duration-500 shadow-2xl shadow-brand-gold/20">
                Request Your Proposal
              </MagneticButton>
            </div>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
