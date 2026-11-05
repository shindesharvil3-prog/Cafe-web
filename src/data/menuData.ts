import { MenuItem } from '../types/cafe';

export const CATEGORIES: { id: MenuItem['category'] | 'all'; label: string; icon: string }[] = [
  { id: 'all', label: 'All Items', icon: 'Sparkles' },
  { id: 'pasta', label: 'Artisan Pastas', icon: 'Utensils' },
  { id: 'hot-beverages', label: 'Hot Beverages', icon: 'Coffee' },
  { id: 'cold-brews', label: 'Cold Brews & Shakes', icon: 'CupSoda' },
  { id: 'snacks', label: 'Snacks & Quick Bites', icon: 'Sandwich' },
  { id: 'desserts', label: 'Desserts & Tiramisu', icon: 'Cake' },
];

export const MENU_ITEMS: MenuItem[] = [
  // Artisan Pastas (Different types of Italian pasta)
  {
    id: 'pasta-1',
    name: 'Truffle Wild Mushroom Penne',
    category: 'pasta',
    price: 320,
    isVeg: true,
    description: 'Al dente ridged penne tossed in a velvety white truffle cream sauce with pan-seared cremini & shiitake mushrooms, fresh thyme, and shaved 18-month aged Parmesan.',
    prepTime: '12-14 mins',
    badge: 'Chef Favorite',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80',
    tags: ['Penne', 'Truffle Cream', 'Wild Mushrooms', 'Gourmet'],
    calories: '480 kcal'
  },
  {
    id: 'pasta-2',
    name: 'Classic Roman Fettuccine Alfredo',
    category: 'pasta',
    price: 290,
    isVeg: true,
    description: 'Flat ribbon fettuccine coated in slow-simmered rich garlic butter emulsion, heavy fresh cream, crushed black Tellicherry peppercorns, and freshly grated Grana Padano.',
    prepTime: '10-12 mins',
    badge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=800&q=80',
    tags: ['Fettuccine', 'Creamy Alfredo', 'Garlic Herb', 'Comfort Food'],
    calories: '510 kcal'
  },
  {
    id: 'pasta-3',
    name: 'Fiery Arrabbiata Spaghetti with Basil',
    category: 'pasta',
    price: 280,
    isVeg: true,
    description: 'Long strand spaghetti rolled in slow-cooked San Marzano plum tomato marinara, roasted garlic cloves, fresh red bird\'s eye chili flakes, Kalamata olives, and fresh sweet basil.',
    prepTime: '10-12 mins',
    badge: 'House Special',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
    tags: ['Spaghetti', 'Arrabbiata', 'San Marzano', 'Spicy'],
    calories: '390 kcal'
  },
  {
    id: 'pasta-4',
    name: 'Pesto Genovese Fusilli w/ Mozzarella Pearls',
    category: 'pasta',
    price: 310,
    isVeg: true,
    description: 'Spiral fusilli pasta capturing freshly pounded sweet basil and pine nut pesto, blistered cherry tomatoes, toasted walnuts, and soft fresh bocconcini mozzarella pearls.',
    prepTime: '10-12 mins',
    badge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
    tags: ['Fusilli', 'Basil Pesto', 'Pine Nuts', 'Bocconcini'],
    calories: '440 kcal'
  },
  {
    id: 'pasta-5',
    name: 'Smoked Chicken & Bacon Carbonara Spaghetti',
    category: 'pasta',
    price: 340,
    isVeg: false,
    description: 'Silky spaghetti enrobed in a golden egg yolk and Pecorino Romano sauce, tossed with tender smoked chicken breast slices and crispy chicken bacon bits.',
    prepTime: '12-15 mins',
    badge: 'Chef Favorite',
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=800&q=80',
    tags: ['Spaghetti', 'Carbonara', 'Smoked Chicken', 'Non-Veg'],
    calories: '560 kcal'
  },
  {
    id: 'pasta-6',
    name: 'Baked Three-Cheese Rigatoni Al Forno',
    category: 'pasta',
    price: 330,
    isVeg: true,
    description: 'Large tube rigatoni baked golden in rich Italian marinara and creamy ricotta, smothered under a bubbling crust of Mozzarella, aged Cheddar, and herbed panko breadcrumbs.',
    prepTime: '14-16 mins',
    badge: 'House Special',
    image: 'https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=800&q=80',
    tags: ['Rigatoni', 'Baked Pasta', 'Three-Cheese', 'Gooey'],
    calories: '520 kcal'
  },

  // Hot Beverages
  {
    id: 'hot-1',
    name: 'Central Perk Classic Cappuccino',
    category: 'hot-beverages',
    price: 160,
    isVeg: true,
    description: 'Double shot of freshly roasted Indian Arabica espresso crowned with velvety steamed micro-foam and artisanal cocoa dust.',
    prepTime: '5-7 mins',
    badge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=800&q=80',
    tags: ['Rich', 'Double Shot', 'Espresso'],
    calories: '120 kcal'
  },
  {
    id: 'hot-2',
    name: 'Hazelnut Silk Mocha',
    category: 'hot-beverages',
    price: 190,
    isVeg: true,
    description: 'Single-origin espresso blended with toasted Italian hazelnut praline, Belgian milk chocolate ganache, and frothed warm milk.',
    prepTime: '5-8 mins',
    badge: 'Chef Favorite',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80',
    tags: ['Sweet', 'Hazelnut', 'Chocolate'],
    calories: '210 kcal'
  },
  {
    id: 'hot-3',
    name: 'Spiced Cardamom Cinnamon Latte',
    category: 'hot-beverages',
    price: 180,
    isVeg: true,
    description: 'A comforting blend of slow-extracted espresso, Kerala green cardamom pods, and Ceylon cinnamon quill infusion.',
    prepTime: '6-8 mins',
    badge: 'House Special',
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=800&q=80',
    tags: ['Aromatic', 'Spiced', 'Warm'],
    calories: '150 kcal'
  },
  {
    id: 'hot-4',
    name: 'Parisian Dark Hot Chocolate',
    category: 'hot-beverages',
    price: 210,
    isVeg: true,
    description: 'Thick 70% Callebaut dark chocolate melted into whole milk, topped with toasted marshmallows and sea salt flakes.',
    prepTime: '6-9 mins',
    badge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=800&q=80',
    tags: ['Decadent', 'Dark Chocolate', 'Marshmallows'],
    calories: '280 kcal'
  },
  {
    id: 'hot-5',
    name: 'Kashmiri Saffron Kahwa',
    category: 'hot-beverages',
    price: 150,
    isVeg: true,
    description: 'Delicate green tea leaves brewed with crushed almonds, Kashmiri saffron strands, cloves, and wild forest honey.',
    prepTime: '5 mins',
    badge: 'Seasonal',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    tags: ['Herbal', 'Saffron', 'Soothing'],
    calories: '45 kcal'
  },

  // Cold Brews & Shakes
  {
    id: 'cold-1',
    name: '18-Hour Madagascar Vanilla Cold Brew',
    category: 'cold-brews',
    price: 210,
    isVeg: true,
    description: 'Coarsely ground beans steeped for 18 hours in mountain water, served over crystal clear ice with real vanilla sweet cream float.',
    prepTime: '3-5 mins',
    badge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80',
    tags: ['Smooth', 'Low Acidity', 'Vanilla'],
    calories: '90 kcal'
  },
  {
    id: 'cold-2',
    name: 'Salted Caramel Crunch Frappuccino',
    category: 'cold-brews',
    price: 230,
    isVeg: true,
    description: 'Creamy iced blended coffee loaded with buttery salted caramel drizzle, whipped cream rosette, and crunchy butterscotch bits.',
    prepTime: '5-7 mins',
    badge: 'House Special',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80',
    tags: ['Sweet', 'Caramel', 'Blended'],
    calories: '310 kcal'
  },
  {
    id: 'cold-3',
    name: 'Belgian Dark Fudge Thickshake',
    category: 'cold-brews',
    price: 240,
    isVeg: true,
    description: 'Thick artisan chocolate gelato churned with Belgian fudge sauce, brownie chunks, and topped with shaved bittersweet curls.',
    prepTime: '6-8 mins',
    badge: 'Chef Favorite',
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=80',
    tags: ['Indulgent', 'Chocolate', 'Shake'],
    calories: '390 kcal'
  },
  {
    id: 'cold-4',
    name: 'Alphonso Mango Coconut Refresher',
    category: 'cold-brews',
    price: 190,
    isVeg: true,
    description: 'Pure Ratnagiri Alphonso mango pulp shaken over ice with fresh tender coconut water and mint leaves.',
    prepTime: '4 mins',
    badge: 'Seasonal',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80',
    tags: ['Fruity', 'Dairy-Free', 'Refreshing'],
    calories: '110 kcal'
  },
  {
    id: 'cold-5',
    name: 'Iced Peach Blossom Tea',
    category: 'cold-brews',
    price: 170,
    isVeg: true,
    description: 'Slow-brewed Nilgiri black tea infused with ripe white peach nectar, lemon zest, and fresh basil sprigs.',
    prepTime: '3-4 mins',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80',
    tags: ['Crisp', 'Citrus', 'Iced Tea'],
    calories: '75 kcal'
  },

  // Snacks & Quick Bites
  {
    id: 'snack-1',
    name: 'Artisan Three-Cheese Garlic Pull-Apart',
    category: 'snacks',
    price: 220,
    isVeg: true,
    description: 'Warm freshly baked brioche loaf generously stuffed with melted Mozzarella, aged Cheddar, roasted garlic herb butter, and parsley.',
    prepTime: '10-12 mins',
    badge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1619860860774-1e2e17343432?auto=format&fit=crop&w=800&q=80',
    tags: ['Cheesy', 'Garlic', 'Warm Loaf'],
    calories: '340 kcal'
  },
  {
    id: 'snack-2',
    name: 'Smoked Chicken & Jalapeño Panini',
    category: 'snacks',
    price: 290,
    isVeg: false,
    description: 'Tender smoked chicken breast, pickled jalapeños, melted provolone cheese, and house sun-dried tomato spread pressed in artisanal sourdough.',
    prepTime: '10-14 mins',
    badge: 'Chef Favorite',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80',
    tags: ['Grilled', 'Savory', 'Chicken'],
    calories: '420 kcal'
  },
  {
    id: 'snack-3',
    name: 'Peri-Peri Crispy Paneer Sliders (2 Pcs)',
    category: 'snacks',
    price: 260,
    isVeg: true,
    description: 'Panko-crusted fresh cottage cheese steaks spiced with peri-peri rub, crunchy purple slaw, and mint aioli in toasted brioche buns.',
    prepTime: '10-12 mins',
    badge: 'House Special',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
    tags: ['Crispy', 'Spicy', 'Sliders'],
    calories: '380 kcal'
  },
  {
    id: 'snack-4',
    name: 'Truffle Parmesan Crinkle Fries',
    category: 'snacks',
    price: 180,
    isVeg: true,
    description: 'Crisp golden potato crinkle fries tossed in aromatic white truffle oil, grated aged parmesan, and served with roasted garlic dip.',
    prepTime: '8-10 mins',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80',
    tags: ['Truffle', 'Crunchy', 'Finger Food'],
    calories: '290 kcal'
  },
  {
    id: 'snack-5',
    name: 'Glazed BBQ Wings with Ranch (6 Pcs)',
    category: 'snacks',
    price: 280,
    isVeg: false,
    description: 'Crispy fried chicken wings tossed in tangy house hickory barbecue glaze, served with cool buttermilk herb ranch and celery.',
    prepTime: '12-15 mins',
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
    tags: ['Wings', 'Smoky', 'Non-Veg'],
    calories: '450 kcal'
  },

  // Desserts & Tiramisu Collection
  {
    id: 'dessert-1',
    name: 'Signature FriEndS Classic Tiramisu Jar',
    category: 'desserts',
    price: 220,
    isVeg: true,
    description: 'Traditional Italian ladyfingers soaked in dark roast espresso, layered with whipped mascarpone cream and dusted with Dutch cocoa.',
    prepTime: 'Ready to serve',
    badge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80',
    tags: ['Classic', 'Espresso', 'Mascarpone', 'Tiramisu'],
    calories: '290 kcal'
  },
  {
    id: 'dessert-tiramisu-biscoff',
    name: 'Lotus Biscoff Crunch Tiramisu Jar',
    category: 'desserts',
    price: 250,
    isVeg: true,
    description: 'Layers of dark roast espresso soaked sponge, smooth Biscoff cookie butter mascarpone mousse, Belgian spiced biscuit crumble, and caramelized spread drizzle.',
    prepTime: 'Ready to serve',
    badge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
    tags: ['Biscoff', 'Tiramisu', 'Caramelized Speculoos'],
    calories: '340 kcal'
  },
  {
    id: 'dessert-tiramisu-nutella',
    name: 'Warm Nutella Hazelnut Tiramisu Cup',
    category: 'desserts',
    price: 260,
    isVeg: true,
    description: 'Decadent combination of espresso dipped Savoiardi ladyfingers, rich warm Nutella hazelnut ganache, whipped Italian mascarpone, and roasted crushed Piedmont hazelnuts.',
    prepTime: 'Ready to serve',
    badge: 'Chef Favorite',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    tags: ['Nutella', 'Hazelnut', 'Tiramisu', 'Decadent'],
    calories: '360 kcal'
  },
  {
    id: 'dessert-tiramisu-pistachio',
    name: 'Sicilian Pistachio Velvet Tiramisu',
    category: 'desserts',
    price: 280,
    isVeg: true,
    description: 'Infused with 100% pure roasted Sicilian pistachio cream, espresso sponge layers, light mascarpone cream, and toasted crushed green pistachios.',
    prepTime: 'Ready to serve',
    badge: 'House Special',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=800&q=80',
    tags: ['Pistachio', 'Tiramisu', 'Italian Gourmet'],
    calories: '370 kcal'
  },
  {
    id: 'dessert-2',
    name: 'Warm Nutella Brookie w/ Gelato',
    category: 'desserts',
    price: 240,
    isVeg: true,
    description: 'Half fudgy chocolate brownie, half golden chocolate-chip cookie, baked fresh and topped with warm Nutella and vanilla bean gelato.',
    prepTime: '8-10 mins',
    badge: 'Chef Favorite',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80',
    tags: ['Warm', 'Nutella', 'Gelato'],
    calories: '410 kcal'
  },
  {
    id: 'dessert-3',
    name: 'New York Baked Berry Cheesecake',
    category: 'desserts',
    price: 250,
    isVeg: true,
    description: 'Silky smooth slow-baked Philadelphia cream cheese cake resting on a buttery Graham cracker crust with wild berry compote.',
    prepTime: 'Ready to serve',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80',
    tags: ['Baked', 'Berry', 'Creamy'],
    calories: '320 kcal'
  },
  {
    id: 'dessert-4',
    name: 'Belgian Chocolate Waffle with Strawberries',
    category: 'desserts',
    price: 210,
    isVeg: true,
    description: 'Crisp golden malted waffle drizzled with warm melted Belgian dark chocolate, fresh sliced strawberries, and whipped cream.',
    prepTime: '10-12 mins',
    image: 'https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=800&q=80',
    tags: ['Fresh Waffle', 'Strawberries'],
    calories: '350 kcal'
  }
];

export const TODAY_SPECIAL_COMBO = {
  id: 'combo-special-1',
  title: "Today's Special - FriEndS Favorite Combo",
  subtitle: 'The Ultimate Cozy Hangout Spread for You and Your Besties',
  items: [
    { name: 'Hazelnut Silk Mocha', price: 190, icon: 'Coffee' },
    { name: 'Artisan Three-Cheese Garlic Pull-Apart', price: 220, icon: 'Utensils' },
    { name: 'Signature FriEndS Classic Tiramisu Jar', price: 220, icon: 'Cake' }
  ],
  originalPrice: 630,
  comboPrice: 499,
  savings: 131,
  badge: 'Special Combo · Save ₹131',
  description: 'Handcrafted espresso mocha infused with roasted hazelnuts, paired with our warm bubbling 3-cheese garlic bread and our signature espresso tiramisu jar.'
};

export const TIME_SLOTS = [
  '08:30 AM', '09:30 AM', '10:30 AM', '11:30 AM',
  '12:30 PM', '01:30 PM', '02:30 PM', '03:30 PM',
  '04:30 PM', '05:30 PM', '06:30 PM', '07:30 PM',
  '08:30 PM', '09:15 PM'
];

export const SEATING_AREAS = [
  { id: 'cozy-couch', name: 'Cozy Central Couch', desc: 'Plush velvet sofa nook with warm lamps & board games nearby' },
  { id: 'window-nook', name: 'Sunlit Window Bench', desc: 'Street-facing wooden bench with natural sunlight & greenery' },
  { id: 'garden-patio', name: 'Breezy Garden Patio', desc: 'Open-air courtyard surrounded by potted ferns and fairy lights' },
  { id: 'quiet-study', name: 'Quiet Corner / Work Nook', desc: 'Dedicated charging sockets, high-speed Wi-Fi & silent seating' }
];
