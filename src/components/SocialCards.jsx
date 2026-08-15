import { useEffect, useState } from 'react';
import FloatingCard from './FloatingCard';
import { config } from '../data/config';
import { motion } from 'framer-motion';

const SocialCards = () => {
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== 'undefined' ? window.innerWidth >= 1024 : true
  );

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const activeLinks = config.socialLinks.filter(link => link.enabled);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 relative z-20 pb-16 md:pb-24">
      {/* Mobile/Tablet Layout (Touch Optimized) */}
      {!isDesktop && (
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6"
        >
          {activeLinks.map((link) => (
            <motion.div key={link.id} variants={item}>
              <FloatingCard
                {...link}
                isDesktop={isDesktop}
              />
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Desktop Layout (Artistic Floating) */}
      {isDesktop && (
        <div className="perspective-2000 relative min-h-[600px] mt-20">
          <motion.div 
            className="absolute left-0 top-10 w-80 preserve-3d"
            style={{ transform: "translateZ(50px) rotateY(10deg)" }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {activeLinks[0] && <FloatingCard {...activeLinks[0]} isDesktop={isDesktop} className="mb-8" />}
            {activeLinks[3] && <FloatingCard {...activeLinks[3]} isDesktop={isDesktop} />}
          </motion.div>
          
          <motion.div 
            className="absolute right-0 top-0 w-80 preserve-3d"
            style={{ transform: "translateZ(80px) rotateY(-15deg)" }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {activeLinks[1] && <FloatingCard {...activeLinks[1]} isDesktop={isDesktop} className="mb-8" />}
            {activeLinks[4] && <FloatingCard {...activeLinks[4]} isDesktop={isDesktop} />}
          </motion.div>

          <motion.div 
            className="absolute left-1/4 bottom-0 w-72 preserve-3d"
            style={{ transform: "translateZ(120px) rotateX(10deg)" }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {activeLinks[2] && <FloatingCard {...activeLinks[2]} isDesktop={isDesktop} />}
          </motion.div>

          <motion.div 
            className="absolute right-1/4 bottom-10 w-72 preserve-3d"
            style={{ transform: "translateZ(40px) rotateX(5deg) rotateY(-5deg)" }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {activeLinks[5] && <FloatingCard {...activeLinks[5]} isDesktop={isDesktop} />}
          </motion.div>
          
          <motion.div 
            className="absolute right-0 bottom-[-50px] w-72 preserve-3d"
            style={{ transform: "translateZ(90px) rotateX(8deg)" }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {activeLinks[6] && <FloatingCard {...activeLinks[6]} isDesktop={isDesktop} />}
          </motion.div>
          
          <motion.div 
            className="absolute left-10 bottom-[-30px] w-72 preserve-3d"
            style={{ transform: "translateZ(60px) rotateY(12deg)" }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {activeLinks[7] && <FloatingCard {...activeLinks[7]} isDesktop={isDesktop} />}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default SocialCards;
