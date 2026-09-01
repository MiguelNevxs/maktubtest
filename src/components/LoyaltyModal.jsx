import React from 'react';
import { X, Gift, Star, Award, Sparkles, CheckCircle2, Copy } from 'lucide-react';

export default function LoyaltyModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [copied, setCopied] = React.useState(false);

  const copyCoupon = () => {
    navigator.clipboard.writeText('MAKTUB10');
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-lg w-full border-2 border-maktub-gold relative p-6 sm:p-8 animate-scaleUp"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-zinc-100 text-zinc-500 hover:text-zinc-900 flex items-center justify-center transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-maktub-red to-maktub-red-dark mx-auto flex items-center justify-center text-maktub-gold border-2 border-maktub-gold shadow-lg mb-4">
            <Gift className="w-8 h-8" />
          </div>

          <span className="text-[11px] font-black uppercase tracking-widest text-maktub-red bg-maktub-red/10 px-3 py-1 rounded-full">
            CLUBE MAKTUB REWARDS
          </span>

          <h3 className="text-2xl sm:text-3xl font-display font-black text-zinc-900 mt-2 uppercase">
            Como Funciona o Programa
          </h3>

          <p className="text-xs sm:text-sm text-zinc-600 mt-2">
            Valorizamos a sua fidelidade. A cada pedido realizado pelo site ou WhatsApp, você acumula pontos automáticos vinculados ao seu número de telefone!
          </p>
        </div>

        {/* Steps */}
        <div className="my-6 space-y-3">
          <div className="p-3.5 rounded-2xl bg-amber-50/60 border border-maktub-gold/40 flex items-start space-x-3 text-left">
            <div className="w-6 h-6 rounded-full bg-maktub-gold text-maktub-charcoal-dark font-black text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
              1
            </div>
            <div>
              <h4 className="font-bold text-xs sm:text-sm text-zinc-900">Faça seus Pedidos</h4>
              <p className="text-[11px] sm:text-xs text-zinc-600">A cada R$ 10 em compras, você ganha 10 pontos Maktub.</p>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-amber-50/60 border border-maktub-gold/40 flex items-start space-x-3 text-left">
            <div className="w-6 h-6 rounded-full bg-maktub-gold text-maktub-charcoal-dark font-black text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
              2
            </div>
            <div>
              <h4 className="font-bold text-xs sm:text-sm text-zinc-900">Acumule e Suba de Nível</h4>
              <p className="text-[11px] sm:text-xs text-zinc-600">Ao atingir 100 pontos, ganhe 1 Esfiha Aberta Salgada ou Doce.</p>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-amber-50/60 border border-maktub-gold/40 flex items-start space-x-3 text-left">
            <div className="w-6 h-6 rounded-full bg-maktub-gold text-maktub-charcoal-dark font-black text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
              3
            </div>
            <div>
              <h4 className="font-bold text-xs sm:text-sm text-zinc-900">Resgate Pizzas Grandes Grátis</h4>
              <p className="text-[11px] sm:text-xs text-zinc-600">Com 300 pontos você resgata qualquer Pizza Tradicional Grande inteiramente grátis.</p>
            </div>
          </div>
        </div>

        {/* First order coupon card */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-maktub-charcoal-dark to-maktub-red-darker text-white border border-maktub-gold/50 flex items-center justify-between">
          <div className="text-left">
            <span className="text-[10px] text-maktub-gold uppercase tracking-wider block font-bold">CUPOM DE BOAS-VINDAS</span>
            <span className="font-display font-black text-lg text-white">MAKTUB10</span>
          </div>
          <button
            onClick={copyCoupon}
            className="px-3.5 py-1.5 rounded-xl bg-maktub-gold hover:bg-maktub-gold-light text-maktub-charcoal-dark text-xs font-bold uppercase transition-all flex items-center space-x-1.5 cursor-pointer"
          >
            {copied ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                <span>Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copiar Cupom</span>
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
}
