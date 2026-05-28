import { Link } from 'react-router-dom'

export default function BottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 w-full z-50 bg-surface border-t border-outline-variant h-16 flex justify-around items-center px-base pb-safe">
      <Link to="/" className="flex flex-col items-center justify-center text-primary font-bold transition-transform active:scale-90">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
        <span className="text-label-sm font-label-sm mt-1">Home</span>
      </Link>
      <Link to="/products" className="flex flex-col items-center justify-center text-on-surface-variant transition-transform active:scale-90">
        <span className="material-symbols-outlined">grid_view</span>
        <span className="text-label-sm font-label-sm mt-1">Shop</span>
      </Link>
      <a className="flex flex-col items-center justify-center text-on-surface-variant transition-transform active:scale-90" href="#">
        <span className="material-symbols-outlined">search</span>
        <span className="text-label-sm font-label-sm mt-1">Search</span>
      </a>
      <a className="flex flex-col items-center justify-center text-on-surface-variant transition-transform active:scale-90" href="#">
        <span className="material-symbols-outlined">person</span>
        <span className="text-label-sm font-label-sm mt-1">Profile</span>
      </a>
    </nav>
  )
}
