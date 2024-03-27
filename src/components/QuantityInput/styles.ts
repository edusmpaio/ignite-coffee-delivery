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

  input {
    color: ${(props) => props.theme['gray-900']};
    width: 100%;
    text-align: center;
    border: 0;
    background: none;
    font-size: 1rem;

    &:focus {
      outline: none;
    }
  }

  button {
    border: 0;
    color: ${(props) => props.theme['purple-500']};
    line-height: 0;
    background: none;
    cursor: pointer;

    transition: color 150ms ease;

    &:disabled {
      opacity: 0.6;
      cursor: auto;
    }

    &:not(:disabled):hover {
      color: ${(props) => props.theme['purple-700']};
    }
  }
`
