# ALMI Tech — tienda online

Tienda de audio (audífonos, earbuds, parlantes y accesorios) de ALMO S.A.S.

**Stack:** React 19 · TypeScript · Vite · Tailwind CSS · React Router · Supabase (opcional)

```bash
npm install
cp .env.example .env.local   # y rellena
npm run dev
npm run build
npm run lint
```

## Rutas

| Ruta | Vista |
|---|---|
| `/` | Inicio con scroll de producto destacado |
| `/products` | Catálogo con filtros |
| `/product/:id` | Detalle de producto |
| `/cart` | Carrito y checkout |

## Checkout por WhatsApp

Con `VITE_WHATSAPP_NUMBER` configurado, el botón **Finalizar pedido por WhatsApp** abre el chat con el pedido escrito (productos, cantidades y total) y aparece el botón flotante. Sin número, el checkout queda deshabilitado en vez de no hacer nada.

## Variables de entorno

| Variable | Uso |
|---|---|
| `VITE_WHATSAPP_NUMBER` | Número de ventas, formato `573001234567` |
| `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` | Backend futuro (catálogo, pedidos). Sin ellas la app usa el catálogo local de `src/data/products.ts` |

## Pendiente

- [ ] Conectar el catálogo a Supabase (hoy `src/data/products.ts`).
- [ ] Traducir la interfaz: mezcla inglés y español.
- [ ] Imágenes propias (hoy apuntan a `lh3.googleusercontent.com`, pueden dejar de funcionar).
