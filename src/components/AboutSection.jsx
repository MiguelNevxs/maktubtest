import React from 'react';
import { Flame, HeartHandshake, Sparkles, CheckCircle2, History } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="sobre" className="py-16 sm:py-24 bg-maktub-charcoal-dark text-white relative overflow-hidden border-t border-maktub-gold/20">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-maktub-red/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Image Collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-maktub-red via-maktub-gold to-maktub-red rounded-3xl blur-md opacity-40"></div>
              
              <div className="relative rounded-3xl overflow-hidden border-2 border-maktub-gold/50 shadow-2xl bg-zinc-900">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                  alt="Forno a lenha e produção Maktub"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Badge Overlay */}
                <div className="absolute bottom-5 left-5 right-5 bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-maktub-gold/30 flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-maktub-red flex items-center justify-center text-maktub-gold border border-maktub-gold/50 flex-shrink-0">
                    <Flame className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-white">Forno a Lenha de Alta Performance</h4>
                    <p className="text-xs text-zinc-300">Crocância inigualável e aroma defumado inesquecível</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Story Text */}
          <div className="lg:col-span-6 space-y-5 text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-maktub-red/20 border border-maktub-gold/30 text-maktub-gold text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-maktub-gold" />
              <span>Nossa História & Propósito</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-white uppercase tracking-tight leading-tight">
              ESTAVA ESCRITO:<br />
              <span className="text-maktub-gold">O SABOR PERFEITO</span>
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              A palavra <strong>"Maktub"</strong> carrega o belo significado de <em>"já estava escrito"</em> ou <em>"tinha que acontecer"</em>. Foi desse sentimento de destino e paixão pela gastronomia que nasceu a nossa pizzaria e esfiharia.
            </p>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              Unimos duas das maiores paixões gastronômicas do brasileiro: a <strong>pizza artesanal</strong> com queijo puxando e as <strong>autênticas esfihas abertas árabes</strong>, sempre feitas na hora com massas leves, temperos frescos e generosidade que impressiona.
            </p>

            {/* Checkpoints */}
            <div className="space-y-2.5 pt-2">
              <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-zinc-200">
                <CheckCircle2 className="w-4 h-4 text-maktub-gold flex-shrink-0" />
                <span>Massa com descanso e fermentação biológica lenta de 48h.</span>
              </div>
              <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-zinc-200">
                <CheckCircle2 className="w-4 h-4 text-maktub-gold flex-shrink-0" />
                <span>Queijo Catupiry original e queijos nobres rigorosamente selecionados.</span>
              </div>
              <div className="flex items-center space-x-2.5 text-xs sm:text-sm text-zinc-200">
                <CheckCircle2 className="w-4 h-4 text-maktub-gold flex-shrink-0" />
                <span>Preparo artesanal com amor em cada dobra e borda.</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
