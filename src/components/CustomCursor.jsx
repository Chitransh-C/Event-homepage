import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  
  const mouseX = useSpring(0, { stiffness: 400, damping: 40 });
  const mouseY = useSpring(0, { stiffness: 400, damping: 40 });
  const innerX = useSpring(0, { stiffness: 1000, damping: 60 });
  const innerY = useSpring(0, { stiffness: 1000, damping: 60 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      innerX.set(e.clientX);
      innerY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('button, a, .interactive, select, input, textarea')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [mouseX, mouseY, innerX, innerY]);

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 rounded-full border border-brand-gold/30 pointer-events-none z-[10000] mix-blend-difference flex items-center justify-center"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          scale: isMouseDown ? 0.8 : isHovered ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 20 }}
      >
        <div className={`w-1 h-1 bg-brand-gold rounded-full transition-all duration-300 ${isHovered ? 'scale-0' : 'scale-100'}`} />
      </motion.div>

      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-brand-gold rounded-full pointer-events-none z-[9999]"
        style={{
          x: innerX,
          y: innerY,
          translateX: '-50%',
          translateY: '-50%',
          scale: isMouseDown ? 0.5 : isHovered ? 4 : 1,
          opacity: isHovered ? 0.15 : 1,
        }}
      />
    </>
  );
}
