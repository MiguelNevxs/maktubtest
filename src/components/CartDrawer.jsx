import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, Send, MapPin, Tag, Check, Sparkles, AlertCircle } from 'lucide-react';
import { PIZZERIA_INFO } from '../data/products';
import confetti from 'canvas-confetti';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) {
  if (!isOpen) return null;

  const [deliveryType, setDeliveryType] = useState('delivery'); // 'delivery' or 'pickup'
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [address, setAddress] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [complement, setComplement] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('PIX');
  const [changeFor, setChangeFor] = useState('');
  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [couponMessage, setCouponMessage] = useState(null);

  // Financial calculations
  const subtotal = cartItems.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);
  const deliveryFee = deliveryType === 'delivery' ? (subtotal >= PIZZERIA_INFO.freeDeliveryThreshold ? 0 : PIZZERIA_INFO.deliveryFee) : 0;
  const discountAmount = (subtotal * appliedDiscount) / 100;
  const grandTotal = Math.max(0, subtotal - discountAmount + deliveryFee);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    const clean = couponCode.trim().toUpperCase();
    if (clean === 'MAKTUB10') {
      setAppliedDiscount(10);
      setCouponMessage({ type: 'success', text: 'Cupom MAKTUB10 aplicado: 10% de desconto!' });
    } else if (clean === 'FIDELIDADE') {
      setAppliedDiscount(15);
      setCouponMessage({ type: 'success', text: 'Cupom FIDELIDADE aplicado: 15% de desconto!' });
    } else {
      setCouponMessage({ type: 'error', text: 'Cupom inválido ou expirado.' });
    }
  };

  const handleSendToWhatsApp = () => {
    if (!customerName.trim()) {
      alert('Por favor, informe seu Nome antes de finalizar o pedido.');
      return;
    }

    if (deliveryType === 'delivery' && (!address.trim() || !neighborhood.trim())) {
      alert('Por favor, informe o Endereço e Bairro para entrega.');
      return;
    }

    // Trigger confetti celebration
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#7B1E28', '#D8B26E', '#F2D898']
    });

    // Format WhatsApp message
    let msg = `🍕 *NOVO PEDIDO - MAKTUB PIZZARIA & ESFIHARIA* 🍕\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `👤 *Cliente:* ${customerName.trim()}\n`;
    if (customerPhone.trim()) msg += `📱 *Telefone:* ${customerPhone.trim()}\n`;
    msg += `🛵 *Tipo:* ${deliveryType === 'delivery' ? 'Entrega em Domicílio (Delivery)' : 'Retirada no Balcão'}\n`;
    
    if (deliveryType === 'delivery') {
      msg += `📍 *Endereço:* ${address.trim()}\n`;
      msg += `🏘️ *Bairro:* ${neighborhood.trim()}\n`;
      if (complement.trim()) msg += `📌 *Complemento:* ${complement.trim()}\n`;
    }

    msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `📋 *ITENS DO PEDIDO:*\n\n`;

    cartItems.forEach((item, index) => {
      msg += `${index + 1}. *${item.quantity}x* ${item.name}\n`;
      if (item.size) msg += `   ▫️ Tamanho: ${item.size}\n`;
      if (item.border) msg += `   ▫️ Borda: ${item.border}\n`;
      if (item.notes) msg += `   ▫️ Obs: _${item.notes}_\n`;
      msg += `   💵 Valor: R$ ${(item.unitPrice * item.quantity).toFixed(2).replace('.', ',')}\n\n`;
    });

    msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `💰 *Subtotal:* R$ ${subtotal.toFixed(2).replace('.', ',')}\n`;
    if (appliedDiscount > 0) {
      msg += `🏷️ *Desconto (${appliedDiscount}%):* -R$ ${discountAmount.toFixed(2).replace('.', ',')}\n`;
    }
    if (deliveryType === 'delivery') {
      msg += `🛵 *Taxa de Entrega:* ${deliveryFee === 0 ? 'GRÁTIS' : `R$ ${deliveryFee.toFixed(2).replace('.', ',')}`}\n`;
    }
    msg += `💳 *Forma de Pagamento:* ${paymentMethod}\n`;
    if (paymentMethod === 'Dinheiro' && changeFor.trim()) {
      msg += `💵 *Troco para:* R$ ${changeFor.trim()}\n`;
    }
    msg += `⭐ *VALOR TOTAL:* R$ ${grandTotal.toFixed(2).replace('.', ',')}\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `Obrigado por escolher a Maktub! Aguardamos a confirmação.`;

    const encodedMsg = encodeURIComponent(msg);
    const waUrl = `https://wa.me/${PIZZERIA_INFO.phoneClean}?text=${encodedMsg}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
      ></div>

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l-2 border-maktub-gold animate-slideLeft">
          
          {/* Cart Header */}
          <div className="p-5 bg-gradient-to-r from-maktub-charcoal-dark to-maktub-red-darker text-white flex items-center justify-between border-b border-maktub-gold/30">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-full bg-maktub-red text-maktub-gold flex items-center justify-center border border-maktub-gold/40">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-display font-bold text-lg leading-tight">Seu Carrinho</h2>
                <p className="text-xs text-maktub-gold-light/90">
                  {cartItems.length} {cartItems.length === 1 ? 'item selecionado' : 'itens selecionados'}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Fechar Carrinho"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 mx-auto rounded-full bg-maktub-gold/10 flex items-center justify-center text-maktub-gold border border-maktub-gold/30 mb-4">
                  <ShoppingBag className="w-10 h-10 opacity-70" />
                </div>
                <h3 className="font-display font-bold text-zinc-800 text-lg">Seu carrinho está vazio</h3>
                <p className="text-xs sm:text-sm text-zinc-500 mt-1 max-w-xs mx-auto">
                  Adicione pizzas suculentas, esfihas abertas ou combos do nosso cardápio!
                </p>
                <button
                  onClick={onClose}
                  className="mt-6 px-6 py-2.5 rounded-full bg-gradient-to-r from-maktub-red to-maktub-red-dark text-white font-display font-bold text-xs uppercase tracking-wider shadow-md"
                >
                  Explorar Cardápio
                </button>
              </div>
            ) : (
              <>
                {/* List of Products */}
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center justify-between gap-3 hover:border-maktub-gold/50 transition-colors"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-xl object-cover border border-zinc-200 flex-shrink-0"
                      />

                      <div className="flex-1 min-w-0">
                        <h4 className="font-display font-bold text-xs sm:text-sm text-zinc-900 truncate">
                          {item.name}
                        </h4>
                        {item.size && (
                          <span className="text-[11px] text-zinc-600 block">
                            Tamanho: {item.size}
                          </span>
                        )}
                        {item.border && (
                          <span className="text-[11px] text-maktub-red font-medium block">
                            Borda: {item.border}
                          </span>
                        )}
                        <span className="text-xs font-black text-maktub-red mt-1 block">
                          R$ {(item.unitPrice * item.quantity).toFixed(2).replace('.', ',')}
                        </span>
                      </div>

                      {/* Quantity Modifier */}
                      <div className="flex flex-col items-end space-y-2">
                        <div className="flex items-center space-x-1.5 bg-white border border-zinc-300 rounded-full p-0.5">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="w-6 h-6 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center text-zinc-700"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-4 text-center font-bold text-xs text-zinc-800">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center text-zinc-700"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-zinc-400 hover:text-red-600 p-1 transition-colors"
                          title="Remover item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Delivery Type Switch */}
                <div className="pt-3 border-t border-zinc-200">
                  <label className="text-xs font-black uppercase tracking-wider text-zinc-900 block mb-2">
                    Tipo de Atendimento:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setDeliveryType('delivery')}
                      className={`py-2 px-3 rounded-xl font-display text-xs font-bold transition-all border ${
                        deliveryType === 'delivery'
                          ? 'bg-maktub-red text-white border-maktub-red shadow-sm'
                          : 'bg-zinc-50 text-zinc-700 border-zinc-200 hover:bg-zinc-100'
                      }`}
                    >
                      🛵 Entrega (Delivery)
                    </button>
                    <button
                      type="button"
                      onClick={() => setDeliveryType('pickup')}
                      className={`py-2 px-3 rounded-xl font-display text-xs font-bold transition-all border ${
                        deliveryType === 'pickup'
                          ? 'bg-maktub-red text-white border-maktub-red shadow-sm'
                          : 'bg-zinc-50 text-zinc-700 border-zinc-200 hover:bg-zinc-100'
                      }`}
                    >
                      🏪 Retirar no Balcão
                    </button>
                  </div>
                </div>

                {/* Customer Data Form */}
                <div className="space-y-2.5 pt-2">
                  <input
                    type="text"
                    placeholder="Seu Nome Completo *"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-xs focus:border-maktub-red focus:bg-white outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="WhatsApp / Telefone"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-xs focus:border-maktub-red focus:bg-white outline-none"
                  />

                  {deliveryType === 'delivery' && (
                    <>
                      <input
                        type="text"
                        placeholder="Rua e Número *"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full p-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-xs focus:border-maktub-red focus:bg-white outline-none"
                      />
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          placeholder="Bairro *"
                          value={neighborhood}
                          onChange={(e) => setNeighborhood(e.target.value)}
                          className="w-full p-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-xs focus:border-maktub-red focus:bg-white outline-none"
                        />
                        <input
                          type="text"
                          placeholder="Complemento / Apto"
                          value={complement}
                          onChange={(e) => setComplement(e.target.value)}
                          className="w-full p-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-xs focus:border-maktub-red focus:bg-white outline-none"
                        />
                      </div>
                    </>
                  )}
                </div>

                {/* Payment Method */}
                <div className="pt-2">
                  <label className="text-xs font-black uppercase tracking-wider text-zinc-900 block mb-2">
                    Forma de Pagamento:
                  </label>
                  <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-xs focus:border-maktub-red focus:bg-white outline-none"
                  >
                    <option value="PIX">PIX (Chave enviada no WhatsApp)</option>
                    <option value="Cartão de Crédito">Cartão de Crédito na Entrega</option>
                    <option value="Cartão de Débito">Cartão de Débito na Entrega</option>
                    <option value="Dinheiro">Dinheiro</option>
                  </select>

                  {paymentMethod === 'Dinheiro' && (
                    <input
                      type="text"
                      placeholder="Troco para quanto? (Ex: R$ 100)"
                      value={changeFor}
                      onChange={(e) => setChangeFor(e.target.value)}
                      className="mt-2 w-full p-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-xs focus:border-maktub-red focus:bg-white outline-none"
                    />
                  )}
                </div>

                {/* Coupon Input */}
                <form onSubmit={handleApplyCoupon} className="pt-2">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Cupom (Ex: MAKTUB10)"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-1 p-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-xs uppercase focus:border-maktub-red focus:bg-white outline-none"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-black text-white text-xs font-bold uppercase transition-colors"
                    >
                      Aplicar
                    </button>
                  </div>
                  {couponMessage && (
                    <p className={`text-xs mt-1.5 font-medium ${couponMessage.type === 'success' ? 'text-emerald-600' : 'text-red-500'}`}>
                      {couponMessage.text}
                    </p>
                  )}
                </form>
              </>
            )}
          </div>

          {/* Cart Summary & WhatsApp Checkout */}
          {cartItems.length > 0 && (
            <div className="p-5 bg-zinc-50 border-t border-zinc-200 space-y-3">
              <div className="space-y-1.5 text-xs text-zinc-600">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-semibold text-zinc-800">R$ {subtotal.toFixed(2).replace('.', ',')}</span>
                </div>
                {appliedDiscount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-semibold">
                    <span>Desconto ({appliedDiscount}%):</span>
                    <span>- R$ {discountAmount.toFixed(2).replace('.', ',')}</span>
                  </div>
                )}
                {deliveryType === 'delivery' && (
                  <div className="flex justify-between">
                    <span>Taxa de Entrega:</span>
                    <span className="font-semibold text-zinc-800">
                      {deliveryFee === 0 ? <span className="text-emerald-600 font-bold">GRÁTIS</span> : `R$ ${deliveryFee.toFixed(2).replace('.', ',')}`}
                    </span>
                  </div>
                )}
                <div className="flex justify-between text-base font-display font-black text-zinc-900 pt-2 border-t border-zinc-200">
                  <span>Total Geral:</span>
                  <span className="text-maktub-red text-lg">R$ {grandTotal.toFixed(2).replace('.', ',')}</span>
                </div>
              </div>

              {/* Send Order Button */}
              <button
                onClick={handleSendToWhatsApp}
                className="w-full py-3.5 px-4 rounded-2xl font-display font-black text-xs sm:text-sm uppercase tracking-wider bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg flex items-center justify-center space-x-2 transition-all transform active:scale-98 cursor-pointer"
              >
                <Send className="w-4 h-4 text-white" />
                <span>FINALIZAR PEDIDO NO WHATSAPP</span>
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
