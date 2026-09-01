import React, { useState } from 'react';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { Plus, Flame, Star, Search, Check, Sparkles, Filter } from 'lucide-react';

export default function MenuSection({ onSelectProduct }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="cardapio" className="py-16 sm:py-24 bg-maktub-cream/50 relative border-t border-maktub-gold/20">
      
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Top Split Section matching the Reference Image "OUR MENU" */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 max-w-6xl mx-auto">
          
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-5 text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-maktub-red/10 border border-maktub-red/30 text-maktub-red text-xs font-bold uppercase tracking-widest mb-3">
              <Flame className="w-3.5 h-3.5 text-maktub-red" />
              <span>Tradição & Autenticidade</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-maktub-charcoal uppercase tracking-tight leading-tight">
              NOSSO CARDÁPIO
            </h2>

            <div className="mt-4 space-y-4 text-zinc-700 text-sm sm:text-base leading-relaxed">
              <p>
                Na <strong>Maktub</strong>, cada massa é preparada diariamente com farinha de trigo especial e passa por um processo de maturação lenta de <strong>48 horas</strong>, garantindo uma casca leve, crocante e de facílima digestão.
              </p>
              <p>
                Nossos molhos são feitos exclusivamente com tomates italianos maduros e selecionados, sem conservantes ou aditivos químicos. Para completar, trabalhamos apenas com queijos de altíssimo padrão, cortes de carnes frescas e esfihas feitas à mão no tradicional formato aberto árabe.
              </p>
            </div>

            <div className="mt-6 flex items-center space-x-4">
              <a
                href="#vitrine-cardapio"
                className="inline-flex items-center px-7 py-3.5 rounded-full font-display font-bold text-sm tracking-wider uppercase bg-gradient-to-r from-maktub-red to-maktub-red-dark text-white shadow-wine hover:shadow-wine-lg border border-maktub-gold/40 hover:border-maktub-gold transition-all duration-300 transform hover:-translate-y-0.5"
              >
                VER CARDÁPIO COMPLETO
              </a>
            </div>
          </div>

          {/* Right Column: Hero Food Photography matching reference */}
          <div className="lg:col-span-7 relative">
            <div className="relative group">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-maktub-gold/40 via-maktub-red/30 to-maktub-gold/40 blur-lg opacity-70 group-hover:opacity-100 transition duration-500"></div>
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-maktub-gold/50 bg-maktub-charcoal">
                <img
                  src="https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=1200&q=85"
                  alt="Pizzas e Ingredientes Frescos Maktub"
                  className="w-full h-80 sm:h-96 md:h-[420px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                {/* Floating overlay tag on image */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-maktub-gold font-bold block">Forno a 400°C</span>
                    <h4 className="text-lg sm:text-xl font-display font-bold">Massa Crocante & Queijo Puxando</h4>
                  </div>
                  <div className="px-3.5 py-1.5 rounded-xl bg-maktub-red text-white text-xs font-black uppercase border border-maktub-gold/50 shadow-md">
                    100% Fresco
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Interactive Filter Pills & Search Bar */}
        <div id="vitrine-cardapio" className="mt-14 pt-8 border-t border-maktub-gold/20">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-display font-black text-maktub-charcoal uppercase">
                Escolha o Seu Sabor Favorito
              </h3>
              <p className="text-zinc-600 text-sm">
                Mostrando {filteredProducts.length} deliciosas opções preparadas na hora
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar pizza, esfiha, ingrediente..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-maktub-gold/40 focus:border-maktub-red focus:ring-2 focus:ring-maktub-red/20 outline-none text-sm text-zinc-800 placeholder-zinc-400 transition-all shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-zinc-700"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-4 scrollbar-none no-scrollbar">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs sm:text-sm font-display font-bold tracking-wide transition-all duration-300 flex-shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-maktub-red to-maktub-red-dark text-white shadow-wine border-2 border-maktub-gold scale-105'
                      : 'bg-white text-zinc-700 hover:bg-maktub-gold-lighter/50 hover:text-maktub-red border border-zinc-200 shadow-sm'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>

        </div>

        {/* Products Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-elegant hover:shadow-2xl border border-maktub-gold/20 hover:border-maktub-gold transition-all duration-300 flex flex-col justify-between"
            >
              {/* Product Image and Badges */}
              <div className="relative h-56 sm:h-60 overflow-hidden bg-zinc-900">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Top Badges */}
                <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-1.5">
                  {product.badge && (
                    <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-gradient-to-r from-maktub-red to-maktub-red-dark text-white border border-maktub-gold/60 shadow-md">
                      {product.badge}
                    </span>
                  )}
                  {product.popular && (
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-maktub-gold text-maktub-charcoal-dark shadow-sm">
                      Destaque
                    </span>
                  )}
                </div>

                {/* Rating Badge */}
                {product.rating && (
                  <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-bold flex items-center space-x-1 border border-white/20">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span>{product.rating}</span>
                  </div>
                )}

                {/* Serves info */}
                {product.serves && (
                  <div className="absolute bottom-3 right-3 text-[11px] font-semibold text-white/90 bg-black/50 px-2 py-0.5 rounded-md backdrop-blur-sm">
                    {product.serves}
                  </div>
                )}
              </div>

              {/* Product Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg sm:text-xl font-display font-bold text-zinc-900 group-hover:text-maktub-red transition-colors leading-snug">
                    {product.name}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-600 line-clamp-3 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Price & Add to Cart Button */}
                <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between">
                  <div>
                    {product.oldPrice && (
                      <span className="text-xs text-zinc-400 line-through block">
                        R$ {product.oldPrice.toFixed(2).replace('.', ',')}
                      </span>
                    )}
                    <div className="text-xl sm:text-2xl font-display font-black text-maktub-red">
                      R$ {product.price.toFixed(2).replace('.', ',')}
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectProduct(product)}
                    className="px-4 py-2.5 rounded-full font-display font-bold text-xs sm:text-sm tracking-wider uppercase bg-gradient-to-r from-maktub-red to-maktub-red-dark text-white hover:from-maktub-red-hover hover:to-maktub-red shadow-md hover:shadow-wine border border-maktub-gold/40 hover:border-maktub-gold flex items-center space-x-1.5 transform active:scale-95 transition-all cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>{product.sizes ? 'Personalizar' : 'Adicionar'}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-zinc-200 p-8 my-8">
            <p className="text-zinc-500 font-display text-lg">Nenhum item encontrado para sua busca.</p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="mt-4 px-6 py-2.5 rounded-full bg-maktub-red text-white text-xs font-bold uppercase tracking-wider"
            >
              Ver Todo o Cardápio
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
