import { Flame, Mountain, Sparkles } from 'lucide-react'
import { photo } from '../data/dishes'
import Photo from '../components/Photo'
import Reveal from '../components/Reveal'

const storyImage = photo('1517248135467-4c7edcad34c4', 1600)
const chefImage = photo('1577219491135-ce391730fb2c', 1200)
const ownerImage = photo('1500648767791-00dcc994a43e', 1200)
const staffImageOne = photo('1544005313-94ddf0286df2', 1200)
const staffImageTwo = photo('1506794778207-0c0b5a0f6c2d', 1200)
const staffImageThree = photo('1524504388940-b1c1722653e1', 1200)
const staffImageFour = photo('1556157382-97eda2d62296', 1200)
const staffImageFive = photo('1517841905240-472988babdf9', 1200)

const values = [
  {
    icon: Mountain,
    title: 'Tradition',
    body: 'Honouring Himalayan flavours and recipes.',
  },
  {
    icon: Flame,
    title: 'Fire',
    body: 'Using charcoal and flame to create depth of flavour.',
  },
  {
    icon: Sparkles,
    title: 'Modern',
    body: 'Presenting traditional flavours in a contemporary way.',
  },
]

export default function About() {
  return (
    <div className="pt-20">
      <section className="shell py-20 text-center lg:py-28">
        <h1 className="text-5xl leading-[1.08] sm:text-6xl">Our Story</h1>
        <p className="mx-auto mt-7 max-w-2xl text-[1.1rem] leading-[1.9] text-muted">
          Rooted in Himalayan tradition and inspired by Sydney’s diverse food culture, Saffron &amp;
          Ember celebrates bold spices, open-fire cooking and the warmth of sharing food.
        </p>
      </section>

      <Reveal>
        <Photo
          src={storyImage}
          alt="The dining room at Saffron & Ember"
          className="aspect-[16/9] w-full sm:aspect-[21/9]"
        />
      </Reveal>

      <section className="shell py-24 lg:py-32" aria-labelledby="philosophy">
        <h2 id="philosophy" className="sr-only">
          Our philosophy
        </h2>
        <ul className="grid gap-14 md:grid-cols-3 md:gap-10">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <li key={value.title}>
                <Reveal delay={index * 90} className="text-center md:text-left">
                  <Icon className="mx-auto h-6 w-6 text-saffron md:mx-0" aria-hidden="true" />
                  <h3 className="mt-6 font-display text-3xl">{value.title}</h3>
                  <p className="mt-3 text-[1rem] leading-relaxed text-muted">{value.body}</p>
                </Reveal>
              </li>
            )
          })}
        </ul>
      </section>

      <section className="shell py-24 lg:py-32">
        <div className="mb-12 text-center">
          <p className="text-[0.8rem] tracking-[0.2em] text-saffron">MEET OUR TEAM</p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">Leadership & hospitality</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          <Reveal className="h-full">
            <div className="h-full overflow-hidden rounded-[1.3rem] border border-line bg-paper shadow-[0_12px_30px_rgba(20,19,17,0.05)]">
              <Photo
                src={ownerImage}
                alt="Owner portrait of Ghanshyam Sapkota"
                className="aspect-[4/5] w-full"
              />
              <div className="space-y-2 p-4">
                <p className="text-[0.68rem] tracking-[0.18em] text-saffron">OWNER</p>
                <h3 className="font-display text-xl">Ghanshyam Sapkota</h3>
                <p className="text-[0.82rem] text-muted">Founder & Owner</p>
              </div>
            </div>
          </Reveal>

          {[
            { name: 'Ramesh K.C.', role: 'Kitchen Head', image: staffImageOne },
            { name: 'Sita Rai', role: 'Floor Manager', image: staffImageTwo },
            { name: 'Prakash Thapa', role: 'Chef', image: staffImageThree },
            { name: 'Anita Kafle', role: 'Guest Care', image: staffImageFour },
            { name: 'Bikash Gurung', role: 'Service Team', image: staffImageFive },
          ].map((member, index) => (
            <Reveal key={member.name} delay={index * 60} className="h-full">
              <div className="h-full overflow-hidden rounded-[1.3rem] border border-line bg-paper shadow-[0_12px_30px_rgba(20,19,17,0.05)]">
                <Photo src={member.image} alt={member.name} className="aspect-[4/5] w-full" />
                <div className="space-y-2 p-4">
                  <p className="text-[0.68rem] tracking-[0.18em] text-saffron">TEAM</p>
                  <h3 className="font-display text-xl">{member.name}</h3>
                  <p className="text-[0.82rem] text-muted">{member.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-shell py-24 lg:py-32">
        <div className="shell grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <Photo
              src={chefImage}
              alt="A chef finishing a dish at the pass"
              className="aspect-[4/5] w-full"
            />
          </Reveal>

          <Reveal delay={100}>
            <h2 className="text-4xl leading-[1.12] sm:text-5xl">In the kitchen</h2>
            <div className="mt-7 space-y-6 text-[1.05rem] leading-[1.9] text-muted">
              <p>
                Momos are folded by hand each afternoon and masala is ground each morning. The grill
                is lit at four and sits in the middle of the room, so the fire is part of the dining
                room rather than hidden behind a wall.
              </p>
              <p>
                Produce is Australian — lamb from the Southern Highlands, seafood from the markets
                that morning, herbs from a rooftop garden above the room. The technique is Nepalese.
                The two meet on the plate.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
