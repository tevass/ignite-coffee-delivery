import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { CoffeeCard } from './components/CoffeCard'
import { Icon } from './components/Icon'
import {
  CoffeesContainer,
  CoffeeSection,
  HomeContainer,
  HomeIntroContainer,
  HomeItem,
  HomeItens,
  HomeTitle,
} from './styles'

import data from '../../../coffees.json'

interface CoffeeType {
  id: number
  name: string
  description: string
  price: number
  tags: string[]
  img: string
}

const coffees = data as CoffeeType[]

export function Home() {
  return (
    <HomeContainer>
      <HomeIntroContainer>
        <div>
          <HomeTitle>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </HomeTitle>

          <HomeItens>
            <div>
              <HomeItem>
                <Icon color="#C47F17">
                  <ShoppingCart size={18} weight="fill" />
                </Icon>
                <span>Compra simples e segura</span>
              </HomeItem>
              <HomeItem>
                <Icon color="#DBAC2C">
                  <Timer size={18} weight="fill" />
                </Icon>
                <span>Entrega rápida e rastreada</span>
              </HomeItem>
            </div>

            <div>
              <HomeItem>
                <Icon color="#574F4D">
                  <Package size={18} weight="fill" />
                </Icon>
                <span>Embalagem mantém o café intacto</span>
              </HomeItem>

              <HomeItem>
                <Icon color="#8047F8">
                  <Coffee size={18} weight="fill" />
                </Icon>
                <span>O café chega fresquinho até você</span>
              </HomeItem>
            </div>
          </HomeItens>
        </div>

        <img src="/coffee.png" alt="Copo de café" />
      </HomeIntroContainer>

      <CoffeeSection>
        <h4>Nossos cafés</h4>

        <CoffeesContainer>
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </CoffeesContainer>
      </CoffeeSection>
    </HomeContainer>
  )
}
