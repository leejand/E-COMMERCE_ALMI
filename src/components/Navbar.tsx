import { Link, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const { totalItems } = useCart()
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/30">
      <div className="max-w-container-max mx-auto flex items-center justify-between px-margin-mobile md:px-margin-desktop h-14 md:h-16">
        <Link to="/" className="flex items-center gap-2 md:gap-3 shrink-0">
          <div className="w-7 h-7 md:w-8 md:h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-on-primary font-bold text-xs md:text-sm">A</span>
          </div>
          <span className="font-headline-sm text-lg md:text-headline-sm text-primary hidden sm:block">ALMI</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          <Link
            to="/"
            className={`text-body-sm font-body-sm tracking-wider uppercase transition-colors ${
              isActive('/') ? 'text-primary' : 'text-on-surface/70 hover:text-on-surface'
            }`}
          >
            Home
          </Link>
          <Link
            to="/products"
            className={`text-body-sm font-body-sm tracking-wider uppercase transition-colors ${
              isActive('/products') ? 'text-primary' : 'text-on-surface/70 hover:text-on-surface'
            }`}
          >
            Products
          </Link>
          <a href="#story" className="text-body-sm font-body-sm tracking-wider uppercase text-on-surface/70 hover:text-on-surface transition-colors">
            Story
          </a>
          <a href="#support" className="text-body-sm font-body-sm tracking-wider uppercase text-on-surface/70 hover:text-on-surface transition-colors">
            Support
          </a>
        </nav>

        <div className="flex items-center gap-4 md:gap-6">
          <Link to="/cart" className="relative p-1.5 md:p-2 hover:opacity-70 transition-opacity">
            <span className="material-symbols-outlined text-[20px] md:text-[22px] text-on-surface block">shopping_bag</span>
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-primary text-on-primary text-[9px] md:text-[10px] w-3.5 h-3.5 md:w-4 md:h-4 rounded-full flex items-center justify-center font-bold leading-none">
                {totalItems > 9 ? '9+' : totalItems}
              </span>
            )}
          </Link>
          <button className="md:hidden p-1.5 hover:opacity-70 transition-opacity" aria-label="Menu">
            <span className="material-symbols-outlined text-[20px] text-on-surface block">menu</span>
          </button>
        </div>
      </div>
    </header>
  )
}
