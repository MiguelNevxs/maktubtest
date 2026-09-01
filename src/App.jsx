import React, { useState, useEffect } from 'react';
import OrderHeader from './components/OrderHeader';
import PromoCarousel from './components/PromoCarousel';
import HomeTab from './components/HomeTab';
import CartTab from './components/CartTab';
import OrdersTab from './components/OrdersTab';
import ProfileTab from './components/ProfileTab';
import BottomNav from './components/BottomNav';
import ProductModal from './components/ProductModal';
import { PRODUCTS, PIZZERIA_INFO } from './data/products';
import { X, Clock, MapPin, Phone } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('inicio');
  const [orderType, setOrderType] = useState('delivery'); // 'delivery' or 'pickup'
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isHoursModalOpen, setIsHoursModalOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);

  // Cart state with localStorage persistence
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('maktub_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Orders history
  const [orders, setOrders] = useState(() => {
    try {
      const saved = localStorage.getItem('maktub_orders');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('maktub_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('maktub_orders', JSON.stringify(orders));
  }, [orders]);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleAddToCart = (newItem) => {
    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex((item) => item.id === newItem.id);
      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex].quantity += newItem.quantity;
        return updated;
      } else {
        return [...prevItems, newItem];
      }
    });
    // Auto switch to cart or notify
    setActiveTab('carrinho');
  };

  const handleUpdateQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(itemId);
    } else {
      setCartItems((prev) =>
        prev.map((item) => (item.id === itemId ? { ...item, quantity: newQuantity } : item))
      );
    }
  };

  const handleRemoveItem = (itemId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleSelectPromo = (promo) => {
    if (promo.productId) {
      const p = PRODUCTS.find((item) => item.id === promo.productId);
      if (p) setSelectedProduct(p);
    } else if (promo.couponCode) {
      setActiveTab('carrinho');
    }
  };

  const handleOrderPlaced = (newOrder) => {
    setOrders((prev) => [newOrder, ...prev]);
  };

  return (
    <div className="min-h-screen bg-[#f7f5f2] text-stone-800 font-sans flex flex-col justify-between selection:bg-maktub-red selection:text-white">
      
      {/* 1. Header with Centered Logo, Status Badge, Location and Delivery Buttons */}
      <OrderHeader
        orderType={orderType}
        setOrderType={setOrderType}
        onOpenHoursModal={() => setIsHoursModalOpen(true)}
        onOpenLocationModal={() => setIsLocationModalOpen(true)}
      />

      {/* 2. Main Content Area */}
      <main className="flex-1 w-full">
        {activeTab === 'inicio' && (
          <>
            {/* Draggable Promo Carousel following the cursor */}
            <PromoCarousel onSelectPromo={handleSelectPromo} />

            {/* Menu List & Search */}
            <HomeTab onSelectProduct={(p) => setSelectedProduct(p)} />
          </>
        )}

        {activeTab === 'carrinho' && (
          <CartTab
            cartItems={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onClearCart={handleClearCart}
            orderType={orderType}
            setOrderType={setOrderType}
            onGoToMenu={() => setActiveTab('inicio')}
            onOrderPlaced={handleOrderPlaced}
          />
        )}

        {activeTab === 'pedidos' && (
          <OrdersTab
            orders={orders}
            onGoToMenu={() => setActiveTab('inicio')}
          />
        )}

        {activeTab === 'perfil' && (
          <ProfileTab />
        )}
      </main>

      {/* 3. Bottom Navigation Bar matching the reference screenshot */}
      <BottomNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartCount={totalCartCount}
      />

      {/* Product Customization Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Hours Modal */}
      {isHoursModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full border-2 border-maktub-gold shadow-2xl relative text-center">
            <button
              onClick={() => setIsHoursModalOpen(false)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-800"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-12 h-12 rounded-full bg-maktub-red/10 text-maktub-red mx-auto flex items-center justify-center mb-3">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-display font-black text-base text-stone-900 uppercase">
              Horário de Funcionamento
            </h3>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">
              <strong>Terça a Domingo:</strong> 18:00 às 23:45<br />
              <strong>Segunda-feira:</strong> Fechado
            </p>
            <span className="inline-block mt-3 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
              ● Aberto para Pedidos no WhatsApp
            </span>
          </div>
        </div>
      )}

      {/* Location Modal */}
      {isLocationModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full border-2 border-maktub-gold shadow-2xl relative text-center">
            <button
              onClick={() => setIsLocationModalOpen(false)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-800"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-12 h-12 rounded-full bg-maktub-red text-maktub-gold mx-auto flex items-center justify-center mb-3 border border-maktub-gold/40">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-display font-black text-base text-stone-900 uppercase">
              Unidade Volta Redonda - RJ
            </h3>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">
              {PIZZERIA_INFO.address}<br />
              WhatsApp: {PIZZERIA_INFO.phone}
            </p>
            <p className="text-[11px] text-stone-500 mt-2 bg-stone-50 p-2.5 rounded-xl border border-stone-200">
              Entregas rápidas em todos os bairros de Volta Redonda!
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
