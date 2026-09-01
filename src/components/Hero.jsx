import React from 'react';
import { Flame, Star, Sparkles, ChevronDown, Award, ShieldCheck, Clock } from 'lucide-react';

export default function Hero({ onExploreMenu }) {
  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center justify-center bg-hero-gradient pt-28 pb-16 overflow-hidden">
      
      {/* Background Decorative Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-maktub-red/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-maktub-gold/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-20 right-10 w-96 h-96 bg-maktub-red-dark/30 rounded-full blur-3xl pointer-events-none"></div>
      
      {/* Subtle fire embers background overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#d8b26e_0.5px,transparent_0.5px)] [background-size:32px_32px] opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
        
        {/* Top Floating Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-maktub-charcoal-light/80 border border-maktub-gold/40 text-maktub-gold-light text-xs font-semibold uppercase tracking-widest mb-6 shadow-gold-sm animate-fadeIn">
          <Sparkles className="w-3.5 h-3.5 text-maktub-gold" />
          <span>A Autêntica Tradição em Pizzas & Esfihas</span>
          <Sparkles className="w-3.5 h-3.5 text-maktub-gold" />
        </div>

        {/* Floating Pizza Hero Composition matching Reference Image */}
        <div className="relative w-full max-w-2xl my-2 flex flex-col items-center">
          
          {/* Main Title Banner directly positioned as in reference */}
          <div className="mb-4 z-20">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-white uppercase tracking-tight leading-none drop-shadow-2xl">
              QUALIDADE E ABUNDÂNCIA,
              <span className="block mt-1 gold-shimmer">
                SEM COMPROMISSO
              </span>
            </h1>
            <p className="mt-3 text-sm sm:text-base md:text-lg text-maktub-cream-dark/90 max-w-xl mx-auto font-sans font-normal leading-relaxed drop-shadow">
              Massas artesanais de longa maturação, queijos nobres generosos e o autêntico aroma do forno a lenha.
            </p>
          </div>

          {/* Spectacular Pizza Visual with Cheese Pull */}
          <div className="relative w-full max-w-lg sm:max-w-xl mx-auto my-3 group">
            
            {/* Top Pulling Cheese Slice with gentle float animation */}
            <div className="relative z-20 flex justify-center">
              <div className="relative animate-gentle-float">
                <div className="absolute -inset-4 bg-maktub-gold/20 rounded-full blur-xl opacity-60"></div>
                <img
                  src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=85"
                  alt="Pizza Maktub Especial"
                  className="w-72 sm:w-96 md:w-[460px] h-52 sm:h-64 md:h-72 object-cover rounded-3xl shadow-2xl border-2 border-maktub-gold/40 transform group-hover:scale-105 transition-all duration-700 glow-wine"
                />
                
                {/* Floating Price Badge */}
                <div className="absolute -bottom-3 -right-2 sm:right-2 bg-gradient-to-r from-maktub-red to-maktub-red-dark text-white px-4 py-2 rounded-2xl shadow-xl border border-maktub-gold/60 flex items-center space-x-2">
                  <Flame className="w-4 h-4 text-maktub-gold animate-bounce" />
                  <div className="text-left">
                    <span className="text-[10px] text-maktub-gold-light uppercase block font-semibold">Forno a Lenha</span>
                    <span className="text-xs sm:text-sm font-bold text-white">Sabor Inesquecível</span>
                  </div>
                </div>

                {/* Rating Badge */}
                <div className="absolute -top-3 -left-2 sm:left-2 bg-maktub-charcoal/90 backdrop-blur-md text-white px-3.5 py-1.5 rounded-2xl shadow-xl border border-maktub-gold/50 flex items-center space-x-1.5">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span className="text-xs font-bold text-white">4.9</span>
                  <span className="text-[10px] text-zinc-400">(+1.800 avaliações)</span>
                </div>
              </div>
            </div>

          </div>

          {/* CTA Action Button directly beneath pizza */}
          <div className="mt-5 z-20 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#cardapio"
              onClick={onExploreMenu}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full font-display font-extrabold text-sm sm:text-base tracking-widest uppercase bg-gradient-to-r from-maktub-red via-maktub-red-light to-maktub-red text-white shadow-wine hover:shadow-wine-lg border-2 border-maktub-gold/50 hover:border-maktub-gold transform hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex items-center justify-center space-x-2 group"
            >
              <span>PEDIR AGORA</span>
              <Flame className="w-5 h-5 text-maktub-gold group-hover:scale-125 transition-transform" />
            </a>

            <a
              href="#ofertas"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full font-display font-bold text-sm tracking-wider uppercase bg-maktub-charcoal/80 hover:bg-maktub-charcoal text-maktub-gold border border-maktub-gold/40 hover:border-maktub-gold transition-all duration-300 flex items-center justify-center"
            >
              Ver Ofertas Exclusivas
            </a>
          </div>

        </div>

        {/* Key Highlights Ribbon */}
        <div className="w-full max-w-4xl mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-center">
          <div className="p-3 sm:p-4 rounded-2xl bg-maktub-charcoal-card/70 border border-maktub-gold/20 backdrop-blur-sm">
            <div className="text-maktub-gold text-lg sm:text-xl font-display font-bold">48 Horas</div>
            <div className="text-zinc-400 text-xs sm:text-sm mt-0.5">Fermentação Natural</div>
          </div>
          <div className="p-3 sm:p-4 rounded-2xl bg-maktub-charcoal-card/70 border border-maktub-gold/20 backdrop-blur-sm">
            <div className="text-maktub-gold text-lg sm:text-xl font-display font-bold">100% Artesanal</div>
            <div className="text-zinc-400 text-xs sm:text-sm mt-0.5">Ingredientes Nobres</div>
          </div>
          <div className="p-3 sm:p-4 rounded-2xl bg-maktub-charcoal-card/70 border border-maktub-gold/20 backdrop-blur-sm">
            <div className="text-maktub-gold text-lg sm:text-xl font-display font-bold">45 Minutos</div>
            <div className="text-zinc-400 text-xs sm:text-sm mt-0.5">Entrega Quentinha</div>
          </div>
          <div className="p-3 sm:p-4 rounded-2xl bg-maktub-charcoal-card/70 border border-maktub-gold/20 backdrop-blur-sm">
            <div className="text-maktub-gold text-lg sm:text-xl font-display font-bold">+15.000</div>
            <div className="text-zinc-400 text-xs sm:text-sm mt-0.5">Clientes Satisfeitos</div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <a href="#fidelidade" className="mt-8 text-maktub-gold/60 hover:text-maktub-gold animate-bounce transition-colors" aria-label="Rolar para baixo">
          <ChevronDown className="w-6 h-6" />
        </a>

      </div>
    </section>
  );
}
