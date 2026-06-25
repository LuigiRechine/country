'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Search, User, ShoppingCart } from 'lucide-react';
import '@/styles/navbar.css'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Masculino', href: '/masculino' },
    { name: 'Feminino', href: '/feminino' },
    { name: 'Botas', href: '/botas' },
    { name: 'Acessórios', href: '/acessorios' },
    { name: 'Contato', href: '/contato' },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-900 rounded-full flex items-center justify-center border-2 border-[#D4A017]">
                🤠
              </div>
              <div>
                <span className="nav-logo">COUNTRY</span>
                <span className="text-[#D4A017] text-sm font-bold tracking-widest block -mt-1">STORE</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="nav-link text-lg"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="relative hidden sm:block">
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  className="search-input pl-10 pr-4 py-2.5 w-72 rounded-full text-sm focus:outline-none"
                />
                <Search className="absolute left-4 top-3 text-[#D4A017]" size={20} />
              </div>

              {/* Account */}
              <Link href="/conta" className="account-icon text-[#EDE4D5] hover:text-[#D4A017] p-2">
                <User size={24} />
              </Link>

              {/* Cart */}
              <Link href="/carrinho" className="cart-icon text-[#EDE4D5] hover:text-[#D4A017] p-2 relative">
                <ShoppingCart size={24} />
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  0
                </span>
              </Link>

              {/* Hamburger Menu */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-[#EDE4D5] p-2"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu md:hidden">
            <div className="px-6 py-8 flex flex-col gap-6 text-lg">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="nav-link text-xl py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Search Mobile */}
              <div className="pt-4">
                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  className="search-input w-full pl-10 pr-4 py-3 rounded-full"
                />
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer para compensar navbar fixa */}
      <div className="h-20" />
    </>
  );
}