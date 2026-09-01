import React from 'react';
import { Home, ShoppingCart, ClipboardList, User } from 'lucide-react';

export default function BottomNav({ activeTab, setActiveTab, cartCount }) {
  const navItems = [
    { id: 'inicio', label: 'Início', icon: Home },
    { id: 'carrinho', label: 'Carrinho', icon: ShoppingCart, badge: cartCount },
    { id: 'pedidos', label: 'Pedidos', icon: ClipboardList },
    { id: 'perfil', label: 'Perfil', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-maktub-red shadow-2xl border-t border-maktub-gold/30">
      <div className="max-w-md sm:max-w-lg mx-auto flex items-center justify-around px-2 py-1.5">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-2xl transition-all duration-200 relative cursor-pointer ${
                isActive
                  ? 'bg-maktub-red-dark text-maktub-gold-lighter font-bold shadow-inner scale-105 border border-maktub-gold/40'
                  : 'text-stone-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 ${isActive ? 'text-maktub-gold' : 'text-stone-300'}`} />
                
                {/* Cart Badge */}
                {item.badge > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-maktub-gold text-maktub-charcoal-dark font-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center border border-maktub-red-darker shadow-sm">
                    {item.badge}
                  </span>
                )}
              </div>

              <span className={`text-[11px] mt-0.5 tracking-wide ${isActive ? 'text-maktub-gold-light font-bold' : 'text-stone-300 font-medium'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
