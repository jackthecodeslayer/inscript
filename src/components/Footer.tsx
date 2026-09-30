import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] pt-10 pb-8 text-[#86868b] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-[#d2d2d7] pb-8 mb-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-[#1d1d1f] mb-3">Shop and Learn</h3>
            <ul className="space-y-2">
              <li><Link href="/catalogue" className="hover:underline">Store</Link></li>
              <li><Link href="/catalogue?device=iphone-16" className="hover:underline">iPhone 16 Cases</Link></li>
              <li><Link href="/catalogue?device=iphone-15" className="hover:underline">iPhone 15 Cases</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-[#1d1d1f] mb-3">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/shipping" className="hover:underline">Shipping & Delivery</Link></li>
              <li><Link href="/returns" className="hover:underline">Returns</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-[#1d1d1f] mb-3">About Us</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:underline">Our Story</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>Copyright © {new Date().getFullYear()} Christian Case Store. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:underline border-r border-[#d2d2d7] pr-4">Privacy Policy</Link>
            <Link href="/terms" className="hover:underline">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
