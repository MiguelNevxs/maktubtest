import React from 'react';
import { Pizza, Sparkles, ChefHat, Bike, ShieldCheck, Flame } from 'lucide-react';

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: (
        <div className="w-16 h-16 rounded-2xl bg-maktub-gold/20 border-2 border-maktub-gold flex items-center justify-center text-maktub-red group-hover:bg-maktub-red group-hover:text-maktub-gold transition-all duration-300 shadow-md">
          <Pizza className="w-8 h-8" />
        </div>
      ),
      badge: 'CARDÁPIO COMPLETO',
      title: 'VARIEDADE DE SABORES',
      desc: 'Pizzas tradicionais, especiais gourmet, pizzas doces irresistíveis e autênticas esfihas abertas árabes para todos os gostos.'
    },
    {
      icon: (
        <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border-2 border-emerald-500/40 flex items-center justify-center text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-md">
          <span className="font-display font-black text-sm text-center leading-none">100%<br /><span className="text-[9px] uppercase tracking-tighter">Fresco</span></span>
        </div>
      ),
      badge: 'QUALIDADE MÁXIMA',
      title: 'INGREDIENTES FRESCOS',
      desc: 'Tomates San Marzano, queijos de primeira linha, cortes nobres de carnes e hortaliças frescas recebidas diariamente.'
    },
    {
      icon: (
        <div className="w-16 h-16 rounded-2xl bg-maktub-red/10 border-2 border-maktub-red/40 flex items-center justify-center text-maktub-red group-hover:bg-maktub-red group-hover:text-maktub-gold transition-all duration-300 shadow-md">
          <ChefHat className="w-8 h-8" />
        </div>
      ),
      badge: 'MESTRE PIZZAIOLO',
      title: 'SABOR INCOMPARÁVEL',
      desc: 'Massa com fermentação lenta de 48 horas, resultando em leveza extrema, bordas aeradas e digestão suave e agradável.'
    },
    {
      icon: (
        <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border-2 border-amber-500/40 flex items-center justify-center text-amber-700 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-md">
          <Bike className="w-8 h-8" />
        </div>
      ),
      badge: 'AGILIDADE',
      title: 'ENTREGA RÁPIDA & QUENTINHA',
      desc: 'Logística dedicada e embalagens com isolamento térmico e respiro anti-umidade para a pizza chegar crocante na sua mesa.'
    }
  ];

  return (
    <section className="py-16 sm:py-24 paper-texture relative border-t border-maktub-gold/20">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Header matching reference image */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-maktub-red/10 border border-maktub-red/30 text-maktub-red text-xs font-bold uppercase tracking-widest mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-maktub-red" />
            <span>O Padrão Maktub</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-maktub-charcoal uppercase tracking-tight">
            POR QUE NOS ESCOLHER
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base mt-2">
            Cada detalhe da nossa cozinha é pensado com carinho para proporcionar uma experiência gastronômica memorável.
          </p>
        </div>

        {/* 4 Pillars Grid matching reference image */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="group bg-white p-6 sm:p-7 rounded-3xl border border-maktub-gold/30 hover:border-maktub-gold shadow-elegant hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center transform hover:-translate-y-2"
            >
              <div className="mb-5 transform group-hover:scale-110 transition-transform duration-300">
                {pillar.icon}
              </div>

              <span className="text-[10px] font-extrabold uppercase tracking-widest text-maktub-red bg-maktub-red/5 px-2.5 py-0.5 rounded-full mb-2">
                {pillar.badge}
              </span>

              <h3 className="text-base sm:text-lg font-display font-black text-zinc-900 group-hover:text-maktub-red transition-colors uppercase leading-snug">
                {pillar.title}
              </h3>

              <p className="mt-2.5 text-xs sm:text-sm text-zinc-600 leading-relaxed font-sans">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
