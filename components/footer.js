'use client';

import Image from 'next/image';
import Link from 'next/link';
import Logo from './globals/logo';

const Footer = () => {
  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <footer className="w-full py-20 bg-black text-white z-50">
      <div className="container flex flex-wrap gap-40">
        {/* Logo */}
        <div className="flex items-center">
          <Logo/>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-2">
          {links.map((link, i) => (
            <Link key={i} href={link.href} className="text-white relative
              after:content-[''] after:absolute after:left-0 after:-bottom-1 after:bg-primary after:w-full after:h-[2px] after:rounded-md after:max-w-0 after:transition-all hover:after:max-w-40
              ">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Contact Info */}
        <div className="font-semibold leading-relaxed">
          <p>
            Unit 1 Billington Industrial Estate,<br />
            Newport Road,<br />
            Stafford,<br />
            ST18 9DQ
          </p>
          <a href="tel:01785532321" title="Call Us" className="mt-2">01785 532321</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;