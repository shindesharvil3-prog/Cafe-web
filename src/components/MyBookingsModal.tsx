import React from 'react';
import { X, Calendar, Clock, Users, MapPin, Trash2, Armchair, Plus, CheckCircle, Ban } from 'lucide-react';
import { StoredReservation } from '../types/cafe';

interface MyBookingsModalProps {
  reservations: StoredReservation[];
  onClose: () => void;
  onCancelReservation: (id: string) => void;
  onBookNewTable: () => void;
}

export const MyBookingsModal: React.FC<MyBookingsModalProps> = ({
  reservations,
  onClose,
  onCancelReservation,
  onBookNewTable,
}) => {
  const getAreaName = (id: string) => {
    switch (id) {
      case 'cozy-couch': return 'Cozy Central Couch';
      case 'window-nook': return 'Sunlit Window Bench';
      case 'garden-patio': return 'Breezy Garden Patio';
      case 'quiet-study': return 'Quiet Corner / Work Nook';
      default: return id;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#FAF6EE] rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-[#DFCBB5] animate-in fade-in zoom-in-95 duration-200 my-8">
        
        {/* Header */}
        <div className="bg-[#2B1810] text-[#FFF4E8] p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/assets/aistudio/Gemini_Generated_Image_zcyf75zcyf75zcyf_89e0b205.png"
              alt="FriEndS CafE Logo"
              className="w-10 h-10 rounded-full object-cover border border-[#D4AF37]/70 shadow-md"
            />
            <div>
              <h3 className="font-serif-cafe text-xl sm:text-2xl font-bold flex items-center gap-2">
                <span>My Cafe Bookings</span>
              </h3>
              <p className="text-xs text-[#DECBC0] mt-0.5">
                Saved locally on this device ({reservations.length} total)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close My Bookings"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* List of bookings */}
        <div className="p-5 sm:p-6 space-y-4 max-h-[65vh] overflow-y-auto">
          {reservations.length === 0 ? (
            <div className="text-center py-10 px-4 bg-white rounded-2xl border border-[#E5DAC8] space-y-3">
              <Armchair className="w-10 h-10 text-[#C7B5A0] mx-auto" />
              <h4 className="font-serif-cafe text-lg font-bold text-[#2B1810]">
                No reservations found
              </h4>
              <p className="text-xs text-[#7A6150] max-w-xs mx-auto">
                You haven't reserved a table yet. Book a cozy corner for your next coffee session!
              </p>
              <button
                onClick={() => {
                  onClose();
                  onBookNewTable();
                }}
                className="mt-2 px-4 py-2 bg-[#2B1810] text-[#FFF4E8] rounded-xl text-xs font-semibold hover:bg-[#3D2318] transition-colors cursor-pointer inline-flex items-center gap-1.5"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Reserve a Table</span>
              </button>
            </div>
          ) : (
            reservations.map((res) => (
              <div
                key={res.id}
                className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E5DAC8] shadow-2xs space-y-3 relative group"
              >
                {/* Header row with status & ID */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-[#2B1810] bg-[#FAF6EE] px-2.5 py-1 rounded-lg border border-[#E8DEC8]">
                      {res.id}
                    </span>
                    {res.status === 'confirmed' ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                        <CheckCircle className="w-3 h-3" />
                        Confirmed
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-full">
                        <Ban className="w-3 h-3" />
                        Cancelled
                      </span>
                    )}
                  </div>

                  {res.status === 'confirmed' && (
                    <button
                      onClick={() => onCancelReservation(res.id)}
                      className="text-xs text-[#9E4738] hover:text-rose-700 hover:underline flex items-center gap-1 cursor-pointer font-medium"
                      title="Cancel this reservation"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Cancel</span>
                    </button>
                  )}
                </div>

                {/* Details grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs py-1">
                  <div>
                    <span className="text-[#8C6D58] block">Date</span>
                    <span className="font-semibold text-[#2B1810]">{res.date}</span>
                  </div>
                  <div>
                    <span className="text-[#8C6D58] block">Time Slot</span>
                    <span className="font-semibold text-[#2B1810]">{res.timeSlot}</span>
                  </div>
                  <div>
                    <span className="text-[#8C6D58] block">Party</span>
                    <span className="font-semibold text-[#2B1810]">{res.guests} Guests</span>
                  </div>
                  <div>
                    <span className="text-[#8C6D58] block">Seating</span>
                    <span className="font-semibold text-[#2B1810] truncate block">{getAreaName(res.seatingArea)}</span>
                  </div>
                </div>

                {/* Contact name */}
                <div className="text-xs text-[#523B2C] pt-2 border-t border-[#F2E8DC] flex justify-between items-center">
                  <span>Guest: <strong>{res.customerName}</strong> ({res.phone})</span>
                  {res.preOrders.length > 0 && (
                    <span className="text-[#B86B2F] font-bold">
                      Pre-Order: ₹{res.preOrderTotal} ({res.preOrders.length} items)
                    </span>
                  )}
                </div>

                {res.preOrders.length > 0 && (
                  <div className="bg-[#FAF6EE] p-2 rounded-xl text-[11px] text-[#614736] space-y-1">
                    <span className="font-bold block">Pre-ordered items:</span>
                    <p className="truncate">
                      {res.preOrders.map(p => `${p.name} (x${p.quantity})`).join(', ')}
                    </p>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-[#F2E8DC] border-t border-[#E5DAC8] flex items-center justify-between">
          <button
            onClick={() => {
              onClose();
              onBookNewTable();
            }}
            className="px-4 py-2 bg-[#2B1810] text-[#FFF4E8] rounded-xl text-xs font-semibold hover:bg-[#3D2318] transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Book Another Table</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-[#6E5342] hover:text-[#2B1810] cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
