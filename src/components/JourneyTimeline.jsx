import { motion } from 'framer-motion';
import { config } from '../data/config';
import { yearlyGallery } from '../data/gallery';

const JourneyTimeline = () => {
  const years = Object.keys(yearlyGallery).sort();

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-16 md:py-24 relative z-20">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className="text-center mb-12 md:mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-english text-ganpati-ivory font-bold mb-3 tracking-wide">
          Since {config.establishedYear}
        </h2>
        <p className="text-ganpati-gold font-devanagari text-lg md:text-2xl mb-6">
          भक्ति, परंपरा और एकता की यात्रा
        </p>
        <div className="h-1 w-16 md:w-24 bg-ganpati-gold mx-auto rounded-full shadow-[0_0_15px_rgba(212,175,55,0.6)]" />
      </motion.div>

      <div className="relative border-l-2 border-ganpati-gold/30 ml-4 lg:ml-0 lg:border-l-0 lg:flex lg:justify-between lg:items-start pt-4 preserve-3d">
        {/* Desktop horizontal line */}
        <div className="hidden lg:block absolute top-8 left-8 right-8 h-[2px] bg-ganpati-gold/30 -z-10 shadow-[0_0_10px_rgba(212,175,55,0.2)]" />

        {years.map((year, index) => {
          const featuredPhoto = yearlyGallery[year]?.[0];
          
          return (
            <motion.div 
              key={year}
              initial={{ opacity: 0, x: -20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              className="mb-12 ml-8 lg:ml-0 lg:mb-0 relative group lg:flex-1 lg:flex lg:flex-col lg:items-center cursor-pointer preserve-3d"
              onClick={() => {
                const gallerySection = document.getElementById('gallery');
                if (gallerySection) {
                  gallerySection.scrollIntoView({ behavior: 'smooth' });
                  // Simulate a click on the year tab if needed
                  window.dispatchEvent(new CustomEvent('selectGalleryYear', { detail: year }));
                }
              }}
            >
              {/* Dot */}
              <div className="absolute -left-[41px] md:static md:-mb-4 w-5 h-5 bg-ganpati-charcoal border-2 border-ganpati-gold rounded-full group-hover:bg-ganpati-gold transition-colors duration-300 z-10 shadow-[0_0_15px_rgba(212,175,55,0.5)] group-hover:shadow-[0_0_25px_rgba(212,175,55,0.8)] md:translate-y-[22px]" />
              
              {/* Year Label */}
              <h3 className="text-2xl md:text-3xl font-bold text-ganpati-gold mb-3 md:mt-10 font-english group-hover:-translate-y-1 transition-transform">
                {year}
              </h3>
              
              {/* Preview Card */}
              <div className="block relative w-full md:w-32 aspect-[4/3] rounded-xl overflow-hidden border border-ganpati-gold/30 group-hover:border-ganpati-gold shadow-lg group-hover:shadow-[0_10px_30px_rgba(212,175,55,0.3)] group-hover:-translate-y-2 group-hover:translate-z-[20px] transition-all duration-300">
                {featuredPhoto ? (
                  <img 
                    src={featuredPhoto.src} 
                    alt={`Memories from ${year}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-ganpati-charcoal/80 flex flex-col items-center justify-center p-2 text-center text-xs text-ganpati-ivory/50">
                    <span className="text-xl mb-1 opacity-40">📸</span>
                    Memories
                  </div>
                )}
                
                {/* Overlay text */}
                <div className="absolute inset-0 bg-gradient-to-t from-ganpati-charcoal/90 via-ganpati-charcoal/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2">
                   <span className="text-ganpati-gold text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                     View <span className="text-[10px]">→</span>
                   </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default JourneyTimeline;
