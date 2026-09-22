import type { CartItem } from '../types'

/** Número en formato internacional sin signos (p. ej. 573001234567), desde .env */
const NUMBER = (import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined)?.replace(/\D/g, '')

export const hasWhatsApp = Boolean(NUMBER)

export function whatsappHref(message = 'Hola ALMI, vengo de la tienda y tengo una pregunta.'): string | null {
  return NUMBER ? `https://wa.me/${NUMBER}?text=${encodeURIComponent(message)}` : null
}

/** Pedido legible en WhatsApp: una línea por producto y el total. */
export function orderMessage(items: CartItem[], total: number): string {
  const lines = items.map(
    (i) => `• ${i.quantity} × ${i.product.name}${i.color ? ` (${i.color})` : ''} — $${(i.product.price * i.quantity).toFixed(2)}`,
  )
  return ['Hola ALMI, quiero hacer este pedido:', '', ...lines, '', `Total: $${total.toFixed(2)}`, '', '¿Me confirman disponibilidad y forma de pago?'].join('\n')
}
