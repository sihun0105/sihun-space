import { FunctionComponent } from 'react'
interface CertificateSectionProps {}

const CertificateSection: FunctionComponent<CertificateSectionProps> = ({}) => {
  return (
    <main>
      <p className="py-8 text-4xl font-bold">🎨 Certificate</p>
      <div>
        <ul className="divide-y divide-gray-200 border-b border-t border-gray-200">
          <li className="p-4 pl-4">
            <div className="flex items-center">
              <h3 className="w-2/5 whitespace-nowrap text-base font-bold md:w-40 md:text-lg">
                정보처리기사
              </h3>
              <div className="leading-2 ml-0 w-3/5 overflow-hidden whitespace-normal text-xs text-gray-500 md:ml-4 md:whitespace-nowrap md:text-sm">
                <p>2024.06.18</p>
              </div>
            </div>
          </li>
          <li className="p-4 pl-4">
            <div className="flex items-center">
              <h3 className="w-2/5 whitespace-nowrap text-base font-bold md:w-40 md:text-lg">
                컴퓨터활용능력 2급
              </h3>
              <div className="leading-2 ml-0 w-3/5 overflow-hidden whitespace-normal text-xs text-gray-500 md:ml-4 md:whitespace-nowrap md:text-sm">
                <p>2020.11.20</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </main>
  )
}

export default CertificateSection
