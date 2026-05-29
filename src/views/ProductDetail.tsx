import { useParams, Link } from 'react-router-dom'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>()
  const { addItem } = useCart()
  const product = products.find((p) => p.id === id)

  if (!product) {
    return (
      <main className="pt-24 pb-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
        <span className="material-symbols-outlined text-5xl md:text-6xl text-outline-variant mb-4 block mt-20">headphones</span>
        <h2 className="text-headline-sm md:text-headline-md font-headline-md mb-4">Product not found</h2>
        <Link to="/products" className="text-primary text-label-bold font-label-bold underline underline-offset-4">
          Back to products
        </Link>
      </main>
    )
  }

  return (
    <main className="pt-16 md:pt-20 pb-[136px] md:pb-32">
      {/* ───── Hero / Gallery ───── */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-12 md:mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-start">
          {/* Image */}
          <div className="bg-[#F5F2EA] rounded-xl flex items-center justify-center min-h-[300px] md:min-h-[600px] p-8 md:p-12 md:sticky md:top-28">
            <img
              alt={product.name}
              className="w-full max-w-[280px] sm:max-w-[360px] md:max-w-[420px] h-auto object-contain animate-scale-in"
              src={product.imageUrl}
            />
          </div>

          {/* Info */}
          <div className="space-y-6 md:space-y-10">
            <div>
              {product.isNew && (
                <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-[10px] md:text-label-sm font-label-sm tracking-wider uppercase px-3 md:px-4 py-1 md:py-1.5 rounded-full mb-3 md:mb-5">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                  New Arrival
                </span>
              )}
              <h1 className="text-2xl sm:text-3xl md:text-headline-lg font-headline-lg text-on-surface leading-tight mb-2 md:mb-3">
                {product.name}
              </h1>
              <p className="text-body-md md:text-body-lg font-body-lg text-on-surface-variant leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Pricing */}
            <div className="flex items-baseline gap-3 md:gap-4">
              <span className="text-3xl sm:text-4xl md:text-[48px] font-headline-lg font-bold text-primary leading-none">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-body-md md:text-body-lg font-body-lg text-on-surface-variant line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            {/* Features Grid */}
            {product.features && (
              <div className="grid grid-cols-2 gap-2 md:gap-3">
                {product.features.map((feat) => (
                  <div
                    key={feat}
                    className="bg-surface-container-low border border-outline-variant/30 p-3 md:p-4 flex flex-col items-center text-center gap-1 md:gap-2"
                  >
                    <span className="material-symbols-outlined text-primary text-xl md:text-2xl">check_circle</span>
                    <span className="text-[11px] md:text-body-sm font-body-sm text-on-surface font-medium leading-tight">{feat}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Colors */}
            {product.colors && (
              <div>
                <p className="text-[10px] md:text-label-sm font-label-sm text-on-surface uppercase tracking-wider mb-2 md:mb-3">
                  Choose Color
                </p>
                <div className="flex gap-3 md:gap-4">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      aria-label={c.name}
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-outline-variant/50 hover:border-primary transition-colors ring-2 ring-transparent hover:ring-primary/20"
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Description */}
            <div className="border-t border-outline-variant/20 pt-6 md:pt-8">
              <p className="text-body-sm md:text-body-md font-body-md text-on-surface-variant leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Specs */}
            {product.specs && (
              <div className="border-t border-outline-variant/20 pt-6 md:pt-8">
                <p className="text-[10px] md:text-label-sm font-label-sm text-on-surface uppercase tracking-wider mb-4 md:mb-5">
                  Specifications
                </p>
                <div className="space-y-2 md:space-y-3">
                  {product.specs.map((spec) => (
                    <div key={spec.label} className="flex justify-between py-2 md:py-3 border-b border-outline-variant/10">
                      <span className="text-body-sm font-body-sm text-on-surface-variant">{spec.label}</span>
                      <span className="text-body-sm font-body-sm text-on-surface font-medium text-right ml-4">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Rating */}
            <div className="flex items-center gap-1 md:gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className="material-symbols-outlined text-[18px] md:text-[20px] text-primary"
                  style={{ fontVariationSettings: i < Math.floor(product.rating) ? "'FILL' 1" : "'FILL' 0" }}
                >
                  star
                </span>
              ))}
              <span className="text-body-sm font-body-sm text-on-surface-variant ml-1">{product.rating}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Sticky Action Bar ───── */}
      <div className="fixed bottom-14 md:bottom-0 left-0 w-full z-40 bg-surface/90 backdrop-blur-xl border-t border-outline-variant/30">
        <div className="max-w-container-max mx-auto flex items-center justify-between px-margin-mobile md:px-margin-desktop py-3 md:py-4">
          <div className="hidden sm:block">
            <span className="text-body-sm font-body-sm text-on-surface-variant">Total</span>
            <span className="text-headline-sm font-headline-sm text-on-surface block leading-tight">${product.price}.00</span>
          </div>
          <div className="flex gap-2 md:gap-3 w-full sm:w-auto">
            <button className="hidden md:flex items-center gap-2 text-label-sm font-label-sm text-on-surface-variant border border-outline-variant/50 px-5 md:px-6 py-2.5 md:py-3 hover:border-outline-variant transition-colors">
              <span className="material-symbols-outlined text-[18px]">favorite</span>
              Wishlist
            </button>
            <button
              onClick={() => addItem(product)}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-primary text-on-primary text-label-bold font-label-bold px-6 md:px-8 py-3 md:py-3 hover:opacity-90 active:scale-[0.97] transition-all duration-200"
            >
              <span className="material-symbols-outlined text-[18px]">add_shopping_cart</span>
              <span className="hidden xs:inline">Add to Cart</span>
              <span className="xs:hidden">Add</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
