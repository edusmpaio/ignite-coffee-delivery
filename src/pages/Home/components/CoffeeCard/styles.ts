import styled from 'styled-components'

export const Card = styled.div`
  max-width: 256px;
  border-radius: 0.375rem 2.25rem;

  padding: 1.25rem 1.5rem;
  background: ${(props) => props.theme['gray-200']};
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: -20%;
  }

  strong {
    font-family: 'Baloo 2', sans-serif;
    font-weight: bold;
    font-size: 1.25rem;
    color: ${(props) => props.theme['gray-800']};
    line-height: 130%;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${(props) => props.theme['gray-600']};
    font-size: 0.875rem;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    text-align: center;
    line-height: 130%;
    margin-bottom: 2rem;
  }

  footer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const Tags = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin: 0.75rem 0 1rem;
`

export const Tag = styled.span`
  color: ${(props) => props.theme['yellow-700']};
  background: ${(props) => props.theme['yellow-200']};
  text-transform: uppercase;
  font-size: 0.625rem;
  line-height: 130%;
  border-radius: 999px;
  padding: 0.25rem 0.5rem;
  font-weight: bold;
`

export const Price = styled.span`
  font-family: 'Baloo 2', sans-serif;
  font-weight: 800;
  font-size: 1.5rem;
  color: ${(props) => props.theme['gray-700']};

  span {
    font-size: 0.875rem;
    font-weight: 400;
  }
`

export const AddToCartControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const AddToCartButton = styled.button`
  background: ${(props) => props.theme['purple-700']};
  color: ${(props) => props.theme.white};
  border-radius: 6px;
  line-height: 0;
  cursor: pointer;
  border: none;
  padding: 0.5rem;

  transition: background 150ms ease;

  &:hover {
    background: ${(props) => props.theme['purple-500']};
  }
`

export const QuantityInput = styled.div`
  padding: 0.75rem 0.5rem;
  background: ${(props) => props.theme['gray-400']};
  border-radius: 6px;
  display: flex;
  align-items: center;
  width: 4.5rem;
  max-height: 2.375rem;
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
