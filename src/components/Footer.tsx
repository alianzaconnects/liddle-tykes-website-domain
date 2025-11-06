"use client"

import { MapPin, Phone, Mail, Clock, Facebook, Printer } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-[#3D2645] to-[#2A1A32] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#F4C430]">Liddle Tykes</h3>
            <p className="text-gray-300 mb-4">Building for the future "One LIDDLE step at a TIME"</p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#F4C430] hover:bg-[#FFD966] text-[#3D2645] rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook size={20} />
              </a>
              <button
                onClick={() => window.print()}
                className="w-10 h-10 bg-[#F4C430] hover:bg-[#FFD966] text-[#3D2645] rounded-full flex items-center justify-center transition-colors"
              >
                <Printer size={20} />
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4 text-[#F4C430]">Contact Information</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-[#F4C430] flex-shrink-0 mt-1" />
                <div>
                  <p>59 Melrose Ln</p>
                  <p>Galax, VA 24333</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-[#F4C430] flex-shrink-0" />
                <a href="tel:276-236-3421" className="hover:text-[#F4C430] transition-colors">
                  276-236-3421
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-[#F4C430] flex-shrink-0" />
                <a
                  href="mailto:lddletykesdaycare@yahoo.com"
                  className="hover:text-[#F4C430] transition-colors break-all"
                >
                  lddletykesdaycare@yahoo.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4 text-[#F4C430]">Child Care Hours</h4>
            <div className="flex items-start gap-3 text-gray-300">
              <Clock size={20} className="text-[#F4C430] flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium">Monday - Friday</p>
                <p>6:00 AM - 6:00 PM</p>
                <p className="mt-3 text-sm italic">We're looking forward to hearing from you!</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Liddle Tykes Child Development Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
