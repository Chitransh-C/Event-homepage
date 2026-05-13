import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import MagneticButton from './MagneticButton';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Experiences', href: '/#experiences' },
    { name: 'Our Story', href: '/#story' },
    { name: 'Portfolio', href: '/#portfolio' },
    { name: 'Process', href: '/#process' },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
        delay: 1,
        staggerChildren: 0.1,
        delayChildren: 1.5,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <motion.nav 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 w-full z-[9500] transition-all duration-700 ${
        isScrolled ? 'py-4 glass border-b border-brand-gold/10' : 'py-4 md:py-8'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center relative">
        {/* Animated Reveal Line */}
        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
          className="absolute bottom-[-10px] left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent origin-left"
        />

        <motion.div 
          variants={itemVariants}
          className="text-2xl font-serif font-bold tracking-[0.3em] text-brand-ivory cursor-pointer"
        >
          <Link to="/">BLUEBERRY</Link>
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <motion.div key={link.name} variants={itemVariants}>
              <Link
                to={link.href}
                className="text-[10px] uppercase tracking-[0.3em] text-brand-ivory/60 hover:text-brand-gold transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-500 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
          <motion.div variants={itemVariants}>
            <Link 
              to="/#contact"
              className="px-8 py-2.5 border border-brand-gold/30 text-brand-gold text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-brand-gold hover:text-brand-midnight transition-all duration-500 block"
            >
              Get Proposal
            </Link>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <motion.button 
          variants={itemVariants}
          className="md:hidden text-brand-ivory"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full glass py-12 px-6 md:hidden overflow-hidden border-b border-brand-gold/10"
          >
            <div className="flex flex-col space-y-8 items-center text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-lg font-serif uppercase tracking-[0.3em] text-brand-ivory"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/#contact"
                className="w-full py-4 border border-brand-gold text-brand-gold text-xs uppercase tracking-[0.3em] font-bold text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Proposal
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
