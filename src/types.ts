export type PageId = 'home' | 'services' | 'destinations' | 'packages' | 'gallery' | 'reviews' | 'about' | 'contact';

export type RegionType = 'all' | 'india' | 'international' | 'himalayas' | 'coastal' | 'pilgrimage';

export type TravelStyle = 
  | 'all'
  | 'family'
  | 'couples'
  | 'relaxed'
  | 'active'
  | 'heritage'
  | 'luxury'
  | 'winter'
  | 'pilgrimage';

export interface DayItinerary {
  day: number;
  title: string;
  location: string;
  activities: string[];
  stay: string;
  mealsIncluded: string;
}

export interface PackageItem {
  id: string;
  title: string;
  subtitle: string;
  region: 'India' | 'International';
  regionCategory: 'india' | 'international' | 'himalayas' | 'coastal' | 'pilgrimage';
  destination: string;
  durationDays: number;
  durationNights: number;
  waypoints: string[];
  startingPriceINR: number;
  hotelTier: string;
  highlights: string[];
  rating: number;
  reviewsCount: number;
  image: string;
  styleTags: TravelStyle[];
  bestSeason: string;
  inclusions: string[];
  itinerary: DayItinerary[];
  featured?: boolean;
}

export interface DestinationItem {
  id: string;
  name: string;
  country: string;
  category: 'india' | 'international' | 'himalayas' | 'coastal' | 'pilgrimage';
  bestMonths: string;
  recommendedDuration: string;
  startingPriceINR: number;
  shortDescription: string;
  image: string;
  styles: TravelStyle[];
  climateNote: string;
  keyHighlights: string[];
  featured?: boolean;
}

export interface ChronicleStory {
  id: string;
  title: string;
  travelerNames: string;
  travelerType: 'Family' | 'Couple' | 'Friends' | 'Solo';
  destination: string;
  dateTravelled: string;
  packageBookedId?: string;
  packageTitle: string;
  quote: string;
  fullStory: string;
  image: string;
  galleryImages: string[];
  stayTag: string;
  rating: number;
}

export interface Specialist {
  id: string;
  name: string;
  role: string;
  experience: string;
  languages: string[];
  regionSpecialty: string;
  avatar: string;
  quote: string;
  bio?: string;
  specialty?: string;
  photo?: string;
  region?: string;
  whatsapp?: string;
}

export type SpecialistItem = Specialist;

export interface ReviewItem {
  id: string;
  travelerName: string;
  city: string;
  tripType: 'Honeymoon' | 'Family' | 'Solo' | 'Offsite' | 'Friends';
  destination: string;
  travelDate: string;
  rating: number;
  stayTag: string;
  comment: string;
  verifiedBooking: boolean;
  packageTitle: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  situation: string;
  destination: string;
  travelers: string;
  challenge: string;
  howWeSolvedIt: string;
  outcome: string;
  quote: string;
}
