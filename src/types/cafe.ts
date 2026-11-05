export type MenuCategory = 
  | 'hot-beverages'
  | 'cold-brews'
  | 'pasta'
  | 'snacks'
  | 'desserts';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  price: number;
  isVeg: boolean;
  description: string;
  prepTime: string;
  badge?: 'Chef Favorite' | 'Bestseller' | 'Seasonal' | 'House Special';
  image: string;
  tags: string[];
  calories?: string;
}

export interface PreOrderItem {
  item: MenuItem;
  quantity: number;
  notes?: string;
}

export interface ReservationFormData {
  customerName: string;
  phone: string;
  date: string;
  timeSlot: string;
  guests: number;
  seatingArea: 'cozy-couch' | 'window-nook' | 'garden-patio' | 'quiet-study';
  specialNotes: string;
}

export interface StoredReservation extends ReservationFormData {
  id: string;
  createdAt: string;
  status: 'confirmed' | 'cancelled';
  preOrders: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
  }>;
  preOrderTotal: number;
}
