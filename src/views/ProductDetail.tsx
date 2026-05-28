import { useParams, Link } from 'react-router-dom'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>()
  const { addItem } = useCart()
  const product = products.find((p) => p.id === id)

  if (!product) {
    return (
      <main className="pt-24 pb-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <p className="font-headline-md text-headline-md">Product not found</p>
        <Link to="/products" className="text-primary font-label-bold mt-4 inline-block">
          Back to products
        </Link>
      </main>
    )
  }

  return (
    <main className="pt-24 pb-32">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 md:gap-gutter items-start">
        {/* Product Showcase */}
        <div className="md:col-span-7 space-y-gutter">
          <div className="bg-[#F5F2EA] flex items-center justify-center min-h-[400px] md:min-h-[600px] rounded-lg overflow-hidden relative">
            <img
              alt={product.name}
              className="w-4/5 h-auto object-contain"
              style={{ filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.05))' }}
              src={product.imageUrl}
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="md:col-span-5 mt-base md:mt-0 space-y-8 sticky top-28">
          <div>
            {product.isNew && (
              <span className="font-label-bold text-label-bold text-primary-container bg-primary-fixed py-1 px-3 rounded-full mb-4 inline-block">
                NEW ARRIVAL
              </span>
            )}
            <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface leading-tight">
              {product.name}
            </h1>
            <p className="font-body-lg text-body-lg text-secondary mt-2">{product.description}</p>
          </div>

          {/* Features grid */}
          {product.features && (
            <div className="grid grid-cols-2 gap-4">
              {product.features.map((feat) => (
                <div
                  key={feat}
                  className="border border-outline-variant p-4 flex flex-col items-center text-center space-y-2 group hover:border-primary transition-colors cursor-default"
                >
                  <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                  <span className="font-label-bold text-label-sm text-on-surface">{feat}</span>
                </div>
              ))}
            </div>
          )}

          {/* Colors */}
          {product.colors && (
            <div className="space-y-4">
              <p className="font-label-bold text-label-bold text-on-surface">COLOR</p>
              <div className="flex gap-4">
                {product.colors.map((c) => (
                  <button
                    key={c.name}
                    aria-label={c.name}
                    className="w-12 h-12 rounded-full border-2 border-primary bg-white ring-4 ring-background p-1"
                    style={{ backgroundColor: c.hex, borderColor: c.hex === '#ffffff' ? '#c3c6d6' : c.hex }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Specs */}
          {product.specs && (
            <div className="space-y-4 border-t border-outline-variant pt-8">
              <p className="font-label-bold text-label-bold text-on-surface uppercase tracking-widest">Specifications</p>
              <div className="space-y-3">
                {product.specs.map((spec) => (
                  <div key={spec.label} className="flex justify-between py-2 border-b border-outline-variant/50">
                    <span className="text-on-surface-variant font-body-md">{spec.label}</span>
                    <span className="font-label-bold text-on-surface">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Description */}
          <div className="space-y-4 border-t border-outline-variant pt-8">
            <p className="font-label-bold text-label-bold text-on-surface uppercase tracking-widest">Description</p>
            <p className="font-body-md text-body-md text-on-surface-variant">{product.description}</p>
          </div>
        </div>
      </div>

      {/* Pricing & Action Bar */}
      <div className="fixed bottom-0 left-0 w-full z-50 bg-surface/95 backdrop-blur-md border-t border-outline-variant px-margin-mobile py-4 md:py-6 md:px-margin-desktop">
        <div className="max-w-container-max mx-auto flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-label-bold text-label-sm text-secondary">TOTAL PRICE</span>
            <span className="font-headline-md text-headline-md text-on-surface">${product.price}.00</span>
          </div>
          <div className="flex gap-4 items-center">
            <button className="hidden md:flex font-label-bold text-label-bold text-primary border border-primary px-8 py-4 items-center justify-center hover:bg-primary/5 transition-colors">
              WISHLIST
            </button>
            <button
              onClick={() => addItem(product)}
              className="font-label-bold text-label-bold text-on-primary bg-primary px-12 py-4 active:scale-95 transition-all duration-200"
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
