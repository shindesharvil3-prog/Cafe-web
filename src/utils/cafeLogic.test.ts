import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterMenuItems,
  calculatePreOrderTotal,
  validateReservation,
  generateBookingId,
  getCafeOpenStatus
} from './cafeLogic';
import { MenuItem, PreOrderItem } from '../types/cafe';

const mockItems: MenuItem[] = [
  {
    id: '1',
    name: 'Classic Cappuccino',
    category: 'hot-beverages',
    price: 160,
    isVeg: true,
    description: 'Fresh espresso with milk foam',
    prepTime: '5m',
    image: '',
    tags: ['Coffee', 'Hot']
  },
  {
    id: '2',
    name: 'Smoked Chicken Panini',
    category: 'snacks',
    price: 290,
    isVeg: false,
    description: 'Sourdough with chicken and cheese',
    prepTime: '10m',
    image: '',
    tags: ['Chicken', 'Savory']
  },
  {
    id: '3',
    name: 'Tiramisu Jar',
    category: 'desserts',
    price: 220,
    isVeg: true,
    description: 'Espresso soaked dessert',
    prepTime: 'Instant',
    image: '',
    tags: ['Sweet', 'Italian']
  },
  {
    id: '4',
    name: 'Truffle Mushroom Penne',
    category: 'pasta',
    price: 320,
    isVeg: true,
    description: 'Al dente penne in truffle cream sauce',
    prepTime: '12m',
    image: '',
    tags: ['Penne', 'Pasta', 'Truffle']
  }
];

test('filterMenuItems filters by category correctly', () => {
  const hot = filterMenuItems(mockItems, 'hot-beverages', '', false);
  assert.equal(hot.length, 1);
  assert.equal(hot[0].id, '1');

  const pasta = filterMenuItems(mockItems, 'pasta', '', false);
  assert.equal(pasta.length, 1);
  assert.equal(pasta[0].id, '4');

  const all = filterMenuItems(mockItems, 'all', '', false);
  assert.equal(all.length, 4);
});

test('filterMenuItems filters veg-only accurately', () => {
  const vegOnly = filterMenuItems(mockItems, 'all', '', true);
  assert.equal(vegOnly.length, 3);
  assert.equal(vegOnly.some(item => !item.isVeg), false);
});

test('filterMenuItems filters by search query matching name or description', () => {
  const queryResult = filterMenuItems(mockItems, 'all', 'chicken', false);
  assert.equal(queryResult.length, 1);
  assert.equal(queryResult[0].id, '2');

  const queryTag = filterMenuItems(mockItems, 'all', 'Italian', false);
  assert.equal(queryTag.length, 1);
  assert.equal(queryTag[0].id, '3');
});

test('calculatePreOrderTotal calculates correct sum', () => {
  const preOrders: PreOrderItem[] = [
    { item: mockItems[0], quantity: 2 }, // 160 * 2 = 320
    { item: mockItems[2], quantity: 1 }  // 220 * 1 = 220
  ];
  assert.equal(calculatePreOrderTotal(preOrders), 540);
});

test('validateReservation handles valid and invalid inputs', () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split('T')[0];

  const validData = {
    customerName: 'Ross Geller',
    phone: '9876543210',
    date: tomorrowStr,
    timeSlot: '05:30 PM',
    guests: 4,
    seatingArea: 'cozy-couch' as const,
    specialNotes: 'Table near the couch'
  };

  const validResult = validateReservation(validData);
  assert.equal(validResult.isValid, true);
  assert.deepEqual(validResult.errors, {});

  // Invalid data
  const invalidResult = validateReservation({
    ...validData,
    customerName: 'A',
    phone: '123',
    guests: 0
  });
  assert.equal(invalidResult.isValid, false);
  assert.ok(invalidResult.errors.customerName);
  assert.ok(invalidResult.errors.phone);
  assert.ok(invalidResult.errors.guests);
});

test('generateBookingId produces prefixed format', () => {
  const id = generateBookingId(5555);
  assert.equal(id, 'FRND-5555');
});

test('getCafeOpenStatus determines open and closed times', () => {
  // 10:00 AM should be open
  const morning = new Date('2026-11-05T10:00:00');
  const statusMorning = getCafeOpenStatus(morning);
  assert.equal(statusMorning.isOpen, true);

  // 11:30 PM (23:30) should be closed
  const night = new Date('2026-11-05T23:30:00');
  const statusNight = getCafeOpenStatus(night);
  assert.equal(statusNight.isOpen, false);
});
