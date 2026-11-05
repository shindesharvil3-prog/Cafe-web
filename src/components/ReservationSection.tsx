import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Users, Phone, User, CheckCircle2, ShoppingBag, Plus, Minus, Trash2, Armchair, Sparkles } from 'lucide-react';
import { PreOrderItem, ReservationFormData, MenuItem } from '../types/cafe';
import { TIME_SLOTS, SEATING_AREAS, MENU_ITEMS } from '../data/menuData';
import { validateReservation, calculatePreOrderTotal } from '../utils/cafeLogic';

interface ReservationSectionProps {
  preOrders: PreOrderItem[];
  onUpdatePreOrder: (item: MenuItem, delta: number) => void;
  onClearPreOrders: () => void;
  onSubmitReservation: (formData: ReservationFormData) => void;
  onExploreMenu: () => void;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({
  preOrders,
  onUpdatePreOrder,
  onClearPreOrders,
  onSubmitReservation,
  onExploreMenu,
}) => {
  // Tomorrow's date formatted as YYYY-MM-DD
  const today = new Date();
  const todayStr = today.toISOString().split('T')[0];

  const [formData, setFormData] = useState<ReservationFormData>({
    customerName: '',
    phone: '',
    date: todayStr,
    timeSlot: '05:30 PM',
    guests: 2,
    seatingArea: 'cozy-couch',
    specialNotes: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ReservationFormData, string>>>({});
  const [showQuickAddMenu, setShowQuickAddMenu] = useState<boolean>(false);

  const preOrderTotal = calculatePreOrderTotal(preOrders);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateReservation(formData);
    if (!result.isValid) {
      setErrors(result.errors);
      // Scroll to first error if needed
      return;
    }
    setErrors({});
    onSubmitReservation(formData);
  };

  const handleGuestChange = (delta: number) => {
    const next = Math.max(1, Math.min(16, formData.guests + delta));
    setFormData(prev => ({ ...prev, guests: next }));
  };

  return (
    <section id="reservation-section" className="py-16 bg-[#F5ECE0] border-t border-[#E8DEC8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B86B2F]/15 text-[#783E16] text-xs font-bold uppercase tracking-wider">
            <Armchair className="w-3.5 h-3.5 text-[#B86B2F]" />
            <span>Instant Table Booking</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-cafe font-bold text-[#2B1810]">
            Reserve Your Cozy Nook
          </h2>
          <p className="text-sm sm:text-base text-[#6E5342]">
            Book ahead for your coffee dates, board game evenings, or group catch-ups. Optionally pre-order bites so they're hot & ready when you arrive.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl border border-[#DECBB5] shadow-xl overflow-hidden max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Left Column: Reservation Fields */}
              <div className="lg:col-span-7 p-6 sm:p-8 space-y-6">
                <div className="border-b border-[#F0E6D8] pb-3">
                  <h3 className="font-serif-cafe text-xl font-bold text-[#2B1810]">
                    1. Guest & Table Details
                  </h3>
                  <p className="text-xs text-[#8C6D58]">
                    No cancellation fees. Free instant reservation.
                  </p>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="customerName" className="block text-xs font-bold text-[#3E2419]">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#8C6D58] absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        id="customerName"
                        type="text"
                        value={formData.customerName}
                        onChange={(e) => {
                          setFormData({ ...formData, customerName: e.target.value });
                          if (errors.customerName) setErrors({ ...errors, customerName: undefined });
                        }}
                        placeholder="e.g. Monica Geller"
                        className={`w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm rounded-xl border bg-[#FAF6EE] text-[#2B1810] focus:outline-none focus:ring-2 focus:ring-[#B86B2F] ${
                          errors.customerName ? 'border-rose-400 bg-rose-50/50' : 'border-[#DECDBB]'
                        }`}
                      />
                    </div>
                    {errors.customerName && (
                      <p className="text-[11px] text-rose-600 font-medium">{errors.customerName}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="block text-xs font-bold text-[#3E2419]">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-[#8C6D58] absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: undefined });
                        }}
                        placeholder="10-digit mobile number"
                        className={`w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm rounded-xl border bg-[#FAF6EE] text-[#2B1810] focus:outline-none focus:ring-2 focus:ring-[#B86B2F] ${
                          errors.phone ? 'border-rose-400 bg-rose-50/50' : 'border-[#DECDBB]'
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-[11px] text-rose-600 font-medium">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Date & Guest Count */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Date */}
                  <div className="space-y-1.5">
                    <label htmlFor="reservationDate" className="block text-xs font-bold text-[#3E2419]">
                      Reservation Date <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <CalendarIcon className="w-4 h-4 text-[#8C6D58] absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        id="reservationDate"
                        type="date"
                        min={todayStr}
                        value={formData.date}
                        onChange={(e) => {
                          setFormData({ ...formData, date: e.target.value });
                          if (errors.date) setErrors({ ...errors, date: undefined });
                        }}
                        className={`w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm rounded-xl border bg-[#FAF6EE] text-[#2B1810] focus:outline-none focus:ring-2 focus:ring-[#B86B2F] ${
                          errors.date ? 'border-rose-400 bg-rose-50/50' : 'border-[#DECDBB]'
                        }`}
                      />
                    </div>
                    {errors.date && (
                      <p className="text-[11px] text-rose-600 font-medium">{errors.date}</p>
                    )}
                  </div>

                  {/* Number of Guests with Stepper */}
                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-[#3E2419]">
                      Number of Guests <span className="text-rose-500">*</span>
                    </label>
                    <div className="flex items-center justify-between border border-[#DECDBB] rounded-xl bg-[#FAF6EE] px-3 py-2">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-[#8C6D58]" />
                        <span className="text-xs sm:text-sm font-semibold text-[#2B1810]">
                          {formData.guests} {formData.guests === 1 ? 'Guest' : 'Guests'}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => handleGuestChange(-1)}
                          disabled={formData.guests <= 1}
                          className="w-7 h-7 rounded-lg bg-white border border-[#DECDBB] text-[#2B1810] flex items-center justify-center hover:bg-[#EAE0D1] disabled:opacity-40 cursor-pointer"
                          aria-label="Decrease guest count"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleGuestChange(1)}
                          disabled={formData.guests >= 16}
                          className="w-7 h-7 rounded-lg bg-[#B86B2F] text-white flex items-center justify-center hover:bg-[#9F5720] disabled:opacity-40 cursor-pointer"
                          aria-label="Increase guest count"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Time Slot Picker */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-bold text-[#3E2419]">
                      Preferred Time Slot <span className="text-rose-500">*</span>
                    </label>
                    <span className="text-[11px] text-[#8C6D58]">Daily 8:00 AM - 10:30 PM</span>
                  </div>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 max-h-36 overflow-y-auto p-1 border border-[#E8DEC8] rounded-xl bg-[#FAF6EE]">
                    {TIME_SLOTS.map((slot) => {
                      const isSelected = formData.timeSlot === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setFormData({ ...formData, timeSlot: slot })}
                          className={`py-1.5 px-2 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[#2B1810] text-[#FFF4E8] shadow-xs'
                              : 'bg-white text-[#523B2C] hover:bg-[#EFE6D8] border border-[#E5DAC8]'
                          }`}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                  {errors.timeSlot && (
                    <p className="text-[11px] text-rose-600 font-medium">{errors.timeSlot}</p>
                  )}
                </div>

                {/* Seating Preference */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-[#3E2419]">
                    Seating Area Preference
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {SEATING_AREAS.map((area) => {
                      const isSelected = formData.seatingArea === area.id;
                      return (
                        <button
                          key={area.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, seatingArea: area.id as any })}
                          className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[#FAF2E6] border-[#B86B2F] ring-1 ring-[#B86B2F]'
                              : 'bg-[#FAF6EE] border-[#E8DEC8] hover:bg-[#F2E8DC]'
                          }`}
                        >
                          <p className="text-xs font-bold text-[#2B1810] flex items-center justify-between">
                            <span>{area.name}</span>
                            {isSelected && <span className="w-2 h-2 rounded-full bg-[#B86B2F]" />}
                          </p>
                          <p className="text-[10px] text-[#786150] mt-0.5 leading-snug">
                            {area.desc}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Special Requests */}
                <div className="space-y-1.5">
                  <label htmlFor="specialNotes" className="block text-xs font-bold text-[#3E2419]">
                    Special Requests (Optional)
                  </label>
                  <input
                    id="specialNotes"
                    type="text"
                    value={formData.specialNotes}
                    onChange={(e) => setFormData({ ...formData, specialNotes: e.target.value })}
                    placeholder="e.g. Birthday celebration, High chair, Board games setup"
                    className="w-full px-3 py-2 text-xs rounded-xl border border-[#DECDBB] bg-[#FAF6EE] text-[#2B1810] focus:outline-none focus:ring-2 focus:ring-[#B86B2F]"
                  />
                </div>
              </div>

              {/* Right Column: Pre-Order Summary & Booking Action */}
              <div className="lg:col-span-5 bg-[#FAF6EE] border-t lg:border-t-0 lg:border-l border-[#DECBB5] p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between border-b border-[#E8DEC8] pb-3">
                    <div className="flex items-center gap-2">
                      <ShoppingBag className="w-4 h-4 text-[#B86B2F]" />
                      <h3 className="font-serif-cafe text-lg font-bold text-[#2B1810]">
                        2. Pre-Order Bites
                      </h3>
                    </div>
                    {preOrders.length > 0 && (
                      <button
                        type="button"
                        onClick={onClearPreOrders}
                        className="text-[11px] text-rose-600 hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <Trash2 className="w-3 h-3" />
                        Clear
                      </button>
                    )}
                  </div>
                  <p className="text-xs text-[#7A6150] mt-1.5">
                    Optional: Have drinks and snacks prepped and served hot upon your arrival.
                  </p>

                  {/* Pre-ordered items list */}
                  <div className="mt-4 space-y-2 max-h-56 overflow-y-auto pr-1">
                    {preOrders.length === 0 ? (
                      <div className="text-center py-6 px-4 bg-white rounded-2xl border border-dashed border-[#D6C4B2] space-y-2">
                        <ShoppingBag className="w-8 h-8 text-[#C4AF9C] mx-auto" />
                        <p className="text-xs text-[#7E6554] font-medium">
                          No items in pre-order tray yet.
                        </p>
                        <button
                          type="button"
                          onClick={() => setShowQuickAddMenu(!showQuickAddMenu)}
                          className="px-3 py-1.5 rounded-lg bg-[#2B1810] text-[#FFF4E8] text-xs font-semibold hover:bg-[#3E2419] transition-colors cursor-pointer inline-flex items-center gap-1"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Quick Add Popular Bites</span>
                        </button>
                      </div>
                    ) : (
                      preOrders.map((item) => (
                        <div
                          key={item.item.id}
                          className="bg-white p-2.5 rounded-xl border border-[#E8DEC8] flex items-center justify-between gap-2 shadow-2xs"
                        >
                          <div className="min-w-0 flex-1">
                            <p className="text-xs font-bold text-[#2B1810] truncate">
                              {item.item.name}
                            </p>
                            <p className="text-[10px] text-[#7E6554]">
                              ₹{item.item.price} × {item.quantity} = ₹{item.item.price * item.quantity}
                            </p>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <button
                              type="button"
                              onClick={() => onUpdatePreOrder(item.item, -1)}
                              className="w-5 h-5 rounded bg-[#FAF6EE] text-[#2B1810] flex items-center justify-center hover:bg-[#EAE0D1] cursor-pointer"
                              aria-label={`Decrease ${item.item.name}`}
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-bold text-[#2B1810] min-w-[14px] text-center">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => onUpdatePreOrder(item.item, 1)}
                              className="w-5 h-5 rounded bg-[#B86B2F] text-white flex items-center justify-center hover:bg-[#9F5720] cursor-pointer"
                              aria-label={`Increase ${item.item.name}`}
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Quick Add popular suggestions drawer */}
                  {showQuickAddMenu && (
                    <div className="mt-3 p-3 bg-white rounded-xl border border-[#DECBB5] space-y-2 animate-in fade-in duration-150">
                      <p className="text-xs font-bold text-[#2B1810]">Add popular snacks or coffee:</p>
                      <div className="space-y-1.5 max-h-36 overflow-y-auto">
                        {MENU_ITEMS.slice(0, 4).map((m) => (
                          <div key={m.id} className="flex items-center justify-between text-xs py-1 border-b border-[#FAF6EE]">
                            <span className="text-[#3E2519] truncate max-w-[170px]">{m.name}</span>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-[#B86B2F]">₹{m.price}</span>
                              <button
                                type="button"
                                onClick={() => onUpdatePreOrder(m, 1)}
                                className="px-2 py-0.5 bg-[#FAF6EE] hover:bg-[#B86B2F] hover:text-white rounded text-[11px] font-semibold border border-[#E0D3C0] cursor-pointer"
                              >
                                + Add
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {preOrders.length > 0 && (
                    <button
                      type="button"
                      onClick={() => setShowQuickAddMenu(!showQuickAddMenu)}
                      className="mt-2 text-xs font-semibold text-[#B86B2F] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <Plus className="w-3 h-3" />
                      <span>{showQuickAddMenu ? 'Hide quick add' : 'Add more items'}</span>
                    </button>
                  )}
                </div>

                {/* Subtotal & Book Table CTA */}
                <div className="pt-4 border-t border-[#DECBB5] space-y-3">
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between text-[#6E5342]">
                      <span>Table Reservation Fee</span>
                      <span className="font-semibold text-emerald-600">FREE</span>
                    </div>
                    <div className="flex justify-between text-[#6E5342]">
                      <span>Pre-Order Bites Subtotal</span>
                      <span className="font-semibold text-[#2B1810]">₹{preOrderTotal}</span>
                    </div>
                    <div className="flex justify-between font-bold text-sm text-[#2B1810] pt-1 border-t border-[#E8DEC8]">
                      <span>Estimated Bill (Pay at Cafe)</span>
                      <span>₹{preOrderTotal}</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-4 rounded-xl bg-[#2B1810] hover:bg-[#3E2419] text-[#FFF4E8] font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#D9822B]" />
                    <span>Book Table Now</span>
                  </button>

                  <p className="text-[11px] text-center text-[#8C6D58]">
                    Instant confirmation. Saved directly to your device.
                  </p>
                </div>

              </div>

            </div>
          </form>
        </div>

      </div>
    </section>
  );
};
