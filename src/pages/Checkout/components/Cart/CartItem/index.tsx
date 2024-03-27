import { Trash } from '@phosphor-icons/react'
import { QuantityInput } from '../../../../../components/QuantityInput'
import {
  CartItemContainer,
  ItemControls,
  ItemName,
  RemoveButton,
} from './styles'

export function CartItem() {
  return (
    <CartItemContainer>
      <div>
        <img src="/tradicional.png" alt="" />

        <div>
          <ItemName>Expresso Tradicional</ItemName>

          <ItemControls>
            <QuantityInput size="small" />
            <RemoveButton>
              <Trash size={16} />
              Remover
            </RemoveButton>
          </ItemControls>
        </div>
      </div>

      <strong>R$ 9,90</strong>
    </CartItemContainer>
  )
}
