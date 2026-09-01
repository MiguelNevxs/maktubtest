import React, { useRef, useState, useEffect } from 'react';
import { PROMO_BANNERS } from '../data/products';
import { ChevronLeft, ChevronRight, Sparkles, Tag, ArrowRight } from 'lucide-react';

export default function PromoCarousel({ onSelectPromo }) {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasMoved, setHasMoved] = useState(false);

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setHasMoved(false);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Drag sensitivity
    if (Math.abs(walk) > 5) {
      setHasMoved(true);
    }
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
    updateActiveIndex();
  };

  // Touch drag handlers for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setHasMoved(false);
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    if (Math.abs(walk) > 5) {
      setHasMoved(true);
    }
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const updateActiveIndex = () => {
    if (!sliderRef.current) return;
    const scrollPos = sliderRef.current.scrollLeft;
    const itemWidth = sliderRef.current.offsetWidth * 0.85;
    const index = Math.round(scrollPos / itemWidth);
    setActiveIndex(Math.max(0, Math.min(index, PROMO_BANNERS.length - 1)));
  };

  const scrollToIndex = (index) => {
    if (!sliderRef.current) return;
    const items = sliderRef.current.querySelectorAll('.promo-card');
    if (items[index]) {
      items[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      setActiveIndex(index);
    }
  };

  const handleCardClick = (promo) => {
    // If the user just dragged, don't trigger click action
    if (hasMoved) return;
    onSelectPromo(promo);
  };

  return (
    <section className="w-full py-4 px-2 sm:px-4 max-w-5xl mx-auto select-none">
      
      <div className="flex items-center justify-between px-3 mb-2.5">
        <div className="flex items-center space-x-1.5 text-xs font-display font-black text-maktub-red uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-maktub-gold" />
          <span>Destaques & Promoções</span>
        </div>

        {/* Carousel Navigation Arrows */}
        <div className="flex items-center space-x-1">
          <button
            onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
            className="w-7 h-7 rounded-full bg-stone-200/80 hover:bg-maktub-red hover:text-white text-stone-700 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scrollToIndex(Math.min(PROMO_BANNERS.length - 1, activeIndex + 1))}
            className="w-7 h-7 rounded-full bg-stone-200/80 hover:bg-maktub-red hover:text-white text-stone-700 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Próximo"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Draggable Banner Carousel Container following the mouse cursor */}
      <div
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUpOrLeave}
        className={`flex space-x-4 overflow-x-auto pb-3 pt-1 px-3 scrollbar-none no-scrollbar snap-x snap-mandatory ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        style={{ scrollBehavior: isDragging ? 'auto' : 'smooth' }}
      >
        {PROMO_BANNERS.map((promo, idx) => (
          <div
            key={promo.id}
            onClick={() => handleCardClick(promo)}
            className={`promo-card flex-shrink-0 w-[85%] sm:w-[420px] md:w-[460px] snap-center rounded-3xl overflow-hidden shadow-elegant hover:shadow-2xl border-2 border-maktub-gold/40 hover:border-maktub-gold transition-all duration-300 relative group cursor-pointer bg-gradient-to-r ${promo.bgGradient} text-white`}
          >
            <div className="p-5 sm:p-6 flex items-center justify-between gap-3 relative z-10">
              
              {/* Left Text */}
              <div className="flex-1 space-y-1">
                <span className="text-[10px] font-black uppercase tracking-wider bg-maktub-gold text-maktub-charcoal-dark px-2.5 py-0.5 rounded-full inline-block mb-1">
                  {promo.tag}
                </span>

                <h3 className="text-lg sm:text-xl font-display font-black text-white leading-tight uppercase">
                  {promo.title}
                </h3>

                <p className="text-xs text-maktub-gold-light/90 line-clamp-1 font-medium">
                  {promo.subtitle}
                </p>

                <div className="pt-2 flex items-baseline space-x-2">
                  <span className="text-lg sm:text-xl font-display font-black text-maktub-gold">
                    {promo.price}
                  </span>
                  {promo.oldPrice && (
                    <span className="text-[11px] text-zinc-400 line-through">
                      {promo.oldPrice}
                    </span>
                  )}
                </div>

                <div className="pt-2 flex items-center text-xs font-bold text-maktub-gold-light group-hover:translate-x-1 transition-transform">
                  <span>Pedir Agora</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>

              {/* Right Image */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-maktub-gold/60 shadow-lg flex-shrink-0 bg-black/40">
                <img
                  src={promo.image}
                  alt={promo.title}
                  draggable="false"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

            </div>

            {/* Glowing Accent */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-maktub-gold/20 rounded-full blur-2xl pointer-events-none"></div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center space-x-1.5 mt-2">
        {PROMO_BANNERS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollToIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              activeIndex === idx
                ? 'w-6 bg-maktub-red'
                : 'w-2 bg-stone-300 hover:bg-stone-400'
            }`}
            aria-label={`Ir para promoção ${idx + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
