import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { products } from '../data/products'

export default function Home() {
  const { addItem } = useCart()
  const featured = products[0]
  const highlights = products.slice(0, 6)

  return (
    <main className="pb-[56px] md:pb-0">
      {/* ───── Hero ───── */}
      <section className="min-h-[90dvh] md:min-h-screen flex items-center justify-center bg-on-surface relative overflow-hidden px-margin-mobile">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent pointer-events-none" />
        <div className="relative z-10 text-center max-w-3xl mx-auto w-full">
          <span className="inline-flex items-center gap-1.5 py-1.5 px-4 bg-white/10 backdrop-blur-md text-white/90 text-[10px] md:text-label-sm font-label-sm tracking-widest uppercase rounded-full mb-6 md:mb-10">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse shrink-0" />
            New Generation Audio
          </span>
          <h1 className="text-[44px] sm:text-[56px] md:text-[80px] lg:text-[96px] font-display-lg font-bold leading-[0.95] tracking-[-0.04em] text-white mb-4 md:mb-6">
            The Sound of
            <br />
            <span className="text-primary-fixed">Now.</span>
          </h1>
          <p className="text-body-md md:text-body-lg font-body-lg text-white/60 max-w-lg mx-auto mb-8 md:mb-12 leading-relaxed px-2">
            Clinical-grade acoustic performance for the creators, dreamers, and digital natives who demand as much style as substance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 w-full sm:w-auto">
            <Link
              to="/products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-on-primary text-label-bold font-label-bold px-6 md:px-8 py-3.5 md:py-4 hover:opacity-90 active:scale-[0.97] transition-all duration-200"
            >
              Explore the lineup
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-white/80 text-label-bold font-label-bold px-6 md:px-8 py-3.5 md:py-4 border border-white/20 hover:border-white/40 hover:text-white active:scale-[0.97] transition-all duration-200">
              <span className="material-symbols-outlined text-[18px]">play_arrow</span>
              Watch the film
            </button>
          </div>
        </div>
      </section>

      {/* ───── Highlights Grid ───── */}
      <section className="py-16 md:py-section-gap">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-10 md:mb-16">
            <span className="text-label-sm font-label-sm text-primary tracking-[0.3em] uppercase">Engineered Sound</span>
            <h2 className="text-2xl sm:text-3xl md:text-headline-md font-headline-md text-on-surface mt-3 md:mt-4 mb-3 md:mb-4 px-2">
              Redefining what audio can be.
            </h2>
            <p className="text-body-md md:text-body-lg font-body-lg text-on-surface-variant max-w-xl mx-auto px-4">
              Every product is built from the ground up with precision acoustics, bold design, and uncompromising quality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 stagger-children">
            {[
              { icon: 'tune', label: 'Hi-Res Audio', desc: '24-bit / 192kHz support for studio-grade sound reproduction.' },
              { icon: 'bluetooth', label: 'Low Latency', desc: 'Proprietary codec delivers under 0.1s lag for seamless creation.' },
              { icon: 'battery_charging_full', label: 'All-Day Power', desc: 'Up to 40 hours of battery life with quick-charge capability.' },
              { icon: 'mic', label: 'Voice Isolation', desc: 'Advanced algorithms filter background noise during calls.' },
              { icon: 'water_drop', label: 'IPX5 Rated', desc: 'Built to withstand sweat, rain, and everyday adventures.' },
              { icon: 'groups', label: 'Community Driven', desc: '1M+ creators shaping the future of personal audio.' },
            ].map((item) => (
              <div
                key={item.label}
                className="group p-6 md:p-8 bg-white border border-outline-variant/30 hover:border-outline-variant/60 transition-colors"
              >
                <span className="material-symbols-outlined text-2xl md:text-3xl text-primary mb-3 md:mb-5 block">{item.icon}</span>
                <h3 className="text-lg md:text-headline-sm font-headline-sm text-on-surface mb-1 md:mb-2">{item.label}</h3>
                <p className="text-body-sm md:text-body-md font-body-md text-on-surface-variant leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Featured Product ───── */}
      <section className="py-16 md:py-section-gap bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="order-2 md:order-1">
              <span className="inline-block py-1 px-3 bg-primary text-on-primary text-[10px] md:text-label-sm font-label-sm tracking-wider uppercase mb-4 md:mb-5">
                Top Rated
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-headline-lg font-headline-lg text-on-surface mb-3 md:mb-4 leading-tight">
                {featured.name}
              </h2>
              <p className="text-body-md md:text-body-lg font-body-lg text-on-surface-variant mb-6 md:mb-8 leading-relaxed">
                {featured.description}
              </p>
              <div className="flex items-center gap-4 md:gap-8 mb-6 md:mb-10">
                <div>
                  <span className="text-2xl md:text-headline-md font-headline-md text-primary">${featured.price}</span>
                </div>
                <div className="flex items-center gap-0.5 md:gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-[16px] md:text-[18px]"
                      style={{ fontVariationSettings: i < Math.floor(featured.rating) ? "'FILL' 1" : "'FILL' 0" }}
                    >
                      star
                    </span>
                  ))}
                  <span className="text-body-sm font-body-sm text-on-surface-variant ml-1">{featured.rating}</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <button
                  onClick={() => addItem(featured)}
                  className="w-full sm:flex-1 bg-primary text-on-primary text-label-bold font-label-bold py-3.5 md:py-4 px-6 md:px-8 hover:opacity-90 active:scale-[0.97] transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
                  Add to Cart
                </button>
                <Link
                  to={`/product/${featured.id}`}
                  className="w-full sm:flex-1 border border-on-surface/20 text-on-surface text-label-bold font-label-bold py-3.5 md:py-4 px-6 md:px-8 hover:bg-on-surface hover:text-white active:scale-[0.97] transition-all duration-200 flex items-center justify-center gap-2"
                >
                  Learn more
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2 bg-secondary-fixed/50 rounded-xl p-6 md:p-12 flex items-center justify-center">
              <img
                alt={featured.name}
                className="w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] object-contain hover:scale-105 transition-transform duration-700"
                src={featured.imageUrl}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ───── Product Showcase Grid ───── */}
      <section className="py-16 md:py-section-gap">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-10 md:mb-16">
            <span className="text-label-sm font-label-sm text-primary tracking-[0.3em] uppercase">The Lineup</span>
            <h2 className="text-2xl sm:text-3xl md:text-headline-md font-headline-md text-on-surface mt-3 md:mt-4">
              Engineered for every frequency of life.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 stagger-children">
            {highlights.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group bg-white border border-outline-variant/30 hover:border-outline-variant/60 transition-all duration-300 p-5 md:p-8 flex flex-col"
              >
                <div className="aspect-square mb-4 md:mb-6 flex items-center justify-center bg-secondary-fixed/30 rounded-lg p-4 md:p-6">
                  <img
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    src={product.imageUrl}
                  />
                </div>
                <div className="flex-1">
                  {product.isNew && (
                    <span className="inline-block text-[10px] md:text-label-sm font-label-sm text-primary tracking-wider uppercase mb-1 md:mb-2">
                      New
                    </span>
                  )}
                  <h3 className="text-lg md:text-headline-sm font-headline-sm text-on-surface mb-1 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-body-sm font-body-sm text-on-surface-variant mb-3 md:mb-4 line-clamp-2">{product.description}</p>
                </div>
                <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-outline-variant/20">
                  <span className="text-lg md:text-headline-sm font-headline-sm text-primary">${product.price}</span>
                  <span className="text-body-sm font-body-sm text-on-surface-variant group-hover:text-primary transition-colors flex items-center gap-1">
                    View
                    <span className="material-symbols-outlined text-[14px] md:text-[16px]">arrow_forward</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-12">
            <Link
              to="/products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-primary text-label-bold font-label-bold px-6 md:px-8 py-3.5 md:py-4 border border-primary hover:bg-primary hover:text-on-primary active:scale-[0.97] transition-all duration-200"
            >
              View all products
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ───── CTA Banner ───── */}
      <section className="bg-primary">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-headline-md font-headline-md text-primary-fixed mb-4 md:mb-6 leading-tight px-2">
            Uncompromising clarity.
            <br />
            Designed for the unfiltered.
          </h2>
          <p className="text-body-md md:text-body-lg font-body-lg text-primary-fixed/70 max-w-md mx-auto mb-8 md:mb-10 px-4">
            Join the community of creators who refuse to compromise on sound.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 w-full sm:w-auto">
            <Link
              to="/products"
              className="w-full sm:w-auto bg-surface text-on-surface text-label-bold font-label-bold px-6 md:px-8 py-3.5 md:py-4 hover:opacity-90 active:scale-[0.97] transition-all duration-200 text-center"
            >
              Shop now
            </Link>
            <button className="w-full sm:w-auto border border-primary-fixed/40 text-primary-fixed text-label-bold font-label-bold px-6 md:px-8 py-3.5 md:py-4 hover:bg-white/10 active:scale-[0.97] transition-all duration-200 text-center">
              Learn our story
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
