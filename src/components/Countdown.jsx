import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { config } from '../data/config';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isCompleted: false
  });

  useEffect(() => {
    const targetDate = new Date(config.countdownTarget).getTime();

    const updateCountdown = () => {
      // Create a Date object for the current time in Asia/Kolkata
      const nowString = new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
      const now = new Date(nowString).getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        setTimeLeft(prev => ({ ...prev, isCompleted: true }));
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
        isCompleted: false
      });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ label, value }) => (
    <div className="flex flex-col items-center group preserve-3d">
      <div className="bg-ganpati-charcoal/60 border border-ganpati-gold/30 rounded-2xl w-14 h-16 sm:w-16 sm:h-20 md:w-24 md:h-28 flex items-center justify-center backdrop-blur-md shadow-[0_10px_20px_rgba(0,0,0,0.5)] overflow-hidden relative group-hover:border-ganpati-gold/60 group-hover:shadow-[0_15px_30px_rgba(212,175,55,0.2)] transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-b from-ganpati-gold/5 to-transparent pointer-events-none" />
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ y: 20, opacity: 0, rotateX: -90 }}
            animate={{ y: 0, opacity: 1, rotateX: 0 }}
            exit={{ y: -20, opacity: 0, rotateX: 90 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 100 }}
            className="text-xl sm:text-2xl md:text-5xl font-english font-bold text-ganpati-gold absolute drop-shadow-md"
          >
            {value.toString().padStart(2, '0')}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-[9px] sm:text-[10px] md:text-xs font-english text-ganpati-ivory/80 mt-2 sm:mt-3 tracking-widest uppercase font-medium">
        {label}
      </span>
    </div>
  );

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-16 md:py-24 relative z-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className="text-center mb-10 md:mb-14"
      >
        <h3 className="text-ganpati-gold/80 font-english text-xs md:text-sm mb-3 uppercase tracking-[0.3em]">Upcoming Celebration</h3>
        <h2 className="text-3xl md:text-5xl font-devanagari text-ganpati-ivory font-bold mb-4 drop-shadow-lg">
          १४ सितम्बर २०२६
        </h2>
        <div className="h-1 w-12 bg-ganpati-gold mx-auto rounded-full" />
      </motion.div>

      {timeLeft.isCompleted ? (
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center p-10 bg-ganpati-charcoal/80 rounded-2xl border border-ganpati-gold/50 backdrop-blur-md shadow-[0_0_30px_rgba(212,175,55,0.3)]"
        >
          <h2 className="text-3xl md:text-5xl font-devanagari text-ganpati-gold font-bold">
            गणपती बाप्पा मोरया 🙏
          </h2>
        </motion.div>
      ) : (
        <div className="flex justify-center gap-2 sm:gap-3 md:gap-8 perspective-1200">
          <TimeUnit label="Days" value={timeLeft.days} />
          <TimeUnit label="Hours" value={timeLeft.hours} />
          <TimeUnit label="Minutes" value={timeLeft.minutes} />
          <TimeUnit label="Seconds" value={timeLeft.seconds} />
        </div>
      )}
    </div>
  );
};

export default Countdown;
