import { GalleryImage, MenuCategory, MenuItem, Review } from "./types";

export const SITE_INFO = {
  name: "Le Baobab",
  location: "Saly, Sénégal",
  phone: "+221 77 000 00 00",
  email: "contact@lebaobab-saly.com",
  address: "Route de la Plage, Saly Portudal, Mbour",
  openingHours: "Tous les jours : 12h00 - 23h00",
  socials: {
    facebook: "#",
    instagram: "#",
    tripadvisor: "#"
  }
};

export const MENU_ITEMS: MenuItem[] = [
  // Entrées
  {
    id: "e1",
    name: "Carpaccio de Mérou",
    description: "Fines tranches de mérou frais, citron vert, huile d'olive et baies roses.",
    price: "4 500 CFA",
    category: MenuCategory.ENTREES,
    image: "https://images.unsplash.com/photo-1543363363-7e3f8435d878?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "e2",
    name: "Accras de Morue",
    description: "Beignets croustillants à la morue, sauce chien maison.",
    price: "3 000 CFA",
    category: MenuCategory.ENTREES,
    image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "e3",
    name: "Salade Exotique aux Crevettes",
    description: "Crevettes roses, mangue, avocat, pamplemousse et vinaigrette passion.",
    price: "5 000 CFA",
    category: MenuCategory.ENTREES,
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?q=80&w=800&auto=format&fit=crop"
  },

  // Plats Sénégalais
  {
    id: "s1",
    name: "Thiéboudienne Royal (Ceebu Jën)",
    description: "Le plat national. Riz wolof, mérou frais, légumes du marché, tamarin.",
    price: "6 000 CFA",
    category: MenuCategory.PLATS_SENEGALAIS,
    isSpecial: true,
    image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f1a?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "s2",
    name: "Yassa Poulet",
    description: "Poulet mariné au citron et aux oignons caramélisés, riz blanc parfumé.",
    price: "5 500 CFA",
    category: MenuCategory.PLATS_SENEGALAIS,
    image: "https://images.unsplash.com/photo-1643126937409-5a639b787b46?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "s3",
    name: "Maffé d'Agneau",
    description: "Ragoût d'agneau tendre dans une sauce onctueuse à la pâte d'arachide.",
    price: "6 500 CFA",
    category: MenuCategory.PLATS_SENEGALAIS,
    image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?q=80&w=800&auto=format&fit=crop"
  },

  // Fruits de Mer
  {
    id: "f1",
    name: "Langouste Grillée (Selon Arrivage)",
    description: "Langouste fraîche de Saly, beurre maître d'hôtel, légumes sautés.",
    price: "22 000 CFA / kg",
    category: MenuCategory.FRUITS_DE_MER,
    isSpecial: true,
    image: "https://images.unsplash.com/photo-1533682805518-48d1f5d8bab3?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "f2",
    name: "Gambas Géantes Flambées",
    description: "Gambas tigrées flambées au Pastis, riz pilaf.",
    price: "12 000 CFA",
    category: MenuCategory.FRUITS_DE_MER,
    image: "https://images.unsplash.com/photo-1559737558-2f5a3b86e6c7?q=80&w=800&auto=format&fit=crop"
  },

  // Grillades
  {
    id: "g1",
    name: "Côte de Bœuf (pour 2)",
    description: "~1kg de bœuf tendre, grillé au feu de bois. Frites maison et salade.",
    price: "18 000 CFA",
    category: MenuCategory.GRILLADES,
    image: "https://images.unsplash.com/photo-1544025162-d76690b68f11?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "g2",
    name: "Brochettes de Filet de Bœuf",
    description: "Marinade aux épices douces, poivrons et oignons.",
    price: "8 000 CFA",
    category: MenuCategory.GRILLADES,
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=800&auto=format&fit=crop"
  },

  // Desserts
  {
    id: "d1",
    name: "Fondant au Chocolat",
    description: "Cœur coulant, glace vanille de Madagascar.",
    price: "4 000 CFA",
    category: MenuCategory.DESSERTS,
    image: "https://images.unsplash.com/photo-1617305855685-61947b29a39f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "d2",
    name: "Thiakry",
    description: "Dessert sénégalais : couscous de mil, yaourt onctueux, muscade et raisins secs.",
    price: "3 000 CFA",
    category: MenuCategory.DESSERTS,
    isSpecial: true,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=800&auto=format&fit=crop"
  }
];

export const REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Jean-Pierre D.",
    rating: 5,
    text: "Une expérience culinaire inoubliable à Saly. La langouste était cuite à la perfection et le cadre est tout simplement magique.",
    source: "TripAdvisor",
    date: "Octobre 2024"
  },
  {
    id: "r2",
    author: "Aminata F.",
    rating: 5,
    text: "Le meilleur Thiéboudienne de la Petite Côte ! Service impeccable et souriant. Je recommande vivement.",
    source: "Google",
    date: "Septembre 2024"
  },
  {
    id: "r3",
    author: "Mark & Sarah",
    rating: 4.5,
    text: "Great atmosphere, lovely jazz music in the background, and fresh seafood. A must-visit if you are staying in Saly.",
    source: "TripAdvisor",
    date: "Novembre 2024"
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "g1",
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop",
    alt: "Terrasse extérieure",
    category: "Place"
  },
  {
    id: "g2",
    src: "https://images.unsplash.com/photo-1544025162-d76690b68f11?q=80&w=800&auto=format&fit=crop",
    alt: "Grillades",
    category: "Food"
  },
  {
    id: "g3",
    src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop",
    alt: "Cocktails au coucher du soleil",
    category: "Ambiance"
  },
  {
    id: "g4",
    src: "https://images.unsplash.com/photo-1533682805518-48d1f5d8bab3?q=80&w=800&auto=format&fit=crop",
    alt: "Présentation des plats",
    category: "Food"
  },
   {
    id: "g5",
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800&auto=format&fit=crop",
    alt: "Entrée du restaurant",
    category: "Place"
  },
   {
    id: "g6",
    src: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop",
    alt: "Détails de table",
    category: "Ambiance"
  }
];
