import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1160px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 1.25rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`

export const LocationTag = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  color: ${(props) => props.theme['purple-500']};
  background: ${(props) => props.theme['purple-200']};
  padding: 0.5rem;
  border-radius: 6px;
  font-size: 0.875rem;
  line-height: 130%;
`

export const CartButton = styled.button`
  background: ${(props) => props.theme['yellow-200']};
  border-radius: 6px;
  line-height: 0;
  cursor: pointer;
  border: none;
  padding: 0.5rem;
  position: relative;

  a {
    color: ${(props) => props.theme['yellow-700']};
  }
`
export const CartQuantity = styled.span`
  position: absolute;
  width: 1.125rem;
  height: 1.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -8px;
  right: -8px;

  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['yellow-700']};
  font-weight: bold;
  border-radius: 100%;
  font-size: 0.75rem;
`
