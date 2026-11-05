import React, { useState, useMemo } from 'react';
import { Search, Plus, Minus, Check, Clock, Flame, Info, Coffee, CupSoda, Utensils, UtensilsCrossed, Cake, Sparkles, Filter } from 'lucide-react';
import { CATEGORIES, MENU_ITEMS } from '../data/menuData';
import { MenuItem, MenuCategory, PreOrderItem } from '../types/cafe';
import { filterMenuItems } from '../utils/cafeLogic';

interface DigitalMenuProps {
  preOrders: PreOrderItem[];
  onUpdatePreOrder: (item: MenuItem, delta: number) => void;
  onOpenReservationWithItem?: (item: MenuItem) => void;
}

export const DigitalMenu: React.FC<DigitalMenuProps> = ({
  preOrders,
  onUpdatePreOrder,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [vegOnly, setVegOnly] = useState<boolean>(false);
  const [selectedItemForModal, setSelectedItemForModal] = useState<MenuItem | null>(null);

  // Map pre-order quantities by itemId for fast lookup
  const preOrderQuantityMap = useMemo(() => {
    const map = new Map<string, number>();
    preOrders.forEach(p => map.set(p.item.id, p.quantity));
    return map;
  }, [preOrders]);

  // Filter items
  const filteredItems = useMemo(() => {
    return filterMenuItems(MENU_ITEMS, selectedCategory, searchQuery, vegOnly);
  }, [selectedCategory, searchQuery, vegOnly]);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'pasta':
        return <UtensilsCrossed className="w-4 h-4" />;
      case 'hot-beverages':
        return <Coffee className="w-4 h-4" />;
      case 'cold-brews':
        return <CupSoda className="w-4 h-4" />;
      case 'snacks':
        return <Utensils className="w-4 h-4" />;
      case 'desserts':
        return <Cake className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <section id="digital-menu" className="py-14 max-w-6xl mx-auto px-4 sm:px-6">
      
      {/* Section Title & Subtitle */}
      <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-[#B86B2F]">
          Handcrafted Italian & Cafe Classics
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif-cafe font-bold text-[#2B1810]">
          Interactive Digital Menu
        </h2>
        <p className="text-sm sm:text-base text-[#6E5342]">
          Discover our new al dente artisan pastas (Truffle Penne, Fettuccine Alfredo, Arrabbiata, Pesto Fusilli, Carbonara, Baked Rigatoni) alongside artisanal coffees and authentic tiramisus.
        </p>
      </div>

      {/* Filter and Search Bar Controls */}
      <div className="bg-[#FFFFFF] p-4 rounded-2xl border border-[#E5D7C5] shadow-xs mb-8 space-y-4">
        
        {/* Top bar: Search + Veg Toggle */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          
          {/* Search Input */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-[#8C6D58] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search coffee, bites, desserts..."
              className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm rounded-xl border border-[#DECDBB] bg-[#FAF6EE] text-[#2B1810] placeholder-[#A18A7A] focus:outline-none focus:ring-2 focus:ring-[#B86B2F] focus:border-transparent transition-all"
              aria-label="Search menu items"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8C6D58] hover:text-[#2B1810]"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          {/* Dietary Veg-Only Switch */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <label className="flex items-center gap-2 cursor-pointer select-none text-xs font-semibold text-[#3D2518]">
              <span className="veg-indicator" title="Vegetarian only" />
              <span>Veg Only</span>
              <button
                type="button"
                role="switch"
                aria-checked={vegOnly}
                onClick={() => setVegOnly(!vegOnly)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#B86B2F] ${
                  vegOnly ? 'bg-emerald-600' : 'bg-[#D6C4B2]'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    vegOnly ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </label>
          </div>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none pt-1">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#2B1810] text-[#FFF4E8] shadow-sm'
                    : 'bg-[#FAF6EE] text-[#61493A] hover:bg-[#EFE6D8] border border-[#E8DFC8]'
                }`}
              >
                {getCategoryIcon(cat.id)}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

      </div>

      {/* Menu Items Grid */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-16 bg-[#FFFFFF] rounded-2xl border border-[#E5D7C5] p-6 space-y-3">
          <Coffee className="w-10 h-10 text-[#C4A992] mx-auto" />
          <h3 className="font-serif-cafe text-xl font-bold text-[#2B1810]">
            No matching items found
          </h3>
          <p className="text-xs text-[#7B6150] max-w-sm mx-auto">
            Try adjusting your search query or turning off the Veg Only filter.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setVegOnly(false);
            }}
            className="text-xs font-semibold text-[#B86B2F] hover:underline cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const quantity = preOrderQuantityMap.get(item.id) || 0;

            return (
              <div
                key={item.id}
                className="bg-[#FFFFFF] rounded-2xl border border-[#E8DEC8] hover:border-[#CDBDA7] shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
              >
                {/* Image & Badges */}
                <div className="relative h-48 w-full overflow-hidden bg-[#EFE6D8]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Top badges */}
                  <div className="absolute top-3 inset-x-3 flex items-center justify-between">
                    {/* Veg / Non-Veg Standard Mark */}
                    <div className="bg-white/90 backdrop-blur-xs p-1 rounded-md shadow-xs flex items-center">
                      {item.isVeg ? (
                        <span className="veg-indicator" title="Vegetarian" />
                      ) : (
                        <span className="non-veg-indicator" title="Non-Vegetarian" />
                      )}
                    </div>

                    {/* Chef / Bestseller Badge */}
                    {item.badge && (
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#2B1810]/85 text-[#FFF4E8] backdrop-blur-xs shadow-xs">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Prep time badge bottom-right */}
                  <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-xs text-white text-[10px] px-2 py-0.5 rounded flex items-center gap-1 font-medium">
                    <Clock className="w-3 h-3 text-[#D9822B]" />
                    <span>{item.prepTime}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    {/* Item Name & Price */}
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-serif-cafe text-lg font-bold text-[#231713] leading-snug">
                        {item.name}
                      </h3>
                      <span className="text-base font-bold text-[#B86B2F] whitespace-nowrap">
                        ₹{item.price}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-[#6B5344] leading-relaxed line-clamp-2 mt-1.5">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap items-center gap-1.5 mt-2.5">
                      {item.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] text-[#7A6150] bg-[#FAF6EE] px-2 py-0.5 rounded border border-[#EBE1D3]"
                        >
                          {tag}
                        </span>
                      ))}
                      {item.calories && (
                        <span className="text-[10px] text-[#9A7D6B] flex items-center gap-0.5 ml-auto">
                          <Flame className="w-2.5 h-2.5 text-amber-500" />
                          {item.calories}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Pre-order button controls */}
                  <div className="pt-3 border-t border-[#F2E8DC] flex items-center justify-between gap-2">
                    <button
                      onClick={() => setSelectedItemForModal(item)}
                      className="text-xs font-semibold text-[#8C6D58] hover:text-[#2B1810] flex items-center gap-1 cursor-pointer"
                    >
                      <Info className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </button>

                    {quantity === 0 ? (
                      <button
                        onClick={() => onUpdatePreOrder(item, 1)}
                        className="px-3.5 py-1.5 rounded-xl bg-[#FAF6EE] hover:bg-[#B86B2F] text-[#4A3326] hover:text-white border border-[#D9C9B6] hover:border-[#B86B2F] font-semibold text-xs transition-all flex items-center gap-1.5 shadow-xs cursor-pointer active:scale-95"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Pre-Order</span>
                      </button>
                    ) : (
                      <div className="flex items-center gap-2 bg-[#FAF6EE] border border-[#B86B2F] rounded-xl px-1.5 py-1 shadow-xs">
                        <button
                          onClick={() => onUpdatePreOrder(item, -1)}
                          className="w-6 h-6 rounded-lg bg-white text-[#2B1810] flex items-center justify-center hover:bg-[#EAE0D1] transition-colors cursor-pointer"
                          aria-label={`Decrease ${item.name} quantity`}
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-[#2B1810] min-w-[16px] text-center">
                          {quantity}
                        </span>
                        <button
                          onClick={() => onUpdatePreOrder(item, 1)}
                          className="w-6 h-6 rounded-lg bg-[#B86B2F] text-white flex items-center justify-center hover:bg-[#9E5721] transition-colors cursor-pointer"
                          aria-label={`Increase ${item.name} quantity`}
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    )}
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Item Detail Modal */}
      {selectedItemForModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#E5D7C5] animate-in fade-in zoom-in-95 duration-200">
            <div className="relative h-56 bg-[#FAF6EE]">
              <img
                src={selectedItemForModal.image}
                alt={selectedItemForModal.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedItemForModal(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
                aria-label="Close details"
              >
                ✕
              </button>
              <div className="absolute bottom-3 left-4 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-xs font-semibold flex items-center gap-1.5 shadow-sm">
                {selectedItemForModal.isVeg ? (
                  <span className="veg-indicator" />
                ) : (
                  <span className="non-veg-indicator" />
                )}
                <span>{selectedItemForModal.isVeg ? 'Pure Vegetarian' : 'Non-Vegetarian'}</span>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-serif-cafe text-2xl font-bold text-[#2B1810]">
                    {selectedItemForModal.name}
                  </h3>
                  <p className="text-xs text-[#8C6D58] capitalize mt-0.5">
                    Category: {selectedItemForModal.category.replace('-', ' ')}
                  </p>
                </div>
                <span className="text-2xl font-serif-cafe font-bold text-[#B86B2F]">
                  ₹{selectedItemForModal.price}
                </span>
              </div>

              <p className="text-sm text-[#5C4535] leading-relaxed">
                {selectedItemForModal.description}
              </p>

              <div className="grid grid-cols-2 gap-3 p-3 bg-[#FAF6EE] rounded-xl text-xs text-[#6B5242]">
                <div>
                  <span className="font-semibold block text-[#3E2619]">Prep Time:</span>
                  <span>{selectedItemForModal.prepTime}</span>
                </div>
                {selectedItemForModal.calories && (
                  <div>
                    <span className="font-semibold block text-[#3E2619]">Energy:</span>
                    <span>{selectedItemForModal.calories}</span>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  onClick={() => setSelectedItemForModal(null)}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-[#664E3E] hover:bg-[#FAF6EE]"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    onUpdatePreOrder(selectedItemForModal, 1);
                    setSelectedItemForModal(null);
                  }}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-[#2B1810] text-[#FFF4E8] hover:bg-[#3E2419] flex items-center gap-1.5 shadow-sm"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add to Pre-Order (₹{selectedItemForModal.price})</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
