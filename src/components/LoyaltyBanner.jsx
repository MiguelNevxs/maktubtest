import React from 'react';
import { Gift, Award, ArrowRight, Sparkles, CheckCircle2, Percent } from 'lucide-react';

export default function LoyaltyBanner({ onSelectPromo, onOpenLoyaltyModal }) {
  return (
    <section id="fidelidade" className="py-16 sm:py-20 paper-texture relative border-t border-maktub-gold/20">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-maktub-red/10 border border-maktub-red/20 text-maktub-red text-xs font-bold uppercase tracking-widest mb-3">
            <Gift className="w-3.5 h-3.5" />
            <span>Clube Maktub de Vantagens</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-maktub-charcoal uppercase tracking-tight">
            PROGRAMA DE FIDELIDADE
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base mt-2">
            A cada pedido você acumula pontos para trocar por pizzas, esfihas e sobremesas exclusivas.
          </p>
        </div>

        {/* 2 Banner Cards strictly replicating the Reference Image Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          
          {/* Left Promo Card: Double Cheese Pizza / Combo em Dobro */}
          <div 
            onClick={() => onSelectPromo('cb-combo-duplo')}
            className="group relative bg-gradient-to-br from-white via-amber-50/40 to-maktub-red/10 rounded-3xl p-6 sm:p-8 shadow-elegant hover:shadow-2xl border-2 border-maktub-gold/30 hover:border-maktub-gold transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between"
          >
            {/* Top Row: Title and Price Badge */}
            <div className="flex justify-between items-start mb-6 z-10">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-maktub-red bg-maktub-red/10 px-2.5 py-1 rounded-full inline-block mb-2">
                  COMBO FAMÍLIA
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-zinc-900 tracking-tight leading-none uppercase">
                  DOUBLE CHEESE<br />
                  <span className="text-maktub-red">PIZZA EM DOBRO</span>
                </h3>
              </div>

              {/* Price Badge as in reference image */}
              <div className="text-right bg-gradient-to-r from-maktub-red to-maktub-red-dark text-white px-4 py-2.5 rounded-2xl shadow-lg border border-maktub-gold/50 transform group-hover:scale-105 transition-transform">
                <span className="text-[10px] text-maktub-gold-light uppercase font-bold block">APENAS</span>
                <span className="text-xl sm:text-2xl font-display font-black text-white">R$ 99<span className="text-xs">,90</span></span>
              </div>
            </div>

            {/* Pizza Showcase Image Bottom as in reference image */}
            <div className="relative mt-2 z-10 flex items-center justify-between gap-4">
              <div className="space-y-2 text-xs sm:text-sm text-zinc-700 font-medium max-w-[200px]">
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>2 Pizzas Grandes (8 fatias)</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>1 Refrigerante 2L Grátis</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>+100 Pontos no Clube</span>
                </div>
              </div>

              {/* High resolution pizza composition */}
              <div className="relative w-44 sm:w-56 h-36 sm:h-44 flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80"
                  alt="Double Cheese Pizza"
                  className="w-full h-full object-cover rounded-2xl shadow-xl border-2 border-white transform group-hover:rotate-2 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute -bottom-2 -left-2 bg-maktub-gold text-maktub-red-darker text-[11px] font-black px-2.5 py-1 rounded-lg shadow-md border border-white">
                  TOP 1 MAIS PEDIDO
                </div>
              </div>
            </div>

            {/* Bottom Button */}
            <div className="mt-6 pt-4 border-t border-zinc-200/80 flex items-center justify-between text-maktub-red font-display font-bold text-sm">
              <span className="group-hover:translate-x-1 transition-transform">Adicionar Combo ao Pedido</span>
              <div className="w-8 h-8 rounded-full bg-maktub-red text-white flex items-center justify-center group-hover:bg-maktub-red-dark group-hover:scale-110 transition-all">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Subtle red splash in corner */}
            <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-maktub-red/10 rounded-full blur-2xl pointer-events-none"></div>
          </div>

          {/* Right Promo Card: 20% OFF / Fidelidade Maktub */}
          <div 
            onClick={onOpenLoyaltyModal}
            className="group relative bg-gradient-to-br from-maktub-charcoal-dark via-maktub-charcoal to-maktub-red-darker rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-maktub-gold/40 hover:border-maktub-gold transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between text-white"
          >
            {/* Top Row */}
            <div className="flex justify-between items-start mb-6 z-10">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-maktub-gold bg-maktub-gold/20 px-2.5 py-1 rounded-full inline-block mb-2 border border-maktub-gold/30">
                  CLUBE EXCLUSIVO
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-white tracking-tight leading-none uppercase">
                  ESFIHAS MAKTUB<br />
                  <span className="text-maktub-gold">PRIMEIRO PEDIDO</span>
                </h3>
              </div>

              {/* 20% OFF Badge */}
              <div className="relative flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-maktub-red via-maktub-red-light to-maktub-red-dark border-2 border-maktub-gold flex flex-col items-center justify-center text-center shadow-wine transform group-hover:rotate-12 transition-transform">
                  <span className="text-xs sm:text-sm font-extrabold text-maktub-gold-light leading-none">20%</span>
                  <span className="text-[10px] font-black text-white tracking-wider">OFF</span>
                </div>
              </div>
            </div>

            {/* Middle Content */}
            <div className="relative mt-2 z-10 flex items-center justify-between gap-4">
              <div className="space-y-2 text-xs sm:text-sm text-zinc-300 font-medium max-w-[200px]">
                <div className="flex items-center space-x-1.5">
                  <Sparkles className="w-4 h-4 text-maktub-gold flex-shrink-0" />
                  <span>Cadastre-se e ganhe 50 pontos</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Sparkles className="w-4 h-4 text-maktub-gold flex-shrink-0" />
                  <span>10 Pontos a cada R$ 10 gastos</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Sparkles className="w-4 h-4 text-maktub-gold flex-shrink-0" />
                  <span>Troque por Esfihas Grátis</span>
                </div>
              </div>

              {/* High resolution esfiha / pizza showcase */}
              <div className="relative w-44 sm:w-56 h-36 sm:h-44 flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80"
                  alt="Esfihas Maktub Artesanais"
                  className="w-full h-full object-cover rounded-2xl shadow-xl border-2 border-maktub-gold/40 transform group-hover:-rotate-2 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-maktub-red to-maktub-red-dark text-white text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-md border border-maktub-gold/50">
                  CUPOM: MAKTUB10
                </div>
              </div>
            </div>

            {/* Bottom Button */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-maktub-gold font-display font-bold text-sm">
              <span className="group-hover:translate-x-1 transition-transform">Ver Como Funciona o Clube</span>
              <div className="w-8 h-8 rounded-full bg-maktub-gold text-maktub-charcoal-dark flex items-center justify-center group-hover:bg-maktub-gold-light group-hover:scale-110 transition-all">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>

            {/* Glowing amber backdrop element */}
            <div className="absolute -bottom-20 -left-20 w-52 h-52 bg-maktub-gold/10 rounded-full blur-3xl pointer-events-none"></div>
          </div>

        </div>

      </div>
    </section>
  );
}
