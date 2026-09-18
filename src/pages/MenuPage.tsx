import { useMemo, useState } from 'react'
import type { DishCategory } from '../data/dishes'
import { dishes } from '../data/dishes'
import CategoryFilter from '../components/CategoryFilter'
import DishCard from '../components/DishCard'
import Reveal from '../components/Reveal'

export default function MenuPage() {
  const [category, setCategory] = useState<DishCategory | 'All'>('All')

  const visible = useMemo(
    () => (category === 'All' ? dishes : dishes.filter((dish) => dish.category === category)),
    [category],
  )

  return (
    <div className="pt-20">
      <section className="shell py-20 text-center lg:py-28">
        <h1 className="text-5xl leading-[1.08] sm:text-6xl">Our Menu</h1>
        <p className="mx-auto mt-5 max-w-lg text-[1.05rem] leading-relaxed text-muted">
          Simple ingredients. Bold flavours. Crafted with care.
        </p>
      </section>

      <div className="border-y border-line bg-paper/95 py-6 backdrop-blur">
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
    </div>
  )
}
