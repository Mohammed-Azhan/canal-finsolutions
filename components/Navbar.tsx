'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, TrendingUp } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed bg-red-500 top-0 py-3 md:py-6 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass shadow-lg shadow-brand-dark/10' : 'bg-transparent text-black'}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-blue to-brand-dark flex items-center justify-center shadow-lg">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <span className="font-heading font-bold text-lg leading-tight">
            Canal <span className="text-brand-blue">FinSolutions</span>
          </span>
        </Link> */}

        <Image
          src="/cover logo.png"
          width={200}
          height={200}
          alt="Branding"
        />

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-6 py-2 rounded-lg text-md font-semibold transition-all duration-200 ${pathname === link.href
                ? 'text-brand-blue bg-brand-blue/10'
                : 'hover:text-brand-blue hover:bg-brand-blue/5'
                }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-blue to-[#1a8fb5] text-white text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 btn-glow transition-all duration-300"
          >
            Get Consultation
          </Link>
        </div>

        <button
          className="md:hidden p-2 rounded-lg text-brand-dark hover:bg-brand-blue/10 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden glass border-t border-white/40 shadow-xl">
          <nav className="px-6 pt-3 pb-5 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${pathname === link.href
                  ? 'text-brand-blue bg-brand-blue/10'
                  : 'text-brand-text hover:text-brand-blue hover:bg-brand-blue/5'
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-3 px-5 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-[#1a8fb5] text-white text-sm font-semibold text-center shadow-md"
            >
              Get Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
