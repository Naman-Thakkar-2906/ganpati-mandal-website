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
    { id: "location", title: "स्थान", url: "https://maps.app.goo.gl/uJ1kLQLEYfHmQDNEA?g_st=ic", icon: MapPin },
    { id: "aarti", title: "आरती", url: "#events", icon: Clock },
    { id: "whatsapp", title: "WhatsApp", url: "https://chat.whatsapp.com/EhqFydefjIe6Hq7l95EwCq?s=sh&p=i&mlu=0", icon: MessageCircle },
    { id: "gallery", title: "फोटो गैलरी", url: "#gallery", icon: ImageIcon }
  ],

  scheduleInfo: {
    aartiTime: "प्रतिदिन रात 8:30 बजे",
    visarjan: "25 सितंबर, सुबह 8:00 बजे"
  },

  events: [
    { id: 1, title: "शोभायात्रा - गणेशस्थापना", date: "14 सितंबर 2026", day: "सोमवार", time: "सुबह 9:00 बजे" },
    { id: 2, title: "महा-आरती", date: "15 सितंबर 2026", day: "मंगलवार", time: "रात 7:30 बजे" },
    { id: 3, title: "सत्यनारायण कथा", date: "16 सितंबर 2026", day: "बुधवार", time: "रात 9:00 बजे" },
    { id: 4, title: "आनंद नो गरबो", date: "17 सितंबर 2026", day: "गुरुवार", time: "रात 9:00 बजे" },
    { id: 5, title: "खेल महोत्सव-१", date: "18 सितंबर 2026", day: "शुक्रवार", time: "रात 9:00 बजे" },
    { id: 6, title: "खेल महोत्सव-२", date: "19 सितंबर 2026", day: "शनिवार", time: "रात 9:00 बजे" },
    { id: 7, title: "क्वीज कॉम्पिटीशन", date: "20 सितंबर 2026", day: "रविवार", time: "रात 9:00 बजे" },
    { id: 8, title: "अन्नकूट दर्शन", date: "21 सितंबर 2026", day: "सोमवार", time: "रात 7:30 बजे" },
    { id: 9, title: "करावके", date: "22 सितंबर 2026", day: "मंगलवार", time: "रात 9:00 बजे" },
    { id: 10, title: "फैंसी ड्रेस", date: "23 सितंबर 2026", day: "बुधवार", time: "रात 9:00 बजे" },
    { id: 11, title: "गरबा (डी.जे)", date: "24 सितंबर 2026", day: "गुरुवार", time: "रात 9:00 बजे" },
    { id: 12, title: "गणेश विसर्जन", date: "25 सितंबर 2026", day: "शुक्रवार", time: "सुबह 8:00 बजे" }
  ],

  donation: {
    enabled: true,
    title: "सेवा एवं सहयोग",
    description: "गणपति उत्सव के आयोजन में आपके सहयोग का हार्दिक स्वागत है।",
    qrImage: "/assets/donation-qr.png",
    upiId: "YOUR_UPI_ID"
  }
};
