import React from 'react';
import { ChevronRight, ShoppingBag, Store, Clock, MapPin } from 'lucide-react';
import { PIZZERIA_INFO } from '../data/products';

export default function OrderHeader({
  orderType,
  setOrderType,
  onOpenHoursModal,
  onOpenLocationModal
}) {
  return (
    <header className="w-full pt-8 pb-6 px-4 bg-gradient-to-b from-stone-100 via-stone-50 to-maktub-cream/30 flex flex-col items-center justify-center text-center">
      
      {/* 1. Perfectly Centered Transparent Maktub Logo */}
      <div className="flex flex-col items-center justify-center mb-4">
        <div className="relative group cursor-pointer" onClick={onOpenLocationModal}>
          <img
            src="/logo.png"
            alt="Maktub Pizzaria & Esfiharia"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 object-contain mx-auto drop-shadow-md transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* 2. Status Badge: "Aberto para pedidos (18h às 22h30) >" */}
      <button
        onClick={onOpenHoursModal}
        className="inline-flex items-center space-x-1.5 px-4 py-1 rounded-full bg-stone-200/90 hover:bg-stone-300 text-stone-700 text-xs font-semibold tracking-wide transition-all shadow-xs mb-3.5 cursor-pointer"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span>Aberto para pedidos (18:00 às 22:30)</span>
        <ChevronRight className="w-3.5 h-3.5 text-stone-500" />
      </button>

      {/* 3. Location Pill Bar: "Volta Redonda - RJ" */}
      <div 
        onClick={onOpenLocationModal}
        className="w-full max-w-sm sm:max-w-md mx-auto py-2.5 px-5 rounded-full bg-maktub-red text-white text-xs sm:text-sm font-display font-bold tracking-wider uppercase text-center shadow-wine border border-maktub-gold/30 hover:bg-maktub-red-hover transition-all cursor-pointer flex items-center justify-center space-x-2 mb-4"
      >
        <MapPin className="w-4 h-4 text-maktub-gold" />
        <span>{PIZZERIA_INFO.city}</span>
      </div>

      {/* 4. Action Buttons: [DELIVERY] & [RETIRADA] */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 w-full max-w-sm sm:max-w-md mx-auto">
        
        {/* Delivery Button */}
        <button
          type="button"
          onClick={() => setOrderType('delivery')}
          className={`w-full py-2.5 px-6 rounded-2xl font-display font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-2.5 shadow-md cursor-pointer ${
            orderType === 'delivery'
              ? 'bg-maktub-red text-white border-2 border-maktub-gold shadow-wine scale-[1.02]'
              : 'bg-maktub-red/80 hover:bg-maktub-red text-white/90 border border-white/20'
          }`}
        >
          <ShoppingBag className="w-4 h-4 text-maktub-gold" />
          <span>DELIVERY</span>
        </button>

        {/* Retirada Button */}
        <button
          type="button"
          onClick={() => setOrderType('pickup')}
          className={`w-full py-2.5 px-6 rounded-2xl font-display font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center space-x-2.5 shadow-md cursor-pointer ${
            orderType === 'pickup'
              ? 'bg-maktub-red text-white border-2 border-maktub-gold shadow-wine scale-[1.02]'
              : 'bg-maktub-red/80 hover:bg-maktub-red text-white/90 border border-white/20'
          }`}
        >
          <Store className="w-4 h-4 text-maktub-gold" />
          <span>RETIRADA</span>
        </button>

      </div>

    </header>
  );
}
