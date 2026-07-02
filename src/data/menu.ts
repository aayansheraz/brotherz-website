export type MenuItem = {
  name: string
  desc?: string
  price: string
  tag?: string
}

export type Category = {
  id: string
  label: string
  items: MenuItem[]
  note?: string
}

export const CATEGORIES: Category[] = [
  {
    id: 'burgers',
    label: 'Burgers',
    note: 'Add-ons: Fried Onion · Tomato · Jalapenos · Olives · Cheese Slice · Extra Sauce. Make it a meal — fries + drink.',
    items: [
      { name: 'Brotherz Classic', desc: 'Juicy grilled patty, house sauce, fresh crunch', price: 'Rs. 350' },
      { name: 'Classic Cheese', desc: 'Classic build + a melty cheese slice', price: 'Rs. 420' },
      { name: 'Crispy Zinger', desc: 'Crunchy fried fillet, mayo, iceberg', price: 'Rs. 450', tag: 'HOT SELLER' },
      { name: 'Zinger Cheese', desc: 'Zinger, upgraded with molten cheddar', price: 'Rs. 520' },
      { name: 'Double Decker', desc: 'Two fillets. Zero regrets.', price: 'Rs. 650', tag: 'BIG ONE' },
    ],
  },
  {
    id: 'wings',
    label: 'Wings & Nuggets',
    items: [
      { name: 'Crispy Chicken Wings', desc: '5 pcs Rs. 450 · 10 pcs', price: 'Rs. 850' },
      { name: 'Buffalo BBQ Wings', desc: 'Smoky-sweet glaze · 5 pcs Rs. 500 · 10 pcs', price: 'Rs. 950', tag: 'FAN FAVE' },
      { name: 'Korean Spicy Wings', desc: 'Sticky, fiery, addictive · 5 pcs Rs. 550 · 10 pcs', price: 'Rs. 990', tag: 'SPICY' },
      { name: 'Chicken Nuggets', desc: 'Golden bites · 5 pcs Rs. 400 · 10 pcs', price: 'Rs. 750' },
    ],
  },
  {
    id: 'sando',
    label: 'Sando & Wraps',
    items: [
      { name: 'The Brotherz Sando', desc: 'Our signature crispy chicken sando — the one the reviews rave about', price: 'Rs. 590', tag: 'SIGNATURE' },
      { name: 'Creamy Wrap', desc: 'Creamy garlic sauce, crispy strips, soft tortilla', price: 'Rs. 450' },
      { name: 'Crispy Chicken Wrap', desc: 'Extra crunch, spicy kick, wrapped tight', price: 'Rs. 480' },
    ],
  },
  {
    id: 'pizza',
    label: 'Pizza',
    note: 'Crusts: Pan · Thin · Cheese Stuffed (+Rs. 200). Sizes: Small / Medium / Large.',
    items: [
      { name: 'Brotherz Special', desc: 'The loaded house special', price: 'S 649 · M 1199 · L 1599', tag: 'SIGNATURE' },
      { name: 'Chicken Supreme', desc: 'Stacked with chicken chunks & veggies', price: 'S 599 · M 1099 · L 1499' },
      { name: 'Chicken Fajita', desc: 'Desi fajita masala hit', price: 'S 599 · M 1099 · L 1499' },
      { name: 'Malai Boti', desc: 'Creamy malai boti on a cheesy base', price: 'S 599 · M 1099 · L 1499', tag: 'FAN FAVE' },
      { name: 'Kebab Pizza', desc: 'Smoky kebab, onions, special drizzle', price: 'S 599 · M 1099 · L 1499' },
      { name: 'Cheese Lover', desc: 'Cheese on cheese on cheese', price: 'S 549 · M 999 · L 1399' },
      { name: 'Veggie Lover', desc: 'Garden-fresh & loaded', price: 'S 549 · M 999 · L 1399' },
    ],
  },
  {
    id: 'fries',
    label: 'Fries',
    items: [
      { name: 'Loaded Fries', desc: 'Cheese sauce, crispy chicken, special drizzle', price: 'Rs. 450', tag: 'MOST HYPED' },
      { name: 'Masala Fries', desc: 'Golden fries dusted in our masala mix', price: 'Rs. 250' },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts & Dips',
    items: [
      { name: 'Molten Lava Cake', desc: 'Warm chocolate core, pure drama', price: 'Rs. 350', tag: 'SWEET END' },
      { name: 'Choco Chip Cookie', desc: 'Baked soft, served warm', price: 'Rs. 250' },
      { name: 'Dips', desc: 'Garlic Mayo · Chipotle · Honey Mustard', price: 'Rs. 100' },
    ],
  },
]

export const INFO = {
  phone: '+92 314 8884018',
  phoneHref: 'tel:+923148884018',
  phone2: '+92 314 8884019',
  address: 'M.A Jinnah Road, Opposite PSO Pump, Okara 56300',
  hours: 'Open daily · 1 PM till late',
  instagram: 'https://www.instagram.com/brotherzpk/',
  website: 'https://brotherzpk.com',
  rating: '4.2',
  reviews: '100+',
  mapsEmbed: 'https://www.google.com/maps?q=Brotherz+Pk,+M.A+Jinnah+Road,+Okara,+Pakistan&output=embed',
  mapsLink: 'https://www.google.com/maps/search/?api=1&query=Brotherz+Pk+Okara',
}
