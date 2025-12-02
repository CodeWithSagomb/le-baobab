import React, { useState, useMemo } from 'react';
import { MENU_ITEMS } from '../constants';
import { MenuCategory, MenuItem } from '../types';
import { Search, X, ChefHat, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../src/hooks/useScrollAnimation';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory | 'TOUT'>('TOUT');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  // Animations
  const headerAnimation = useScrollAnimation({ threshold: 0.1 });

  // Filtrage combiné (catégorie + recherche)
  const filteredItems = useMemo(() => {
    let items = MENU_ITEMS;

    // Filtrer par catégorie
    if (activeCategory !== 'TOUT') {
      items = items.filter((item) => item.category === activeCategory);
    }

    // Filtrer par recherche
    if (searchTerm.trim()) {
      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return items;
  }, [activeCategory, searchTerm]);

  const categories = Object.values(MenuCategory);

  return (
    <div className="pt-24 pb-20 min-h-screen bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header avec animation */}
        <div
          ref={headerAnimation.elementRef}
          className={`text-center mb-12 transition-all duration-1000 ${
            headerAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block text-accent uppercase tracking-widest text-sm font-semibold mb-2">
            Le Goût de Saly
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-4">
            Notre Carte
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Une cuisine fraîche et généreuse, mettant à l'honneur les produits de la mer et le
            terroir sénégalais.
          </p>
        </div>

        {/* Barre de Recherche */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Rechercher un plat (ex: Thiéboudienne, poulet, langouste...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-12 py-4 rounded-full border-2 border-gray-200 focus:border-accent focus:outline-none transition-all text-gray-700 placeholder-gray-400"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-accent transition-colors"
              >
                <X size={20} />
              </button>
            )}
          </div>
        </div>

        {/* Filtres Catégories */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setActiveCategory('TOUT')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === 'TOUT'
                ? 'bg-primary text-white shadow-lg scale-105'
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 hover:border-accent'
            }`}
          >
            Tout Voir
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 hover:border-accent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Compteur de résultats */}
        <div className="text-center mb-8">
          <p className="text-gray-600">
            <span className="font-bold text-accent text-lg">{filteredItems.length}</span>{' '}
            {filteredItems.length > 1 ? 'plats trouvés' : 'plat trouvé'}
          </p>
        </div>

        {/* Menu Grid - Affichage avec grandes images */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer hover:-translate-y-2"
                onClick={() => setSelectedItem(item)}
                style={{
                  animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`,
                }}
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.src =
                          'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop';
                      }}
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                      <ChefHat className="text-accent/40" size={60} />
                    </div>
                  )}

                  {/* Overlay au hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold bg-accent px-4 py-2 rounded-full">
                      Voir les détails
                    </span>
                  </div>

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    {item.isSpecial && (
                      <span className="inline-flex items-center gap-1 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        <Sparkles size={12} />
                        Recommandé
                      </span>
                    )}
                  </div>

                  {/* Prix badge */}
                  <div className="absolute bottom-3 right-3">
                    <span className="bg-white/95 backdrop-blur-sm text-primary px-4 py-2 rounded-full font-bold shadow-lg">
                      {item.price}
                    </span>
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-5">
                  <div className="mb-2">
                    <span className="text-xs uppercase tracking-wide text-accent font-semibold">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Aucun résultat
          <div className="text-center py-20">
            <ChefHat className="mx-auto text-gray-300 mb-4" size={80} />
            <h3 className="text-2xl font-serif font-bold text-gray-400 mb-2">
              Aucun plat trouvé
            </h3>
            <p className="text-gray-500 mb-6">
              Essayez avec d'autres mots-clés ou changez de catégorie
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('TOUT');
              }}
              className="px-6 py-3 bg-accent text-white rounded-full hover:bg-accent/90 transition-colors"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}

        {/* Note informative */}
        <div className="text-center mt-16 p-8 bg-white border border-gray-100 shadow-sm max-w-3xl mx-auto rounded-lg">
          <p className="text-gray-600 italic text-sm leading-relaxed">
            * Nos plats sont préparés à la commande pour garantir une fraîcheur optimale. Les
            prix sont indiqués en Francs CFA. Taxes et service compris. Veuillez nous informer de
            toute allergie alimentaire.
          </p>
        </div>
      </div>

      {/* Modal de détails */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="relative h-72 md:h-96 overflow-hidden rounded-t-xl">
              {selectedItem.image ? (
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                  <ChefHat className="text-accent/40" size={100} />
                </div>
              )}

              {/* Close button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all shadow-lg hover:scale-110"
              >
                <X size={24} className="text-primary" />
              </button>

              {/* Badges */}
              {selectedItem.isSpecial && (
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1 bg-accent text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    <Sparkles size={16} />
                    Recommandé
                  </span>
                </div>
              )}
            </div>

            {/* Contenu */}
            <div className="p-8">
              <div className="mb-4">
                <span className="text-sm uppercase tracking-wider text-accent font-semibold">
                  {selectedItem.category}
                </span>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
                {selectedItem.name}
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {selectedItem.description}
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <div>
                  <span className="text-sm text-gray-500 block mb-1">Prix</span>
                  <span className="text-3xl font-bold text-accent">{selectedItem.price}</span>
                </div>

                <a
                  href="/contact"
                  className="px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-accent transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  Commander
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
