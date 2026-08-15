import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import clsx from 'clsx';

const FloatingCard = ({ title, description, icon: Icon, url, className, isDesktop }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current || !isDesktop) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    if (!isDesktop) return;
    x.set(0);
    y.set(0);
  };

  const handleClick = (e) => {
    if (url.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(url);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const Component = url.startsWith('http') || url.startsWith('mailto') || url.startsWith('tel') ? 'a' : 'a';
  const props = url.startsWith('http') ? { href: url, target: "_blank", rel: "noopener noreferrer" } : { href: url, onClick: handleClick };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isDesktop ? rotateX : 0,
        rotateY: isDesktop ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      whileTap={{ scale: 0.95, translateZ: 10 }}
      className={clsx("preserve-3d relative group", className)}
    >
      <Component
        {...props}
        className="block relative overflow-hidden rounded-2xl bg-ganpati-glass border border-ganpati-gold/30 p-4 md:p-6 transition-all duration-300 hover:border-ganpati-gold/70 shadow-lg hover:shadow-gold-glow-hover backdrop-blur-md cursor-pointer h-full"
        style={{ transform: isDesktop ? "translateZ(30px)" : "translateZ(0)" }}
      >
        {/* Light sweep element */}
        <div className="light-sweep" />
        
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-ganpati-goldlight/0 group-hover:bg-ganpati-goldlight/5 transition-colors duration-300 pointer-events-none" />
        
        <div className="flex items-start gap-4">
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-3 rounded-full bg-ganpati-charcoal/80 border border-ganpati-gold/20 text-ganpati-gold shadow-inner group-hover:text-ganpati-ivory group-hover:bg-ganpati-red/80 transition-all duration-300 shrink-0"
          >
            {Icon && <Icon size={24} />}
          </motion.div>
          <div className="flex-1 min-w-0">
            <h3 className="font-english font-semibold text-ganpati-gold text-base md:text-lg mb-1 group-hover:text-ganpati-ivory transition-colors truncate">
              {title}
            </h3>
            <p className="text-ganpati-ivory/70 text-xs md:text-sm font-english leading-snug line-clamp-2">
              {description}
            </p>
          </div>
          {/* Mobile Arrow Hint */}
          {!isDesktop && (
            <div className="flex items-center justify-center text-ganpati-gold/50 group-active:text-ganpati-gold h-full self-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </div>
          )}
        </div>
      </Component>
    </motion.div>
  );
};

export default FloatingCard;
