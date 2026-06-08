import { Link } from 'react-router-dom'
<<<<<<< HEAD
import ScrollReveal from '../components/ScrollReveal'
import ScrollHeadphones from '../components/ScrollHeadphones'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

const features = [
  {
    icon: 'music_note',
    title: 'Sonido Hi-Res',
    desc: 'Audio de 24-bit con drivers personalizados de neodimio. Cada nota, cada respiro, cada matiz.',
    stat: '24-bit',
  },
  {
    icon: 'do_not_disturb_on',
    title: 'Cancelación Activa',
    desc: 'ANC adaptativo con 4 micrófonos. Silencia el caos. Escucha lo que importa.',
    stat: '−42dB',
  },
  {
    icon: 'battery_full',
    title: '40h de Batería',
    desc: 'Carga rápida USB-C. 10 minutos = 4 horas de reproducción ininterrumpida.',
    stat: '40h',
  },
  {
    icon: 'bluetooth',
    title: 'Bluetooth 5.3',
    desc: 'Conexión multipunto. Cambia entre dispositivos sin perder un solo segundo.',
    stat: '5.3',
  },
]

const specs = [
  { label: 'Respuesta en Frecuencia', value: '20Hz – 40kHz' },
  { label: 'Impedancia', value: '32Ω' },
  { label: 'Sensibilidad', value: '105 dB SPL/mW' },
  { label: 'Drivers', value: '40mm Neodimio' },
  { label: 'Códecs', value: 'LDAC, AAC, SBC' },
  { label: 'Peso', value: '250g' },
]

const testimonials = [
  {
    name: 'Sofia K.',
    role: 'Productora Musical',
    text: 'La claridad en los agudos es simplemente irreal. No esperaba esta calidad en unos audífonos inalámbricos.',
    rating: 5,
  },
  {
    name: 'Carlos M.',
    role: 'Ingeniero de Sonido',
    text: 'Trabajo con audio profesional todos los días. Los ALMI me sorprendieron. La cancelación de ruido es de clase mundial.',
    rating: 5,
  },
  {
    name: 'Elena R.',
    role: 'Creadora de Contenido',
    text: 'El diseño es espectacular. Los uso todo el día y la batería nunca me deja tirada. Son mis nuevos favoritos.',
    rating: 5,
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className="material-symbols-outlined text-xs"
          style={{ color: i < count ? '#0047CC' : '#c4c4c4', fontSize: '14px' }}
        >
          star
        </span>
      ))}
    </div>
  )
}

export default function Home() {
  const { addItem } = useCart()
  const featuredProducts = products.slice(0, 3)

  return (
    <main>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-almi-black">
        {/* Atmospheric orbs */}
        <div className="absolute inset-0 bg-gradient-to-b from-almi-blue/20 via-transparent to-almi-black/80" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-almi-blue/8 rounded-full blur-[140px]" />
          <div className="absolute bottom-1/3 right-1/3 w-[350px] h-[350px] bg-almi-blue/5 rounded-full blur-[100px]" />
          <div className="absolute top-1/3 left-1/4 w-[250px] h-[250px] bg-almi-blue/4 rounded-full blur-[80px]" />
        </div>

        {/* Grid texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        {/* Floating accent lines */}
        <div className="absolute left-[10%] top-1/2 w-px h-32 bg-gradient-to-b from-transparent via-almi-blue/30 to-transparent" />
        <div className="absolute right-[10%] top-1/3 w-px h-24 bg-gradient-to-b from-transparent via-almi-blue/20 to-transparent" />

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24">
          {/* Badge */}
          <ScrollReveal>
            <div className="inline-flex items-center gap-3 mb-10 px-5 py-2.5 border border-almi-blue/30 bg-almi-blue/5 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-almi-blue animate-pulse" />
              <span className="text-[10px] font-label-bold text-almi-blue tracking-[0.3em] uppercase">
                Almi Tech — Nueva Colección 2025
              </span>
            </div>
          </ScrollReveal>

          {/* Headline */}
          <ScrollReveal delay={100}>
            <h1 className="font-display-lg text-display-lg text-white leading-[0.95] tracking-tighter mb-8">
              El Sonido de
              <br />
              <span className="relative inline-block">
                <span className="text-almi-blue">tu Generación.</span>
                <span
                  className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-almi-blue/60 to-transparent"
                />
              </span>
            </h1>
          </ScrollReveal>

          {/* Subtext */}
          <ScrollReveal delay={200}>
            <p className="text-white/55 font-body-lg text-body-lg max-w-xl mx-auto mb-12 leading-relaxed">
              Audífonos inalámbricos con audio de 24-bit, cancelación de ruido adaptativa
              y un diseño minimalista que trasciende el tiempo.
            </p>
          </ScrollReveal>

          {/* CTAs */}
          <ScrollReveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/products"
                className="relative bg-almi-blue text-white font-label-bold text-label-bold py-4 px-12 transition-all duration-300 hover:shadow-[0_0_50px_rgba(0,71,204,0.55)] active:scale-[0.97] inline-flex items-center gap-3 overflow-hidden group"
              >
                <span className="relative z-10">Comprar Ahora</span>
                <span className="material-symbols-outlined text-base relative z-10">arrow_forward</span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </Link>
              <a
                href="#features"
                className="group relative bg-transparent border border-white/25 text-white font-label-bold text-label-bold py-4 px-10 transition-all duration-300 hover:border-white/50 hover:bg-white/5 active:scale-[0.97] inline-flex items-center gap-2"
              >
                <span>Ver Tecnología</span>
                <span className="material-symbols-outlined text-sm opacity-50 group-hover:opacity-100 transition-opacity">expand_more</span>
              </a>
            </div>
          </ScrollReveal>

          {/* Social proof */}
          <ScrollReveal delay={400}>
            <div className="flex items-center justify-center gap-8 mt-16 pt-16 border-t border-white/8">
              <div className="text-center">
                <div className="text-2xl font-headline-md text-white mb-1">4.8★</div>
                <div className="text-[10px] font-label-sm text-white/30 uppercase tracking-wider">Rating</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center">
                <div className="text-2xl font-headline-md text-white mb-1">12k+</div>
                <div className="text-[10px] font-label-sm text-white/30 uppercase tracking-wider">Clientes</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="text-center">
                <div className="text-2xl font-headline-md text-white mb-1">98%</div>
                <div className="text-[10px] font-label-sm text-white/30 uppercase tracking-wider">Satisfacción</div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-white/25">
          <span className="text-[9px] font-label-sm tracking-[0.4em] uppercase">Descubre</span>
          <div className="w-px h-14 bg-gradient-to-b from-white/25 to-transparent" />
        </div>
      </section>

      {/* ═══ SCROLL HEADPHONES ANIMATION ═══ */}
      <section className="scroll-headphones-section">
        <ScrollHeadphones />
      </section>

      {/* ═══ FEATURED PRODUCTS ═══ */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <ScrollReveal>
              <span className="text-[11px] font-label-bold text-almi-blue tracking-[0.25em] uppercase mb-4 inline-block">
                Catálogo
              </span>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
                Productos <span className="text-almi-blue">destacados.</span>
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={150}>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-almi-blue font-label-bold text-label-bold border-b border-almi-blue/30 pb-1 hover:border-almi-blue transition-colors duration-300"
            >
              Ver todos
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProducts.map((product, i) => (
            <ScrollReveal key={product.id} delay={i * 100}>
              <div className="group relative bg-white/80 border border-gray-200 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-almi-blue/10 hover:-translate-y-1">
                {/* Badge */}
                {(product.isTopRated || product.isNew) && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-[9px] font-label-bold tracking-[0.2em] uppercase px-3 py-1.5 bg-almi-blue text-white">
                      {product.isTopRated ? 'Más vendido' : 'Nuevo'}
                    </span>
                  </div>
                )}

                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden bg-almi-beige/50">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">{product.name}</h3>
                      <StarRating count={Math.round(product.rating)} />
                    </div>
                    <div className="text-right">
                      <div className="font-headline-md text-headline-md text-almi-blue">${product.price}</div>
                      <div className="text-[10px] font-label-sm text-on-surface-variant uppercase tracking-wider">USD</div>
                    </div>
                  </div>
                  <p className="text-on-surface-variant font-body-md text-body-md text-sm leading-relaxed mb-6">
                    {product.description}
                  </p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => addItem(product)}
                      className="flex-1 bg-almi-blue text-white font-label-bold text-label-bold py-3 px-4 transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,71,204,0.4)] active:scale-[0.97] flex items-center justify-center gap-2"
                    >
                      <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                      Añadir
                    </button>
                    <Link
                      to={`/product/${product.id}`}
                      className="px-4 py-3 border border-gray-200 text-on-surface hover:border-almi-blue hover:text-almi-blue transition-colors duration-300 flex items-center"
                    >
                      <span className="material-symbols-outlined text-sm">open_in_new</span>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ═══ FEATURES ═══ */}
      <section id="features" className="py-section-gap bg-almi-beige/40">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-20">
            <ScrollReveal>
              <span className="text-[11px] font-label-bold text-almi-blue tracking-[0.25em] uppercase mb-4 inline-block">
                Tecnología
              </span>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">
                Ingeniería sin <span className="text-almi-blue">compromisos.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={160}>
              <p className="text-on-surface-variant font-body-lg text-body-lg max-w-lg mx-auto">
                Cada componente ha sido seleccionado meticulosamente para ofrecer una experiencia
                sonora que desafía su categoría.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 100}>
                <div className="group relative bg-white border border-gray-200 p-8 transition-all duration-500 hover:shadow-xl hover:shadow-almi-blue/8 hover:-translate-y-1 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-almi-blue/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Big stat in background */}
                  <div className="absolute bottom-4 right-4 font-headline-lg text-[48px] font-black text-almi-blue/5 leading-none pointer-events-none select-none">
                    {f.stat}
                  </div>

                  <div className="flex justify-between items-start mb-6">
                    <span className="material-symbols-outlined text-2xl text-almi-blue">{f.icon}</span>
                    <span className="text-[10px] font-label-bold text-almi-blue/60 tracking-widest uppercase border border-almi-blue/20 px-2 py-1">
                      {f.stat}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm mb-3 text-on-surface">{f.title}</h3>
                  <p className="text-on-surface-variant font-body-md text-body-md leading-relaxed text-sm">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SOUND QUALITY ═══ */}
      <section className="relative py-section-gap overflow-hidden bg-almi-black">
        <div className="absolute inset-0 bg-gradient-to-br from-almi-blue/5 via-transparent to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <ScrollReveal>
                <div className="aspect-[4/3] relative overflow-hidden bg-white/[0.03] border border-white/[0.06]">
                  {/* Animated wave visualization */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-48 h-48">
                      <div className="absolute inset-0 border border-almi-blue/20 rounded-full animate-pulse-glow" />
                      <div className="absolute inset-6 border border-almi-blue/15 rounded-full animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
                      <div className="absolute inset-12 border border-almi-blue/25 rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }} />
                      <div className="absolute inset-16 bg-almi-blue/10 rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-3xl text-almi-blue/60">music_note</span>
                      </div>
                    </div>
                  </div>
                  {/* Frequency bars */}
                  <div className="absolute bottom-8 left-8 right-8 flex items-end gap-1 h-12">
                    {[40, 70, 55, 90, 65, 80, 45, 75, 60, 85, 50, 70, 40, 65, 55].map((h, idx) => (
                      <div
                        key={idx}
                        className="flex-1 bg-almi-blue/30 rounded-sm animate-pulse"
                        style={{ height: `${h}%`, animationDelay: `${idx * 0.1}s` }}
                      />
                    ))}
                  </div>
                  <div className="absolute top-6 left-6 text-[9px] font-label-sm text-white/20 uppercase tracking-widest">
                    Spectrum Analyzer
                  </div>
                </div>
              </ScrollReveal>
            </div>
            <div className="order-1 lg:order-2">
              <ScrollReveal>
                <span className="text-[11px] font-label-bold text-almi-blue tracking-[0.25em] uppercase mb-4 inline-block">
                  Calidad de Sonido
                </span>
              </ScrollReveal>
              <ScrollReveal delay={80}>
                <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white mb-6">
                  Escucha lo que{' '}
                  <span className="text-almi-blue">olvidaste</span>{' '}
                  que existía.
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={160}>
                <p className="text-white/55 font-body-lg text-body-lg leading-relaxed mb-8">
                  Drivers de 40mm con imanes de neodimio y diafragmas de poliuretano ultradelgado.
                  Respuesta plana de 20Hz a 40kHz con soporte LDAC para streaming de 24-bit.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={240}>
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {specs.slice(0, 3).map((s) => (
                    <div key={s.label} className="border-l border-almi-blue/30 pl-4">
                      <div className="text-2xl font-headline-md text-almi-blue mb-1">{s.value}</div>
                      <div className="text-[10px] font-label-sm text-white/35 uppercase tracking-wider leading-tight">{s.label}</div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-3 bg-almi-blue text-white font-label-bold text-label-bold py-3.5 px-8 transition-all duration-300 hover:shadow-[0_0_35px_rgba(0,71,204,0.5)] active:scale-[0.97]"
                >
                  Descubrir audífonos
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
=======
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
>>>>>>> a9020a046eb16794cde1d6bca73b605bfbe9e19f
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ NOISE CANCELLATION ═══ */}
      <section className="relative py-section-gap overflow-hidden bg-almi-beige">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-almi-blue/[0.02]" />
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <ScrollReveal>
                <span className="text-[11px] font-label-bold text-almi-blue tracking-[0.25em] uppercase mb-4 inline-block">
                  Cancelación de Ruido
                </span>
              </ScrollReveal>
              <ScrollReveal delay={80}>
                <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-almi-black mb-6">
                  Silencio,{' '}
                  <span className="text-almi-blue">se hace música.</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={160}>
                <p className="text-almi-black/55 font-body-lg text-body-lg leading-relaxed mb-8">
                  Sistema ANC híbrido con 4 micrófonos feedforward y feedback. Algoritmos de machine
                  learning que se adaptan a tu entorno en tiempo real. Del metro al estudio,
                  el mundo desaparece.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={240}>
                <div className="grid grid-cols-3 gap-8 mb-8">
                  {[
                    { value: '-42dB', label: 'Atenuación máxima' },
                    { value: '4', label: 'Micrófonos ANC' },
                    { value: '98%', label: 'Ruido ambiental' },
                  ].map((s) => (
                    <div key={s.label} className="border-l-2 border-almi-blue pl-4">
                      <div className="text-3xl font-headline-md text-almi-blue">{s.value}</div>
                      <div className="text-[10px] font-label-sm text-almi-black/40 uppercase tracking-wider mt-1 leading-tight">{s.label}</div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
              <ScrollReveal delay={290}>
                <div className="inline-flex items-center gap-3 bg-white/60 border border-white/80 px-5 py-3">
                  <span className="w-2 h-2 rounded-full bg-almi-blue animate-pulse" />
                  <span className="text-[11px] font-label-bold text-almi-black/70 tracking-wider uppercase">
                    Cancelación hasta 42dB
                  </span>
                </div>
              </ScrollReveal>
            </div>
            <div>
              <ScrollReveal delay={100}>
                <div className="aspect-[4/3] relative overflow-hidden bg-white/50 border border-white/70">
                  {/* ANC visualization */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full border-2 border-almi-blue/20 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full border border-almi-blue/30 flex items-center justify-center">
                          <div className="w-10 h-10 rounded-full bg-almi-blue/15 flex items-center justify-center">
                            <span className="material-symbols-outlined text-xl text-almi-blue/50">do_not_disturb_on</span>
                          </div>
                        </div>
                      </div>
                      {/* Animated noise waves being cancelled */}
                      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                        <div
                          key={deg}
                          className="absolute inset-0 flex items-center justify-center"
                          style={{ transform: `rotate(${deg}deg)` }}
                        >
                          <div
                            className="w-1 h-1 rounded-full bg-almi-blue/25 animate-pulse"
                            style={{ transform: 'translateY(-68px)', animationDelay: `${deg * 0.005}s` }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-0 right-0 text-center">
                    <span className="text-[9px] font-label-sm text-almi-black/25 uppercase tracking-widest">ANC Adaptive</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BATTERY ═══ */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="relative aspect-[4/3] bg-almi-black overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="relative inline-block">
                    <span className="material-symbols-outlined text-[120px] text-almi-blue/15">battery_full</span>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-5xl font-black text-almi-blue tracking-tighter">40h</div>
                        <div className="text-[9px] text-white/30 uppercase tracking-widest mt-1">Autonomía</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
<<<<<<< HEAD
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-almi-blue/30 via-almi-blue to-almi-blue/30" />
              <div className="absolute top-6 left-6 text-[9px] font-label-sm text-white/20 uppercase tracking-widest">
                Carga rápida USB-C
              </div>
            </div>
          </ScrollReveal>
          <div>
            <ScrollReveal>
              <span className="text-[11px] font-label-bold text-almi-blue tracking-[0.25em] uppercase mb-4 inline-block">
                Batería
              </span>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6">
                40 Horas.{' '}
                <span className="text-almi-blue">Sin límites.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={160}>
              <p className="text-on-surface-variant font-body-lg text-body-lg leading-relaxed mb-10">
                Batería de larga duración con carga rápida USB-C. 10 minutos de carga te dan 4 horas
                de reproducción. Olvídate de la ansiedad por batería.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={240}>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '40h', label: 'Reproducción' },
                  { value: '10min', label: '= 4h de uso' },
                  { value: '2w', label: 'Standby' },
                ].map((s) => (
                  <div key={s.label} className="bg-white/80 border border-gray-200 p-6 text-center hover:border-almi-blue/30 transition-colors duration-300">
                    <div className="text-3xl font-headline-md text-almi-blue mb-1">{s.value}</div>
                    <div className="text-[10px] font-label-sm text-on-surface-variant uppercase tracking-wider">{s.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
=======
            </div>
            <div className="order-1 md:order-2 bg-secondary-fixed/50 rounded-xl p-6 md:p-12 flex items-center justify-center">
              <img
                alt={featured.name}
                className="w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] object-contain hover:scale-105 transition-transform duration-700"
                src={featured.imageUrl}
              />
            </div>
>>>>>>> a9020a046eb16794cde1d6bca73b605bfbe9e19f
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* ═══ CONNECTIVITY ═══ */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <ScrollReveal>
              <span className="text-[11px] font-label-bold text-almi-blue tracking-[0.25em] uppercase mb-4 inline-block">
                Conectividad
              </span>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6">
                Compatible con{' '}
                <span className="text-almi-blue">todo.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={160}>
              <p className="text-on-surface-variant font-body-lg text-body-lg leading-relaxed mb-8">
                Bluetooth 5.3 con conexión multipunto. Conecta hasta 3 dispositivos simultáneamente.
                Compatible con iOS, Android, Windows, Mac y cualquier dispositivo Bluetooth.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={240}>
              <div className="flex flex-wrap gap-2">
                {['iOS', 'Android', 'Windows', 'macOS', 'Linux', 'PS5', 'Switch', 'PC'].map((p) => (
                  <span
                    key={p}
                    className="text-[10px] font-label-bold tracking-wider uppercase px-4 py-2.5 bg-almi-blue text-white hover:bg-almi-blue/90 transition-colors duration-200"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
          <div className="order-1 lg:order-2">
            <ScrollReveal>
              <div className="aspect-[4/3] relative overflow-hidden bg-almi-black border border-white/8">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <span className="material-symbols-outlined text-[80px] text-almi-blue/20">bluetooth</span>
                    {/* Connection dots */}
                    {[[-80, -40], [80, -40], [0, 85], [-70, 55], [70, 55]].map(([x, y], idx) => (
                      <div
                        key={idx}
                        className="absolute w-2 h-2 rounded-full bg-almi-blue/40 animate-pulse"
                        style={{
                          left: '50%',
                          top: '50%',
                          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                          animationDelay: `${idx * 0.3}s`,
                        }}
                      />
                    ))}
                    {/* Connection lines */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-48 h-48 rounded-full border border-almi-blue/10 animate-pulse" style={{ animationDelay: '0.5s' }} />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-6 left-0 right-0 text-center">
                  <span className="text-[9px] font-label-sm text-white/25 uppercase tracking-widest">Bluetooth 5.3</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ SPECS TABLE ═══ */}
      <section className="py-section-gap bg-almi-beige/30 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-16">
            <ScrollReveal>
              <span className="text-[11px] font-label-bold text-almi-blue tracking-[0.25em] uppercase mb-4 inline-block">
                Ficha Técnica
              </span>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
                Especificaciones <span className="text-almi-blue">completas.</span>
              </h2>
            </ScrollReveal>
          </div>

          <div className="max-w-3xl mx-auto">
            {specs.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 60}>
                <div
                  className={`flex justify-between items-center py-5 px-8 border-b border-gray-200 hover:bg-almi-blue/[0.03] transition-colors duration-300 group ${
                    i % 2 === 0 ? 'bg-white/60' : 'bg-white/30'
                  }`}
                >
                  <span className="text-[11px] font-label-bold text-on-surface-variant uppercase tracking-wider group-hover:text-almi-blue transition-colors duration-300">
                    {s.label}
                  </span>
                  <span className="font-headline-sm text-headline-sm text-almi-blue font-semibold">
                    {s.value}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="text-[11px] font-label-bold text-almi-blue tracking-[0.25em] uppercase mb-4 inline-block">
              Testimonios
            </span>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface">
              Lo que dicen{' '}
              <span className="text-almi-blue">los que escuchan.</span>
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 100}>
              <div className="relative bg-white border border-gray-200 p-8 transition-all duration-500 hover:shadow-xl hover:shadow-almi-blue/5 hover:-translate-y-1 group">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-almi-blue/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Quote mark */}
                <div className="text-5xl font-black text-almi-blue/10 leading-none mb-4 font-headline-lg select-none">&ldquo;</div>
                
                <StarRating count={t.rating} />
                
                <p className="text-on-surface-variant font-body-md text-body-md leading-relaxed my-5 italic text-sm">
                  {t.text}
                </p>
                <div className="pt-5 border-t border-gray-100">
                  <div className="font-headline-sm text-sm text-on-surface font-semibold">{t.name}</div>
                  <div className="text-[10px] font-label-sm text-on-surface-variant uppercase tracking-wider mt-0.5">{t.role}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ═══ CTA FINAL ═══ */}
      <section className="relative py-section-gap overflow-hidden bg-almi-black">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-almi-blue/4 rounded-full blur-[160px]" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-almi-blue/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-almi-blue/20 to-transparent" />
        </div>

        {/* Side accents */}
        <div className="absolute left-16 top-1/2 -translate-y-1/2 hidden lg:block">
          <div className="flex flex-col gap-2">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-px h-8 bg-almi-blue/20" />
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center px-margin-mobile">
          <ScrollReveal>
            <span className="text-[11px] font-label-bold text-almi-blue tracking-[0.25em] uppercase mb-6 inline-block">
              Última Oportunidad
            </span>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white mb-6 leading-tight">
              El futuro del audio está{' '}
              <br />
              <span className="text-almi-blue">a un clic de distancia.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={160}>
            <p className="text-white/45 font-body-lg text-body-lg max-w-lg mx-auto mb-4">
              Envío gratis. Devolución en 30 días. Garantía de 2 años.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="flex items-center justify-center gap-6 mb-10">
              {[
                { icon: 'local_shipping', label: 'Envío gratis' },
                { icon: 'replay', label: '30 días de devolución' },
                { icon: 'verified_user', label: '2 años garantía' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-white/40">
                  <span className="material-symbols-outlined text-base text-almi-blue/60">{item.icon}</span>
                  <span className="text-[10px] font-label-sm uppercase tracking-wider hidden sm:block">{item.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal delay={280}>
            <Link
              to="/products"
              className="relative bg-almi-blue text-white font-label-bold text-label-bold py-5 px-14 transition-all duration-300 hover:shadow-[0_0_60px_rgba(0,71,204,0.6)] active:scale-[0.97] inline-flex items-center gap-3 overflow-hidden group"
            >
              <span className="relative z-10">Comprar Ahora</span>
              <span className="material-symbols-outlined text-base relative z-10">arrow_forward</span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>
          </ScrollReveal>
=======
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
>>>>>>> a9020a046eb16794cde1d6bca73b605bfbe9e19f
        </div>
      </section>
    </main>
  )
}
