import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form'
import { useCart } from '../../hooks/useCart'

import { formatPrice } from '../../utils/formatPrice'

import { CoffeeItem } from './CoffeItem'
import { Input } from './Input'
import { Radio } from './Input/Radio'

import { InputWrapper } from './Input/styles'
import {
  CheckoutContainer,
  InputGroup,
  NoItensLabel,
  ResumeContainer,
  ResumeContent,
  SubmitOrder,
  WrapperHeader,
  WrapperHeaderContent,
  WrapperOrder,
} from './styles'

interface AddressFormData {
  zip_code: string
  street: string
  number: string
  complement?: string
  neighborhood: string
  city: string
  state: string
  payment: string | 'credit' | 'debit' | 'money'
}

export function Checkout() {
  const { itens } = useCart()

  const addressForm = useForm<AddressFormData>({
    defaultValues: {
      city: '',
      complement: '',
      neighborhood: '',
      number: '',
      state: '',
      street: '',
      zip_code: '',
      payment: '',
    },
  })

  const { handleSubmit } = addressForm

  const handleSubmitAddress: SubmitHandler<AddressFormData> = (data) => {
    console.log(data)
  }

  const totalPriceOfItens = itens.reduce(
    (value, item) => value + item.price * item.amount,
    0,
  )

  const currencyOfItens = formatPrice(totalPriceOfItens)

  return (
    <main>
      <CheckoutContainer onSubmit={handleSubmit(handleSubmitAddress)}>
        <FormProvider {...addressForm}>
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
                  <Input<AddressFormData>
                    placeholder="CEP"
                    formName="zip_code"
                  />
                </InputWrapper>
                <InputWrapper>
                  <Input<AddressFormData> placeholder="Rua" formName="street" />
                </InputWrapper>
                <InputWrapper>
                  <InputGroup>
                    <Input<AddressFormData>
                      placeholder="Numero"
                      formName="number"
                    />
                    <Input<AddressFormData>
                      placeholder="Complemento"
                      isOptional
                      formName="complement"
                    />
                  </InputGroup>
                </InputWrapper>
                <InputWrapper>
                  <InputGroup>
                    <Input<AddressFormData>
                      placeholder="Bairro"
                      formName="neighborhood"
                    />
                    <Input<AddressFormData>
                      placeholder="Cidade"
                      formName="city"
                    />
                    <InputWrapper maxW={60}>
                      <Input<AddressFormData>
                        placeholder="UF"
                        formName="state"
                      />
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
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </p>
                </WrapperHeaderContent>
              </WrapperHeader>

              <div>
                <InputGroup>
                  <Radio<AddressFormData>
                    id="credit"
                    value="credit"
                    formName="payment"
                  >
                    <div>
                      <CreditCard size={18} />
                    </div>
                    <span>Cartão de crédito</span>
                  </Radio>
                  <Radio<AddressFormData>
                    id="debit"
                    value="debit"
                    formName="payment"
                  >
                    <div>
                      <Bank size={18} />
                    </div>
                    <span>cartão de débito</span>
                  </Radio>
                  <Radio<AddressFormData>
                    id="money"
                    value="money"
                    formName="payment"
                  >
                    <div>
                      <Money size={18} />
                    </div>
                    <span>dinheiro</span>
                  </Radio>
                </InputGroup>
              </div>
            </WrapperOrder>
          </div>

          <div>
            <h4>Cafés selecionados</h4>
            <ResumeContainer>
              {itens.length ? (
                <div>
                  {itens.map((item) => (
                    <CoffeeItem item={item} key={item.id} />
                  ))}
                </div>
              ) : (
                <NoItensLabel>Nenhum café selecionado</NoItensLabel>
              )}
              <ResumeContent>
                <div>
                  <span>Total de itens</span>
                  <span className="currency">{currencyOfItens}</span>
                </div>
                <div>
                  <span>Entrega</span>
                  <span className="currency">R$ 3,50</span>
                </div>
                <div className="total">
                  <span>Total</span>
                  <span>R$ 33,20</span>
                </div>
              </ResumeContent>
              <SubmitOrder>confirmar pedido</SubmitOrder>
            </ResumeContainer>
          </div>
        </FormProvider>
      </CheckoutContainer>
    </main>
  )
}
