import React from 'react';
import { MapPin, Phone, Clock, Mail, MessageCircle, Instagram, Facebook, Twitter, Music, Wifi, Dog, Gamepad2, BatteryCharging, ExternalLink } from 'lucide-react';
import { getCafeOpenStatus } from '../utils/cafeLogic';

export const ContactSection: React.FC = () => {
  const openStatus = getCafeOpenStatus();

  return (
    <section id="visit-us" className="py-16 bg-[#FAF6EE] border-t border-[#E8DEC8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#B86B2F]">
            Drop By For Good Vibes
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-cafe font-bold text-[#2B1810]">
            Visit Us & Connect
          </h2>
          <p className="text-sm sm:text-base text-[#6E5342]">
            Whether you want a peaceful corner to read, a lively couch for your gang, or a steaming cup on the go—FriEndS CafE is always ready for you.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Hours, Location, Contact Info */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Opening Hours Card */}
            <div className="bg-white rounded-3xl p-6 border border-[#E5DAC8] shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF0E1] text-[#783E16] flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#B86B2F]" />
                  </div>
                  <div>
                    <h3 className="font-serif-cafe text-lg font-bold text-[#2B1810]">
                      Opening Hours
                    </h3>
                    <p className="text-xs text-[#8C6D58]">Serving fresh brews 7 days a week</p>
                  </div>
                </div>

                {/* Live Status Badge */}
                <div className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 ${
                  openStatus.isOpen ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                }`}>
                  <span className={`w-2 h-2 rounded-full ${openStatus.isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'}`} />
                  <span>{openStatus.statusText}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-[#F2E8DC] space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between py-1 border-b border-[#FAF6EE]">
                  <span className="font-semibold text-[#3E2419]">Monday – Sunday (Daily):</span>
                  <span className="font-bold text-[#2B1810]">8:00 AM – 10:30 PM</span>
                </div>
                <div className="flex justify-between py-1 text-xs text-[#7A6150]">
                  <span>Kitchen Last Order:</span>
                  <span>10:00 PM</span>
                </div>
                <div className="flex justify-between py-1 text-xs text-[#7A6150]">
                  <span>Coffee Counter:</span>
                  <span>Till 10:30 PM</span>
                </div>
              </div>
            </div>

            {/* Address & Direct Contact Card */}
            <div className="bg-white rounded-3xl p-6 border border-[#E5DAC8] shadow-xs space-y-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FAF0E1] text-[#783E16] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-[#B86B2F]" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif-cafe text-lg font-bold text-[#2B1810]">
                    Cafe Location
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C4535] leading-relaxed">
                    42 Friends Corner, 12th Main Road, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560038
                  </p>
                  <p className="text-[11px] text-[#8C6D58]">
                    (Opposite Central Green Park · 2 mins walk from 100 Ft Road)
                  </p>
                </div>
              </div>

              {/* Direct Buttons: Phone & WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href="tel:+919876543210"
                  className="py-3 px-4 rounded-xl bg-[#FAF6EE] hover:bg-[#EFE4D3] text-[#2B1810] border border-[#DECBB5] text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#B86B2F]" />
                  <span>Call: +91 98765 43210</span>
                </a>

                <a
                  href="https://wa.me/919876543210?text=Hi%20FriEndS%20CafE!%20I%20would%20like%20to%20inquire%20about%20a%20table%20reservation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-2xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Social Media Channels as specified */}
              <div className="pt-4 border-t border-[#F2E8DC] flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs font-semibold text-[#8C6D58]">
                  Follow our cozy stories:
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-[#FAF6EE] hover:bg-[#B86B2F] hover:text-white text-[#6E5342] flex items-center justify-center transition-all border border-[#E5DAC8]"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-[#FAF6EE] hover:bg-[#B86B2F] hover:text-white text-[#6E5342] flex items-center justify-center transition-all border border-[#E5DAC8]"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-[#FAF6EE] hover:bg-[#B86B2F] hover:text-white text-[#6E5342] flex items-center justify-center transition-all border border-[#E5DAC8]"
                    aria-label="Twitter / X"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href="https://spotify.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-xl bg-[#FAF6EE] hover:bg-[#1DB954] hover:text-white text-[#6E5342] flex items-center justify-center transition-all border border-[#E5DAC8]"
                    aria-label="Spotify Cafe Playlist"
                    title="FriEndS Acoustic Cafe Playlist"
                  >
                    <Music className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Visual Map / Directions Card & Cafe Amenities */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Interactive Map Card */}
            <div className="bg-white rounded-3xl overflow-hidden border border-[#E5DAC8] shadow-xs">
              <div className="relative h-64 bg-[#EADCCB] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80"
                  alt="Cafe neighborhood map view"
                  className="w-full h-full object-cover filter brightness-95"
                />
                <div className="absolute inset-0 bg-[#2B1810]/40 backdrop-blur-3xs" />
                
                {/* Pin callout */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-white space-y-2">
                  <div className="w-12 h-12 rounded-2xl bg-[#B86B2F] text-white flex items-center justify-center shadow-xl animate-bounce">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif-cafe text-xl font-bold">FriEndS CafE</h4>
                  <p className="text-xs text-[#F5ECE0] max-w-xs">
                    12th Main Road, Indiranagar · Corner Park Landmark
                  </p>
                  <a
                    href="https://maps.google.com/?q=Indiranagar+12th+Main+Road+Bengaluru"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-[#2B1810] text-xs font-bold hover:bg-[#FAF6EE] transition-colors shadow-md"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#B86B2F]" />
                  </a>
                </div>
              </div>

              {/* Cafe Amenities Badge Strip */}
              <div className="p-5 bg-[#FAF6EE] border-t border-[#E8DEC8]">
                <p className="text-xs font-bold text-[#8C6D58] uppercase tracking-wider mb-3">
                  Why Customers Love Hanging Out Here
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div className="p-2.5 rounded-xl bg-white border border-[#E8DEC8]">
                    <Wifi className="w-4 h-4 text-[#B86B2F] mx-auto mb-1" />
                    <span className="text-[11px] font-bold text-[#2B1810] block">Free Wi-Fi</span>
                    <span className="text-[10px] text-[#8C6D58]">300 Mbps</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-[#E8DEC8]">
                    <Dog className="w-4 h-4 text-[#B86B2F] mx-auto mb-1" />
                    <span className="text-[11px] font-bold text-[#2B1810] block">Pet Friendly</span>
                    <span className="text-[10px] text-[#8C6D58]">Pups welcome</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-[#E8DEC8]">
                    <Gamepad2 className="w-4 h-4 text-[#B86B2F] mx-auto mb-1" />
                    <span className="text-[11px] font-bold text-[#2B1810] block">Board Games</span>
                    <span className="text-[10px] text-[#8C6D58]">20+ Classics</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-[#E8DEC8]">
                    <BatteryCharging className="w-4 h-4 text-[#B86B2F] mx-auto mb-1" />
                    <span className="text-[11px] font-bold text-[#2B1810] block">Power Plugs</span>
                    <span className="text-[10px] text-[#8C6D58]">At every nook</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
