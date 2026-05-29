const footerLinks = [
  {
    title: 'Shop',
    links: ['Headphones', 'Earbuds', 'Speakers', 'Accessories', 'New Arrivals'],
  },
  {
    title: 'Support',
    links: ['Help Center', 'Warranty', 'Returns', 'Contact Us', 'Community'],
  },
  {
    title: 'Company',
    links: ['About ALMI', 'Careers', 'Press', 'Sustainability', 'Privacy'],
  },
]

export default function Footer() {
  return (
    <footer className="bg-on-surface text-surface/90">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-8 md:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-2">
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <div className="w-7 h-7 md:w-8 md:h-8 bg-primary-fixed rounded-lg flex items-center justify-center shrink-0">
                <span className="text-on-primary-fixed font-bold text-xs md:text-sm">A</span>
              </div>
              <span className="text-lg md:text-headline-sm font-headline-sm text-primary-fixed">ALMI</span>
            </div>
            <p className="text-body-sm font-body-sm text-surface/50 max-w-xs leading-relaxed">
              High-fidelity audio for the next generation of creators. Based in Tokyo, shipping globally.
            </p>
          </div>

          {/* Link Groups */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-[10px] md:text-label-sm font-label-sm text-surface/40 uppercase tracking-wider mb-4 md:mb-6">
                {group.title}
              </h4>
              <ul className="space-y-2.5 md:space-y-4">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-body-sm font-body-sm text-surface/70 hover:text-surface transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 md:mt-20 pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-0">
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <a href="#" className="text-body-sm font-body-sm text-surface/40 hover:text-surface/70 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-body-sm font-body-sm text-surface/40 hover:text-surface/70 transition-colors">
              Terms of Use
            </a>
            <a href="#" className="text-body-sm font-body-sm text-surface/40 hover:text-surface/70 transition-colors">
              Legal
            </a>
          </div>
          <p className="text-body-sm font-body-sm text-surface/30">
            &copy; 2024 ALMI TECH GMBH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
