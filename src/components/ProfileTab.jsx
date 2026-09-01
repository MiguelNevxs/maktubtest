import React, { useState } from 'react';
import { PIZZERIA_INFO } from '../data/products';
import { MapPin, Clock, Phone, Instagram, Gift, Copy, CheckCircle2, MessageCircle, Heart, Star, ShieldCheck } from 'lucide-react';

export default function ProfileTab() {
  const [copied, setCopied] = useState(false);

  const copyCoupon = () => {
    navigator.clipboard.writeText('MAKTUB10');
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-4 pb-28 space-y-4">
      
      {/* Header Profile Card */}
      <div className="bg-gradient-to-br from-maktub-charcoal-dark via-maktub-charcoal to-maktub-red-darker text-white rounded-3xl p-6 shadow-xl border border-maktub-gold/40 text-center relative overflow-hidden">
        <div className="relative z-10 flex flex-col items-center">
          <img
            src="/logo.png"
            alt="Maktub"
            className="w-20 h-20 rounded-full object-contain bg-maktub-red-dark border-2 border-maktub-gold shadow-lg mb-3"
          />
          <h2 className="font-display font-black text-xl text-white uppercase tracking-wider">
            {PIZZERIA_INFO.name}
          </h2>
          <span className="text-xs text-maktub-gold font-bold uppercase tracking-widest mt-0.5">
            {PIZZERIA_INFO.city}
          </span>
          <p className="text-xs text-zinc-300 max-w-sm mt-2 leading-relaxed">
            Massa artesanal de fermentação lenta 48h, ingredientes selecionados e o autêntico forno a lenha.
          </p>
        </div>

        {/* Glow */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-maktub-gold/10 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      {/* Loyalty & Welcome Coupon */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-stone-200 space-y-3">
        <div className="flex items-center space-x-2 text-maktub-red">
          <Gift className="w-5 h-5" />
          <h3 className="font-display font-bold text-sm text-stone-900 uppercase">
            Clube Fidelidade Maktub
          </h3>
        </div>

        <p className="text-xs text-stone-600 leading-relaxed">
          Ganhe 10 pontos a cada R$ 10 em compras e troque por esfihas e pizzas grandes grátis no WhatsApp!
        </p>

        {/* Coupon Box */}
        <div className="p-3.5 rounded-xl bg-amber-50 border border-maktub-gold/40 flex items-center justify-between">
          <div>
            <span className="text-[10px] text-amber-800 font-bold uppercase block">CUPOM DE 10% OFF</span>
            <span className="font-display font-black text-base text-stone-900">MAKTUB10</span>
          </div>
          <button
            onClick={copyCoupon}
            className="px-3.5 py-1.5 rounded-xl bg-maktub-red text-white text-xs font-bold uppercase hover:bg-maktub-red-hover transition-colors flex items-center space-x-1 cursor-pointer"
          >
            {copied ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5 text-maktub-gold" />
                <span>Copiado</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copiar</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Store Information */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-stone-200 space-y-4">
        <h3 className="font-display font-bold text-sm text-stone-900 uppercase">
          Informações da Unidade
        </h3>

        <div className="space-y-3 text-xs text-stone-700">
          <div className="flex items-start space-x-3">
            <MapPin className="w-4 h-4 text-maktub-red flex-shrink-0 mt-0.5" />
            <div>
              <strong className="block text-stone-900">Endereço:</strong>
              <span>{PIZZERIA_INFO.address}</span>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Clock className="w-4 h-4 text-maktub-red flex-shrink-0 mt-0.5" />
            <div>
              <strong className="block text-stone-900">Horário de Atendimento:</strong>
              <span>{PIZZERIA_INFO.hours}</span>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Phone className="w-4 h-4 text-maktub-red flex-shrink-0 mt-0.5" />
            <div>
              <strong className="block text-stone-900">Telefone / WhatsApp:</strong>
              <span>{PIZZERIA_INFO.phone}</span>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Instagram className="w-4 h-4 text-maktub-red flex-shrink-0 mt-0.5" />
            <div>
              <strong className="block text-stone-900">Instagram Oficial:</strong>
              <span>{PIZZERIA_INFO.instagram}</span>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${PIZZERIA_INFO.phoneClean}?text=${encodeURIComponent('Olá Maktub Volta Redonda! Gostaria de tirar uma dúvida.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-3 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-display font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center space-x-2 shadow-md transition-colors"
      >
        <MessageCircle className="w-4 h-4" />
        <span>Falar com Atendente no WhatsApp</span>
      </a>

    </div>
  );
}
