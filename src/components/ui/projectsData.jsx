// Import all your project images
import F from '../../assets/F.jpg';
import O from '../../assets/O.jpg';
import D from '../../assets/D.jpg';
import S from '../../assets/S.jpg';
import F1 from '../../assets/F1.jpg';
import C5 from '../../assets/C5.jpg';
import C from '../../assets/C.jpg';
import Bb from '../../assets/Bb.jpeg';
import LL from '../../assets/LL.jpg';
import RR from '../../assets/RR.jpg';
import WW from '../../assets/WW.jpg';
import CC from '../../assets/CC.jpg';
import MM from '../../assets/MM.jpg';

export const projectsData = [
  {
    id: 1,
    title: "Modern Villa Estate",
    category: "Residential",
    location: "East Legon, Accra",
    year: "2024",
    duration: "8 months",
    description: "A luxurious 5-bedroom executive villa featuring contemporary design, premium finishes, and state-of-the-art amenities.",
    image: F,
    features: [
      "5 Bedrooms with ensuite bathrooms",
      "Infinity swimming pool",
      "Smart home automation",
      "Landscaped gardens",
      "Covered parking for 3 cars"
    ],
    budget: "GH200,000 - GH500,000"
  },
  {
    id: 2,
    title: "Executive Office Complex",
    category: "Commercial",
    location: "Airport Residential, Accra",
    year: "2023",
    duration: "12 months",
    description: "Modern 3-story office building with contemporary design, equipped with the latest technology and sustainable features.",
    image: O,
    features: [
      "Open-plan office spaces",
      "Conference facilities",
      "Backup power systems",
      "Parking for 50+ vehicles",
      "Energy-efficient HVAC"
    ],
    budget: "GH1,000,000+"
  },
  {
    id: 3,
    title: "Luxury Family Home",
    category: "Residential",
    location: "Tema, Greater Accra",
    year: "2024",
    duration: "6 months",
    description: "Beautiful family home with spacious rooms, modern kitchen, and entertainment areas designed for comfortable living.",
    image: D,
    features: [
      "4 Bedrooms with walk-in closets",
      "Modern fitted kitchen",
      "Family lounge and TV room",
      "Outdoor entertainment area",
      "Security features"
    ],
    budget: "GH300,000 - GH500,000"
  },
  {
    id: 4,
    title: "Shopping Center",
    category: "Commercial",
    location: "Madina, Accra",
    year: "2023",
    duration: "15 months",
    description: "Contemporary shopping complex featuring retail spaces, restaurants, and entertainment facilities.",
    image: S,
    features: [
      "20+ retail units",
      "Food court area",
      "Ample parking space",
      "24/7 security",
      "Modern facade design"
    ],
    budget: "GH2,000,000+"
  },
  {
    id: 5,
    title: "Contemporary Residence",
    category: "Residential",
    location: "Spintex, Accra",
    year: "2024",
    duration: "7 months",
    description: "Elegant duplex with modern architectural design, perfect blend of luxury and functionality.",
    image: F1,
    features: [
      "4 Bedrooms across two floors",
      "Study/home office",
      "Balconies with city views",
      "Premium bathroom fixtures",
      "Gated compound"
    ],
    budget: "GH400,000 - GH600,000"
  },
  {
    id: 6,
    title: "Corporate Headquarters",
    category: "Commercial",
    location: "Cantonments, Accra",
    year: "2023",
    duration: "14 months",
    description: "State-of-the-art corporate headquarters with modern amenities and sustainable design features.",
    image: C5,
    features: [
      "Executive offices",
      "Board room facilities",
      "Staff cafeteria",
      "Underground parking",
      "Green building features"
    ],
    budget: "GH1,500,000+"
  },
  {
    id: 7,
    title: "Boutique Hotel",
    category: "Hospitality",
    location: "Labone, Accra",
    year: "2022",
    duration: "18 months",
    description: "Stylish boutique hotel with 20 rooms, restaurant, and conference facilities designed for business and leisure travelers.",
    image: Bb,
    features: [
      "20 deluxe rooms",
      "Restaurant and bar",
      "Conference hall",
      "Rooftop terrace",
      "Swimming pool"
    ],
    budget: "GH1,200,000+"
  },
  {
    id: 8,
    title: "Residential Compound",
    category: "Residential",
    location: "Achimota, Accra",
    year: "2024",
    duration: "10 months",
    description: "Gated residential compound with 6 semi-detached houses featuring modern design and shared amenities.",
    image: RR,
    features: [
      "6 semi-detached units",
      "Central green space",
      "Shared security",
      "Underground utilities",
      "Modern architecture"
    ],
    budget: "GH1,000,000+"
  },
  {
    id: 9,
    title: "Medical Clinic",
    category: "Healthcare",
    location: "Osu, Accra",
    year: "2023",
    duration: "9 months",
    description: "Modern medical clinic with specialized treatment rooms, diagnostic facilities, and patient-friendly design.",
    image: CC,
    features: [
      "10 consultation rooms",
      "Diagnostic laboratory",
      "Pharmacy",
      "Waiting areas",
      "Accessible design"
    ],
    budget: "GH600,000 - GH800,000"
  },
  {
    id: 10,
    title: "Luxury Apartments",
    category: "Residential",
    location: "Roman Ridge, Accra",
    year: "2023",
    duration: "16 months",
    description: "Premium apartment complex with 12 units, rooftop amenities, and stunning city views.",
    image: LL,
    features: [
      "12 luxury apartments",
      "Rooftop pool & gym",
      "Concierge service",
      "Secure parking",
      "Smart building systems"
    ],
    budget: "GH2,000,000+"
  },
  {
    id: 11,
    title: "Warehouse Facility",
    category: "Industrial",
    location: "Tema Industrial Area",
    year: "2024",
    duration: "11 months",
    description: "Large-scale warehouse facility with modern loading bays, storage systems, and office spaces.",
    image: WW,
    features: [
      "5000 sqm storage space",
      "Loading docks",
      "Administrative offices",
      "Security systems",
      "Paved yard area"
    ],
    budget: "GH800,000+"
  },
  {
    id: 12,
    title: "Community Center",
    category: "Public",
    location: "Dansoman, Accra",
    year: "2023",
    duration: "10 months",
    description: "Multi-purpose community center with sports facilities, meeting halls, and recreational spaces.",
    image: MM,
    features: [
      "Multipurpose hall",
      "Sports facilities",
      "Meeting rooms",
      "Outdoor playground",
      "Parking area"
    ],
    budget: "GH500,000 - GH700,000"
  }
];

// Helper functions
export const getProjectsByCategory = (category) => {
  if (category === 'All') return projectsData;
  return projectsData.filter(project => project.category === category);
};

export const getAllCategories = () => {
  const categories = [...new Set(projectsData.map(project => project.category))];
  return ['All', ...categories.sort()];
};

export const getProjectById = (id) => {
  return projectsData.find(project => project.id === parseInt(id));
};