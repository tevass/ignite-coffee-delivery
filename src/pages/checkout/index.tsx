import { MapPinLine } from 'phosphor-react'
import { Input } from './Input'
import { InputWrapper } from './Input/styles'
import {
  CheckoutContainer,
  WrapperHeader,
  WrapperHeaderContent,
  WrapperOrder,
} from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <div>
        <h4>Complete seu pedido</h4>
        <WrapperOrder>
          <WrapperHeader iconColor="#C47F17">
            <div>
              <MapPinLine size={25} weight="regular" />
            </div>
            <WrapperHeaderContent>
              <h4>Endereço de Entrega</h4>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </WrapperHeaderContent>
          </WrapperHeader>

          <div>
            <InputWrapper maxW={200}>
              <Input placeholder="CEP" />
            </InputWrapper>
          </div>
        </WrapperOrder>
      </div>
    </CheckoutContainer>
  )
}
