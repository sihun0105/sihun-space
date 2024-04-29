import { cn } from '@/lib/utils'
import { FunctionComponent } from 'react'
interface NavbarProps {
  className?: string
}

const Navbar: FunctionComponent<NavbarProps> = ({ className }) => {
  return (
    <nav
      className={cn(
        'flex h-full w-full items-center justify-between px-10 py-4',
        className,
      )}
    >
      <a href="/" className="flex flex-row leading-3">
        <b className="text-xl">Sihun Log</b>
        <p className="text-2xl text-lime-500">,</p>
      </a>
    </nav>
  )
}

export default Navbar
