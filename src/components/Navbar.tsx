import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const { totalItems } = useCart()

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4">
      <div className="flex items-center gap-4">
        <button className="active:scale-95 transition-transform duration-200 md:hidden">
          <span className="material-symbols-outlined text-primary">menu</span>
        </button>
        <Link to="/">
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-md md:text-headline-md tracking-tighter text-primary">
            ALMI
          </h1>
        </Link>
      </div>
      <nav className="hidden md:flex gap-8">
        <Link to="/" className="font-label-bold text-label-bold text-primary hover:opacity-80 transition-opacity">
          Home
        </Link>
        <Link to="/products" className="font-label-bold text-label-bold text-secondary hover:opacity-80 transition-opacity">
          Shop
        </Link>
        <a className="font-label-bold text-label-bold text-secondary hover:opacity-80 transition-opacity" href="#about">
          About
        </a>
        <a className="font-label-bold text-label-bold text-secondary hover:opacity-80 transition-opacity" href="#support">
          Support
        </a>
      </nav>
      <div className="flex items-center gap-4">
        <Link to="/cart" className="active:scale-95 transition-transform duration-200 relative">
          <span className="material-symbols-outlined text-primary">shopping_bag</span>
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-primary text-on-primary text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </header>
  )
}
