export type Property = {
  id: string;
  slug: string;
  title: string;
  location: string;
  city: string;
  price: number;
  status: "For Sale" | "For Rent" | "Sold";
  type: "Villa" | "Apartment" | "Penthouse" | "Townhouse" | "Studio";
  beds: number;
  baths: number;
  area: number; // sqft
  year: number;
  featured?: boolean;
  image: string;
  gallery: string[];
  description: string;
};

export const properties: Property[] = [
  {
    id: "001",
    slug: "azure-ridge-villa",
    title: "Azure Ridge Villa",
    location: "Hilltop Drive, Sector F-7",
    city: "Islamabad",
    price: 285000,
    status: "For Sale",
    type: "Villa",
    beds: 5,
    baths: 4,
    area: 4200,
    year: 2023,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=1600&auto=format&fit=crop",
    ],
    description:
      "A sun-soaked hillside villa with private pool, floor-to-ceiling glazing, and uninterrupted valley views.",
  },
  {
    id: "002",
    slug: "marina-bay-penthouse",
    title: "Marina Bay Penthouse",
    location: "Clifton Waterfront",
    city: "Karachi",
    price: 410000,
    status: "For Sale",
    type: "Penthouse",
    beds: 4,
    baths: 3,
    area: 3600,
    year: 2022,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1600&auto=format&fit=crop",
    ],
    description:
      "Top-floor residence wrapped in glass with 270-degree sea views and a private rooftop terrace.",
  },
  {
    id: "003",
    slug: "the-linden-townhouse",
    title: "The Linden Townhouse",
    location: "DHA Phase 6",
    city: "Lahore",
    price: 165000,
    status: "For Sale",
    type: "Townhouse",
    beds: 3,
    baths: 3,
    area: 2400,
    year: 2021,
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1600&auto=format&fit=crop",
    ],
    description:
      "A quiet, tree-lined townhouse with a private courtyard and warm oak interiors throughout.",
  },
  {
    id: "004",
    slug: "onyx-tower-studio",
    title: "Onyx Tower Studio",
    location: "Blue Area",
    city: "Islamabad",
    price: 72000,
    status: "For Rent",
    type: "Studio",
    beds: 1,
    baths: 1,
    area: 620,
    year: 2024,
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1600&auto=format&fit=crop",
    ],
    description:
      "A compact, efficient city studio designed for modern living with skyline views.",
  },
  {
    id: "005",
    slug: "cedar-court-apartment",
    title: "Cedar Court Apartment",
    location: "Gulberg III",
    city: "Lahore",
    price: 95000,
    status: "For Sale",
    type: "Apartment",
    beds: 2,
    baths: 2,
    area: 1350,
    year: 2020,
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1600&auto=format&fit=crop",
    ],
    description:
      "Bright corner apartment with a wraparound balcony overlooking the boulevard.",
  },
  {
    id: "006",
    slug: "highland-grove-villa",
    title: "Highland Grove Villa",
    location: "Bahria Enclave",
    city: "Islamabad",
    price: 340000,
    status: "For Sale",
    type: "Villa",
    beds: 6,
    baths: 5,
    area: 5100,
    year: 2023,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1600&auto=format&fit=crop",
    ],
    description:
      "An expansive family estate set behind private hedgerows with a full outdoor kitchen and pool deck.",
  },
  {
    id: "007",
    slug: "riverside-loft",
    title: "Riverside Loft",
    location: "Sector F-10",
    city: "Islamabad",
    price: 128000,
    status: "For Rent",
    type: "Apartment",
    beds: 2,
    baths: 2,
    area: 1580,
    year: 2022,
    image:
      "https://images.unsplash.com/photo-1594484208280-efa00f96fc21?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1594484208280-efa00f96fc21?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560184611-ff3e53f00e8f?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=1600&auto=format&fit=crop",
    ],
    description:
      "An industrial-edge loft with exposed beams, tall windows, and river views at dusk.",
  },
  {
    id: "008",
    slug: "sapphire-heights-penthouse",
    title: "Sapphire Heights Penthouse",
    location: "Emaar Crescent Bay",
    city: "Karachi",
    price: 520000,
    status: "For Sale",
    type: "Penthouse",
    beds: 5,
    baths: 5,
    area: 4800,
    year: 2024,
    image:
      "https://images.unsplash.com/photo-1594484208280-efa00f96fc21?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1594484208280-efa00f96fc21?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560184611-ff3e53f00e8f?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=1600&auto=format&fit=crop",
    ],
    description:
      "The city's most exclusive address — a duplex penthouse with a private elevator and infinity pool.",
  },
  {
    id: "009",
    slug: "willow-park-townhouse",
    title: "Willow Park Townhouse",
    location: "Model Town",
    city: "Lahore",
    price: 148000,
    status: "For Sale",
    type: "Townhouse",
    beds: 3,
    baths: 2,
    area: 2100,
    year: 2021,
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1600&auto=format&fit=crop",
    ],
    description:
      "A family-friendly townhouse steps from the park with a sunlit kitchen and finished basement.",
  },
  {
    id: "010",
    slug: "clifton-crest-apartment",
    title: "Clifton Crest Apartment",
    location: "Khayaban-e-Roomi",
    city: "Karachi",
    price: 110000,
    status: "For Rent",
    type: "Apartment",
    beds: 3,
    baths: 2,
    area: 1720,
    year: 2022,
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1600&auto=format&fit=crop",
    ],
    description:
      "A breezy corner apartment near the sea, freshly renovated with a modern open kitchen.",
  },
  {
    id: "011",
    slug: "margalla-view-villa",
    title: "Margalla View Villa",
    location: "Sector E-7",
    city: "Islamabad",
    price: 395000,
    status: "For Sale",
    type: "Villa",
    beds: 5,
    baths: 5,
    area: 4600,
    year: 2024,
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1600&auto=format&fit=crop",
    ],
    description:
      "Framed by the Margalla Hills, this residence pairs stone facades with warm minimalist interiors.",
  },
  {
    id: "012",
    slug: "garden-town-studio",
    title: "Garden Town Studio",
    location: "Garden Town",
    city: "Lahore",
    price: 48000,
    status: "For Rent",
    type: "Studio",
    beds: 1,
    baths: 1,
    area: 540,
    year: 2023,
    image:
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1600&auto=format&fit=crop",
    ],
    description:
      "A tidy, light-filled studio ideal for young professionals, close to cafes and transit.",
  },
  {
    id: "013",
    slug: "seaview-terraces-penthouse",
    title: "Seaview Terraces Penthouse",
    location: "DHA Phase 8",
    city: "Karachi",
    price: 475000,
    status: "For Sale",
    type: "Penthouse",
    beds: 4,
    baths: 4,
    area: 4100,
    year: 2023,
    image:
      "https://images.unsplash.com/photo-1600566752229-250ed79470f8?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600566752229-250ed79470f8?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?q=80&w=1600&auto=format&fit=crop",
    ],
    description:
      "Wraparound terraces and a private plunge pool make this the address the city talks about.",
  },
  {
    id: "014",
    slug: "bahria-greens-townhouse",
    title: "Bahria Greens Townhouse",
    location: "Bahria Town Phase 4",
    city: "Islamabad",
    price: 132000,
    status: "For Sale",
    type: "Townhouse",
    beds: 3,
    baths: 3,
    area: 2050,
    year: 2020,
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1600&auto=format&fit=crop",
    ],
    description:
      "A gated-community townhouse with a shared park view and a freshly landscaped front garden.",
  },
  {
    id: "015",
    slug: "defence-square-apartment",
    title: "Defence Square Apartment",
    location: "DHA Phase 2",
    city: "Lahore",
    price: 88000,
    status: "For Rent",
    type: "Apartment",
    beds: 2,
    baths: 2,
    area: 1280,
    year: 2021,
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1600&auto=format&fit=crop",
    ],
    description:
      "A well-kept apartment on a tree-lined street, walking distance to markets and parks.",
  },
  {
    id: "016",
    slug: "emaar-crescent-villa",
    title: "Emaar Crescent Villa",
    location: "Emaar Canyon Views",
    city: "Karachi",
    price: 360000,
    status: "For Sale",
    type: "Villa",
    beds: 5,
    baths: 4,
    area: 4400,
    year: 2024,
    image:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1600&auto=format&fit=crop",
    ],
    description:
      "Set along the canyon promenade, this villa brings resort-style living to the city.",
  },
];

export const cities = Array.from(new Set(properties.map((p) => p.city)));
export const types = Array.from(new Set(properties.map((p) => p.type)));
