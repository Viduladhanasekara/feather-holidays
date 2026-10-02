/* ==========================================================================
   FEATHER HOLIDAYS - JAVASCRIPT APPLICATION CORE & DATA ENGINE
   ========================================================================== */

// --- OFFICIAL BUSINESS CONTACT DETAILS ---
const OFFICIAL_BUSINESS = {
    address: "256/44, 2nd Lane, New City Gardens, Welivita, Kaduwela.",
    mapsUrl: "https://maps.app.goo.gl/yBsHt4qxQU3aCwgy9",
    facebookUrl: "https://www.facebook.com/share/1DgSZxFTQJ/",
    tiktokUrl: "https://tiktok.com/@featherholidays",
    instaUrl: "https://instagram.com/featherholidays",
    email: "featherholidays@hotmail.com",
    whatsapp: "0769222180",
    phone: "+94769222180"
};

// --- 1. DESTINATIONS MASTER DATABASE ---
const DESTINATIONS_DATA = [
    {
        id: "nine-arch",
        name: "Nine Arch Bridge & Ella",
        category: "cultural",
        mapX: 54, mapY: 65,
        image: "imegers/Nine_Arch_Bridge_night_landscape_202608281224.jpeg",
        shortDesc: "Iconic colonial viaduct bridge amidst mist-capped tea hills in Ella.",
        activities: ["🚂 Demodara Loop Train Trekking", "🥾 Ella Rock Summit Hiking", "🪂 Flying Ravana Mega Ziplining", "☕ Tea Plucking & Factory Tasting"],
        fullDesc: "Located in Ella, the Nine Arch Bridge is one of Sri Lanka's most famous colonial engineering marvels. Spanning 91 meters through dense jungle and emerald tea estates, it is ideal for night photography, scenic train spotting, hiking up Little Adam's Peak, and Flying Ravana ziplining adventure games."
    },
    {
        id: "sigiriya",
        name: "Sigiriya Rock Fortress",
        category: "cultural",
        mapX: 48, mapY: 42,
        image: "imegers/Sigiriya_rock_fortress_at_night_202608281224.jpeg",
        shortDesc: "5th-century royal citadel atop a 200m granite monolith with ancient frescoes.",
        activities: ["🧗 Citadel Summit Rock Climbing", "🖌️ Frescoes & Mirror Wall Walk", "🎈 Sunrise Hot Air Ballooning", "🚴 Traditional Village Cycling Tour"],
        fullDesc: "An awe-inspiring 5th-century royal citadel and UNESCO World Heritage Site built by King Kasyapa atop a 200-meter high sheer granite monolith ('Castle in the Sky'). Features world-famous frescoes of celestial maidens, ancient mirror wall inscriptions, intricate water gardens, and hot air ballooning activities over the jungle canopy."
    },
    {
        id: "nuwara-eliya",
        name: "Nuwara Eliya & Lake Gregory",
        category: "cultural",
        mapX: 52, mapY: 67,
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Gregory_lake_-_Nuwara_Eliya.jpg",
        shortDesc: "Cool mountain retreat (1,885m) featuring scenic Lake Gregory boating & tea estates.",
        activities: ["🚤 Lake Gregory Boating & Jet-Skiing", "☕ High Tea at Colonial Grand Hotel", "⛳ 18-Hole Championship Golf", "🍓 Organic Strawberry Picking"],
        fullDesc: "Nestled at 1,885m altitude under Mount Pidurutalagala, Nuwara Eliya offers a crisp alpine climate. Dubbed 'Little England', it features Lake Gregory water sports, colonial brick mansions, manicured golf courses, and endless tea estates."
    },
    {
        id: "anuradhapura",
        name: "Anuradhapura Ancient Capital",
        category: "cultural",
        mapX: 42, mapY: 28,
        image: "assets/destinations/anuradhapura.jpg",
        shortDesc: "Ancient ruined city dating back to 5th century BC with massive UNESCO stupas.",
        activities: ["🚴 Ancient Ruins Cycling Tour", "🌿 Jaya Sri Maha Bodhi Tree Homage", "🏛️ Ruwanwelisaya Stupa Evening Walk", "💧 Ancient Reservoir Engineering Exploration"],
        fullDesc: "The first ancient kingdom of Sri Lanka, dating back to 5th century BC. Features magnificent white hemispherical dagobas (Ruwanwelisaya), the 2,300-year-old sacred Jaya Sri Maha Bodhi tree, and ancient artificial reservoirs."
    },
    {
        id: "colombo",
        name: "Colombo Commercial Capital",
        category: "cultural",
        mapX: 25, mapY: 66,
        image: "assets/destinations/colombo.jpg",
        shortDesc: "Vibrant capital blending colonial landmarks, Lotus Tower, and ocean views.",
        activities: ["🛺 Open Tuk-Tuk Street Food Tour", "🛍️ High-End Shopping & Arcade Walks", "🌇 Galle Face Green Sunset Kite Flying", "🍸 Rooftop Bar Lounge Experience"],
        fullDesc: "Colombo is a vibrant oceanfront capital blending colonial landmarks, the iconic Lotus Tower, modern skyscrapers, bustling Pettah street markets, street food tastings at Galle Face Green, and luxury shopping."
    },
    {
        id: "dambulla",
        name: "Dambulla Cave Temple",
        category: "cultural",
        mapX: 47, mapY: 45,
        image: "assets/destinations/dambulla.jpg",
        shortDesc: "World's largest painted cave complex with 22,000 sq ft of ancient murals.",
        activities: ["🕉️ Cave Monastery Mural Inspection", "👑 King Valagambahu Refuge History Tour", "🐒 Golden Temple Viewpoint Climbing", "🎨 Ancient Fresco Art Appreciation"],
        fullDesc: "A complex of five natural rock caves filled with ancient statues and murals depicting Lord Buddha and historic kings. Features over 22,000 square feet of rock paintings dating back to the 1st century BC."
    },
    {
        id: "mirissa",
        name: "Mirissa & Southern Coast",
        category: "cultural",
        mapX: 38, mapY: 90,
        image: "assets/destinations/mirissa.jpg",
        shortDesc: "Tropical coastline famous for Blue Whale boat charters & coconut hill views.",
        activities: ["🐋 Blue Whale & Dolphin Boat Safari", "🏄 Beach Break Surfing Lessons", "🥥 Coconut Tree Hill Photography", "🐢 Sea Turtle Lagoon Swimming"],
        fullDesc: "Mirissa is the premier whale-watching destination in Asia. Travelers enjoy early morning ocean boat charters to view Blue Whales, coconut tree hill sunsets, and surfing along crashing coastal waves."
    },
    {
        id: "polonnaruwa",
        name: "Polonnaruwa Ancient Kingdom",
        category: "cultural",
        mapX: 58, mapY: 41,
        image: "assets/destinations/polonnaruwa.jpg",
        shortDesc: "Medieval capital featuring Parakrama Samudra reservoir and Gal Vihara carved statues.",
        activities: ["🗿 Gal Vihara Rock Buddha Statues", "🚴 Royal Citadel Bicycle Exploration", "🏛️ Audience Hall & Quadrangle Walk", "🌊 Parakrama Samudra Sunset Breeze"],
        fullDesc: "The 11th-century medieval capital of Sri Lanka featuring royal palace ruins, quadrangle temples, and the Gal Vihara rock temple with four colossal carved granite Buddha statues."
    },
    {
        id: "trincomalee",
        name: "Trincomalee & Koneswaram Temple",
        category: "cultural",
        mapX: 65, mapY: 28,
        image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Koneswaram_Temple_-_Trincomalee.jpg",
        shortDesc: "Natural deep harbor with white sand beaches & cliffside Koneswaram Hindu Kovil.",
        activities: ["🛕 Koneswaram Temple Cliff Walk", "🏝️ Pigeon Island Coral Snorkeling", "🐋 Whale Watching Charters", "🏖️ Nilaveli White Sand Relaxing"],
        fullDesc: "Trincomalee boasts pristine white sand beaches (Nilaveli), Pigeon Island marine national park for sea turtle snorkeling, and the cliffside Koneswaram Hindu Kovil overlooking the deep harbor."
    },
    {
        id: "sinharaja",
        name: "Sinharaja Tropical Rain Forest",
        category: "wildlife",
        mapX: 40, mapY: 79,
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Sinharaja_rainforest_waterfall.jpg",
        shortDesc: "UNESCO primary tropical rainforest with hidden waterfalls & 90%+ endemic species.",
        activities: ["🥾 Guided Primary Jungle Trekking", "🦜 Endemic Bird Watching Safaris", "💦 Hidden Waterfall Bathing", "🐸 Night Amphibian Expeditions"],
        fullDesc: "A UNESCO World Heritage primary tropical rainforest with over 75-92% endemic tree species, rare bird flocks, purple-faced langurs, and pristine forest waterfalls."
    },
    {
        id: "adams-peak",
        name: "Adam's Peak (Samanala)",
        category: "cultural",
        mapX: 43, mapY: 67,
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Adams_peak.jpg",
        shortDesc: "Sacred 2,243m conical mountain peak featuring a human footprint revered by all faiths.",
        activities: ["🧗 Night Pilgrimage Trekking", "🌅 Sacred Sunrise Shadow Viewing", "🔔 Temple Bell Rites", "🍃 Rain Forest Eco Trails"],
        fullDesc: "Standing at 2,243 meters, Adam's Peak features a sacred footprint depression revered by Buddhists, Hindus, Muslims, and Christians. Hikers ascend thousands of stone steps overnight to witness the famous triangular shadow cast at sunrise."
    },
    {
        id: "kitulgala",
        name: "Kitulgala Adventure Zone",
        category: "wildlife",
        mapX: 36, mapY: 64,
        image: "https://upload.wikimedia.org/wikipedia/commons/1/1c/SL01kitulgala.jpg",
        shortDesc: "Sri Lanka's adrenaline capital for white water rafting on Kelani river & cliff jumps.",
        activities: ["🚣 Grade 3-4 White Water Rafting", "🧗 Waterfall Abseiling & Cliff Jumps", "🚣 Rainforest Kayaking", "🌿 Jungle Trekking"],
        fullDesc: "Located along the Kelani River, Kitulgala is the top thrill-seeker destination in Sri Lanka. Activities include adrenaline-pumping white water rafting, waterfall abseiling, and jungle river kayaking."
    },
    {
        id: "kandy",
        name: "Kandy (Cultural Capital)",
        category: "cultural",
        mapX: 47, mapY: 58,
        image: "assets/destinations/kandy_temple.jpg",
        shortDesc: "The last kingdom of Sri Lanka, home to Sacred Tooth Relic & Kandyan Fire Dancers.",
        activities: ["🔥 Kandyan Fire & Mask Dance Rituals", "🙏 Temple of Sacred Tooth Relic Rituals", "🚶 Royal Botanical Gardens Walk", "🥁 Traditional Drums & Cultural Show"],
        fullDesc: "Known as the cultural capital of Sri Lanka, Kandy is nestled amid protected mountains and the Mahaweli River. It houses the golden-roofed Temple of the Sacred Tooth Relic, hosts the world-renowned Esala Perahera festival, and features traditional Kandyan fire dancing."
    },
    {
        id: "galle",
        name: "Galle Dutch Fort & Lighthouse",
        category: "cultural",
        mapX: 32, mapY: 88,
        image: "imegers/Galle_Fort_Lighthouse_evening_view_202608281224.jpeg",
        shortDesc: "UNESCO World Heritage Dutch Fort with stone ramparts and historic lighthouse.",
        activities: ["🏰 Fort Rampart Sunset Walking", "🏛️ Dutch Colonial Architecture Tour", "💎 Antique & Gem Shopping", "🏏 Cricket Stadium Sunset Views"],
        fullDesc: "Galle is the capital of Sri Lanka's Southern Province. Centered around the UNESCO Dutch Fort built in 1663, it features massive ocean ramparts, the iconic whitewashed lighthouse, cobble-paved alleyways, boutique art galleries, and cricket matches."
    },
    {
        id: "pasikuda",
        name: "Pasikuda Beach Shore",
        category: "cultural",
        mapX: 72, mapY: 44,
        image: "imegers/Campfire_on_Pasikuda_beach_shore_202608281227.jpeg",
        shortDesc: "Shallow turquoise bay famous for beach campfires and coral snorkeling.",
        activities: ["🔥 Night Beach Campfire Gatherings", "🤿 Shallow Coral Snorkeling", "🏄 Windsurfing & Water Skiing", "🐟 Fresh Seafood BBQ Dinners"],
        fullDesc: "Pasikuda boasts one of the safest shallow coral reef bays in the world, allowing travelers to walk out hundreds of meters into crystal-clear ocean waters. Popular activities include nighttime beach campfires, coral diving, and windsurfing."
    },
    {
        id: "yala",
        name: "Yala (Ruhunu) National Park",
        category: "wildlife",
        mapX: 72, mapY: 75,
        image: "assets/yala.jpg",
        shortDesc: "World's highest leopard density park, home to elephants & sloth bears.",
        activities: ["🐆 4x4 Off-Road Leopard Safari", "🐘 Asian Elephant Herd Spotting", "⛺ Luxury Wilderness Eco-Camping", "📷 Wildlife Sunset Photography"],
        fullDesc: "Sri Lanka's premier national park, home to the highest leopard density in the world. Visitors spot the 'Big Four' (Leopard, Asian Elephant, Sloth Bear, Wild Buffalo) across coastal lagoons and dry evergreen forests."
    }
];

// --- 2. INITIAL TOUR PACKAGES DATABASE ---
const INITIAL_PACKAGES = [
    {
        id: "pkg-sl-1",
        category: "Sri Lanka",
        title: "Sigiriya Rock Citadel & Yala Leopard Safari",
        duration: "6 Days / 5 Nights",
        vehicle: "Private AC Tour Car",
        image: "imegers/Sigiriya_rock_fortress_at_night_202608281224.jpeg",
        tag: "🌴 Heritage & Wildlife",
        highlights: [
            "Private AC Tour Car with Personal Chauffeur",
            "Climb 5th Century Sigiriya Rock Citadel at Sunset",
            "Yala National Park 4x4 Off-Road Jeep Safari Included",
            "Boutique 4-Star Resorts with Daily Breakfast & Dinner",
            "Licensed English-speaking Tour Guide Service"
        ]
    },
    {
        id: "pkg-sl-2",
        category: "Sri Lanka",
        title: "Nine Arch Bridge Trekking & Gregory Lake Boating",
        duration: "5 Days / 4 Nights",
        vehicle: "Private AC Tour Car",
        image: "imegers/Nine_Arch_Bridge_night_landscape_202608281224.jpeg",
        tag: "☕ Hill Country & Adventure",
        highlights: [
            "Air-Conditioned Private Vehicle for Smooth Mountain Travel",
            "Demodara Nine Arch Bridge Train Trekking & Photography",
            "Gregory Lake Boating & High Tea at Colonial Grand Hotel",
            "Flying Ravana Zip-Lining Adventure Activity",
            "All Inclusive Meals & Private Chauffeur Services"
        ]
    },
    {
        id: "pkg-sl-3",
        category: "Sri Lanka",
        title: "Anuradhapura White Stupa & Dambulla Cave Sanctuary",
        duration: "5 Days / 4 Nights",
        vehicle: "Private AC Tour Car",
        image: "assets/destinations/anuradhapura.jpg",
        tag: "🏛️ Ancient Kingdoms",
        highlights: [
            "Ruwanwelisaya White Stupa & Ancient Sacred Bodhi Tree Tour",
            "Dambulla Golden Cave Temple Murals & Statues",
            "Private AC Vehicle Transport with Guide",
            "Boutique Hotel Accommodation with Half-Board Dining"
        ]
    },
    {
        id: "pkg-sl-4",
        category: "Sri Lanka",
        title: "Kandyan Fire Dance Rituals & Temple Heritage",
        duration: "4 Days / 3 Nights",
        vehicle: "Private AC Tour Car",
        image: "imegers/Devil_dancer_wearing_mask_202608281223.jpeg",
        tag: "🔥 Culture & Rituals",
        highlights: [
            "Private AC Vehicle Chauffeur Transport",
            "Live Traditional Kandyan Fire & Mask Dance Show",
            "Temple of the Sacred Tooth Relic Guided Ceremony",
            "Royal Botanical Gardens Walk in Peradeniya",
            "Luxury Heritage Hotel Accommodation & Dining"
        ]
    },
    {
        id: "pkg-sl-5",
        category: "Sri Lanka",
        title: "Galle Fort Lighthouse & Pasikuda Beach Campfire",
        duration: "7 Days / 6 Nights",
        vehicle: "Private AC Tour Car",
        image: "imegers/Campfire_on_Pasikuda_beach_shore_202608281227.jpeg",
        tag: "🌊 Coast & Campfire",
        highlights: [
            "Private Air-Conditioned Comfort Vehicle Service",
            "Galle Fort Lighthouse Evening Sunset Walk",
            "Pasikuda Beach Shore Night Campfire Gathering",
            "Mirissa Blue Whale Watching Boat Charter",
            "Beachfront 5-Star Resort Accommodation"
        ]
    },
    {
        id: "pkg-abroad-1",
        category: "Abroad",
        title: "Maldives Luxury Overwater Villa Escape",
        duration: "4 Days / 3 Nights",
        vehicle: "Private Speedboat / Seaplane",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
        tag: "✈️ International Outbound",
        highlights: [
            "Return Direct Flight Booking & Airport Transfers",
            "Luxury 5-Star Overwater Villa Accommodation",
            "All-Inclusive Dining & Sunset Dolphin Cruise",
            "Personalized Feather Holidays Travel Concierge"
        ]
    },
    {
        id: "pkg-abroad-2",
        category: "Abroad",
        title: "Dubai Desert Safari & Burj Khalifa Tour",
        duration: "5 Days / 4 Nights",
        vehicle: "Private AC Transport",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
        tag: "✈️ Luxury Abroad",
        highlights: [
            "Flight + Dubai Visa Assistance",
            "4x4 Dune Bashing Desert Safari with BBQ Dinner",
            "Burj Khalifa At-The-Top Fast Track Entry Ticket",
            "4-Star Luxury City Hotel with Breakfast"
        ]
    },
    {
        id: "pkg-abroad-3",
        category: "Abroad",
        title: "Delhi & Manali Snow Mountain Adventure",
        duration: "5 Days / 4 Nights",
        vehicle: "AC Innova SUV",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
        tag: "🏔️ Basic Package",
        price: "$990",
        priceLabel: "Per Person",
        highlights: [
            "5 Days 4 Nights Full Itinerary",
            "Meal on Half Board (Breakfast & Dinner)",
            "Airport to Hotel Transfer Included",
            "4-Star Accommodation for 3 Pax",
            "Tour by AC Innova SUV with Driver"
        ],
        excludes: [
            "Flight / Train / Ferrari Tickets",
            "Adventure Activity Charges",
            "Monument Entrance Fees",
            "Daily Lunch & Personal Expenses",
            "Luggage Handling Charges"
        ]
    },
    {
        id: "pkg-abroad-4",
        category: "Abroad",
        title: "Rajasthan Royal Heritage Tour — Standard",
        duration: "6 Days / 5 Nights",
        vehicle: "Economy Flight + AC Transport",
        image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80",
        tag: "🏰 Standard Package",
        price: "$790",
        priceLabel: "Per Person",
        highlights: [
            "6 Days 5 Nights Complete Rajasthan Tour",
            "Economy Class Flight Tickets Included",
            "Airport to Hotel Transfer on Arrival",
            "4-Star Accommodation Throughout",
            "Personal Licensed Tour Guide Service",
            "Meals on Half Board (Breakfast & Dinner)"
        ],
        excludes: []
    },
    {
        id: "pkg-abroad-5",
        category: "Abroad",
        title: "Rajasthan Royal Heritage Tour — Luxury",
        duration: "6 Days / 5 Nights",
        vehicle: "Economy Flight + Private Transfers",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
        tag: "🏰 Luxury Package",
        price: "$890",
        priceLabel: "Per Person",
        highlights: [
            "6 Days 5 Nights Premium Rajasthan Experience",
            "Economy Class Flight Tickets Included",
            "Private Transfers Throughout the Tour",
            "Meals on Half Board (Breakfast & Dinner)",
            "5-Star Luxury Hotel Accommodation",
            "Dedicated Personal Tour Guide Service"
        ],
        excludes: []
    }
];

// --- 3. INITIAL VEHICLES FLEET DATABASE ---
const INITIAL_FLEET = [
    {
        id: "veh-suv",
        name: "Premium Air-Conditioned Tour Car",
        category: "Private AC Comfort Car",
        capacity: "3 to 4 Passengers + Chauffeur",
        image: "assets/luxury_suv.jpg",
        specs: "Dual Air Conditioning, Plush Reclining Seats, Quiet Smooth Ride, Spacious Trunk for Luggage, Experienced Local Chauffeur Driver."
    },
    {
        id: "veh-van",
        name: "VIP Luxury Passenger Tour Van",
        category: "VIP Group Transport",
        capacity: "7 to 9 Passengers",
        image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
        specs: "Dual Air Conditioning, Reclining Plush Seats, High Roof, Luggage Space, Tinted Windows, USB Charging Stations."
    },
    {
        id: "veh-jeep",
        name: "4x4 Off-Road Safari Jeep",
        category: "Off-Road Wildlife Safari",
        capacity: "6 Passengers",
        image: "assets/yala.jpg",
        specs: "Raised Open-Top Safari Frame, Heavy Duty 4WD, All-Terrain Suspension for Yala & Udawalawe Parks, Experienced Tracker."
    },
    {
        id: "veh-coach",
        name: "Executive Tour Coach",
        category: "Large Group Luxury Transport",
        capacity: "15 to 25 Passengers",
        image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80",
        specs: "Full Leather Reclining Seats, On-board Entertainment System, Panoramic Sightseeing Windows, Micro-filter AC."
    }
];

// --- 4. INITIAL PROMO MARQUEE FLYERS ---
const INITIAL_PROMO_BANNERS = [
    {
        id: "b-1",
        title: "Nine Arch Bridge & Ella Misty Tour",
        image: "imegers/Nine_Arch_Bridge_night_landscape_202608281224.jpeg",
        tag: "🌉 Scenic Mountain Deal",
        desc: "Book a 5-day tour with private AC vehicle transport & Nine Arch trekking."
    },
    {
        id: "b-2",
        title: "Anuradhapura Stupa & Ancient Kingdom",
        image: "assets/destinations/anuradhapura.jpg",
        tag: "🏛️ Ancient Heritage",
        desc: "Explore Ruwanwelisaya White Stupa & sacred Bodhi Tree."
    },
    {
        id: "b-3",
        title: "Pasikuda Shore Campfire Special",
        image: "imegers/Campfire_on_Pasikuda_beach_shore_202608281227.jpeg",
        tag: "🔥 Beach Campfire Offer",
        desc: "Shallow coral snorkeling, beach campfire BBQ & ocean resort."
    }
];

// --- 5. INITIAL GOOGLE REVIEWS ---
const INITIAL_REVIEWS = [
    {
        id: "rev-1",
        name: "Michael & Clara Vance",
        location: "London, UK",
        stars: 5,
        text: "Feather Holidays provided us with an unbelievable 7-day Sri Lanka tour! Traveling in their clean, air-conditioned private vehicle was so quiet and comfortable. Our guide was incredibly knowledgeable and our Yala leopard safari was unforgettable!"
    },
    {
        id: "rev-2",
        name: "Anura Jayasinghe",
        location: "Melbourne, Australia",
        stars: 5,
        text: "Lankawe inna hodama tour company eka! Everything was handled smoothly from airport pickup in Colombo to Nine Arch Bridge, Nuwara Eliya Lake Gregory and Galle Fort. Hotels were 5-stars and food was excellent!"
    },
    {
        id: "rev-3",
        name: "Sophie Laurent",
        location: "Paris, France",
        stars: 5,
        text: "Sublime trip to Sri Lanka with Feather Holidays. Sigiriya rock fortress at night, Kandyan fire dance shows, and Pasikuda beach campfires were magical. 10/10 service!"
    }
];

// --- 6. INITIAL SITE TEXT CONTENT ---
const INITIAL_SITE_TEXT = {
    heroBadgeText: "",
    heroTitle: "Unfold the Natural Beauty of Sri Lanka",
    heroTagline: "\"Unfold the natural beauty of Sri Lanka with Feather Holidays. Your trusted travel partner for unforgettable island adventures. 🌴🐘🌊\"",
    announcementText: "🌴 Unfold the natural beauty of Sri Lanka with Feather Holidays — Your trusted travel partner! 🌊",
    phone: "0769222180",
    email: "featherholidays@hotmail.com",
    address: "256/44, 2nd Lane, New City Gardens, Welivita, Kaduwela",
    whatsapp: "0769222180",
    mapsUrl: "https://maps.app.goo.gl/yBsHt4qxQU3aCwgy9",
    facebookUrl: "https://www.facebook.com/share/1DgSZxFTQJ/",
    tiktokUrl: "https://tiktok.com/@featherholidays",
    instaUrl: "https://instagram.com/featherholidays"
};

// --- 7. INITIAL PHOTO & VIDEO GALLERY SHOWCASE ---
const INITIAL_GALLERY = [
    {
        id: "gal-1",
        title: "Sigiriya Sunset Rock Fortress Tour",
        type: "image",
        url: "imegers/Sigiriya_rock_fortress_at_night_202608281224.jpeg",
        desc: "Night adventure & sunset climbing at Sigiriya Citadel."
    },
    {
        id: "gal-2",
        title: "Nine Arch Bridge Misty Train Crossing",
        type: "image",
        url: "imegers/Nine_Arch_Bridge_night_landscape_202608281224.jpeg",
        desc: "Colonial engineering viaduct bridge trekking in Ella."
    },
    {
        id: "gal-3",
        title: "Pasikuda Beach Campfire Gathering",
        type: "image",
        url: "imegers/Campfire_on_Pasikuda_beach_shore_202608281227.jpeg",
        desc: "Night campfire BBQ and ocean breeze at Pasikuda."
    },
    {
        id: "gal-4",
        title: "Sri Lanka Tour Highlight Reel",
        type: "video",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        thumbnail: "imegers/Colonial_architecture_in_Nuwara_._202608281224.jpeg",
        desc: "Watch Sri Lanka tour highlights with Feather Holidays."
    }
];

// --- 8. INITIAL HERO BACKGROUND SLIDES ---
const INITIAL_HERO_SLIDES = [
    { id: "slide-1", title: "Temple of Sacred Tooth Relic Kandy", url: "assets/destinations/kandy_temple.jpg" },
    { id: "slide-2", title: "Sigiriya Rock Citadel at Night", url: "imegers/Sigiriya_rock_fortress_at_night_202608281224.jpeg" },
    { id: "slide-3", title: "Nine Arch Bridge Ella", url: "imegers/Nine_Arch_Bridge_night_landscape_202608281224.jpeg" },
    { id: "slide-4", title: "Colonial Nuwara Eliya", url: "imegers/Colonial_architecture_in_Nuwara_._202608281224.jpeg" },
    { id: "slide-5", title: "Galle Fort Lighthouse", url: "imegers/Galle_Fort_Lighthouse_evening_view_202608281224.jpeg" },
    { id: "slide-6", title: "Pasikuda Beach Campfire", url: "imegers/Campfire_on_Pasikuda_beach_shore_202608281227.jpeg" }
];

// --- SECURITY & GLOBAL STATE MANAGEMENT ---
let isAdminAuthenticated = localStorage.getItem('fh_admin_auth') === 'true';

let state = {
    destinations: JSON.parse(localStorage.getItem('fh_destinations')) || DESTINATIONS_DATA,
    packages: JSON.parse(localStorage.getItem('fh_packages')) || INITIAL_PACKAGES,
    fleet: JSON.parse(localStorage.getItem('fh_fleet')) || INITIAL_FLEET,
    banners: JSON.parse(localStorage.getItem('fh_banners')) || INITIAL_PROMO_BANNERS,
    reviews: JSON.parse(localStorage.getItem('fh_reviews')) || INITIAL_REVIEWS,
    inbox: JSON.parse(localStorage.getItem('fh_inbox')) || [],
    siteText: JSON.parse(localStorage.getItem('fh_site_text')) || INITIAL_SITE_TEXT,
    gallery: JSON.parse(localStorage.getItem('fh_gallery')) || INITIAL_GALLERY,
    heroSlides: JSON.parse(localStorage.getItem('fh_hero_slides')) || INITIAL_HERO_SLIDES,
    adminUser: JSON.parse(localStorage.getItem('fh_admin_user')) || null,
    currentUser: JSON.parse(localStorage.getItem('fh_logged_user')) || null,
    usersDb: JSON.parse(localStorage.getItem('fh_users_db')) || []
};

// Snapshot Undo Stack
let undoStack = JSON.parse(localStorage.getItem('fh_undo_stack')) || [];

function saveState(actionDescription = "Admin Edit") {
    // Save previous snapshot state into undo stack
    const snapshot = {
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        action: actionDescription,
        data: JSON.parse(JSON.stringify({
            destinations: state.destinations,
            packages: state.packages,
            fleet: state.fleet,
            banners: state.banners,
            reviews: state.reviews,
            siteText: state.siteText,
            gallery: state.gallery,
            heroSlides: state.heroSlides
        }))
    };

    undoStack.push(snapshot);
    if (undoStack.length > 30) undoStack.shift(); // Max 30 undo steps
    localStorage.setItem('fh_undo_stack', JSON.stringify(undoStack));

    // Save to local storage
    localStorage.setItem('fh_destinations', JSON.stringify(state.destinations));
    localStorage.setItem('fh_packages', JSON.stringify(state.packages));
    localStorage.setItem('fh_fleet', JSON.stringify(state.fleet));
    localStorage.setItem('fh_banners', JSON.stringify(state.banners));
    localStorage.setItem('fh_reviews', JSON.stringify(state.reviews));
    localStorage.setItem('fh_inbox', JSON.stringify(state.inbox));
    localStorage.setItem('fh_site_text', JSON.stringify(state.siteText));
    localStorage.setItem('fh_gallery', JSON.stringify(state.gallery));
    localStorage.setItem('fh_hero_slides', JSON.stringify(state.heroSlides));

    updateAllLiveSiteComponents();
    renderAdminSubtabsAll();
    showToast(`Published Live: ${actionDescription}`, 'success');
}

function undoLastAdminChange() {
    if (!undoStack || undoStack.length <= 1) {
        showToast('No prior edits to undo!', 'warning');
        return;
    }

    undoStack.pop(); // Pop current state
    const previous = undoStack[undoStack.length - 1];

    if (previous && previous.data) {
        state.destinations = previous.data.destinations || DESTINATIONS_DATA;
        state.packages = previous.data.packages || INITIAL_PACKAGES;
        state.fleet = previous.data.fleet || INITIAL_FLEET;
        state.banners = previous.data.banners || INITIAL_PROMO_BANNERS;
        state.reviews = previous.data.reviews || INITIAL_REVIEWS;
        state.siteText = previous.data.siteText || INITIAL_SITE_TEXT;
        state.gallery = previous.data.gallery || INITIAL_GALLERY;
        state.heroSlides = previous.data.heroSlides || INITIAL_HERO_SLIDES;

        localStorage.setItem('fh_undo_stack', JSON.stringify(undoStack));
        localStorage.setItem('fh_destinations', JSON.stringify(state.destinations));
        localStorage.setItem('fh_packages', JSON.stringify(state.packages));
        localStorage.setItem('fh_fleet', JSON.stringify(state.fleet));
        localStorage.setItem('fh_banners', JSON.stringify(state.banners));
        localStorage.setItem('fh_reviews', JSON.stringify(state.reviews));
        localStorage.setItem('fh_site_text', JSON.stringify(state.siteText));
        localStorage.setItem('fh_gallery', JSON.stringify(state.gallery));
        localStorage.setItem('fh_hero_slides', JSON.stringify(state.heroSlides));

        updateAllLiveSiteComponents();
        renderAdminSubtabsAll();
        showToast(`Undone! Restored snapshot: ${previous.action}`, 'info');
    }
}

function openRevisionHistoryModal() {
    const listEl = document.getElementById('revisionHistoryList');
    if (!listEl) return;

    if (!undoStack || undoStack.length === 0) {
        listEl.innerHTML = '<p style="color: var(--text-muted); text-align: center;">No history snapshots recorded yet.</p>';
    } else {
        let html = '';
        [...undoStack].reverse().forEach((item, index) => {
            const actualIdx = undoStack.length - 1 - index;
            html += `
                <div class="timeline-item">
                    <div class="timeline-item-info">
                        <strong>${item.action}</strong>
                        <span>Recorded at ${item.timestamp}</span>
                    </div>
                    <button class="btn-outline-3d" onclick="restoreRevisionSnapshot(${actualIdx})">
                        <i data-lucide="rotate-ccw"></i> Restore This State
                    </button>
                </div>
            `;
        });
        listEl.innerHTML = html;
        if (window.lucide) lucide.createIcons();
    }

    document.getElementById('revisionHistoryModal').classList.add('active');
}

function closeRevisionHistoryModal() {
    document.getElementById('revisionHistoryModal').classList.remove('active');
}

function restoreRevisionSnapshot(idx) {
    const target = undoStack[idx];
    if (target && target.data) {
        state.destinations = target.data.destinations || DESTINATIONS_DATA;
        state.packages = target.data.packages || INITIAL_PACKAGES;
        state.fleet = target.data.fleet || INITIAL_FLEET;
        state.banners = target.data.banners || INITIAL_PROMO_BANNERS;
        state.reviews = target.data.reviews || INITIAL_REVIEWS;
        state.siteText = target.data.siteText || INITIAL_SITE_TEXT;
        state.gallery = target.data.gallery || INITIAL_GALLERY;
        state.heroSlides = target.data.heroSlides || INITIAL_HERO_SLIDES;

        undoStack = undoStack.slice(0, idx + 1);
        localStorage.setItem('fh_undo_stack', JSON.stringify(undoStack));

        saveState(`Restored to state: ${target.action}`);
        closeRevisionHistoryModal();
    }
}

function resetToDefaultData() {
    if (confirm('Are you sure you want to reset all website content and data to original factory defaults? This will erase all custom edits.')) {
        state.destinations = DESTINATIONS_DATA;
        state.packages = INITIAL_PACKAGES;
        state.fleet = INITIAL_FLEET;
        state.banners = INITIAL_PROMO_BANNERS;
        state.reviews = INITIAL_REVIEWS;
        state.siteText = INITIAL_SITE_TEXT;
        state.gallery = INITIAL_GALLERY;
        state.heroSlides = INITIAL_HERO_SLIDES;
        undoStack = [];

        localStorage.clear();
        if (isAdminAuthenticated) localStorage.setItem('fh_admin_auth', 'true');

        saveState('Reset all data to defaults');
        showToast('Website reset to default settings!', 'warning');
    }
}

// --- DOM INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    init3dCanvas();
    initBgSlideshow();
    updateAllLiveSiteComponents();
    updateInboxCount();
    initSortableBannerBuilder();
    renderUserProfileHeader();
    autofillBookingFormWithUser();

    // Close user dropdown when clicking outside
    document.addEventListener('click', (e) => {
        const menu = document.getElementById('userProfileDropdown');
        const btn = e.target.closest('.user-profile-pill-btn');
        if (menu && !btn && !menu.contains(e.target)) {
            menu.classList.remove('active');
        }
    });

    if (window.lucide) {
        lucide.createIcons();
    }
});

function updateAllLiveSiteComponents() {
    updateSiteTextElements();
    renderHeroSlideshow();
    renderPromoBannerCarousel();
    renderHomePromos();
    renderHomeDestinationsTeaser();
    renderHomePackages('Sri Lanka');
    renderHomeReviewPreview();
    renderDestinationsMapPins();
    renderDestinationsList(state.destinations);
    renderDestinationsFullGrid();
    renderPackagesGrid('slToursGrid', 'Sri Lanka');
    renderPackagesGrid('abroadToursGrid', 'Abroad');
    renderFleetGrid();
    renderReviewsFeed();
    renderMediaGallerySection();
    renderUserProfileHeader();
}

// --- DYNAMIC LIVE SITE TEXT UPDATE ENGINE ---
function updateSiteTextElements() {
    const t = state.siteText || INITIAL_SITE_TEXT;

    // Hero Badge Text
    const heroBadgeTextEl = document.getElementById('siteHeroBadgeText');
    if (heroBadgeTextEl) {
        heroBadgeTextEl.innerText = t.heroBadgeText !== undefined ? t.heroBadgeText : "";
    }
    const heroBadgeEl = document.getElementById('siteHeroBadge');
    if (heroBadgeEl) {
        heroBadgeEl.style.display = (!t.heroBadgeText || t.heroBadgeText === "") ? 'none' : 'inline-flex';
    }

    // Hero Title & Tagline
    const heroTitleEl = document.querySelector('.hero-title');
    if (heroTitleEl) {
        heroTitleEl.innerHTML = `${t.heroTitle.replace(/Sri Lanka/g, '<span class="gradient-text">Sri Lanka</span>')}`;
    }

    const heroTaglineEl = document.querySelector('.hero-tagline');
    if (heroTaglineEl) heroTaglineEl.innerText = t.heroTagline;

    // Announcement Bar Text
    const annTextEl = document.querySelector('.announcement-content span:first-child');
    if (annTextEl) annTextEl.innerText = t.announcementText;

    // Phone / WhatsApp links
    document.querySelectorAll('.contact-quick strong').forEach(el => {
        if (el.innerText.includes('076') || el.innerText.includes('+94')) {
            el.innerText = t.phone;
        }
    });

    // Email links
    document.querySelectorAll('a[href^="mailto:"], .email-pill').forEach(el => {
        el.href = `mailto:${t.email}`;
    });

    // Address & Maps links
    document.querySelectorAll('.announcement-map-link, .official-info-pill.maps-pill, .footer-contact p:first-child a').forEach(el => {
        if (t.mapsUrl) el.href = t.mapsUrl;
    });

    // Facebook links
    document.querySelectorAll('a.fb-pill, a.fb-icon').forEach(el => {
        if (t.facebookUrl) el.href = t.facebookUrl;
    });

    // TikTok links
    document.querySelectorAll('a.tiktok-pill, a.tiktok-icon').forEach(el => {
        if (t.tiktokUrl) el.href = t.tiktokUrl;
    });

    // Instagram links
    document.querySelectorAll('a.insta-pill, a.insta-icon').forEach(el => {
        if (t.instaUrl) el.href = t.instaUrl;
    });

    // Populate inputs in admin site content subtab
    const inHeroBadge = document.getElementById('adminSiteHeroBadgeText');
    if (inHeroBadge) inHeroBadge.value = t.heroBadgeText !== undefined ? t.heroBadgeText : "";

    const inHeroTitle = document.getElementById('adminSiteHeroTitle');
    if (inHeroTitle) inHeroTitle.value = t.heroTitle;

    const inAnnouncement = document.getElementById('adminSiteAnnouncement');
    if (inAnnouncement) inAnnouncement.value = t.announcementText;

    const inTagline = document.getElementById('adminSiteHeroTagline');
    if (inTagline) inTagline.value = t.heroTagline;

    const inPhone = document.getElementById('adminSitePhone');
    if (inPhone) inPhone.value = t.phone;

    const inEmail = document.getElementById('adminSiteEmail');
    if (inEmail) inEmail.value = t.email;

    const inAddress = document.getElementById('adminSiteAddress');
    if (inAddress) inAddress.value = t.address;

    const inMaps = document.getElementById('adminSiteMapsUrl');
    if (inMaps) inMaps.value = t.mapsUrl;

    const inFb = document.getElementById('adminSiteFbUrl');
    if (inFb) inFb.value = t.facebookUrl || OFFICIAL_BUSINESS.facebookUrl;

    const inTikTok = document.getElementById('adminSiteTikTokUrl');
    if (inTikTok) inTikTok.value = t.tiktokUrl || OFFICIAL_BUSINESS.tiktokUrl;

    const inInsta = document.getElementById('adminSiteInstaUrl');
    if (inInsta) inInsta.value = t.instaUrl || OFFICIAL_BUSINESS.instaUrl;

    // User display name in admin toolbar
    const uNameEl = document.getElementById('adminUserDisplayName');
    if (uNameEl) {
        uNameEl.innerText = state.adminUser ? state.adminUser.name : 'Feather.holiday';
    }
}

// --- BACKGROUND SLIDESHOW ROTATOR ---
function initBgSlideshow() {
    renderHeroSlideshow();
    const slides = document.querySelectorAll('.bg-slide');
    if (!slides || slides.length === 0) return;

    let current = 0;
    setInterval(() => {
        const activeSlides = document.querySelectorAll('.bg-slide');
        if (!activeSlides || activeSlides.length === 0) return;
        activeSlides[current].classList.remove('active');
        current = (current + 1) % activeSlides.length;
        activeSlides[current].classList.add('active');
    }, 6000);
}

function renderHeroSlideshow() {
    const container = document.querySelector('.hero-bg-slideshow');
    if (!container) return;

    let html = '';
    (state.heroSlides || INITIAL_HERO_SLIDES).forEach((s, idx) => {
        html += `<div class="bg-slide ${idx === 0 ? 'active' : ''}" style="background-image: url('${s.url}');"></div>`;
    });
    container.innerHTML = html;
}

// --- THREE.JS 3D CANVAS BACKGROUND EFFECTS ---
function init3dCanvas() {
    const canvas = document.getElementById('bg3dCanvas');
    if (!canvas || !window.Three) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const particlesCount = 350;
    const posArray = new Float32Array(particlesCount * 3);
    const colorsArray = new Float32Array(particlesCount * 3);

    const emeraldColor = new THREE.Color(0x00e699);
    const whiteColor = new THREE.Color(0xffffff);
    const cyanColor = new THREE.Color(0x00b4d8);

    for (let i = 0; i < particlesCount * 3; i += 3) {
        posArray[i] = (Math.random() - 0.5) * 15;
        posArray[i + 1] = (Math.random() - 0.5) * 15;
        posArray[i + 2] = (Math.random() - 0.5) * 15;

        const rand = Math.random();
        let c = rand > 0.6 ? emeraldColor : rand > 0.3 ? whiteColor : cyanColor;
        colorsArray[i] = c.r;
        colorsArray[i + 1] = c.g;
        colorsArray[i + 2] = c.b;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.04,
        vertexColors: true,
        transparent: true,
        opacity: 0.65,
        blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    camera.position.z = 5;

    let mouseX = 0, mouseY = 0;
    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 0.5;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 0.5;
    });

    function animate() {
        requestAnimationFrame(animate);
        particlesMesh.rotation.y += 0.0015;
        particlesMesh.rotation.x += 0.0008;

        particlesMesh.rotation.y += (mouseX - particlesMesh.rotation.y) * 0.02;
        particlesMesh.rotation.x += (-mouseY - particlesMesh.rotation.x) * 0.02;

        renderer.render(scene, camera);
    }

    animate();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

// --- SECURE TAB NAVIGATION ---
function switchTab(tabId) {
    if (tabId === 'admin') {
        if (!isAdminAuthenticated) {
            openAdminLoginModal();
            return; // STRICT LOCK: Cannot open Admin Portal without authentication!
        }
    }

    document.querySelectorAll('.page-tab').forEach(tab => {
        tab.classList.remove('active');
    });

    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-tab') === tabId) {
            btn.classList.add('active');
        }
    });

    const targetTab = document.getElementById(`tab-${tabId}`);
    if (targetTab) {
        targetTab.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    closeMobileNav();

    if (tabId === 'admin') {
        renderAdminSubtabsAll();
    }

    if (window.lucide) lucide.createIcons();
}

// --- ADMIN AUTHENTICATION HANDLERS ---
function openAdminLoginModal() {
    const modal = document.getElementById('adminLoginModal');
    const uInput = document.getElementById('adminUsernameInput');
    const pInput = document.getElementById('adminPasswordInput');
    const errorDiv = document.getElementById('adminLoginError');

    if (uInput) uInput.value = '';
    if (pInput) pInput.value = '';
    if (errorDiv) errorDiv.style.display = 'none';

    if (modal) modal.classList.add('active');
}

function closeAdminLoginModal() {
    const modal = document.getElementById('adminLoginModal');
    if (modal) modal.classList.remove('active');
}

function togglePasswordVisibility() {
    const pwdInput = document.getElementById('adminPasswordInput');
    const eyeIcon = document.getElementById('eyeIcon');
    if (pwdInput.type === 'password') {
        pwdInput.type = 'text';
        if (eyeIcon) eyeIcon.setAttribute('data-lucide', 'eye-off');
    } else {
        pwdInput.type = 'password';
        if (eyeIcon) eyeIcon.setAttribute('data-lucide', 'eye');
    }
    if (window.lucide) lucide.createIcons();
}

function handleAdminLoginSubmit(e) {
    e.preventDefault();
    const usernameInput = document.getElementById('adminUsernameInput').value;
    const passwordInput = document.getElementById('adminPasswordInput').value;
    const errorDiv = document.getElementById('adminLoginError');

    const cleanU = usernameInput.trim().toLowerCase();

    // Check credential requirements: Username "Feather.holiday" or "admin", Password "Admin@123" or "admin123"
    if ((cleanU === 'feather.holiday' || cleanU === 'feather. holiday' || cleanU === 'admin') && 
        (passwordInput === 'Admin@123' || passwordInput === 'admin123')) {
        isAdminAuthenticated = true;
        state.adminUser = { name: "Feather.holiday", email: "featherholidays@hotmail.com", method: "Username/Password" };
        localStorage.setItem('fh_admin_auth', 'true');
        localStorage.setItem('fh_admin_user', JSON.stringify(state.adminUser));

        closeAdminLoginModal();
        switchTab('admin');
        showToast('Welcome, Feather.holiday! Admin access granted.', 'success');
        if (errorDiv) errorDiv.style.display = 'none';
    } else {
        if (errorDiv) {
            errorDiv.innerHTML = '<i data-lucide="shield-alert"></i> <strong>WARNING: Access Denied!</strong> Incorrect Admin Username or Password. Authorized personnel only!';
            errorDiv.style.display = 'block';
            if (window.lucide) lucide.createIcons();
        }
    }
}

function adminLogout() {
    isAdminAuthenticated = false;
    state.adminUser = null;
    localStorage.removeItem('fh_admin_auth');
    localStorage.removeItem('fh_admin_user');

    switchTab('home');
    showToast('Logged out of Admin Portal.', 'info');
}

// --- NORMAL USER AUTHENTICATION & PROFILE SYSTEM ENGINE ---
function renderUserProfileHeader() {
    const container = document.getElementById('userProfileHeaderArea');
    if (!container) return;

    if (state.currentUser) {
        const user = state.currentUser;
        const initial = user.name ? user.name.charAt(0).toUpperCase() : 'U';
        const avatarHtml = user.avatar 
            ? `<img src="${user.avatar}" alt="${user.name}" class="user-nav-avatar-img">`
            : `<span class="user-nav-avatar-initial">${initial}</span>`;

        container.innerHTML = `
            <div class="user-profile-menu-wrap">
                <button class="user-profile-pill-btn" onclick="toggleUserProfileDropdown(event)">
                    ${avatarHtml}
                    <span class="user-nav-name">${user.name.split(' ')[0]}</span>
                    <i data-lucide="chevron-down" style="width: 14px; height: 14px;"></i>
                </button>
                <div id="userProfileDropdown" class="user-profile-dropdown-menu">
                    <div class="dropdown-header-user">
                        <strong>${user.name}</strong>
                        <span>${user.email}</span>
                        <span class="user-badge-tag">${user.provider || 'Verified User'}</span>
                    </div>
                    <hr class="dropdown-divider">
                    <button class="dropdown-item-btn" onclick="openMyBookingsModal()">
                        <i data-lucide="calendar"></i> My Tour Inquiries
                    </button>
                    <button class="dropdown-item-btn" onclick="switchTab('booking')">
                        <i data-lucide="plus-circle"></i> New Tour Booking
                    </button>
                    <hr class="dropdown-divider">
                    <button class="dropdown-item-btn danger-item" onclick="userLogout()">
                        <i data-lucide="log-out"></i> Sign Out
                    </button>
                </div>
            </div>
        `;
    } else {
        container.innerHTML = `
            <button class="btn-outline-3d" onclick="openUserAuthModal('login')">
                <i data-lucide="user"></i> Login / Register
            </button>
        `;
    }
    if (window.lucide) lucide.createIcons();
}

function toggleUserProfileDropdown(e) {
    if (e) e.stopPropagation();
    const dropdown = document.getElementById('userProfileDropdown');
    if (dropdown) dropdown.classList.toggle('active');
}

function openUserAuthModal(tabName = 'login') {
    const modal = document.getElementById('userAuthModal');
    const errorDiv = document.getElementById('userAuthError');
    if (errorDiv) errorDiv.style.display = 'none';

    if (modal) modal.classList.add('active');
    switchAuthTab(tabName);
}

function closeUserAuthModal() {
    const modal = document.getElementById('userAuthModal');
    if (modal) modal.classList.remove('active');
}

function switchAuthTab(tabName) {
    const tabs = ['login', 'register', 'forgot'];
    tabs.forEach(t => {
        const btn = document.getElementById(`tabBtn${t.charAt(0).toUpperCase() + t.slice(1)}`);
        const content = document.getElementById(`authTabContent${t.charAt(0).toUpperCase() + t.slice(1)}`);

        if (btn) btn.classList.toggle('active', t === tabName);
        if (content) content.classList.toggle('active', t === tabName);
    });

    const errorDiv = document.getElementById('userAuthError');
    if (errorDiv) errorDiv.style.display = 'none';
    if (window.lucide) lucide.createIcons();
}

function toggleUserPasswordVisibility(inputId, eyeIconId) {
    const pwdInput = document.getElementById(inputId);
    const eyeIcon = document.getElementById(eyeIconId);
    if (!pwdInput) return;

    if (pwdInput.type === 'password') {
        pwdInput.type = 'text';
        if (eyeIcon) eyeIcon.setAttribute('data-lucide', 'eye-off');
    } else {
        pwdInput.type = 'password';
        if (eyeIcon) eyeIcon.setAttribute('data-lucide', 'eye');
    }
    if (window.lucide) lucide.createIcons();
}

function handleGoogleUserLogin() {
    const googleUser = {
        id: `usr-google-${Date.now()}`,
        name: "Google Traveler User",
        email: "traveler.google@gmail.com",
        username: "google_traveler",
        provider: "Google OAuth",
        avatar: "https://lh3.googleusercontent.com/a/default-user=s96-c"
    };

    state.currentUser = googleUser;
    localStorage.setItem('fh_logged_user', JSON.stringify(googleUser));

    closeUserAuthModal();
    renderUserProfileHeader();
    autofillBookingFormWithUser();
    showToast('Signed in via Google Account successfully!', 'success');
}

function handleUserLoginSubmit(e) {
    e.preventDefault();
    const identifier = document.getElementById('userLoginIdentifier').value.trim().toLowerCase();
    const password = document.getElementById('userLoginPassword').value;
    const errorDiv = document.getElementById('userAuthError');

    // Check stored user database or default account
    let user = (state.usersDb || []).find(u => 
        (u.email.toLowerCase() === identifier || u.username.toLowerCase() === identifier) && u.password === password
    );

    // Fallback default test account if empty database
    if (!user && (identifier === 'user@gmail.com' || identifier === 'user') && password === 'user123') {
        user = {
            id: 'usr-default',
            name: 'Demo Traveler',
            email: 'user@gmail.com',
            username: 'user',
            password: 'user123',
            provider: 'Email'
        };
    }

    if (user) {
        state.currentUser = user;
        localStorage.setItem('fh_logged_user', JSON.stringify(user));

        closeUserAuthModal();
        renderUserProfileHeader();
        autofillBookingFormWithUser();
        showToast(`Welcome back, ${user.name}!`, 'success');
        if (errorDiv) errorDiv.style.display = 'none';
    } else {
        if (errorDiv) {
            errorDiv.innerHTML = '<i data-lucide="alert-triangle"></i> <strong>Invalid Credentials!</strong> Username/Email or Password is incorrect. Click "Forgot Password?" to reset.';
            errorDiv.style.display = 'block';
            if (window.lucide) lucide.createIcons();
        }
    }
}

function handleUserRegisterSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('regFullName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const username = document.getElementById('regUsername').value.trim();
    const password = document.getElementById('regPassword').value;
    const errorDiv = document.getElementById('userAuthError');

    if (password.length < 4) {
        if (errorDiv) {
            errorDiv.innerHTML = '<i data-lucide="alert-triangle"></i> Password must be at least 4 characters long.';
            errorDiv.style.display = 'block';
        }
        return;
    }

    const newUser = {
        id: `usr-${Date.now()}`,
        name,
        email,
        username,
        password,
        provider: 'Email Account'
    };

    if (!state.usersDb) state.usersDb = [];
    state.usersDb.push(newUser);
    localStorage.setItem('fh_users_db', JSON.stringify(state.usersDb));

    state.currentUser = newUser;
    localStorage.setItem('fh_logged_user', JSON.stringify(newUser));

    closeUserAuthModal();
    renderUserProfileHeader();
    autofillBookingFormWithUser();
    showToast(`Account created successfully! Welcome, ${name}.`, 'success');
}

function sendVerificationCode() {
    const email = document.getElementById('forgotEmailInput').value;
    if (!email) {
        alert('Please enter your registered email address first.');
        return;
    }
    const msgEl = document.getElementById('resetCodeMsg');
    if (msgEl) {
        msgEl.innerHTML = `✅ Reset verification code dispatched to <strong>${email}</strong>! Use test code: <strong>849201</strong>`;
    }
    showToast(`Verification code sent to ${email}`, 'info');
}

function handleUserResetPasswordSubmit(e) {
    e.preventDefault();
    const email = document.getElementById('forgotEmailInput').value.trim().toLowerCase();
    const code = document.getElementById('forgotCodeInput').value.trim();
    const newPassword = document.getElementById('forgotNewPassword').value;
    const errorDiv = document.getElementById('userAuthError');

    if (code !== '849201' && code !== '123456') {
        if (errorDiv) {
            errorDiv.innerHTML = '<i data-lucide="alert-triangle"></i> Invalid reset verification code! Use test code `849201`.';
            errorDiv.style.display = 'block';
            if (window.lucide) lucide.createIcons();
        }
        return;
    }

    if (!state.usersDb) state.usersDb = [];
    let user = state.usersDb.find(u => u.email.toLowerCase() === email);

    if (user) {
        user.password = newPassword;
    } else {
        user = {
            id: `usr-${Date.now()}`,
            name: email.split('@')[0],
            email: email,
            username: email.split('@')[0],
            password: newPassword,
            provider: 'Password Reset'
        };
        state.usersDb.push(user);
    }
    localStorage.setItem('fh_users_db', JSON.stringify(state.usersDb));

    state.currentUser = user;
    localStorage.setItem('fh_logged_user', JSON.stringify(user));

    closeUserAuthModal();
    renderUserProfileHeader();
    autofillBookingFormWithUser();
    showToast('Password reset successfully! Account updated & signed in.', 'success');
}

function userLogout() {
    state.currentUser = null;
    localStorage.removeItem('fh_logged_user');
    renderUserProfileHeader();
    showToast('Signed out of customer account.', 'info');
}

function autofillBookingFormWithUser() {
    if (!state.currentUser) return;

    const nameInput = document.getElementById('custName');
    const emailInput = document.getElementById('custEmail');

    if (nameInput && (!nameInput.value || nameInput.value.includes('John'))) {
        nameInput.value = state.currentUser.name;
    }
    if (emailInput) {
        emailInput.value = state.currentUser.email;
    }
}

function openMyBookingsModal() {
    if (!state.currentUser) {
        openUserAuthModal('login');
        return;
    }

    const modal = document.getElementById('myBookingsModal');
    const listContainer = document.getElementById('myBookingsList');
    if (!listContainer) return;

    const userEmail = state.currentUser.email.toLowerCase();
    const myLeads = state.inbox.filter(item => item.email && item.email.toLowerCase() === userEmail);

    if (myLeads.length === 0) {
        listContainer.innerHTML = `
            <div style="text-align: center; padding: 30px; color: var(--text-muted);">
                <i data-lucide="calendar-x" style="font-size: 2.5rem; margin-bottom: 8px;"></i>
                <p>No submitted tour inquiries found for ${state.currentUser.email}.</p>
                <button class="btn-primary-3d margin-top" onclick="closeMyBookingsModal(); switchTab('booking');">
                    <i data-lucide="plus"></i> Inquire New Tour Package
                </button>
            </div>
        `;
    } else {
        let html = '';
        myLeads.forEach(item => {
            const isReplied = item.status === 'Replied';
            html += `
                <div class="inbox-item-card card-3d" style="margin-bottom: 14px;">
                    <div class="inbox-item-details">
                        <h4>${item.tourType} <span class="badge ${isReplied ? 'badge-success' : ''}">${item.status}</span></h4>
                        <div class="inbox-item-meta">
                            <span><i data-lucide="mail"></i> Email: ${item.email}</span>
                            <span><i data-lucide="phone"></i> WhatsApp: ${item.phone}</span>
                            <span><i data-lucide="car"></i> Vehicle: ${item.vehicle}</span>
                            <span><i data-lucide="calendar"></i> Date: ${item.startDate || 'Flex'}</span>
                        </div>
                        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 6px;"><strong>Destinations:</strong> ${item.destinations || 'Custom'}</p>
                        ${item.replyText ? `<div style="background: rgba(0,230,153,0.1); border-left: 3px solid var(--accent-emerald); padding: 8px 12px; margin-top: 10px; border-radius: 4px;"><strong>Feather Holidays Direct Reply:</strong><p style="font-size:0.85rem; color:#fff;">${item.replyText}</p></div>` : ''}
                        <span style="font-size: 0.7rem; color: var(--text-muted); display: block; margin-top: 8px;">Submitted: ${item.dateSubmitted}</span>
                    </div>
                </div>
            `;
        });
        listContainer.innerHTML = html;
    }

    if (modal) modal.classList.add('active');
    if (window.lucide) lucide.createIcons();
}

function closeMyBookingsModal() {
    const modal = document.getElementById('myBookingsModal');
    if (modal) modal.classList.remove('active');
}

// --- DUAL MEDIA DEVICE FILE & GALLERY SELECTOR HANDLER ---
function handleFileSelect(event, inputId, previewId) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        const result = e.target.result;
        const inputEl = document.getElementById(inputId);
        if (inputEl) {
            inputEl.value = result;
        }

        if (previewId) {
            const previewEl = document.getElementById(previewId);
            if (previewEl) {
                if (file.type.startsWith('video')) {
                    previewEl.innerHTML = `<video src="${result}" controls style="max-height: 120px; border-radius: 8px; margin-top: 8px; border: 1px solid var(--accent-gold);"></video>`;
                } else {
                    previewEl.innerHTML = `<img src="${result}" style="max-height: 120px; border-radius: 8px; margin-top: 8px; border: 1px solid var(--accent-gold); object-fit: cover;">`;
                }
            }
        }
        showToast(`Media file "${file.name}" loaded from device gallery!`, 'success');
    };
    reader.readAsDataURL(file);
}

// --- AUTO-PLAYING PROMOTIONAL BANNER CAROUSEL ENGINE ---
let currentPromoSlideIndex = 0;
let promoCarouselTimer = null;

function renderPromoBannerCarousel() {
    const track = document.getElementById('promoCarouselTrack');
    const dotsContainer = document.getElementById('promoCarouselDots');
    if (!track) return;

    const list = state.banners && state.banners.length > 0 ? state.banners : INITIAL_PROMO_BANNERS;

    let slidesHtml = '';
    let dotsHtml = '';

    list.forEach((b, index) => {
        const tagText = b.tag || '🔥 SPECIAL TOUR OFFER';
        slidesHtml += `
            <div class="promo-slide-item">
                <div class="promo-offer-circle">
                    <span>DEAL</span>
                    <strong>${b.tag ? (b.tag.match(/[0-9]+%/) || ['SPECIAL'])[0] : 'OFFER'}</strong>
                </div>
                <div class="promo-slide-content">
                    <span class="promo-badge-tag"><i data-lucide="sparkles"></i> ${tagText}</span>
                    <h2>${b.title}</h2>
                    <p>${b.desc || 'Explore Sri Lanka with Feather Holidays. All-inclusive private AC vehicle transport, 5-star hotels & dedicated local guides.'}</p>
                    <button class="btn-primary-3d" onclick="selectPromoBanner('${b.title.replace(/'/g, "\\'")}')">
                        <i data-lucide="calendar"></i> Book Package Deal Now
                    </button>
                </div>
                <div class="promo-slide-img-box">
                    <img src="${b.image}" alt="${b.title}">
                </div>
            </div>
        `;

        dotsHtml += `<div class="promo-dot ${index === currentPromoSlideIndex ? 'active' : ''}" onclick="goToPromoSlide(${index})"></div>`;
    });

    track.innerHTML = slidesHtml;
    if (dotsContainer) dotsContainer.innerHTML = dotsHtml;
    if (window.lucide) lucide.createIcons();

    updatePromoSlidePosition();
    startPromoCarouselAutoplay();
}

function startPromoCarouselAutoplay() {
    if (promoCarouselTimer) clearInterval(promoCarouselTimer);
    promoCarouselTimer = setInterval(() => {
        nextPromoSlide();
    }, 4500);
}

function nextPromoSlide() {
    const list = state.banners && state.banners.length > 0 ? state.banners : INITIAL_PROMO_BANNERS;
    currentPromoSlideIndex = (currentPromoSlideIndex + 1) % list.length;
    updatePromoSlidePosition();
}

function prevPromoSlide() {
    const list = state.banners && state.banners.length > 0 ? state.banners : INITIAL_PROMO_BANNERS;
    currentPromoSlideIndex = (currentPromoSlideIndex - 1 + list.length) % list.length;
    updatePromoSlidePosition();
}

function goToPromoSlide(index) {
    currentPromoSlideIndex = index;
    updatePromoSlidePosition();
    startPromoCarouselAutoplay();
}

function updatePromoSlidePosition() {
    const track = document.getElementById('promoCarouselTrack');
    if (track) {
        track.style.transform = `translateX(-${currentPromoSlideIndex * 100}%)`;
    }

    const dots = document.querySelectorAll('.promo-dot');
    dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentPromoSlideIndex);
    });
}

// --- HOME PROMO MARQUEE RENDERER ---
function renderHomePromos() {
    const container = document.getElementById('promoMarqueeContainer');
    if (!container) return;

    let html = '';
    const list = [...state.banners, ...state.banners];
    
    list.forEach(item => {
        html += `
            <div class="promo-flyer-card" onclick="selectPromoBanner('${item.title.replace(/'/g, "\\'")}')">
                <div class="flyer-img-box">
                    <img src="${item.image}" alt="${item.title}">
                    <span class="flyer-tag">${item.tag}</span>
                </div>
                <div class="flyer-info">
                    <h4>${item.title}</h4>
                    <p>${item.desc || 'Special promotional offer by Feather Holidays Sri Lanka.'}</p>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

// --- HOME DESTINATIONS TEASER ---
function renderHomeDestinationsTeaser() {
    const container = document.getElementById('homeDestinationsGrid');
    if (!container) return;

    const top4 = (state.destinations || DESTINATIONS_DATA).slice(0, 4);
    let html = '';
    top4.forEach(d => {
        html += `
            <div class="dest-card-full card-3d" onclick="openDestModal('${d.id}')">
                <div class="dest-card-img">
                    <img src="${d.image}" alt="${d.name}">
                </div>
                <div class="dest-card-body">
                    <div>
                        <h4>${d.name}</h4>
                        <p>${d.shortDesc}</p>
                        <div class="activity-badge-list">
                            ${d.activities ? d.activities.map(a => `<span class="activity-badge">${a}</span>`).join('') : ''}
                        </div>
                    </div>
                    <button class="btn-outline-3d"><i data-lucide="eye"></i> View Details</button>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
    if (window.lucide) lucide.createIcons();
}

// --- HOME PACKAGES RENDERER ---
function renderHomePackages(category) {
    const container = document.getElementById('homePackagesContainer');
    if (!container) return;

    const filtered = state.packages.filter(p => p.category === category);
    let html = '';
    filtered.forEach(pkg => {
        html += renderPackageCardHtml(pkg);
    });
    container.innerHTML = html;
    if (window.lucide) lucide.createIcons();
}

function filterHomePackages(category) {
    document.querySelectorAll('.toggle-pills .pill-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.innerText.includes(category)) btn.classList.add('active');
    });
    renderHomePackages(category);
}

// --- HOME REVIEWS PREVIEW SLIDER ---
function renderHomeReviewPreview() {
    const container = document.getElementById('homeReviewPreview');
    if (!container) return;

    const r = state.reviews[0] || INITIAL_REVIEWS[0];
    container.innerHTML = `
        <div style="padding: 20px; font-style: italic; color: var(--text-secondary);">
            "${r.text}"
            <div style="margin-top: 10px; font-weight: 700; color: var(--accent-gold); font-style: normal;">
                — ${r.name} (${r.location})
            </div>
        </div>
    `;
}

// --- DYNAMIC PHOTO & VIDEO SHOWCASE GALLERY ---
function renderMediaGallerySection() {
    const container = document.getElementById('homeGalleryGrid');
    if (!container) return;

    let html = '';
    (state.gallery || INITIAL_GALLERY).forEach(g => {
        if (g.type === 'video') {
            html += `
                <div class="gallery-card card-3d" onclick="openVideoLightbox('${g.url}')">
                    <img src="${g.thumbnail || 'imegers/Sigiriya_rock_fortress_at_night_202608281224.jpeg'}" alt="${g.title}">
                    <div class="video-play-badge"><i data-lucide="play"></i></div>
                    <div class="gallery-card-overlay">
                        <h4><i data-lucide="video"></i> ${g.title}</h4>
                        <p>${g.desc}</p>
                    </div>
                </div>
            `;
        } else {
            html += `
                <div class="gallery-card card-3d" onclick="openDestModalImage('${g.url}', '${g.title}')">
                    <img src="${g.url}" alt="${g.title}">
                    <div class="gallery-card-overlay">
                        <h4><i data-lucide="camera"></i> ${g.title}</h4>
                        <p>${g.desc}</p>
                    </div>
                </div>
            `;
        }
    });
    container.innerHTML = html;
    if (window.lucide) lucide.createIcons();
}

function openVideoLightbox(videoUrl) {
    const container = document.getElementById('videoLightboxContainer');
    if (!container) return;

    if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
        container.innerHTML = `<iframe src="${videoUrl}?autoplay=1" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
    } else {
        container.innerHTML = `<video src="${videoUrl}" controls autoplay style="width: 100%; height: 100%;"></video>`;
    }

    document.getElementById('videoLightboxModal').classList.add('active');
}

function closeVideoLightbox() {
    const container = document.getElementById('videoLightboxContainer');
    if (container) container.innerHTML = '';
    document.getElementById('videoLightboxModal').classList.remove('active');
}

function openDestModalImage(imgUrl, title) {
    const modal = document.getElementById('destModal');
    const content = document.getElementById('destModalContent');
    if (modal && content) {
        content.innerHTML = `
            <div style="text-align: center;">
                <img src="${imgUrl}" alt="${title}" style="max-width: 100%; max-height: 450px; border-radius: 12px; margin-bottom: 16px;">
                <h3>${title}</h3>
            </div>
        `;
        modal.classList.add('active');
    }
}

// --- HELPER TO RENDER PACKAGE CARD HTML ---
function renderPackageCardHtml(pkg) {
    const priceHtml = pkg.price ? `
        <div class="pkg-price-tag">
            <span class="pkg-price-amount">${pkg.price}</span>
            <span class="pkg-price-label">${pkg.priceLabel || 'Per Person'}</span>
        </div>` : '';

    const excludesHtml = pkg.excludes && pkg.excludes.length > 0 ? `
        <div class="pkg-excludes-section">
            <div class="pkg-excludes-title"><i data-lucide="x-circle"></i> Excludes</div>
            <ul class="pkg-excludes-list">
                ${pkg.excludes.map(e => `<li><i data-lucide="minus"></i> ${e}</li>`).join('')}
            </ul>
        </div>` : '';

    return `
        <div class="package-card card-3d">
            <div class="pkg-img-wrap">
                <img src="${pkg.image}" alt="${pkg.title}">
                <span class="pkg-badge">${pkg.tag}</span>
                ${pkg.vehicle ? `<span class="pkg-vehicle-tag"><i data-lucide="car"></i> ${pkg.vehicle}</span>` : ''}
            </div>
            <div class="pkg-content">
                <div>
                    <h3 class="pkg-title">${pkg.title}</h3>
                    <div class="pkg-meta">
                        <span><i data-lucide="clock"></i> ${pkg.duration}</span>
                        <span><i data-lucide="shield-check"></i> All-Inclusive</span>
                    </div>
                    ${priceHtml}
                    <div class="pkg-includes-title"><i data-lucide="check-circle"></i> Includes</div>
                    <ul class="pkg-highlights-list">
                        ${pkg.highlights.map(h => `<li><i data-lucide="check"></i> ${h}</li>`).join('')}
                    </ul>
                    ${excludesHtml}
                </div>
                <div class="pkg-actions">
                    <button class="btn-primary-3d full-width" onclick="selectPackageAndBook('${pkg.title}', '${pkg.vehicle || ''}')">
                        <i data-lucide="send"></i> Inquire This Package
                    </button>
                </div>
            </div>
        </div>
    `;
}

// --- MAP & DESTINATIONS ENGINE ---
function renderDestinationsMapPins() {
    const container = document.getElementById('mapPinsContainer');
    if (!container) return;

    let html = '';
    state.destinations.forEach(d => {
        html += `
            <div class="map-pin" style="left: ${d.mapX}%; top: ${d.mapY}%;" onclick="openDestModal('${d.id}')">
                <div class="pin-marker ${d.category}">
                    <i data-lucide="${d.category === 'wildlife' ? 'trees' : 'landmark'}"></i>
                    <span class="pin-pulse"></span>
                </div>
                <div class="pin-tooltip">${d.name}</div>
            </div>
        `;
    });
    container.innerHTML = html;
    if (window.lucide) lucide.createIcons();
}

function renderDestinationsList(list) {
    const sidebar = document.getElementById('destinationsSidebarList');
    if (sidebar) {
        let html = '';
        list.forEach(d => {
            html += `
                <div class="dest-sidebar-item" onclick="openDestModal('${d.id}')">
                    <div>
                        <h5>${d.name}</h5>
                        <span>${d.category.toUpperCase()}</span>
                    </div>
                    <i data-lucide="chevron-right"></i>
                </div>
            `;
        });
        sidebar.innerHTML = html;
        if (window.lucide) lucide.createIcons();
    }
}

function renderDestinationsFullGrid() {
    const container = document.getElementById('destinationsFullGrid');
    if (!container) return;

    let html = '';
    state.destinations.forEach(d => {
        html += `
            <div class="dest-card-full card-3d" onclick="openDestModal('${d.id}')">
                <div class="dest-card-img">
                    <img src="${d.image}" alt="${d.name}">
                </div>
                <div class="dest-card-body">
                    <div>
                        <h4>${d.name}</h4>
                        <p>${d.shortDesc}</p>
                        <div class="activity-badge-list">
                            ${d.activities ? d.activities.map(a => `<span class="activity-badge">${a}</span>`).join('') : ''}
                        </div>
                    </div>
                    <button class="btn-outline-3d"><i data-lucide="eye"></i> View Full Details & Activities</button>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
    if (window.lucide) lucide.createIcons();
}

function filterDestinationsList() {
    const q = document.getElementById('destSearchInput').value.toLowerCase();
    const filtered = state.destinations.filter(d => d.name.toLowerCase().includes(q) || d.shortDesc.toLowerCase().includes(q));
    renderDestinationsList(filtered);
}

function filterDestCategory(cat) {
    document.querySelectorAll('.dest-cat-btn').forEach(b => {
        b.classList.remove('active');
        if (b.getAttribute('data-cat') === cat) b.classList.add('active');
    });

    if (cat === 'all') {
        renderDestinationsList(state.destinations);
    } else {
        const filtered = state.destinations.filter(d => d.category === cat);
        renderDestinationsList(filtered);
    }
}

function openDestModal(id) {
    const d = state.destinations.find(item => item.id === id);
    if (!d) return;

    const modal = document.getElementById('destModal');
    const content = document.getElementById('destModalContent');

    content.innerHTML = `
        <div class="dest-modal-layout grid-2-col">
            <div class="dest-modal-img">
                <img src="${d.image}" alt="${d.name}" style="width:100%; height:320px; object-fit:cover; border-radius:12px;">
            </div>
            <div>
                <h3>${d.name}</h3>
                <span class="badge" style="margin-bottom: 12px; display:inline-block;">${d.category.toUpperCase()}</span>
                <p style="color: var(--text-secondary); margin-bottom: 16px;">${d.fullDesc}</p>
                
                <h4 style="color: var(--accent-gold); font-size:0.95rem; margin-bottom: 8px;"><i data-lucide="sparkles"></i> Cultural & Adventure Activities</h4>
                <ul class="modal-activities-list">
                    ${d.activities ? d.activities.map(a => `<li><i data-lucide="check-circle-2"></i> ${a}</li>`).join('') : ''}
                </ul>

                <button class="btn-primary-3d margin-top full-width" onclick="closeDestModal(); selectDestinationAndBook('${d.name}')">
                    <i data-lucide="calendar"></i> Book Tour to ${d.name}
                </button>
            </div>
        </div>
    `;

    modal.classList.add('active');
    if (window.lucide) lucide.createIcons();
}

function closeDestModal() {
    document.getElementById('destModal').classList.remove('active');
}

// --- PACKAGES & FLEET GRIDS ---
function renderPackagesGrid(containerId, category) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const list = state.packages.filter(p => p.category === category);
    let html = '';
    list.forEach(pkg => {
        html += renderPackageCardHtml(pkg);
    });
    container.innerHTML = html;
    if (window.lucide) lucide.createIcons();
}

function renderFleetGrid() {
    const container = document.getElementById('fleetGrid');
    if (!container) return;

    let html = '';
    state.fleet.forEach(v => {
        const specPoints = v.specs ? v.specs.split(/[\|\n]/).map(s => s.trim()).filter(s => s) : [];
        const specsHtml = specPoints.map(p => `<li><i data-lucide="check-circle-2"></i> ${p}</li>`).join('');

        html += `
            <div class="vehicle-card card-3d">
                <div class="veh-img-wrap">
                    <img src="${v.image}" alt="${v.name}">
                    <span class="veh-badge">${v.category}</span>
                </div>
                <div class="veh-body">
                    <h4>${v.name}</h4>
                    <p class="veh-cap"><i data-lucide="users"></i> Capacity: ${v.capacity}</p>
                    <ul class="fleet-features-list">
                        ${specsHtml}
                    </ul>
                    <button class="btn-primary-3d full-width" onclick="selectVehicleAndBook('${v.name.replace(/'/g, "\\'")}')">
                        <i data-lucide="car"></i> Book This Vehicle
                    </button>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
    if (window.lucide) lucide.createIcons();
}

// --- REVIEWS FEED ---
function renderReviewsFeed() {
    const container = document.getElementById('reviewsFeedGrid');
    if (!container) return;

    let html = '';
    state.reviews.forEach(r => {
        const stars = '★'.repeat(r.stars) + '☆'.repeat(5 - r.stars);
        html += `
            <div class="review-card card-3d">
                <div class="rev-header">
                    <div class="rev-author-info">
                        <strong>${r.name}</strong>
                        <span>${r.location || 'Verified Traveler'}</span>
                    </div>
                    <div class="rev-stars" style="color: var(--accent-gold);">${stars}</div>
                </div>
                <p class="rev-text">"${r.text}"</p>
            </div>
        `;
    });
    container.innerHTML = html;
}

function openAddReviewModal() {
    document.getElementById('reviewModal').classList.add('active');
}

function closeReviewModal() {
    document.getElementById('reviewModal').classList.remove('active');
}

function handleReviewSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('revName').value;
    const location = document.getElementById('revLocation').value;
    const stars = parseInt(document.getElementById('revStars').value);
    const text = document.getElementById('revComment').value;

    const newRev = { id: `rev-${Date.now()}`, name, location, stars, text };
    state.reviews.unshift(newRev);
    saveState(`Added Google Review by ${name}`);

    renderReviewsFeed();
    closeReviewModal();
    alert('Thank you! Your Google Review has been submitted successfully and posted live.');
}

// --- BOOKING FORM HANDLERS ---
function selectVehicleAndBook(vehName) {
    switchTab('booking');
    const vehSelect = document.getElementById('custVehicle');
    if (vehSelect) {
        for (let i = 0; i < vehSelect.options.length; i++) {
            if (vehSelect.options[i].value.includes(vehName)) {
                vehSelect.selectedIndex = i;
                break;
            }
        }
    }
}

function selectPackageAndBook(pkgTitle, vehName) {
    switchTab('booking');
    const notes = document.getElementById('custNotes');
    if (notes) {
        notes.value = `Inquiring for Package: "${pkgTitle}". Preferred Transport: ${vehName}.`;
    }
}

function selectDestinationAndBook(destName) {
    switchTab('booking');
    const destInput = document.getElementById('custDestinations');
    if (destInput) {
        destInput.value = destName;
    }
}

function selectPromoBanner(bannerTitle) {
    switchTab('booking');
    const notes = document.getElementById('custNotes');
    if (notes) {
        notes.value = `Inquiring regarding Special Promotional Offer: "${bannerTitle}".`;
    }
}

function filterAndNavigateTours() {
    const category = document.getElementById('heroCategorySelect').value;
    if (category === 'Abroad') {
        switchTab('abroad-tours');
    } else {
        switchTab('sl-tours');
    }
}

function handleBookingSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('custName').value;
    const email = document.getElementById('custEmail').value;
    const phone = document.getElementById('custPhone').value;
    const tourType = document.getElementById('custTourType').value;
    const startDate = document.getElementById('custStartDate').value;
    const duration = document.getElementById('custDuration').value;
    const pax = document.getElementById('custPax').value;
    const vehicle = document.getElementById('custVehicle').value;
    const destinations = document.getElementById('custDestinations').value;
    const notes = document.getElementById('custNotes').value;

    const lead = {
        id: `lead-${Date.now()}`,
        dateSubmitted: new Date().toLocaleString(),
        name, email, phone, tourType, startDate, duration, pax, vehicle, destinations, notes,
        status: 'Pending',
        isLoggedInUser: !!state.currentUser,
        userEmail: email
    };

    state.inbox.unshift(lead);
    saveState(`Received new booking lead from ${name}`);
    updateInboxCount();
    renderAdminInbox();

    showToast(`Thank you ${name}! Your inquiry has been sent to featherholidays@hotmail.com & logged in live admin inbox.`, 'success');
    alert(`Thank you, ${name}! Your tour inquiry has been submitted to Feather Holidays. Automated notification dispatched to Feather Holidays team (${OFFICIAL_BUSINESS.email}). We will contact you immediately via WhatsApp (${phone}) or Email (${email}).`);
    document.getElementById('tourBookingForm').reset();
    autofillBookingFormWithUser();
}

// --- ADMIN SUBTAB NAVIGATION & ALL SUBTABS RENDERER ---
function switchAdminSubtab(subtabId) {
    document.querySelectorAll('.admin-subtab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-subtab') === subtabId) btn.classList.add('active');
    });

    document.querySelectorAll('.admin-subtab-content').forEach(c => {
        c.classList.remove('active');
    });

    const target = document.getElementById(`admin-subtab-${subtabId}`);
    if (target) target.classList.add('active');
}

function renderAdminSubtabsAll() {
    renderAdminInbox();
    renderAdminDestinationsList();
    renderAdminPackagesList();
    renderAdminFleetList();
    renderAdminHeroSlidesList();
    renderAdminGalleryList();
    renderAdminReviewsList();
    renderSortableBannerList();
    initAdminSortableLists();
}

function updateInboxCount() {
    const countEl = document.getElementById('inboxCount');
    if (countEl) countEl.innerText = state.inbox.length;
}

function renderAdminInbox() {
    const container = document.getElementById('adminInboxList');
    if (!container) return;

    if (state.inbox.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px; color: var(--text-muted);">
                <i data-lucide="inbox" style="font-size: 3rem; margin-bottom: 12px;"></i>
                <p>No customer booking forms received yet.</p>
            </div>
        `;
        if (window.lucide) lucide.createIcons();
        return;
    }

    let html = '';
    state.inbox.forEach(item => {
        const isReplied = item.status === 'Replied';
        html += `
            <div class="inbox-item-card card-3d ${isReplied ? 'replied-lead' : ''}">
                <div class="inbox-item-details">
                    <h4>${item.name} <span class="badge ${isReplied ? 'badge-success' : ''}">${item.status}</span> ${item.isLoggedInUser ? '<span class="badge badge-user"><i data-lucide="check-circle"></i> Logged User</span>' : ''}</h4>
                    <div class="inbox-item-meta">
                        <span><i data-lucide="mail"></i> <strong>Email:</strong> ${item.email}</span>
                        <span><i data-lucide="phone"></i> <strong>Phone:</strong> ${item.phone}</span>
                        <span><i data-lucide="calendar"></i> <strong>Date:</strong> ${item.startDate || 'N/A'}</span>
                        <span><i data-lucide="car"></i> <strong>Vehicle:</strong> ${item.vehicle}</span>
                    </div>
                    <p style="font-size: 0.85rem; color: var(--text-secondary);"><strong>Destinations:</strong> ${item.destinations || 'Any'}</p>
                    <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 4px;"><strong>Special Notes:</strong> ${item.notes || 'None'}</p>
                    ${item.replyText ? `<div style="background: rgba(0, 230, 153, 0.12); border-left: 3px solid var(--accent-emerald); padding: 8px 12px; margin-top: 8px; border-radius: 4px;"><strong>Admin Reply Sent:</strong> <p style="font-size:0.85rem; color:#fff;">${item.replyText}</p></div>` : ''}
                    <span style="font-size: 0.7rem; color: var(--text-muted); display: block; margin-top: 8px;">Submitted on: ${item.dateSubmitted}</span>
                </div>
                <div class="inbox-actions-btns">
                    <button class="btn-primary-3d" onclick="openReplyModal('${item.id}')">
                        <i data-lucide="mail"></i> Direct Reply
                    </button>
                    <a href="https://wa.me/${item.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(item.name)},%20this%20is%20Feather%20Holidays%20regarding%20your%20tour%20inquiry!" target="_blank" class="wa-chat-btn">
                        <i data-lucide="message-circle"></i> WhatsApp Chat
                    </a>
                    <button class="btn-outline-3d danger-outline" onclick="deleteInboxItem('${item.id}')">
                        <i data-lucide="trash-2"></i> Delete
                    </button>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
    if (window.lucide) lucide.createIcons();
}

function deleteInboxItem(id) {
    state.inbox = state.inbox.filter(item => item.id !== id);
    saveState('Deleted Customer Inquiry');
    updateInboxCount();
}

function clearAllInbox() {
    if (confirm('Are you sure you want to clear all customer inquiries?')) {
        state.inbox = [];
        saveState('Cleared Inbox');
        updateInboxCount();
    }
}

function openReplyModal(leadId) {
    const lead = state.inbox.find(i => i.id === leadId);
    if (!lead) return;

    const modal = document.getElementById('replyModal');
    const body = document.getElementById('replyModalBody');

    const subject = `Feather Holidays Tour Itinerary Request for ${lead.name}`;
    const defaultBody = `Dear ${lead.name},\n\nThank you for choosing Feather Holidays! We are delighted to assist you with your upcoming ${lead.tourType}.\n\nYour Selected Vehicle: ${lead.vehicle}\nExpected Start Date: ${lead.startDate || 'As per your choice'}\nDestinations: ${lead.destinations || 'Custom Itinerary'}\n\nWe have prepared an all-inclusive package with luxury hotels, meals, safari passes, and dedicated tour guide services.\n\nPlease let us know if you would like to confirm your dates.\n\nWarm regards,\nFeather Holidays Team\nWhatsApp: ${OFFICIAL_BUSINESS.whatsapp}\nEmail: ${OFFICIAL_BUSINESS.email}`;

    body.innerHTML = `
        <div style="margin-bottom: 16px; background: rgba(0,0,0,0.3); padding: 12px; border-radius: 8px;">
            <p><strong>To Customer:</strong> ${lead.name} (${lead.email})</p>
            <p><strong>Phone / WhatsApp:</strong> ${lead.phone}</p>
        </div>
        <div class="form-group">
            <label><i data-lucide="edit"></i> Direct Reply Message Body:</label>
            <textarea id="replyMessageInput" rows="7" style="width: 100%; background: rgba(0,0,0,0.6); color: #fff; padding: 12px; border-radius: 8px; border: 1px solid var(--border-glass);">${defaultBody}</textarea>
        </div>
        <div style="display: flex; gap: 10px; margin-top: 14px;">
            <button class="btn-primary-3d full-width" onclick="sendDirectEmailReply('${lead.id}')">
                <i data-lucide="send"></i> Send Direct Reply & Mark Replied
            </button>
            <a href="mailto:${lead.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(defaultBody)}" class="btn-outline-3d" style="text-decoration: none; white-space: nowrap; text-align: center;">
                <i data-lucide="external-link"></i> Open Mail Client
            </a>
        </div>
    `;

    modal.classList.add('active');
    if (window.lucide) lucide.createIcons();
}

function sendDirectEmailReply(leadId) {
    const lead = state.inbox.find(i => i.id === leadId);
    if (!lead) return;

    const replyMsg = document.getElementById('replyMessageInput').value;
    lead.status = 'Replied';
    lead.replyText = replyMsg;

    saveState(`Sent direct email reply to ${lead.name}`);
    renderAdminInbox();
    closeReplyModal();

    // Also trigger mailto client launch
    const subject = encodeURIComponent(`Feather Holidays Tour Itinerary Request for ${lead.name}`);
    window.location.href = `mailto:${lead.email}?subject=${subject}&body=${encodeURIComponent(replyMsg)}`;

    showToast(`Direct reply saved & sent to ${lead.email}! Status updated to Replied.`, 'success');
}

function closeReplyModal() {
    document.getElementById('replyModal').classList.remove('active');
}

// --- GENERAL SITE CONTENT HANDLER ---
function handleSaveGeneralSiteContent(e) {
    e.preventDefault();
    state.siteText = {
        heroBadgeText: document.getElementById('adminSiteHeroBadgeText') ? document.getElementById('adminSiteHeroBadgeText').value : "",
        heroTitle: document.getElementById('adminSiteHeroTitle').value,
        heroTagline: document.getElementById('adminSiteHeroTagline').value,
        announcementText: document.getElementById('adminSiteAnnouncement').value,
        phone: document.getElementById('adminSitePhone').value,
        email: document.getElementById('adminSiteEmail').value,
        address: document.getElementById('adminSiteAddress').value,
        whatsapp: document.getElementById('adminSitePhone').value,
        mapsUrl: document.getElementById('adminSiteMapsUrl').value,
        facebookUrl: document.getElementById('adminSiteFbUrl').value,
        tiktokUrl: document.getElementById('adminSiteTikTokUrl') ? document.getElementById('adminSiteTikTokUrl').value : "https://tiktok.com/@featherholidays",
        instaUrl: document.getElementById('adminSiteInstaUrl') ? document.getElementById('adminSiteInstaUrl').value : "https://instagram.com/featherholidays"
    };

    saveState('Updated General Website Content, Badges & Text');
}

// --- HERO BACKGROUND SLIDES MANAGER ---
function renderAdminHeroSlidesList() {
    const container = document.getElementById('adminHeroSlidesList');
    if (!container) return;

    let html = '';
    (state.heroSlides || INITIAL_HERO_SLIDES).forEach(s => {
        html += `
            <div class="admin-item-card" data-id="${s.id}">
                <span class="drag-handle" title="Drag to Reorder"><i data-lucide="grip-vertical"></i></span>
                <img src="${s.url}" alt="${s.title}" class="admin-item-thumb">
                <h4 class="admin-item-title">${s.title}</h4>
                <div class="admin-card-actions">
                    <button class="btn-outline-3d" onclick="openEditItemModal('heroSlide', '${s.id}')"><i data-lucide="edit"></i> Edit</button>
                    <button class="btn-outline-3d danger-outline" onclick="deleteHeroSlide('${s.id}')"><i data-lucide="trash-2"></i> Remove</button>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
    if (window.lucide) lucide.createIcons();
}

function addNewHeroSlide() {
    const title = document.getElementById('newSlideTitle').value;
    const url = document.getElementById('newSlideUrl').value;

    if (!title || !url) {
        alert('Please enter slide title and image URL');
        return;
    }

    state.heroSlides.push({ id: `slide-${Date.now()}`, title, url });
    saveState(`Added Hero Background Slide: ${title}`);
    document.getElementById('newSlideTitle').value = '';
    document.getElementById('newSlideUrl').value = '';
}

function deleteHeroSlide(id) {
    state.heroSlides = state.heroSlides.filter(s => s.id !== id);
    saveState('Removed Hero Background Slide');
}

// --- DESTINATIONS ADMIN MANAGER ---
function renderAdminDestinationsList() {
    const container = document.getElementById('adminDestinationsList');
    if (!container) return;

    const q = (document.getElementById('adminDestSearch') ? document.getElementById('adminDestSearch').value : '').toLowerCase();
    const list = state.destinations.filter(d => d.name.toLowerCase().includes(q));

    let html = '';
    list.forEach(d => {
        html += `
            <div class="admin-item-card" data-id="${d.id}">
                <span class="drag-handle" title="Drag to Reorder"><i data-lucide="grip-vertical"></i></span>
                <img src="${d.image}" alt="${d.name}" class="admin-item-thumb">
                <h4 class="admin-item-title">${d.name}</h4>
                <div class="admin-item-meta">${d.category.toUpperCase()}</div>
                <p style="font-size: 0.8rem; color: var(--text-muted);">${d.shortDesc}</p>
                <div class="admin-card-actions">
                    <button class="btn-primary-3d" onclick="openEditItemModal('destination', '${d.id}')"><i data-lucide="edit"></i> Edit</button>
                    <button class="btn-outline-3d danger-outline" onclick="deleteDestination('${d.id}')"><i data-lucide="trash-2"></i> Delete</button>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
    if (window.lucide) lucide.createIcons();
}

function handleAddNewDestination(e) {
    e.preventDefault();
    const name = document.getElementById('newDestName').value;
    const category = document.getElementById('newDestCat').value;
    const image = document.getElementById('newDestImg').value;
    const shortDesc = document.getElementById('newDestShortDesc').value;
    const fullDesc = document.getElementById('newDestFullDesc').value;
    const activitiesText = document.getElementById('newDestActivities').value;

    const activities = activitiesText.split('\n').filter(a => a.trim() !== '');

    const newDest = {
        id: `dest-${Date.now()}`,
        name, category, image, shortDesc, fullDesc,
        mapX: 50, mapY: 50,
        activities: activities.length > 0 ? activities : ["Guided Tour & Photography"]
    };

    state.destinations.unshift(newDest);
    saveState(`Added New Destination: ${name}`);
}

function deleteDestination(id) {
    if (confirm('Are you sure you want to delete this destination?')) {
        state.destinations = state.destinations.filter(d => d.id !== id);
        saveState('Deleted Destination');
    }
}

// --- TOUR PACKAGES ADMIN MANAGER ---
function renderAdminPackagesList() {
    const container = document.getElementById('adminPackagesList');
    if (!container) return;

    let html = '';
    state.packages.forEach(pkg => {
        html += `
            <div class="admin-item-card" data-id="${pkg.id}">
                <span class="drag-handle" title="Drag to Reorder"><i data-lucide="grip-vertical"></i></span>
                <img src="${pkg.image}" alt="${pkg.title}" class="admin-item-thumb">
                <h4 class="admin-item-title">${pkg.title}</h4>
                <div class="admin-item-meta">${pkg.category} | ${pkg.duration}</div>
                <div class="admin-card-actions">
                    <button class="btn-primary-3d" onclick="openEditItemModal('package', '${pkg.id}')"><i data-lucide="edit"></i> Edit Package</button>
                    <button class="btn-outline-3d danger-outline" onclick="deletePackage('${pkg.id}')"><i data-lucide="trash-2"></i> Delete</button>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
    if (window.lucide) lucide.createIcons();
}

function handleAddNewPackage(e) {
    e.preventDefault();
    const title = document.getElementById('pkgTitle').value;
    const category = document.getElementById('pkgCategory').value;
    const duration = document.getElementById('pkgDuration').value;
    const vehicle = document.getElementById('pkgVehicle').value;
    const image = document.getElementById('pkgImage').value;
    const tag = document.getElementById('pkgTag').value || 'Custom Package';
    const highlightsText = document.getElementById('pkgHighlights').value;
    const priceVal = (document.getElementById('pkgPrice') ? document.getElementById('pkgPrice').value.trim() : '') || null;
    const priceLabelVal = (document.getElementById('pkgPriceLabel') ? document.getElementById('pkgPriceLabel').value.trim() : '') || 'Per Person';
    const excludesText = document.getElementById('pkgExcludes') ? document.getElementById('pkgExcludes').value : '';

    const highlights = highlightsText.split('\n').filter(h => h.trim() !== '');
    const excludes = excludesText.split('\n').filter(e => e.trim() !== '');

    const newPkg = {
        id: `pkg-${Date.now()}`,
        category, title, duration, vehicle, image, tag,
        highlights: highlights.length > 0 ? highlights : ["All-Inclusive Transport & Accommodation", "Personal Guide"],
        price: priceVal,
        priceLabel: priceLabelVal,
        excludes: excludes
    };

    state.packages.unshift(newPkg);
    saveState(`Created Tour Package: ${title}`);
}

function deletePackage(id) {
    if (confirm('Delete this tour package?')) {
        state.packages = state.packages.filter(p => p.id !== id);
        saveState('Deleted Package');
    }
}

// --- FLEET ADMIN MANAGER ---
function renderAdminFleetList() {
    const container = document.getElementById('adminFleetList');
    if (!container) return;

    let html = '';
    state.fleet.forEach(v => {
        html += `
            <div class="admin-item-card" data-id="${v.id}">
                <span class="drag-handle" title="Drag to Reorder"><i data-lucide="grip-vertical"></i></span>
                <img src="${v.image}" alt="${v.name}" class="admin-item-thumb">
                <h4 class="admin-item-title">${v.name}</h4>
                <div class="admin-item-meta">${v.category} (${v.capacity})</div>
                <div class="admin-card-actions">
                    <button class="btn-primary-3d" onclick="openEditItemModal('vehicle', '${v.id}')"><i data-lucide="edit"></i> Edit Specs</button>
                    <button class="btn-outline-3d danger-outline" onclick="deleteVehicle('${v.id}')"><i data-lucide="trash-2"></i> Delete</button>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
    if (window.lucide) lucide.createIcons();
}

function handleAddNewVehicle(e) {
    e.preventDefault();
    const name = document.getElementById('vehName').value;
    const category = document.getElementById('vehCategory').value;
    const capacity = document.getElementById('vehCapacity').value;
    const image = document.getElementById('vehImage').value;
    const specs = document.getElementById('vehSpecs').value;

    const newVeh = { id: `veh-${Date.now()}`, name, category, capacity, image, specs };
    state.fleet.push(newVeh);
    saveState(`Added Vehicle to Fleet: ${name}`);
}

function deleteVehicle(id) {
    if (confirm('Delete vehicle from fleet?')) {
        state.fleet = state.fleet.filter(v => v.id !== id);
        saveState('Deleted Vehicle');
    }
}

// --- MARQUEE BANNERS & UNIVERSAL DRAG & DROP BUILDER ---
function initAdminSortableLists() {
    if (!window.Sortable) return;

    const listConfigs = [
        { id: 'dragDropMarqueeList', key: 'banners', label: 'Promotional Banners' },
        { id: 'adminFleetList', key: 'fleet', label: 'Vehicle Fleet' },
        { id: 'adminPackagesList', key: 'packages', label: 'Tour Packages' },
        { id: 'adminDestinationsList', key: 'destinations', label: 'Destinations' },
        { id: 'adminGalleryList', key: 'gallery', label: 'Media Gallery' },
        { id: 'adminReviewsList', key: 'reviews', label: 'Google Reviews' },
        { id: 'adminHeroSlidesList', key: 'heroSlides', label: 'Hero Background Slides' }
    ];

    listConfigs.forEach(cfg => {
        const el = document.getElementById(cfg.id);
        if (el) {
            new Sortable(el, {
                animation: 150,
                handle: '.drag-handle',
                onEnd: function () {
                    const newOrder = [];
                    el.querySelectorAll('[data-id]').forEach(item => {
                        const itemId = item.getAttribute('data-id');
                        const found = state[cfg.key].find(x => x.id === itemId);
                        if (found) newOrder.push(found);
                    });
                    if (newOrder.length > 0) {
                        state[cfg.key] = newOrder;
                        saveState(`Re-ordered ${cfg.label} via Drag & Drop`);
                    }
                }
            });
        }
    });
}

function initSortableBannerBuilder() {
    renderSortableBannerList();
    initAdminSortableLists();
}

function renderSortableBannerList() {
    const listEl = document.getElementById('dragDropMarqueeList');
    if (!listEl) return;

    let html = '';
    state.banners.forEach(b => {
        html += `
            <div class="sortable-banner-item" data-id="${b.id}">
                <div class="banner-left">
                    <span class="drag-handle"><i data-lucide="grip-vertical"></i></span>
                    <img src="${b.image}" alt="${b.title}" style="width: 60px; height: 40px; object-fit: cover; border-radius: 6px;">
                    <div>
                        <strong style="color: #fff;">${b.title}</strong>
                        <span style="font-size: 0.75rem; color: var(--accent-gold); display: block;">${b.tag}</span>
                    </div>
                </div>
                <div>
                    <button class="btn-primary-3d" onclick="openEditItemModal('banner', '${b.id}')"><i data-lucide="edit"></i> Edit</button>
                    <button class="btn-outline-3d danger-outline" onclick="removePromoBanner('${b.id}')"><i data-lucide="trash-2"></i></button>
                </div>
            </div>
        `;
    });
    listEl.innerHTML = html;
    if (window.lucide) lucide.createIcons();
}

function addNewPromoBanner() {
    const title = document.getElementById('newBannerTitle').value;
    const image = document.getElementById('newBannerImage').value || 'imegers/Nine_Arch_Bridge_night_landscape_202608281224.jpeg';
    const tag = document.getElementById('newBannerTag').value || '🔥 UP TO 35% OFF';
    const descEl = document.getElementById('newBannerDesc');
    const desc = descEl && descEl.value ? descEl.value : 'Explore Sri Lanka with Feather Holidays all-inclusive private AC vehicle tours & 5-Star resorts.';

    if (!title) {
        alert('Please enter banner title');
        return;
    }

    const banner = {
        id: `b-${Date.now()}`,
        title, image, tag, desc
    };

    state.banners.push(banner);
    saveState(`Added Promotional Banner: ${title}`);

    document.getElementById('newBannerTitle').value = '';
    document.getElementById('newBannerImage').value = '';
    document.getElementById('newBannerTag').value = '';
    if (descEl) descEl.value = '';
    const prevEl = document.getElementById('newBannerPreview');
    if (prevEl) prevEl.innerHTML = '';
}

function removePromoBanner(id) {
    state.banners = state.banners.filter(b => b.id !== id);
    saveState('Removed Promo Banner');
}

// --- MEDIA GALLERY ADMIN MANAGER ---
function renderAdminGalleryList() {
    const container = document.getElementById('adminGalleryList');
    if (!container) return;

    let html = '';
    (state.gallery || INITIAL_GALLERY).forEach(g => {
        html += `
            <div class="admin-item-card">
                <img src="${g.thumbnail || g.url}" alt="${g.title}" class="admin-item-thumb">
                <h4 class="admin-item-title">${g.title}</h4>
                <div class="admin-item-meta">Type: ${g.type.toUpperCase()}</div>
                <div class="admin-card-actions">
                    <button class="btn-primary-3d" onclick="openEditItemModal('gallery', '${g.id}')"><i data-lucide="edit"></i> Edit</button>
                    <button class="btn-outline-3d danger-outline" onclick="deleteGalleryItem('${g.id}')"><i data-lucide="trash-2"></i> Delete</button>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
    if (window.lucide) lucide.createIcons();
}

function handleAddNewGalleryItem(e) {
    e.preventDefault();
    const title = document.getElementById('galTitle').value;
    const type = document.getElementById('galType').value;
    const url = document.getElementById('galUrl').value;
    const desc = document.getElementById('galDesc').value;

    const newItem = { id: `gal-${Date.now()}`, title, type, url, desc };
    state.gallery.unshift(newItem);
    saveState(`Added Gallery ${type}: ${title}`);
}

function deleteGalleryItem(id) {
    if (confirm('Delete media item from gallery?')) {
        state.gallery = state.gallery.filter(g => g.id !== id);
        saveState('Deleted Gallery Item');
    }
}

// --- GOOGLE REVIEWS ADMIN MANAGER ---
function renderAdminReviewsList() {
    const container = document.getElementById('adminReviewsList');
    if (!container) return;

    let html = '';
    state.reviews.forEach(r => {
        html += `
            <div class="admin-item-card">
                <h4 class="admin-item-title">${r.name}</h4>
                <div class="admin-item-meta">${r.location} | ${'★'.repeat(r.stars)}</div>
                <p style="font-size:0.8rem; color: var(--text-muted);">${r.text}</p>
                <div class="admin-card-actions">
                    <button class="btn-primary-3d" onclick="openEditItemModal('review', '${r.id}')"><i data-lucide="edit"></i> Edit</button>
                    <button class="btn-outline-3d danger-outline" onclick="deleteReviewItem('${r.id}')"><i data-lucide="trash-2"></i> Delete</button>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
    if (window.lucide) lucide.createIcons();
}

function handleAdminAddReview(e) {
    e.preventDefault();
    const name = document.getElementById('adminRevName').value;
    const location = document.getElementById('adminRevLocation').value;
    const stars = parseInt(document.getElementById('adminRevStars').value);
    const text = document.getElementById('adminRevText').value;

    state.reviews.unshift({ id: `rev-${Date.now()}`, name, location, stars, text });
    saveState(`Added Review by ${name}`);
}

function deleteReviewItem(id) {
    if (confirm('Delete Google Review?')) {
        state.reviews = state.reviews.filter(r => r.id !== id);
        saveState('Deleted Google Review');
    }
}

// --- DYNAMIC UNIVERSAL EDIT MODAL ---
function openEditItemModal(type, id) {
    const modal = document.getElementById('editItemModal');
    const titleEl = document.getElementById('editItemTitle');
    const bodyEl = document.getElementById('editItemBody');
    if (!modal || !bodyEl) return;

    let item = null;
    let fieldsHtml = '';

    if (type === 'destination') {
        item = state.destinations.find(d => d.id === id);
        if (!item) return;
        titleEl.innerHTML = `<i data-lucide="map-pin"></i> Edit Destination: ${item.name}`;
        fieldsHtml = `
            <div class="form-group">
                <label>Name</label>
                <input type="text" id="editField1" value="${item.name}" required>
            </div>
            <div class="form-group">
                <label>Category</label>
                <select id="editField2">
                    <option value="cultural" ${item.category === 'cultural' ? 'selected' : ''}>Cultural & Ancient</option>
                    <option value="wildlife" ${item.category === 'wildlife' ? 'selected' : ''}>Wildlife & Safaris</option>
                </select>
            </div>
            <div class="form-group">
                <label>Image URL</label>
                <input type="text" id="editField3" value="${item.image}" required>
            </div>
            <div class="form-group">
                <label>Short Description</label>
                <input type="text" id="editField4" value="${item.shortDesc}" required>
            </div>
            <div class="form-group">
                <label>Full Description</label>
                <textarea id="editField5" rows="3">${item.fullDesc || ''}</textarea>
            </div>
            <div class="form-group">
                <label>Activities (One per line)</label>
                <textarea id="editField6" rows="3">${item.activities ? item.activities.join('\n') : ''}</textarea>
            </div>
        `;
    } else if (type === 'package') {
        item = state.packages.find(p => p.id === id);
        if (!item) return;
        titleEl.innerHTML = `<i data-lucide="package"></i> Edit Package: ${item.title}`;
        fieldsHtml = `
            <div class="form-group">
                <label>Package Title</label>
                <input type="text" id="editField1" value="${item.title}" required>
            </div>
            <div class="form-group">
                <label>Category</label>
                <select id="editField2">
                    <option value="Sri Lanka" ${item.category === 'Sri Lanka' ? 'selected' : ''}>Sri Lanka</option>
                    <option value="Abroad" ${item.category === 'Abroad' ? 'selected' : ''}>Abroad</option>
                </select>
            </div>
            <div class="form-group">
                <label>Duration</label>
                <input type="text" id="editField3" value="${item.duration}" required>
            </div>
            <div class="form-group">
                <label>Cover Image URL</label>
                <input type="text" id="editField4" value="${item.image}" required>
            </div>
            <div class="form-group">
                <label>Vehicle / Transport</label>
                <input type="text" id="editField5" value="${item.vehicle || ''}" required>
            </div>
            <div class="form-group">
                <label>Tag Badge (e.g. ✈️ Basic Package)</label>
                <input type="text" id="editField6" value="${item.tag}" required>
            </div>
            <div class="form-group">
                <label>Price (e.g. $990 — leave blank to hide)</label>
                <input type="text" id="editField7" value="${item.price || ''}" placeholder="e.g. $990">
            </div>
            <div class="form-group">
                <label>Price Label (e.g. Per Person)</label>
                <input type="text" id="editField8" value="${item.priceLabel || 'Per Person'}">
            </div>
            <div class="form-group">
                <label>✅ Includes / Highlights (One per line)</label>
                <textarea id="editField9" rows="5">${item.highlights ? item.highlights.join('\n') : ''}</textarea>
            </div>
            <div class="form-group">
                <label>❌ Excludes (One per line — leave blank if none)</label>
                <textarea id="editField10" rows="3">${item.excludes ? item.excludes.join('\n') : ''}</textarea>
            </div>
        `;
    } else if (type === 'vehicle') {
        item = state.fleet.find(v => v.id === id);
        if (!item) return;
        titleEl.innerHTML = `<i data-lucide="car"></i> Edit Vehicle Specs & Features: ${item.name}`;
        fieldsHtml = `
            <div class="form-group">
                <label>Vehicle Name</label>
                <input type="text" id="editField1" value="${item.name}" required>
            </div>
            <div class="form-group">
                <label>Category</label>
                <input type="text" id="editField2" value="${item.category}" required>
            </div>
            <div class="form-group">
                <label>Capacity</label>
                <input type="text" id="editField3" value="${item.capacity}" required>
            </div>
            <div class="form-group">
                <label>Image URL or Device Media</label>
                <div class="dual-media-picker">
                    <input type="text" id="editField4" value="${item.image}" required>
                    <label class="btn-outline-3d browse-file-label">
                        <i data-lucide="folder-open"></i> Browse
                        <input type="file" accept="image/*,video/*" onchange="handleFileSelect(event, 'editField4', 'editVehMediaPreview')">
                    </label>
                </div>
                <div id="editVehMediaPreview" class="media-preview-box"></div>
            </div>
            <div class="form-group">
                <label><i data-lucide="list-checks"></i> Vehicle Feature Points / Specs (One Point Per Line — Add, Edit or Remove Any Point)</label>
                <textarea id="editField5" rows="6" placeholder="e.g. Dual Air Conditioning for Comfort&#10;Plush Reclining Seats & Soft Interior&#10;Quiet Engine & Spacious Luggage Trunk">${item.specs || ''}</textarea>
                <small style="color: var(--text-muted); display: block; margin-top: 4px;">Each line creates a distinct bullet point feature with a checkmark on the vehicle card!</small>
            </div>
        `;
    } else if (type === 'banner') {
        item = state.banners.find(b => b.id === id);
        if (!item) return;
        titleEl.innerHTML = `<i data-lucide="image"></i> Edit Marquee Banner`;
        fieldsHtml = `
            <div class="form-group">
                <label>Banner Title</label>
                <input type="text" id="editField1" value="${item.title}" required>
            </div>
            <div class="form-group">
                <label>Tag / Offer</label>
                <input type="text" id="editField2" value="${item.tag}" required>
            </div>
            <div class="form-group">
                <label>Image URL or Browse File</label>
                <div class="dual-media-picker">
                    <input type="text" id="editField3" value="${item.image}" required>
                    <label class="btn-outline-3d browse-file-label">
                        <i data-lucide="folder-open"></i> Browse
                        <input type="file" accept="image/*,video/*" onchange="handleFileSelect(event, 'editField3', 'editMediaPreview')">
                    </label>
                </div>
                <div id="editMediaPreview" class="media-preview-box"></div>
            </div>
            <div class="form-group">
                <label>Description</label>
                <input type="text" id="editField4" value="${item.desc || ''}">
            </div>
        `;
    } else if (type === 'gallery') {
        item = state.gallery.find(g => g.id === id);
        if (!item) return;
        titleEl.innerHTML = `<i data-lucide="film"></i> Edit Gallery Item`;
        fieldsHtml = `
            <div class="form-group">
                <label>Title</label>
                <input type="text" id="editField1" value="${item.title}" required>
            </div>
            <div class="form-group">
                <label>Type</label>
                <select id="editField2">
                    <option value="image" ${item.type === 'image' ? 'selected' : ''}>Photo</option>
                    <option value="video" ${item.type === 'video' ? 'selected' : ''}>Video</option>
                </select>
            </div>
            <div class="form-group">
                <label>Media URL / Embed</label>
                <input type="text" id="editField3" value="${item.url}" required>
            </div>
            <div class="form-group">
                <label>Description</label>
                <input type="text" id="editField4" value="${item.desc || ''}">
            </div>
        `;
    } else if (type === 'review') {
        item = state.reviews.find(r => r.id === id);
        if (!item) return;
        titleEl.innerHTML = `<i data-lucide="star"></i> Edit Google Review`;
        fieldsHtml = `
            <div class="form-group">
                <label>Name</label>
                <input type="text" id="editField1" value="${item.name}" required>
            </div>
            <div class="form-group">
                <label>Location</label>
                <input type="text" id="editField2" value="${item.location}" required>
            </div>
            <div class="form-group">
                <label>Stars Rating</label>
                <select id="editField3">
                    <option value="5" ${item.stars === 5 ? 'selected' : ''}>5 Stars</option>
                    <option value="4" ${item.stars === 4 ? 'selected' : ''}>4 Stars</option>
                </select>
            </div>
            <div class="form-group">
                <label>Comment</label>
                <textarea id="editField4" rows="3">${item.text}</textarea>
            </div>
        `;
    } else if (type === 'heroSlide') {
        item = state.heroSlides.find(s => s.id === id);
        if (!item) return;
        titleEl.innerHTML = `<i data-lucide="image"></i> Edit Hero Background Slide`;
        fieldsHtml = `
            <div class="form-group">
                <label>Slide Title</label>
                <input type="text" id="editField1" value="${item.title}" required>
            </div>
            <div class="form-group">
                <label>Image URL</label>
                <input type="text" id="editField2" value="${item.url}" required>
            </div>
        `;
    }

    bodyEl.innerHTML = `
        <form onsubmit="handleSaveEditItem(event, '${type}', '${id}')">
            ${fieldsHtml}
            <button type="submit" class="btn-primary-3d full-width margin-top"><i data-lucide="check"></i> Save & Publish Changes Live</button>
        </form>
    `;

    modal.classList.add('active');
    if (window.lucide) lucide.createIcons();
}

function handleSaveEditItem(e, type, id) {
    e.preventDefault();

    if (type === 'destination') {
        const item = state.destinations.find(d => d.id === id);
        if (item) {
            item.name = document.getElementById('editField1').value;
            item.category = document.getElementById('editField2').value;
            item.image = document.getElementById('editField3').value;
            item.shortDesc = document.getElementById('editField4').value;
            item.fullDesc = document.getElementById('editField5').value;
            const acts = document.getElementById('editField6').value.split('\n').filter(a => a.trim() !== '');
            item.activities = acts;
            saveState(`Updated Destination: ${item.name}`);
        }
    } else if (type === 'package') {
        const item = state.packages.find(p => p.id === id);
        if (item) {
            item.title = document.getElementById('editField1').value;
            item.category = document.getElementById('editField2').value;
            item.duration = document.getElementById('editField3').value;
            item.image = document.getElementById('editField4').value;
            item.vehicle = document.getElementById('editField5').value;
            item.tag = document.getElementById('editField6').value;
            const priceVal = document.getElementById('editField7').value.trim();
            item.price = priceVal || null;
            item.priceLabel = document.getElementById('editField8').value.trim() || 'Per Person';
            const h = document.getElementById('editField9').value.split('\n').filter(x => x.trim() !== '');
            item.highlights = h;
            const excl = document.getElementById('editField10').value.split('\n').filter(x => x.trim() !== '');
            item.excludes = excl;
            saveState(`Updated Package: ${item.title}`);
        }
    } else if (type === 'vehicle') {
        const item = state.fleet.find(v => v.id === id);
        if (item) {
            item.name = document.getElementById('editField1').value;
            item.category = document.getElementById('editField2').value;
            item.capacity = document.getElementById('editField3').value;
            item.image = document.getElementById('editField4').value;
            item.specs = document.getElementById('editField5').value;
            saveState(`Updated Vehicle: ${item.name}`);
        }
    } else if (type === 'banner') {
        const item = state.banners.find(b => b.id === id);
        if (item) {
            item.title = document.getElementById('editField1').value;
            item.tag = document.getElementById('editField2').value;
            item.image = document.getElementById('editField3').value;
            item.desc = document.getElementById('editField4').value;
            saveState(`Updated Banner: ${item.title}`);
        }
    } else if (type === 'gallery') {
        const item = state.gallery.find(g => g.id === id);
        if (item) {
            item.title = document.getElementById('editField1').value;
            item.type = document.getElementById('editField2').value;
            item.url = document.getElementById('editField3').value;
            item.desc = document.getElementById('editField4').value;
            saveState(`Updated Gallery Item: ${item.title}`);
        }
    } else if (type === 'review') {
        const item = state.reviews.find(r => r.id === id);
        if (item) {
            item.name = document.getElementById('editField1').value;
            item.location = document.getElementById('editField2').value;
            item.stars = parseInt(document.getElementById('editField3').value);
            item.text = document.getElementById('editField4').value;
            saveState(`Updated Review by ${item.name}`);
        }
    } else if (type === 'heroSlide') {
        const item = state.heroSlides.find(s => s.id === id);
        if (item) {
            item.title = document.getElementById('editField1').value;
            item.url = document.getElementById('editField2').value;
            saveState(`Updated Hero Slide: ${item.title}`);
        }
    }

    closeEditItemModal();
}

function closeEditItemModal() {
    const modal = document.getElementById('editItemModal');
    if (modal) modal.classList.remove('active');
}

// --- FLOATING TOAST NOTIFICATIONS ---
function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast-item ${type}`;
    toast.innerHTML = `
        <i data-lucide="${type === 'success' ? 'check-circle' : type === 'warning' ? 'alert-triangle' : 'info'}"></i>
        <span>${message}</span>
    `;

    container.appendChild(toast);
    if (window.lucide) lucide.createIcons();

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

function dismissWaPopover() {
    const pop = document.getElementById('waPopover');
    if (pop) pop.style.display = 'none';
}

function toggleMobileNav() {
    if (document.body.classList.contains('nav-open')) {
        closeMobileNav();
    } else {
        openMobileNav();
    }
}

function openMobileNav() {
    document.body.classList.add('nav-open');
    const toggle = document.getElementById('navToggle');
    if (toggle) toggle.setAttribute('aria-expanded', 'true');
    const icon = document.getElementById('navToggleIcon');
    if (icon) icon.setAttribute('data-lucide', 'x');
    if (window.lucide) lucide.createIcons();
}

function closeMobileNav() {
    document.body.classList.remove('nav-open');
    const toggle = document.getElementById('navToggle');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
    const icon = document.getElementById('navToggleIcon');
    if (icon) icon.setAttribute('data-lucide', 'menu');
    if (window.lucide) lucide.createIcons();
}
