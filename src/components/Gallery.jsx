import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import RevealText from './RevealText';
import ScrollReveal from './ScrollReveal';

// Existing assets
import weddingImg from '../assets/wedding.png';
import concertImg from '../assets/concert.png';
import partyImg from '../assets/party.png';
import port1Img from '../assets/portfolio-1.png';
import heroImg from '../assets/hero.png';
import aboutImg from '../assets/about.png';

const galleryItems = [
  { id: 1, title: "Royal Udaipur Gala", category: "Palace Wedding", image: port1Img, span: "md:col-span-2 md:row-span-2" },
  { id: 2, title: "Symphony of Sangeet", category: "Bollywood Night", image: concertImg, span: "" },
  { id: 3, title: "Lotus Dreams", category: "Mehendi", image: weddingImg, span: "" },
  { id: 4, title: "Mumbai Skyline", category: "Private Party", image: partyImg, span: "md:col-span-2" },
  { id: 5, title: "Heritage Soirée", category: "Reception", image: heroImg, span: "" },
  { id: 6, title: "Eternal Echoes", category: "Cultural", image: aboutImg, span: "" },
  { id: 7, title: "The Golden Mandap", category: "Traditional", image: weddingImg, span: "md:col-span-2 md:row-span-2" },
  { id: 8, title: "Neon Nights", category: "Concert", image: concertImg, span: "" },
  { id: 9, title: "Velvet Dreams", category: "Bespoke", image: partyImg, span: "" },
];

export default function Gallery() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const customItems = JSON.parse(localStorage.getItem("gallery_custom_items") || "[]");
    setItems([...galleryItems, ...customItems]);
  }, []);

  return (
    <div className="min-h-screen bg-transparent pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <Link 
              to="/" 
              className="inline-flex items-center text-brand-gold text-[10px] uppercase tracking-[0.4em] mb-8 group hover:text-brand-ivory transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-2" />
              Back to Journey
            </Link>
            <RevealText 
              text="The Archive of Grandeur." 
              className="text-5xl md:text-8xl font-serif text-brand-ivory leading-tight" 
            />
          </div>
          <p className="text-brand-ivory/40 text-xs uppercase tracking-[0.3em] max-w-xs border-l border-brand-gold/20 pl-6 leading-loose">
            A curated collection of our most iconic celebrations, from historic palace weddings to modern immersive experiences.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 auto-rows-[300px] md:auto-rows-[400px]">
          {items.map((item, i) => (
            <ScrollReveal 
              key={item.id} 
              delay={i * 0.1}
              className={`relative overflow-hidden group cursor-pointer ${item.span}`}
            >
              <motion.img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-midnight/60 opacity-0 group-hover:opacity-100 transition-all duration-700 flex flex-col justify-end p-8">
                <span className="text-brand-gold text-[8px] uppercase tracking-[0.4em] mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {item.category}
                </span>
                <h3 className="text-2xl font-serif text-brand-ivory transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  {item.title}
                </h3>
              </div>
              
              {/* Corner Accents */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-brand-gold/0 group-hover:border-brand-gold/40 transition-all duration-700" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-brand-gold/0 group-hover:border-brand-gold/40 transition-all duration-700" />
            </ScrollReveal>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-32 text-center border-t border-brand-ivory/10 pt-20">
          <p className="text-brand-gold uppercase tracking-[0.5em] text-[10px] mb-8">Ready to create your own?</p>
          <Link 
            to="/#contact"
            className="text-4xl md:text-6xl font-serif text-brand-ivory hover:text-brand-gold transition-colors underline underline-offset-[12px] decoration-brand-gold/30 hover:decoration-brand-gold"
          >
            Let's Start Planning
          </Link>
        </div>
      </div>
    </div>
  );
}
