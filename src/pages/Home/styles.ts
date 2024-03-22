import styled from 'styled-components'

export const CoffeesSection = styled.section`
  max-width: 1160px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 1.25rem 9.75rem;

  h2 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2rem;
    color: ${(props) => props.theme['gray-800']};
    line-height: 130%;
    margin-bottom: 3.375rem;
  }
`

export const CoffeeCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  row-gap: 2.5rem;
  column-gap: 2rem;
`
