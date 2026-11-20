// =========================================================
// YALLA FEAST — INTERACTIVE VANILLA JAVASCRIPT ENGINE
// =========================================================

const CATEGORIES = [
  { id: 'all', name: 'All Menu', emoji: '🍽️' },
  { id: 'burgers', name: 'Burgers', emoji: '🍔' },
  { id: 'pizza', name: 'Pizza', emoji: '🍕' },
  { id: 'hotdogs', name: 'Hot Dogs', emoji: '🌭' },
  { id: 'fries', name: 'Fries', emoji: '🍟' },
  { id: 'chicken', name: 'Chicken', emoji: '🍗' },
  { id: 'snacks', name: 'Snacks', emoji: '🌮' },
  { id: 'drinks', name: 'Drinks', emoji: '🥤' },
  { id: 'desserts', name: 'Desserts', emoji: '🍰' },
  { id: 'combos', name: 'Combo Meals', emoji: '🍱' },
];

const MENU_ITEMS = [
  // BURGERS
  {
    id: 'b1',
    category: 'burgers',
    name: 'Yalla Double Smash Royale',
    desc: 'Two flame-seared halal beef patties, double aged cheddar, crispy onion rings, smoky Yalla secret sauce on toasted brioche.',
    price: 48000,
    rating: 4.9,
    reviews: 312,
    badge: 'Popular',
    popular: true,
    calories: '780 kcal',
    prepTime: '12 min',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=85',
    sizes: [
      { label: 'Classic Double', delta: 0 },
      { label: 'Triple Monster', delta: 16000 },
    ],
    extras: [
      { name: 'Extra Cheddar Slice', price: 5000 },
      { name: 'Crispy Halal Beef Bacon', price: 8000 },
      { name: 'Jalapeño Kick', price: 4000 },
    ],
  },
  {
    id: 'b2',
    category: 'burgers',
    name: 'Spicy Nashville Crunch Burger',
    desc: 'Crispy buttermilk chicken thigh glazed in hot chili honey, tangy slaw, dill pickles, and garlic aioli.',
    price: 42000,
    rating: 4.8,
    reviews: 215,
    badge: 'New',
    popular: true,
    calories: '690 kcal',
    prepTime: '14 min',
    image: 'https://images.unsplash.com/photo-1615297928064-24977384d0da?auto=format&fit=crop&w=800&q=85',
    sizes: [
      { label: 'Regular Heat', delta: 0 },
      { label: 'Volcano Extra Hot', delta: 2000 },
    ],
    extras: [
      { name: 'Cheese Sauce Dip', price: 5000 },
      { name: 'Extra Pickles', price: 3000 },
    ],
  },
  {
    id: 'b3',
    category: 'burgers',
    name: 'Truffle Mushroom Swiss Melt',
    desc: 'Juicy beef patty topped with sautéed wild mushrooms, melted Swiss cheese, caramelized onions, and black truffle mayo.',
    price: 52000,
    rating: 4.9,
    reviews: 178,
    badge: 'Chef Choice',
    popular: false,
    calories: '740 kcal',
    prepTime: '15 min',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=85',
    sizes: [
      { label: 'Single Patty', delta: 0 },
      { label: 'Double Patty', delta: 15000 },
    ],
    extras: [
      { name: 'Extra Truffle Aioli', price: 6000 },
      { name: 'Swiss Cheese', price: 5000 },
    ],
  },

  // PIZZA
  {
    id: 'p1',
    category: 'pizza',
    name: 'Yalla Pepperoni Volcano 32cm',
    desc: 'Hand-stretched sourdough crust loaded with crispy beef pepperoni, stretchy mozzarella, San Marzano tomato sauce & oregano.',
    price: 79000,
    rating: 4.9,
    reviews: 440,
    badge: 'Popular',
    popular: true,
    calories: '1120 kcal',
    prepTime: '18 min',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=85',
    sizes: [
      { label: 'Medium (28cm)', delta: -12000 },
      { label: 'Large (32cm)', delta: 0 },
      { label: 'Family XL (38cm)', delta: 24000 },
    ],
    extras: [
      { name: 'Cheese Stuffed Crust', price: 14000 },
      { name: 'Extra Pepperoni', price: 10000 },
      { name: 'Garlic Ranch Dip', price: 5000 },
    ],
  },
  {
    id: 'p2',
    category: 'pizza',
    name: 'BBQ Chicken & Smoked Cheese',
    desc: 'Grilled tender chicken breast, smoky barbecue glaze, red onions, sweet corn, cilantro, and triple cheese blend.',
    price: 84000,
    rating: 4.8,
    reviews: 289,
    badge: 'Popular',
    popular: true,
    calories: '1080 kcal',
    prepTime: '18 min',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=85',
    sizes: [
      { label: 'Medium (28cm)', delta: -12000 },
      { label: 'Large (32cm)', delta: 0 },
      { label: 'Family XL (38cm)', delta: 24000 },
    ],
    extras: [
      { name: 'Cheese Stuffed Crust', price: 14000 },
      { name: 'Extra Chicken', price: 11000 },
    ],
  },
  {
    id: 'p3',
    category: 'pizza',
    name: 'Four Cheese Quattro Formaggi',
    desc: 'Creamy white garlic base crowned with Mozzarella, Gorgonzola, Parmesan, and aged Cheddar with a drizzle of golden honey.',
    price: 82000,
    rating: 4.7,
    reviews: 194,
    badge: 'New',
    popular: false,
    calories: '1150 kcal',
    prepTime: '16 min',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=85',
    sizes: [
      { label: 'Medium (28cm)', delta: -12000 },
      { label: 'Large (32cm)', delta: 0 },
      { label: 'Family XL (38cm)', delta: 24000 },
    ],
    extras: [
      { name: 'Cheese Stuffed Crust', price: 14000 },
      { name: 'Chili Honey Drizzle', price: 4000 },
    ],
  },

  // HOT DOGS
  {
    id: 'h1',
    category: 'hotdogs',
    name: 'New York Chili Cheese Dog',
    desc: 'Snappy grilled halal beef frankfurter in a soft butter bun, topped with slow-cooked spicy beef chili, warm cheddar, and crispy shallots.',
    price: 32000,
    rating: 4.8,
    reviews: 165,
    badge: 'Popular',
    popular: false,
    calories: '540 kcal',
    prepTime: '10 min',
    image: 'https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=800&q=85',
    sizes: [
      { label: 'Standard (18cm)', delta: 0 },
      { label: 'Footlong King (28cm)', delta: 12000 },
    ],
    extras: [
      { name: 'Extra Warm Cheddar', price: 5000 },
      { name: 'Crispy Shallots', price: 3000 },
    ],
  },
  {
    id: 'h2',
    category: 'hotdogs',
    name: 'Crispy Crunch Mustard Dog',
    desc: 'Smoked sausage with honey mustard, tangy sauerkraut, sweet relish, and golden potato sticks for ultimate crunch.',
    price: 28000,
    rating: 4.7,
    reviews: 120,
    badge: null,
    popular: false,
    calories: '490 kcal',
    prepTime: '9 min',
    image: 'https://images.unsplash.com/photo-1541214113241-21578d2d9b62?auto=format&fit=crop&w=800&q=85',
    sizes: [
      { label: 'Standard', delta: 0 },
      { label: 'Jumbo', delta: 10000 },
    ],
    extras: [
      { name: 'Jalapeños', price: 3000 },
    ],
  },
  {
    id: 'h3',
    category: 'hotdogs',
    name: 'Tashkent Street Loaded Dog',
    desc: 'Local favorite! Double grilled sausages wrapped in warm lavash-brioche hybrid with Korean carrot salad, garlic sauce & ketchup.',
    price: 34000,
    rating: 4.9,
    reviews: 274,
    badge: 'Local Hit',
    popular: true,
    calories: '610 kcal',
    prepTime: '10 min',
    image: 'https://images.unsplash.com/photo-1627054247392-514f9a441f8f?auto=format&fit=crop&w=800&q=85',
    sizes: [
      { label: 'Double Sausage', delta: 0 },
      { label: 'Triple Sausage', delta: 11000 },
    ],
    extras: [
      { name: 'Extra Garlic Sauce', price: 3000 },
    ],
  },

  // FRIES
  {
    id: 'f1',
    category: 'fries',
    name: 'Golden Sea-Salt French Fries',
    desc: 'Extra-crispy Belgian-cut potatoes fried to golden perfection and tossed with flaky sea salt and rosemary.',
    price: 18000,
    rating: 4.8,
    reviews: 390,
    badge: 'Popular',
    popular: false,
    calories: '380 kcal',
    prepTime: '7 min',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=85',
    sizes: [
      { label: 'Medium', delta: 0 },
      { label: 'Large Bucket', delta: 7000 },
    ],
    extras: [
      { name: 'Cheddar Cheese Dip', price: 5000 },
      { name: 'Truffle Mayo', price: 6000 },
    ],
  },
  {
    id: 'f2',
    category: 'fries',
    name: 'Loaded Cheese & Crispy Beef Fries',
    desc: 'Crinkle fries smothered in molten cheddar sauce, spiced minced beef, spring onions, and smoky chipotle drizzle.',
    price: 32000,
    rating: 4.9,
    reviews: 245,
    badge: 'New',
    popular: true,
    calories: '640 kcal',
    prepTime: '10 min',
    image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=85',
    sizes: [
      { label: 'Solo Bowl', delta: 0 },
      { label: 'Share Platter', delta: 14000 },
    ],
    extras: [
      { name: 'Extra Jalapeños', price: 4000 },
    ],
  },
  {
    id: 'f3',
    category: 'fries',
    name: 'Spiced Country Potato Wedges',
    desc: 'Thick-cut skin-on potato wedges seasoned with smoked paprika, garlic powder, and oregano. Served with sour cream.',
    price: 22000,
    rating: 4.7,
    reviews: 152,
    badge: null,
    popular: false,
    calories: '420 kcal',
    prepTime: '9 min',
    image: 'https://images.unsplash.com/photo-1623238913973-21e45cced554?auto=format&fit=crop&w=800&q=85',
    sizes: [
      { label: 'Regular', delta: 0 },
      { label: 'Large', delta: 8000 },
    ],
    extras: [
      { name: 'BBQ Sauce', price: 4000 },
    ],
  },

  // CHICKEN
  {
    id: 'c1',
    category: 'chicken',
    name: 'Yalla Crispy Bucket (9 pcs)',
    desc: 'Nine pieces of pressure-fried, ultra-crunchy marinated chicken drumsticks and wings with 11 secret herbs & spices.',
    price: 76000,
    rating: 4.9,
    reviews: 330,
    badge: 'Popular',
    popular: true,
    calories: '1420 kcal',
    prepTime: '15 min',
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=800&q=85',
    sizes: [
      { label: '9 Pieces', delta: 0 },
      { label: '15 Pieces Mega', delta: 38000 },
    ],
    extras: [
      { name: '2x Garlic & Chili Sauces', price: 7000 },
      { name: 'Coleslaw Salad', price: 9000 },
    ],
  },
  {
    id: 'c2',
    category: 'chicken',
    name: 'Honey BBQ Glazed Wings (8 pcs)',
    desc: 'Juicy chicken wings tossed in sticky sweet-and-smoky honey barbecue glaze, finished with toasted sesame seeds.',
    price: 44000,
    rating: 4.8,
    reviews: 198,
    badge: null,
    popular: false,
    calories: '680 kcal',
    prepTime: '14 min',
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=85',
    sizes: [
      { label: '8 Wings', delta: 0 },
      { label: '16 Wings', delta: 36000 },
    ],
    extras: [
      { name: 'Blue Cheese Dip', price: 6000 },
    ],
  },
  {
    id: 'c3',
    category: 'chicken',
    name: 'Golden Chicken Tenders (6 pcs)',
    desc: '100% pure chicken breast fillets breaded in crunchy panko flakes. Served with honey mustard dipping sauce.',
    price: 38000,
    rating: 4.8,
    reviews: 184,
    badge: 'New',
    popular: false,
    calories: '560 kcal',
    prepTime: '12 min',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=85',
    sizes: [
      { label: '6 Tenders', delta: 0 },
      { label: '10 Tenders', delta: 20000 },
    ],
    extras: [
      { name: 'Sweet Chili Dip', price: 4000 },
    ],
  },

  // SNACKS
  {
    id: 's1',
    category: 'snacks',
    name: 'Crispy Chicken Twister Wrap',
    desc: 'Warm toasted tortilla packed with crunchy chicken strips, fresh iceberg lettuce, juicy tomatoes, and pepper mayo.',
    price: 31000,
    rating: 4.8,
    reviews: 260,
    badge: 'Popular',
    popular: false,
    calories: '510 kcal',
    prepTime: '10 min',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=85',
    sizes: [
      { label: 'Classic', delta: 0 },
      { label: 'Cheese & Jalapeño', delta: 6000 },
    ],
    extras: [
      { name: 'Extra Cheese', price: 5000 },
    ],
  },
  {
    id: 's2',
    category: 'snacks',
    name: 'Mozzarella Cheese Sticks (6 pcs)',
    desc: 'Golden herb-crusted mozzarella sticks with an epic cheese pull, served with warm marinara dipping sauce.',
    price: 29000,
    rating: 4.9,
    reviews: 210,
    badge: null,
    popular: false,
    calories: '470 kcal',
    prepTime: '8 min',
    image: 'https://images.unsplash.com/photo-1531749668029-2db88e4276c7?auto=format&fit=crop&w=800&q=85',
    sizes: [
      { label: '6 Sticks', delta: 0 },
      { label: '10 Sticks', delta: 16000 },
    ],
    extras: [
      { name: 'Extra Marinara', price: 4000 },
    ],
  },
  {
    id: 's3',
    category: 'snacks',
    name: 'Spicy Beef Quesadilla',
    desc: 'Grilled flour tortilla folded with seasoned minced beef, melted Monterey Jack & cheddar, corn, and pico de gallo.',
    price: 39000,
    rating: 4.8,
    reviews: 147,
    badge: 'New',
    popular: false,
    calories: '620 kcal',
    prepTime: '12 min',
    image: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?auto=format&fit=crop&w=800&q=85',
    sizes: [
      { label: 'Full Quesadilla', delta: 0 },
    ],
    extras: [
      { name: 'Guacamole Cup', price: 8000 },
    ],
  },

  // DRINKS
  {
    id: 'd1',
    category: 'drinks',
    name: 'Mango Passion Iced Lemonade',
    desc: 'Freshly squeezed lemon juice blended with tropical Alphonso mango puree, mint leaves, and sparkling ice.',
    price: 19000,
    rating: 4.9,
    reviews: 230,
    badge: 'Popular',
    popular: false,
    calories: '160 kcal',
    prepTime: '4 min',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=85',
    sizes: [
      { label: '400 ml', delta: 0 },
      { label: '600 ml XL', delta: 6000 },
    ],
    extras: [],
  },
  {
    id: 'd2',
    category: 'drinks',
    name: 'Oreo Belgian Chocolate Shake',
    desc: 'Thick hand-spun vanilla & dark chocolate ice cream milkshake loaded with crushed Oreo cookies and whipped cream.',
    price: 27000,
    rating: 4.9,
    reviews: 295,
    badge: 'Best Seller',
    popular: false,
    calories: '520 kcal',
    prepTime: '5 min',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=85',
    sizes: [
      { label: 'Regular (350 ml)', delta: 0 },
      { label: 'Large (500 ml)', delta: 8000 },
    ],
    extras: [],
  },
  {
    id: 'd3',
    category: 'drinks',
    name: 'Ice-Cold Coca-Cola / Fanta / Sprite',
    desc: 'Chilled classic fizzy refreshment served frosty cold to pair with your favorite burger or pizza.',
    price: 12000,
    rating: 4.8,
    reviews: 410,
    badge: null,
    popular: false,
    calories: '140 kcal',
    prepTime: '2 min',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=85',
    sizes: [
      { label: '0.5L Bottle', delta: 0 },
      { label: '1.0L Bottle', delta: 6000 },
      { label: '1.5L Family', delta: 10000 },
    ],
    extras: [],
  },

  // DESSERTS
  {
    id: 'ds1',
    category: 'desserts',
    name: 'Warm Chocolate Lava Cake',
    desc: 'Rich Belgian dark chocolate cake with a molten fudge center, served warm with a scoop of Madagascar vanilla gelato.',
    price: 29000,
    rating: 4.9,
    reviews: 278,
    badge: 'Popular',
    popular: false,
    calories: '460 kcal',
    prepTime: '9 min',
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=800&q=85',
    sizes: [
      { label: 'Single Serve', delta: 0 },
    ],
    extras: [
      { name: 'Extra Vanilla Scoop', price: 8000 },
    ],
  },
  {
    id: 'ds2',
    category: 'desserts',
    name: 'New York Strawberry Cheesecake',
    desc: 'Velvety baked cream cheese on a buttery biscuit crust topped with glossy wild strawberry compote.',
    price: 26000,
    rating: 4.8,
    reviews: 192,
    badge: null,
    popular: false,
    calories: '410 kcal',
    prepTime: '3 min',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=85',
    sizes: [
      { label: '1 Slice', delta: 0 },
    ],
    extras: [],
  },
  {
    id: 'ds3',
    category: 'desserts',
    name: 'Cinnamon Sugar Churros & Nutella',
    desc: 'Six crispy golden Spanish churros dusted in cinnamon sugar with warm hazelnut chocolate dipping sauce.',
    price: 25000,
    rating: 4.9,
    reviews: 224,
    badge: 'New',
    popular: false,
    calories: '490 kcal',
    prepTime: '8 min',
    image: 'https://images.unsplash.com/photo-1624371414361-e670edf4898d?auto=format&fit=crop&w=800&q=85',
    sizes: [
      { label: '6 Churros', delta: 0 },
      { label: '12 Churros Share', delta: 18000 },
    ],
    extras: [],
  },

  // COMBO MEALS
  {
    id: 'cm1',
    category: 'combos',
    name: 'Yalla Mega Burger Feast Box',
    desc: '1 Double Smash Royale Burger + 1 Large Golden Fries + 3 Crispy Chicken Tenders + 1 Ice-Cold 0.5L Drink + Cheese Dip.',
    price: 78000,
    originalPrice: 95000,
    rating: 5.0,
    reviews: 512,
    badge: 'Save 18%',
    popular: true,
    calories: '1480 kcal',
    prepTime: '15 min',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=85',
    sizes: [
      { label: 'Solo Mega Box', delta: 0 },
      { label: 'Duo Feast (2x Burgers)', delta: 44000 },
    ],
    extras: [
      { name: 'Upgrade to Oreo Shake', price: 12000 },
    ],
  },
  {
    id: 'cm2',
    category: 'combos',
    name: 'Family Pizza & Wings Party Combo',
    desc: '2 Large 32cm Pizzas (Pepperoni Volcano + BBQ Chicken) + 8 Honey BBQ Wings + 1.5L Cola + 2 Garlic Ranch Dips.',
    price: 169000,
    originalPrice: 215000,
    rating: 4.9,
    reviews: 388,
    badge: 'Best Value',
    popular: true,
    calories: '2950 kcal',
    prepTime: '22 min',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=85',
    sizes: [
      { label: '4-5 Persons Pack', delta: 0 },
      { label: 'XL Party (38cm Pizzas)', delta: 38000 },
    ],
    extras: [
      { name: 'Add Cheese Crust Both Pizzas', price: 24000 },
    ],
  },
  {
    id: 'cm3',
    category: 'combos',
    name: 'Student Crunch Lunch Combo',
    desc: '1 Crispy Chicken Twister Wrap + 1 Medium Sea-Salt Fries + 1 Mango Passion Lemonade. Fast, filling & budget-friendly!',
    price: 49000,
    originalPrice: 68000,
    rating: 4.8,
    reviews: 341,
    badge: 'Hot Deal',
    popular: false,
    calories: '980 kcal',
    prepTime: '11 min',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=85',
    sizes: [
      { label: 'Standard Combo', delta: 0 },
      { label: 'Large Fries Upgrade', delta: 6000 },
    ],
    extras: [],
  },
];

const FALLBACK_IMG = 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80';

const formatUZS = (amount) =>
  `${Math.round(amount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} so'm`;

// Application State
const state = {
  activeCategory: 'all',
  searchQuery: '',
  sortBy: 'featured',
  favorites: ['b1', 'p1'],
  cart: [
    {
      cartKey: 'b1-Classic Double-',
      id: 'b1',
      name: 'Yalla Double Smash Royale',
      image: MENU_ITEMS[0].image,
      size: 'Classic Double',
      extras: [],
      unitPrice: 48000,
      qty: 1,
    },
  ],
  appliedPromo: null,
  selectedProduct: null,
  modalSizeIdx: 0,
  modalExtras: [],
  modalQty: 1,
  orderType: 'delivery',
  paymentMethod: 'cash',
};

// Toast helper
let toastTimer = null;
function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastText = document.getElementById('toastText');
  toastText.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2700);
}

// Badge CSS class helper
function getBadgeClass(badge) {
  if (!badge) return '';
  if (badge === 'New') return 'new';
  if (badge.includes('Save') || badge === 'Best Value' || badge === 'Hot Deal') return 'deal';
  return '';
}

// Render Food Card HTML
function createFoodCardHTML(item) {
  const isFav = state.favorites.includes(item.id);
  const catName = CATEGORIES.find((c) => c.id === item.category)?.name || item.category;

  return `
    <div class="food-card" data-id="${item.id}">
      <div class="food-img-box">
        <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.src='${FALLBACK_IMG}'" />
        ${item.badge ? `<span class="food-badge ${getBadgeClass(item.badge)}">${item.badge}</span>` : ''}
        <button type="button" class="fav-float-btn" data-fav="${item.id}" aria-label="Favorite">
          ${isFav ? '❤️' : '🤍'}
        </button>
        <div class="food-meta-chips">
          <span>⏱ ${item.prepTime}</span>
          <span>🔥 ${item.calories}</span>
        </div>
      </div>

      <div class="food-body">
        <div class="food-top-row">
          <span class="cat-label">${catName}</span>
          <span class="rating-pill">★ ${item.rating} (${item.reviews})</span>
        </div>
        <h3 class="food-title">${item.name}</h3>
        <p class="food-desc">${item.desc}</p>
        <div class="food-bottom-row">
          <div>
            ${item.originalPrice ? `<span class="old-price">${formatUZS(item.originalPrice)}</span>` : ''}
            <span class="price-text">${formatUZS(item.price)}</span>
          </div>
          <button type="button" class="add-card-btn" data-quick-add="${item.id}">+ Add to Cart</button>
        </div>
      </div>
    </div>
  `;
}

// Render Popular Section
function renderPopular() {
  const popularGrid = document.getElementById('popularGrid');
  const popularItems = MENU_ITEMS.filter((i) => i.popular).slice(0, 8);
  popularGrid.innerHTML = popularItems.map(createFoodCardHTML).join('');
}

// Render Category Pills
function renderCategoryTabs() {
  const tabsEl = document.getElementById('categoryTabs');
  tabsEl.innerHTML = CATEGORIES.map(
    (cat) => `
      <button type="button" class="cat-pill ${state.activeCategory === cat.id ? 'active' : ''}" data-cat="${cat.id}">
        <span>${cat.emoji}</span>
        <span>${cat.name}</span>
      </button>
    `
  ).join('');
}

// Render Full Menu
function renderMenu() {
  const menuGrid = document.getElementById('menuGrid');
  const emptyState = document.getElementById('emptyMenuState');

  let items = MENU_ITEMS.filter((item) => {
    const catMatch = state.activeCategory === 'all' || item.category === state.activeCategory;
    const q = state.searchQuery.trim().toLowerCase();
    const searchMatch =
      !q ||
      item.name.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q);
    return catMatch && searchMatch;
  });

  if (state.sortBy === 'price-asc') items = [...items].sort((a, b) => a.price - b.price);
  if (state.sortBy === 'price-desc') items = [...items].sort((a, b) => b.price - a.price);
  if (state.sortBy === 'rating') items = [...items].sort((a, b) => b.rating - a.rating);

  if (items.length === 0) {
    menuGrid.innerHTML = '';
    emptyState.classList.remove('hidden');
  } else {
    emptyState.classList.add('hidden');
    menuGrid.innerHTML = items.map(createFoodCardHTML).join('');
  }
}

// Render Combos Section
function renderCombos() {
  const combosGrid = document.getElementById('combosGrid');
  const combos = MENU_ITEMS.filter((i) => i.category === 'combos');

  combosGrid.innerHTML = combos
    .map(
      (combo) => `
      <div class="combo-card" data-id="${combo.id}">
        <div class="combo-img-box">
          <img src="${combo.image}" alt="${combo.name}" onerror="this.src='${FALLBACK_IMG}'" />
          ${combo.badge ? `<span class="combo-badge">${combo.badge}</span>` : ''}
        </div>
        <div class="combo-body">
          <div class="combo-meta">
            <span>⏱ ${combo.prepTime}</span>
            <span class="combo-rating">★ ${combo.rating} (${combo.reviews})</span>
          </div>
          <h3 class="combo-title">${combo.name}</h3>
          <p class="combo-desc">${combo.desc}</p>
          <div class="combo-footer">
            <div>
              ${combo.originalPrice ? `<span class="old-price">${formatUZS(combo.originalPrice)}</span>` : ''}
              <div class="combo-price">${formatUZS(combo.price)}</div>
            </div>
            <button type="button" class="btn btn-primary" data-quick-add="${combo.id}">Order Combo</button>
          </div>
        </div>
      </div>
    `
    )
    .join('');
}

// Cart Totals Calculation
function getCartTotals() {
  const count = state.cart.reduce((s, item) => s + item.qty, 0);
  const subtotal = state.cart.reduce((s, item) => s + item.unitPrice * item.qty, 0);

  let discount = 0;
  if (state.appliedPromo && subtotal > 0) {
    discount =
      state.appliedPromo.type === 'percent'
        ? Math.round((subtotal * state.appliedPromo.value) / 100)
        : Math.min(subtotal, state.appliedPromo.value);
  }

  const deliveryFee = subtotal === 0 ? 0 : subtotal - discount >= 100000 ? 0 : 12000;
  const total = Math.max(0, subtotal - discount + deliveryFee);

  return { count, subtotal, discount, deliveryFee, total };
}

// Add item to Cart
function addToCart(product, sizeObj = null, chosenExtras = [], qty = 1) {
  const size = sizeObj || (product.sizes && product.sizes[0]) || { label: 'Standard', delta: 0 };
  const extrasSum = chosenExtras.reduce((s, e) => s + e.price, 0);
  const unitPrice = product.price + size.delta + extrasSum;
  const extrasKey = chosenExtras.map((e) => e.name).sort().join(',');
  const cartKey = `${product.id}-${size.label}-${extrasKey}`;

  const existing = state.cart.find((c) => c.cartKey === cartKey);
  if (existing) {
    existing.qty += qty;
  } else {
    state.cart.push({
      cartKey,
      id: product.id,
      name: product.name,
      image: product.image,
      size: size.label,
      extras: chosenExtras.map((e) => e.name),
      unitPrice,
      qty,
    });
  }

  const cartBtn = document.getElementById('openCartBtn');
  cartBtn.classList.remove('cart-bounce');
  void cartBtn.offsetWidth;
  cartBtn.classList.add('cart-bounce');

  updateCartUI();
  showToast(`Added ${qty}x ${product.name} to cart!`);
}

// Render Cart UI
function updateCartUI() {
  const { count, subtotal, discount, deliveryFee, total } = getCartTotals();

  document.getElementById('cartCountBadge').textContent = count;
  document.getElementById('cartSubtitle').textContent = `${count} items selected`;

  const progressBanner = document.getElementById('deliveryProgressBar');
  const itemsContainer = document.getElementById('cartItemsContainer');
  const cartFooter = document.getElementById('cartFooter');

  if (state.cart.length === 0) {
    progressBanner.classList.add('hidden');
    cartFooter.classList.add('hidden');
    itemsContainer.innerHTML = `
      <div class="empty-bag">
        <div class="empty-bag-icon">🍔</div>
        <h4>Your cart is empty</h4>
        <p style="font-size:13px;color:#6B7280;margin:6px 0 18px;">
          Looks like you haven't added any juicy burgers or hot pizzas yet.
        </p>
        <button type="button" id="continueShoppingBtn" class="btn btn-primary">Browse Delicious Menu</button>
      </div>
    `;
    document.getElementById('continueShoppingBtn')?.addEventListener('click', () => {
      document.getElementById('cartDrawer').classList.add('hidden');
    });
    return;
  }

  progressBanner.classList.remove('hidden');
  cartFooter.classList.remove('hidden');

  const afterDisc = Math.max(0, subtotal - discount);
  if (afterDisc >= 100000) {
    progressBanner.innerHTML = `<div style="color:#047857;">✅ Awesome! You unlocked FREE Express Delivery!</div>`;
  } else {
    const rem = 100000 - afterDisc;
    const pct = Math.min(100, (afterDisc / 100000) * 100);
    progressBanner.innerHTML = `
      <div>Add <span style="color:#FF5A1F;">${formatUZS(rem)}</span> more for <u>FREE Delivery</u>!</div>
      <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
    `;
  }

  const cartCardsHTML = state.cart
    .map(
      (item) => `
      <div class="cart-item-card">
        <img src="${item.image}" alt="${item.name}" onerror="this.src='${FALLBACK_IMG}'" />
        <div class="cart-item-info">
          <div class="cart-item-top">
            <div class="cart-item-title">${item.name}</div>
            <button type="button" class="remove-item-btn" data-remove="${item.cartKey}">🗑️</button>
          </div>
          <div class="cart-item-opts">
            ${item.size}${item.extras.length ? ` • +${item.extras.join(', ')}` : ''}
          </div>
          <div class="cart-item-bottom">
            <span class="cart-item-price">${formatUZS(item.unitPrice * item.qty)}</span>
            <div class="qty-box">
              <button type="button" data-qty-key="${item.cartKey}" data-delta="-1">−</button>
              <span>${item.qty}</span>
              <button type="button" data-qty-key="${item.cartKey}" data-delta="1">+</button>
            </div>
          </div>
        </div>
      </div>
    `
    )
    .join('');

  const promoHTML = `
    <div class="promo-box">
      <form id="promoForm" class="promo-form">
        <input id="promoInput" type="text" placeholder="Promo code (YALLA20)" />
        <button type="submit">Apply</button>
      </form>
      <div id="promoError" class="promo-error hidden"></div>
      ${
        state.appliedPromo
          ? `<div class="promo-applied-bar">
              <span>🎉 ${state.appliedPromo.code} (${state.appliedPromo.label})</span>
              <button type="button" id="removePromoBtn">Remove</button>
            </div>`
          : ''
      }
    </div>
  `;

  itemsContainer.innerHTML = cartCardsHTML + promoHTML;

  document.getElementById('promoForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const code = document.getElementById('promoInput').value.trim().toUpperCase();
    const errEl = document.getElementById('promoError');
    if (code === 'YALLA20') {
      state.appliedPromo = { code: 'YALLA20', type: 'percent', value: 20, label: '20% OFF' };
      showToast('Promo code YALLA20 applied! 20% OFF 🎉');
      updateCartUI();
    } else if (code === 'WELCOME15') {
      state.appliedPromo = { code: 'WELCOME15', type: 'fixed', value: 15000, label: "15 000 so'm OFF" };
      showToast("Promo code WELCOME15 applied! 15 000 so'm OFF 🎉");
      updateCartUI();
    } else {
      errEl.textContent = 'Invalid code. Try YALLA20 or WELCOME15';
      errEl.classList.remove('hidden');
    }
  });

  document.getElementById('removePromoBtn')?.addEventListener('click', () => {
    state.appliedPromo = null;
    updateCartUI();
  });

  document.getElementById('cartSubtotal').textContent = formatUZS(subtotal);
  const discRow = document.getElementById('cartDiscountRow');
  if (discount > 0) {
    discRow.classList.remove('hidden');
    document.getElementById('cartDiscountLabel').textContent = `Discount (${state.appliedPromo.code})`;
    document.getElementById('cartDiscountVal').textContent = `-${formatUZS(discount)}`;
  } else {
    discRow.classList.add('hidden');
  }

  document.getElementById('cartDeliveryFee').textContent = deliveryFee === 0 ? 'FREE' : formatUZS(deliveryFee);
  document.getElementById('cartGrandTotal').textContent = formatUZS(total);
}

// Toggle Favorite
function toggleFavorite(id) {
  const idx = state.favorites.indexOf(id);
  if (idx >= 0) {
    state.favorites.splice(idx, 1);
    showToast('Removed from favorites');
  } else {
    state.favorites.push(id);
    showToast('Saved to your favorites ❤️');
  }
  document.getElementById('favCountBadge').textContent = state.favorites.length;
  renderPopular();
  renderMenu();
  renderFavoritesDrawer();
}

function renderFavoritesDrawer() {
  document.getElementById('favDrawerCount').textContent = state.favorites.length;
  const listEl = document.getElementById('favoritesList');

  if (state.favorites.length === 0) {
    listEl.innerHTML = `
      <div class="empty-bag">
        <div class="empty-bag-icon">❤️</div>
        <h4>No favorites yet</h4>
        <p style="font-size:13px;color:#6B7280;margin-top:6px;">Tap the heart icon on any burger or pizza to save it!</p>
      </div>
    `;
    return;
  }

  listEl.innerHTML = MENU_ITEMS.filter((i) => state.favorites.includes(i.id))
    .map(
      (item) => `
      <div class="cart-item-card">
        <img src="${item.image}" alt="${item.name}" onerror="this.src='${FALLBACK_IMG}'" />
        <div class="cart-item-info">
          <div class="cart-item-title">${item.name}</div>
          <div class="cart-item-price" style="margin-top:2px;">${formatUZS(item.price)}</div>
          <div style="margin-top:8px;display:flex;gap:10px;align-items:center;">
            <button type="button" class="add-card-btn" data-quick-add="${item.id}">+ Add to Cart</button>
            <button type="button" class="remove-item-btn" style="font-size:12px;" data-fav="${item.id}">Remove</button>
          </div>
        </div>
      </div>
    `
    )
    .join('');
}

// Product Modal Logic
function openProductModal(product) {
  state.selectedProduct = product;
  state.modalSizeIdx = 0;
  state.modalExtras = [];
  state.modalQty = 1;

  document.getElementById('modalImg').src = product.image;
  document.getElementById('modalImg').onerror = function () {
    this.src = FALLBACK_IMG;
  };
  const badgeEl = document.getElementById('modalBadge');
  if (product.badge) {
    badgeEl.textContent = product.badge;
    badgeEl.classList.remove('hidden');
  } else {
    badgeEl.classList.add('hidden');
  }

  document.getElementById('modalCategory').textContent = product.category;
  document.getElementById('modalStats').textContent = `⭐ ${product.rating} (${product.reviews} reviews) • ${product.calories}`;
  document.getElementById('modalTitle').textContent = product.name;
  document.getElementById('modalDesc').textContent = product.desc;

  renderModalOptions();
  document.getElementById('productModal').classList.remove('hidden');
}

function renderModalOptions() {
  const product = state.selectedProduct;
  if (!product) return;

  const sizesSec = document.getElementById('modalSizesSection');
  const sizesList = document.getElementById('modalSizesList');
  if (product.sizes && product.sizes.length) {
    sizesSec.classList.remove('hidden');
    sizesList.innerHTML = product.sizes
      .map(
        (sz, idx) => `
        <button type="button" class="size-option ${state.modalSizeIdx === idx ? 'active' : ''}" data-size-idx="${idx}">
          <div class="size-name">${sz.label}</div>
          <div class="size-delta">${sz.delta === 0 ? 'Included' : sz.delta > 0 ? `+${formatUZS(sz.delta)}` : formatUZS(sz.delta)}</div>
        </button>
      `
      )
      .join('');
  } else {
    sizesSec.classList.add('hidden');
  }

  const extrasSec = document.getElementById('modalExtrasSection');
  const extrasList = document.getElementById('modalExtrasList');
  if (product.extras && product.extras.length) {
    extrasSec.classList.remove('hidden');
    extrasList.innerHTML = product.extras
      .map((ext) => {
        const active = state.modalExtras.some((e) => e.name === ext.name);
        return `
          <button type="button" class="extra-option ${active ? 'active' : ''}" data-extra-name="${ext.name}">
            <span>${ext.name}</span>
            <span class="extra-price">+${formatUZS(ext.price)}</span>
          </button>
        `;
      })
      .join('');
  } else {
    extrasSec.classList.add('hidden');
  }

  document.getElementById('modalQtyVal').textContent = state.modalQty;

  const sizeDelta = product.sizes?.[state.modalSizeIdx]?.delta || 0;
  const extrasSum = state.modalExtras.reduce((s, e) => s + e.price, 0);
  const total = (product.price + sizeDelta + extrasSum) * state.modalQty;
  document.getElementById('modalTotalPrice').textContent = formatUZS(total);
}

// Event Delegation & Initialization
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('yearSpan').textContent = new Date().getFullYear();

  setTimeout(() => {
    document.getElementById('preloader').classList.add('fade-out');
  }, 750);

  renderPopular();
  renderCategoryTabs();
  renderMenu();
  renderCombos();
  updateCartUI();
  renderFavoritesDrawer();

  // Scroll effects & parallax
  const navbar = document.getElementById('navbar');
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  const orb1 = document.getElementById('parallaxOrb1');
  const orb2 = document.getElementById('parallaxOrb2');

  window.addEventListener(
    'scroll',
    () => {
      const y = window.scrollY;
      navbar.classList.toggle('scrolled', y > 24);
      scrollTopBtn.classList.toggle('visible', y > 480);
      if (orb1) orb1.style.transform = `translateY(${y * 0.16}px)`;
      if (orb2) orb2.style.transform = `translateY(${-y * 0.12}px)`;
    },
    { passive: true }
  );

  scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  // Intersection Observer for scroll reveal
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

  // Mobile Nav
  const mobileNav = document.getElementById('mobileNav');
  document.getElementById('mobileMenuBtn').addEventListener('click', () => {
    mobileNav.classList.toggle('open');
  });
  document.querySelectorAll('.mobile-link').forEach((link) => {
    link.addEventListener('click', () => mobileNav.classList.remove('open'));
  });

  // Hero Quick Add
  document.getElementById('heroQuickAddBtn').addEventListener('click', () => addToCart(MENU_ITEMS[0]));

  // Copy Promo Code
  document.getElementById('copyPromoBtn').addEventListener('click', () => {
    navigator.clipboard?.writeText('YALLA20');
    document.getElementById('copyPromoIcon').textContent = '✅';
    showToast('Copied promo code: YALLA20');
    setTimeout(() => {
      document.getElementById('copyPromoIcon').textContent = '📋';
    }, 2000);
  });

  // Search, Sort & Category Tabs
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');

  searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    renderMenu();
  });

  clearSearchBtn.addEventListener('click', () => {
    state.searchQuery = '';
    searchInput.value = '';
    renderMenu();
  });

  document.getElementById('sortSelect').addEventListener('change', (e) => {
    state.sortBy = e.target.value;
    renderMenu();
  });

  document.getElementById('categoryTabs').addEventListener('click', (e) => {
    const pill = e.target.closest('.cat-pill');
    if (!pill) return;
    state.activeCategory = pill.dataset.cat;
    renderCategoryTabs();
    renderMenu();
  });

  document.querySelectorAll('.footer-cat-link').forEach((a) => {
    a.addEventListener('click', () => {
      state.activeCategory = a.dataset.cat;
      renderCategoryTabs();
      renderMenu();
    });
  });

  document.getElementById('resetFiltersBtn').addEventListener('click', () => {
    state.activeCategory = 'all';
    state.searchQuery = '';
    searchInput.value = '';
    renderCategoryTabs();
    renderMenu();
  });

  // Delegated clicks on food cards, quick-add, favorites
  document.addEventListener('click', (e) => {
    const quickAddBtn = e.target.closest('[data-quick-add]');
    if (quickAddBtn) {
      e.stopPropagation();
      const prod = MENU_ITEMS.find((i) => i.id === quickAddBtn.dataset.quickAdd);
      if (prod) addToCart(prod);
      return;
    }

    const favBtn = e.target.closest('[data-fav]');
    if (favBtn) {
      e.stopPropagation();
      toggleFavorite(favBtn.dataset.fav);
      return;
    }

    const card = e.target.closest('.food-card, .combo-card');
    if (card) {
      const prod = MENU_ITEMS.find((i) => i.id === card.dataset.id);
      if (prod) openProductModal(prod);
    }
  });

  // Product Modal Events
  const productModal = document.getElementById('productModal');
  document.getElementById('closeProductModal').addEventListener('click', () => productModal.classList.add('hidden'));
  productModal.addEventListener('click', (e) => {
    if (e.target === productModal) productModal.classList.add('hidden');
  });

  document.getElementById('modalSizesList').addEventListener('click', (e) => {
    const btn = e.target.closest('.size-option');
    if (!btn) return;
    state.modalSizeIdx = Number(btn.dataset.sizeIdx);
    renderModalOptions();
  });

  document.getElementById('modalExtrasList').addEventListener('click', (e) => {
    const btn = e.target.closest('.extra-option');
    if (!btn || !state.selectedProduct) return;
    const extObj = state.selectedProduct.extras.find((ex) => ex.name === btn.dataset.extraName);
    if (!extObj) return;
    const exists = state.modalExtras.some((x) => x.name === extObj.name);
    state.modalExtras = exists
      ? state.modalExtras.filter((x) => x.name !== extObj.name)
      : [...state.modalExtras, extObj];
    renderModalOptions();
  });

  document.getElementById('modalQtyMinus').addEventListener('click', () => {
    state.modalQty = Math.max(1, state.modalQty - 1);
    renderModalOptions();
  });

  document.getElementById('modalQtyPlus').addEventListener('click', () => {
    state.modalQty += 1;
    renderModalOptions();
  });

  document.getElementById('modalAddBtn').addEventListener('click', () => {
    if (!state.selectedProduct) return;
    const sizeObj = state.selectedProduct.sizes?.[state.modalSizeIdx];
    addToCart(state.selectedProduct, sizeObj, state.modalExtras, state.modalQty);
    productModal.classList.add('hidden');
  });

  // Favorites Drawer
  const favDrawer = document.getElementById('favoritesDrawer');
  document.getElementById('openFavoritesBtn').addEventListener('click', () => {
    renderFavoritesDrawer();
    favDrawer.classList.remove('hidden');
  });
  document.getElementById('closeFavoritesBtn').addEventListener('click', () => favDrawer.classList.add('hidden'));
  favDrawer.addEventListener('click', (e) => {
    if (e.target === favDrawer) favDrawer.classList.add('hidden');
  });

  // Cart Drawer
  const cartDrawer = document.getElementById('cartDrawer');
  document.getElementById('openCartBtn').addEventListener('click', () => {
    updateCartUI();
    cartDrawer.classList.remove('hidden');
  });
  document.getElementById('closeCartBtn').addEventListener('click', () => cartDrawer.classList.add('hidden'));
  cartDrawer.addEventListener('click', (e) => {
    if (e.target === cartDrawer) cartDrawer.classList.add('hidden');
  });

  document.getElementById('cartItemsContainer').addEventListener('click', (e) => {
    const qtyBtn = e.target.closest('[data-qty-key]');
    if (qtyBtn) {
      const key = qtyBtn.dataset.qtyKey;
      const delta = Number(qtyBtn.dataset.delta);
      state.cart = state.cart
        .map((it) => (it.cartKey === key ? { ...it, qty: it.qty + delta } : it))
        .filter((it) => it.qty > 0);
      updateCartUI();
      return;
    }

    const remBtn = e.target.closest('[data-remove]');
    if (remBtn) {
      state.cart = state.cart.filter((it) => it.cartKey !== remBtn.dataset.remove);
      updateCartUI();
    }
  });

  // WhatsApp Order
  document.getElementById('whatsappOrderBtn').addEventListener('click', () => {
    if (state.cart.length === 0) return;
    const { subtotal, discount, deliveryFee, total } = getCartTotals();
    const lines = state.cart.map(
      (item, i) =>
        `${i + 1}. ${item.name} (${item.size})${item.extras.length ? ` + ${item.extras.join(', ')}` : ''} x${item.qty} = ${formatUZS(item.unitPrice * item.qty)}`
    );
    const msg = `🍔 *NEW YALLA FEAST ORDER* 🍕\n\n${lines.join('\n')}\n\nSubtotal: ${formatUZS(subtotal)}${discount ? `\nDiscount: -${formatUZS(discount)}` : ''}\nDelivery: ${deliveryFee === 0 ? 'FREE' : formatUZS(deliveryFee)}\n*Total: ${formatUZS(total)}*`;
    window.open(`https://wa.me/998712007788?text=${encodeURIComponent(msg)}`, '_blank');
  });

  // Checkout Modal
  const checkoutModal = document.getElementById('checkoutModal');
  document.getElementById('proceedCheckoutBtn').addEventListener('click', () => {
    const { count, subtotal, discount, deliveryFee, total } = getCartTotals();
    document.getElementById('chkCount').textContent = count;
    document.getElementById('chkSubtotal').textContent = formatUZS(subtotal);
    const dLine = document.getElementById('chkDiscountLine');
    if (discount > 0) {
      dLine.classList.remove('hidden');
      document.getElementById('chkDiscount').textContent = `-${formatUZS(discount)}`;
    } else {
      dLine.classList.add('hidden');
    }
    document.getElementById('chkDelivery').textContent = deliveryFee === 0 ? 'FREE' : formatUZS(deliveryFee);
    document.getElementById('chkTotal').textContent = formatUZS(total);
    document.getElementById('chkSubmitTotal').textContent = formatUZS(total);

    document.getElementById('checkoutFormView').classList.remove('hidden');
    document.getElementById('checkoutSuccessView').classList.add('hidden');
    cartDrawer.classList.add('hidden');
    checkoutModal.classList.remove('hidden');
  });

  document.getElementById('closeCheckoutModal').addEventListener('click', () => checkoutModal.classList.add('hidden'));
  checkoutModal.addEventListener('click', (e) => {
    if (e.target === checkoutModal) checkoutModal.classList.add('hidden');
  });

  const typeDelivBtn = document.getElementById('typeDeliveryBtn');
  const typePickBtn = document.getElementById('typePickupBtn');
  const addrGroup = document.getElementById('deliveryAddressGroup');
  const branchGroup = document.getElementById('pickupBranchGroup');
  const custAddress = document.getElementById('custAddress');

  typeDelivBtn.addEventListener('click', () => {
    state.orderType = 'delivery';
    typeDelivBtn.classList.add('active');
    typePickBtn.classList.remove('active');
    addrGroup.classList.remove('hidden');
    branchGroup.classList.add('hidden');
    custAddress.required = true;
  });

  typePickBtn.addEventListener('click', () => {
    state.orderType = 'pickup';
    typePickBtn.classList.add('active');
    typeDelivBtn.classList.remove('active');
    addrGroup.classList.add('hidden');
    branchGroup.classList.remove('hidden');
    custAddress.required = false;
  });

  document.querySelectorAll('.pay-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.pay-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      state.paymentMethod = btn.dataset.pay;
    });
  });

  document.getElementById('checkoutForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const { total } = getCartTotals();
    const orderNum = `YF-${Math.floor(100000 + Math.random() * 900000)}`;
    const name = document.getElementById('custName').value.trim() || 'Friend';

    document.getElementById('confirmedOrderNum').textContent = `Order #${orderNum}`;
    document.getElementById('confirmedMsg').textContent = `Thank you, ${name}! Our chefs have started preparing your feast. Estimated arrival: 25–30 minutes.`;
    document.getElementById('confirmedTotal').textContent = formatUZS(total);

    document.getElementById('checkoutFormView').classList.add('hidden');
    document.getElementById('checkoutSuccessView').classList.remove('hidden');

    state.cart = [];
    state.appliedPromo = null;
    updateCartUI();
  });

  document.getElementById('backToStoreBtn').addEventListener('click', () => checkoutModal.classList.add('hidden'));

  // Contact & Newsletter Forms
  document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('contactForm').classList.add('hidden');
    document.getElementById('contactSuccess').classList.remove('hidden');
    showToast('Message sent to Yalla Feast team!');
  });

  document.getElementById('resetContactBtn').addEventListener('click', () => {
    document.getElementById('contactForm').reset();
    document.getElementById('contactSuccess').classList.add('hidden');
    document.getElementById('contactForm').classList.remove('hidden');
  });

  document.getElementById('newsletterForm').addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('newsletterForm').classList.add('hidden');
    document.getElementById('newsletterSuccess').classList.remove('hidden');
    showToast('Subscribed! Code WELCOME15 unlocked 🎉');
  });
});
