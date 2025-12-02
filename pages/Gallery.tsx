import React, { useState, useMemo } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { X, Camera, Filter } from 'lucide-react';
import { useScrollAnimation } from '../src/hooks/useScrollAnimation';

type GalleryCategory = 'Food' | 'Place' | 'Ambiance' | 'All';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_IMAGES[0] | null>(null);
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All');

  // Animations
  const headerAnimation = useScrollAnimation({ threshold: 0.1 });

  // Filter images by category
  const filteredImages = useMemo(() => {
    if (activeCategory === 'All') return GALLERY_IMAGES;
    return GALLERY_IMAGES.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  const categories: GalleryCategory[] = ['All', 'Food', 'Place', 'Ambiance'];

  return (
    <div className="pt-24 pb-20 bg-secondary min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header avec animation */}
        <div
          ref={headerAnimation.elementRef}
          className={`text-center mb-12 transition-all duration-1000 ${
            headerAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block text-accent uppercase tracking-widest text-sm font-semibold mb-2">
            Immersion
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-4">
            Galerie Photos
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Découvrez l'ambiance unique du Baobab et la beauté de nos assiettes.
          </p>
        </div>

        {/* Filtres Catégories */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                activeCategory === cat
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 hover:border-accent'
              }`}
            >
              {cat === 'All' && <Filter size={16} />}
              {cat === 'Food' && <Camera size={16} />}
              {cat === 'Place' && <Camera size={16} />}
              {cat === 'Ambiance' && <Camera size={16} />}
              {cat === 'All' ? 'Tout Voir' : cat}
            </button>
          ))}
        </div>

        {/* Compteur de résultats */}
        <div className="text-center mb-8">
          <p className="text-gray-600">
            <span className="font-bold text-accent text-lg">{filteredImages.length}</span>{' '}
            {filteredImages.length > 1 ? 'photos' : 'photo'}
          </p>
        </div>

        {/* Gallery Grid - Masonry Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((img, index) => (
            <div
              key={img.id}
              className="break-inside-avoid relative group rounded-lg overflow-hidden shadow-md hover:shadow-2xl cursor-pointer transition-all duration-300"
              onClick={() => setSelectedImage(img)}
              style={{
                animation: `fadeIn 0.5s ease-out ${index * 0.05}s both`,
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />

              {/* Overlay au hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 w-full">
                  <p className="text-accent font-semibold text-xs uppercase tracking-wider mb-1">
                    {img.category}
                  </p>
                  <h3 className="text-white font-serif text-xl">{img.alt}</h3>
                </div>
              </div>

              {/* Hover indicator */}
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Camera className="text-accent" size={20} />
              </div>
            </div>
          ))}
        </div>

        {/* Note informative */}
        <div className="text-center mt-16 p-8 bg-white border border-gray-100 shadow-sm max-w-3xl mx-auto rounded-lg">
          <Camera className="mx-auto text-accent mb-3" size={32} />
          <p className="text-gray-600 italic text-sm leading-relaxed">
            Toutes nos photos sont prises sur place et reflètent l'authenticité de notre
            établissement. L'ambiance, les plats et le cadre sont fidèles à ce que vous
            découvrirez lors de votre visite.
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-6xl w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-white/20 transition-all shadow-xl hover:scale-110 z-10"
            >
              <X size={28} className="text-white" />
            </button>

            {/* Image */}
            <div className="relative max-h-[90vh] max-w-full">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-h-[90vh] max-w-full h-auto w-auto object-contain rounded-lg shadow-2xl animate-slide-up"
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-8 rounded-b-lg">
                <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-2">
                  {selectedImage.category}
                </p>
                <h2 className="text-white font-serif text-3xl md:text-4xl">
                  {selectedImage.alt}
                </h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;