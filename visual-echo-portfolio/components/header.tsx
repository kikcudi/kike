"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-[#DF532F]">
            Visual Echo
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <Link href="/services" className="text-gray-700 hover:text-[#DF532F] transition-colors">
                [ Services ]
              </Link>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-4 space-y-2">
                  <Link href="/all-services" className="block text-sm text-gray-600 hover:text-[#DF532F]">
                    [ All services ]
                  </Link>
                  <Link href="/advertising" className="block text-sm text-gray-600 hover:text-[#DF532F]">
                    [ Advertising photography for business ]
                  </Link>
                  <Link href="/product" className="block text-sm text-gray-600 hover:text-[#DF532F]">
                    [ Product photography ]
                  </Link>
                  <Link href="/personal" className="block text-sm text-gray-600 hover:text-[#DF532F]">
                    [ Personal and brand ]
                  </Link>
                  <Link href="/real-estate" className="block text-sm text-gray-600 hover:text-[#DF532F]">
                    [ Real estate and interior ]
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/portfolio" className="text-gray-700 hover:text-[#DF532F] transition-colors">
              [ Portfolio ]
            </Link>

            <div className="relative group">
              <Link href="/about" className="text-gray-700 hover:text-[#DF532F] transition-colors">
                [ About ]
              </Link>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-4 space-y-2">
                  <Link href="/about-me" className="block text-sm text-gray-600 hover:text-[#DF532F]">
                    [ About me ]
                  </Link>
                  <Link href="/blog" className="block text-sm text-gray-600 hover:text-[#DF532F]">
                    [ Blog ]
                  </Link>
                  <Link href="/contact" className="block text-sm text-gray-600 hover:text-[#DF532F]">
                    [ Contact ]
                  </Link>
                  <Link href="/faq" className="block text-sm text-gray-600 hover:text-[#DF532F]">
                    [ FAQ ]
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="flex items-center text-gray-700 hover:text-[#DF532F] transition-colors">
              <span className="hidden md:inline">Cart (0)</span>
              <span className="md:hidden">(0)</span>
            </Link>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            <nav className="space-y-4">
              <Link href="/services" className="block text-gray-700 hover:text-[#DF532F]">
                [ Services ]
              </Link>
              <Link href="/portfolio" className="block text-gray-700 hover:text-[#DF532F]">
                [ Portfolio ]
              </Link>
              <Link href="/about" className="block text-gray-700 hover:text-[#DF532F]">
                [ About ]
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
