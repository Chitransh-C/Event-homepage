import { motion } from 'framer-motion';
import weddingImg from '../assets/wedding.png';
import concertImg from '../assets/concert.png';
import partyImg from '../assets/party.png';
import RevealText from './RevealText';

const experiences = [
  {
    title: "Royal Weddings",
    description: "Grand mandaps, royal processions, and timeless Vedic traditions reimagined for the modern era.",
    image: weddingImg,
    category: "Signature",
    delay: 0.1
  },
  {
    title: "Bollywood & Concerts",
    description: "Electrifying Sangeet nights and high-end entertainment production for massive audiences.",
    image: concertImg,
    category: "Immersive",
    delay: 0.3
  },
  {
    title: "Heritage Soirées",
    description: "Intimate mehendi ceremonies and grand receptions in historic havelis and palaces.",
    image: partyImg,
    category: "Bespoke",
    delay: 0.5
  }
];

export default function Experiences() {
  return (
    <section id="experiences" className="py-24 md:py-32 bg-transparent relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-brand-gold uppercase tracking-[0.4em] text-[10px] mb-6 block"
            >
              Curated Experiences
            </motion.span>
            <RevealText 
              text="Signature Events Designed to Inspire." 
              className="text-5xl md:text-8xl font-serif text-brand-ivory leading-[1.1]" 
            />
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-brand-ivory/50 mt-12 md:mt-0 max-w-xs text-xs uppercase tracking-[0.2em] leading-loose border-l border-brand-gold/30 pl-6"
          >
            We don't just plan events; we architect emotions and memories that last a lifetime.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: exp.delay, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative h-[500px] md:h-[650px] overflow-hidden cursor-pointer"
            >
              <img 
                src={exp.image} 
                alt={exp.title}
                className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight via-brand-midnight/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-10">
                <span className="text-brand-gold text-[8px] md:text-[10px] uppercase tracking-[0.4em] mb-4 block transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                  {exp.category}
                </span>
                <h3 className="text-3xl md:text-4xl font-serif text-brand-ivory mb-6 transform group-hover:-translate-y-2 transition-transform duration-700">{exp.title}</h3>
                <p className="text-brand-ivory/60 text-xs md:text-sm leading-relaxed mb-8 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                  {exp.description}
                </p>
                <div className="h-[1px] w-0 bg-brand-gold group-hover:w-full transition-all duration-[1s] ease-in-out" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
