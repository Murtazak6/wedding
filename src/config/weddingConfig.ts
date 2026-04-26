import { init } from "next/dist/compiled/webpack/webpack";

export const weddingConfig = {
  families: {
    couple1: {
      groom: "Murtaza",
      bride: "Zahra",
      groomArabic: "مرتضى",
      brideArabic: "زهرة",
      image: "/images/MZ2.png",
      initial_img: "/images/MZInitials.jpeg"
    },
    couple2: {
      groom: "Mustansir",
      bride: "Mubarakah",
      groomArabic: "مستنصر",
      brideArabic: "مباركة",
      image: "/images/MM3.png",
      initial_img: "/images/MMInitials.jpeg"
    },
    familyName: "Kankroliwala Family",
    message: "May Allah bless these unions with سعادة (happiness), بركة (barakat), and رحمة (mercy). Your presence will honor our celebration."
  },
  events: [
    {
      name: "Katho-Mandvo",
      date: "2027-01-15",
      time: "10:00 AM",
      venue: "Amakin Mohammadiyah Phase III",
      address: "Noorani Rd, Dombivli, Dombivli East, Kalyan, Maharashtra 421203",
      googleMapsUrl: "https://maps.app.goo.gl/eCCRJesM8TBorDpq9"
    },
    {
      name: "Reception",
      date: "2027-01-17",
      time: "7:00 PM",
      venue: "Taiyebi Masjid (Dawoodi Bohra)",
      address: "133, Kazi Syed St, Mandvi Koliwada, Vadgadi, Masjid Bandar West, Masjid Bandar, Mumbai, Maharashtra 400003",
      googleMapsUrl: "https://maps.app.goo.gl/j7vNUHRLMWN11Z629"
    }
  ],
  theme: {
    primaryColor: "#C5A46D", // Gold
    secondaryColor: "#0F3D3E", // Deep Green
    accentColor: "#FDFBF7", // Cream
    textColor: "#1A1A1A",
  },
  video: {
    src: "/images/background-video.mp4", // Path to local video
    enabled: false // Disabled by default to show carousel
  },
  heroImages: [
    "/images/MZ.jpeg",
    "/images/MM.jpeg"
  ],
  audio: {
    src: "/audio/background.mp3",
    enabled: true
  },
  social: {
    title: "Save the Date - Murtaza & Zahra | Mustansir & Mubarakah",
    description: "Join the Kankroliwala Family for the wedding celebrations.",
    image: "/images/og-image.jpg"
  },
  announcement: {
    intro: "The Kankroliwala Family \n is delighted to announce the weddings of their sons.",
    sequence: [
      "With the blessings and duas of Syedna Mufaddal Saifuddin (TUS) \n We invite you to celebrate the sacred union of...",
    ]
  },
  stayTuned: {
    message: "",
    subtext: "Please keep the couples in your prayers."
  }
};

export type WeddingConfig = typeof weddingConfig;
