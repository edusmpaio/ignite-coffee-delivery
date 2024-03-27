import styled from 'styled-components'

export const Title = styled.strong`
  display: block;
  color: ${(props) => props.theme['gray-800']};
  font-size: 1.125rem;
  line-height: 130%;
  margin-bottom: 1rem;
`

export const CartContainer = styled.div`
  background: ${(props) => props.theme['gray-200']};
  padding: 2.5rem;
  border-radius: 6px 44px;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const ConfirmButton = styled.button`
  width: 100%;
  background: ${(props) => props.theme['yellow-500']};
  padding-block: 0.75rem;
  height: 2.875rem;
  border: 0;
  border-radius: 6px;
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.875rem;
  cursor: pointer;

  transition: background 150ms ease;

  &:hover {
    background: ${(props) => props.theme['yellow-700']};
  }
`

export const Totals = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span:nth-child(1) {
      font-size: 0.875rem;
    }

    strong {
      font-size: 1.25rem;
      color: ${(props) => props.theme['gray-800']};
    }
  }
`
