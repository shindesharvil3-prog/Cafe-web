import React from 'react';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight, Utensils } from 'lucide-react';
import { PreOrderItem, MenuItem } from '../types/cafe';
import { calculatePreOrderTotal } from '../utils/cafeLogic';

interface PreOrderDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  preOrders: PreOrderItem[];
  onUpdatePreOrder: (item: MenuItem, delta: number) => void;
  onClearPreOrders: () => void;
  onProceedToReservation: () => void;
}

export const PreOrderDrawer: React.FC<PreOrderDrawerProps> = ({
  isOpen,
  onClose,
  preOrders,
  onUpdatePreOrder,
  onClearPreOrders,
  onProceedToReservation,
}) => {
  if (!isOpen) return null;

  const total = calculatePreOrderTotal(preOrders);
  const totalCount = preOrders.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end transition-opacity">
      <div className="bg-[#FAF6EE] w-full max-w-md h-full shadow-2xl flex flex-col justify-between border-l border-[#DECBB5] animate-in slide-in-from-right duration-200">
        
        {/* Drawer Header */}
        <div className="p-5 bg-[#2B1810] text-[#FFF4E8] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#D9822B]" />
            <div>
              <h3 className="font-serif-cafe text-xl font-bold leading-tight">
                Pre-Order Tray
              </h3>
              <p className="text-xs text-[#DECBC0]">
                {totalCount} {totalCount === 1 ? 'item' : 'items'} selected
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close Pre-Order Drawer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Items List */}
        <div className="p-5 flex-1 overflow-y-auto space-y-3">
          {preOrders.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-16 h-16 rounded-full bg-[#EFE4D3] text-[#783E16] flex items-center justify-center mx-auto">
                <Utensils className="w-7 h-7 text-[#B86B2F]" />
              </div>
              <h4 className="font-serif-cafe text-lg font-bold text-[#2B1810]">
                Your tray is currently empty
              </h4>
              <p className="text-xs text-[#7A6150] max-w-xs mx-auto">
                Browse our digital menu to select coffees, shakes, and artisan snacks to pre-order before arriving.
              </p>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between pb-2 border-b border-[#E8DEC8]">
                <span className="text-xs font-bold text-[#8C6D58] uppercase tracking-wider">
                  Selected Items
                </span>
                <button
                  onClick={onClearPreOrders}
                  className="text-xs text-rose-600 hover:underline flex items-center gap-1 cursor-pointer font-medium"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear All</span>
                </button>
              </div>

              {preOrders.map((item) => (
                <div
                  key={item.item.id}
                  className="bg-white p-3 rounded-2xl border border-[#E8DEC8] flex items-center justify-between gap-3 shadow-2xs"
                >
                  <img
                    src={item.item.image}
                    alt={item.item.name}
                    className="w-12 h-12 rounded-xl object-cover shrink-0"
                  />
                  
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      {item.item.isVeg ? (
                        <span className="veg-indicator shrink-0" />
                      ) : (
                        <span className="non-veg-indicator shrink-0" />
                      )}
                      <p className="text-xs font-bold text-[#2B1810] truncate">
                        {item.item.name}
                      </p>
                    </div>
                    <p className="text-[11px] text-[#7E6554] mt-0.5">
                      ₹{item.item.price} each
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => onUpdatePreOrder(item.item, -1)}
                      className="w-6 h-6 rounded-lg bg-[#FAF6EE] text-[#2B1810] flex items-center justify-center hover:bg-[#EAE0D1] cursor-pointer"
                      aria-label={`Decrease ${item.item.name}`}
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-bold text-[#2B1810] min-w-[14px] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => onUpdatePreOrder(item.item, 1)}
                      className="w-6 h-6 rounded-lg bg-[#B86B2F] text-white flex items-center justify-center hover:bg-[#9F5720] cursor-pointer"
                      aria-label={`Increase ${item.item.name}`}
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Drawer Footer */}
        {preOrders.length > 0 && (
          <div className="p-5 bg-white border-t border-[#E8DEC8] space-y-3">
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-[#6E5342]">
                <span>Items Subtotal</span>
                <span className="font-semibold text-[#2B1810]">₹{total}</span>
              </div>
              <div className="flex justify-between text-[#6E5342]">
                <span>Table Reservation</span>
                <span className="font-semibold text-emerald-600">FREE</span>
              </div>
              <div className="flex justify-between font-bold text-sm text-[#2B1810] pt-1.5 border-t border-[#F0E6D8]">
                <span>Total to Pay at Cafe</span>
                <span className="text-base text-[#B86B2F]">₹{total}</span>
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                onProceedToReservation();
              }}
              className="w-full py-3.5 px-4 rounded-xl bg-[#2B1810] hover:bg-[#3D2318] text-[#FFF4E8] font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Attach to Table Reservation</span>
              <ArrowRight className="w-4 h-4 text-[#D9822B]" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
