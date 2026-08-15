import Header from './components/Header';
import AnnouncementBar from './components/AnnouncementBar';
import Hero from './components/Hero';
import QuickActions from './components/QuickActions';
import JourneyTimeline from './components/JourneyTimeline';
import SocialCards from './components/SocialCards';
import Countdown from './components/Countdown';
import FestivalInfo from './components/FestivalInfo';
import YearBasedGallery from './components/YearBasedGallery';
import Donation from './components/Donation';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="relative min-h-screen bg-ganpati-charcoal font-english antialiased overflow-x-hidden selection:bg-ganpati-gold selection:text-ganpati-charcoal pb-safe">
      <div className="fixed top-0 left-0 right-0 z-[60] flex flex-col">
        <AnnouncementBar />
      </div>
      <ParticleBackground />
      <main className="relative z-10 w-full flex flex-col items-center">
        <Hero />
        <QuickActions />
        <JourneyTimeline />
        <YearBasedGallery />
        <Countdown />
        <FestivalInfo />
        <Donation />
        <SocialCards />
      </main>
      <Footer />
    </div>
  );
}

export default App;
