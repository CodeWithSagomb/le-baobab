export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string; // Using string for formatted price like "8 500 CFA"
  category: MenuCategory;
  image?: string;
  isSpecial?: boolean;
}

export enum MenuCategory {
  ENTREES = "Entrées",
  PLATS_SENEGALAIS = "Plats Sénégalais",
  FRUITS_DE_MER = "Fruits de Mer",
  GRILLADES = "Grillades & BBQ",
  POISSONS = "Poissons",
  DESSERTS = "Desserts",
  BOISSONS = "Boissons",
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  source: 'TripAdvisor' | 'Google';
  date: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'Food' | 'Ambiance' | 'Place';
}
