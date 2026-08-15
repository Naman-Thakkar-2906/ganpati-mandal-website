import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, X } from 'lucide-react';
import { config } from '../data/config';

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(config.announcement.enabled);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="relative w-full z-[60] bg-ganpati-burgundy border-b border-ganpati-gold/30 shadow-md pt-safe h-[44px] md:h-[48px] flex items-center shrink-0"
        >
          <div className="w-full max-w-7xl mx-auto px-3 md:px-4 flex items-center justify-between gap-2 h-full">
            
            <div className="flex items-center gap-2 flex-1 min-w-0 h-full">
              <Bell className="w-3.5 h-3.5 md:w-4 md:h-4 text-ganpati-gold shrink-0" />
              <span className="text-ganpati-gold font-devanagari font-bold text-[11px] md:text-xs whitespace-nowrap shrink-0 tracking-wide">
                {config.announcement.title} •
              </span>
              
              {/* Ticker / Marquee Container */}
              <div className="flex-1 overflow-hidden h-full flex items-center relative">
                <div className="w-full overflow-hidden whitespace-nowrap">
                  <p className="inline-block text-ganpati-ivory font-devanagari text-[11px] md:text-xs animate-[marquee_15s_linear_infinite] md:animate-none md:truncate">
                    {config.announcement.link ? (
                      <a href={config.announcement.link} className="hover:text-ganpati-gold transition-colors">
                        {config.announcement.message}
                      </a>
                    ) : (
                      config.announcement.message
                    )}
                  </p>
                </div>
              </div>
            </div>
            
            {config.announcement.dismissible && (
              <button 
                onClick={() => setIsVisible(false)}
                className="shrink-0 p-1 md:p-1.5 hover:bg-white/10 rounded-full transition-colors ml-1"
                aria-label="Close announcement"
              >
                <X className="w-3.5 h-3.5 md:w-4 md:h-4 text-ganpati-ivory/80 hover:text-ganpati-ivory" />
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnnouncementBar;
