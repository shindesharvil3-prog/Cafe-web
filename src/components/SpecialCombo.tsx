import React from 'react';
import { Sparkles, Plus, Check, Utensils, Coffee, Cake, Calendar, Gift } from 'lucide-react';
import { TODAY_SPECIAL_COMBO, MENU_ITEMS } from '../data/menuData';
import { PreOrderItem } from '../types/cafe';

interface SpecialComboProps {
  onAddComboToPreOrder: () => void;
  onReserveTableWithCombo: () => void;
  isComboAdded: boolean;
}

export const SpecialCombo: React.FC<SpecialComboProps> = ({
  onAddComboToPreOrder,
  onReserveTableWithCombo,
  isComboAdded,
}) => {
  const combo = TODAY_SPECIAL_COMBO;

  return (
    <section id="special-combo" className="py-12 bg-gradient-to-b from-[#FAF6EE] to-[#F3EBDE] border-y border-[#E8DFC8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B86B2F]/10 text-[#B86B2F] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#B86B2F]" />
            <span>Chef's Daily Spotlight</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-cafe font-bold text-[#2B1810]">
            {combo.title}
          </h2>
          <p className="text-sm sm:text-base text-[#6E5342]">
            {combo.subtitle}
          </p>
        </div>

        {/* Highlight Card */}
        <div className="bg-[#FFFFFF] rounded-3xl border border-[#E2D5C3] shadow-xl overflow-hidden max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12">
            
            {/* Visual Spread Side */}
            <div className="md:col-span-5 relative bg-[#23150F] min-h-[260px] md:min-h-full flex items-center justify-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80"
                alt="FriEndS Favorite Combo: Hazelnut mocha, artisan garlic bread, and tiramisu"
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#1C100B]/90 via-[#1C100B]/50 to-transparent" />
              
              <div className="relative z-10 p-6 text-white space-y-3">
                <span className="inline-flex items-center gap-1 bg-[#D9822B] text-[#231713] px-3 py-1 rounded-md text-xs font-bold shadow-md">
                  <Gift className="w-3.5 h-3.5" />
                  Save ₹{combo.savings}
                </span>
                <h3 className="font-serif-cafe text-2xl font-bold leading-tight text-[#FAF3EA]">
                  The 3-In-One Bestie Treat
                </h3>
                <p className="text-xs text-[#DECBC0] leading-relaxed">
                  Crafted for sharing (or keeping all to yourself)! Hand-roasted coffee, hot melted garlic bread, and chilled Italian tiramisu.
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-[#F7D8B5]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  100% Pure Vegetarian Combo
                </div>
              </div>
            </div>

            {/* Details & Pricing Side */}
            <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              
              {/* Item breakdown list */}
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#F0E6D8]">
                  <span className="text-xs font-bold text-[#8C6D58] uppercase tracking-wider">
                    Included in this Combo
                  </span>
                  <span className="veg-indicator" title="Vegetarian" />
                </div>

                <div className="space-y-3">
                  {combo.items.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF6EE] border border-[#EFE5D6] hover:bg-[#F5ECE0] transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#EAE0D1] text-[#783E16] flex items-center justify-center font-bold text-xs">
                          {idx === 0 && <Coffee className="w-4 h-4" />}
                          {idx === 1 && <Utensils className="w-4 h-4" />}
                          {idx === 2 && <Cake className="w-4 h-4" />}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-[#2B1810]">{item.name}</p>
                          <p className="text-[11px] text-[#7E6554]">
                            {idx === 0 && 'Double shot hazelnut mocha with chocolate ganache'}
                            {idx === 1 && 'Brioche loaf stuffed with Mozzarella & Cheddar'}
                            {idx === 2 && 'Mascarpone cream with dark espresso dust'}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-medium text-[#7A6150] line-through">
                        ₹{item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing & CTA Row */}
              <div className="pt-4 border-t border-[#F0E6D8] space-y-4">
                <div className="flex items-baseline justify-between">
                  <div>
                    <span className="text-xs text-[#8C6D58] font-medium block">Special Combo Price</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-serif-cafe font-bold text-[#2B1810]">
                        ₹{combo.comboPrice}
                      </span>
                      <span className="text-sm text-[#8C6D58] line-through">
                        ₹{combo.originalPrice}
                      </span>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
                        Save ₹{combo.savings}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-[#8A6F5E] font-medium text-right">
                    Taxes Included · Serves 1-2
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={onAddComboToPreOrder}
                    className={`py-3 px-4 rounded-xl font-semibold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm ${
                      isComboAdded
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                        : 'bg-[#B86B2F] hover:bg-[#9F5720] text-white'
                    }`}
                  >
                    {isComboAdded ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Combo Added to Pre-Order!</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        <span>Add Combo to Pre-Order</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={onReserveTableWithCombo}
                    className="py-3 px-4 rounded-xl border-2 border-[#2B1810] text-[#2B1810] hover:bg-[#FAF6EE] font-semibold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-[#B86B2F]" />
                    <span>Reserve Table with Combo</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
