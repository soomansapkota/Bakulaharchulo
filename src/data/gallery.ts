import { photo } from './dishes'

export interface GalleryImage {
  id: string
  src: string
  alt: string
  caption: string
  ratio: 'tall' | 'square' | 'wide'
}

export const galleryImages: GalleryImage[] = [
  {
    id: 'g1',
    src: photo('1517248135467-4c7edcad34c4', 1200),
    alt: 'The dining room set with linen and low lighting',
    caption: 'The dining room before service',
    ratio: 'wide',
  },
  {
    id: 'g2',
    src: photo('1577219491135-ce391730fb2c', 1000),
    alt: 'A chef finishing a dish at the pass',
    caption: 'At the pass',
    ratio: 'tall',
  },
  {
    id: 'g3',
    src: photo('1596040033229-a9821ebd058d', 1000),
    alt: 'Ground spices arranged in small bowls',
    caption: 'Masala ground each morning',
    ratio: 'square',
  },
  {
    id: 'g4',
    src: photo('1541544181051-e46607bc22a4', 1000),
    alt: 'Flames rising from a charcoal grill',
    caption: 'Ironbark charcoal, lit at four',
    ratio: 'tall',
  },
  {
    id: 'g5',
    src: photo('1552566626-52f8b828add9', 1200),
    alt: 'A table laid with brass plates',
    caption: 'Brass thali plates, made in Patan',
    ratio: 'square',
  },
  {
    id: 'g6',
    src: photo('1581299894007-aaa50297cf16', 1200),
    alt: 'Cooks preparing food in the kitchen',
    caption: 'Prep, three in the afternoon',
    ratio: 'wide',
  },
  {
    id: 'g7',
    src: photo('1518843875459-f738682238a6', 1000),
    alt: 'Fresh produce in crates at the market',
    caption: 'Flemington markets, twice a week',
    ratio: 'square',
  },
  {
    id: 'g8',
    src: photo('1559339352-11d035aa65de', 1000),
    alt: 'The bar with warm lighting and amber bottles',
    caption: 'The bar',
    ratio: 'tall',
  },
  {
    id: 'g9',
    src: photo('1414235077428-338989a2e8c0', 1200),
    alt: 'Guests dining at a long table',
    caption: 'Friday, eight o’clock',
    ratio: 'wide',
  },
]
