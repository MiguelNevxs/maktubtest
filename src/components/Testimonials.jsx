import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/products';
import { Star, Quote, ArrowLeft, ArrowRight, CheckCircle2, MessageSquareHeart } from 'lucide-react';

export default function Testimonials() {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 sm:py-24 bg-maktub-cream/70 relative border-t border-maktub-gold/20 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Section Header with Side Navigation Arrows as in Reference Image */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-14 max-w-5xl mx-auto">
          <div className="text-center sm:text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-maktub-gold/20 border border-maktub-gold/40 text-maktub-red text-xs font-bold uppercase tracking-widest mb-3">
              <MessageSquareHeart className="w-3.5 h-3.5 text-maktub-red" />
              <span>Avaliações Reais no Google & iFood</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-maktub-charcoal uppercase tracking-tight">
              DEPOIMENTOS DOS CLIENTES
            </h2>
          </div>

          <div className="flex items-center space-x-3 mt-4 sm:mt-0">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full bg-white border border-maktub-gold/40 text-zinc-800 hover:text-maktub-red hover:border-maktub-red flex items-center justify-center transition-all duration-200 shadow-sm active:scale-95 cursor-pointer"
              aria-label="Depoimento Anterior"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full bg-white border border-maktub-gold/40 text-zinc-800 hover:text-maktub-red hover:border-maktub-red flex items-center justify-center transition-all duration-200 shadow-sm active:scale-95 cursor-pointer"
              aria-label="Próximo Depoimento"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials Grid matching the floating card arrangement in the reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-6 sm:p-7 shadow-elegant border border-maktub-gold/30 hover:border-maktub-gold transition-all duration-300 relative group flex flex-col justify-between"
            >
              <Quote className="w-8 h-8 text-maktub-gold/20 absolute top-6 right-6 group-hover:text-maktub-gold/40 transition-colors" />

              <div>
                {/* User Header */}
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-maktub-gold shadow-md"
                  />
                  <div>
                    <div className="flex items-center space-x-1.5">
                      <h3 className="font-display font-bold text-base text-zinc-900">
                        {t.name}
                      </h3>
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" title="Cliente Verificado" />
                    </div>
                    <p className="text-xs text-zinc-500">{t.role}</p>
                    
                    {/* 5 Gold Stars as in reference */}
                    <div className="flex items-center space-x-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Comment Text */}
                <p className="text-zinc-700 text-xs sm:text-sm leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-[11px] text-zinc-400 font-medium">
                <span>Avaliação verificada 5.0 ★</span>
                <span className="text-maktub-red font-semibold">Maktub Experience</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
