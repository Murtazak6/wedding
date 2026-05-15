import { WeddingConfig } from "@/types/wedding";

export const weddingConfig: WeddingConfig = {
  families: {
    couple1: {
      groom: "Murtaza",
      bride: "Zahra",
      groomArabic: "مرتضى",
      brideArabic: "زهرة",
      image: "/images/MZ5.jpeg",
      initial_img: "/images/MZInitials.jpeg"
    },
    familyName: "Hafiz Family",
    message: "May Allah bless this union with سعادة (happiness), بركة (barakat), and رحمة (mercy). Your presence will honor our celebration."
  },
  events: [
    {
      name: "Katho-Mandvo",
      date: "2027-01-09",
      hijriDate: "٢ شعبان ١٤٤٨هـ",
      time: "10:00 AM",
      venue: "",
      address: "",
      googleMapsUrl: ""
    },
    {
      name: "Katho-Mandvo",
      date: "2027-01-15",
      hijriDate: "٨ شعبان ١٤٤٨هـ",
      time: "10:00 AM",
      venue: "Amakin Mohammadiyah Phase III",
      address: "Noorani Rd, Dombivli, Dombivli East, Kalyan, Maharashtra 421203",
      googleMapsUrl: "https://maps.app.goo.gl/eCCRJesM8TBorDpq9"
    },
    {
      name: "Reception",
      date: "2027-01-17",
      hijriDate: "١٠ شعبان ١٤٤٨هـ",
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
    src: "/images/background-video.mp4",
    enabled: false
  },
  heroImages: [
    "/images/MZ.jpeg",
    "/images/MZ1.jpeg",
    "/images/MZ2.png",
    "/images/MZ5.jpeg"
  ],
  audio: {
    src: "/audio/background.mp3",
    enabled: true
  },
  social: {
    title: "Save the Date - Murtaza & Zahra",
    description: "Join the Hafiz Family for the wedding celebrations.",
    images: [
      "/images/MZInitials.jpeg"
    ]
  },
  announcement: {
    intro: "The Hafiz Family \n is delighted to announce the wedding of their son.",
    sequence: [
      "With the blessings and duas of Syedna Mufaddal Saifuddin (TUS) \n We invite you to celebrate the sacred union of...",
    ]
  },
  stayTuned: {
    message: "",
    subtext: "Please keep the couple in your prayers."
  }
};
