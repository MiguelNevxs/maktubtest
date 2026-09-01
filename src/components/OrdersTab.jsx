import React from 'react';
import { ClipboardList, Clock, Flame, Bike, CheckCircle2, ShoppingBag, MessageCircle } from 'lucide-react';
import { PIZZERIA_INFO } from '../data/products';

export default function OrdersTab({ orders, onGoToMenu }) {
  if (!orders || orders.length === 0) {
    return (
      <div className="w-full max-w-lg mx-auto px-4 py-16 text-center pb-24">
        <div className="w-20 h-20 mx-auto rounded-full bg-stone-100 flex items-center justify-center text-stone-400 mb-4 border border-stone-200">
          <ClipboardList className="w-10 h-10" />
        </div>
        <h2 className="font-display font-bold text-lg sm:text-xl text-stone-900">Nenhum pedido recente</h2>
        <p className="text-xs sm:text-sm text-stone-500 mt-1 max-w-xs mx-auto">
          Assim que você enviar um pedido pelo WhatsApp, ele aparecerá aqui com o status de preparo!
        </p>
        <button
          onClick={onGoToMenu}
          className="mt-6 px-6 py-2.5 rounded-full bg-maktub-red text-white font-display font-bold text-xs uppercase tracking-wider shadow-wine cursor-pointer hover:bg-maktub-red-hover"
        >
          Fazer Pedido Agora
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-4 pb-28 space-y-4">
      <h2 className="font-display font-black text-lg sm:text-xl text-stone-900 uppercase">
        Meus Pedidos Recentes
      </h2>

      {orders.map((order) => (
        <div
          key={order.id}
          className="bg-white rounded-2xl p-5 shadow-sm border border-stone-200 space-y-4"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-stone-100 pb-3">
            <div>
              <span className="text-xs font-bold text-maktub-red uppercase">Pedido #{order.id}</span>
              <span className="text-[11px] text-stone-500 block">Hoje às {order.date} • {order.type}</span>
            </div>
            <span className="text-xs font-black px-3 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-300 flex items-center space-x-1">
              <Flame className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
              <span>No Forno a Lenha</span>
            </span>
          </div>

          {/* Progress Tracker */}
          <div className="py-2">
            <div className="grid grid-cols-4 gap-1 text-center">
              <div className="space-y-1">
                <div className="w-7 h-7 mx-auto rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold">
                  ✓
                </div>
                <span className="text-[10px] font-bold text-stone-700 block leading-tight">Recebido</span>
              </div>
              <div className="space-y-1">
                <div className="w-7 h-7 mx-auto rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold">
                  ✓
                </div>
                <span className="text-[10px] font-bold text-stone-700 block leading-tight">Massa</span>
              </div>
              <div className="space-y-1">
                <div className="w-7 h-7 mx-auto rounded-full bg-maktub-red text-white flex items-center justify-center text-xs font-bold ring-4 ring-maktub-red/20 animate-pulse">
                  <Flame className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] font-bold text-maktub-red block leading-tight">Forno</span>
              </div>
              <div className="space-y-1">
                <div className="w-7 h-7 mx-auto rounded-full bg-stone-200 text-stone-500 flex items-center justify-center text-xs font-bold">
                  <Bike className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] text-stone-400 block leading-tight">Entrega</span>
              </div>
            </div>
          </div>

          {/* Items Preview */}
          <div className="text-xs text-stone-600 space-y-1 bg-stone-50 p-3 rounded-xl">
            {order.items.map((it, idx) => (
              <div key={idx} className="flex justify-between">
                <span>{it.quantity}x {it.name} {it.size ? `(${it.size})` : ''}</span>
                <span className="font-semibold text-stone-800">R$ {(it.unitPrice * it.quantity).toFixed(2).replace('.', ',')}</span>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-2 border-t border-stone-100">
            <span className="text-xs text-stone-500">
              Total: <strong className="text-sm font-black text-maktub-red">R$ {order.total.toFixed(2).replace('.', ',')}</strong>
            </span>

            <a
              href={`https://wa.me/${PIZZERIA_INFO.phoneClean}?text=${encodeURIComponent(`Olá Maktub! Gostaria de consultar o status do meu pedido #${order.id}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center space-x-1.5 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Acompanhar no WhatsApp</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
