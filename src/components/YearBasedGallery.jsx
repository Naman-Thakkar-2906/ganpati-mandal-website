import { useState, useRef, useEffect } from 'react';
import { motion, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { yearlyGallery } from '../data/gallery';
import Lightbox from './Lightbox';

const YearBasedGallery = () => {
  const years = Object.keys(yearlyGallery).sort((a, b) => b - a); // Newest first
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const [selectedPhotoId, setSelectedPhotoId] = useState(null);
  
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== 'undefined' ? window.innerWidth >= 1024 : true
  );
  const containerRef = useRef(null);
  
  const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener('resize', handleResize);

    const handleSelectYear = (e) => {
      if (e.detail) setSelectedYear(e.detail);
    };
    window.addEventListener('selectGalleryYear', handleSelectYear);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('selectGalleryYear', handleSelectYear);
    };
  }, []);

  const handleMouseMove = (e) => {
    if (!isDesktop || !containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    if (!isDesktop) return;
    mouseX.set(0);
    mouseY.set(0);
  };

  const navigateGallery = (direction) => {
    const currentPhotos = yearlyGallery[selectedYear];
    if (!currentPhotos || currentPhotos.length === 0) return;
    
    const currentIndex = currentPhotos.findIndex(img => img.id === selectedPhotoId);
    let nextIndex = currentIndex + direction;
    if (nextIndex >= currentPhotos.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = currentPhotos.length - 1;
    setSelectedPhotoId(currentPhotos[nextIndex].id);
  };

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["3deg", "-3deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-3deg", "3deg"]);

  const currentPhotos = yearlyGallery[selectedYear] || [];

  return (
    <div id="gallery" className="w-full max-w-6xl mx-auto px-4 py-16 relative z-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-5xl font-devanagari text-ganpati-ivory font-bold mb-4">
          Historical Gallery
        </h2>
        <div className="h-1 w-24 bg-ganpati-gold mx-auto rounded-full" />
      </div>

      {/* Year Selector */}
      <div className="w-full overflow-x-auto pb-6 mb-8 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
        <div className="flex gap-4 md:justify-center min-w-max md:min-w-0">
          {years.map((year) => (
            <motion.button
              key={year}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedYear(year)}
              className={`relative px-8 py-4 rounded-xl font-english font-bold text-lg md:text-xl transition-all duration-300 preserve-3d border ${
                selectedYear === year 
                  ? 'bg-ganpati-gold/20 border-ganpati-gold text-ganpati-gold shadow-[0_0_20px_rgba(212,175,55,0.3)]' 
                  : 'bg-ganpati-charcoal/80 border-ganpati-gold/20 text-ganpati-ivory/60 hover:text-ganpati-ivory hover:border-ganpati-gold/50'
              }`}
            >
              {year}
              {selectedYear === year && (
                <motion.div 
                  layoutId="activeYearIndicator"
                  className="absolute inset-0 rounded-xl border-2 border-ganpati-gold pointer-events-none" 
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Photos Grid */}
      <div className="min-h-[400px]">
        <AnimatePresence mode="wait">
          {currentPhotos.length === 0 ? (
            <motion.div 
              key={`empty-${selectedYear}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-64 flex items-center justify-center text-ganpati-ivory/50 font-english"
            >
              Memories from {selectedYear} coming soon.
            </motion.div>
          ) : (
            <motion.div
              key={`grid-${selectedYear}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Mobile 2-Column Grid */}
              {!isDesktop && (
                <div className="grid grid-cols-2 gap-3">
                  {currentPhotos.map((img, index) => (
                    <motion.div
                      key={img.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileTap={{ scale: 0.95, z: 10 }}
                      onClick={() => setSelectedPhotoId(img.id)}
                      className={`relative rounded-xl overflow-hidden border border-ganpati-gold/20 shadow-md aspect-square ${index === 0 && currentPhotos.length % 2 !== 0 ? 'col-span-2 aspect-[2/1]' : ''}`}
                    >
                      <img src={img.src} alt={img.title} loading="lazy" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="absolute bottom-2 left-2 text-ganpati-gold text-xs font-bold">{img.title}</div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Desktop 3D Asymmetric Grid */}
              {isDesktop && (
                <motion.div 
                  ref={containerRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  style={{ rotateX, rotateY }}
                  className="preserve-3d perspective-2000 h-[600px] relative flex items-center justify-center"
                >
                  {currentPhotos.map((img, index) => {
                    const positions = [
                      { x: "-30%", y: "-20%", z: -40, scale: 0.8 },
                      { x: "30%", y: "-15%", z: 20, scale: 0.9 },
                      { x: "0%", y: "0%", z: 60, scale: 1.1 }, 
                      { x: "-25%", y: "25%", z: 10, scale: 0.85 },
                      { x: "35%", y: "20%", z: -20, scale: 0.75 },
                    ];
                    
                    const pos = positions[index % positions.length];

                    return (
                      <motion.div
                        key={img.id}
                        initial={{ opacity: 0, z: -100 }}
                        animate={{ opacity: 1, z: pos.z }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        whileHover={{ 
                          scale: pos.scale * 1.05, 
                          z: pos.z + 50,
                          boxShadow: "0 20px 40px rgba(212, 175, 55, 0.4)"
                        }}
                        onClick={() => setSelectedPhotoId(img.id)}
                        className="absolute preserve-3d cursor-pointer rounded-2xl overflow-hidden border border-ganpati-gold/30 hover:border-ganpati-gold shadow-2xl transition-all group"
                        style={{
                          width: "280px",
                          height: "360px",
                          transform: `translate(${pos.x}, ${pos.y}) scale(${pos.scale}) translateZ(${pos.z}px)`,
                        }}
                      >
                        <img src={img.src} alt={img.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                          <div>
                            <h3 className="text-ganpati-gold font-bold text-lg">{img.title}</h3>
                            <p className="text-ganpati-ivory/80 text-xs">View Photo →</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Lightbox 
        selectedId={selectedPhotoId} 
        onClose={() => setSelectedPhotoId(null)} 
        onNavigate={navigateGallery} 
        images={currentPhotos}
      />
    </div>
  );
};

export default YearBasedGallery;
