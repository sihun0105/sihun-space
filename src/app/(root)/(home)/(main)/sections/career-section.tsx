import { FunctionComponent } from 'react'
import CareerComponent from '../components/career-component'
interface CareerSectionProps {}

const CareerSection: FunctionComponent<CareerSectionProps> = ({}) => {
  return (
    <main>
      <p className="py-8 text-4xl font-bold">👩🏻‍💻 I&apos;ve worked at</p>
      <CareerComponent
        company="한글과컴퓨터"
        position="Technical Support Engineer"
        period="2024.06.27 ~ "
      />
      <CareerComponent
        company="Dable"
        position="Backend Application Developer"
        period="2022.12.16 - 2024.04.30"
      />
    </main>
  )
}

export default CareerSection
