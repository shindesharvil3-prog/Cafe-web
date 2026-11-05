/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SpecialCombo } from './components/SpecialCombo';
import { DigitalMenu } from './components/DigitalMenu';
import { ReservationSection } from './components/ReservationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingConfirmationModal } from './components/BookingConfirmationModal';
import { MyBookingsModal } from './components/MyBookingsModal';
import { PreOrderDrawer } from './components/PreOrderDrawer';
import { MenuItem, PreOrderItem, ReservationFormData, StoredReservation } from './types/cafe';
import { MENU_ITEMS, TODAY_SPECIAL_COMBO } from './data/menuData';
import { generateBookingId, calculatePreOrderTotal } from './utils/cafeLogic';

const STORAGE_KEY = 'friends_cafe_reservations_v1';

export default function App() {
  const [preOrders, setPreOrders] = useState<PreOrderItem[]>([]);
  const [reservations, setReservations] = useState<StoredReservation[]>([]);
  const [activeConfirmation, setActiveConfirmation] = useState<StoredReservation | null>(null);
  const [isMyBookingsOpen, setIsMyBookingsOpen] = useState(false);
  const [isPreOrderDrawerOpen, setIsPreOrderDrawerOpen] = useState(false);

  // Load reservations from LocalStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setReservations(parsed);
        }
      }
    } catch (e) {
      console.error('Failed to load reservations from localStorage', e);
    }
  }, []);

  // Save reservations to LocalStorage whenever they change
  const saveReservations = (newReservations: StoredReservation[]) => {
    setReservations(newReservations);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newReservations));
    } catch (e) {
      console.error('Failed to save reservation to localStorage', e);
    }
  };

  // Pre-order quantity updates
  const handleUpdatePreOrder = (item: MenuItem, delta: number) => {
    setPreOrders(prev => {
      const existing = prev.find(p => p.item.id === item.id);
      if (!existing && delta > 0) {
        return [...prev, { item, quantity: delta }];
      }
      if (existing) {
        const newQty = existing.quantity + delta;
        if (newQty <= 0) {
          return prev.filter(p => p.item.id !== item.id);
        }
        return prev.map(p => (p.item.id === item.id ? { ...p, quantity: newQty } : p));
      }
      return prev;
    });
  };

  const handleClearPreOrders = () => {
    setPreOrders([]);
  };

  // Check if Today's Special Combo items are added
  const isComboAdded = Boolean(
    preOrders.some(p => p.item.id === 'hot-2') &&
    preOrders.some(p => p.item.id === 'snack-1') &&
    preOrders.some(p => p.item.id === 'dessert-1')
  );

  // Add Combo to Pre-orders
  const handleAddComboToPreOrder = () => {
    const mocha = MENU_ITEMS.find(m => m.id === 'hot-2')!;
    const garlic = MENU_ITEMS.find(m => m.id === 'snack-1')!;
    const tiramisu = MENU_ITEMS.find(m => m.id === 'dessert-1')!;

    setPreOrders(prev => {
      const ids = ['hot-2', 'snack-1', 'dessert-1'];
      const filtered = prev.filter(p => !ids.includes(p.item.id));
      return [
        ...filtered,
        { item: mocha, quantity: 1 },
        { item: garlic, quantity: 1 },
        { item: tiramisu, quantity: 1 },
      ];
    });
  };

  const handleReserveTableWithCombo = () => {
    handleAddComboToPreOrder();
    handleNavigate('reservation-section');
  };

  // Submit Reservation
  const handleSubmitReservation = (formData: ReservationFormData) => {
    const bookingId = generateBookingId();
    const preOrderItemsMapped = preOrders.map(p => ({
      id: p.item.id,
      name: p.item.name,
      price: p.item.price,
      quantity: p.quantity,
    }));
    const preOrderTotal = calculatePreOrderTotal(preOrders);

    const newBooking: StoredReservation = {
      ...formData,
      id: bookingId,
      createdAt: new Date().toISOString(),
      status: 'confirmed',
      preOrders: preOrderItemsMapped,
      preOrderTotal,
    };

    const updated = [newBooking, ...reservations];
    saveReservations(updated);

    // Show confirmation modal
    setActiveConfirmation(newBooking);

    // Clear pre-order tray since it's attached to the booking
    setPreOrders([]);
  };

  // Cancel reservation
  const handleCancelReservation = (id: string) => {
    if (confirm('Are you sure you want to cancel this reservation?')) {
      const updated = reservations.map(r => (r.id === id ? { ...r, status: 'cancelled' as const } : r));
      saveReservations(updated);
    }
  };

  // Smooth scroll
  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF6EE] text-[#2B1810] flex flex-col selection:bg-[#B86B2F] selection:text-white">
      {/* Navigation Header */}
      <Header
        preOrders={preOrders}
        reservations={reservations}
        onOpenPreOrders={() => setIsPreOrderDrawerOpen(true)}
        onOpenMyBookings={() => setIsMyBookingsOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero & Branding */}
        <Hero
          onExploreMenu={() => handleNavigate('digital-menu')}
          onReserveTable={() => handleNavigate('reservation-section')}
        />

        {/* 2. Today's Special Combo Spotlight */}
        <SpecialCombo
          onAddComboToPreOrder={handleAddComboToPreOrder}
          onReserveTableWithCombo={handleReserveTableWithCombo}
          isComboAdded={isComboAdded}
        />

        {/* 3. Interactive Digital Menu */}
        <DigitalMenu
          preOrders={preOrders}
          onUpdatePreOrder={handleUpdatePreOrder}
        />

        {/* 4. Table Reservation & Pre-Order Form */}
        <ReservationSection
          preOrders={preOrders}
          onUpdatePreOrder={handleUpdatePreOrder}
          onClearPreOrders={handleClearPreOrders}
          onSubmitReservation={handleSubmitReservation}
          onExploreMenu={() => handleNavigate('digital-menu')}
        />

        {/* 5. Visit Us & Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Pre-Order Side Drawer */}
      <PreOrderDrawer
        isOpen={isPreOrderDrawerOpen}
        onClose={() => setIsPreOrderDrawerOpen(false)}
        preOrders={preOrders}
        onUpdatePreOrder={handleUpdatePreOrder}
        onClearPreOrders={handleClearPreOrders}
        onProceedToReservation={() => handleNavigate('reservation-section')}
      />

      {/* Instant Booking Confirmation Modal */}
      {activeConfirmation && (
        <BookingConfirmationModal
          reservation={activeConfirmation}
          onClose={() => setActiveConfirmation(null)}
          onOpenAllBookings={() => setIsMyBookingsOpen(true)}
        />
      )}

      {/* My Stored Bookings Modal */}
      {isMyBookingsOpen && (
        <MyBookingsModal
          reservations={reservations}
          onClose={() => setIsMyBookingsOpen(false)}
          onCancelReservation={handleCancelReservation}
          onBookNewTable={() => handleNavigate('reservation-section')}
        />
      )}
    </div>
  );
}
