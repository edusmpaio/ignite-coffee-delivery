import { CartItem } from './CartItem'
import { CartContainer, ConfirmButton, Title, Totals } from './styles'

export function Cart() {
  return (
    <div>
      <Title>Cafés selecionados</Title>

      <CartContainer>
        <CartItem />
        <CartItem />
        <CartItem />

        <Totals>
          <div>
            <span>Total de itens</span>
            <span>R$ 29,70</span>
          </div>
          <div>
            <span>Entrega</span>
            <span>R$ 3,50</span>
          </div>
          <div>
            <strong>Total</strong>
            <strong>R$ 33,20</strong>
          </div>
        </Totals>

        <ConfirmButton>Confirmar pedido</ConfirmButton>
      </CartContainer>
    </div>
  )
}
