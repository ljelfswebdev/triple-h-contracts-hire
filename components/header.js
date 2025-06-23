'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Logo from './globals/logo';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup in case component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);


  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact Us', href: '/contact' },
  ].filter(Boolean);

  return (
    <header className="bg-black text-white relative z-50">
      <div className="container">
        <div className="bg-black relative z-[1] mx-auto py-4 flex items-center justify-between">
        <Logo/>
          <nav className="hidden md:flex gap-6">
            {navItems.map(item => (
              <Link key={item.href} href={item.href} className="text-white relative
              after:content-[''] after:absolute after:left-0 after:-bottom-1 after:bg-primary after:w-full after:h-[2px] after:rounded-md after:max-w-0 after:transition-all hover:after:max-w-40
              ">
                {item.label}
              </Link>
            ))}
          </nav>
          <button
            className="md:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      <div
        className={`absolute h-screen top-0 left-0 w-full bg-black text-white flex flex-col items-center justify-center gap-8 px-4 transition-all duration-500 overflow-hidden ${
          isOpen ? 'max-h-screen py-12' : 'max-h-0'
        } md:hidden`}
      >
        {navItems.map(item => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setIsOpen(false)}
            className="text-lg font-medium"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;