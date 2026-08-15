import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Lightbox = ({ selectedId, onClose, onNavigate, images }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate(1);
      if (e.key === 'ArrowLeft') onNavigate(-1);
    };

    if (selectedId !== null) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [selectedId, onClose, onNavigate]);

  if (selectedId === null || !images) return null;

  const currentImage = images.find((img) => img.id === selectedId);

  if (!currentImage) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-ganpati-charcoal/90 backdrop-blur-lg pt-safe pb-safe"
        onClick={onClose}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-[110] p-2 bg-ganpati-charcoal/50 text-ganpati-ivory rounded-full hover:bg-ganpati-red hover:text-white transition-colors"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        <button 
          onClick={(e) => { e.stopPropagation(); onNavigate(-1); }}
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-[110] p-3 md:p-4 bg-ganpati-charcoal/50 text-ganpati-ivory rounded-full hover:bg-ganpati-gold transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft size={24} />
        </button>

        <button 
          onClick={(e) => { e.stopPropagation(); onNavigate(1); }}
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-[110] p-3 md:p-4 bg-ganpati-charcoal/50 text-ganpati-ivory rounded-full hover:bg-ganpati-gold transition-colors"
          aria-label="Next"
        >
          <ChevronRight size={24} />
        </button>

        <motion.div
          key={currentImage.id}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.7}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = Math.abs(offset.x) * velocity.x;
            if (swipe < -100) {
              onNavigate(1);
            } else if (swipe > 100) {
              onNavigate(-1);
            }
          }}
          className="relative w-full max-w-5xl h-full max-h-[80vh] flex flex-col items-center justify-center p-4"
          onClick={(e) => e.stopPropagation()}
        >
          <img 
            src={currentImage.src} 
            alt={currentImage.title}
            className="w-full h-full object-contain drop-shadow-2xl rounded-lg"
            style={{ objectPosition: currentImage.objectPosition }}
            draggable={false}
          />
          <div className="absolute bottom-4 left-0 right-0 text-center px-4">
            <div className="inline-block bg-ganpati-charcoal/80 backdrop-blur-md px-6 py-3 rounded-2xl border border-ganpati-gold/30">
              <h3 className="text-ganpati-gold font-bold text-xl">{currentImage.title}</h3>
              <p className="text-ganpati-ivory/80 text-sm">{currentImage.description}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;
