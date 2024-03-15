import backgroundBlur from '../../../../assets/home-background.png'
import heroImage from '../../../../assets/hero-img.png'

import {
  Coffee,
  Package,
  ShoppingCartSimple,
  Timer,
} from '@phosphor-icons/react'

import {
  BackgroundImage,
  HeroContainer,
  Section,
  HeroTextContent,
  BenefitsList,
  BenefitIcon,
} from './styles'

export function HeroSection() {
  return (
    <Section>
      <HeroContainer>
        <div>
          <HeroTextContent>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </HeroTextContent>

          <BenefitsList>
            <div>
              <span>
                <BenefitIcon background="dark-yellow">
                  <ShoppingCartSimple size={16} weight="fill" />
                </BenefitIcon>
                Compra simples e segura
              </span>
              <span>
                <BenefitIcon background="yellow">
                  <Timer size={16} weight="fill" />
                </BenefitIcon>
                Entrega rápida e rastreada
              </span>
            </div>

            <div>
              <span>
                <BenefitIcon background="gray">
                  <Package size={16} weight="fill" />
                </BenefitIcon>
                Embalagem mantém o café intacto
              </span>
              <span>
                <BenefitIcon background="purple">
                  <Coffee size={16} weight="fill" />
                </BenefitIcon>
                O café chega fresquinho até você
              </span>
            </div>
          </BenefitsList>
        </div>

        <img src={heroImage} alt="" />
      </HeroContainer>

      <BackgroundImage src={backgroundBlur} alt="" />
    </Section>
  )
}
