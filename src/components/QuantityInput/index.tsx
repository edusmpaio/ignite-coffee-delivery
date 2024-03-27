import { Minus, Plus } from '@phosphor-icons/react'

import { QuantityInputContainer } from './styles'

interface QuantityInputProps {
  size?: 'base' | 'small'
}

export function QuantityInput({ size = 'base' }: QuantityInputProps) {
  return (
    <QuantityInputContainer size={size}>
      <button>
        <Minus size={14} />
      </button>
      <span>1</span>
      <button>
        <Plus size={14} />
      </button>
    </QuantityInputContainer>
  )
}
