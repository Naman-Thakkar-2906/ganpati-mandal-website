import { motion, useScroll, useTransform } from 'framer-motion';
import { config } from '../data/config';
import ganpatiImage from '../assets/ganpati-bappa.png';

const Hero = () => {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityFade = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="relative w-full min-h-[100svh] flex flex-col items-center justify-end pb-16 md:pb-20 pt-20 overflow-hidden perspective-1200 md:perspective-2000 pb-safe">
      {/* Background Image Layer with Parallax and Breathing */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ y: yParallax, opacity: opacityFade }}
      >
        <motion.div
          animate={{ 
            scale: [1, 1.03, 1],
            y: [0, -10, 0] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Main Ganpati Image */}
          <div 
            className="absolute inset-0 bg-no-repeat bg-cover bg-center md:bg-top opacity-100"
            style={{ 
              backgroundImage: `url(${ganpatiImage})`,
            }}
          />
        </motion.div>
        
        {/* Cinematic Gradients / Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-ganpati-charcoal/50 via-transparent to-ganpati-charcoal/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-ganpati-charcoal/60 pointer-events-none" />
      </motion.div>

      {/* Main Content (Title) */}
      <div className="relative z-20 w-full px-4 text-center mt-4 sm:mt-10 preserve-3d">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:transform md:translate-z-[80px]"
        >
          <h2 className="text-ganpati-gold font-devanagari text-base md:text-2xl mb-1 md:mb-2 tracking-wider text-shadow-glow">
            ॥ श्री गणेशाय नमः ॥
          </h2>
          <h3 className="text-ganpati-red font-devanagari text-lg md:text-3xl font-bold mb-2 md:mb-4 tracking-wide text-shadow-glow drop-shadow-md">
            गणपती बाप्पा मोरया
          </h3>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-devanagari font-bold text-ganpati-ivory mb-4 md:mb-6 text-shadow-glow drop-shadow-2xl leading-tight">
            {config.mandalName}
          </h1>
          <p className="text-sm sm:text-base md:text-xl text-ganpati-ivory/90 font-devanagari tracking-wide max-w-[90%] md:max-w-[80%] mx-auto bg-ganpati-charcoal/40 backdrop-blur-md px-5 py-1.5 rounded-full inline-block border border-ganpati-gold/30">
            {config.greeting}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
