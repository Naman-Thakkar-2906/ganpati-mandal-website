import { motion } from 'framer-motion';
import { config } from '../data/config';

const QuickActions = () => {
  if (!config.quickActions || config.quickActions.length === 0) return null;

  return (
    <div className="w-full max-w-4xl mx-auto px-4 mt-8 md:mt-12 z-30 relative preserve-3d">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
        {config.quickActions.map((action, index) => {
          const Icon = action.icon;
          return (
            <motion.a
              key={action.id}
              href={action.url}
              target={action.url.startsWith('http') ? '_blank' : '_self'}
              rel={action.url.startsWith('http') ? 'noopener noreferrer' : ''}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              whileTap={{ scale: 0.95, z: 10 }}
              whileHover={{ 
                scale: 1.05, 
                z: 20, 
                boxShadow: "0 10px 30px rgba(212, 175, 55, 0.2)"
              }}
              className="flex flex-col items-center justify-center gap-2 p-4 md:p-6 rounded-2xl bg-ganpati-charcoal/60 backdrop-blur-md border border-ganpati-gold/20 hover:border-ganpati-gold/50 shadow-lg group preserve-3d cursor-pointer"
            >
              <div className="relative">
                <Icon className="w-6 h-6 md:w-8 md:h-8 text-ganpati-ivory group-hover:text-ganpati-gold transition-colors" />
                <div className="absolute inset-0 bg-ganpati-gold blur-md opacity-0 group-hover:opacity-40 transition-opacity" />
              </div>
              <span className="text-ganpati-ivory font-devanagari text-sm md:text-base font-medium text-center">
                {action.title}
              </span>
              
              {/* Optional Light Sweep on hover/tap */}
              <div className="light-sweep" />
            </motion.a>
          );
        })}
      </div>
    </div>
  );
};

export default QuickActions;
