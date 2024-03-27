import styled from 'styled-components'

export const CartItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme['gray-400']};

  img {
    width: 4rem;
    height: 4rem;
  }

  > div {
    flex: 1;
    gap: 1.25rem;
    display: flex;
  }
`

export const ItemName = styled.span`
  display: block;
  margin-bottom: 0.5rem;
  line-height: 130%;
  color: ${(props) => props.theme['gray-800']};
`

export const ItemControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const RemoveButton = styled.button`
  background: ${(props) => props.theme['gray-400']};
  display: flex;
  align-items: center;
  padding: 0.5rem;
  gap: 0.25rem;
  border: 0;
  border-radius: 6px;
  text-transform: uppercase;
  font-size: 0.75rem;
  cursor: pointer;

  transition: background 150ms ease;

  &:hover {
    background: ${(props) => props.theme['gray-500']};
  }

  svg {
    color: ${(props) => props.theme['purple-500']};
  }
`
