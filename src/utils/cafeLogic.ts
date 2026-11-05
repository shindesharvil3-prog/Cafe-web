import { MenuItem, PreOrderItem, ReservationFormData } from '../types/cafe';

/**
 * Filter menu items by category, keyword query, and veg-only preference.
 */
export function filterMenuItems(
  items: MenuItem[],
  category: string,
  searchQuery: string,
  vegOnly: boolean
): MenuItem[] {
  const query = searchQuery.trim().toLowerCase();

  return items.filter(item => {
    // Category match
    if (category !== 'all' && item.category !== category) {
      return false;
    }

    // Veg-only match
    if (vegOnly && !item.isVeg) {
      return false;
    }

    // Search query match
    if (query) {
      const matchName = item.name.toLowerCase().includes(query);
      const matchDesc = item.description.toLowerCase().includes(query);
      const matchTags = item.tags.some(t => t.toLowerCase().includes(query));
      if (!matchName && !matchDesc && !matchTags) {
        return false;
      }
    }

    return true;
  });
}

/**
 * Calculate total price of pre-ordered items.
 */
export function calculatePreOrderTotal(preOrders: PreOrderItem[]): number {
  return preOrders.reduce((sum, item) => sum + item.item.price * item.quantity, 0);
}

/**
 * Validates reservation form input.
 */
export function validateReservation(formData: ReservationFormData): {
  isValid: boolean;
  errors: Partial<Record<keyof ReservationFormData, string>>;
} {
  const errors: Partial<Record<keyof ReservationFormData, string>> = {};

  if (!formData.customerName || formData.customerName.trim().length < 2) {
    errors.customerName = 'Please enter your full name (at least 2 letters)';
  }

  // Clean phone number (strip spaces/dashes)
  const cleanPhone = (formData.phone || '').replace(/[\s\-+()]/g, '');
  if (!cleanPhone || cleanPhone.length < 10 || !/^\d{10,12}$/.test(cleanPhone)) {
    errors.phone = 'Please enter a valid 10-digit mobile number';
  }

  if (!formData.date) {
    errors.date = 'Please select a reservation date';
  } else {
    // Check not in the past
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const selectedDate = new Date(formData.date);
    selectedDate.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      errors.date = 'Reservation date cannot be in the past';
    }
  }

  if (!formData.timeSlot) {
    errors.timeSlot = 'Please select a time slot';
  }

  if (!formData.guests || formData.guests < 1) {
    errors.guests = 'Number of guests must be at least 1';
  } else if (formData.guests > 20) {
    errors.guests = 'For parties larger than 20, please contact the cafe directly';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

/**
 * Generate a friendly booking reference ID.
 */
export function generateBookingId(seed?: number): string {
  const num = seed !== undefined ? seed : Math.floor(1000 + Math.random() * 9000);
  return `FRND-${num}`;
}

export interface CafeOpenStatus {
  isOpen: boolean;
  statusText: string;
  badgeText: string;
  subText: string;
}

/**
 * Determine if FriEndS CafE is currently open.
 * Hours: Daily 8:00 AM to 10:30 PM (22:30).
 */
export function getCafeOpenStatus(now: Date = new Date()): CafeOpenStatus {
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentMinutes = hours * 60 + minutes;

  const openMinutes = 8 * 60; // 08:00 AM
  const closeMinutes = 22 * 60 + 30; // 10:30 PM

  const isOpen = currentMinutes >= openMinutes && currentMinutes < closeMinutes;

  if (isOpen) {
    const minutesLeft = closeMinutes - currentMinutes;
    if (minutesLeft <= 45) {
      return {
        isOpen: true,
        statusText: 'Closing Soon',
        badgeText: 'Closing Soon',
        subText: `Closes at 10:30 PM (${minutesLeft} mins left)`
      };
    }
    return {
      isOpen: true,
      statusText: 'Open Now',
      badgeText: 'Open Now',
      subText: 'Closes tonight at 10:30 PM'
    };
  }

  return {
    isOpen: false,
    statusText: 'Closed Now',
    badgeText: 'Closed Now',
    subText: 'Opens daily at 8:00 AM'
  };
}
