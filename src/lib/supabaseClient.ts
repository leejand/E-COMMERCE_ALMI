import { createClient, type SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined

/**
 * Cliente de Supabase, o `null` si faltan las variables de entorno.
 * `createClient('')` lanza un error al importar el módulo y dejaba la tienda
 * en blanco; así la app funciona con el catálogo local mientras no haya backend.
 */
export const supabase: SupabaseClient | null =
  supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null
