'use client';

import Image from 'next/image';
import Link from 'next/link';
import Logo from './globals/logo';

const Footer = () => {
  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
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
          <a href="tel:01785532321" title="Call Us" className="mt-2">01785 532321</a> <br />
          <a href="mail:Ade.hall@triplehcontracts-hire.com" title="Email Us" className="mt-2">Email Us</a><br/>
          <a href="https://www.facebook.com/p/Triple-H-Contracts-Hire-Ltd-100066725116780/" target="_blank" className="mt-4 flex" title="View Our Facebook">
          
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-10 w-10">
            <path fill="#ffffff" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256c0 120 82.7 220.8 194.2 248.5V334.2h-52.8V256h52.8v-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287v175.9C413.8 494.8 512 386.9 512 256z"/>
          </svg>

          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;