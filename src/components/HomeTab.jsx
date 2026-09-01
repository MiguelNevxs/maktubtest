import React, { useState } from 'react';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { Search, Plus, Star, Flame, Sparkles } from 'lucide-react';

export default function HomeTab({ onSelectProduct }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full max-w-5xl mx-auto px-4 pb-24">
      
      {/* Search Input Bar */}
      <div className="relative my-3 max-w-md mx-auto">
        <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Buscar pizza, esfiha, combo ou bebida..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white border border-stone-300 focus:border-maktub-red focus:ring-2 focus:ring-maktub-red/20 outline-none text-xs sm:text-sm text-stone-800 placeholder-stone-400 shadow-sm transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
          >
            ✕
          </button>
        )}
      </div>

      {/* Draggable Category Chips */}
      <div className="flex items-center space-x-2 overflow-x-auto py-2.5 scrollbar-none no-scrollbar">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-display font-bold tracking-wide transition-all duration-200 flex-shrink-0 cursor-pointer shadow-sm ${
                isActive
                  ? 'bg-maktub-red text-white border-2 border-maktub-gold shadow-wine scale-105'
                  : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {cat.name}
            </button>
          );
        })}
      </div>

      {/* Section Title */}
      <div className="mt-4 mb-3 flex items-center justify-between px-1">
        <h2 className="text-base sm:text-lg font-display font-black text-stone-900 uppercase">
          {CATEGORIES.find((c) => c.id === activeCategory)?.name || 'Cardápio Maktub'}
        </h2>
        <span className="text-xs text-stone-500 font-medium">
          {filteredProducts.length} itens
        </span>
      </div>

      {/* Products List / Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => onSelectProduct(product)}
            className="group bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-4 shadow-sm hover:shadow-xl border border-stone-200 hover:border-maktub-gold/60 transition-all duration-300 cursor-pointer flex items-center justify-between gap-3 relative overflow-hidden"
          >
            {/* Left Info */}
            <div className="flex-1 min-w-0 pr-1 flex flex-col justify-between h-full">
              <div>
                {/* Badges */}
                <div className="flex items-center space-x-1.5 mb-1 flex-wrap gap-1">
                  {product.badge && (
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-black uppercase bg-maktub-red text-white">
                      {product.badge}
                    </span>
                  )}
                  {product.rating && (
                    <span className="flex items-center text-[11px] font-bold text-amber-600">
                      <Star className="w-3 h-3 fill-amber-500 text-amber-500 mr-0.5" />
                      {product.rating}
                    </span>
                  )}
                </div>

                <h3 className="font-display font-bold text-sm sm:text-base text-stone-900 group-hover:text-maktub-red transition-colors leading-snug line-clamp-1">
                  {product.name}
                </h3>

                <p className="text-[11px] sm:text-xs text-stone-500 line-clamp-2 mt-1 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Price & Add */}
              <div className="mt-3 flex items-center justify-between">
                <div>
                  {product.oldPrice && (
                    <span className="text-[10px] text-stone-400 line-through block">
                      R$ {product.oldPrice.toFixed(2).replace('.', ',')}
                    </span>
                  )}
                  <span className="text-sm sm:text-base font-display font-black text-maktub-red">
                    R$ {product.price.toFixed(2).replace('.', ',')}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectProduct(product);
                  }}
                  className="px-3 py-1.5 rounded-full bg-maktub-red text-white hover:bg-maktub-red-hover text-xs font-bold font-display uppercase tracking-wider flex items-center space-x-1 shadow-sm group-hover:scale-105 transition-transform"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>{product.sizes ? 'Opções' : 'Adicionar'}</span>
                </button>
              </div>
            </div>

            {/* Right Product Image */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-stone-900 flex-shrink-0 relative border border-stone-200">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12 bg-white rounded-3xl border border-stone-200 p-6 my-4">
          <p className="text-stone-500 font-display text-sm">Nenhum produto encontrado para sua busca.</p>
          <button
            onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
            className="mt-3 px-5 py-2 rounded-full bg-maktub-red text-white text-xs font-bold uppercase tracking-wider"
          >
            Limpar Busca
          </button>
        </div>
      )}

    </div>
  );
}
