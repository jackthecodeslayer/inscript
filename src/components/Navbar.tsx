import Link from 'next/link'
import { Search } from 'lucide-react'
import CartIcon from './CartIcon'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#1d1d1f]/80 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 text-xs font-medium text-white/80">
          <Link href="/" className="hover:text-white transition-colors">
            <span className="font-semibold text-sm tracking-wide">Inscript</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/catalogue" className="hover:text-white transition-colors">Cases</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
          </div>

          <div className="flex items-center space-x-4">
            <CartIcon />
          </div>
        </div>
      </div>
    </nav>
  )
}
