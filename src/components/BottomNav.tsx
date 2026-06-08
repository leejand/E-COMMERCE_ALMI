import { Link, useLocation } from 'react-router-dom'

const tabs = [
  { path: '/', icon: 'home', label: 'Home', fill: true },
  { path: '/products', icon: 'grid_view', label: 'Shop', fill: false },
  { path: '/cart', icon: 'shopping_bag', label: 'Bag', fill: false },
  { path: '#', icon: 'person', label: 'Profile', fill: false },
]

export default function BottomNav() {
  const location = useLocation()

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-xl border-t border-outline-variant/30 pb-safe">
      <div className="flex items-center justify-around h-14 px-2">
        {tabs.map((tab) => {
          const active = tab.path !== '#' && location.pathname === tab.path
          return (
            <Link
              key={tab.label}
              to={tab.path}
              className={`flex flex-col items-center justify-center gap-0.5 w-full h-full transition-colors active:scale-95 ${
                active ? 'text-primary' : 'text-on-surface/50'
              }`}
            >
              <span
                className="material-symbols-outlined text-[20px]"
                style={active && tab.fill ? { fontVariationSettings: "'FILL' 1" } : undefined}
              >
                {tab.icon}
              </span>
              <span className="text-[9px] font-label-sm tracking-wider uppercase">{tab.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
