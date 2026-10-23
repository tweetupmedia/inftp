import { 
  DestinationItem, 
  PackageItem, 
  ChronicleStory, 
  ReviewItem, 
  Specialist, 
  CaseStudy 
} from '../types';

export const COMPANY_DETAILS = {
  name: 'Info Tripp',
  tagline: 'Travel. Simplified.',
  phone: '+91 83188 81779',
  secondaryPhone: '+91 98765 43210',
  whatsapp: '918318881779',
  email: 'bookings@infotripp.com',
  address: '314C, Tower C, Golden I, Techzone 4, Greater Noida West, Gautam Buddh Nagar 201318, Uttar Pradesh, India',
  hours: 'Mon – Sat: 9:30 AM – 8:30 PM IST (WhatsApp Concierge: 24/7 on active trips)',
  stats: {
    travelers: '12,400+',
    rating: '4.9/5',
    verifiedReviews: '1,850+',
    avgResponseMinutes: '4 mins',
    destinationCount: '38+'
  }
};

export const DESTINATIONS: DestinationItem[] = [
  {
    id: 'kashmir',
    name: 'Kashmir',
    country: 'India',
    category: 'himalayas',
    bestMonths: 'Mar – Oct & Dec – Feb (Snow)',
    recommendedDuration: '6 – 8 Days',
    startingPriceINR: 28500,
    shortDescription: 'Heaven on earth with tranquil Dal Lake houseboats, alpine meadows of Gulmarg, and saffron valleys of Pahalgam.',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1000&q=80',
    styles: ['couples', 'family', 'winter', 'relaxed'],
    climateNote: 'Mild sunny summers (18-24°C), enchanted powdery snow in winter (-2 to 6°C).',
    keyHighlights: ['Private Shikara Cruise on Dal Lake', 'Gulmarg Phase II Gondola Ride', 'Aru & Betaab Valley Excursions', 'Artisan Pashmina Workshops'],
    featured: true
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    country: 'India',
    category: 'india',
    bestMonths: 'Oct – Mar',
    recommendedDuration: '7 – 10 Days',
    startingPriceINR: 34000,
    shortDescription: 'Golden dunes, royal fortresses, private palace dinners, and storied desert hospitality across Rajputana.',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80',
    styles: ['heritage', 'family', 'luxury', 'couples'],
    climateNote: 'Crisp, sunny desert days (22-26°C) and cool royal evenings.',
    keyHighlights: ['Amber Fort Elephant Footpath', 'Private Sunset Safari in Thar Dunes', 'Lake Pichola Boat Charter', 'Bespoke Haveli Cooking Masterclass'],
    featured: true
  },
  {
    id: 'ladakh',
    name: 'Ladakh',
    country: 'India',
    category: 'himalayas',
    bestMonths: 'May – Sep',
    recommendedDuration: '7 – 9 Days',
    startingPriceINR: 36500,
    shortDescription: 'High-altitude moonscapes, turquoise Pangong Tso, Buddhist monasteries, and world-renowned high passes.',
    image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1000&q=80',
    styles: ['active', 'couples', 'relaxed'],
    climateNote: 'Dry alpine crisp air (15-22°C), crystal clear stargazing skies.',
    keyHighlights: ['Khardung La High Pass (17,982 ft)', 'Nubra Valley Bactrian Camel Safari', 'Overnight Glamping at Pangong Lake', 'Thiksey Monastery Sunrise Chants'],
    featured: true
  },
  {
    id: 'kerala',
    name: 'Kerala',
    country: 'India',
    category: 'coastal',
    bestMonths: 'Sep – Apr',
    recommendedDuration: '6 – 8 Days',
    startingPriceINR: 26000,
    shortDescription: 'Emerald backwaters, mist-cloaked Munnar tea plantations, Kathakali performances, and Ayurvedic rejuvenation.',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80',
    styles: ['relaxed', 'couples', 'family'],
    climateNote: 'Tropical balmy breeze (24-30°C), lush verdant landscapes.',
    keyHighlights: ['Alleppey Heritage Kettuvallam Cruise', 'Munnar Spice Plantation Stroll', 'Marari Beach Sunset Stays', 'Authentic Abhyanga Ayurvedic Therapy'],
    featured: true
  },
  {
    id: 'bali',
    name: 'Bali & Nusa Islands',
    country: 'Indonesia',
    category: 'international',
    bestMonths: 'Apr – Oct',
    recommendedDuration: '6 – 9 Days',
    startingPriceINR: 48500,
    shortDescription: 'Cascading jungle villas in Ubud, cliff-top sunsets at Uluwatu, Nusa Penida ocean views, and sacred water temples.',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=80',
    styles: ['couples', 'relaxed', 'active', 'luxury'],
    climateNote: 'Tropical sunny warmth (27-31°C) with ocean breezes.',
    keyHighlights: ['Private Infinity Pool Villa in Ubud', 'Kelingking Secret Beach Charter', 'Tirta Empul Purification Ritual', 'Jimbaran Beach Candlelight Seafood Dinner'],
    featured: true
  },
  {
    id: 'switzerland',
    name: 'Switzerland Alpine Wonderland',
    country: 'Switzerland',
    category: 'international',
    bestMonths: 'May – Oct (Meadows) & Dec – Mar (Ski)',
    recommendedDuration: '8 – 11 Days',
    startingPriceINR: 165000,
    shortDescription: 'Panoramic Swiss Glacier Express rails, pristine lake cruises in Lucerne, Jungfraujoch summit, and Matterhorn vistas in Zermatt.',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1000&q=80',
    styles: ['luxury', 'couples', 'family', 'winter'],
    climateNote: 'Pleasant alpine summers (18-24°C), majestic winter wonderland (-4 to 4°C).',
    keyHighlights: ['Swiss Travel Pass 1st Class Flexibility', 'Jungfraujoch Top of Europe Train', 'Lake Brienz Steamboat Journey', 'Chalet Fondue Tasting in Grindelwald'],
    featured: true
  },
  {
    id: 'dubai',
    name: 'Dubai & Desert Oasis',
    country: 'UAE',
    category: 'international',
    bestMonths: 'Oct – Apr',
    recommendedDuration: '5 – 7 Days',
    startingPriceINR: 44000,
    shortDescription: 'Hyper-modern architectural marvels, luxury marina yachts, desert dune safaris, and Arabian hospitality.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80',
    styles: ['family', 'luxury', 'couples'],
    climateNote: 'Mild, warm winter weather (22-28°C) with clear blue skies.',
    keyHighlights: ['Burj Khalifa At The Top Sky Lounge', 'Private Desert Stargazing BBQ', 'Dhow Marina Luxury Dinner Cruise', 'Museum of the Future Priority Entry'],
    featured: false
  },
  {
    id: 'vietnam',
    name: 'Vietnam & Ha Long Bay',
    country: 'Vietnam',
    category: 'international',
    bestMonths: 'Oct – Apr',
    recommendedDuration: '7 – 10 Days',
    startingPriceINR: 49000,
    shortDescription: 'Limestone karsts in Ha Long Bay, lantern-lit streets of Hoi An, bustling Hanoi Old Quarter, and culinary wonders.',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1000&q=80',
    styles: ['relaxed', 'heritage', 'couples'],
    climateNote: 'Comfortable tropical breezes (21-27°C).',
    keyHighlights: ['5-Star Halong Bay Overnight Cruise', 'Hoi An Ancient Town Lantern Workshop', 'Mekong Delta Wooden Boat Ride', 'Hanoi Street Food Tour with Local Chef'],
    featured: false
  },
  {
    id: 'japan',
    name: 'Japan: Tokyo, Kyoto & Mt. Fuji',
    country: 'Japan',
    category: 'international',
    bestMonths: 'Mar – May (Cherry Blossoms) & Sep – Nov (Autumn Foliage)',
    recommendedDuration: '8 – 11 Days',
    startingPriceINR: 142000,
    shortDescription: 'Bullet trains, peaceful Zen gardens in Kyoto, onsen baths facing Mount Fuji, and futuristic Tokyo avenues.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=80',
    styles: ['heritage', 'luxury', 'couples', 'family'],
    climateNote: 'Crisp, temperate spring and autumn weather (14-20°C).',
    keyHighlights: ['Shinkansen Bullet Train Experience', 'Traditional Ryokan Stay with Kaiseki Dinner', 'Fushimi Inari Torii Gates Guided Walk', 'Mt. Fuji 5th Station & Lake Kawaguchiko'],
    featured: false
  },
  {
    id: 'mathura-vrindavan',
    name: 'Mathura & Vrindavan',
    country: 'India',
    category: 'pilgrimage',
    bestMonths: 'All Year (Especially Jan – Mar & Sep – Nov)',
    recommendedDuration: '1 Day Trip (From Delhi NCR)',
    startingPriceINR: 1999,
    shortDescription: '1 Day spiritual journey from Delhi NCR. Seek blessings at Shri Krishna Janmabhoomi, Dwarkadhish Temple, Vishram Ghat, Banke Bihari Temple, mystical Nidhivan, and the grand Prem Mandir light and musical fountain show.',
    image: '/assets/aistudio/WhatsApp_Image_2026-10-23_at_10.51.47_87127676.jpeg',
    styles: ['heritage', 'family', 'relaxed', 'pilgrimage'],
    climateNote: 'Pleasant mornings and evening temple breezes; sacred Braj ambiance.',
    keyHighlights: [
      'Shri Krishna Janmabhoomi Complex (Birthplace stone prison cell of Lord Krishna)',
      'Dwarkadhish Temple & sacred Yamuna river stroll at Vishram Ghat',
      'Banke Bihari Temple ecstatic evening darshan and chants',
      'Nidhivan mystical forest walk before dusk',
      'Prem Mandir grand white marble musical light & fountain show',
      'Doorstep cab pickup & drop from any address in Delhi NCR'
    ],
    featured: true
  },
  {
    id: 'ayodhya',
    name: 'Ayodhya',
    country: 'India',
    category: 'pilgrimage',
    bestMonths: 'Oct – Mar',
    recommendedDuration: '2 Days / 2 Nights',
    startingPriceINR: 3500,
    shortDescription: 'Explore the divine city of Lord Rama. Experience sacred Ram Mandir darshan, Hanuman Garhi, Kanak Bhawan, Dashrath Mahal, Saryu Ghat evening Aarti at Ram Ki Paidi, and heritage riverside exploration.',
    image: '/assets/aistudio/WhatsApp_Image_2026-10-23_at_10.51.48__2__44e340fa.jpeg',
    styles: ['heritage', 'family', 'pilgrimage', 'relaxed'],
    climateNote: 'Pleasant winter days (14-24°C) with deeply spiritual evening ghat illuminations.',
    keyHighlights: [
      'Grand Shri Ram Janmabhoomi Mandir Darshan',
      'Hanuman Garhi & Kanak Bhawan blessing visits',
      'Dashrath Mahal, Sita Ki Rasoi & Saryu Ghat Aarti (Ram Ki Paidi)',
      'Nageshwarnath Temple, Treta Ke Thakur & Guptar Ghat',
      '2 Nights Hotel Stay with breakfast & dedicated cab included'
    ],
    featured: true
  },
  {
    id: 'gangasagar',
    name: 'Gangasagar',
    country: 'India',
    category: 'pilgrimage',
    bestMonths: 'Oct – Mar (Makar Sankranti in Jan)',
    recommendedDuration: '1 Day Trip (From Kolkata)',
    startingPriceINR: 3000,
    shortDescription: 'A spiritual journey beyond boundaries from Kolkata. Experience the holy dip at Sagar Beach where the Holy Ganges meets the Bay of Bengal, followed by darshan at the ancient Kapil Muni Mandir.',
    image: '/assets/aistudio/WhatsApp_Image_2026-10-23_at_10.51.48__3__a44ce738.jpeg',
    styles: ['pilgrimage', 'relaxed', 'heritage', 'family'],
    climateNote: 'Breezy delta maritime climate (18-28°C) with scenic ferry crossings.',
    keyHighlights: [
      'Holy bath at Sagar Beach (sacred confluence of Ganges & ocean)',
      'Darshan and blessings at the ancient Kapil Muni Mandir',
      'Private vehicle pickup and drop in Kolkata',
      'Private ferry charges to and from Sagardwip included',
      'Fresh tender coconut water welcome drink from Info Tripp',
      'Door-to-door coordinated transit from 09:00 AM to 09:00 PM'
    ],
    featured: true
  },
  {
    id: 'shirdi',
    name: 'Shirdi & Shani Shingnapur',
    country: 'India',
    category: 'pilgrimage',
    bestMonths: 'All Year (Especially Oct – Mar)',
    recommendedDuration: '2N/3D or 3N/4D',
    startingPriceINR: 5500,
    shortDescription: 'Faith, peace, and a divine journey to Sai Baba’s sanctum. Seek blessings at Samadhi Mandir, Dwarkamai, Chavadi, Shani Shingnapur, with optional extension to Nashik and historic Ajanta & Ellora Caves.',
    image: '/assets/aistudio/WhatsApp_Image_2026-10-23_at_10.51.48__1__36d807e3.jpeg',
    styles: ['pilgrimage', 'family', 'relaxed', 'heritage'],
    climateNote: 'Dry and pleasant Maharashtra plateau climate (16-29°C).',
    keyHighlights: [
      'Direct darshan at Sai Baba Samadhi Mandir, Dwarkamai & Gurusthan',
      'Day excursion to the sacred door-less village of Shani Shingnapur (75 km)',
      'Optional 4-Day extension: Trimbakeshwar Jyotirlinga, Nashik & Ajanta-Ellora Caves',
      'Budget/Comfort Hotel Stay with station or airport cab pickup & drop',
      'Private dedicated cab for temple sightseeing throughout'
    ],
    featured: true
  },
  {
    id: 'khatu-shyam-salasar',
    name: 'Khatu Shyam & Salasar Balaji',
    country: 'India',
    category: 'pilgrimage',
    bestMonths: 'Sep – Mar (Especially Ekadashi)',
    recommendedDuration: '1 Night / 2 Days (From NCR)',
    startingPriceINR: 4999,
    shortDescription: 'Spiritual journey with comfort & care from Delhi NCR. Seek blessings at Shri Khatu Shyam Ji Temple and Salasar Balaji Temple, with doorstep cab pickup from anywhere in Delhi NCR and 1 night hotel stay at Salasar.',
    image: '/assets/aistudio/WhatsApp_Image_2026-10-23_at_10.51.48_f9e1cc47.jpeg',
    styles: ['pilgrimage', 'family', 'heritage', 'relaxed'],
    climateNote: 'Crisp, sunny desert days (18-26°C) and cool night temperatures.',
    keyHighlights: [
      'Darshan and blessings at Shri Khatu Shyam Ji Temple in Sikar',
      'Morning darshan and Aarti at the revered Salasar Balaji Temple',
      'Doorstep cab pickup from Delhi, Noida, Greater Noida, Gurugram, Faridabad & Ghaziabad',
      '1 Night hotel stay in Salasar included',
      'Special discounted offer: ₹4,999/person (original ₹10,000, min 2 persons)'
    ],
    featured: true
  }
];

export const PACKAGES: PackageItem[] = [
  {
    id: 'pkg-kashmir-paradise',
    title: 'Kashmir: Saffron Meadows & Alpine Stays',
    subtitle: 'Srinagar • Gulmarg • Pahalgam • Sonamarg',
    region: 'India',
    regionCategory: 'himalayas',
    destination: 'Kashmir',
    durationDays: 7,
    durationNights: 6,
    waypoints: ['Srinagar', 'Gulmarg', 'Pahalgam', 'Sonamarg', 'Srinagar'],
    startingPriceINR: 32500,
    hotelTier: 'Heritage Houseboat & 4★ Boutique Pine Resorts',
    highlights: [
      '1 Night in Luxury Handcrafted Dal Lake Houseboat',
      'Gondola Phase II Ticket Assistance in Gulmarg',
      'Pahalgam Lidder Riverfront Bonfire Evening',
      'Dedicated Chauffeur & Sanitized Innova / Crysta'
    ],
    rating: 4.94,
    reviewsCount: 382,
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1000&q=80',
    styleTags: ['couples', 'family', 'winter', 'relaxed'],
    bestSeason: 'Year Round (Spring Blooms & Winter Snow)',
    inclusions: [
      '6 Nights handpicked hotel & luxury houseboat accommodation',
      'Daily breakfast and curated regional dinners (MAP Plan)',
      'All airport pick-up, drops, and inter-city private transfers',
      '1-Hour complimentary Shikara boat ride on Dal Lake',
      'Tolls, parking, driver night allowances, and state taxes',
      '24/7 dedicated trip manager support over WhatsApp'
    ],
    featured: true,
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Srinagar & Evening Shikara at Dal Lake',
        location: 'Srinagar',
        activities: [
          'Arrival at Srinagar Airport with traditional warm welcome by private chauffeur',
          'Check-in to your hand-carved heritage houseboat on peaceful Nigeen/Dal Lake',
          'Sunset Shikara cruise passing floating vegetable gardens and Char Chinar island',
          'Candlelit authentic Kashmiri Wazwan-inspired dinner on the cedar deck'
        ],
        stay: 'Signature Luxury Heritage Houseboat (Dal Lake)',
        mealsIncluded: 'Dinner'
      },
      {
        day: 2,
        title: 'Mughal Gardens & Scenic Drive to Gulmarg',
        location: 'Gulmarg',
        activities: [
          'Morning stroll through Nishat Bagh and Shalimar Bagh terrace gardens',
          'Scenic 2-hour drive to Gulmarg passing willow trees and walnut orchards',
          'Check-in at pine-wood boutique mountain lodge',
          'Leisure walk around the historic 1902 St. Mary’s Church and snowy golf course'
        ],
        stay: 'Pine View Boutique Mountain Resort (Gulmarg)',
        mealsIncluded: 'Breakfast, Dinner'
      },
      {
        day: 3,
        title: 'Gulmarg High Altitude Gondola & Snow Meadows',
        location: 'Gulmarg',
        activities: [
          'Morning Gondola cable car ride to Kongdoori (Phase 1) and Apharwat Peak (Phase 2 at 13,780 ft)',
          'Snow activities or leisurely hot kehwa tea overlooking snow-capped Pir Panjal range',
          'Warm dinner with local lamb rogan josh or dum aloo by the fire'
        ],
        stay: 'Pine View Boutique Mountain Resort (Gulmarg)',
        mealsIncluded: 'Breakfast, Dinner'
      },
      {
        day: 4,
        title: 'Journey to Pahalgam — Valley of the Shepherds',
        location: 'Pahalgam',
        activities: [
          'Descent from Gulmarg to the lush green pine valleys of Pahalgam',
          'Stop at Pampore saffron fields and ancient Avantipur temple ruins',
          'Check-in at riverside alpine cottage overlooking the roaring Lidder River',
          'Evening riverside walk and freshly brewed Kashmiri Chai'
        ],
        stay: 'Lidder Riverfront Chalet (Pahalgam)',
        mealsIncluded: 'Breakfast, Dinner'
      },
      {
        day: 5,
        title: 'Betaab Valley, Chandanwari & Aru Meadows',
        location: 'Pahalgam',
        activities: [
          'Excursion to Betaab Valley (named after the legendary Bollywood movie)',
          'Visit Chandanwari, the starting point of the holy Amarnath Yatra',
          'Afternoon pony or walking trail into pristine Aru Valley',
          'Cozy evening bonfire with mountain views'
        ],
        stay: 'Lidder Riverfront Chalet (Pahalgam)',
        mealsIncluded: 'Breakfast, Dinner'
      },
      {
        day: 6,
        title: 'Sonamarg Golden Meadows Excursion & Old Srinagar Bazaar',
        location: 'Srinagar',
        activities: [
          'Day trip to Sonamarg — the gateway to Ladakh, flanked by Thajiwas Glacier',
          'Return to Srinagar for artisan shopping in Lal Chowk (dry fruits, pashmina, saffron)',
          'Farewell celebration dinner in Srinagar'
        ],
        stay: 'The Grand Orchard Boutique Hotel (Srinagar)',
        mealsIncluded: 'Breakfast, Dinner'
      },
      {
        day: 7,
        title: 'Souvenirs & Departure from Srinagar Airport',
        location: 'Srinagar',
        activities: [
          'Relaxed breakfast and final views of the mountains',
          'Chauffeur transfer to Srinagar International Airport for departure flight with lifelong memories'
        ],
        stay: 'Departure',
        mealsIncluded: 'Breakfast'
      }
    ]
  },
  {
    id: 'pkg-rajasthan-royalty',
    title: 'Royal Rajasthan: Forts, Dunes & Havelis',
    subtitle: 'Jaipur • Jodhpur • Pushkar • Udaipur',
    region: 'India',
    regionCategory: 'india',
    destination: 'Rajasthan',
    durationDays: 8,
    durationNights: 7,
    waypoints: ['Jaipur', 'Pushkar', 'Jodhpur', 'Udaipur'],
    startingPriceINR: 38000,
    hotelTier: 'Heritage Havelis & Royal Palace Resorts',
    highlights: [
      'Private Amber Fort Guided Walk with Sunrise Views',
      'Overnight Thar Desert Swiss Luxury Tent & Folk Dance',
      'Lake Pichola Private Sunset Boat Cruise in Udaipur',
      'Exclusive Jodhpur Blue City Artisan Walk'
    ],
    rating: 4.96,
    reviewsCount: 420,
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80',
    styleTags: ['heritage', 'family', 'luxury', 'couples'],
    bestSeason: 'October to March',
    inclusions: [
      '7 Nights stay in vetted heritage havelis & boutique palaces',
      'Daily royal buffet breakfast & selected traditional dinners',
      'All intercity transfers by dedicated AC Innova Crysta with veteran driver',
      'Private boat cruise on Lake Pichola in Udaipur',
      'All toll taxes, inter-state permit fees, parking charges',
      'Assigned personal trip specialist on WhatsApp 24/7'
    ],
    featured: true,
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Jaipur — The Pink City Welcome',
        location: 'Jaipur',
        activities: [
          'Arrival at Jaipur Airport/Station, garland welcome by chauffeur',
          'Check-in at restored 19th-century Royal Haveli',
          'Sunset photo stop at Hawa Mahal and Johari Bazaar bangle makers',
          'Welcome dinner featuring Dal Baati Churma and Rajasthani sweets'
        ],
        stay: 'Heritage Mandawa Haveli (Jaipur)',
        mealsIncluded: 'Dinner'
      },
      {
        day: 2,
        title: 'Amber Fort, City Palace & Jal Mahal',
        location: 'Jaipur',
        activities: [
          'Morning guided expedition to majestic Amber Fort and Sheesh Mahal (Mirror Palace)',
          'Photo stop at Jal Mahal (Water Palace) in the center of Man Sagar Lake',
          'Explore Maharaja’s City Palace and Jantar Mantar UNESCO Astronomical Observatory',
          'Evening artisanal textile block printing demonstration'
        ],
        stay: 'Heritage Mandawa Haveli (Jaipur)',
        mealsIncluded: 'Breakfast'
      },
      {
        day: 3,
        title: 'Sacred Pushkar Oasis & Brahma Temple',
        location: 'Pushkar',
        activities: [
          'Drive to holy Pushkar across scenic Aravalli hills',
          'Visit the rare world-famous Lord Brahma Temple and 52 sacred bathing ghats',
          'Sunset rose garden walk and café culture by Pushkar Lake'
        ],
        stay: 'Pushkar Desert Oasis Resort',
        mealsIncluded: 'Breakfast, Dinner'
      },
      {
        day: 4,
        title: 'Jodhpur The Sun City & Mehrangarh Fort',
        location: 'Jodhpur',
        activities: [
          'Drive to Jodhpur, the magnificent Blue City',
          'Tour the towering Mehrangarh Fort perched 400 feet above the indigo alleys',
          'Visit Jaswant Thada white marble royal cenotaphs',
          'Evening rooftop dinner overlooking the illuminated fortress'
        ],
        stay: 'Pal Haveli Heritage Mansion (Jodhpur)',
        mealsIncluded: 'Breakfast, Dinner'
      },
      {
        day: 5,
        title: 'Ranakpur Marble Temples to Romantic Udaipur',
        location: 'Udaipur',
        activities: [
          'Scenic drive toward Udaipur through the Aravalli forests',
          'En-route stop at Ranakpur Jain Temples with 1,444 uniquely carved marble pillars',
          'Arrival in Udaipur — City of Lakes and Venice of the East'
        ],
        stay: 'Fateh Garh Heritage Palace (Udaipur)',
        mealsIncluded: 'Breakfast'
      },
      {
        day: 6,
        title: 'Udaipur City Palace & Lake Pichola Cruise',
        location: 'Udaipur',
        activities: [
          'Morning guided tour of the sprawling City Palace complex on Lake Pichola',
          'Stroll through Saheliyon Ki Bari (Garden of Royal Maids)',
          'Private sunset boat cruise on Lake Pichola with view of Jag Mandir and Taj Lake Palace'
        ],
        stay: 'Fateh Garh Heritage Palace (Udaipur)',
        mealsIncluded: 'Breakfast, Dinner'
      },
      {
        day: 7,
        title: 'Monsoon Palace & Artisan Miniature Art',
        location: 'Udaipur',
        activities: [
          'Drive up to Sajjangarh (Monsoon Palace) for sweeping panoramic lake views',
          'Visit traditional Mewar miniature painting ateliers',
          'Farewell royal banquet with traditional folk musicians'
        ],
        stay: 'Fateh Garh Heritage Palace (Udaipur)',
        mealsIncluded: 'Breakfast, Dinner'
      },
      {
        day: 8,
        title: 'Departure from Udaipur',
        location: 'Udaipur',
        activities: [
          'Leisurely royal breakfast by the pool',
          'Transfer to Udaipur Maharana Pratap Airport for return flight'
        ],
        stay: 'Departure',
        mealsIncluded: 'Breakfast'
      }
    ]
  },
  {
    id: 'pkg-bali-island-romance',
    title: 'Bali Serenity: Ubud Cascades & Ocean Cliffs',
    subtitle: 'Ubud • Nusa Penida • Seminyak • Uluwatu',
    region: 'International',
    regionCategory: 'international',
    destination: 'Bali',
    durationDays: 7,
    durationNights: 6,
    waypoints: ['Denpasar', 'Ubud', 'Nusa Penida', 'Seminyak', 'Uluwatu'],
    startingPriceINR: 52000,
    hotelTier: 'Private Jungle Pool Villa + 5★ Beachfront Resort',
    highlights: [
      '3 Nights in Ubud Private Valley Pool Villa with Floating Breakfast',
      'Fast Boat Excursion to Nusa Penida (Kelingking & Broken Beach)',
      'Sunset Kecak Fire Dance at Uluwatu Cliff Temple',
      'Couples Balinese Spa Ritual & Flower Bath'
    ],
    rating: 4.95,
    reviewsCount: 310,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=80',
    styleTags: ['couples', 'luxury', 'relaxed', 'active'],
    bestSeason: 'April to October',
    inclusions: [
      '3 Nights Ubud Jungle Pool Villa + 3 Nights Seminyak Luxury Suite',
      'Daily American / Indonesian gourmet breakfast with 1 floating breakfast',
      'Private air-conditioned car with English-speaking Balinese driver-guide',
      'Return fast boat tickets and private island tour of Nusa Penida',
      'All entry tickets, sarong rentals, parking and toll charges',
      'WhatsApp concierge tracking flight times and live local support'
    ],
    featured: true,
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Bali & Ubud Jungle Retreat',
        location: 'Ubud',
        activities: [
          'Touchdown at Denpasar International Airport (DPS) with fast-track assistance',
          'Private transfer through scenic villages to your Ubud jungle pool villa',
          'Welcome floral bath and tropical dragonfruit cocktail',
          'Evening dinner listening to the Ayung river breeze'
        ],
        stay: 'Kamandalu / Aksari Private Pool Villa (Ubud)',
        mealsIncluded: 'Dinner'
      },
      {
        day: 2,
        title: 'Tegalalang Rice Terraces, Bali Swing & Waterfalls',
        location: 'Ubud',
        activities: [
          'Signature floating breakfast served directly in your private villa pool',
          'Visit emerald Tegalalang Rice Terraces and iconic scenic Bali jungle swing',
          'Cool off at Tegenungan or Kanto Lampo cascading waterfall',
          'Explore Ubud Royal Palace and local woodcraft studios'
        ],
        stay: 'Kamandalu / Aksari Private Pool Villa (Ubud)',
        mealsIncluded: 'Breakfast'
      },
      {
        day: 3,
        title: 'Holy Water Purification & Mount Batur Volcano Views',
        location: 'Kintamani & Ubud',
        activities: [
          'Sacred Melukat water blessing ceremony at Tirta Empul Temple',
          'Panoramic lunch facing the active Mount Batur caldera and Lake Batur',
          'Traditional Luwak coffee tasting at a hillside plantation',
          'Evening 60-minute relaxing Balinese aromatherapy massage'
        ],
        stay: 'Kamandalu / Aksari Private Pool Villa (Ubud)',
        mealsIncluded: 'Breakfast'
      },
      {
        day: 4,
        title: 'Nusa Penida Island Expedition (T-Rex Cliff)',
        location: 'Nusa Penida',
        activities: [
          'Morning private transfer to Sanur port for high-speed catamaran to Nusa Penida',
          'Witness jaw-dropping Kelingking Beach (T-Rex shaped cliff and sapphire bay)',
          'Visit Broken Beach (Pasih Uug) natural archway and Angel’s Billabong tidal pool',
          'Return catamaran ride and transfer to Seminyak beachfront suite'
        ],
        stay: 'W Bali / The Seminyak Beach Resort (Seminyak)',
        mealsIncluded: 'Breakfast, Island Lunch'
      },
      {
        day: 5,
        title: 'Uluwatu Sunset Temple & Kecak Fire Dance',
        location: 'Uluwatu',
        activities: [
          'Relaxed morning by the Indian Ocean or boutique café hopping',
          'Afternoon drive to dramatic 70-meter limestone cliffs of Uluwatu Temple',
          'Watch the world-renowned Kecak & Fire Dance at twilight over the ocean',
          'Candlelight seafood dinner right on the sand at Jimbaran Bay'
        ],
        stay: 'The Seminyak Beach Resort',
        mealsIncluded: 'Breakfast, Seafood Dinner'
      },
      {
        day: 6,
        title: 'Tanah Lot Sunset & Beach Club Indulgence',
        location: 'Canggu & Tanah Lot',
        activities: [
          'Visit the mythical sea temple of Tanah Lot during low tide',
          'Afternoon daybed access at premier beach lounge (Finns or Café del Mar)',
          'Farewell sunset cocktails'
        ],
        stay: 'The Seminyak Beach Resort',
        mealsIncluded: 'Breakfast'
      },
      {
        day: 7,
        title: 'Souvenirs & Bali Departure',
        location: 'Denpasar',
        activities: [
          'Final tropical breakfast and boutique shopping at Krisna Oleh-Oleh',
          'Private chauffeur transfer to Denpasar Airport for flight home'
        ],
        stay: 'Departure',
        mealsIncluded: 'Breakfast'
      }
    ]
  },
  {
    id: 'pkg-swiss-alpine-glory',
    title: 'Swiss Grandeur: Glaciers, Rails & Alpine Lakes',
    subtitle: 'Zurich • Lucerne • Interlaken • Zermatt',
    region: 'International',
    regionCategory: 'international',
    destination: 'Switzerland',
    durationDays: 8,
    durationNights: 7,
    waypoints: ['Zurich', 'Lucerne', 'Interlaken', 'Grindelwald', 'Zermatt'],
    startingPriceINR: 178000,
    hotelTier: '4★ & 5★ Premium Alpine Chalets & Lakefront Hotels',
    highlights: [
      '8-Day Swiss Travel Pass 1st Class with Unlimited Trains & Boats',
      'Excursion to Jungfraujoch — Top of Europe (3,454m)',
      'Gornergrat Cogwheel Train with Front-Row Matterhorn Views',
      'Lake Lucerne Historical Steamboat Cruise'
    ],
    rating: 4.98,
    reviewsCount: 194,
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1000&q=80',
    styleTags: ['luxury', 'couples', 'winter', 'family'],
    bestSeason: 'May to October & December to March',
    inclusions: [
      '7 Nights stay in prime central hotels near Swiss stations',
      '8-Day Swiss Travel Pass (1st Class) covering all public transit & 500+ museums',
      'Jungfraujoch Top of Europe cogwheel railway tickets',
      'Gornergrat Matterhorn alpine cogwheel train tickets',
      'Daily Swiss buffet breakfast and Swiss chocolate welcome kit',
      'Dedicated European concierge support via WhatsApp'
    ],
    featured: true,
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Zurich & Scenic Train to Lake Lucerne',
        location: 'Lucerne',
        activities: [
          'Arrival at Zurich Airport, seamless hop onto Swiss rail directly to Lucerne (45 mins)',
          'Check-in at historic lakefront hotel',
          'Walk across the 14th-century Chapel Bridge (Kapellbrücke) and Lion Monument',
          'Welcome Swiss fondue dinner along the Reuss river'
        ],
        stay: 'Hotel Schweizerhof Lucerne / Hotel des Balances',
        mealsIncluded: 'Dinner'
      },
      {
        day: 2,
        title: 'Mount Titlis Rotating Cable Car & Lake Cruise',
        location: 'Engelberg & Lucerne',
        activities: [
          'Train to Engelberg and board the Rotair world’s first rotating cable car to Mt Titlis (10,000 ft)',
          'Walk through the Glacier Cave and cross the Titlis Cliff Walk suspension bridge',
          'Afternoon panoramic steamboat cruise across Lake Lucerne'
        ],
        stay: 'Hotel Schweizerhof Lucerne',
        mealsIncluded: 'Breakfast'
      },
      {
        day: 3,
        title: 'GoldenPass Line to Interlaken & Lauterbrunnen Waterfalls',
        location: 'Interlaken',
        activities: [
          'Board the scenic GoldenPass Express through Brünig Pass to Interlaken',
          'Excursion to Lauterbrunnen Valley with its 72 cascading waterfalls including Staubbach Falls',
          'Stroll around charming car-free village of Mürren'
        ],
        stay: 'Victoria-Jungfrau Grand Hotel / Boutique Chalet Interlaken',
        mealsIncluded: 'Breakfast'
      },
      {
        day: 4,
        title: 'Jungfraujoch — Top of Europe Summit',
        location: 'Jungfraujoch',
        activities: [
          'Ride the modern Eiger Express tricable gondola from Grindelwald to Eigergletscher',
          'Ascend via cogwheel through the Eiger mountain to Jungfraujoch (3,454m)',
          'Walk on the Aletsch Glacier (Europe’s longest ice sheet) and Ice Palace',
          'Afternoon hot chocolate in Grindelwald village'
        ],
        stay: 'Victoria-Jungfrau Grand Hotel (Interlaken)',
        mealsIncluded: 'Breakfast'
      },
      {
        day: 5,
        title: 'Scenic Journey to Zermatt & Car-Free Alpine Charm',
        location: 'Zermatt',
        activities: [
          'Train along the Rhône Valley into the Valais canton to car-free Zermatt',
          'First jaw-dropping sight of the iconic pyramidal Matterhorn',
          'Check-in at wooden Swiss chalet with Matterhorn balcony view',
          'Evening stroll through the historic Hinterdorf quarter'
        ],
        stay: 'Chalet Hotel Schönegg / BEAUSiTE Zermatt',
        mealsIncluded: 'Breakfast'
      },
      {
        day: 6,
        title: 'Gornergrat Cogwheel Train & Riffelsee Reflection',
        location: 'Gornergrat & Zermatt',
        activities: [
          'Ride the open-air Gornergrat cogwheel train up to 3,089 meters',
          'Marvel at 29 four-thousand-meter peaks and the Gorner Glacier',
          'Short hike to Riffelsee to photograph the iconic Matterhorn reflection in the alpine lake'
        ],
        stay: 'Chalet Hotel Schönegg (Zermatt)',
        mealsIncluded: 'Breakfast, Dinner'
      },
      {
        day: 7,
        title: 'Zurich Old Town & Lake Promenade',
        location: 'Zurich',
        activities: [
          'Scenic morning train to Zurich along Lake Thun and Lake Zurich',
          'Explore the cobblestone streets of Altstadt (Old Town) and Grossmünster',
          'Boutique shopping along prestigious Bahnhofstrasse and Lindt Home of Chocolate',
          'Farewell fine dining by Lake Zurich'
        ],
        stay: 'Boutique Hotel Wellenberg (Zurich)',
        mealsIncluded: 'Breakfast'
      },
      {
        day: 8,
        title: 'Departure from Zurich Airport',
        location: 'Zurich',
        activities: [
          'Gourmet Swiss breakfast',
          'Direct 10-minute train to Zurich Airport for international flight'
        ],
        stay: 'Departure',
        mealsIncluded: 'Breakfast'
      }
    ]
  },
  {
    id: 'pkg-ladakh-high-passes',
    title: 'Ladakh: High Passes & Turquoise Pangong',
    subtitle: 'Leh • Nubra Valley • Pangong Tso • Khardung La',
    region: 'India',
    regionCategory: 'himalayas',
    destination: 'Ladakh',
    durationDays: 7,
    durationNights: 6,
    waypoints: ['Leh', 'Sham Valley', 'Nubra Valley', 'Pangong Tso', 'Leh'],
    startingPriceINR: 39500,
    hotelTier: 'Boutique Heritage Leh Hotels & Luxury Geodesic Domes',
    highlights: [
      'Conquer Khardung La (17,982 ft) World’s Highest Motorable Pass',
      'Overnight Glamping in Insulated Luxury Domes at Pangong Lake',
      'Double-Humped Bactrian Camel Ride on Hunder White Sand Dunes',
      'Acclimatization Oxygen Assistance & Dedicated Private 4x4'
    ],
    rating: 4.93,
    reviewsCount: 278,
    image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1000&q=80',
    styleTags: ['active', 'couples', 'relaxed'],
    bestSeason: 'May to September',
    inclusions: [
      '6 Nights accommodation (4N Leh, 1N Nubra, 1N Pangong Luxury Dome)',
      'Daily wholesome breakfast and warm Ladakhi/North Indian dinners',
      'Dedicated non-stop 4x4 Innova / Scorpio with seasoned high-altitude driver',
      'Inner Line Permits and environmental green fees for Pangong & Nubra',
      'Emergency portable oxygen cylinder equipped in the vehicle',
      'Personal trip lead available 24/7 on WhatsApp'
    ],
    featured: false,
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Leh & Complete Rest for Acclimatization',
        location: 'Leh (11,500 ft)',
        activities: [
          'Sensational mountain flight landing at Kushok Bakula Rimpochee Airport',
          'Garland welcome by chauffeur and transfer to boutique hotel in Leh',
          'Mandatory full day rest for altitude acclimatization with hot garlic soup & herbal teas',
          'Evening relaxed walk to Leh Main Market and Shanti Stupa sunset'
        ],
        stay: 'The Grand Dragon / Choszin Boutique Hotel (Leh)',
        mealsIncluded: 'Dinner'
      },
      {
        day: 2,
        title: 'Sham Valley: Magnetic Hill, Indus-Zanskar Confluence & Pathar Sahib',
        location: 'Leh & Nimmu',
        activities: [
          'Drive along the scenic Srinagar-Leh highway',
          'Witness the gravity-defying Magnetic Hill phenomenon',
          'Marvel at the Sangam (confluence of emerald Indus and muddy Zanskar rivers)',
          'Visit historic Gurudwara Pathar Sahib and Spituk Monastery'
        ],
        stay: 'Choszin Boutique Hotel (Leh)',
        mealsIncluded: 'Breakfast, Dinner'
      },
      {
        day: 3,
        title: 'Crossing Khardung La Pass (17,982 ft) to Nubra Valley',
        location: 'Nubra Valley',
        activities: [
          'Climb to Khardung La, one of the highest motorable mountain passes in the world',
          'Photo stop with the iconic yellow milestone sign overlooking the Karakoram range',
          'Descend into the mystical Nubra Valley (Valley of Flowers)',
          'Ride double-humped Bactrian camels on the high-altitude sand dunes of Hunder'
        ],
        stay: 'Stone Hedge Luxury Camp / Nubra Organic Retreat',
        mealsIncluded: 'Breakfast, Dinner'
      },
      {
        day: 4,
        title: 'Diskit Monastery Giant Buddha to Pangong Tso Lake',
        location: 'Pangong Tso',
        activities: [
          'Visit the 106-foot tall Maitreya Buddha statue at Diskit Monastery',
          'Scenic drive via the wild Shyok River route directly to Pangong Lake',
          'First sight of the deep sapphire waters changing hues under the afternoon sun',
          'Stargazing experience under the pollution-free Milky Way sky'
        ],
        stay: 'Pangong Sarai Luxury Geodesic Glamping Dome',
        mealsIncluded: 'Breakfast, Dinner'
      },
      {
        day: 5,
        title: 'Sunrise over Pangong Lake & Return to Leh via Chang La (17,688 ft)',
        location: 'Leh',
        activities: [
          'Breathtaking sunrise over the 134-kilometer long international lake',
          'Drive back crossing the formidable Chang La mountain pass',
          'Visit Thiksey Monastery, famously reminiscent of Tibet’s Potala Palace',
          'Return to Leh for relaxing evening and souvenirs'
        ],
        stay: 'The Grand Dragon / Choszin Boutique Hotel (Leh)',
        mealsIncluded: 'Breakfast, Dinner'
      },
      {
        day: 6,
        title: 'Leh Palace, Hemis Monastery & Tibetan Craft Market',
        location: 'Leh',
        activities: [
          'Explore the 17th-century Leh Royal Palace overlooking the town',
          'Visit the wealthiest and most revered Hemis Gompa',
          'Farewell Ladakhi dinner with freshly steamed momos and thukpa'
        ],
        stay: 'The Grand Dragon / Choszin Boutique Hotel (Leh)',
        mealsIncluded: 'Breakfast, Dinner'
      },
      {
        day: 7,
        title: 'Departure from Leh',
        location: 'Leh',
        activities: [
          'Early morning breakfast with mountain views',
          'Chauffeur transfer to Leh Airport for return flight above the Himalayas'
        ],
        stay: 'Departure',
        mealsIncluded: 'Breakfast'
      }
    ]
  },
  {
    id: 'pkg-kerala-backwaters-mist',
    title: 'Kerala: Backwater Serenades & Munnar Mist',
    subtitle: 'Kochi • Munnar • Thekkady • Alleppey',
    region: 'India',
    regionCategory: 'coastal',
    destination: 'Kerala',
    durationDays: 6,
    durationNights: 5,
    waypoints: ['Kochi', 'Munnar', 'Thekkady', 'Alleppey', 'Kochi'],
    startingPriceINR: 27500,
    hotelTier: 'Private Heritage Houseboat & Hill Plantation Resorts',
    highlights: [
      'Exclusive Overnight Backwater Cruise on AC Heritage Houseboat',
      'Munnar Tea Plantation Safari & Tea Museum Tasting',
      'Thekkady Periyar Wildlife Sanctuary Bamboo Rafting / Boat Safari',
      'Live Kathakali and Kalaripayattu Martial Arts Evening'
    ],
    rating: 4.92,
    reviewsCount: 345,
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80',
    styleTags: ['relaxed', 'couples', 'family'],
    bestSeason: 'September to May',
    inclusions: [
      '5 Nights stay (2N Munnar, 1N Thekkady, 1N Alleppey Houseboat, 1N Kochi)',
      'All meals on Alleppey Houseboat (Lunch, High Tea, Dinner, Breakfast)',
      'Daily breakfast at all hill resorts and hotels',
      'Private air-conditioned sedan/SUV with experienced local chauffeur',
      'Kathakali & martial arts performance tickets included',
      '24/7 dedicated trip coordinator'
    ],
    featured: false,
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Fort Kochi & Drive into the Misty Hills of Munnar',
        location: 'Munnar',
        activities: [
          'Arrival at Cochin International Airport (COK), welcomed by driver',
          'Scenic 4-hour uphill drive to Munnar passing Cheeyappara and Valara waterfalls',
          'Check-in at hillside resort surrounded by rolling tea gardens',
          'Crisp mountain evening with hot cardamom tea'
        ],
        stay: 'Fragrant Nature Munnar / Blanket Luxury Villa',
        mealsIncluded: 'Dinner'
      },
      {
        day: 2,
        title: 'Munnar Tea Estates, Eravikulam National Park & Mattupetty Dam',
        location: 'Munnar',
        activities: [
          'Morning visit to Eravikulam National Park to spot the endangered Nilgiri Tahr',
          'Tour Tata Tea Museum to witness traditional orthodox tea manufacturing',
          'Boating at Mattupetty Dam and Echo Point acoustic valley',
          'Evening bonfire overlooking the mist-filled valley'
        ],
        stay: 'Fragrant Nature Munnar',
        mealsIncluded: 'Breakfast, Dinner'
      },
      {
        day: 3,
        title: 'Thekkady Spice Plantations & Periyar Lake',
        location: 'Thekkady',
        activities: [
          'Drive to Thekkady through lush spice gardens and cardamom hills',
          'Guided walk through an organic spice plantation (pepper, cinnamon, vanilla)',
          'Boat safari on Periyar Lake inside the Periyar Tiger Reserve',
          'Evening live Kalaripayattu traditional martial arts show'
        ],
        stay: 'Cardamom County / Poetree Sarovar Portico',
        mealsIncluded: 'Breakfast, Dinner'
      },
      {
        day: 4,
        title: 'Alleppey Private Luxury Houseboat Cruise',
        location: 'Alleppey',
        activities: [
          'Descent to Alleppey backwaters and board your private traditional thatched Kettuvallam',
          'Traditional Kerala feast served on banana leaf by personal onboard chef (Karimeen fish / vegetable curry)',
          'Glide past sleepy villages, coconut groves, and water lily canals',
          'Overnight anchor in peaceful backwater lagoon'
        ],
        stay: 'Lakes & Lagoons Premium Private AC Houseboat',
        mealsIncluded: 'Breakfast, Lunch, Dinner'
      },
      {
        day: 5,
        title: 'Fort Kochi Heritage, Chinese Fishing Nets & Jew Town',
        location: 'Kochi',
        activities: [
          'Morning disembarkation after breakfast on the water',
          'Drive to historical Fort Kochi to see Chinese Fishing Nets and Santa Cruz Basilica',
          'Stroll down antique shops in Jew Town and Mattancherry Dutch Palace',
          'Farewell coastal seafood dinner'
        ],
        stay: 'Brunton Boatyard / Eighth Bastion (Fort Kochi)',
        mealsIncluded: 'Breakfast'
      },
      {
        day: 6,
        title: 'Departure from Kochi Airport',
        location: 'Kochi',
        activities: [
          'Relaxed breakfast and souvenir shopping for Kerala spices and handlooms',
          'Chauffeur transfer to Cochin Airport for onward journey'
        ],
        stay: 'Departure',
        mealsIncluded: 'Breakfast'
      }
    ]
  },
  {
    id: 'pkg-mathura-vrindavan-1day',
    title: '1 Day Mathura & Vrindavan Divine Tour from Delhi NCR',
    subtitle: 'Shri Krishna Janmabhoomi • Banke Bihari • Nidhivan • Prem Mandir Light & Fountain Show',
    region: 'India',
    regionCategory: 'pilgrimage',
    destination: 'Mathura & Vrindavan',
    durationDays: 1,
    durationNights: 0,
    waypoints: ['Delhi NCR', 'Mathura', 'Vrindavan', 'Prem Mandir', 'Delhi NCR'],
    startingPriceINR: 1999,
    hotelTier: 'Private Chauffeur AC Cab (Same Day Trip)',
    highlights: [
      'Just ₹1,999 per person (Minimum 4 persons)',
      '05:30 AM doorstep cab pickup & drop from any point in Delhi NCR',
      'Shri Krishna Janmabhoomi Complex (sacred stone prison birthplace cell)',
      'Dwarkadhish Temple & sacred Yamuna river stroll at Vishram Ghat',
      'Lunch at Govinda’s Restaurant (Braj delicacies & Mathura pedas treat)',
      'Banke Bihari Temple ecstatic evening darshan & chants',
      'Mystical Nidhivan sacred forest walk before dusk',
      'Grand Prem Mandir white marble musical light & fountain show'
    ],
    rating: 4.96,
    reviewsCount: 420,
    image: '/assets/aistudio/WhatsApp_Image_2026-10-23_at_10.51.47_87127676.jpeg',
    styleTags: ['pilgrimage', 'family', 'heritage', 'relaxed'],
    bestSeason: 'All Year (Divine Darshan Daily)',
    inclusions: [
      'Private Cab pickup & drop from any point in Delhi NCR (Delhi, Noida, Gurugram, Ghaziabad, Faridabad)',
      'Full day private cab sightseeing in Mathura & Vrindavan',
      'Dedicated polite chauffeur with local temple guidance',
      '24/7 dedicated WhatsApp pilgrimage coordinator'
    ],
    featured: true,
    itinerary: [
      {
        day: 1,
        title: 'Morning, Afternoon & Evening Phases of Braj Bhoomi',
        location: 'Mathura & Vrindavan',
        activities: [
          '05:30 AM: Depart Delhi-NCR in private AC cab (start early to beat bottlenecks and reach Mathura by 8:00 AM).',
          '08:00 AM – 09:30 AM: Shri Krishna Janmabhoomi Complex. Step into the spiritual cradle of the region. Explore the inner sanctum and ancient stone prison cell believed to be the exact birthplace of Lord Krishna. (Lockers available for phones/bags).',
          '09:45 AM – 11:00 AM: Dwarkadhish Temple & Vishram Ghat. View beautiful architecture and take a peaceful walk along the edge of the sacred Yamuna River at Vishram Ghat.',
          '11:30 AM: Drive 12 km connecting Mathura to Vrindavan.',
          '12:00 PM – 03:30 PM: Lunch & Relaxation at Govinda’s Restaurant inside the ISKCON complex. Savor satvik vegetarian food and taste authentic Mathura pedas with cold creamy kulhad lassi.',
          '03:45 PM – 05:00 PM: Banke Bihari Temple. Arrive as curtains part for evening darshan. Filled with intense devotional chants and floating rose petals.',
          '05:15 PM – 06:15 PM: Nidhivan. Walk through this mystical sacred forest where trees are revered (exit before dusk strictly enforced).',
          '06:30 PM – 07:30 PM: Prem Mandir Light & Fountain Show. Conclude your pilgrimage at this grand white marble monument as darkness falls and shifting rainbow colors illuminate the intricate musical fountain show depicting Krishna’s leelas.',
          '07:45 PM: Return journey heading back onto the expressway, arriving in Delhi-NCR by roughly 10:30 PM.'
        ],
        stay: 'Same-day return to Delhi-NCR',
        mealsIncluded: 'Govinda’s ISKCON Lunch & authentic Mathura pedas with lassi'
      }
    ]
  },
  {
    id: 'pkg-ayodhya-divine-2d',
    title: '2 Days Ayodhya Spiritual Journey: Ram Mandir & Saryu Aarti',
    subtitle: 'Shri Ram Janmabhoomi • Hanuman Garhi • Saryu Ghat Aarti • Guptar Ghat',
    region: 'India',
    regionCategory: 'pilgrimage',
    destination: 'Ayodhya',
    durationDays: 2,
    durationNights: 2,
    waypoints: ['Ayodhya Cantt / Airport', 'Ram Mandir', 'Hanuman Garhi', 'Saryu Ghat', 'Guptar Ghat'],
    startingPriceINR: 3500,
    hotelTier: '2 Nights Hotel Stay with Daily Breakfast',
    highlights: [
      'Starting from ₹3,500 per person (Minimum 2 persons)',
      'Grand Shri Ram Janmabhoomi Mandir Darshan',
      'Hanuman Garhi & Kanak Bhawan golden palace blessings',
      'Dashrath Mahal, Sita Ki Rasoi & Treta Ke Thakur',
      'Mesmerizing Saryu Ghat Evening Maha Aarti at Ram Ki Paidi',
      'Guptar Ghat Jal Samadhi spot & local market souvenir shopping',
      'Includes 2-Night Hotel Stay + Breakfast + Private Cab + Airport/Station pickup & drop'
    ],
    rating: 4.98,
    reviewsCount: 310,
    image: '/assets/aistudio/WhatsApp_Image_2026-10-23_at_10.51.48__2__44e340fa.jpeg',
    styleTags: ['pilgrimage', 'heritage', 'family', 'relaxed'],
    bestSeason: 'Oct – Mar (Deepotsav & Ram Navami Festive Windows)',
    inclusions: [
      'Hotel Stay (2 Nights)',
      'Breakfast Included each morning',
      'Private Cab for all local sightseeing',
      'Airport / Railway Station Pickup & Drop in Ayodhya',
      'Tolls, parking, and driver allowances'
    ],
    featured: true,
    itinerary: [
      {
        day: 1,
        title: 'Sacred Temples, Ram Mandir Darshan & Saryu Aarti',
        location: 'Ayodhya Dham',
        activities: [
          'Arrival pickup from Maharishi Valmiki International Airport or Ayodhya Dham Railway Station; check into hotel.',
          'Visit the sanctum sanctorum of the newly consecrated grand Shri Ram Janmabhoomi Mandir with darshan assistance.',
          'Ascend the steps to Hanuman Garhi fortress to seek blessings from Lord Hanuman.',
          'Explore Kanak Bhawan, gifted by Queen Kaikeyi to Mata Sita, admiring the golden crowned deities.',
          'Visit Dashrath Mahal and the sacred heritage premises of Sita Ki Rasoi.',
          'Conclude the evening on the illuminated steps of Ram Ki Paidi for the soul-stirring Saryu Ghat Maha Aarti.'
        ],
        stay: 'Handpicked Comfort Hotel in Ayodhya (Night 1)',
        mealsIncluded: 'Breakfast'
      },
      {
        day: 2,
        title: 'Heritage & Riverside Exploration',
        location: 'Ayodhya & Saryu Banks',
        activities: [
          'Morning prayers at ancient Nageshwarnath Temple, built by Kush, son of Lord Rama.',
          'Visit Treta Ke Thakur, where Lord Rama is said to have performed the Ashwamedha Yajna.',
          'Explore Tulsi Smarak Bhawan & the lush greenery of Ram Katha Park.',
          'Peaceful riverside excursion to Guptar Ghat, the legendary site of Lord Rama’s Jal Samadhi.',
          'Explore Ayodhya’s vibrant local markets for sacred prasad, sandalwood carvings, and souvenirs.',
          'Transfer back to Ayodhya Railway Station or Airport for your return journey.'
        ],
        stay: 'Handpicked Comfort Hotel in Ayodhya (Night 2 / Late checkout)',
        mealsIncluded: 'Breakfast'
      }
    ]
  },
  {
    id: 'pkg-gangasagar-1day',
    title: 'Gangasagar 1-Day Divine Confluence Trip from Kolkata',
    subtitle: 'Sagar Beach Holy Dip • Kapil Muni Mandir • Private Ferry & Coconut Welcome',
    region: 'India',
    regionCategory: 'pilgrimage',
    destination: 'Gangasagar',
    durationDays: 1,
    durationNights: 0,
    waypoints: ['Kolkata', 'Kakdwip', 'Kachuberia Ghat', 'Sagar Beach', 'Kapil Muni Mandir', 'Kolkata'],
    startingPriceINR: 3000,
    hotelTier: 'Private Chauffeur Vehicle & Ferry Transfer',
    highlights: [
      'Final package price: ₹3,000 per person (Minimum 3 persons)',
      'Doorstep private vehicle pickup and drop in Kolkata',
      'Private ferry vessel charges included across Muriganga river',
      'Complimentary welcome tender coconut water on arrival at Sagardwip',
      'Sacred holy dip at Sagar Beach (confluence of Holy Ganga and Bay of Bengal)',
      'Darshan and blessings at the ancient Kapil Muni Mandir',
      'Dedicated transport throughout Sagardwip island'
    ],
    rating: 4.92,
    reviewsCount: 185,
    image: '/assets/aistudio/WhatsApp_Image_2026-10-23_at_10.51.48__3__a44ce738.jpeg',
    styleTags: ['pilgrimage', 'relaxed', 'heritage', 'family'],
    bestSeason: 'Oct – Mar (Peak Makar Sankranti Month)',
    inclusions: [
      'Private vehicle pickup and drop in Kolkata (vehicle matched to group size & luggage)',
      'Private ferry boat charges',
      'Private transport on Sagardwip island',
      'Welcome drink: fresh tender coconut water on arrival at Sagardwip (from Info Tripp)'
    ],
    featured: true,
    itinerary: [
      {
        day: 1,
        title: 'Kolkata to Gangasagar Island & Return',
        location: 'Kolkata ➔ Kakdwip ➔ Sagardwip ➔ Kolkata',
        activities: [
          '09:00 AM: Pickup from anywhere in Kolkata in a private air-conditioned vehicle.',
          '12:00 PM: Reach Kakdwip jetty and board the private ferry across the water.',
          '01:00 PM: Reach Sagardwip (Kachuberia Ghat). Savor a refreshing sweet coconut water welcome drink provided by Info Tripp.',
          '02:00 PM: Private island vehicle transfer to Gangasagar. Take a sanctifying holy bath at Sagar Beach where the holy Ganges river merges into the sea.',
          'Visit and offer prayers at the legendary Kapil Muni Mandir.',
          '03:00 PM: Lunch break (at customer’s expense) with local Bengali cuisine options.',
          '05:00 PM: Vehicle drop back at Kachuberia Ghat on Sagardwip.',
          '06:15 PM: Ferry back to Kakdwip; private cab departs Kakdwip for Kolkata.',
          '09:00 PM: Comfortable drop back at your hotel or residence in Kolkata.'
        ],
        stay: 'Same-day return to Kolkata',
        mealsIncluded: 'Welcome Coconut Water'
      }
    ]
  },
  {
    id: 'pkg-shirdi-sai-blessings',
    title: 'Shirdi Sai Baba & Shani Shingnapur Divine Pilgrimage',
    subtitle: 'Samadhi Mandir • Dwarkamai • Shani Shingnapur • Optional Nashik & Ellora Caves',
    region: 'India',
    regionCategory: 'pilgrimage',
    destination: 'Shirdi & Shani Shingnapur',
    durationDays: 3,
    durationNights: 2,
    waypoints: ['Shirdi Airport / Railway', 'Samadhi Mandir', 'Shani Shingnapur', 'Dwarkamai', 'Departure'],
    startingPriceINR: 5500,
    hotelTier: 'Budget / Comfort Hotel Stay near Temple Complex',
    highlights: [
      '2 Nights / 3 Days starting from ₹5,500 per person',
      '3 Nights / 4 Days with Nashik & Ajanta-Ellora Caves starting ₹6,500 per person',
      'Direct darshan at Sai Baba Samadhi Mandir, Dwarkamai, Chavadi & Gurusthan',
      'Day trip to the revered open-air temple village of Shani Shingnapur (75 km)',
      'Budget hotel stay with clean amenities and WiFi',
      'Private dedicated cab for station/airport pickup & drop plus sightseeing'
    ],
    rating: 4.95,
    reviewsCount: 290,
    image: '/assets/aistudio/WhatsApp_Image_2026-10-23_at_10.51.48__1__36d807e3.jpeg',
    styleTags: ['pilgrimage', 'family', 'relaxed', 'heritage'],
    bestSeason: 'All Year Round (Guru Purnima, Ram Navami & Dussehra Festive Seasons)',
    inclusions: [
      'Hotel Stay (2 Nights or 3 Nights as per chosen package tier)',
      'Private Cab for pick up & drop from Shirdi Airport / Manmad or Kopargaon Railway Station',
      'Private Cab for temple sightseeing & Shani Shingnapur day trip',
      'All driver allowances, tolls, and parking charges'
    ],
    featured: true,
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Shirdi & Samadhi Mandir Darshan',
        location: 'Shirdi',
        activities: [
          'Arrival in Shirdi via Manmad/Kopargaon railway station or Shirdi Airport.',
          'Private cab pickup, hotel check-in, and freshen up.',
          'Afternoon and evening visit to the holy Sai Baba Temple Complex.',
          'Darshan at Samadhi Mandir, Gurusthan, and the sacred perpetually burning fire (Dhuni Maa) at Dwarkamai.',
          'Experience the deeply peaceful evening Dhoop Aarti or night Shej Aarti.'
        ],
        stay: 'Budget / Comfort Hotel in Shirdi',
        mealsIncluded: 'Breakfast'
      },
      {
        day: 2,
        title: 'Day Excursion to Sacred Shani Shingnapur',
        location: 'Shani Shingnapur (75 km)',
        activities: [
          'Morning breakfast and scenic drive to Shani Shingnapur (approx. 75 km away).',
          'Seek blessings and perform traditional oil abhishek at the sacred black stone pillar idol of Lord Shani Dev in the famous door-less village.',
          'Afternoon return to Shirdi; evening leisure at Lendi Baug, where Sai Baba tended plants and meditated.',
          'For 3N/4D guests: onward travel to Nashik (Trimbakeshwar Jyotirlinga & Panchavati).'
        ],
        stay: 'Budget / Comfort Hotel in Shirdi (or Nashik for 4-day tier)',
        mealsIncluded: 'Breakfast'
      },
      {
        day: 3,
        title: 'Morning Leisure, Prasad Shopping & Departure',
        location: 'Shirdi Departure',
        activities: [
          'Early morning prayers and final blessings at the temple complex.',
          'Time for souvenir and holy Sai prasad shopping in the local market.',
          'Private cab drop to Shirdi Airport or Kopargaon / Manmad Railway Station.',
          '(For 3N/4D package: Day 3 explores the world-heritage Ajanta & Ellora Caves, with return drop on Day 4).'
        ],
        stay: 'Departure',
        mealsIncluded: 'Breakfast'
      }
    ]
  },
  {
    id: 'pkg-khatu-shyam-salasar-2d',
    title: 'Khatu Shyam & Salasar Balaji 2-Day Darshan from NCR',
    subtitle: 'Shri Khatu Shyam Ji • Salasar Balaji • Doorstep NCR Cab & Hotel Stay',
    region: 'India',
    regionCategory: 'pilgrimage',
    destination: 'Khatu Shyam & Salasar Balaji',
    durationDays: 2,
    durationNights: 1,
    waypoints: ['Delhi NCR', 'Khatu Shyam Ji', 'Salasar', 'Delhi NCR'],
    startingPriceINR: 4999,
    hotelTier: '1 Night Hotel Stay in Salasar Included',
    highlights: [
      'Special Offer: ₹4,999 per person (Original ₹10,000, Minimum 2 persons)',
      '1 Night / 2 Days spiritual journey with comfort and care',
      '05:00 AM doorstep pickup from Delhi, Noida, Greater Noida, Gurugram, Faridabad & Ghaziabad',
      'Darshan and blessings at Shri Khatu Shyam Ji Temple in Sikar',
      'Scenic drive to Salasar with hotel check-in and night stay',
      'Morning darshan and Aarti at Salasar Balaji Temple',
      'Return drop at your doorstep in Delhi NCR by roughly 08:00 PM'
    ],
    rating: 4.97,
    reviewsCount: 360,
    image: '/assets/aistudio/WhatsApp_Image_2026-10-23_at_10.51.48_f9e1cc47.jpeg',
    styleTags: ['pilgrimage', 'family', 'heritage', 'relaxed'],
    bestSeason: 'Sep – Mar (Especially Phalgun Mela & Ekadashi)',
    inclusions: [
      'Cab pickup & drop from any point in Delhi, Noida, Greater Noida, Gurugram, Faridabad & Ghaziabad (Delhi NCR)',
      '1 Night Hotel stay at Salasar',
      'Full intercity cab transport and highway travel',
      'Dedicated driver with highway expertise and WhatsApp assistance'
    ],
    featured: true,
    itinerary: [
      {
        day: 1,
        title: 'Delhi NCR ➔ Khatu Shyam Ji ➔ Salasar',
        location: 'Delhi NCR to Rajasthan',
        activities: [
          '05:00 AM: Doorstep pickup from any point in Delhi, Noida, Greater Noida, Gurugram, Faridabad or Ghaziabad.',
          'Smooth morning highway drive to Khatu Shyam Ji in Sikar, Rajasthan.',
          'Darshan at the sacred Shri Khatu Shyam Ji Temple; offer floral garlands and seek blessings.',
          'Stroll around the holy temple grounds and Shyam Kund.',
          'Afternoon drive onward to Salasar.',
          'Check in at hotel in Salasar and comfortable night stay.'
        ],
        stay: 'Hotel in Salasar (1 Night Stay Included)',
        mealsIncluded: 'Breakfast en route & dinner options'
      },
      {
        day: 2,
        title: 'Salasar Balaji Darshan ➔ Return to Delhi NCR',
        location: 'Salasar to Delhi NCR',
        activities: [
          'Early morning darshan and Aarti at the renowned Salasar Balaji Temple.',
          'Offer traditional Churma prasad and coconut to Lord Balaji (Hanuman Ji).',
          'Breakfast (at customer’s expense).',
          'Commence comfortable return journey to Delhi NCR.',
          'Drop at your doorstep by approximately 08:00 PM.'
        ],
        stay: 'Return to Delhi NCR',
        mealsIncluded: 'Breakfast (own expense)'
      }
    ]
  }
];

export const CHRONICLES: ChronicleStory[] = [
  {
    id: 'chronicle-kashmir-verma',
    title: '12 Days Across Kashmir & Ladakh: Why We Will Never Plan on 40 Tabs Again',
    travelerNames: 'The Verma Family (Rajesh, Sunita & Ananya)',
    travelerType: 'Family',
    destination: 'Kashmir & Ladakh',
    dateTravelled: 'May 2024',
    packageBookedId: 'pkg-kashmir-paradise',
    packageTitle: 'Kashmir: Saffron Meadows & Alpine Stays',
    quote: 'InfoTripp gave us our vacation back. When Gulmarg Gondola slots were sold out across all portals, Priya from InfoTripp had our Phase II passes confirmed before we even boarded our Delhi flight.',
    fullStory: 'We originally spent 3 weeks drowning in conflicting advice on Reddit and travel vlogs. Travelling with elderly parents and a teenager meant zero room for mistakes. InfoTripp’s specialist Priya created a realistic altitude acclimatization plan for Leh that ensured nobody felt dizzy. The houseboat stay on Nigeen Lake was peaceful beyond words — zero hawkers, just chirping birds and fresh hot kahwa tea.',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80'
    ],
    stayTag: 'Dal Lake Houseboat & Leh Grand Heritage',
    rating: 5
  },
  {
    id: 'chronicle-bali-honeymoon',
    title: 'Floating Breakfasts & Cliff Sunsets: Our Stress-Free Bali Honeymoon',
    travelerNames: 'Karan & Meera Shah',
    travelerType: 'Couple',
    destination: 'Bali & Nusa Penida',
    dateTravelled: 'June 2024',
    packageBookedId: 'pkg-bali-island-romance',
    packageTitle: 'Bali Serenity: Ubud Cascades & Ocean Cliffs',
    quote: 'Our WhatsApp group with Rohan from InfoTripp felt like having a local best friend in our pocket 24/7. When our flight was delayed by 2 hours, our driver Wayan was patiently waiting with cold towels.',
    fullStory: 'Every hotel was vetted down to the specific villa room numbers that had the best morning light. The private catamaran to Nusa Penida meant we beat the tour bus rush to Kelingking cliff by 45 minutes and had the lookout completely to ourselves. The upfront pricing was 100% transparent — not a single unexpected surcharge or forced shopping stop.',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80'
    ],
    stayTag: 'Aksari Ubud Jungle Pool Villa',
    rating: 5
  },
  {
    id: 'chronicle-swiss-rail',
    title: 'Glaciers by Train: A GoldenPass Journey with Zero Logistics Stress',
    travelerNames: 'Devendra & Smita Patel',
    travelerType: 'Couple',
    destination: 'Switzerland',
    dateTravelled: 'September 2024',
    packageBookedId: 'pkg-swiss-alpine-glory',
    packageTitle: 'Swiss Grandeur: Glaciers, Rails & Alpine Lakes',
    quote: 'The 1st class Swiss Travel Pass itinerary provided by Ananya made navigating Zermatt and Jungfraujoch feel effortless. Every connection was planned with relaxed 20-minute buffers.',
    fullStory: 'We had heard Switzerland is notoriously difficult to plan on your own because of mountain connections and rail passes. InfoTripp sent us an elegant digital day sheet with exact platform numbers, recommended car carriages for scenic views, and local cheese spots away from tourist lines. When a sudden track repair popped up near Spiez, Ananya messaged us on WhatsApp 15 minutes before the announcement with an alternate scenic route.',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80'
    ],
    stayTag: 'Zermatt Chalet & Lake Lucerne Suite',
    rating: 5
  },
  {
    id: 'chronicle-rajasthan-grandparents',
    title: 'A Royal Rajputana Heritage Trail for 3 Generations',
    travelerNames: 'Dr. Alok Mukherjee & Family',
    travelerType: 'Family',
    destination: 'Rajasthan',
    dateTravelled: 'November 2024',
    packageBookedId: 'pkg-rajasthan-royalty',
    packageTitle: 'Royal Rajasthan: Forts, Dunes & Havelis',
    quote: 'Vikram from InfoTripp made sure my 78-year-old father never had to climb steep stairs in Mehrangarh or Amber Fort by arranging dedicated battery carts and courteous royal guides.',
    fullStory: 'Travelling with multi-generational family can be overwhelming. InfoTripp’s chauffeur Bhanwar Singh was not just a driver; he was an ambassador of Rajasthani warmth. The haveli stays in Jaipur and Jodhpur made us feel like personal guests of royalty rather than commercial hotel tourists.',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80'
    ],
    stayTag: 'Fateh Garh Palace & Pal Haveli',
    rating: 5
  }
];

export const SPECIALISTS: Specialist[] = [
  {
    id: 'spec-priya',
    name: 'Priya Sharma',
    role: 'Himalayan & North India Specialist',
    experience: '9+ Years in Mountain Itineraries',
    languages: ['Hindi', 'English', 'Kashmiri', 'Punjabi'],
    regionSpecialty: 'Kashmir, Ladakh, Himachal, Spiti Valley',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    quote: 'Mountains demand respect and honest weather guidance. I treat every traveler like family heading into my own homeland.'
  },
  {
    id: 'spec-rohan',
    name: 'Rohan Kapoor',
    role: 'Southeast Asia & Island Escapes Lead',
    experience: '8+ Years in Tropical Curation',
    languages: ['English', 'Hindi', 'Conversational Bahasa'],
    regionSpecialty: 'Bali, Thailand, Vietnam, Maldives, Sri Lanka',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    quote: 'An island getaway should mean slow mornings and secret lookouts, not rushing through 10 temples in the afternoon heat.'
  },
  {
    id: 'spec-ananya',
    name: 'Ananya Sen',
    role: 'European & Luxury Rail Curator',
    experience: '11+ Years in Pan-Europe Travel',
    languages: ['English', 'French', 'Bengali', 'Hindi'],
    regionSpecialty: 'Switzerland, France, Austria, Italy, Iceland',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    quote: 'Europe by rail is pure poetry when every connection, seat reservation, and luggage drop is anticipated seamlessly.'
  },
  {
    id: 'spec-vikram',
    name: 'Vikram Rathore',
    role: 'Rajasthan & Royal Heritage Specialist',
    experience: '12+ Years in Rajputana Trails',
    languages: ['Hindi', 'English', 'Rajasthani / Marwari'],
    regionSpecialty: 'Jaipur, Jodhpur, Udaipur, Jaisalmer, Ranthambore',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    quote: 'Rajasthan is not just palaces; it is the fragrance of ghee roasted bajra, the sound of the sarangi, and genuine desert honor.'
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    travelerName: 'Aditya & Neha Chawla',
    city: 'Mumbai',
    tripType: 'Honeymoon',
    destination: 'Bali & Nusa Penida',
    travelDate: 'October 2024',
    rating: 5,
    stayTag: 'Kamandalu Ubud & Seminyak Suite',
    comment: 'Flawless from touch down to takeoff. Having a dedicated WhatsApp thread with Rohan meant zero anxiety about our private boat transfers. The floating breakfast in Ubud was straight out of a dream!',
    verifiedBooking: true,
    packageTitle: 'Bali Serenity: Ubud Cascades & Ocean Cliffs'
  },
  {
    id: 'rev-2',
    travelerName: 'Sanjay Malhotra',
    city: 'New Delhi',
    tripType: 'Family',
    destination: 'Kashmir Paradise',
    travelDate: 'December 2024',
    rating: 5,
    stayTag: 'Dal Lake Houseboat & Pine Lodge Gulmarg',
    comment: 'Took my elderly parents and two kids to see snow in Gulmarg. Priya arranged heated vehicles, thermals advice, and personal assistance for the Gondola. Not a single hidden cost!',
    verifiedBooking: true,
    packageTitle: 'Kashmir: Saffron Meadows & Alpine Stays'
  },
  {
    id: 'rev-3',
    travelerName: 'Dr. Radhika Iyer',
    city: 'Bengaluru',
    tripType: 'Solo',
    destination: 'Ladakh High Passes',
    travelDate: 'August 2024',
    rating: 5,
    stayTag: 'Pangong Glamping Dome & Leh Boutique',
    comment: 'As a solo female traveler, safety and reliable communication were my #1 priorities. InfoTripp’s driver Tsering was immensely respectful, patient, and knowledgeable. The dome stay at Pangong was magical.',
    verifiedBooking: true,
    packageTitle: 'Ladakh: High Passes & Turquoise Pangong'
  },
  {
    id: 'rev-4',
    travelerName: 'Gaurav & Pooja Bansal',
    city: 'Pune',
    tripType: 'Honeymoon',
    destination: 'Switzerland Alpine Wonderland',
    travelDate: 'September 2024',
    rating: 5,
    stayTag: 'Lucerne Lakeview & Zermatt Chalet',
    comment: 'Every train seat reservation and day route sheet was prepared down to the minute. When our flight out of Zurich was delayed, Ananya extended our airport lounge passes on her own accord. Extraordinary service.',
    verifiedBooking: true,
    packageTitle: 'Swiss Grandeur: Glaciers, Rails & Alpine Lakes'
  },
  {
    id: 'rev-5',
    travelerName: 'The Singhania Group',
    city: 'Kolkata',
    tripType: 'Family',
    destination: 'Royal Rajasthan Heritage',
    travelDate: 'January 2025',
    rating: 5,
    stayTag: 'Mandawa Haveli & Fateh Garh Palace',
    comment: 'A 10-person family trip with cousins and grandparents that went without a single hitch. The private Lake Pichola boat cruise in Udaipur at sunset was the highlight of our year.',
    verifiedBooking: true,
    packageTitle: 'Royal Rajasthan: Forts, Dunes & Havelis'
  },
  {
    id: 'rev-6',
    travelerName: 'Kunal Deshmukh',
    city: 'Hyderabad',
    tripType: 'Offsite',
    destination: 'Kerala Backwaters',
    travelDate: 'November 2024',
    rating: 5,
    stayTag: 'Alleppey Kettuvallam Houseboat',
    comment: 'Booked a leadership retreat for 8 colleagues. The private houseboat in Alleppey and the Munnar tea plantation sessions were serene and rejuvenating. Clear invoicing and GST billing.',
    verifiedBooking: true,
    packageTitle: 'Kerala: Backwater Serenades & Munnar Mist'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs-1',
    title: 'Emergency Rail Strike in the Swiss Alps',
    destination: 'Switzerland (Interlaken to Zermatt)',
    travelers: 'A family of 4 with 6 heavy suitcases',
    situation: 'Sudden regional rail union strike stranded hundreds of travelers at Visp station in sub-zero evening temperatures.',
    challenge: 'Public transit halted with 3-hour waiting queues, and travelers risked missing their non-refundable mountain chalet check-in in Zermatt.',
    howWeSolvedIt: 'Our European lead Ananya dispatched a private Mercedes luxury sprinter van stationed in Bern to intercept the family within 35 minutes, routing them directly through the car-train tunnel to Täsch, where electric golf carts received them for Zermatt check-in.',
    outcome: 'Zero cost charged to the client. Family checked into their chalet with hot fondue waiting by 8:15 PM.',
    quote: 'We were shivering on a foreign platform with crying kids. InfoTripp showed us what true human concierge means.'
  },
  {
    id: 'cs-2',
    title: 'Senior Citizen Wheelchair Palace Access in Rajasthan',
    destination: 'Rajasthan (Jaipur & Jodhpur)',
    travelers: 'Grandparents aged 82 and 79 with their daughter',
    situation: 'Historic Rajput forts feature steep cobblestone inclines and steps that are notoriously inaccessible for elderly travelers.',
    challenge: 'The family wanted the grandparents to experience the splendour of Mehrangarh and Amber Fort without physical strain or injury risk.',
    howWeSolvedIt: 'Specialist Vikram arranged special VIP administrative permits allowing the vehicle to drive up to the innermost palace ramparts, assigned an attendant for motorized wheelchair transfer, and booked private terrace viewing lounges.',
    outcome: 'Grandparents enjoyed every hall of mirrors and royal court without walking more than 50 steps at any point.',
    quote: 'My father had tears in his eyes looking at the sunset over the Blue City. You made his lifelong dream possible.'
  },
  {
    id: 'cs-3',
    title: 'Sudden Tropical Fever & Villa Doctor Dispatch in Bali',
    destination: 'Bali (Ubud)',
    travelers: 'Honeymoon couple on Day 3',
    situation: 'The bride developed a sudden high fever (103°F) and dehydration in their jungle villa late at night.',
    challenge: 'Local medical clinic was 40 minutes away on dark rural roads, and the couple felt distressed in an unfamiliar country.',
    howWeSolvedIt: 'Concierge lead Rohan immediately dispatched InfoTripp’s vetted on-call English-speaking physician directly to their villa with IV fluids, prescribed medication, and arranged a complimentary villa upgrade to a heated master suite for recovery.',
    outcome: 'Fever broke by morning; doctor conducted a complimentary follow-up check that afternoon. Couple was able to enjoy their sunset cruise two days later.',
    quote: 'InfoTripp answered our WhatsApp message within 90 seconds at 1:40 AM. We felt safer with them than anywhere else.'
  }
];

export const DESTINATION_FAQS = [
  {
    question: 'How does Info Tripp differ from regular booking portals like MakeMyTrip or Booking.com?',
    answer: 'Standard portals sell static, automated inventories where you are left on your own when flights get delayed, weather shifts, or hotels fall short. Info Tripp provides human-curated itineraries vetted in person, backed by a dedicated specialist who is available on WhatsApp 24/7 before, during, and after your trip.'
  },
  {
    question: 'Are flight tickets included, or can we book our own flights?',
    answer: 'All our packages can be booked either with flights (where we manage seat selection, baggage allowance, and airport transfers) or as land-only packages if you wish to use your credit card points or frequent flyer miles. We synchronize your land itinerary to your exact flight schedule.'
  },
  {
    question: 'How flexible is the itinerary? Can we modify hotels or add extra days?',
    answer: '100% flexible. Every package listed is a blueprint crafted by our regional specialists. You can upgrade hotel categories (e.g. from heritage haveli to luxury palace), swap sightseeing days, or add relaxation downtime with zero penalty.'
  },
  {
    question: 'What is your payment schedule and cancellation policy?',
    answer: 'We require a modest 25% booking deposit to block vetted properties and chauffeur services. Balance is payable 15 days before departure. We also provide free date-rescheduling guidance if personal emergencies or sudden weather shifts arise.'
  },
  {
    question: 'Do you assist with visas for international destinations like Switzerland, Bali, or Vietnam?',
    answer: 'Yes! Our visa concierge assists with document checklists, cover letters, appointment bookings for Schengen/Europe, and step-by-step eVisa assistance for Bali, Vietnam, and Dubai.'
  }
];

export const TRANSPARENCY_SEALS = [
  {
    id: 'seal-stays',
    title: 'Verified Stays',
    desc: 'Every hotel, boutique haveli, and alpine chalet is physically inspected by our team for hygiene, location safety, and genuine hospitality.',
    icon: 'ShieldCheck'
  },
  {
    id: 'seal-surcharges',
    title: 'Zero Hidden Surcharges',
    desc: 'All mandatory state taxes, toll charges, parking fees, driver night allowances, and park permits are clearly detailed upfront in writing.',
    icon: 'ReceiptCheck'
  },
  {
    id: 'seal-manager',
    title: 'Dedicated Trip Manager',
    desc: 'You deal with 1 single human expert from your first WhatsApp inquiry until you land back home safely. No generic call center tickets.',
    icon: 'UserCheck'
  },
  {
    id: 'seal-dates',
    title: 'Flexible Date Guidance',
    desc: 'Sudden schedule change? We assist with hassle-free date shifting and give honest advance warnings on off-season weather or regional festivals.',
    icon: 'CalendarSync'
  },
  {
    id: 'seal-transport',
    title: 'Sanitized Chauffeur Transport',
    desc: 'Private, clean air-conditioned vehicles with vetted, polite, background-checked chauffeurs who prioritize your safety and comfort.',
    icon: 'Car'
  },
  {
    id: 'seal-sos',
    title: '24/7 WhatsApp SOS Concierge',
    desc: 'Instant 4-minute average response time for on-trip requests, restaurant recommendations, medicine coordination, or emergency rerouting.',
    icon: 'MessageSquareHeart'
  }
];

export const COMPARISON_MATRIX = [
  {
    destination: 'Kashmir',
    bestMonths: 'Mar – Oct & Dec – Feb',
    duration: '6 – 8 Days',
    vibe: 'Romantic, Snowy & Scenic',
    weather: 'Mild Summer / Powdery Winter',
    approxCostINR: '₹32,000 – ₹42,000',
    conciergeTip: 'Book Gulmarg Gondola Phase 2 at least 3 weeks ahead.'
  },
  {
    destination: 'Ladakh',
    bestMonths: 'May – Sep',
    duration: '7 – 9 Days',
    vibe: 'High-Altitude Adventure & Monasteries',
    weather: 'Crisp Alpine, Sunny Days',
    approxCostINR: '₹38,000 – ₹50,000',
    conciergeTip: 'Keep Day 1 completely rest-only in Leh to avoid AMS.'
  },
  {
    destination: 'Rajasthan',
    bestMonths: 'Oct – Mar',
    duration: '7 – 10 Days',
    vibe: 'Royal Heritage, Palaces & Desert',
    weather: 'Pleasant Warm Days, Cool Nights',
    approxCostINR: '₹35,000 – ₹48,000',
    conciergeTip: 'Opt for heritage haveli stays instead of generic modern chains.'
  },
  {
    destination: 'Kerala',
    bestMonths: 'Sep – Apr',
    duration: '6 – 8 Days',
    vibe: 'Serene Backwaters, Ayurveda & Tea',
    weather: 'Lush Tropical Breeze',
    approxCostINR: '₹26,000 – ₹36,000',
    conciergeTip: 'Choose a private Kettuvallam houseboat rather than shared boats.'
  },
  {
    destination: 'Bali & Nusa Islands',
    bestMonths: 'Apr – Oct',
    duration: '7 – 9 Days',
    vibe: 'Tropical Romance, Beach & Culture',
    weather: 'Warm Sunny Ocean Breezes',
    approxCostINR: '₹48,000 – ₹65,000',
    conciergeTip: 'Split stay: 3 nights jungle villa in Ubud + 3 nights beach luxury.'
  },
  {
    destination: 'Switzerland',
    bestMonths: 'May – Oct / Dec – Mar',
    duration: '8 – 11 Days',
    vibe: 'Majestic Alpine Glaciers & Scenic Rail',
    weather: 'Cool Alpine / Snow Wonderland',
    approxCostINR: '₹1,65,000 – ₹2,20,000',
    conciergeTip: 'A 1st Class Swiss Travel Pass saves 3x money on mountain rails.'
  },
  {
    destination: 'Mathura & Vrindavan',
    bestMonths: 'All Year (Jan – Mar & Sep – Nov)',
    duration: '1 Day (From NCR)',
    vibe: 'Sacred Temples & Braj Heritage',
    weather: 'Pleasant Temple Morning & Evening',
    approxCostINR: '₹1,999 / person',
    conciergeTip: 'Depart NCR by 5:30 AM to reach Janmabhoomi before morning queues and stay for Prem Mandir light show.'
  },
  {
    destination: 'Ayodhya Dham',
    bestMonths: 'Oct – Mar',
    duration: '2 Days / 2 Nights',
    vibe: 'Divine Spiritual Awakening & Saryu Aarti',
    weather: 'Cool, serene winter days (14-24°C)',
    approxCostINR: '₹3,500 – ₹5,500',
    conciergeTip: 'Attend the sunset Saryu Ghat Maha Aarti at Ram Ki Paidi for unforgettable tranquility.'
  }
];
