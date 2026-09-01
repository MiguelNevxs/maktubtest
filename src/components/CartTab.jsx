import React, { useState } from 'react';
import { ShoppingBag, Trash2, Plus, Minus, Send, MapPin, Tag, Check, Sparkles, AlertCircle } from 'lucide-react';
import { PIZZERIA_INFO, VOLTA_REDONDA_NEIGHBORHOODS } from '../data/products';
import confetti from 'canvas-confetti';

export default function CartTab({
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  orderType,
  setOrderType,
  onGoToMenu,
  onOrderPlaced
}) {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [neighborhood, setNeighborhood] = useState(VOLTA_REDONDA_NEIGHBORHOODS[0]);
  const [complement, setComplement] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('PIX');
  const [changeFor, setChangeFor] = useState('');
  const [couponCode, setCouponCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [couponMessage, setCouponMessage] = useState(null);

  // Financial calculations
  const subtotal = cartItems.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);
  const deliveryFee = orderType === 'delivery' ? (subtotal >= PIZZERIA_INFO.freeDeliveryThreshold ? 0 : PIZZERIA_INFO.deliveryFee) : 0;
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

  const handleFinalizeWhatsApp = () => {
    if (!customerName.trim()) {
      alert('Por favor, informe seu Nome antes de enviar o pedido.');
      return;
    }

    if (orderType === 'delivery' && !streetAddress.trim()) {
      alert('Por favor, informe o Endereço (Rua e Número) para entrega em Volta Redonda.');
      return;
    }

    // Confetti celebration
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#7B1E28', '#D8B26E', '#F2D898']
    });

    // Construct WhatsApp message
    let msg = `🍕 *NOVO PEDIDO - MAKTUB PIZZARIA & ESFIHARIA* 🍕\n`;
    msg += `📍 *Volta Redonda - RJ*\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `👤 *Cliente:* ${customerName.trim()}\n`;
    if (customerPhone.trim()) msg += `📱 *WhatsApp:* ${customerPhone.trim()}\n`;
    msg += `🛵 *Tipo:* ${orderType === 'delivery' ? 'Entrega (Delivery)' : 'Retirada no Balcão'}\n`;

    if (orderType === 'delivery') {
      msg += `📍 *Endereço:* ${streetAddress.trim()}\n`;
      msg += `🏘️ *Bairro:* ${neighborhood}\n`;
      if (complement.trim()) msg += `📌 *Complemento:* ${complement.trim()}\n`;
    }

    msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `📋 *ITENS ESCOLHIDOS:*\n\n`;

    cartItems.forEach((item, index) => {
      msg += `${index + 1}. *${item.quantity}x* ${item.name}\n`;
      if (item.size) msg += `   ▫️ Tamanho: ${item.size}\n`;
      if (item.border) msg += `   ▫️ Borda: ${item.border}\n`;
      if (item.notes) msg += `   ▫️ Obs: _${item.notes}_\n`;
      msg += `   💵 Subtotal: R$ ${(item.unitPrice * item.quantity).toFixed(2).replace('.', ',')}\n\n`;
    });

    msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `💰 *Subtotal:* R$ ${subtotal.toFixed(2).replace('.', ',')}\n`;
    if (appliedDiscount > 0) {
      msg += `🏷️ *Desconto (${appliedDiscount}%):* -R$ ${discountAmount.toFixed(2).replace('.', ',')}\n`;
    }
    if (orderType === 'delivery') {
      msg += `🛵 *Taxa de Entrega (VR):* ${deliveryFee === 0 ? 'GRÁTIS' : `R$ ${deliveryFee.toFixed(2).replace('.', ',')}`}\n`;
    }
    msg += `💳 *Forma de Pagamento:* ${paymentMethod}\n`;
    if (paymentMethod === 'Dinheiro' && changeFor.trim()) {
      msg += `💵 *Troco para:* R$ ${changeFor.trim()}\n`;
    }
    msg += `⭐ *TOTAL DO PEDIDO:* R$ ${grandTotal.toFixed(2).replace('.', ',')}\n`;
    msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
    msg += `Aguardando a confirmação da Maktub! Obrigado.`;

    // Save order to history
    if (onOrderPlaced) {
      onOrderPlaced({
        id: `VR-${Date.now().toString().slice(-4)}`,
        date: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
        items: [...cartItems],
        total: grandTotal,
        type: orderType === 'delivery' ? 'Delivery' : 'Retirada',
        status: 'Enviado para o Forno'
      });
    }

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${PIZZERIA_INFO.phoneClean}?text=${encoded}`, '_blank');
  };

  if (cartItems.length === 0) {
    return (
      <div className="w-full max-w-lg mx-auto px-4 py-16 text-center pb-24">
        <div className="w-20 h-20 mx-auto rounded-full bg-maktub-red/10 flex items-center justify-center text-maktub-red mb-4 border border-maktub-gold/40">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <h2 className="font-display font-bold text-lg sm:text-xl text-stone-900">Seu carrinho está vazio</h2>
        <p className="text-xs sm:text-sm text-stone-500 mt-1 max-w-xs mx-auto">
          Adicione pizzas artesanais, esfihas ou combos deliciosos para fazer seu pedido em Volta Redonda!
        </p>
        <button
          onClick={onGoToMenu}
          className="mt-6 px-6 py-2.5 rounded-full bg-maktub-red text-white font-display font-bold text-xs uppercase tracking-wider shadow-wine cursor-pointer hover:bg-maktub-red-hover"
        >
          Ver Cardápio
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-4 pb-28 space-y-4">
      
      {/* Header Title */}
      <div className="flex items-center justify-between">
        <h2 className="font-display font-black text-lg sm:text-xl text-stone-900 uppercase">
          Finalizar Pedido
        </h2>
        <button
          onClick={onClearCart}
          className="text-xs text-red-600 hover:underline flex items-center space-x-1"
        >
          <Trash2 className="w-3.5 h-3.5" />
          <span>Limpar</span>
        </button>
      </div>

      {/* Items List */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-stone-200 space-y-3">
        <span className="text-xs font-black uppercase tracking-wider text-stone-700 block">
          Itens Selecionados ({cartItems.length}):
        </span>

        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between gap-3 py-2.5 border-b border-stone-100 last:border-0"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-12 h-12 rounded-xl object-cover border border-stone-200 flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <h4 className="font-display font-bold text-xs sm:text-sm text-stone-900 truncate">
                {item.name}
              </h4>
              {item.size && (
                <span className="text-[11px] text-stone-500 block">{item.size}</span>
              )}
              {item.border && (
                <span className="text-[11px] text-maktub-red font-medium block">Borda: {item.border}</span>
              )}
              <span className="text-xs font-black text-maktub-red block mt-0.5">
                R$ {(item.unitPrice * item.quantity).toFixed(2).replace('.', ',')}
              </span>
            </div>

            {/* Quantity modifier */}
            <div className="flex items-center space-x-1.5 bg-stone-100 rounded-full p-1">
              <button
                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-stone-700 shadow-sm"
              >
                <Minus className="w-3 h-3" />
              </button>
              <span className="w-4 text-center font-bold text-xs text-stone-800">
                {item.quantity}
              </span>
              <button
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-stone-700 shadow-sm"
              >
                <Plus className="w-3 h-3" />
              </button>
            </div>

            <button
              onClick={() => onRemoveItem(item.id)}
              className="text-stone-400 hover:text-red-600 p-1"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Order Mode Switch */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-stone-200">
        <label className="text-xs font-black uppercase tracking-wider text-stone-700 block mb-2">
          Modo de Entrega:
        </label>
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => setOrderType('delivery')}
            className={`py-2 px-3 rounded-xl font-display text-xs font-bold transition-all border ${
              orderType === 'delivery'
                ? 'bg-maktub-red text-white border-maktub-red shadow-sm'
                : 'bg-stone-50 text-stone-700 border-stone-200'
            }`}
          >
            🛵 Entrega (Delivery VR)
          </button>
          <button
            type="button"
            onClick={() => setOrderType('pickup')}
            className={`py-2 px-3 rounded-xl font-display text-xs font-bold transition-all border ${
              orderType === 'pickup'
                ? 'bg-maktub-red text-white border-maktub-red shadow-sm'
                : 'bg-stone-50 text-stone-700 border-stone-200'
            }`}
          >
            🏪 Retirada no Balcão
          </button>
        </div>
      </div>

      {/* Customer Info Form */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-stone-200 space-y-2.5">
        <label className="text-xs font-black uppercase tracking-wider text-stone-700 block">
          Seus Dados para Contato:
        </label>
        <input
          type="text"
          placeholder="Seu Nome Completo *"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs focus:border-maktub-red focus:bg-white outline-none"
        />
        <input
          type="tel"
          placeholder="WhatsApp / Telefone"
          value={customerPhone}
          onChange={(e) => setCustomerPhone(e.target.value)}
          className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs focus:border-maktub-red focus:bg-white outline-none"
        />

        {orderType === 'delivery' && (
          <>
            <div className="pt-2">
              <label className="text-xs font-bold text-stone-700 block mb-1">
                Bairro em Volta Redonda:
              </label>
              <select
                value={neighborhood}
                onChange={(e) => setNeighborhood(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs focus:border-maktub-red focus:bg-white outline-none"
              >
                {VOLTA_REDONDA_NEIGHBORHOODS.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            <input
              type="text"
              placeholder="Rua e Número da Residência *"
              value={streetAddress}
              onChange={(e) => setStreetAddress(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs focus:border-maktub-red focus:bg-white outline-none"
            />
            <input
              type="text"
              placeholder="Complemento / Ponto de Referência"
              value={complement}
              onChange={(e) => setComplement(e.target.value)}
              className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs focus:border-maktub-red focus:bg-white outline-none"
            />
          </>
        )}
      </div>

      {/* Payment & Coupon */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-stone-200 space-y-3">
        <div>
          <label className="text-xs font-black uppercase tracking-wider text-stone-700 block mb-1.5">
            Forma de Pagamento:
          </label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs focus:border-maktub-red focus:bg-white outline-none"
          >
            <option value="PIX">PIX (Chave enviada no WhatsApp)</option>
            <option value="Cartão de Crédito">Cartão de Crédito na Entrega</option>
            <option value="Cartão de Débito">Cartão de Débito na Entrega</option>
            <option value="Dinheiro">Dinheiro</option>
          </select>

          {paymentMethod === 'Dinheiro' && (
            <input
              type="text"
              placeholder="Precisa de troco para quanto? (Ex: R$ 100)"
              value={changeFor}
              onChange={(e) => setChangeFor(e.target.value)}
              className="mt-2 w-full p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs focus:border-maktub-red focus:bg-white outline-none"
            />
          )}
        </div>

        {/* Coupon */}
        <form onSubmit={handleApplyCoupon} className="pt-2 border-t border-stone-100">
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Cupom (Ex: MAKTUB10)"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="flex-1 p-2.5 rounded-xl bg-stone-50 border border-stone-200 text-xs uppercase focus:border-maktub-red focus:bg-white outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2.5 rounded-xl bg-stone-800 hover:bg-black text-white text-xs font-bold uppercase transition-colors cursor-pointer"
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
      </div>

      {/* Summary and WhatsApp Button */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-stone-200 space-y-3">
        <div className="space-y-1.5 text-xs text-stone-600">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span className="font-semibold text-stone-800">R$ {subtotal.toFixed(2).replace('.', ',')}</span>
          </div>
          {appliedDiscount > 0 && (
            <div className="flex justify-between text-emerald-600 font-semibold">
              <span>Desconto ({appliedDiscount}%):</span>
              <span>- R$ {discountAmount.toFixed(2).replace('.', ',')}</span>
            </div>
          )}
          {orderType === 'delivery' && (
            <div className="flex justify-between">
              <span>Taxa de Entrega (Volta Redonda):</span>
              <span className="font-semibold text-stone-800">
                {deliveryFee === 0 ? <span className="text-emerald-600 font-bold">GRÁTIS</span> : `R$ ${deliveryFee.toFixed(2).replace('.', ',')}`}
              </span>
            </div>
          )}
          <div className="flex justify-between text-base font-display font-black text-stone-900 pt-2 border-t border-stone-200">
            <span>Total:</span>
            <span className="text-maktub-red text-lg">R$ {grandTotal.toFixed(2).replace('.', ',')}</span>
          </div>
        </div>

        <button
          onClick={handleFinalizeWhatsApp}
          className="w-full py-3.5 px-4 rounded-2xl font-display font-black text-xs sm:text-sm uppercase tracking-wider bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg flex items-center justify-center space-x-2 transition-all transform active:scale-98 cursor-pointer"
        >
          <Send className="w-4 h-4 text-white" />
          <span>ENVIAR PEDIDO NO WHATSAPP</span>
        </button>
      </div>

    </div>
  );
}
