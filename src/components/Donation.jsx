import { motion } from 'framer-motion';
import { Copy, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { config } from '../data/config';

const Donation = () => {
  const [copied, setCopied] = useState(false);

  if (!config.donation.enabled) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(config.donation.upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 py-16 md:py-20 relative z-20">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-devanagari text-ganpati-gold font-bold mb-4 drop-shadow-md">
          {config.donation.title}
        </h2>
        <div className="h-1 w-16 bg-ganpati-gold mx-auto rounded-full mb-4 shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
        <p className="text-ganpati-ivory/90 font-devanagari text-base px-2 leading-relaxed">
          {config.donation.description}
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="relative group preserve-3d"
      >
        {/* Floating wrapper with glass effect */}
        <div className="bg-ganpati-charcoal/60 backdrop-blur-xl border border-ganpati-gold/30 p-8 rounded-[2rem] shadow-[0_15px_40px_rgba(0,0,0,0.6)] flex flex-col items-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(212,175,55,0.25)] hover:border-ganpati-gold/60">
          
          <p className="text-ganpati-ivory font-devanagari font-semibold text-lg mb-6 tracking-wide drop-shadow-sm flex items-center gap-2">
            🙏 बप्पा की सेवा में सहयोग करें
          </p>

          {/* Strict Flat QR Code Container (No distortions, no blurs) */}
          <div className="bg-white p-4 rounded-2xl shadow-inner mb-6 relative z-10 w-52 h-52 md:w-64 md:h-64 flex items-center justify-center">
            <img 
              src={config.donation.qrImage} 
              alt="Donation QR Code" 
              className="w-full h-full object-contain"
              draggable={false}
            />
          </div>

          <p className="text-ganpati-gold font-devanagari font-semibold tracking-wider text-sm md:text-base mb-6">
            स्कैन करके सहयोग करें
          </p>

          {config.donation.upiId && (
            <div className="w-full bg-ganpati-charcoal/80 border border-ganpati-gold/20 rounded-xl p-4 flex items-center justify-between shadow-inner">
              <div className="flex flex-col overflow-hidden">
                <span className="text-[10px] text-ganpati-gold/70 uppercase tracking-widest mb-1 font-english">UPI ID</span>
                <span className="text-sm md:text-base font-english text-ganpati-ivory truncate pr-4">{config.donation.upiId}</span>
              </div>
              <button 
                onClick={handleCopy}
                className="shrink-0 px-4 py-2 bg-ganpati-gold/10 hover:bg-ganpati-gold/30 border border-ganpati-gold/30 text-ganpati-gold rounded-lg transition-colors flex items-center justify-center gap-2 font-devanagari text-sm"
                aria-label="Copy UPI ID"
              >
                {copied ? <CheckCircle2 size={16} /> : <Copy size={16} />}
                <span className="hidden sm:inline">{copied ? "कॉपी हो गया" : "कॉपी करें"}</span>
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Donation;
