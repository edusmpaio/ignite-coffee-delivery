import { Minus, Plus, ShoppingCartSimple } from '@phosphor-icons/react'

import {
  Card,
  Tag,
  Tags,
  Price,
  AddToCartControls,
  QuantityInput,
  AddToCartButton,
} from './styles'

interface CoffeeProps {
  coffee: {
    id: string
    name: string
    tag: string[]
    description: string
    price: number
    imageUrl: string
  }
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const { name, description, tag, imageUrl, price } = coffee

  return (
    <Card>
      <img src={imageUrl} alt="" />

      <Tags>
        <Tag>{tag}</Tag>
      </Tags>

      <strong>{name}</strong>
      <p>{description}</p>

      <footer>
        <Price>
          <span>R$</span>{' '}
          {price.toLocaleString('pt-br', {
            minimumFractionDigits: 2,
          })}
        </Price>

        <AddToCartControls>
          <QuantityInput>
            <button>
              <Minus size={14} />
            </button>
            <span>1</span>
            <button>
              <Plus size={14} />
            </button>
          </QuantityInput>

          <AddToCartButton>
            <ShoppingCartSimple size={22} weight="fill" />
          </AddToCartButton>
        </AddToCartControls>
      </footer>
    </Card>
  )
}
