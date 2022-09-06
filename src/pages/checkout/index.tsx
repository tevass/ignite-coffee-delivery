import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { Input } from './Input'
import { Radio } from './Input/Radio'
import { InputWrapper } from './Input/styles'
import {
  CheckoutContainer,
  InputGroup,
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
              <MapPinLine size={25} />
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
            <InputWrapper>
              <Input placeholder="Rua" />
            </InputWrapper>
            <InputWrapper>
              <InputGroup>
                <Input placeholder="Numero" />
                <Input placeholder="Complemento" isOptional />
              </InputGroup>
            </InputWrapper>
            <InputWrapper>
              <InputGroup>
                <Input placeholder="Bairro" />
                <Input placeholder="Cidade" />
                <InputWrapper maxW={60}>
                  <Input placeholder="UF" />
                </InputWrapper>
              </InputGroup>
            </InputWrapper>
          </div>
        </WrapperOrder>

        <WrapperOrder>
          <WrapperHeader iconColor="#8047F8">
            <div>
              <CurrencyDollar size={25} />
            </div>
            <WrapperHeaderContent>
              <h4>Pagamento</h4>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </WrapperHeaderContent>
          </WrapperHeader>

          <div>
            <InputGroup>
              <Radio id="teste1" name="payment">
                <div>
                  <CreditCard size={18} />
                </div>
                <span>Cartão de crédito</span>
              </Radio>
              <Radio id="teste2" name="payment">
                <div>
                  <Bank size={18} />
                </div>
                <span>cartão de débito</span>
              </Radio>
              <Radio id="teste3" name="payment">
                <div>
                  <Money size={18} />
                </div>
                <span>dinheiro</span>
              </Radio>
            </InputGroup>
          </div>
        </WrapperOrder>
      </div>

      <div></div>
    </CheckoutContainer>
  )
}
