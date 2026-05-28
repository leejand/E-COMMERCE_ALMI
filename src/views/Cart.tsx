import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { products } from '../data/products'

export default function Cart() {
  const { items, removeItem, updateQuantity, subtotal } = useCart()
  const tax = subtotal * 0.08
  const total = subtotal + tax

  return (
    <main className="pt-24 pb-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-12">Shopping Cart</h1>

      {items.length === 0 ? (
        <div className="text-center py-20">
          <span className="material-symbols-outlined text-6xl text-outline-variant mb-4">shopping_bag</span>
          <p className="font-headline-md text-headline-md mb-4">Your cart is empty</p>
          <Link to="/products" className="bg-primary text-on-primary font-label-bold py-4 px-10 inline-block hover:opacity-90 transition-opacity">
            CONTINUE SHOPPING
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          {/* Cart Items */}
          <div className="lg:col-span-8 space-y-6">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="flex flex-col md:flex-row gap-6 p-6 bg-secondary-container cart-item-transition border border-transparent hover:border-outline-variant"
              >
                <Link to={`/product/${item.product.id}`} className="w-full md:w-40 h-40 bg-white flex items-center justify-center p-4 shrink-0">
                  <img
                    alt={item.product.name}
                    className="max-w-full max-h-full object-contain mix-blend-multiply"
                    src={item.product.imageUrl}
                  />
                </Link>
                <div className="flex flex-col justify-between flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-headline-md text-body-lg mb-1">{item.product.name}</h3>
                      {item.color && (
                        <p className="text-on-surface-variant font-body-md text-label-sm">Color: {item.color}</p>
                      )}
                    </div>
                    <p className="font-label-bold text-body-lg text-primary">${item.product.price.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between items-center mt-6">
                    <div className="flex items-center border border-outline px-2 py-1">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-1 hover:text-primary active:scale-90 transition-transform"
                      >
                        <span className="material-symbols-outlined text-[18px]">remove</span>
                      </button>
                      <span className="px-4 font-label-bold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1 hover:text-primary active:scale-90 transition-transform"
                      >
                        <span className="material-symbols-outlined text-[18px]">add</span>
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="text-on-surface-variant hover:text-error transition-colors flex items-center gap-1"
                    >
                      <span className="material-symbols-outlined text-[20px]">delete</span>
                      <span className="text-label-sm font-label-bold">REMOVE</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-4">
            <div className="bg-white border border-outline-variant p-8 sticky top-32">
              <h2 className="font-headline-md text-body-lg mb-8 uppercase tracking-widest border-b border-outline-variant pb-4">
                Order Summary
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between">
                  <span className="text-on-surface-variant font-body-md">Subtotal</span>
                  <span className="font-label-bold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-on-surface-variant font-body-md">Shipping</span>
                  <span className="font-label-bold">FREE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-on-surface-variant font-body-md">Estimated Tax</span>
                  <span className="font-label-bold">${tax.toFixed(2)}</span>
                </div>
              </div>
              <div className="flex justify-between items-center pt-6 border-t border-on-surface mb-8">
                <span className="font-headline-md text-body-lg">Total</span>
                <span className="font-headline-md text-headline-md text-primary">${total.toFixed(2)}</span>
              </div>
              <button className="w-full bg-primary text-on-primary font-label-bold py-4 active:scale-[0.98] transition-transform flex items-center justify-center gap-2 hover:opacity-90">
                PROCEED TO CHECKOUT
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <div className="mt-8 pt-8 border-t border-outline-variant">
                <div className="flex items-center gap-4 text-on-surface-variant mb-4">
                  <span className="material-symbols-outlined">verified</span>
                  <p className="text-label-sm">Secure encrypted checkout</p>
                </div>
                <div className="flex items-center gap-4 text-on-surface-variant">
                  <span className="material-symbols-outlined">local_shipping</span>
                  <p className="text-label-sm">Free carbon-neutral delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Recommended */}
      {items.length > 0 && (
        <section className="mt-section-gap">
          <h2 className="font-headline-md text-headline-md mb-8">Complete the Kit</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
            <div className="col-span-2 bg-secondary-container p-8 flex flex-col justify-between group">
              <div>
                <span className="text-label-sm font-label-bold text-primary mb-2 block">SAVE 15%</span>
                <h3 className="font-headline-md text-body-lg">ALMI Care+ Extended Protection</h3>
              </div>
              <button className="w-fit border border-on-surface px-6 py-2 mt-12 font-label-bold hover:bg-on-surface hover:text-white transition-colors">
                ADD TO CART
              </button>
            </div>
            {products.slice(0, 2).map((p) => (
              <div key={p.id} className="col-span-1 bg-secondary-container aspect-square p-6 flex flex-col justify-center items-center group cursor-pointer">
                <img
                  alt={p.name}
                  className="w-full h-full object-contain mb-4 group-hover:scale-105 transition-transform"
                  src={p.imageUrl}
                />
                <span className="font-label-bold text-label-sm">{p.name}</span>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  )
}
