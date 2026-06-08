import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { products } from '../data/products'

export default function Cart() {
  const { items, removeItem, updateQuantity, subtotal } = useCart()
  const tax = subtotal * 0.08
  const total = subtotal + tax

  if (items.length === 0) {
    return (
    <main className="pt-20 md:pt-24 pb-[120px] md:pb-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-headline-lg font-headline-lg mb-10 md:mb-16">Your Bag</h1>
        <div className="text-center py-16 md:py-20 max-w-md mx-auto px-4">
          <span className="material-symbols-outlined text-5xl md:text-7xl text-outline-variant mb-4 md:mb-6 block">shopping_bag</span>
          <h2 className="text-headline-sm font-headline-sm mb-2 md:mb-3">Your bag is empty</h2>
          <p className="text-body-sm md:text-body-md font-body-md text-on-surface-variant mb-8 md:mb-10">
            Explore our lineup and find something you love.
          </p>
          <Link
            to="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-on-primary text-label-bold font-label-bold px-6 md:px-8 py-3.5 md:py-4 hover:opacity-90 transition-opacity"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Continue Shopping
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="pt-20 md:pt-24 pb-28 md:pb-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-headline-lg font-headline-lg mb-8 md:mb-12">Your Bag</h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
        {/* ───── Items ───── */}
        <div className="lg:col-span-7 space-y-4 md:space-y-6">
          {items.map((item) => (
            <div
              key={item.product.id}
              className="flex flex-col sm:flex-row gap-4 md:gap-6 p-4 md:p-6 bg-white border border-outline-variant/20 hover:border-outline-variant/40 transition-colors"
            >
              <Link to={`/product/${item.product.id}`} className="w-full sm:w-24 md:w-32 h-24 md:h-32 bg-secondary-fixed/30 rounded-lg flex items-center justify-center p-3 md:p-4 shrink-0">
                <img
                  alt={item.product.name}
                  className="max-w-full max-h-full object-contain"
                  src={item.product.imageUrl}
                />
              </Link>
              <div className="flex flex-col justify-between flex-1 gap-3 md:gap-4">
                <div className="flex justify-between items-start gap-3 md:gap-4">
                  <div className="min-w-0 flex-1">
                    <Link to={`/product/${item.product.id}`}>
                      <h3 className="text-body-md md:text-body-lg font-body-lg text-on-surface font-medium hover:text-primary transition-colors">
                        {item.product.name}
                      </h3>
                    </Link>
                    {item.color && (
                      <p className="text-body-sm font-body-sm text-on-surface-variant mt-0.5">Color: {item.color}</p>
                    )}
                  </div>
                  <span className="text-body-md md:text-body-lg font-body-lg text-on-surface font-medium whitespace-nowrap shrink-0">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center border border-outline-variant/40">
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="p-1.5 md:p-2 hover:bg-surface-container-low transition-colors active:bg-surface-container"
                      aria-label="Decrease quantity"
                    >
                      <span className="material-symbols-outlined text-[16px] block">remove</span>
                    </button>
                    <span className="w-8 md:w-10 text-center text-body-sm font-body-sm font-medium select-none">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="p-1.5 md:p-2 hover:bg-surface-container-low transition-colors active:bg-surface-container"
                      aria-label="Increase quantity"
                    >
                      <span className="material-symbols-outlined text-[16px] block">add</span>
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.product.id)}
                    className="flex items-center gap-1 md:gap-1.5 text-body-sm font-body-sm text-on-surface-variant hover:text-error transition-colors active:text-error p-1"
                    aria-label="Remove item"
                  >
                    <span className="material-symbols-outlined text-[16px] md:text-[18px]">delete</span>
                    <span className="hidden sm:inline">Remove</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ───── Summary ───── */}
        <div className="lg:col-span-5">
          <div className="bg-white border border-outline-variant/20 p-5 md:p-8 lg:sticky lg:top-28">
            <h2 className="text-headline-sm font-headline-sm text-on-surface mb-6 md:mb-8 border-b border-outline-variant/20 pb-4 md:pb-5">
              Order Summary
            </h2>

            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              <div className="flex justify-between text-body-sm md:text-body-md font-body-md">
                <span className="text-on-surface-variant">Subtotal</span>
                <span className="text-on-surface font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-body-sm md:text-body-md font-body-md">
                <span className="text-on-surface-variant">Shipping</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>
              <div className="flex justify-between text-body-sm md:text-body-md font-body-md">
                <span className="text-on-surface-variant">Estimated Tax</span>
                <span className="text-on-surface font-medium">${tax.toFixed(2)}</span>
              </div>
            </div>

            <div className="flex justify-between items-center pt-5 md:pt-6 border-t border-on-surface/10 mb-6 md:mb-8">
              <span className="text-headline-sm font-headline-sm text-on-surface">Total</span>
              <span className="text-headline-sm font-headline-sm text-primary">${total.toFixed(2)}</span>
            </div>

            <button className="w-full bg-primary text-on-primary text-label-bold font-label-bold py-3.5 md:py-4 active:scale-[0.98] transition-transform flex items-center justify-center gap-2 hover:opacity-90">
              Checkout
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>

            <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-outline-variant/20 space-y-3 md:space-y-4">
              <div className="flex items-center gap-2 md:gap-3 text-body-sm font-body-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-[18px] shrink-0">verified</span>
                <span>Secure encrypted checkout</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3 text-body-sm font-body-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-[18px] shrink-0">local_shipping</span>
                <span>Free carbon-neutral delivery</span>
              </div>
              <div className="flex items-center gap-2 md:gap-3 text-body-sm font-body-sm text-on-surface-variant">
                <span className="material-symbols-outlined text-[18px] shrink-0">replay</span>
                <span>30-day return policy</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ───── You Might Also Like ───── */}
      <section className="mt-16 md:mt-section-gap">
        <h2 className="text-headline-sm font-headline-sm mb-6 md:mb-10">Complete the Kit</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
          {products.slice(0, 4).map((p) => (
            <Link
              key={p.id}
              to={`/product/${p.id}`}
              className="group bg-white border border-outline-variant/20 hover:border-outline-variant/40 transition-all p-3 md:p-6"
            >
              <div className="aspect-square mb-2 md:mb-4 flex items-center justify-center bg-secondary-fixed/30 rounded-lg p-3 md:p-4">
                <img alt={p.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform" src={p.imageUrl} />
              </div>
              <h3 className="text-[11px] md:text-body-sm font-body-sm text-on-surface font-medium mb-0.5 md:mb-1 leading-tight">{p.name}</h3>
              <span className="text-body-sm md:text-body-sm font-body-sm text-primary">${p.price}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
