import { FunctionComponent } from 'react'
interface CareerComponentProps {
  company: string
  position: string
  period: string
}

const CareerComponent: FunctionComponent<CareerComponentProps> = ({
  company,
  position,
  period,
}) => {
  return (
    <div>
      <ul className="divide-y divide-gray-200 border-b border-t border-gray-200">
        <li className="p-4 pl-4">
          <div className="flex items-center">
            <h3 className="w-2/5 whitespace-nowrap text-base font-bold md:w-40 md:text-lg">
              {company}
            </h3>
            <div className="leading-2 ml-0 w-4/5 overflow-auto whitespace-normal text-xs text-gray-500 md:ml-4 md:whitespace-nowrap md:text-sm">
              <p> {position} </p>
              <p> {period} </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default CareerComponent
