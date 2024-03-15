import styled from 'styled-components'

export const Section = styled.section`
  position: relative;
`

export const HeroContainer = styled.div`
  max-width: 1160px;
  width: 100%;
  margin: 0 auto;
  padding: 5.75rem 1.25rem;
  display: flex;
  align-items: flex-start;
  gap: 3.5rem;

  img {
    max-width: 29.75rem;
  }
`

export const HeroTextContent = styled.div`
  margin-bottom: 4.125rem;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    color: ${(props) => props.theme['gray-900']};
    line-height: 130%;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['gray-800']};
  }
`

export const BenefitsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 567px;

  div {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  span {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    font-size: 1rem;
    line-height: 130%;
    white-space: nowrap;
  }
`

const BENEFIT_ICON_COLORS = {
  'dark-yellow': 'yellow-700',
  yellow: 'yellow-500',
  gray: 'gray-700',
  purple: 'purple-500',
}

interface BenefitIconProps {
  background: keyof typeof BENEFIT_ICON_COLORS
}

export const BenefitIcon = styled.div<BenefitIconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme[BENEFIT_ICON_COLORS[props.background]]};
  padding: 0.5rem;
  border-radius: 100%;

  svg {
    color: ${(props) => props.theme.white};
  }
`

export const BackgroundImage = styled.img`
  object-fit: contain;
  position: absolute;
  width: 100%;
  pointer-events: none;
  top: 0;
`
