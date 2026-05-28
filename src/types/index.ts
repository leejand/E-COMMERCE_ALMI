export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  tags: string[];
  imageUrl: string;
  features?: string[];
  specs?: { label: string; value: string }[];
  colors?: { name: string; hex: string }[];
  rating: number;
  inStock: boolean;
  isNew?: boolean;
  isTopRated?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  color?: string;
}

export interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, quantity?: number, color?: string) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
}

export interface User {
  id: string;
  email: string;
  name?: string;
  avatarUrl?: string;
}

export interface OrderSummary {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
}
