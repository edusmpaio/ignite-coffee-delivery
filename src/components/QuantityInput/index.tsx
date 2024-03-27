import { Minus, Plus } from '@phosphor-icons/react'

import { QuantityInputContainer } from './styles'

interface QuantityInputProps {
  size?: 'base' | 'small'
}

export function QuantityInput({ size = 'base' }: QuantityInputProps) {
  return (
    <QuantityInputContainer size={size}>
      <button disabled>
        <Minus size={14} />
      </button>
      <input type="number" min={1} value={1} readOnly />
      <button>
        <Plus size={14} />
      </button>
    </QuantityInputContainer>
  )
}
