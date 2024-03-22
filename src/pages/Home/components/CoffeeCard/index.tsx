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
    tags: string[]
    description: string
    price: number
    imageUrl: string
  }
}

export function CoffeeCard({ coffee }: CoffeeProps) {
  const { name, description, tags, imageUrl, price } = coffee

  return (
    <Card>
      <img src={imageUrl} alt="" />

      <Tags>
        {tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
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
