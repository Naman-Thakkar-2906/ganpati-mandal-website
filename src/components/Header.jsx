import { motion } from 'framer-motion';
import { config } from '../data/config';

const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="relative w-full z-50 pt-safe"
    >
      <div className="w-full bg-gradient-to-b from-ganpati-charcoal/90 to-transparent backdrop-blur-[2px] py-4 px-6 flex justify-center items-center">
        <h1 className="text-ganpati-gold font-devanagari font-bold tracking-wider text-xl md:text-2xl drop-shadow-md">
          {config.mandalName}
        </h1>
      </div>
    </motion.header>
  );
};

export default Header;
