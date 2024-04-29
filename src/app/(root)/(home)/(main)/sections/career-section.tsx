import { FunctionComponent } from 'react'
interface CareerSectionProps {}

const CareerSection: FunctionComponent<CareerSectionProps> = ({}) => {
  return (
    <main>
      <p className="py-8 text-4xl font-bold">👩🏻‍💻 I&apos;ve worked at</p>
      <div>
        <ul className="divide-y divide-gray-200 border-b border-t border-gray-200">
          <li className="p-4 pl-4">
            <div className="flex items-center">
              <h3 className="w-2/5 whitespace-nowrap text-base font-bold md:w-40 md:text-lg">
                Dable
              </h3>
              <div className="leading-2 ml-0 w-3/5 overflow-hidden whitespace-normal text-xs text-gray-500 md:ml-4 md:whitespace-nowrap md:text-sm">
                <p>Backend Application Developer</p>
                <p>2022.12.16 - 2024.04.30</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </main>
  )
}

export default CareerSection
