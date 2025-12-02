import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle, Loader2 } from 'lucide-react';
import { SITE_INFO } from '../constants';
import { useScrollAnimation } from '../src/hooks/useScrollAnimation';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '2',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Animations
  const infoAnimation = useScrollAnimation({ threshold: 0.2 });
  const formAnimation = useScrollAnimation({ threshold: 0.2 });

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Le téléphone est requis';
    } else if (!/^(\+221)?[0-9\s-]{9,}$/.test(formData.phone)) {
      newErrors.phone = 'Numéro invalide (ex: +221 77 000 00 00)';
    }

    if (!formData.date) {
      newErrors.date = 'La date est requise';
    } else {
      const selectedDate = new Date(formData.date);
      const now = new Date();
      if (selectedDate < now) {
        newErrors.date = 'La date doit être dans le futur';
      }
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulation of API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-gray-800 py-20 mb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white animate-fade-in">
            Contact & Réservation
          </h1>
          <p className="text-gray-300 mt-4 text-lg">Nous avons hâte de vous accueillir.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div
            ref={infoAnimation.elementRef}
            className={`space-y-10 transition-all duration-1000 ${
              infoAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6 text-primary">Informations</h2>
              <p className="text-gray-600 mb-8">
                Pour toute demande particulière ou privatisation, n'hésitez pas à nous contacter directement par téléphone ou via le formulaire.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-secondary rounded-full text-accent">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Adresse</h4>
                    <p className="text-gray-600">{SITE_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-secondary rounded-full text-accent">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Téléphone</h4>
                    <p className="text-gray-600">{SITE_INFO.phone}</p>
                    <p className="text-sm text-gray-400">WhatsApp disponible</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-secondary rounded-full text-accent">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Email</h4>
                    <p className="text-gray-600">{SITE_INFO.email}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-secondary rounded-full text-accent">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Horaires</h4>
                    <p className="text-gray-600">{SITE_INFO.openingHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map (Static fallback for demo) */}
            <div className="w-full h-64 bg-gray-200 rounded-sm overflow-hidden relative">
               <img 
                src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=1000&auto=format&fit=crop" 
                className="w-full h-full object-cover opacity-50" 
                alt="Map Background" 
               />
               <div className="absolute inset-0 flex items-center justify-center">
                 <a 
                   href={`https://www.google.com/maps/search/?api=1&query=Saly+Portudal`} 
                   target="_blank" 
                   rel="noreferrer"
                   className="px-6 py-2 bg-white shadow-lg text-primary font-semibold rounded-full hover:scale-105 transition-transform flex items-center gap-2"
                 >
                   <MapPin size={16} /> Voir sur Google Maps
                 </a>
               </div>
            </div>
          </div>

          {/* Reservation Form */}
          <div
            ref={formAnimation.elementRef}
            className={`bg-secondary p-8 md:p-12 rounded-lg shadow-xl border border-gray-100 transition-all duration-1000 ${
              formAnimation.isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h2 className="font-serif text-3xl font-bold mb-8 text-primary">Réserver une table</h2>

            {submitted ? (
              <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-400 text-green-800 px-6 py-10 rounded-lg text-center animate-fade-in">
                <CheckCircle className="mx-auto text-green-600 mb-4" size={64} />
                <h3 className="text-2xl font-bold mb-3">Demande envoyée avec succès !</h3>
                <p className="text-green-700 mb-2">
                  Nous vous confirmerons votre réservation par téléphone ou email dans les plus
                  brefs délais.
                </p>
                <p className="text-sm text-green-600 mb-6">
                  Réservation pour {formData.guests} personne{formData.guests !== '1' ? 's' : ''}
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      date: '',
                      guests: '2',
                      message: '',
                    });
                  }}
                  className="px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors shadow-lg"
                >
                  Nouvelle demande
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none bg-white transition-all ${
                        errors.name ? 'border-red-400 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="Votre nom"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none bg-white transition-all ${
                        errors.phone ? 'border-red-400 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="+221 77 000 00 00"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date & Heure <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="datetime-local"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none bg-white transition-all ${
                        errors.date ? 'border-red-400 bg-red-50' : 'border-gray-300'
                      }`}
                    />
                    {errors.date && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        {errors.date}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre de personnes
                    </label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none bg-white"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, '8+'].map((num) => (
                        <option key={num} value={num}>
                          {num} personne{num !== 1 ? 's' : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email (Optionnel)
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none bg-white transition-all ${
                      errors.email ? 'border-red-400 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="votre@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message particulier
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent outline-none bg-white resize-none"
                    placeholder="Allergies, occasion spéciale, demandes particulières..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-primary text-white font-bold text-lg rounded-full hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={24} />
                      Envoi en cours...
                    </>
                  ) : (
                    'CONFIRMER LA DEMANDE'
                  )}
                </button>

                <p className="text-xs text-center text-gray-500 mt-4">
                  <span className="text-red-500">*</span> Champs obligatoires. En cliquant sur
                  confirmer, vous acceptez d'être recontacté pour valider votre réservation.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;