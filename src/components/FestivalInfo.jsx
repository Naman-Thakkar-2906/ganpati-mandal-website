import { config } from '../data/config';
import { Clock, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const FestivalInfo = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    show: { opacity: 1, scale: 1, y: 0 }
  };

  return (
    <div id="events" className="w-full max-w-4xl mx-auto px-4 py-12 md:py-20 relative z-20 preserve-3d">
      
      {/* Aarti Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 md:mb-14"
      >
        <div className="inline-flex items-center justify-center gap-2 mb-3">
          <span className="text-xl">🪔</span>
          <h2 className="text-2xl md:text-4xl font-devanagari text-ganpati-ivory font-bold">
            आरती का समय
          </h2>
          <span className="text-xl">🪔</span>
        </div>
        <div className="h-1 w-20 md:w-32 bg-ganpati-gold mx-auto rounded-full shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-16"
      >
        {Object.entries(config.scheduleInfo).map(([key, value], index) => {
          const titles = {
            aartiTime: "आरती का समय",
            morningAarti: "प्रातः आरती",
            eveningAarti: "संध्या आरती",
            mahaprasad: "महाप्रसाद",
            visarjan: "विसर्जन"
          };

          return (
            <motion.div
              key={key}
              variants={item}
              whileHover={{ scale: 1.02, z: 10, boxShadow: "0 10px 30px rgba(212, 175, 55, 0.15)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-ganpati-charcoal/60 border border-ganpati-gold/20 p-5 md:p-6 rounded-2xl backdrop-blur-md flex items-center justify-between group hover:border-ganpati-gold/50 transition-all shadow-lg preserve-3d"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-ganpati-red/20 text-ganpati-gold rounded-xl group-hover:bg-ganpati-red/40 transition-colors shrink-0 shadow-inner">
                  <Clock className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <h3 className="text-lg md:text-xl font-devanagari text-ganpati-ivory font-medium">
                  {titles[key] || key}
                </h3>
              </div>
              <span className="text-ganpati-gold font-devanagari font-semibold text-base md:text-lg whitespace-nowrap ml-3">
                {value}
              </span>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Events Timeline */}
      {config.events && config.events.length > 0 && (
        <>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-12"
          >
            <h2 className="text-2xl md:text-4xl font-devanagari text-ganpati-ivory font-bold mb-3">
              उत्सव कार्यक्रम
            </h2>
            <div className="h-1 w-20 md:w-32 bg-ganpati-gold mx-auto rounded-full shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
          </motion.div>

          <div className="relative border-l-2 border-ganpati-gold/30 ml-4 md:ml-8 preserve-3d">
            {config.events.map((event, index) => (
              <motion.div 
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 5 }}
                className="mb-8 ml-8 relative group"
              >
                <div className="absolute -left-[41px] w-5 h-5 bg-ganpati-charcoal border-2 border-ganpati-gold rounded-full group-hover:bg-ganpati-gold group-hover:shadow-[0_0_15px_rgba(212,175,55,0.8)] transition-all duration-300 z-10" />
                
                <div className="bg-ganpati-charcoal/50 backdrop-blur-sm border border-ganpati-gold/10 hover:border-ganpati-gold/40 p-5 rounded-2xl shadow-md transition-colors relative overflow-hidden">
                  <div className="absolute right-0 top-0 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Calendar className="w-32 h-32 -mt-4 -mr-4" />
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 relative z-10">
                    <div>
                      <h3 className="text-xl md:text-2xl text-ganpati-gold font-devanagari font-bold mb-1">
                        {event.title}
                      </h3>
                      <p className="text-ganpati-ivory/70 font-devanagari text-sm md:text-base">
                        {event.date && event.day ? `${event.date} • ${event.day}` : event.description}
                      </p>
                    </div>
                    <div className="text-ganpati-gold bg-ganpati-gold/10 px-4 py-2 rounded-lg inline-block md:inline-flex border border-ganpati-gold/20 font-devanagari font-medium mt-2 md:mt-0 shadow-[0_0_10px_rgba(212,175,55,0.2)]">
                      {event.time}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default FestivalInfo;
