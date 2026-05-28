import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { products } from '../data/products'

export default function Products() {
  const { addItem } = useCart()
  const featured = products[2]
  const grid = products.filter((p) => p.id !== featured.id)

  return (
    <main className="pt-24 pb-32">
      {/* Hero Section for Products */}
      <section className="px-margin-mobile md:px-margin-desktop mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="font-label-bold text-label-bold text-primary uppercase tracking-widest mb-4 block">
              Engineered Sound
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6">
              Our Products
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Merging high-fidelity engineering with minimalist design. Explore the ALMI ecosystem of sound architecture.
            </p>
          </div>
          <div className="hidden md:flex gap-4">
            <button className="w-12 h-12 rounded-full border border-outline flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <span className="material-symbols-outlined">west</span>
            </button>
            <button className="w-12 h-12 rounded-full border border-outline flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <span className="material-symbols-outlined">east</span>
            </button>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Main Featured */}
          <div className="md:col-span-8 group">
            <Link to={`/product/${featured.id}`}>
              <div className="product-card-hover relative h-[500px] md:h-[600px] bg-secondary-fixed overflow-hidden flex flex-col justify-end p-8">
                <div className="absolute inset-0 w-full h-full bg-secondary-fixed" />
                <div className="relative z-10 bg-white/10 backdrop-blur-xl p-8 border border-white/20">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-headline-md text-headline-md text-white mb-2">{featured.name}</h3>
                      <p className="text-white/80 font-body-md uppercase tracking-tight">{featured.description}</p>
                    </div>
                    <span className="font-headline-md text-headline-md text-white">${featured.price}</span>
                  </div>
                  <button
                    onClick={(e) => { e.preventDefault(); addItem(featured) }}
                    className="w-full bg-primary text-white py-4 font-label-bold text-label-bold hover:bg-primary-container transition-colors active:scale-95 duration-200"
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </Link>
          </div>

          {/* Grid Items */}
          {grid.map((product, i) => (
            <div key={product.id} className={`${i < 2 ? 'md:col-span-4' : 'md:col-span-4'} group`}>
              <div className="product-card-hover h-full bg-surface-container-high p-8 flex flex-col justify-between">
                <Link to={`/product/${product.id}`} className="flex flex-col flex-1">
                  <div className="aspect-square w-full mb-8 relative">
                    <img
                      alt={product.name}
                      className="w-full h-full object-contain mix-blend-multiply"
                      src={product.imageUrl}
                    />
                  </div>
                  <div className="flex-1">
                    {product.isNew && (
                      <span className="inline-block px-3 py-1 bg-tertiary-container text-on-tertiary-container text-label-sm font-label-bold mb-4">
                        NEW
                      </span>
                    )}
                    <h3 className="font-headline-md text-headline-lg-mobile text-on-surface mb-2">{product.name}</h3>
                    <p className="text-on-surface-variant font-body-md mb-6">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-label-bold text-label-bold text-primary">${product.price}</span>
                    </div>
                  </div>
                </Link>
                <button
                  onClick={() => addItem(product)}
                  className="w-full border-2 border-primary text-primary py-3 font-label-bold text-label-bold hover:bg-primary hover:text-white transition-all active:scale-95 duration-200 mt-4"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
