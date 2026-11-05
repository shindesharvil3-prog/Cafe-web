import React from 'react';
import { Coffee, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#23150F] text-[#E5D7C7] border-t border-[#3B251A] pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#3B251A]">
          {/* Brand info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <img
                src="/assets/aistudio/Gemini_Generated_Image_zcyf75zcyf75zcyf_89e0b205.png"
                alt="FriEndS CafE Logo"
                className="w-12 h-12 rounded-full object-cover border border-[#D4AF37]/60 shadow-md"
              />
              <div>
                <span className="font-serif-cafe text-2xl font-bold tracking-tight text-white block">
                  FriEndS <span className="text-[#D9822B]">CafE</span>
                </span>
                <span className="text-[10px] text-[#A89484] tracking-widest uppercase font-semibold">
                  Est. 2024 · Indiranagar
                </span>
              </div>
            </div>
            <p className="text-sm font-serif-cafe italic text-[#D4BCA9]">
              “Great Coffee, Good Food, Best Friends.”
            </p>
            <p className="text-xs text-[#A89484] max-w-sm leading-relaxed">
              Your neighborhood coffee refuge on 12th Main Road, Indiranagar. Slow sips, warm toasts, gooey brownies, and endless conversations with the people who matter most.
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D9822B]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs font-medium text-[#C7B5A3]">
              <li>
                <button
                  onClick={() => onNavigate('hero')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('special-combo')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Today's Special Combo
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('digital-menu')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Interactive Digital Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('reservation-section')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Table Reservation & Pre-Order
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('visit-us')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Visit Us & Opening Hours
                </button>
              </li>
            </ul>
          </div>

          {/* Cafe Hours & Notice */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#D9822B]">
              Hours & Hospitality
            </h4>
            <div className="text-xs text-[#C7B5A3] space-y-1.5 leading-relaxed">
              <p className="text-white font-semibold">Open Daily: 8:00 AM – 10:30 PM</p>
              <p>42 Friends Corner, 12th Main Road, Indiranagar, Bengaluru</p>
              <p>Direct Phone: +91 98765 43210</p>
              <p className="text-[11px] text-[#8F7969] pt-1">
                Pet friendly courtyard · Free 300 Mbps Wi-Fi · Board games collection
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8F7969]">
          <p className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} FriEndS CafE. Crafted with</span>
            <Heart className="w-3.5 h-3.5 fill-[#D9822B] text-[#D9822B]" />
            <span>for great friends everywhere.</span>
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#C7B5A3] hover:text-white transition-colors cursor-pointer p-1"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
