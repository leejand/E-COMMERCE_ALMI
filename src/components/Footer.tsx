export default function Footer() {
  return (
    <footer className="bg-almi-black text-white py-20 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4">
            <h2 className="font-headline-md text-headline-md text-almi-blue mb-4 tracking-tight">ALMI.</h2>
            <p className="max-w-xs text-white/40 font-body-md text-body-md leading-relaxed">
              Audio premium para una nueva generación. Ingeniería sonora sin compromisos, diseñada
              para los que escuchan más allá.
            </p>
          </div>

          {/* Producto */}
          <div className="col-span-1 md:col-span-2">
            <h6 className="font-label-bold text-label-bold text-white/60 mb-5 uppercase tracking-[0.15em]">Producto</h6>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/40 hover:text-almi-blue transition-colors duration-300 text-sm">Audífonos ALMI</a></li>
              <li><a href="#" className="text-white/40 hover:text-almi-blue transition-colors duration-300 text-sm">Especificaciones</a></li>
              <li><a href="#" className="text-white/40 hover:text-almi-blue transition-colors duration-300 text-sm">Comparar</a></li>
              <li><a href="#" className="text-white/40 hover:text-almi-blue transition-colors duration-300 text-sm">Accesorios</a></li>
            </ul>
          </div>

          {/* Soporte */}
          <div className="col-span-1 md:col-span-2">
            <h6 className="font-label-bold text-label-bold text-white/60 mb-5 uppercase tracking-[0.15em]">Soporte</h6>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/40 hover:text-almi-blue transition-colors duration-300 text-sm">Ayuda</a></li>
              <li><a href="#" className="text-white/40 hover:text-almi-blue transition-colors duration-300 text-sm">Garantía</a></li>
              <li><a href="#" className="text-white/40 hover:text-almi-blue transition-colors duration-300 text-sm">Envíos</a></li>
              <li><a href="#" className="text-white/40 hover:text-almi-blue transition-colors duration-300 text-sm">Devoluciones</a></li>
            </ul>
          </div>

          {/* Compañía */}
          <div className="col-span-1 md:col-span-2">
            <h6 className="font-label-bold text-label-bold text-white/60 mb-5 uppercase tracking-[0.15em]">Compañía</h6>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/40 hover:text-almi-blue transition-colors duration-300 text-sm">Sobre ALMI</a></li>
              <li><a href="#" className="text-white/40 hover:text-almi-blue transition-colors duration-300 text-sm">Tecnología</a></li>
              <li><a href="#" className="text-white/40 hover:text-almi-blue transition-colors duration-300 text-sm">Blog</a></li>
              <li><a href="#" className="text-white/40 hover:text-almi-blue transition-colors duration-300 text-sm">Contacto</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className="col-span-2 md:col-span-2">
            <h6 className="font-label-bold text-label-bold text-white/60 mb-5 uppercase tracking-[0.15em]">Redes</h6>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/40 hover:text-almi-blue transition-colors duration-300 text-sm">Instagram</a></li>
              <li><a href="#" className="text-white/40 hover:text-almi-blue transition-colors duration-300 text-sm">TikTok</a></li>
              <li><a href="#" className="text-white/40 hover:text-almi-blue transition-colors duration-300 text-sm">YouTube</a></li>
              <li><a href="#" className="text-white/40 hover:text-almi-blue transition-colors duration-300 text-sm">X / Twitter</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div className="text-white/20 font-label-sm text-label-sm">
            &copy; 2025 ALMI Tech. Todos los derechos reservados.
          </div>
          <div className="flex gap-6 text-white/20 font-label-sm text-label-sm">
            <a href="#" className="hover:text-white/40 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white/40 transition-colors">Términos</a>
            <a href="#" className="hover:text-white/40 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
