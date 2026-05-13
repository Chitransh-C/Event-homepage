import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import port1Img from '../assets/portfolio-1.png';
import weddingImg from '../assets/wedding.png';
import concertImg from '../assets/concert.png';
import partyImg from '../assets/party.png';
import RevealText from './RevealText';

const portfolioItems = [
  { id: 1, title: "The Royal Udaipur Gala", category: "Palace Wedding", image: port1Img, size: "large", parallax: -50 },
  { id: 2, title: "Mumbai Skyline Soirée", category: "Private Party", image: partyImg, size: "small", parallax: 30 },
  { id: 3, title: "Lotus Dreams Mehendi", category: "Traditional", image: weddingImg, size: "small", parallax: -20 },
  { id: 4, title: "Symphony of Sangeet", category: "Bollywood Night", image: concertImg, size: "medium", parallax: 40 },
];

function PortfolioCard({ item }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, item.parallax]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden cursor-pointer ${
        item.size === 'large' ? 'md:col-span-2 md:row-span-2 h-[500px] md:h-[800px]' : 
        item.size === 'medium' ? 'md:col-span-2 h-[300px] md:h-[400px]' : 'h-[300px] md:h-[400px]'
      }`}
    >
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%]">
        <img 
          src={item.image} 
          alt={item.title}
          className="w-full h-full object-cover transition-all duration-[1.5s] ease-out group-hover:scale-110"
        />
      </motion.div>
      <div className="absolute inset-0 bg-brand-midnight/60 opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-8 md:p-10">
        <span className="text-brand-gold text-[8px] md:text-[10px] uppercase tracking-[0.4em] mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">{item.category}</span>
        <h3 className="text-2xl md:text-3xl font-serif text-brand-ivory transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100">{item.title}</h3>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-gold uppercase tracking-[0.5em] text-[10px] mb-8 block"
          >
            The Curated Collection
          </motion.span>
          <RevealText 
            text="A Gallery of Excellence." 
            className="text-5xl md:text-8xl font-serif text-brand-ivory leading-tight" 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 auto-rows-min">
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
        
        <div className="mt-32 text-center">
          <Link 
            to="/gallery"
            className="inline-block text-brand-gold uppercase tracking-[0.4em] text-[10px] border-b border-brand-gold/30 pb-2 hover:text-brand-ivory hover:border-brand-ivory transition-all duration-500"
          >
            View All Grand Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
