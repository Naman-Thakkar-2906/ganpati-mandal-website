import { config } from '../data/config';

const Footer = () => {
  return (
    <footer className="w-full py-8 text-center border-t border-ganpati-gold/10 relative z-20 bg-ganpati-charcoal mt-12 pb-safe">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center justify-center space-y-4">
        <p className="text-2xl font-devanagari text-ganpati-gold font-bold text-shadow-glow">
          गणपती बाप्पा मोरया 🙏
        </p>
        <p className="text-ganpati-ivory/60 font-english text-sm mt-4">
          Developed by {config.footerName}
        </p>
        <p className="text-ganpati-ivory/40 font-english text-xs">
          &copy; {config.footerYear} {config.footerName}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
