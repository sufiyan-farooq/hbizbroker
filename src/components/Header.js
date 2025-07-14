'use client';

import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link'; 
import Logo from '@/assets/logo.webp';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-[#16202a] shadow-lg sticky top-0 z-50">
      <div className="mx-auto sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 pr-4">
          {/* Logo */}
          <div className="flex items-center pl-7">
            <Image
              src={Logo}
              alt="Healthcare Brokers Logo"
              width={43}
              height={43}
              className="rounded-full"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {/* Home with Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <Link 
                href="/" 
                className="text-gray-300 text-sm hover:text-white transition-colors relative group py-2 flex items-center" 
                style={{ fontFamily: 'PoppinRegular' }}
              >
                Home
                <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5da0b1] transition-all duration-300 group-hover:w-full"></span>
              </Link>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 mt-2 w-48 transparent-bg  rounded-lg shadow-lg border border-gray-200 transition-all duration-300 ${isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                <div className="py-2">
                  <Link 
                    href="/happy-clients" 
                    className="block px-4 py-2 text-white hover:bg-[#5da0b1]  transition-colors duration-200"
                    style={{ fontFamily: 'PoppinRegular' }}
                  >
                    Happy Clients
                  </Link>
                  <Link 
                    href="/our-team" 
                    className="block px-4 py-2 text-white hover:bg-[#5da0b1]  transition-colors duration-200"
                    style={{ fontFamily: 'PoppinRegular' }}
                  >
                    Our Team
                  </Link>
                  <Link 
                    href="/solid-listing" 
                    className="block px-4 py-2 text-white hover:bg-[#5da0b1]  transition-colors duration-200"
                    style={{ fontFamily: 'PoppinRegular' }}
                  >
                    Solid Listing
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/whywork" className="text-gray-300 text-sm hover:text-white transition-colors relative group py-2" style={{ fontFamily: 'PoppinRegular' }}>
              Why Work with Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5da0b1] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/business" className="text-gray-300 text-sm hover:text-white transition-colors relative group py-2" style={{ fontFamily: 'PoppinRegular' }}>
              Businesses For Sale
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5da0b1] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/consultation" className="text-gray-300 text-sm hover:text-white transition-colors relative group py-2" style={{ fontFamily: 'PoppinRegular' }}>
              Consultation Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5da0b1] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/faqs" className="text-gray-300 text-sm hover:text-white transition-colors relative group py-2" style={{ fontFamily: 'PoppinRegular' }}>
              FAQs
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5da0b1] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/resources" className="text-gray-300 text-sm hover:text-white transition-colors relative group py-2" style={{ fontFamily: 'PoppinRegular' }}>
              Resources
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5da0b1] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/realstate" className="text-gray-300 text-sm hover:text-white transition-colors relative group py-2" style={{ fontFamily: 'PoppinRegular' }}>
              Real Estate Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5da0b1] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <button style={{ fontFamily: "PoppinRegular" }} className="bg-[#5a9dae] duration-500 hover:bg-[#387b8c] px-12 py-2 cursor-pointer rounded-4xl transition-colors text-white font-medium">
                CONTACT US
              </button>
            </Link>
          </div>

          <button
            className="lg:hidden text-white p-2 focus:outline-none cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden bg-slate-900 overflow-hidden transition-all duration-1000 ease-in-out ${isMenuOpen ? 'max-h-screen py-4 border-t border-slate-700' : 'max-h-0'}`}>
          <nav className="flex flex-col space-y-4">
            {/* Mobile Home with Dropdown */}
            <div className="px-4">
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-gray-300 text-sm hover:text-white transition-colors py-2 relative group w-full text-left flex items-center justify-between"
                style={{ fontFamily: "PoppinRegular" }}
              >
                Home
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5da0b1] transition-all duration-300 group-hover:w-20"></span>
              </button>
              
              {/* Mobile Dropdown */}
              <div className={`overflow-hidden transition-all duration-300 ${isDropdownOpen ? 'max-h-40 mt-2' : 'max-h-0'}`}>
                <div className="pl-4 space-y-2">
                  <Link
                    href="/happy-clients"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-gray-400 text-sm hover:text-white transition-colors py-1"
                    style={{ fontFamily: "PoppinRegular" }}
                  >
                    Happy Clients
                  </Link>
                  <Link
                    href="/our-team"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-gray-400 text-sm hover:text-white transition-colors py-1"
                    style={{ fontFamily: "PoppinRegular" }}
                  >
                    Our Team
                  </Link>
                  <Link
                    href="/solid-listing"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-gray-400 text-sm hover:text-white transition-colors py-1"
                    style={{ fontFamily: "PoppinRegular" }}
                  >
                    Solid Listing
                  </Link>
                </div>
              </div>
            </div>

            {[
              { label: 'Why Work with Us', href: '/whywork' },
              { label: 'Businesses For Sale', href: '/business' },
              { label: 'Consultation Services', href: '/consultation' },
              { label: 'FAQs', href: '/faqs' },
              { label: 'Resources', href: '/resources' },
              { label: 'Real Estate Services', href: '/realstate' }
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-300 text-sm hover:text-white transition-colors px-4 py-2 relative group"
                style={{ fontFamily: "PoppinRegular" }}
              >
                {link.label}
                <span className="absolute bottom-0 left-4 w-0 h-0.5 bg-[#5da0b1] transition-all duration-300 group-hover:w-20"></span>
              </Link>
            ))}
            <Link href="/contact">
              <button style={{ fontFamily: "PoppinRegular" }} className="bg-[#5da0b1] hover:bg-[#387b8c] duration-500 px-4 py-2 rounded-full transition-colors mx-4 text-left text-white font-medium">
                CONTACT US
              </button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}