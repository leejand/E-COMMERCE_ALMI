import { createContext, useContext, useReducer, useMemo, type ReactNode } from 'react'
import type { Product, CartItem, CartContextType } from '../types'

const CartContext = createContext<CartContextType | undefined>(undefined)

type CartAction =
  | { type: 'ADD_ITEM'; product: Product; quantity: number; color?: string }
  | { type: 'REMOVE_ITEM'; productId: string }
  | { type: 'UPDATE_QUANTITY'; productId: string; quantity: number }
  | { type: 'CLEAR_CART' }

function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.find(
        (item) => item.product.id === action.product.id && item.color === action.color
      )
      if (existing) {
        return state.map((item) =>
          item.product.id === action.product.id && item.color === action.color
            ? { ...item, quantity: item.quantity + action.quantity }
            : item
        )
      }
      return [...state, { product: action.product, quantity: action.quantity, color: action.color }]
    }
    case 'REMOVE_ITEM':
      return state.filter((item) => item.product.id !== action.productId)
    case 'UPDATE_QUANTITY':
      return state.map((item) =>
        item.product.id === action.productId
          ? { ...item, quantity: Math.max(0, action.quantity) }
          : item
      ).filter((item) => item.quantity > 0)
    case 'CLEAR_CART':
      return []
    default:
      return state
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, dispatch] = useReducer(cartReducer, [])

  const value = useMemo<CartContextType>(() => ({
    items,
    addItem: (product, quantity = 1, color) =>
      dispatch({ type: 'ADD_ITEM', product, quantity, color }),
    removeItem: (productId) =>
      dispatch({ type: 'REMOVE_ITEM', productId }),
    updateQuantity: (productId, quantity) =>
      dispatch({ type: 'UPDATE_QUANTITY', productId, quantity }),
    clearCart: () => dispatch({ type: 'CLEAR_CART' }),
    totalItems: items.reduce((sum, item) => sum + item.quantity, 0),
    subtotal: items.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
  }), [items])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components -- el hook vive junto a su provider
export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within a CartProvider')
  return context
}
