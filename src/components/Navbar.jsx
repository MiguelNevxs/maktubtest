import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu as MenuIcon, X, Phone, Clock, Flame, Award, MapPin } from 'lucide-react';
import { PIZZERIA_INFO } from '../data/products';

export default function Navbar({ cartCount, onOpenCart, onOpenLoyalty, onOpenLocations }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinksLeft = [
    { name: 'INÍCIO', href: '#inicio' },
    { name: 'CARDÁPIO', href: '#cardapio' },
    { name: 'SOBRE NÓS', href: '#sobre' },
  ];

  const navLinksRight = [
    { name: 'UNIDADES', href: '#unidades', onClick: onOpenLocations },
    { name: 'FIDELIDADE', href: '#fidelidade', onClick: onOpenLoyalty },
    { name: 'OFERTAS', href: '#ofertas' },
  ];

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-gradient-to-r from-maktub-red-darker via-maktub-red to-maktub-red-dark text-maktub-gold-lighter text-xs sm:text-sm py-1.5 px-4 font-medium tracking-wide border-b border-maktub-gold/20 flex justify-between items-center z-50 relative">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs sm:text-sm">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-maktub-gold text-maktub-red-darker uppercase tracking-wider animate-pulse">
              Promoção
            </span>
            <span className="truncate">Use o cupom <strong className="text-white bg-maktub-red-darker/60 px-1.5 py-0.5 rounded border border-maktub-gold/30">MAKTUB10</strong> e ganhe 10% OFF no primeiro pedido!</span>
          </div>
          <div className="hidden md:flex items-center space-x-4 text-xs">
            <span className="flex items-center text-maktub-gold-light/90">
              <Clock className="w-3.5 h-3.5 mr-1 text-maktub-gold" />
              18h às 23h45
            </span>
            <a 
              href={`https://wa.me/${PIZZERIA_INFO.phoneClean}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 mr-1 text-maktub-gold" />
              {PIZZERIA_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`fixed top-7 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-maktub-charcoal-dark/95 backdrop-blur-md py-2.5 shadow-2xl border-b border-maktub-gold/20'
            : 'bg-gradient-to-b from-maktub-charcoal-dark/90 via-maktub-charcoal-dark/70 to-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Left Nav Links (Desktop) */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinksLeft.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/90 hover:text-maktub-gold font-display text-sm font-semibold tracking-wider transition-colors duration-200 relative group py-1"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-maktub-gold to-maktub-gold-light transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white hover:text-maktub-gold p-2 rounded-lg bg-maktub-charcoal/80 border border-maktub-gold/30"
                aria-label="Abrir Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>

            {/* Central Logo */}
            <div className="flex items-center justify-center">
              <a href="#inicio" className="group flex items-center space-x-2">
                <div className="relative">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-maktub-gold via-maktub-red to-maktub-gold opacity-60 group-hover:opacity-100 blur-sm transition duration-300"></div>
                  <img
                    src="/logo.png"
                    alt="Maktub Pizzaria & Esfiharia"
                    className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain rounded-full shadow-lg border-2 border-maktub-gold/60 transform group-hover:scale-105 transition-transform duration-300 bg-maktub-red-dark"
                  />
                </div>
              </a>
            </div>

            {/* Right Nav Links & Actions */}
            <div className="flex items-center space-x-4 lg:space-x-8">
              <nav className="hidden lg:flex items-center space-x-8">
                {navLinksRight.map((link) => (
                  link.onClick ? (
                    <button
                      key={link.name}
                      onClick={link.onClick}
                      className="text-white/90 hover:text-maktub-gold font-display text-sm font-semibold tracking-wider transition-colors duration-200 relative group py-1 cursor-pointer"
                    >
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-maktub-gold to-maktub-gold-light transition-all duration-300 group-hover:w-full"></span>
                    </button>
                  ) : (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-white/90 hover:text-maktub-gold font-display text-sm font-semibold tracking-wider transition-colors duration-200 relative group py-1"
                    >
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-maktub-gold to-maktub-gold-light transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  )
                ))}
              </nav>

              {/* Cart & Order Button */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={onOpenCart}
                  className="relative p-2.5 rounded-full bg-maktub-charcoal/90 text-white hover:text-maktub-gold border border-maktub-gold/40 hover:border-maktub-gold transition-all duration-300 shadow-md group"
                  aria-label="Abrir Carrinho"
                >
                  <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 bg-gradient-to-r from-maktub-red to-maktub-red-light text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-maktub-charcoal animate-bounce shadow-md">
                      {cartCount}
                    </span>
                  )}
                </button>

                <a
                  href="#cardapio"
                  className="hidden sm:inline-flex items-center justify-center px-5 py-2 rounded-full font-display font-bold text-xs sm:text-sm tracking-wider uppercase bg-gradient-to-r from-maktub-red via-maktub-red-hover to-maktub-red text-white shadow-wine hover:shadow-wine-lg border border-maktub-gold/40 hover:border-maktub-gold transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                >
                  <Flame className="w-4 h-4 mr-1.5 text-maktub-gold animate-pulse" />
                  PEDIR AGORA
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-maktub-charcoal-dark/98 border-b border-maktub-gold/30 px-6 py-6 mt-3 backdrop-blur-xl animate-fadeIn">
            <div className="flex flex-col space-y-4">
              {[...navLinksLeft, ...navLinksRight].map((link) => (
                link.onClick ? (
                  <button
                    key={link.name}
                    onClick={() => {
                      link.onClick();
                      setMobileMenuOpen(false);
                    }}
                    className="text-left text-white hover:text-maktub-gold font-display font-semibold text-base py-2 border-b border-white/5"
                  >
                    {link.name}
                  </button>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white hover:text-maktub-gold font-display font-semibold text-base py-2 border-b border-white/5"
                  >
                    {link.name}
                  </a>
                )
              ))}
              <div className="pt-3 flex flex-col space-y-2">
                <a
                  href="#cardapio"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3 rounded-xl font-display font-bold text-sm tracking-wider uppercase bg-gradient-to-r from-maktub-red to-maktub-red-hover text-white shadow-wine border border-maktub-gold/50 flex items-center justify-center"
                >
                  <Flame className="w-4 h-4 mr-2 text-maktub-gold" />
                  FAZER PEDIDO
                </a>
                <a
                  href={`https://wa.me/${PIZZERIA_INFO.phoneClean}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 rounded-xl font-sans font-medium text-xs text-maktub-gold-light border border-maktub-gold/30 flex items-center justify-center"
                >
                  <Phone className="w-3.5 h-3.5 mr-2 text-maktub-gold" />
                  WhatsApp: {PIZZERIA_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
