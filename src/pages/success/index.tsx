import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { Icon } from '../../components/Icon'
import { OrderInfo, SuccessContainer, SuccessContent } from './styles'

export function Success() {
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
                  Entrega em <span>Rua João Daniel Martinelli, 102</span>
                  <br />
                  Farrapos - Porto Alegre, RS
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
                <span>Cartão de Crédito</span>
              </div>
            </OrderInfo>
          </div>
        </div>
        <img src="/delivery.svg" alt="Ilustração de Delivery" />
      </SuccessContent>
    </SuccessContainer>
  )
}
