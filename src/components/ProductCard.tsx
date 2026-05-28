import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import type { Product } from '../types'

interface ProductCardProps {
  product: Product
  variant?: 'default' | 'bento' | 'compact'
}

export default function ProductCard({ product, variant = 'default' }: ProductCardProps) {
  const { addItem } = useCart()

  if (variant === 'bento') {
    return (
      <div className="bg-secondary-fixed p-10 flex flex-col justify-between group cursor-pointer scroll-reveal">
        <div>
          {product.isTopRated && (
            <span className="inline-block py-1 px-3 bg-primary text-white text-[10px] font-bold tracking-tighter uppercase mb-4">
              Top Rated
            </span>
          )}
          {product.isNew && !product.isTopRated && (
            <span className="inline-block py-1 px-3 bg-primary text-white text-[10px] font-bold tracking-tighter uppercase mb-4">
              New
            </span>
          )}
          <h5 className="font-headline-md text-on-surface">{product.name}</h5>
          <p className="text-on-surface-variant mt-2 max-w-xs">{product.description}</p>
        </div>
        <div className="py-12 flex justify-center">
          <img
            alt={product.name}
            className="w-full max-w-[300px] object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
            src={product.imageUrl}
          />
        </div>
        <div className="flex justify-between items-center">
          <span className="font-headline-md text-primary">${product.price}</span>
          <button
            onClick={() => addItem(product)}
            className="w-12 h-12 bg-white border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined">add_shopping_cart</span>
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="product-card-hover h-full bg-surface-container-high p-8 flex flex-col justify-between group">
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
  )
}
