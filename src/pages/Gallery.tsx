import { galleryImages } from '../data/gallery'
import GalleryGrid from '../components/GalleryGrid'

export default function Gallery() {
  return (
    <div className="pt-20">
      <section className="shell py-20 text-center lg:py-28">
        <h1 className="text-5xl leading-[1.08] sm:text-6xl">Gallery</h1>
        <p className="mx-auto mt-5 max-w-lg text-[1.05rem] leading-relaxed text-muted">
          The room, the kitchen and the food, photographed during service.
        </p>
      </section>

      <section className="shell pb-24 lg:pb-32">
        <GalleryGrid images={galleryImages} />
      </section>
    </div>
  )
}
