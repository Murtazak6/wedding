export interface Couple {
  groom: string;
  bride: string;
  groomArabic: string;
  brideArabic: string;
  image: string;
  initial_img: string;
}

export interface Event {
  name: string;
  date: string;
  hijriDate?: string;
  time: string;
  venue: string;
  address: string;
  googleMapsUrl: string;
}

export interface WeddingConfig {
  families: {
    couple1: Couple;
    couple2?: Couple;
    familyName: string;
    message: string;
  };
  events: Event[];
  theme: {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    textColor: string;
  };
  video: {
    src: string;
    enabled: boolean;
  };
  heroImages: string[];
  audio: {
    src: string;
    enabled: boolean;
  };
  social: {
    title: string;
    description: string;
    images: string[];
  };
  announcement: {
    intro: string;
    sequence: string[];
  };
  stayTuned: {
    message: string;
    subtext: string;
  };
}
