import { motion } from 'framer-motion'

export default function ScrollReveal({ children, direction = "up", delay = 0 }) {
  const directions = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: 50 },
    right: { x: -50 },
  }

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directions[direction]
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 1, 
        delay, 
        ease: [0.22, 1, 0.36, 1] 
      }}
    >
      {children}
    </motion.div>
  )
}
