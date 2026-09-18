import { Link } from 'react-router-dom'
import { dishes, photo } from '../data/dishes'
import { galleryImages } from '../data/gallery'
import DishCard from '../components/DishCard'
import LocationSection from '../components/LocationSection'
import Photo from '../components/Photo'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const heroImage = photo('1552566626-52f8b828add9', 2000)
const introImage = photo('1596040033229-a9821ebd058d', 1200)
const aboutImage = photo('1541544181051-e46607bc22a4', 1200)

const featured = [dishes[0], dishes[3], dishes[7]]
const galleryPreview = galleryImages.slice(0, 3)

export default function Home() {
  return (
    <>
      <section className="shell pb-14 pt-28 lg:pb-20 lg:pt-32">
        <div className="grid overflow-hidden rounded-[1.75rem] border border-line bg-[#f4efe7] shadow-[0_18px_50px_rgba(33,28,26,0.06)] lg:grid-cols-[1.12fr_0.88fr]">
          <div className="relative min-h-[360px] sm:min-h-[440px] lg:min-h-[560px]">
            <Photo
              src={heroImage}
              alt="The dining room at Bakulaharchulo Restaurant"
              eager
              className="h-full w-full"
              imgClassName="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center px-6 py-10 sm:px-10 lg:px-14">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-saffron">
              Nepali cuisine • warm hospitality
            </p>

            <h1 className="mt-5 text-[2.6rem] leading-[1.02] tracking-[-0.04em] sm:text-[3.2rem] lg:text-[4.1rem]">
              आगोले स्वाद मिल्छ
            </h1>

            <p className="mt-6 max-w-lg text-[1rem] leading-[1.8] text-graphite sm:text-[1.06rem]">
              Modern Nepali dining inspired by Himalayan traditions and warm hospitality.
            </p>

          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-paper py-24 lg:py-32" aria-labelledby="intro">
        <div className="shell grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <h2 id="intro" className="text-4xl leading-[1.12] sm:text-5xl">
              A Taste of the Himalayas
            </h2>
            <p className="mt-7 max-w-prose text-[1.05rem] leading-[1.9] text-muted">
              Bakulaharchulo Restaurant brings the warmth, spices and traditions of Nepal to every
              table, combining familiar flavours with a contemporary dining experience.
            </p>
            <Link
              to="/about"
              className="mt-10 inline-block border-b border-ink pb-1 text-[0.88rem] tracking-[0.08em] text-ink transition-colors hover:border-saffron hover:text-saffron"
            >
              Our story
            </Link>
          </Reveal>

          <Reveal delay={100}>
            <Photo
              src={introImage}
              alt="Spices arranged in small bowls"
              className="aspect-[4/5] w-full"
            />
          </Reveal>
        </div>
      </section>

      {/* Featured dishes */}
      <section className="border-t border-line bg-shell py-24 lg:py-32" aria-labelledby="featured">
        <div className="shell">
          <SectionHeading
            id="featured"
            title="From the Menu"
            subtitle="Three dishes that say most about how we cook."
          />

          <ul className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((dish, index) => (
              <li key={dish.id}>
                <Reveal delay={index * 90} className="h-full">
                  <DishCard dish={dish} />
                </Reveal>
              </li>
            ))}
          </ul>

          <div className="mt-14 text-center">
            <Link
              to="/menu"
              className="inline-block border border-ink px-10 py-4 text-[0.88rem] tracking-[0.12em] text-ink transition-colors duration-300 hover:bg-ink hover:text-paper"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="bg-paper py-24 lg:py-32" aria-labelledby="about-preview">
        <div className="shell grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal className="lg:order-2">
            <h2 id="about-preview" className="text-4xl leading-[1.12] sm:text-5xl">
              Cooked over open fire
            </h2>
            <p className="mt-7 max-w-prose text-[1.05rem] leading-[1.9] text-muted">
              Rooted in Himalayan tradition and inspired by Nepal’s rich food culture,
              Bakulaharchulo Restaurant celebrates bold spices, open-fire cooking and the warmth of
              sharing food.
            </p>
            <Link
              to="/about"
              className="mt-10 inline-block border-b border-ink pb-1 text-[0.88rem] tracking-[0.08em] text-ink transition-colors hover:border-saffron hover:text-saffron"
            >
              Read more
            </Link>
          </Reveal>

          <Reveal delay={100} className="lg:order-1">
            <Photo
              src={aboutImage}
              alt="Flames rising from the charcoal grill"
              className="aspect-[4/3] w-full"
            />
          </Reveal>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="border-t border-line bg-paper py-24 lg:py-32" aria-labelledby="gallery-preview">
        <div className="shell">
          <SectionHeading
            id="gallery-preview"
            title="The Room"
            subtitle="Photographs from the dining room, the kitchen and the grill."
          />

          <ul className="mt-16 grid gap-4 sm:grid-cols-3">
            {galleryPreview.map((image) => (
              <li key={image.id}>
                <Link to="/gallery" className="group block overflow-hidden">
                  <Photo src={image.src} alt={image.alt} zoom className="aspect-[4/5] w-full" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-12 text-center">
            <Link
              to="/gallery"
              className="border-b border-ink pb-1 text-[0.88rem] tracking-[0.08em] text-ink transition-colors hover:border-saffron hover:text-saffron"
            >
              View gallery
            </Link>
          </div>
        </div>
      </section>

      <LocationSection />
    </>
  )
}
