import { Camera, MessageCircle, Video, Share2, MapPin, Clock, Calendar, Image as ImageIcon, Heart, Phone } from 'lucide-react';

export const config = {
  mandalName: "बारोट वास चा राजा",
  greeting: "आपका मनःपूर्वक स्वागत है 🙏",
  establishedYear: 2020,
  countdownTarget: "2026-09-14T00:00:00+05:30",
  
  footerName: "NSPR Group",
  footerYear: "2026",

  announcement: {
    enabled: true,
    title: "विशेष सूचना",
    message: "आज शाम ७:३० बजे महाआरती का आयोजन किया गया है।",
    link: "",
    dismissible: true
  },

  socialLinks: [
    {
      id: "location",
      title: "Location",
      description: "Find our Mandap",
      url: "https://maps.app.goo.gl/uJ1kLQLEYfHmQDNEA?g_st=ic",
      icon: MapPin,
      enabled: true
    },
    {
      id: "whatsapp",
      title: "WhatsApp",
      description: "Join our community",
      url: "https://chat.whatsapp.com/EhqFydefjIe6Hq7l95EwCq?s=sh&p=i&mlu=0",
      icon: MessageCircle,
      enabled: true
    },
    {
      id: "instagram",
      title: "Instagram",
      description: "Follow our celebrations",
      url: "https://www.instagram.com/barot_vas_cha_raja/?hl=en",
      icon: Camera,
      enabled: true
    },
    {
      id: "youtube",
      title: "YouTube",
      description: "Watch Aarti & Videos",
      url: "https://www.youtube.com/@BarotvasCharaja",
      icon: Video,
      enabled: true
    },
    {
      id: "facebook",
      title: "Facebook",
      description: "Like our page",
      url: "YOUR_FACEBOOK_URL",
      icon: Share2,
      enabled: false
    }
  ],

  quickActions: [
    { id: "location", title: "स्थान", url: "YOUR_GOOGLE_MAPS_URL", icon: MapPin },
    { id: "aarti", title: "आरती", url: "#events", icon: Clock },
    { id: "whatsapp", title: "WhatsApp", url: "YOUR_WHATSAPP_URL", icon: MessageCircle },
    { id: "gallery", title: "फोटो गैलरी", url: "#gallery", icon: ImageIcon }
  ],

  scheduleInfo: {
    morningAarti: "07:00 बजे",
    eveningAarti: "07:30 बजे",
    mahaprasad: "08:30 बजे",
    visarjan: "अनंत चतुर्दशी"
  },

  events: [
    { id: 1, title: "महाआरती", time: "07:30 बजे", description: "प्रतिदिन संध्याकाल" },
    { id: 2, title: "महाप्रसाद", time: "08:30 बजे", description: "आरती के पश्चात" },
    { id: 3, title: "विशेष कार्यक्रम", time: "रात 09:00 बजे", description: "भजन संध्या" },
    { id: 4, title: "विसर्जन यात्रा", time: "सुबह 09:00 बजे", description: "अनंत चतुर्दशी के दिन" }
  ],

  donation: {
    enabled: true,
    title: "सेवा एवं सहयोग",
    description: "गणपति उत्सव के आयोजन में आपके सहयोग का हार्दिक स्वागत है।",
    qrImage: "/assets/donation-qr.png",
    upiId: "YOUR_UPI_ID"
  }
};
