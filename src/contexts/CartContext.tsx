import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'

import {
  addNewItemAction,
  changeAmountItemAction,
  removeItemAction,
} from '../reducers/cart/actions'
import { cartReducer } from '../reducers/cart/reducer'
import { formatPrice } from '../utils/formatPrice'
import { randomValue } from '../utils/randomValue'

interface Item {
  id: number
  name: string
  description: string
  price: number
  tags: string[]
  img: string
  amount: number
}

interface CurrencyOfDelivery {
  format: string
  number: number
}

interface CartContextData {
  itens: Item[]
  currencyOfDelivery: CurrencyOfDelivery
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

  const hasItens = !!itens.length

  const initialDeliveryCoast = randomValue(hasItens ? itens.length : undefined)
  const [deliveryCoast] = useState(initialDeliveryCoast)

  const currencyOfDelivery: CurrencyOfDelivery = {
    format: formatPrice(deliveryCoast),
    number: deliveryCoast,
  }

  return (
    <CartContext.Provider
      value={{
        itens,
        currencyOfDelivery,
        addNewItem,
        changeAmountOfItem,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
