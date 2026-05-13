import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-20 bg-brand-midnight border-t border-brand-ivory/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-serif font-bold tracking-widest text-brand-ivory mb-6">BLUEBERRY</h2>
            <p className="text-brand-ivory/50 max-w-sm text-sm leading-relaxed">
              Crafting world-class experiences and emotional narratives for the most discerning clients. Based in Mumbai & Udaipur, available globally.
            </p>
          </div>
          
          <div>
            <h4 className="text-brand-gold uppercase tracking-widest text-[10px] mb-6 font-bold">Contact</h4>
            <ul className="space-y-4 text-sm text-brand-ivory/70">
              <li>Inquiry: namaste@blueberryevents.in</li>
              <li>Phone: +91 22 2345 6789</li>
              <li>Studio: Juhu, Mumbai</li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-gold uppercase tracking-widest text-[10px] mb-6 font-bold">Follow</h4>
            <ul className="space-y-4 text-sm text-brand-ivory/70">
              <li>Instagram</li>
              <li>Vimeo</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-brand-ivory/5 text-[10px] uppercase tracking-widest text-brand-ivory/30">
          <p>© 2026 Blueberry Events. All Rights Reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
