import { whatsappHref } from '../lib/whatsapp'

/** Botón flotante de WhatsApp. No se muestra mientras no haya número configurado. */
export default function WhatsAppButton() {
  const href = whatsappHref()
  if (!href) return null

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-[72px] md:bottom-8 right-4 md:right-8 z-50 w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200 group"
    >
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793 0-.852.449-1.271.608-1.445.159-.175.348-.218.463-.218.116 0 .231.001.332.005.109.004.258-.041.405.314.159.386.541 1.321.589 1.417.049.097.082.209.017.338-.066.13-.099.209-.197.323-.097.114-.204.254-.291.341-.097.097-.198.203-.085.397.113.193.504.832 1.084 1.347.747.665 1.378.872 1.572.969.193.097.304.081.417-.048.113-.129.482-.562.61-.754.129-.193.258-.161.435-.097.177.064 1.124.531 1.317.628.193.096.322.144.37.225.048.081.048.468-.096.873z" />
      </svg>
      <span className="absolute right-full mr-3 bg-on-surface text-surface text-[11px] font-label-bold px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        Escríbenos
      </span>
    </a>
  )
}
