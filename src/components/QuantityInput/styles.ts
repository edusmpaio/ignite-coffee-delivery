import styled from 'styled-components'

interface QuantityInputContainerProps {
  size: 'base' | 'small'
}

export const QuantityInputContainer = styled.div<QuantityInputContainerProps>`
  padding: 0.5rem;
  background: ${(props) => props.theme['gray-400']};
  border-radius: 6px;
  display: flex;
  align-items: center;
  width: 4.5rem;
  height: ${(props) => (props.size === 'base' ? `2.375rem` : `2rem`)};
  gap: 0.25rem;

  span {
    color: ${(props) => props.theme['gray-900']};
    flex: 1;
    text-align: center;
  }

  button {
    border: 0;
    color: ${(props) => props.theme['purple-500']};
    line-height: 0;
    background: none;
    cursor: pointer;

    transition: color 150ms ease;

    &:hover {
      color: ${(props) => props.theme['purple-700']};
    }
  }
`
