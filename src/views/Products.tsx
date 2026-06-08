import { Link } from 'react-router-dom'
import { products } from '../data/products'

const categories = ['All', 'Headphones', 'Earbuds', 'Speakers', 'Wearables']

export default function Products() {
  return (
    <main className="pt-20 md:pt-24 pb-[120px] md:pb-32">
      {/* ───── Header ───── */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-10 md:mb-16">
        <span className="text-[10px] md:text-label-sm font-label-sm text-primary tracking-[0.3em] uppercase block mb-3 md:mb-4">
          Engineered Sound
        </span>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6">
          <div className="max-w-xl">
            <h1 className="text-2xl sm:text-3xl md:text-headline-lg font-headline-lg text-on-surface mb-3 md:mb-4 leading-tight">
              Our Products
            </h1>
            <p className="text-body-md md:text-body-lg font-body-lg text-on-surface-variant">
              Merging high-fidelity engineering with minimalist design. Explore the ALMI ecosystem of sound architecture.
            </p>
          </div>
        </div>
      </section>

      {/* ───── Category Filter ───── */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-8 md:mb-12 overflow-x-auto -mx-margin-mobile md:mx-auto">
        <div className="flex gap-2 md:gap-3 pb-2 px-margin-mobile md:px-0 w-max md:w-full">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 md:px-6 py-2 md:py-2.5 text-[11px] md:text-label-sm font-label-sm tracking-wider uppercase whitespace-nowrap transition-all duration-200 ${
                cat === 'All'
                  ? 'bg-primary text-on-primary'
                  : 'bg-transparent border border-outline-variant/50 text-on-surface-variant hover:border-outline-variant hover:text-on-surface'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ───── Product Grid ───── */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 stagger-children">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group bg-white border border-outline-variant/30 hover:border-outline-variant/60 transition-all duration-300 p-5 md:p-8 flex flex-col"
            >
              <div className="aspect-square mb-4 md:mb-6 flex items-center justify-center bg-secondary-fixed/30 rounded-lg p-6 md:p-8">
                <img
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  src={product.imageUrl}
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1 md:mb-2 flex-wrap">
                  {product.isNew && (
                    <span className="text-[10px] md:text-label-sm font-label-sm text-primary tracking-wider uppercase">New</span>
                  )}
                  {product.isTopRated && (
                    <span className="text-[10px] md:text-label-sm font-label-sm text-tertiary tracking-wider uppercase">Top Rated</span>
                  )}
                </div>
                <h3 className="text-lg md:text-headline-sm font-headline-sm text-on-surface mb-1 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant mb-3 md:mb-4 line-clamp-2">{product.description}</p>
              </div>
              <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-outline-variant/20">
                <span className="text-lg md:text-headline-sm font-headline-sm text-primary">${product.price}</span>
                <span className="text-body-sm font-body-sm text-on-surface-variant group-hover:text-primary transition-colors flex items-center gap-1">
                  Details
                  <span className="material-symbols-outlined text-[14px] md:text-[16px]">arrow_forward</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
