import { HeroSection } from './components/HeroSection'
import { CoffeeCard } from './components/CoffeeCard'

import { coffees } from '../../data/coffees-data'

import { CoffeeCards, CoffeesSection } from './styles'

export function Home() {
  return (
    <main>
      <HeroSection />

      <CoffeesSection>
        <h2>Nossos cafés</h2>

        <CoffeeCards>
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </CoffeeCards>
      </CoffeesSection>
    </main>
  )
}
