import React, { useState, useEffect } from 'react';
import { Coffee, Calendar, ShoppingBag, Menu as MenuIcon, X, Clock, MapPin, Phone } from 'lucide-react';
import { getCafeOpenStatus } from '../utils/cafeLogic';
import { PreOrderItem, StoredReservation } from '../types/cafe';

interface HeaderProps {
  preOrders: PreOrderItem[];
  reservations: StoredReservation[];
  onOpenPreOrders: () => void;
  onOpenMyBookings: () => void;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  preOrders,
  reservations,
  onOpenPreOrders,
  onOpenMyBookings,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openStatus, setOpenStatus] = useState(getCafeOpenStatus());

  useEffect(() => {
    const timer = setInterval(() => {
      setOpenStatus(getCafeOpenStatus());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const totalPreOrderCount = preOrders.reduce((sum, item) => sum + item.quantity, 0);
  const activeReservationsCount = reservations.filter(r => r.status === 'confirmed').length;

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF6EE]/95 backdrop-blur-md border-b border-[#E8DEC8] transition-all">
      {/* Top Banner with live status & quick contact */}
      <div className="bg-[#2B1810] text-[#EADBC8] px-4 py-1.5 text-xs hidden sm:block">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-medium">
              <span className={`w-2 h-2 rounded-full ${openStatus.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-rose-400'}`} />
              <span className="text-white font-semibold">{openStatus.statusText}</span>
              <span className="text-[#C7B5A0]">· {openStatus.subText}</span>
            </span>
            <span className="text-[#644737]">|</span>
            <span className="flex items-center gap-1 text-[#C7B5A0]">
              <MapPin className="w-3 h-3 text-[#D9822B]" />
              Indiranagar, 12th Main Road
            </span>
          </div>
          <div className="flex items-center gap-4 text-[#C7B5A0]">
            <a href="tel:+919876543210" className="flex items-center gap-1 hover:text-white transition-colors">
              <Phone className="w-3 h-3 text-[#D9822B]" />
              +91 98765 43210
            </a>
            <span>·</span>
            <span>Daily: 8:00 AM – 10:30 PM</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-3 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B86B2F] rounded-xl p-1"
          aria-label="FriEndS CafE Home"
        >
          <img
            src="/assets/aistudio/Gemini_Generated_Image_zcyf75zcyf75zcyf_89e0b205.png"
            alt="FriEndS CafE Logo"
            className="w-11 h-11 rounded-full object-cover shadow-md shadow-[#2B1810]/20 border border-[#C5A376] group-hover:scale-105 transition-transform"
          />
          <div>
            <div className="font-serif-cafe text-2xl font-bold tracking-tight text-[#2B1810] flex items-center gap-1">
              FriEndS <span className="text-[#B86B2F]">CafE</span>
            </div>
            <p className="text-[10px] tracking-widest uppercase font-semibold text-[#8C6D58] -mt-0.5">
              Great Coffee & Best Friends
            </p>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#4A3326]" aria-label="Main Navigation">
          <button
            onClick={() => handleNavClick('hero')}
            className="hover:text-[#B86B2F] transition-colors py-1 cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('special-combo')}
            className="hover:text-[#B86B2F] transition-colors py-1 flex items-center gap-1 cursor-pointer text-[#B86B2F] font-semibold"
          >
            Today's Special
          </button>
          <button
            onClick={() => handleNavClick('digital-menu')}
            className="hover:text-[#B86B2F] transition-colors py-1 cursor-pointer"
          >
            Digital Menu
          </button>
          <button
            onClick={() => handleNavClick('reservation-section')}
            className="hover:text-[#B86B2F] transition-colors py-1 cursor-pointer"
          >
            Table Reservation
          </button>
          <button
            onClick={() => handleNavClick('visit-us')}
            className="hover:text-[#B86B2F] transition-colors py-1 cursor-pointer"
          >
            Visit Us
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* My Bookings Trigger */}
          <button
            onClick={onOpenMyBookings}
            className="relative p-2 rounded-lg text-[#4A3326] hover:bg-[#EFE6D8] transition-colors focus-visible:ring-2 focus-visible:ring-[#B86B2F] flex items-center gap-1.5 text-xs font-semibold cursor-pointer border border-[#E0D3C0]"
            aria-label="View My Reservations"
            title="My Reservations"
          >
            <Calendar className="w-4 h-4 text-[#B86B2F]" />
            <span className="hidden sm:inline">My Bookings</span>
            {activeReservationsCount > 0 && (
              <span className="bg-[#B86B2F] text-white text-[11px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {activeReservationsCount}
              </span>
            )}
          </button>

          {/* Pre-Order Cart Trigger */}
          <button
            onClick={onOpenPreOrders}
            className="relative px-3 py-2 rounded-lg bg-[#2B1810] text-[#FFF4E8] hover:bg-[#3E2419] transition-all focus-visible:ring-2 focus-visible:ring-[#B86B2F] flex items-center gap-2 text-xs font-semibold shadow-sm cursor-pointer"
            aria-label={`Pre-Order Tray with ${totalPreOrderCount} items`}
          >
            <ShoppingBag className="w-4 h-4 text-[#D9822B]" />
            <span className="hidden xs:inline">Pre-Order</span>
            {totalPreOrderCount > 0 ? (
              <span className="bg-[#D9822B] text-[#2B1810] font-bold px-1.5 py-0.2 rounded-full text-[11px]">
                {totalPreOrderCount}
              </span>
            ) : (
              <span className="text-[#A89689] text-[11px]">0</span>
            )}
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#2B1810] hover:bg-[#EFE6D8] transition-colors focus-visible:ring-2 focus-visible:ring-[#B86B2F]"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF6EE] border-b border-[#E0D3C0] px-4 py-4 space-y-3 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-[#E8DEC8] text-xs">
            <span className="flex items-center gap-1.5 font-medium text-[#4A3326]">
              <span className={`w-2 h-2 rounded-full ${openStatus.isOpen ? 'bg-emerald-500' : 'bg-rose-500'}`} />
              {openStatus.statusText} · {openStatus.subText}
            </span>
          </div>

          <div className="flex flex-col gap-2 font-medium text-sm text-[#3E2519]">
            <button
              onClick={() => handleNavClick('hero')}
              className="text-left px-3 py-2 rounded-md hover:bg-[#EFE6D8] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('special-combo')}
              className="text-left px-3 py-2 rounded-md hover:bg-[#EFE6D8] text-[#B86B2F] font-semibold transition-colors flex items-center justify-between"
            >
              <span>Today's Special Combo</span>
              <span className="text-xs bg-[#B86B2F]/10 text-[#B86B2F] px-2 py-0.5 rounded">Save ₹131</span>
            </button>
            <button
              onClick={() => handleNavClick('digital-menu')}
              className="text-left px-3 py-2 rounded-md hover:bg-[#EFE6D8] transition-colors"
            >
              Digital Menu
            </button>
            <button
              onClick={() => handleNavClick('reservation-section')}
              className="text-left px-3 py-2 rounded-md hover:bg-[#EFE6D8] transition-colors"
            >
              Table Reservation & Pre-Order
            </button>
            <button
              onClick={() => handleNavClick('visit-us')}
              className="text-left px-3 py-2 rounded-md hover:bg-[#EFE6D8] transition-colors"
            >
              Visit Us & Contact
            </button>
          </div>

          <div className="pt-2 border-t border-[#E8DEC8] flex items-center justify-between text-xs text-[#6F5241]">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#B86B2F]" />
              Open Daily 8:00 AM – 10:30 PM
            </span>
            <a href="tel:+919876543210" className="text-[#B86B2F] font-semibold underline">
              Call Cafe
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
