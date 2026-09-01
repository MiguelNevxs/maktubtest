import React, { useState } from 'react';
import { EXCLUSIVE_OFFERS } from '../data/products';
import { Sparkles, ArrowLeft, ArrowRight, Tag, Flame, Clock } from 'lucide-react';

export default function ExclusiveOffers({ onSelectOffer }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? EXCLUSIVE_OFFERS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === EXCLUSIVE_OFFERS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="ofertas" className="py-16 sm:py-24 bg-maktub-charcoal-dark text-white relative overflow-hidden border-t border-b border-maktub-gold/30">
      
      {/* Glow Backdrops */}
      <div className="absolute -top-24 right-1/4 w-96 h-96 bg-maktub-red/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 left-1/4 w-96 h-96 bg-maktub-gold/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Section Header with Navigation Arrows as in Reference Image */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 max-w-6xl mx-auto">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-maktub-red/20 border border-maktub-gold/30 text-maktub-gold text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5 text-maktub-gold" />
              <span>Promoções Limitadas</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black uppercase tracking-tight text-white">
              OFERTAS EXCLUSIVAS
            </h2>
          </div>

          {/* Navigation Arrows matching reference image */}
          <div className="flex items-center space-x-3 mt-4 sm:mt-0">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full bg-maktub-charcoal-card border border-maktub-gold/40 text-white hover:text-maktub-gold hover:border-maktub-gold flex items-center justify-center transition-all duration-200 active:scale-95 shadow-md"
              aria-label="Oferta Anterior"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full bg-maktub-charcoal-card border border-maktub-gold/40 text-white hover:text-maktub-gold hover:border-maktub-gold flex items-center justify-center transition-all duration-200 active:scale-95 shadow-md"
              aria-label="Próxima Oferta"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 3 Offer Cards Grid matching the Reference Image */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {EXCLUSIVE_OFFERS.map((offer, index) => (
            <div
              key={offer.id}
              onClick={() => onSelectOffer(offer)}
              className="group relative bg-maktub-charcoal-card rounded-3xl overflow-hidden border-2 border-maktub-gold/30 hover:border-maktub-gold transition-all duration-500 shadow-2xl flex flex-col justify-between cursor-pointer transform hover:-translate-y-2"
            >
              {/* Top Image with Badge */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-zinc-900">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maktub-charcoal-dark via-maktub-charcoal-dark/40 to-transparent"></div>

                {/* Floating Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3.5 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider text-white shadow-lg border border-white/30 ${offer.badgeColor}`}>
                    {offer.tag}
                  </span>
                </div>

                {/* Price Display */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    {offer.priceOriginal && (
                      <span className="text-xs text-zinc-400 line-through block">
                        {offer.priceOriginal}
                      </span>
                    )}
                    <span className="text-2xl font-display font-black text-maktub-gold leading-none">
                      {offer.pricePromo}
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-zinc-300 bg-black/60 px-2.5 py-1 rounded-lg backdrop-blur-sm border border-white/10">
                    Válido Hoje
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-maktub-gold transition-colors">
                    {offer.title}
                  </h3>
                  <p className="text-xs font-medium text-maktub-gold-light/90 mt-1">
                    {offer.subtitle}
                  </p>
                  <p className="mt-3 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {offer.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-bold text-maktub-gold uppercase tracking-wider group-hover:underline">
                    {offer.ctaText}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-maktub-red to-maktub-red-dark text-white flex items-center justify-center border border-maktub-gold/40 group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Glowing Bottom Border on Hover */}
              <div className="h-1 w-full bg-gradient-to-r from-maktub-gold via-maktub-red to-maktub-gold opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* Center CTA Button matching reference image */}
        <div className="mt-14 text-center">
          <a
            href="#cardapio"
            className="inline-flex items-center px-8 py-3.5 rounded-full font-display font-black text-sm tracking-widest uppercase bg-gradient-to-r from-maktub-red to-maktub-red-dark text-white shadow-wine hover:shadow-wine-lg border-2 border-maktub-gold/50 hover:border-maktub-gold transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
          >
            <Flame className="w-4 h-4 mr-2 text-maktub-gold" />
            VER TODAS AS OFERTAS & CARDÁPIO
          </a>
        </div>

      </div>
    </section>
  );
}
