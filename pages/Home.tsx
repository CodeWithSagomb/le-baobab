import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Star,
  ChefHat,
  Fish,
  Utensils,
  MapPin,
  Users,
  Award,
  Clock,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { MENU_ITEMS, REVIEWS, SITE_INFO } from '../constants';
import { useScrollAnimation } from '../src/hooks/useScrollAnimation';
import { useCountUp } from '../src/hooks/useCountUp';
import { useParallax } from '../src/hooks/useParallax';

const Home: React.FC = () => {
  const specials = MENU_ITEMS.filter((item) => item.isSpecial).slice(0, 3);
  const parallaxOffset = useParallax(0.5);

  // Carrousel avis clients
  const [currentReview, setCurrentReview] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-play carrousel
  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % REVIEWS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % REVIEWS.length);
    setIsAutoPlay(false);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
    setIsAutoPlay(false);
  };

  // Animations au scroll
  const statsAnimation = useScrollAnimation({ threshold: 0.3 });
  const specialtiesAnimation = useScrollAnimation({ threshold: 0.2 });
  const philosophyAnimation = useScrollAnimation({ threshold: 0.2 });

  // Compteurs statistiques
  const yearsCount = useCountUp({ end: 8, duration: 2000, isActive: statsAnimation.isVisible });
  const dishesCount = useCountUp({
    end: 150,
    duration: 2000,
    isActive: statsAnimation.isVisible,
  });
  const chefCount = useCountUp({ end: 12, duration: 2000, isActive: statsAnimation.isVisible });
  const reviewsCount = useCountUp({
    end: 500,
    duration: 2500,
    isActive: statsAnimation.isVisible,
  });

  return (
    <div className="flex flex-col">
      {/* Hero Section avec Parallax */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        {/* Background Image avec effet Parallax */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-200"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1920&auto=format&fit=crop")',
            transform: `translateY(${parallaxOffset}px)`,
          }}
        >
          <div className="absolute inset-0 bg-black/40 md:bg-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 animate-fade-in">
          <span className="inline-block py-1 px-3 border border-white/30 rounded-full text-white/90 text-sm tracking-widest mb-4 uppercase backdrop-blur-sm hover:bg-white/10 transition-all">
            Bienvenue à Saly
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-6 leading-tight animate-slide-up">
            Le Baobab
          </h1>
          <p className="text-lg md:text-2xl text-white/90 font-light max-w-2xl mx-auto mb-10 tracking-wide">
            L'incontournable de la côte sénégalaise. <br className="hidden md:block" />
            Une fusion de grillades, fruits de mer et traditions locales.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Link
              to="/menu"
              className="group px-8 py-4 bg-white text-primary text-lg font-semibold rounded-sm hover:bg-gray-100 transition-all duration-300 w-full md:w-auto hover:scale-105 hover:shadow-2xl"
            >
              <span className="inline-flex items-center">
                VOIR LE MENU
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={20}
                />
              </span>
            </Link>
            <Link
              to="/contact"
              className="group px-8 py-4 bg-accent/90 backdrop-blur-sm text-white text-lg font-semibold rounded-sm hover:bg-accent transition-all duration-300 w-full md:w-auto hover:scale-105 hover:shadow-2xl"
            >
              RÉSERVER UNE TABLE
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Statistiques Animées */}
      <section
        ref={statsAnimation.elementRef}
        className={`py-16 bg-primary text-white transition-all duration-1000 ${
          statsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-accent mb-2">{yearsCount}+</div>
              <div className="text-gray-300 text-sm md:text-base">Années d'excellence</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-accent mb-2">{dishesCount}+</div>
              <div className="text-gray-300 text-sm md:text-base">Plats au menu</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-accent mb-2">{chefCount}</div>
              <div className="text-gray-300 text-sm md:text-base">Chefs talentueux</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-accent mb-2">{reviewsCount}+</div>
              <div className="text-gray-300 text-sm md:text-base">Clients satisfaits</div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro / Philosophy avec animation */}
      <section ref={philosophyAnimation.elementRef} className="py-20 md:py-32 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div
              className={`order-2 md:order-1 relative transition-all duration-1000 ${
                philosophyAnimation.isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-accent opacity-50 animate-pulse"></div>
              <img
                src="/images/home/philosophy/philosophie.jpg"
                alt="Chef preparing food"
                className="w-full h-[500px] object-cover rounded-sm shadow-2xl hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-accent opacity-50 animate-pulse"></div>
            </div>
            <div
              className={`order-1 md:order-2 space-y-6 transition-all duration-1000 delay-300 ${
                philosophyAnimation.isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-10'
              }`}
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">
                Une expérience <span className="text-accent">Authentique</span>
              </h2>
              <div className="w-20 h-1 bg-accent"></div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Situé au cœur de Saly, Le Baobab n'est pas qu'un simple restaurant, c'est une
                invitation au voyage. Nous sélectionnons chaque matin nos poissons directement
                auprès des pêcheurs locaux de Mbour.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Nos grillades au feu de bois et nos recettes sénégalaises traditionnelles sont
                préparées avec passion pour vous offrir un moment de partage inoubliable.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-6">
                {[
                  { icon: Fish, label: 'Pêche Locale' },
                  { icon: Utensils, label: 'Grillades' },
                  { icon: ChefHat, label: 'Fait Maison' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-white shadow-sm rounded-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
                  >
                    <item.icon
                      className="mx-auto text-accent mb-2 group-hover:scale-110 transition-transform"
                      size={32}
                    />
                    <span className="font-semibold text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Highlight avec animation */}
      <section ref={specialtiesAnimation.elementRef} className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              specialtiesAnimation.isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <h3 className="font-serif text-4xl font-bold mb-4">Nos Spécialités</h3>
            <p className="text-gray-500 max-w-lg mx-auto">
              Des plats signatures qui font la renommée du Baobab.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specials.map((item, index) => (
              <div
                key={item.id}
                className={`group cursor-pointer transition-all duration-700 ${
                  specialtiesAnimation.isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden rounded-sm shadow-lg mb-6 h-80 hover:shadow-2xl transition-shadow duration-300">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.src =
                          'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop';
                      }}
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                      <ChefHat className="text-accent/40" size={80} />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-white font-medium flex items-center">
                      Voir le menu complet
                      <ArrowRight className="ml-2" size={16} />
                    </span>
                  </div>
                  {/* Badge spécial */}
                  <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    Spécialité
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="font-serif text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-gray-500 mb-3">{item.description}</p>
                  <span className="text-accent font-semibold text-lg">{item.price}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/menu"
              className="group inline-flex items-center space-x-2 text-primary hover:text-accent font-semibold border-b-2 border-accent pb-1 transition-colors"
            >
              <span>DÉCOUVRIR TOUTE LA CARTE</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section - Carrousel */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at center, #d97706 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        ></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h3 className="font-serif text-4xl font-bold mb-4">Ce qu'ils en disent</h3>
            <div className="flex justify-center text-accent space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill="currentColor" size={24} />
              ))}
            </div>
          </div>

          {/* Carrousel */}
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentReview * 100}%)` }}
              >
                {REVIEWS.map((review) => (
                  <div key={review.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-sm border border-white/10">
                      <div className="mb-6">
                        <div className="flex justify-center text-accent mb-4">
                          {[...Array(Math.floor(review.rating))].map((_, i) => (
                            <Star key={i} size={20} fill="currentColor" />
                          ))}
                        </div>
                        <p className="text-xl md:text-2xl italic text-gray-200 leading-relaxed text-center">
                          "{review.text}"
                        </p>
                      </div>
                      <div className="flex flex-col items-center mt-8 border-t border-white/10 pt-6">
                        <span className="font-bold font-serif text-xl">{review.author}</span>
                        <div className="text-sm text-gray-400 mt-2">
                          <span>{review.source}</span>
                          <span className="mx-2">•</span>
                          <span>{review.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Boutons navigation */}
            <button
              onClick={prevReview}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-full transition-all hover:scale-110"
              aria-label="Avis précédent"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextReview}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white/10 hover:bg-white/20 backdrop-blur-md p-3 rounded-full transition-all hover:scale-110"
              aria-label="Avis suivant"
            >
              <ChevronRight size={24} />
            </button>

            {/* Indicateurs */}
            <div className="flex justify-center gap-2 mt-8">
              {REVIEWS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentReview(index);
                    setIsAutoPlay(false);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    index === currentReview ? 'w-8 bg-accent' : 'w-2 bg-white/30'
                  }`}
                  aria-label={`Aller à l'avis ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Google Maps Améliorée */}
      <section className="h-96 md:h-[500px] w-full relative group">
        {/* Placeholder Map avec gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
          <div className="text-center space-y-4">
            <MapPin className="mx-auto text-accent" size={48} />
            <p className="text-gray-600 font-medium">Google Maps sera intégré ici</p>
            <p className="text-gray-500 text-sm">Configuration API requise</p>
          </div>
        </div>

        {/* Card informations */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="bg-white p-8 shadow-2xl rounded-sm max-w-md w-full mx-4 text-center pointer-events-auto hover:scale-105 transition-transform duration-300">
            <div className="inline-block p-4 bg-accent/10 rounded-full mb-4">
              <MapPin className="text-accent" size={32} />
            </div>
            <h4 className="font-serif text-2xl font-bold mb-2">Nous trouver</h4>
            <p className="text-gray-600 mb-4">{SITE_INFO.address}</p>
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-6">
              <Clock size={16} />
              <span>{SITE_INFO.openingHours}</span>
            </div>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-sm hover:bg-accent transition-all duration-300 hover:shadow-xl"
            >
              Réserver maintenant
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
