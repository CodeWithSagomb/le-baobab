import { GalleryImage, MenuCategory, MenuItem, Review } from './types';

export const SITE_INFO = {
  name: 'Le Baobab',
  location: 'Saly, Sénégal',
  phone: '+221 77 000 00 00',
  email: 'contact@lebaobab-saly.com',
  address: 'Route de la Plage, Saly Portudal, Mbour',
  openingHours: 'Tous les jours : 12h00 - 23h00',
  socials: {
    facebook: '#',
    instagram: '#',
    tripadvisor: '#',
  },
};

export const MENU_ITEMS: MenuItem[] = [
  // Entrées
  {
    id: 'e1',
    name: 'Carpaccio de Mérou',
    description: "Fines tranches de mérou frais, citron vert, huile d'olive et baies roses.",
    price: '4 500 CFA',
    category: MenuCategory.ENTREES,
    image:
      'https://images.unsplash.com/photo-1543363363-7e3f8435d878?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'e2',
    name: 'Accras de Morue',
    description: 'Beignets croustillants à la morue, sauce chien maison.',
    price: '3 000 CFA',
    category: MenuCategory.ENTREES,
    image:
      'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'e3',
    name: 'Salade Exotique aux Crevettes',
    description: 'Crevettes roses, mangue, avocat, pamplemousse et vinaigrette passion.',
    price: '5 000 CFA',
    category: MenuCategory.ENTREES,
    image:
      'https://images.unsplash.com/photo-1546793665-c74683f339c1?q=80&w=800&auto=format&fit=crop',
  },

  // Plats Sénégalais
  {
    id: 's1',
    name: 'Thiéboudienne Royal (Ceebu Jën)',
    description: 'Le plat national. Riz wolof, mérou frais, légumes du marché, tamarin.',
    price: '6 000 CFA',
    category: MenuCategory.PLATS_SENEGALAIS,
    isSpecial: true,
    image: '/images/home/specialties/img1.jpeg',
  },
  {
    id: 's2',
    name: 'Yassa Poulet',
    description: 'Poulet mariné au citron et aux oignons caramélisés, riz blanc parfumé.',
    price: '5 500 CFA',
    category: MenuCategory.PLATS_SENEGALAIS,
    image:
      'https://images.unsplash.com/photo-1643126937409-5a639b787b46?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 's3',
    name: "Maffé d'Agneau",
    description: "Ragoût d'agneau tendre dans une sauce onctueuse à la pâte d'arachide.",
    price: '6 500 CFA',
    category: MenuCategory.PLATS_SENEGALAIS,
    image:
      'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?q=80&w=800&auto=format&fit=crop',
  },

  // Fruits de Mer
  {
    id: 'f1',
    name: 'Langouste Grillée (Selon Arrivage)',
    description: "Langouste fraîche de Saly, beurre maître d'hôtel, légumes sautés.",
    price: '22 000 CFA / kg',
    category: MenuCategory.FRUITS_DE_MER,
    isSpecial: true,
    image: '/images/home/specialties/plateau-de-fruits-de.jpg',
  },
  {
    id: 'f2',
    name: 'Gambas Géantes Flambées',
    description: 'Gambas tigrées flambées au Pastis, riz pilaf.',
    price: '12 000 CFA',
    category: MenuCategory.FRUITS_DE_MER,
    image:
      'https://images.unsplash.com/photo-1559737558-2f5a3b86e6c7?q=80&w=800&auto=format&fit=crop',
  },

  // Grillades
  {
    id: 'g1',
    name: 'Côte de Bœuf (pour 2)',
    description: '~1kg de bœuf tendre, grillé au feu de bois. Frites maison et salade.',
    price: '18 000 CFA',
    category: MenuCategory.GRILLADES,
    image:
      'https://images.unsplash.com/photo-1544025162-d76690b68f11?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'g2',
    name: 'Brochettes de Filet de Bœuf',
    description: 'Marinade aux épices douces, poivrons et oignons.',
    price: '8 000 CFA',
    category: MenuCategory.GRILLADES,
    image:
      'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=800&auto=format&fit=crop',
  },

  // Desserts
  {
    id: 'd1',
    name: 'Fondant au Chocolat',
    description: 'Cœur coulant, glace vanille de Madagascar.',
    price: '4 000 CFA',
    category: MenuCategory.DESSERTS,
    image:
      'https://images.unsplash.com/photo-1617305855685-61947b29a39f?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'd2',
    name: 'Thiakry',
    description: 'Dessert sénégalais : couscous de mil, yaourt onctueux, muscade et raisins secs.',
    price: '3 000 CFA',
    category: MenuCategory.DESSERTS,
    isSpecial: true,
    image: '/images/home/specialties/plat05.jpg',
  },
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Jean-Pierre D.',
    rating: 5,
    text: 'Une expérience culinaire inoubliable à Saly. La langouste était cuite à la perfection et le cadre est tout simplement magique.',
    source: 'TripAdvisor',
    date: 'Octobre 2024',
  },
  {
    id: 'r2',
    author: 'Aminata F.',
    rating: 5,
    text: 'Le meilleur Thiéboudienne de la Petite Côte ! Service impeccable et souriant. Je recommande vivement.',
    source: 'Google',
    date: 'Septembre 2024',
  },
  {
    id: 'r3',
    author: 'Mark & Sarah',
    rating: 4.5,
    text: 'Great atmosphere, lovely jazz music in the background, and fresh seafood. A must-visit if you are staying in Saly.',
    source: 'TripAdvisor',
    date: 'Novembre 2024',
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  // Restaurant & Place
  {
    id: 'g1',
    src: '/images/gallery/restaurant/accueil01.jpg',
    alt: 'Entrée du restaurant Le Baobab',
    category: 'Place',
  },
  {
    id: 'g2',
    src: '/images/gallery/restaurant/hero-principal.jpg',
    alt: 'Vue extérieure du restaurant',
    category: 'Place',
  },
  {
    id: 'g3',
    src: '/images/gallery/restaurant/langouste02 (2).jpg',
    alt: 'Espace extérieur',
    category: 'Place',
  },
  {
    id: 'g4',
    src: '/images/gallery/restaurant/unnamed.webp',
    alt: 'Terrasse du restaurant',
    category: 'Place',
  },

  // Food - Dishes
  {
    id: 'g5',
    src: '/images/gallery/dishes/plat05.jpg',
    alt: 'Spécialité de la maison',
    category: 'Food',
  },
  {
    id: 'g6',
    src: '/images/gallery/dishes/plat06.jpg',
    alt: 'Plat gastronomique',
    category: 'Food',
  },
  {
    id: 'g7',
    src: '/images/gallery/dishes/plat09.jpg',
    alt: 'Délice culinaire',
    category: 'Food',
  },
  {
    id: 'g8',
    src: '/images/gallery/dishes/plat10.jpg',
    alt: 'Création du chef',
    category: 'Food',
  },
  {
    id: 'g9',
    src: '/images/gallery/dishes/barbecue03 (1).jpg',
    alt: 'Grillades au barbecue',
    category: 'Food',
  },
  {
    id: 'g10',
    src: '/images/gallery/dishes/cocktail01.jpg',
    alt: 'Cocktails maison',
    category: 'Food',
  },

  // Ambiance
  {
    id: 'g11',
    src: '/images/gallery/ambiance/barbecue01.jpg',
    alt: 'Grillades au feu de bois',
    category: 'Ambiance',
  },
  {
    id: 'g12',
    src: '/images/gallery/ambiance/barbecue02.jpg',
    alt: 'Cuisson au barbecue',
    category: 'Ambiance',
  },
  {
    id: 'g13',
    src: '/images/gallery/ambiance/client01.jpg',
    alt: 'Clients profitant de leur repas',
    category: 'Ambiance',
  },
  {
    id: 'g14',
    src: '/images/gallery/ambiance/client02.jpg',
    alt: 'Ambiance conviviale',
    category: 'Ambiance',
  },
  {
    id: 'g15',
    src: '/images/gallery/ambiance/client03.jpg',
    alt: 'Moments de partage',
    category: 'Ambiance',
  },
  {
    id: 'g16',
    src: '/images/gallery/ambiance/langouste01.jpg',
    alt: 'Préparation langouste',
    category: 'Ambiance',
  },
];
