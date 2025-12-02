import React from 'react';
import { Heart, Award, Users, Fish } from 'lucide-react';
import { useScrollAnimation } from '../src/hooks/useScrollAnimation';

const About: React.FC = () => {
  // Animations
  const contentAnimation = useScrollAnimation({ threshold: 0.2 });
  const quoteAnimation = useScrollAnimation({ threshold: 0.3 });
  const imagesAnimation = useScrollAnimation({ threshold: 0.1 });
  const valuesAnimation = useScrollAnimation({ threshold: 0.2 });

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Header Image */}
      <div className="container mx-auto px-4 md:px-6 mb-16">
        <div className="h-[40vh] md:h-[50vh] rounded-lg overflow-hidden relative shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1600&auto=format&fit=crop"
            alt="Restaurant interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-center justify-center">
            <h1 className="font-serif text-5xl md:text-7xl text-white font-bold animate-fade-in">
              Notre Histoire
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        {/* Text Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div
            ref={contentAnimation.elementRef}
            className={`md:col-span-8 md:col-start-3 text-center md:text-left space-y-8 transition-all duration-1000 ${
              contentAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">
              Au cœur de Saly, <br />
              <span className="text-accent">une tradition d'excellence.</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Fondé il y a plus de 10 ans, <strong>Le Baobab</strong> est né d'une passion simple :
              celle de partager la richesse des produits sénégalais dans un cadre qui respire
              l'élégance décontractée de la Petite Côte.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Notre philosophie culinaire repose sur trois piliers : la{' '}
              <strong>fraîcheur absolue</strong> de nos fruits de mer, la maîtrise des{' '}
              <strong>cuissons au feu de bois</strong>, et le respect des recettes ancestrales du
              Sénégal.
            </p>
          </div>
        </div>

        {/* Quote avec animation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-8">
          <div
            ref={quoteAnimation.elementRef}
            className={`md:col-span-8 md:col-start-3 transition-all duration-1000 ${
              quoteAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="border-l-4 border-accent pl-6 py-4 my-8 bg-secondary/30 rounded-r-lg">
              <p className="italic text-xl md:text-2xl text-gray-700 font-serif">
                "Nous ne servons pas simplement à manger, nous offrons un morceau de l'âme du
                Sénégal."
              </p>
            </div>
          </div>
        </div>

        {/* Continued text */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-8 md:col-start-3 text-center md:text-left">
            <p className="text-lg text-gray-600 leading-relaxed">
              Le nom "Le Baobab" n'a pas été choisi au hasard. Symbole de longévité et de
              rassemblement en Afrique, il incarne l'esprit de notre établissement : un lieu où l'on
              se retrouve en famille, entre amis ou en amoureux, pour prendre le temps de vivre.
            </p>
          </div>
        </div>

        {/* Nos Valeurs - Section avec icônes */}
        <div
          ref={valuesAnimation.elementRef}
          className={`mt-20 mb-20 transition-all duration-1000 ${
            valuesAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Nos Valeurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Fish size={40} />,
                title: 'Fraîcheur',
                description: 'Produits de la mer livrés chaque matin du port de Mbour',
              },
              {
                icon: <Award size={40} />,
                title: 'Excellence',
                description: 'Cuisson maîtrisée au feu de bois par nos chefs expérimentés',
              },
              {
                icon: <Heart size={40} />,
                title: 'Passion',
                description: 'Amour du terroir sénégalais et de la gastronomie authentique',
              },
              {
                icon: <Users size={40} />,
                title: 'Convivialité',
                description: 'Une ambiance chaleureuse pour partager des moments uniques',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
                style={{
                  animation: valuesAnimation.isVisible
                    ? `fadeIn 0.5s ease-out ${index * 0.1}s both`
                    : 'none',
                }}
              >
                <div className="text-accent mb-4 flex justify-center">{value.icon}</div>
                <h3 className="font-serif text-xl font-bold text-primary mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team / Vibe Images avec animations */}
        <div
          ref={imagesAnimation.elementRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 transition-all duration-1000 ${
            imagesAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative h-96 group overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=800&auto=format&fit=crop"
              alt="Chefs in kitchen"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-white font-serif text-2xl mb-2">L'Art du Feu</h3>
              <p className="text-white/80">Nos maîtres grillardins à l'œuvre.</p>
            </div>
          </div>

          <div className="relative h-96 group overflow-hidden rounded-lg shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1587574293340-e0011c4e8ecf?q=80&w=800&auto=format&fit=crop"
              alt="Fresh seafood"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-white font-serif text-2xl mb-2">De l'Océan à l'Assiette</h3>
              <p className="text-white/80">Arrivages quotidiens du port de Mbour.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 p-12 bg-gradient-to-br from-secondary to-accent/10 rounded-lg shadow-md">
          <h3 className="font-serif text-3xl font-bold text-primary mb-4">
            Venez Découvrir Notre Univers
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Que ce soit pour un déjeuner au bord de l'océan, un dîner romantique ou une célébration
            en famille, Le Baobab vous accueille dans une atmosphère unique.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/menu"
              className="px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-accent transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Découvrir la Carte
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-primary font-semibold rounded-full border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Réserver une Table
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
