import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { products } from '../data/products'
import ScrollReveal from '../components/ScrollReveal'

export default function Home() {
  const { addItem } = useCart()
  const featured = products[0]
  const accessories = products.slice(1, 3)

  return (
    <main className="pt-16 pb-20 md:pb-0">
      {/* Hero Section */}
      <section className="relative h-[751px] md:h-screen w-full flex items-center justify-center overflow-hidden bg-on-background">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 video-overlay" />
        </div>
        <div className="relative z-10 text-center px-margin-mobile max-w-4xl">
          <span className="inline-block py-1 px-4 bg-primary text-on-primary font-label-bold text-label-bold rounded-full mb-6 tracking-widest uppercase">
            Sonic Revolution
          </span>
          <h2 className="font-display-lg text-4xl md:text-display-lg text-white mb-8 leading-tight">
            THE SOUND OF <br /><span className="text-primary-fixed">NOW.</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="bg-primary text-white font-label-bold text-label-bold py-4 px-10 hover:opacity-90 active:scale-95 transition-all inline-block"
            >
              EXPLORE COLLECTION
            </Link>
            <button className="bg-transparent border border-white text-white font-label-bold text-label-bold py-4 px-10 hover:bg-white hover:text-black active:scale-95 transition-all">
              WATCH FILM
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
          <span className="text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-section-gap bg-surface" id="about">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
            <div className="lg:col-span-5 scroll-reveal">
              <p className="font-label-bold text-label-bold text-primary mb-4 uppercase tracking-[0.2em]">
                Our Manifesto
              </p>
              <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-8 text-on-surface">
                Built for the <span className="italic">unfiltered</span> energy of today.
              </h3>
              <div className="space-y-6 text-on-surface-variant font-body-lg text-body-lg leading-relaxed">
                <p>
                  At ALMI, we don't just build hardware; we engineer experiences. We realized that premium audio was
                  stuck in ivory towers—expensive, elitist, and aesthetically outdated.
                </p>
                <p>
                  Our mission is simple: To bring clinical-grade acoustic performance to the creators, the dreamers, and
                  the digital natives who demand as much style as they do substance.
                </p>
              </div>
              <div className="mt-12 flex gap-12">
                <div>
                  <span className="block font-headline-md text-primary">24bit</span>
                  <span className="text-label-sm font-label-sm text-secondary uppercase tracking-tighter">Hi-Res Audio</span>
                </div>
                <div>
                  <span className="block font-headline-md text-primary">0.1s</span>
                  <span className="text-label-sm font-label-sm text-secondary uppercase tracking-tighter">Low Latency</span>
                </div>
                <div>
                  <span className="block font-headline-md text-primary">Youth</span>
                  <span className="text-label-sm font-label-sm text-secondary uppercase tracking-tighter">Community Driven</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 mt-16 lg:mt-0 relative scroll-reveal">
              <div className="relative aspect-square md:aspect-video lg:aspect-[4/5] overflow-hidden group bg-surface-container-highest" />
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlight */}
      <section className="relative h-[618px] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-primary" />
        <div className="relative z-10 text-center px-margin-mobile">
          <h4 className="font-headline-lg text-white mb-6">
            UNCOMPROMISING <br />CLARITY
          </h4>
          <button className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all active:scale-90 group">
            <span className="material-symbols-outlined text-4xl">play_arrow</span>
          </button>
          <p className="text-white mt-6 font-label-bold tracking-widest">WATCH THE TECHNOLOGY</p>
        </div>
      </section>

      {/* Featured Products Bento Grid */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex justify-between items-end mb-12 scroll-reveal">
          <div>
            <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg">THE LINEUP.</h3>
            <p className="text-on-surface-variant font-body-md mt-2">Engineered for every frequency of life.</p>
          </div>
          <Link
            to="/products"
            className="hidden md:flex items-center gap-2 font-label-bold text-primary group"
          >
            VIEW ALL <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[800px]">
          {/* Featured Product - Large */}
          <ScrollReveal className="md:col-span-2 md:row-span-2">
            <div className="bg-secondary-fixed p-10 flex flex-col justify-between group cursor-pointer h-full">
              <div>
                <span className="inline-block py-1 px-3 bg-primary text-white text-[10px] font-bold tracking-tighter uppercase mb-4">
                  Top Rated
                </span>
                <h5 className="font-headline-md text-on-surface">{featured.name}</h5>
                <p className="text-on-surface-variant mt-2 max-w-xs">{featured.description}</p>
              </div>
              <div className="py-12 flex justify-center">
                <img
                  alt={featured.name}
                  className="w-full max-w-[300px] object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
                  src={featured.imageUrl}
                />
              </div>
              <div className="flex justify-between items-center">
                <span className="font-headline-md text-primary">${featured.price}</span>
                <button
                  onClick={() => addItem(featured)}
                  className="w-12 h-12 bg-white border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                >
                  <span className="material-symbols-outlined">add_shopping_cart</span>
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Pulse Earbuds */}
          <ScrollReveal className="md:col-span-2" delay={100}>
            <div className="bg-surface-container p-8 flex flex-col md:flex-row items-center gap-6 group cursor-pointer h-full">
              <div className="flex-1">
                <h5 className="font-headline-md text-on-surface text-2xl">{accessories[0].name}</h5>
                <p className="text-on-surface-variant mt-2">${accessories[0].price}</p>
                <Link to={`/product/${accessories[0].id}`} className="mt-6 text-primary font-label-bold flex items-center gap-1">
                  SHOP NOW <span className="material-symbols-outlined text-sm">north_east</span>
                </Link>
              </div>
              <div className="flex-1">
                <img
                  alt={accessories[0].name}
                  className="w-full object-contain group-hover:-rotate-6 transition-transform"
                  src={accessories[0].imageUrl}
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Accessories */}
          <ScrollReveal delay={200}>
            <div className="bg-primary text-white p-8 flex flex-col justify-between h-full">
              <h5 className="font-headline-md text-xl">ACCESSORIES</h5>
              <p className="font-body-md opacity-80">Protection that matches your aesthetic.</p>
              <span className="material-symbols-outlined text-4xl opacity-20">headphones</span>
            </div>
          </ScrollReveal>

          {/* Newsletter */}
          <ScrollReveal delay={300}>
            <div className="bg-on-surface text-surface p-8 flex flex-col justify-between h-full">
              <h5 className="font-headline-md text-xl">NEWSLETTER</h5>
              <p className="font-body-md opacity-70">Get early access to drops.</p>
              <div className="relative mt-4">
                <input
                  className="w-full bg-transparent border-b border-surface-variant py-2 focus:border-primary-fixed outline-none"
                  placeholder="Email"
                  type="email"
                />
                <button className="absolute right-0 bottom-2">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
