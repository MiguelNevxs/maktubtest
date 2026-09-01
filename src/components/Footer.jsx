import React, { useState } from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, Send, ArrowUp, Flame, Clock, Heart } from 'lucide-react';
import { PIZZERIA_INFO } from '../data/products';

export default function Footer({ onOpenLoyalty, onOpenLocations }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-maktub-charcoal-dark text-white pt-16 pb-12 border-t-2 border-maktub-gold/30 relative overflow-hidden">
      
      {/* Glow Backdrops */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-maktub-red/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-maktub-gold/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Main Footer Grid matching Reference Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10 max-w-6xl mx-auto">
          
          {/* Column 1: Logo & Social Media */}
          <div className="lg:col-span-4 space-y-5 text-left">
            <div className="flex items-center space-x-3">
              <img
                src="/logo.png"
                alt="Maktub Pizzaria & Esfiharia"
                className="w-16 h-16 object-contain rounded-full border-2 border-maktub-gold shadow-lg bg-maktub-red-dark"
              />
              <div>
                <span className="font-display font-black text-xl text-white tracking-wider block">
                  MAKTUB
                </span>
                <span className="text-[11px] uppercase tracking-widest text-maktub-gold font-semibold block">
                  Pizzaria & Esfiharia
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm">
              Tradição, ingredientes nobres e massa artesanal de 48h assada no calor do forno a lenha. O verdadeiro sabor para celebrar com quem você ama.
            </p>

            {/* Social Icons matching reference */}
            <div className="flex items-center space-x-3 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-maktub-gold/30 hover:border-maktub-gold text-zinc-300 hover:text-maktub-gold flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${PIZZERIA_INFO.phoneClean}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-maktub-gold/30 hover:border-maktub-gold text-zinc-300 hover:text-maktub-gold flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-maktub-gold/30 hover:border-maktub-gold text-zinc-300 hover:text-maktub-gold flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-maktub-gold/30 hover:border-maktub-gold text-zinc-300 hover:text-maktub-gold flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <h4 className="font-display font-bold text-sm tracking-wider uppercase text-maktub-gold">
              NAVEGAÇÃO
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-400">
              <li>
                <a href="#inicio" className="hover:text-white hover:underline transition-colors">Início</a>
              </li>
              <li>
                <a href="#cardapio" className="hover:text-white hover:underline transition-colors">Cardápio Completo</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white hover:underline transition-colors">Sobre Nós</a>
              </li>
              <li>
                <button onClick={onOpenLocations} className="hover:text-white hover:underline transition-colors cursor-pointer text-left">
                  Unidades & Localização
                </button>
              </li>
              <li>
                <button onClick={onOpenLoyalty} className="hover:text-white hover:underline transition-colors cursor-pointer text-left">
                  Programa Fidelidade
                </button>
              </li>
              <li>
                <a href="#ofertas" className="hover:text-white hover:underline transition-colors">Ofertas Especiais</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="font-display font-bold text-sm tracking-wider uppercase text-maktub-gold">
              CONTATO & HORÁRIOS
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-zinc-400">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-maktub-gold flex-shrink-0 mt-0.5" />
                <span>{PIZZERIA_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-maktub-gold flex-shrink-0" />
                <a href={`https://wa.me/${PIZZERIA_INFO.phoneClean}`} className="hover:text-white transition-colors">
                  {PIZZERIA_INFO.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-maktub-gold flex-shrink-0" />
                <span>contato@maktubpizzaria.com.br</span>
              </div>
              <div className="flex items-start space-x-2.5 pt-1 text-zinc-400">
                <Clock className="w-4 h-4 text-maktub-gold flex-shrink-0 mt-0.5" />
                <span>{PIZZERIA_INFO.hours}</span>
              </div>
            </div>
          </div>

          {/* Column 4: Join Newsletter */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="font-display font-bold text-sm tracking-wider uppercase text-maktub-gold">
              CLUBE DE DESCONTOS
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Receba ofertas secretas, cupons exclusivos e lançamentos em primeira mão.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                required
                placeholder="Seu melhor e-mail"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-maktub-gold focus:bg-white/15"
              />
              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded-xl font-display font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-maktub-red to-maktub-red-dark text-white hover:from-maktub-red-hover hover:to-maktub-red shadow-md border border-maktub-gold/40 hover:border-maktub-gold transition-all"
              >
                CADASTRAR E GANHAR
              </button>
            </form>

            {subscribed && (
              <p className="text-xs text-emerald-400 font-semibold animate-fadeIn">
                ✓ Cadastrado com sucesso! Use o cupom MAKTUB10.
              </p>
            )}
          </div>

        </div>

        {/* Bottom Bar matching reference layout */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 max-w-6xl mx-auto gap-4">
          <div className="flex items-center space-x-1">
            <span>© {new Date().getFullYear()}</span>
            <strong className="text-maktub-gold">MAKTUB PIZZARIA & ESFIHARIA</strong>.
            <span>Todos os direitos reservados.</span>
          </div>

          <div className="flex items-center space-x-6 text-xs text-zinc-400">
            <a href="#sobre" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#sobre" className="hover:text-white transition-colors">Política de Privacidade</a>
            
            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-full bg-maktub-charcoal-card border border-maktub-gold/40 text-maktub-gold hover:bg-maktub-red hover:text-white flex items-center justify-center transition-all duration-200 shadow-md ml-2 cursor-pointer"
              title="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
