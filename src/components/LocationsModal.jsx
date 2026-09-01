import React from 'react';
import { X, MapPin, Clock, Phone, Navigation, ShieldCheck } from 'lucide-react';
import { PIZZERIA_INFO } from '../data/products';

export default function LocationsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl overflow-hidden shadow-2xl max-w-lg w-full border-2 border-maktub-gold relative p-6 sm:p-8 animate-scaleUp text-zinc-800"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-zinc-100 text-zinc-500 hover:text-zinc-900 flex items-center justify-center transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center">
          <div className="w-14 h-14 rounded-full bg-maktub-red text-maktub-gold mx-auto flex items-center justify-center border-2 border-maktub-gold shadow-md mb-3">
            <MapPin className="w-7 h-7" />
          </div>

          <span className="text-[11px] font-black uppercase tracking-widest text-maktub-red bg-maktub-red/10 px-3 py-1 rounded-full">
            UNIDADES & ATENDIMENTO
          </span>

          <h3 className="text-2xl sm:text-3xl font-display font-black text-zinc-900 mt-2 uppercase">
            Nossa Localização
          </h3>
          <p className="text-xs sm:text-sm text-zinc-600 mt-1">
            Atendimento no balcão e entrega rápida em um raio de até 12 km.
          </p>
        </div>

        <div className="my-6 space-y-4">
          <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-2">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-maktub-red flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm text-zinc-900">Unidade Principal Maktub</h4>
                <p className="text-xs text-zinc-600">{PIZZERIA_INFO.address}</p>
                <span className="text-[11px] text-emerald-600 font-semibold block mt-1">
                  ✓ Estacionamento no local e retirada rápida
                </span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-2">
            <div className="flex items-start space-x-3">
              <Clock className="w-5 h-5 text-maktub-red flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm text-zinc-900">Horários de Funcionamento</h4>
                <p className="text-xs text-zinc-600">{PIZZERIA_INFO.hours}</p>
                <p className="text-[11px] text-zinc-500 mt-0.5">Segunda-feira: Fechado para descanso da equipe</p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-2">
            <div className="flex items-start space-x-3">
              <Phone className="w-5 h-5 text-maktub-red flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm text-zinc-900">Contato & Pedidos</h4>
                <p className="text-xs text-zinc-600">WhatsApp Oficial: {PIZZERIA_INFO.phone}</p>
                <p className="text-xs text-zinc-600">Instagram: {PIZZERIA_INFO.instagram}</p>
              </div>
            </div>
          </div>
        </div>

        <a
          href={`https://wa.me/${PIZZERIA_INFO.phoneClean}?text=${encodeURIComponent('Olá Maktub! Gostaria de consultar se entregam no meu endereço.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 rounded-2xl font-display font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-maktub-red to-maktub-red-dark text-white flex items-center justify-center space-x-2 shadow-wine hover:shadow-wine-lg border border-maktub-gold/40"
        >
          <Navigation className="w-4 h-4 text-maktub-gold" />
          <span>Consultar Entrega no WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
