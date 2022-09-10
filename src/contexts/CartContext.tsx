import { createContext, ReactNode, useReducer } from 'react'

import {
  addNewItemAction,
  changeAmountItemAction,
  removeItemAction,
} from '../reducers/cart/actions'
import { cartReducer } from '../reducers/cart/reducer'

interface Item {
  id: number
  name: string
  description: string
  price: number
  tags: string[]
  img: string
  amount: number
}

interface CartContextData {
  itens: Item[]
  addNewItem: (item: Item) => void
  changeAmountOfItem: (item: Item, newAmount: number) => void
  removeItem: (item: Item) => void
}

export const CartContext = createContext({} as CartContextData)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [itens, dispatch] = useReducer(cartReducer, [])

  const addNewItem = (item: Item) => dispatch(addNewItemAction(item))

  const changeAmountOfItem = (item: Item, newAmount: number) =>
    dispatch(changeAmountItemAction(item, newAmount))

  const removeItem = (item: Item) => dispatch(removeItemAction(item))

  console.log(itens)

  return (
    <CartContext.Provider
      value={{ itens, addNewItem, changeAmountOfItem, removeItem }}
    >
      {children}
    </CartContext.Provider>
  )
}
