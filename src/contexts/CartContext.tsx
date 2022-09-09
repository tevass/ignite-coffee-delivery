import { createContext, ReactNode, useReducer } from 'react'

import {
  addNewItemAction,
  changeAmountItemAction,
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

  console.log(itens)

  return (
    <CartContext.Provider value={{ itens, addNewItem, changeAmountOfItem }}>
      {children}
    </CartContext.Provider>
  )
}
