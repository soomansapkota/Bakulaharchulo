import { useMemo, useState } from 'react'
import type { DishCategory } from '../data/dishes'
import { dishes } from '../data/dishes'
import CategoryFilter from '../components/CategoryFilter'
import DishCard from '../components/DishCard'
import PageHeader from '../components/PageHeader'
import Photo from '../components/Photo'
import Reveal from '../components/Reveal'

const menuBoards = [
  {
    src: '/images/menu-board-1.jpg',
    alt: 'Menu board: breakfast, momo, naan, curry items, chicken items and sekuwa',
  },
  {
    src: '/images/menu-board-2.jpg',
    alt: 'Menu board: veg items, salad, chowmein, khaja sets, khana, tandoori, lassi and drinks',
  },
]

export default function MenuPage() {
  const [category, setCategory] = useState<DishCategory | 'All'>('All')

  const visible = useMemo(
    () => (category === 'All' ? dishes : dishes.filter((dish) => dish.category === category)),
    [category],
  )

  return (
    <div>
      <PageHeader
        kicker="Eat with us"
        title="Our Menu"
        subtitle="Simple ingredients. Bold flavours. Crafted with care."
        image="/images/dal-bhat-set.jpg"
      />

      <div className="sticky top-20 z-30 border-b border-line bg-paper/95 py-5 backdrop-blur">
        <div className="shell">
          <CategoryFilter active={category} onChange={setCategory} />
        </div>
      </div>

      <section className="shell py-16 lg:py-24">
        <p aria-live="polite" className="sr-only">
          {visible.length} dishes shown
        </p>

        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((dish, index) => (
            <li key={dish.id}>
              <Reveal delay={Math.min(index, 5) * 70} className="h-full">
                <DishCard dish={dish} />
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-line bg-shell py-16 lg:py-24" aria-labelledby="full-menu">
        <div className="shell">
          <p className="section-kicker flex justify-center">Everything we serve</p>
          <h2 id="full-menu" className="mt-5 text-center text-4xl leading-[1.12] sm:text-5xl">
            Full Menu
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-center text-[1.05rem] leading-relaxed text-muted">
            Our complete menu, as it hangs on our wall.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {menuBoards.map((board) => (
              <Reveal key={board.src}>
                <a href={board.src} target="_blank" rel="noopener noreferrer" className="block">
                  <Photo
                    src={board.src}
                    alt={board.alt}
                    className="w-full rounded-[1.5rem] border border-line shadow-[0_20px_50px_rgba(33,28,26,0.1)] transition-transform duration-300 hover:-translate-y-1"
                    imgClassName="h-auto object-contain"
                  />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
