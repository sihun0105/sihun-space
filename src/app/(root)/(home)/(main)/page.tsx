import { FunctionComponent } from 'react'
import IntroSection from './sections/intro-section'
import CareerSection from './sections/career-section'
import CertificateSection from './sections/certificate-section'
interface PageProps {}

const Page: FunctionComponent<PageProps> = ({}) => {
  return (
    <main className="flex flex-col px-10">
      <IntroSection />
      <CareerSection />
      <CertificateSection />
    </main>
  )
}

export default Page
