import { create } from "zustand";
import { IProduct } from '../../types'

type State = {
  products: IProduct[]
  cart: CartItem[]
}

type CartItem = { product: IProduct, quantity: number }

type Action = {
  setProducts: (products: State['products']) => void
  addToCart: (product: IProduct) => void
  removeFromCart: (product: IProduct) => void
  updateCart: (product: IProduct, quantity: number) => void
  clearCart: () => void
}

export const useStore = create<State & Action>((set) => ({
  products: [],
  cart: [],
  setProducts: (products: IProduct[]) => set(() => ({ products })),
  addToCart: (product: IProduct) => set((state) => ({ cart: [...state.cart, { product, quantity: 1 }] })),
  removeFromCart: (product: IProduct) => set((state) => ({ cart: state.cart.filter((item) => item.product.name !== product.name) })),
  updateCart: (product: IProduct, quantity: number) => set((state) => ({
    cart: state.cart.map(item => {
      if (item.product.name === product.name) {
        return { ...item, quantity };
      }
      return item;
    })
  })),
  clearCart: () => set(() => ({ cart: [] })),
}))