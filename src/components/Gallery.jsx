import { useState, useRef, useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { galleryImages } from '../data/gallery';
import Lightbox from './Lightbox';

const Gallery = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [isDesktop, setIsDesktop] = useState(true);
  const containerRef = useRef(null);
  const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
    const currentIndex = galleryImages.findIndex(img => img.id === selectedId);
    let nextIndex = currentIndex + direction;
    if (nextIndex >= galleryImages.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = galleryImages.length - 1;
    setSelectedId(galleryImages[nextIndex].id);
  };

  // Parallax for the entire gallery container on desktop
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-5deg", "5deg"]);

  return (
    <div id="gallery" className="w-full max-w-6xl mx-auto px-4 py-16 relative z-20">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-devanagari text-ganpati-ivory font-bold mb-4">
          Moments of Bappa
        </h2>
        <p className="text-ganpati-gold font-english mb-6">Celebrating devotion, tradition and togetherness.</p>
        <div className="h-1 w-24 bg-ganpati-gold mx-auto rounded-full" />
      </motion.div>

      {/* Mobile Layout (2-column Touch Friendly) */}
      {!isDesktop && (
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {galleryImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedId(img.id)}
              className={`relative rounded-xl overflow-hidden border border-ganpati-gold/20 cursor-pointer shadow-lg aspect-square ${index === 2 ? 'col-span-2 aspect-[2/1]' : ''}`}
            >
              <img 
                src={img.src} 
                alt={img.title}
                loading="lazy"
                className="w-full h-full object-cover"
                style={{ objectPosition: img.objectPosition }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ganpati-charcoal/90 to-transparent opacity-80" />
              <div className="absolute bottom-2 left-2 right-2">
                <h3 className="text-ganpati-gold text-sm font-bold truncate">{img.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Desktop Layout (3D Parallax Grid) */}
      {isDesktop && (
        <motion.div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY }}
          className="preserve-3d perspective-2000 h-[600px] relative flex items-center justify-center"
        >
          {galleryImages.map((img, index) => {
            // Asymmetric layout calculations
            const positions = [
              { x: "-30%", y: "-25%", z: -40, scale: 0.8 },
              { x: "30%", y: "-20%", z: 20, scale: 0.9 },
              { x: "0%", y: "0%", z: 60, scale: 1.1 }, // Featured center
              { x: "-25%", y: "30%", z: 10, scale: 0.85 },
              { x: "35%", y: "25%", z: -20, scale: 0.75 },
            ];
            
            const pos = positions[index];

            return (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, z: -100 }}
                whileInView={{ opacity: 1, z: pos.z }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1 }}
                whileHover={{ 
                  scale: pos.scale * 1.05, 
                  z: pos.z + 50,
                  boxShadow: "0 20px 40px rgba(212, 175, 55, 0.3)"
                }}
                onClick={() => setSelectedId(img.id)}
                className="absolute preserve-3d cursor-pointer rounded-2xl overflow-hidden border-2 border-ganpati-gold/40 shadow-2xl transition-all group"
                style={{
                  width: "280px",
                  height: "360px",
                  transform: `translate(${pos.x}, ${pos.y}) scale(${pos.scale}) translateZ(${pos.z}px)`,
                }}
              >
                <img 
                  src={img.src} 
                  alt={img.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ objectPosition: img.objectPosition }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ganpati-charcoal/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-ganpati-gold font-bold text-xl">{img.title}</h3>
                    <p className="text-ganpati-ivory/80 text-sm">View Photo →</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      )}

      {/* Fullscreen Lightbox */}
      <Lightbox 
        selectedId={selectedId} 
        onClose={() => setSelectedId(null)} 
        onNavigate={navigateGallery} 
      />
    </div>
  );
};

export default Gallery;
