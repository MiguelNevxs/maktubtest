import React, { useState } from 'react';
import { X, Plus, Minus, Flame, Check, Star } from 'lucide-react';

export default function ProductModal({ product, onClose, onAddToCart }) {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState(product.sizes ? product.sizes[1] || product.sizes[0] : null);
  const [selectedBorder, setSelectedBorder] = useState(product.borderOptions ? product.borderOptions[0] : null);
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState('');

  const basePrice = selectedSize ? selectedSize.price : product.price;
  const borderPrice = selectedBorder ? selectedBorder.price : 0;
  const itemTotal = (basePrice + borderPrice) * quantity;

  const handleConfirm = () => {
    onAddToCart({
      id: `${product.id}-${selectedSize ? selectedSize.name : 'single'}-${selectedBorder ? selectedBorder.name : 'default'}`,
      productId: product.id,
      name: product.name,
      image: product.image,
      size: selectedSize ? selectedSize.name : null,
      border: selectedBorder && selectedBorder.price > 0 ? selectedBorder.name : null,
      unitPrice: basePrice + borderPrice,
      quantity,
      notes,
      totalPrice: itemTotal
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-lg w-full border-2 border-maktub-gold max-h-[90vh] flex flex-col justify-between animate-scaleUp"
      >
        {/* Header with Image */}
        <div className="relative h-48 sm:h-56 bg-zinc-900 flex-shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

          <button
            onClick={onClose}
            className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-black/60 text-white hover:text-maktub-gold flex items-center justify-center border border-white/20 transition-all cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-5 right-5 text-white">
            {product.badge && (
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase bg-maktub-red text-white border border-maktub-gold/60 inline-block mb-1.5">
                {product.badge}
              </span>
            )}
            <h3 className="text-xl sm:text-2xl font-display font-black leading-tight text-white">
              {product.name}
            </h3>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 text-zinc-800">
          
          <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
            {product.description}
          </p>

          {/* Size Selection (if applicable) */}
          {product.sizes && (
            <div>
              <label className="text-xs font-black uppercase tracking-wider text-zinc-900 block mb-2.5">
                1. Escolha o Tamanho:
              </label>
              <div className="grid grid-cols-1 gap-2">
                {product.sizes.map((sz) => {
                  const isSelected = selectedSize?.name === sz.name;
                  return (
                    <button
                      key={sz.name}
                      type="button"
                      onClick={() => setSelectedSize(sz)}
                      className={`w-full flex items-center justify-between p-3 rounded-2xl border text-xs sm:text-sm font-medium transition-all text-left cursor-pointer ${
                        isSelected
                          ? 'border-maktub-red bg-maktub-red/5 text-maktub-red ring-1 ring-maktub-red font-bold'
                          : 'border-zinc-200 hover:border-zinc-300 bg-zinc-50'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${isSelected ? 'border-maktub-red bg-maktub-red' : 'border-zinc-300'}`}>
                          {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
                        </div>
                        <span>{sz.name}</span>
                      </div>
                      <span className="font-bold">R$ {sz.price.toFixed(2).replace('.', ',')}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Border / Crust Selection (if applicable) */}
          {product.borderOptions && (
            <div>
              <label className="text-xs font-black uppercase tracking-wider text-zinc-900 block mb-2.5">
                2. Escolha a Borda Recheada:
              </label>
              <div className="grid grid-cols-1 gap-2">
                {product.borderOptions.map((bo) => {
                  const isSelected = selectedBorder?.name === bo.name;
                  return (
                    <button
                      key={bo.name}
                      type="button"
                      onClick={() => setSelectedBorder(bo)}
                      className={`w-full flex items-center justify-between p-3 rounded-2xl border text-xs sm:text-sm font-medium transition-all text-left cursor-pointer ${
                        isSelected
                          ? 'border-maktub-red bg-maktub-red/5 text-maktub-red ring-1 ring-maktub-red font-bold'
                          : 'border-zinc-200 hover:border-zinc-300 bg-zinc-50'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${isSelected ? 'border-maktub-red bg-maktub-red' : 'border-zinc-300'}`}>
                          {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
                        </div>
                        <span>{bo.name}</span>
                      </div>
                      <span className="font-bold">
                        {bo.price === 0 ? 'Grátis' : `+ R$ ${bo.price.toFixed(2).replace('.', ',')}`}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Special Notes */}
          <div>
            <label className="text-xs font-black uppercase tracking-wider text-zinc-900 block mb-2">
              Observações do Pedido (Opcional):
            </label>
            <textarea
              rows="2"
              placeholder="Ex: Sem cebola, massa bem passadinha, cortar em 8 pedaços..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full p-3 rounded-2xl bg-zinc-50 border border-zinc-200 text-xs sm:text-sm focus:border-maktub-red focus:bg-white focus:outline-none"
            ></textarea>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 bg-zinc-50 border-t border-zinc-200 flex items-center justify-between gap-3 flex-shrink-0">
          
          {/* Quantity Controls */}
          <div className="flex items-center space-x-2 bg-white border border-zinc-300 rounded-full p-1 shadow-sm">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center text-zinc-700 active:scale-95 transition-all cursor-pointer"
              aria-label="Diminuir quantidade"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="w-7 text-center font-display font-bold text-sm text-zinc-900">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="w-8 h-8 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center text-zinc-700 active:scale-95 transition-all cursor-pointer"
              aria-label="Aumentar quantidade"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleConfirm}
            className="flex-1 py-3 px-5 rounded-full font-display font-extrabold text-xs sm:text-sm uppercase tracking-wider bg-gradient-to-r from-maktub-red to-maktub-red-dark text-white shadow-wine hover:shadow-wine-lg border border-maktub-gold/40 flex items-center justify-between active:scale-95 transition-all cursor-pointer"
          >
            <span>Adicionar ao Pedido</span>
            <span className="font-black text-maktub-gold-light">
              R$ {itemTotal.toFixed(2).replace('.', ',')}
            </span>
          </button>

        </div>

      </div>

    </div>
  );
}
