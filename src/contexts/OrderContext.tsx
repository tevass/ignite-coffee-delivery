import { createContext, ReactNode, useState } from 'react'

interface Address {
  zip_code: string
  street: string
  number: string
  complement?: string
  neighborhood: string
  city: string
  state: string
}

interface Order {
  address: Address
  payment: 'credit' | 'debit' | 'money'
}

interface OrderContextData {
  order?: Order
  onFinishOrder: (order: Order) => void
}

export const OrderContext = createContext({} as OrderContextData)

interface OrderContextProviderProps {
  children: ReactNode
}

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const [order, setOrder] = useState<Order>()

  const onFinishOrder = (order: Order) => setOrder(order)

  return (
    <OrderContext.Provider value={{ order, onFinishOrder }}>
      {children}
    </OrderContext.Provider>
  )
}
