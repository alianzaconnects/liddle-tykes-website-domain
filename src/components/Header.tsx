"use client"

import { Menu, X, Phone, Mail } from "lucide-react"
import { useState } from "react"

interface HeaderProps {
  currentPage: string
  onNavigate: (page: string) => void
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", path: "home" },
    { name: "About Us", path: "about" },
    { name: "Child Care Services", path: "services" },
    { name: "Contact Us", path: "contact" },
  ]

  return (
    <>
      <div className="bg-[#3D2645] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm gap-2">
          <div className="flex items-center gap-4">
            <a href="tel:276-236-3421" className="flex items-center gap-2 hover:text-[#F4C430] transition-colors">
              <Phone size={16} />
              <span>276-236-3421</span>
            </a>
            <a
              href="mailto:lddletykesdaycare@yahoo.com"
              className="flex items-center gap-2 hover:text-[#F4C430] transition-colors"
            >
              <Mail size={16} />
              <span>lddletykesdaycare@yahoo.com</span>
            </a>
          </div>
          <div className="text-center sm:text-right">
            <span className="font-medium">Hours: Mon-Fri 6:00 AM - 6:00 PM</span>
          </div>
        </div>
      </div>

      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <button onClick={() => onNavigate("home")} className="flex items-center gap-3 group">
              <img
                src="/logo.png"
                alt="Liddle Tykes Logo"
                className="h-20 w-auto hover:scale-105 transition-transform cursor-pointer"
              />
            </button>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => onNavigate(item.path)}
                  className={`text-lg font-medium transition-colors relative group cursor-pointer ${
                    currentPage === item.path ? "text-[#3D2645]" : "text-gray-700 hover:text-[#3D2645]"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#F4C430] transition-transform origin-left ${
                      currentPage === item.path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </button>
              ))}
            </nav>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <nav className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => {
                    onNavigate(item.path)
                    setIsMenuOpen(false)
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                    currentPage === item.path ? "bg-[#F4C430] text-[#3D2645]" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  )
}
