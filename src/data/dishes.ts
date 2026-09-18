export type DishCategory = 'Veg' | 'Chicken' | 'Mutton'

export type SpiceLevel = 'None' | 'Mild' | 'Medium' | 'Hot'

export interface Dish {
  id: string
  name: string
  description: string
  price: number
  category: DishCategory
  image: string
  ingredients: string[]
  dietary: string[]
  spice: SpiceLevel
}

/**
 * Photography is referenced by URL so a real shoot can replace it here.
 * Every image renders through <Photo>, which falls back to a warm panel
 * if a file is unavailable.
 */
function photo(id: string, w = 1000): string {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`
}

export const dishes: Dish[] = [
  {
    id: 'dal-bhat-set',
    name: 'Dal Bhat Set',
    description:
      'Classic Nepalese staple of lentil soup, rice, seasonal vegetables and pickles served with warmth.',
    price: 18,
    category: 'Veg',
    image: photo('1547592180-85f173990554'),
    ingredients: ['Rice', 'Lentils', 'Ghee', 'Pickles', 'Spinach', 'Garlic'],
    dietary: ['Vegetarian', 'Gluten free'],
    spice: 'Mild',
  },
  {
    id: 'alu-tama',
    name: 'Aalu Tama',
    description:
      'A rich Nepali curry made with potatoes, bamboo shoots, tomatoes and traditional spices.',
    price: 20,
    category: 'Veg',
    image: photo('1547592180-85f173990554'),
    ingredients: ['Potato', 'Bamboo shoots', 'Tomato', 'Ginger', 'Chili', 'Timur'],
    dietary: ['Vegetarian', 'Vegan'],
    spice: 'Medium',
  },
  {
    id: 'saag-paneer-nepali',
    name: 'Saag Paneer',
    description:
      'Creamy spinach curry with paneer and a touch of Nepalese herbs and warming spices.',
    price: 22,
    category: 'Veg',
    image: photo('1567337710282-00832b415979'),
    ingredients: ['Paneer', 'Spinach', 'Garlic', 'Ginger', 'Cumin', 'Mustard oil'],
    dietary: ['Vegetarian'],
    spice: 'Mild',
  },
  {
    id: 'chicken-sekuwa',
    name: 'Chicken Sekuwa',
    description:
      'Juicy charcoal-grilled chicken marinated with Nepalese spices and served with achar.',
    price: 26,
    category: 'Chicken',
    image: photo('1555939594-58d7cb561ad1'),
    ingredients: ['Chicken', 'Lemon', 'Garlic', 'Ginger', 'Mustard oil', 'Chili'],
    dietary: ['Gluten free'],
    spice: 'Medium',
  },
  {
    id: 'chicken-momo',
    name: 'Chicken Momo',
    description:
      'Steamed dumplings filled with spiced chicken and served with a fiery tomato chutney.',
    price: 19,
    category: 'Chicken',
    image: photo('1534422298391-e4f8c172dddb'),
    ingredients: ['Chicken', 'Flour', 'Garlic', 'Ginger', 'Coriander', 'Tomato chutney'],
    dietary: ['High protein'],
    spice: 'Medium',
  },
  {
    id: 'chicken-curry',
    name: 'Nepali Chicken Curry',
    description:
      'Slow-cooked chicken in a bold curry with onion, tomato, ginger and traditional Nepali masala.',
    price: 28,
    category: 'Chicken',
    image: photo('1565557623262-b51c2513a641'),
    ingredients: ['Chicken', 'Tomato', 'Onion', 'Ginger', 'Garlic', 'Nepali masala'],
    dietary: ['Gluten free'],
    spice: 'Hot',
  },
  {
    id: 'mutton-curry',
    name: 'Mutton Curry',
    description:
      'Tender mutton simmered with Himalayan spices until rich, aromatic and deeply comforting.',
    price: 35,
    category: 'Mutton',
    image: photo('1600891964092-4316c288032e'),
    ingredients: ['Mutton', 'Onion', 'Tomato', 'Garlic', 'Ginger', 'Coriander'],
    dietary: ['Gluten free'],
    spice: 'Hot',
  },
  {
    id: 'mutton-sekuwa',
    name: 'Mutton Sekuwa',
    description:
      'Charcoal-grilled mutton pieces marinated with mustard oil, turmeric and local spices.',
    price: 38,
    category: 'Mutton',
    image: photo('1555939594-58d7cb561ad1'),
    ingredients: ['Mutton', 'Mustard oil', 'Garlic', 'Chili', 'Turmeric', 'Lemon'],
    dietary: ['Gluten free'],
    spice: 'Hot',
  },
  {
    id: 'mutton-biryani',
    name: 'Mutton Biryani',
    description:
      'Fragrant rice layered with spiced mutton, herbs and slow-cooked aromatics for a festive finish.',
    price: 32,
    category: 'Mutton',
    image: photo('1563379091339-03b21ab4a4f8'),
    ingredients: ['Rice', 'Mutton', 'Onion', 'Mint', 'Cardamom', 'Ginger'],
    dietary: ['High protein'],
    spice: 'Medium',
  },
]

export const categories: (DishCategory | 'All')[] = ['All', 'Veg', 'Chicken', 'Mutton']

export function findDish(id: string): Dish | undefined {
  return dishes.find((dish) => dish.id === id)
}

/** Three other dishes to suggest, preferring the same category. */
export function relatedDishes(dish: Dish, count = 3): Dish[] {
  const sameCategory = dishes.filter((d) => d.id !== dish.id && d.category === dish.category)
  const rest = dishes.filter((d) => d.id !== dish.id && d.category !== dish.category)
  return [...sameCategory, ...rest].slice(0, count)
}

export { photo }
