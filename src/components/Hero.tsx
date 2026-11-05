import React from 'react';
import { Coffee, ArrowRight, Calendar, Heart, Sparkles, Wifi, BookOpen, Users } from 'lucide-react';

interface HeroProps {
  onExploreMenu: () => void;
  onReserveTable: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onReserveTable }) => {
  return (
    <section id="hero" className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      {/* Subtle warm background elements */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#EADBC8]/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 rounded-full bg-[#BA7336]/10 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Branding, Tagline, CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Friendly Welcome Kicker with Logo Badge */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <img
                src="/assets/aistudio/Gemini_Generated_Image_zcyf75zcyf75zcyf_89e0b205.png"
                alt="FriEndS CafE Official Logo"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover shadow-xl shadow-[#2B1810]/25 border-2 border-[#D4AF37] hover:scale-105 hover:rotate-3 transition-transform duration-300 shrink-0 bg-[#2B1810]"
              />
              <div className="space-y-1.5 text-center sm:text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE4D3] text-[#783E16] text-xs font-semibold tracking-wide border border-[#DFCBB5] shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#B86B2F]" />
                  <span>Your Cozy Neighborhood Haven</span>
                  <span className="text-[#A1816A]">·</span>
                  <span className="text-[#3E2419]">Est. 2024</span>
                </div>
                <p className="text-xs text-[#785E4E] font-medium hidden sm:block">
                  Indiranagar, 12th Main Road · Open Daily 8 AM – 10:30 PM
                </p>
              </div>
            </div>

            {/* Prominent Cafe Branding & Tagline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif-cafe font-bold text-[#231713] tracking-tight leading-[1.12]">
                Welcome to <br />
                <span className="text-[#B86B2F] relative inline-block">
                  FriEndS CafE
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#D9822B]/35" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
                    <path d="M2 9C50 3 150 3 198 9" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
              
              {/* Tagline as specified in prompt */}
              <p className="text-xl sm:text-2xl font-serif-cafe italic text-[#5C3E2D] font-medium pt-1">
                “Great Coffee, Good Food, Best Friends.”
              </p>

              <p className="text-base sm:text-lg text-[#614738] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Pull up a cozy couch, catch up with your favorite people, and savor slow-roasted single-origin coffees, melted cheesy bites, and freshly baked desserts.
              </p>
            </div>

            {/* Core Action Buttons as specified */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onExploreMenu}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#2B1810] text-[#FFF4E8] hover:bg-[#3D2318] active:scale-[0.98] transition-all font-semibold text-sm shadow-md shadow-[#2B1810]/20 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Explore Menu</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#D9822B]" />
              </button>

              <button
                onClick={onReserveTable}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#FAF6EE] text-[#2B1810] border-2 border-[#B86B2F] hover:bg-[#F2E8DC] active:scale-[0.98] transition-all font-semibold text-sm shadow-sm flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#B86B2F]" />
                <span>Reserve a Table</span>
              </button>
            </div>

            {/* Cozy Perks / Highlights */}
            <div className="pt-6 border-t border-[#E5D7C5] grid grid-cols-3 gap-2 sm:gap-4 text-center lg:text-left">
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#EFE5D6] flex items-center justify-center text-[#783E16]">
                  <Coffee className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <p className="font-bold text-[#2B1810]">100% Arabica</p>
                  <p className="text-[#785E4E]">Single-origin roast</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#EFE5D6] flex items-center justify-center text-[#783E16]">
                  <Users className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <p className="font-bold text-[#2B1810]">Central Couch</p>
                  <p className="text-[#785E4E]">The iconic chill spot</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#EFE5D6] flex items-center justify-center text-[#783E16]">
                  <Wifi className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <p className="font-bold text-[#2B1810]">Free Wi-Fi & Games</p>
                  <p className="text-[#785E4E]">Work or play friendly</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Cozy Cafe Visual Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=80"
                  alt="Cozy interior of FriEndS CafE with warm lights, comfortable seating, and steaming coffee"
                  className="w-full h-80 sm:h-96 object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F120B]/90 via-[#1F120B]/30 to-transparent" />

                {/* On-card caption */}
                <div className="absolute bottom-0 inset-x-0 p-6 text-white space-y-1">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#F7D8B5]">
                    <Heart className="w-3.5 h-3.5 fill-[#D9822B] text-[#D9822B]" />
                    <span>Always freshly brewed on 12th Main</span>
                  </div>
                  <h3 className="font-serif-cafe text-xl sm:text-2xl font-bold leading-snug">
                    "Could this coffee BE any better?"
                  </h3>
                  <p className="text-xs text-[#E2D2C2]">
                    Plush sofas, comforting food, warm conversations, and the smell of freshly roasted beans.
                  </p>
                </div>
              </div>

              {/* Floating review card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 sm:p-4 shadow-xl border border-[#EBE1D3] max-w-[240px] hidden xs:block">
                <div className="flex items-center gap-1 text-amber-500 text-xs mb-1">
                  {'★'.repeat(5)}
                  <span className="text-[#3E2419] font-bold ml-1 text-xs">4.9 / 5</span>
                </div>
                <p className="text-xs text-[#523A2B] font-medium leading-tight">
                  "The best hazelnut mocha & couch vibe in the city! Our gang's daily hangout."
                </p>
                <p className="text-[10px] text-[#8C6D58] mt-1 font-semibold">
                  — Priya & Gang (Google Review)
                </p>
              </div>

              {/* Floating special tag */}
              <div className="absolute -top-3 -right-3 bg-[#B86B2F] text-white px-3.5 py-1.5 rounded-xl shadow-lg text-xs font-bold flex items-center gap-1.5 animate-bounce">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Today's Special Live</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
