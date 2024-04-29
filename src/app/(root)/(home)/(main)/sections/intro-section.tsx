import { FunctionComponent } from 'react'
interface IntroSectionProps {}

const IntroSection: FunctionComponent<IntroSectionProps> = ({}) => {
  return (
    <main>
      <section className="">
        <h1 className="text-4xl font-bold">Sihun Log</h1>
        <p className="pt-4 text-xl text-gray-400">
          I&apos;m a backend application developer. I have experience in the
          entire process from startups to service planning to deploy 🚀 I&apos;m
          very interested in improving productivity. I&apos;m trying to make
          better code 👨🏼‍💻.
        </p>
      </section>
    </main>
  )
}

export default IntroSection
