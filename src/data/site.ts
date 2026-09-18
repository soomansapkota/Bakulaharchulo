export const site = {
  name: 'Bakulaharchulo Restaurant',
  tagline: 'Where fire meets flavour',
  blurb: 'Authentic Nepali flavours, warm hospitality, and family-style dining in Chitwan.',
  address: {
    line1: 'Ratnanagar-10',
    line2: 'Chitwan',
    country: 'Nepal',
    full: 'Ratnanagar-10, Chitwan, Nepal',
  },
  phone: '',
  phoneHref: '',
  email: 'bakulaharchulho@gmail.com',
  /** Used to centre the embedded map. */
  coordinates: { lat: 27.65, lng: 84.45 },
}

export const openingHours = [
  { days: 'Tuesday – Thursday', hours: '5:00 pm – 10:00 pm' },
  { days: 'Friday – Saturday', hours: '5:00 pm – 11:00 pm' },
  { days: 'Sunday', hours: '5:00 pm – 9:00 pm' },
  { days: 'Monday', hours: 'Closed', closed: true },
]

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]
