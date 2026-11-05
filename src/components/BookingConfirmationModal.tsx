import React, { useState } from 'react';
import { CheckCircle, Calendar, Clock, Users, MapPin, Copy, Check, Download, X, Coffee, ShoppingBag } from 'lucide-react';
import { StoredReservation } from '../types/cafe';

interface BookingConfirmationModalProps {
  reservation: StoredReservation;
  onClose: () => void;
  onOpenAllBookings: () => void;
}

export const BookingConfirmationModal: React.FC<BookingConfirmationModalProps> = ({
  reservation,
  onClose,
  onOpenAllBookings,
}) => {
  const [copied, setCopied] = useState(false);

  const getAreaName = (id: string) => {
    switch (id) {
      case 'cozy-couch': return 'Cozy Central Couch';
      case 'window-nook': return 'Sunlit Window Bench';
      case 'garden-patio': return 'Breezy Garden Patio';
      case 'quiet-study': return 'Quiet Corner / Work Nook';
      default: return id;
    }
  };

  const handleCopy = () => {
    const text = `FriEndS CafE Table Reservation
Booking ID: ${reservation.id}
Guest: ${reservation.customerName} (${reservation.phone})
Date: ${reservation.date} at ${reservation.timeSlot}
Guests: ${reservation.guests}
Seating: ${getAreaName(reservation.seatingArea)}
${reservation.preOrders.length > 0 ? `Pre-Orders: ${reservation.preOrders.map(p => `${p.name} (x${p.quantity})`).join(', ')} (₹${reservation.preOrderTotal})` : 'No pre-orders'}
Address: 42 Friends Corner, 12th Main Road, Indiranagar, Bengaluru`;

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleGoogleCalendar = () => {
    const title = encodeURIComponent(`Table at FriEndS CafE (ID: ${reservation.id})`);
    const details = encodeURIComponent(
      `Table Reservation for ${reservation.guests} guests under ${reservation.customerName}.\nSeating: ${getAreaName(reservation.seatingArea)}\nContact: +91 98765 43210\nAddress: 42 Friends Corner, 12th Main, Indiranagar`
    );
    const location = encodeURIComponent('FriEndS CafE, 12th Main Rd, Indiranagar, Bengaluru');
    
    // Simple google calendar template url
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#FAF6EE] rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-[#DFCBB5] animate-in fade-in zoom-in-95 duration-200 my-8">
        
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-[#2B1810] to-[#4A2B1D] text-white p-6 text-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full w-8 h-8 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center justify-center gap-2 mb-3">
            <img
              src="/assets/aistudio/Gemini_Generated_Image_zcyf75zcyf75zcyf_89e0b205.png"
              alt="FriEndS CafE Logo"
              className="w-16 h-16 rounded-full object-cover border-2 border-[#D4AF37] shadow-xl"
            />
          </div>

          <h3 className="font-serif-cafe text-2xl font-bold tracking-tight">
            Reservation Confirmed!
          </h3>
          <p className="text-xs text-[#EADBC8] mt-1">
            We've saved your spot at FriEndS CafE. See you soon!
          </p>

          <div className="mt-3 inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider text-[#F7D8B5]">
            <span>Booking ID:</span>
            <span className="text-white underline">{reservation.id}</span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          
          {/* Reservation summary card */}
          <div className="bg-white rounded-2xl p-4 border border-[#E5DAC8] shadow-2xs space-y-3">
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-[#8C6D58] block">Date</span>
                <span className="font-bold text-[#2B1810] flex items-center gap-1.5 mt-0.5">
                  <Calendar className="w-3.5 h-3.5 text-[#B86B2F]" />
                  {reservation.date}
                </span>
              </div>
              <div>
                <span className="text-[#8C6D58] block">Time Slot</span>
                <span className="font-bold text-[#2B1810] flex items-center gap-1.5 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-[#B86B2F]" />
                  {reservation.timeSlot}
                </span>
              </div>
              <div>
                <span className="text-[#8C6D58] block">Party Size</span>
                <span className="font-bold text-[#2B1810] flex items-center gap-1.5 mt-0.5">
                  <Users className="w-3.5 h-3.5 text-[#B86B2F]" />
                  {reservation.guests} {reservation.guests === 1 ? 'Guest' : 'Guests'}
                </span>
              </div>
              <div>
                <span className="text-[#8C6D58] block">Seating Nook</span>
                <span className="font-bold text-[#2B1810] flex items-center gap-1.5 mt-0.5 truncate">
                  <Coffee className="w-3.5 h-3.5 text-[#B86B2F]" />
                  {getAreaName(reservation.seatingArea)}
                </span>
              </div>
            </div>

            <div className="pt-2.5 border-t border-[#F2E8DC] text-xs">
              <span className="text-[#8C6D58]">Reserved for: </span>
              <span className="font-bold text-[#2B1810]">{reservation.customerName}</span>
              <span className="text-[#8C6D58]"> ({reservation.phone})</span>
            </div>

            {reservation.specialNotes && (
              <div className="pt-2 border-t border-[#F2E8DC] text-xs">
                <span className="text-[#8C6D58]">Note: </span>
                <span className="italic text-[#5C4232]">"{reservation.specialNotes}"</span>
              </div>
            )}
          </div>

          {/* Pre-ordered items breakdown */}
          {reservation.preOrders.length > 0 && (
            <div className="bg-white rounded-2xl p-4 border border-[#E5DAC8] shadow-2xs space-y-2">
              <div className="flex items-center justify-between pb-2 border-b border-[#F2E8DC]">
                <span className="text-xs font-bold text-[#2B1810] flex items-center gap-1.5">
                  <ShoppingBag className="w-3.5 h-3.5 text-[#B86B2F]" />
                  Pre-Ordered Food & Drinks
                </span>
                <span className="text-xs font-bold text-[#B86B2F]">
                  Total: ₹{reservation.preOrderTotal}
                </span>
              </div>

              <div className="space-y-1.5 max-h-32 overflow-y-auto pr-1">
                {reservation.preOrders.map((p, idx) => (
                  <div key={idx} className="flex justify-between text-xs text-[#523B2C]">
                    <span>
                      {p.name} <span className="text-[#8C6D58]">× {p.quantity}</span>
                    </span>
                    <span className="font-medium">₹{p.price * p.quantity}</span>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-[#8C6D58] italic pt-1">
                * Payment to be completed directly at the cafe counter.
              </p>
            </div>
          )}

          {/* Location note */}
          <div className="flex items-center gap-2 p-3 rounded-xl bg-[#FAF0E1] border border-[#EADBCC] text-xs text-[#5C4332]">
            <MapPin className="w-4 h-4 text-[#B86B2F] shrink-0" />
            <span>42 Friends Corner, 12th Main Road, Indiranagar, Bengaluru</span>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2.5 pt-1">
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={handleCopy}
                className="py-2.5 px-3 rounded-xl bg-white border border-[#DECBB5] hover:bg-[#F5ECE0] text-xs font-semibold text-[#2B1810] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#8C6D58]" />}
                <span>{copied ? 'Copied Details' : 'Copy Details'}</span>
              </button>

              <button
                onClick={handleGoogleCalendar}
                className="py-2.5 px-3 rounded-xl bg-white border border-[#DECBB5] hover:bg-[#F5ECE0] text-xs font-semibold text-[#2B1810] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-[#B86B2F]" />
                <span>Add to Calendar</span>
              </button>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenAllBookings();
              }}
              className="w-full py-2.5 px-4 rounded-xl bg-[#2B1810] hover:bg-[#3D2318] text-[#FFF4E8] text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>View in My Bookings ({reservation.id})</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
