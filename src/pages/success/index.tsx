import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { Navigate } from 'react-router-dom'

import { useOrder } from '../../hooks/useOrder'

import { Icon } from '../../components/Icon'

import { formatAddress } from '../../utils/formatAddress'

import { OrderInfo, SuccessContainer, SuccessContent } from './styles'

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

const paymentMethods = {
  debit: 'Cartão de débito',
  credit: 'Cartão de crédito',
  money: 'Dinheiro',
}

export function Success() {
  const { order } = useOrder()

  if (!order) return <Navigate to="/" />
  const { address, payment } = order as Order
  const { street, number, neighborhood, complement, city, state } = address

  return (
    <SuccessContainer>
      <div>
        <h3>Uhu! Pedido confirmado</h3>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </div>
      <SuccessContent>
        <div>
          <div>
            <OrderInfo>
              <Icon color="#8047F8">
                <MapPin size={18} weight="fill" />
              </Icon>
              <div>
                <p>
                  Entrega em{' '}
                  <span>
                    {street}, {number}{' '}
                    {complement ? `- ${complement}` : undefined}
                  </span>
                  <br />
                  {neighborhood} - {city} - {state}
                </p>
              </div>
            </OrderInfo>
            <OrderInfo>
              <Icon color="#DBAC2C">
                <Timer size={18} weight="fill" />
              </Icon>
              <div>
                <p>Previsão de entrega</p>
                <span>20 min - 30 min</span>
              </div>
            </OrderInfo>
            <OrderInfo>
              <Icon color="#C47F17">
                <CurrencyDollar size={18} weight="fill" />
              </Icon>
              <div>
                <p>Pagamento na entrega</p>
                <span>{paymentMethods[payment]}</span>
              </div>
            </OrderInfo>
          </div>
        </div>
        <img src="/delivery.svg" alt="Ilustração de Delivery" />
      </SuccessContent>
    </SuccessContainer>
  )
}
