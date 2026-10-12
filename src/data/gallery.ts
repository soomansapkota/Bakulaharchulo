export interface GalleryImage {
  id: string
  src: string
  alt: string
  caption: string
  ratio: 'tall' | 'square' | 'wide'
}

export const galleryImages: GalleryImage[] = [
  {
    id: 'khaja-set',
    src: '/images/khaja-set.jpg',
    alt: 'A khaja set with chicken, fries, peanut sadheko, egg, beaten rice and papad',
    caption: 'Chicken khaja set',
    ratio: 'tall',
  },
  {
    id: 'tandoor-skewers',
    src: '/images/tandoor-chicken-skewers.jpg',
    alt: 'Chicken skewers roasting over the open tandoor fire',
    caption: 'Straight from the tandoor',
    ratio: 'tall',
  },
  {
    id: 'chef-naan',
    src: '/images/chef-tandoor-naan.jpg',
    alt: 'The chef shaping naan dough beside the tandoor',
    caption: 'Naan, made to order',
    ratio: 'square',
  },
  {
    id: 'tandoori-naan',
    src: '/images/tandoori-naan.jpg',
    alt: 'Fresh tandoori naan in a woven basket',
    caption: 'Fresh tandoori naan',
    ratio: 'tall',
  },
  {
    id: 'dal-bhat',
    src: '/images/dal-bhat-set.jpg',
    alt: 'Dal bhat set with rice, lentils, greens, achar and chicken curry',
    caption: 'Dal bhat set',
    ratio: 'square',
  },
  {
    id: 'chowmein',
    src: '/images/chicken-chowmein.jpg',
    alt: 'A bowl of chicken chowmein with carrot, cabbage and spring onion',
    caption: 'Chicken chowmein',
    ratio: 'tall',
  },
  {
    id: 'kitchen',
    src: '/images/kitchen.jpg',
    alt: 'The kitchen line with burners, wok and spice tins',
    caption: 'Our kitchen',
    ratio: 'tall',
  },
]
