'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        <Link href="/">
          <div className="text-2xl font-bold tracking-tighter text-on-surface font-headline">
            Metacyber
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/">
            <span
              className={`font-headline text-sm tracking-widest uppercase font-semibold transition-colors ${
                isActive('/') ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1' : 'text-on-surface/70 hover:text-primary'
              }`}
            >
              Home
            </span>
          </Link>
          <Link href="/services">
            <span
              className={`font-headline text-sm tracking-widest uppercase font-semibold transition-colors ${
                isActive('/services') ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1' : 'text-on-surface/70 hover:text-primary'
              }`}
            >
              Services
            </span>
          </Link>
          <Link href="/about">
            <span
              className={`font-headline text-sm tracking-widest uppercase font-semibold transition-colors ${
                isActive('/about') ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1' : 'text-on-surface/70 hover:text-primary'
              }`}
            >
              About Us
            </span>
          </Link>
          <Link href="/blog">
            <span
              className={`font-headline text-sm tracking-widest uppercase font-semibold transition-colors ${
                isActive('/blog') ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1' : 'text-on-surface/70 hover:text-primary'
              }`}
            >
              Blog
            </span>
          </Link>
        </div>

        <Link href="/contact">
          <button className="bg-cyan-400 text-black px-6 py-2.5 rounded-full font-semibold text-sm 
          shadow-[0_0_20px_rgba(34,211,238,0.5)] 
          hover:shadow-[0_0_30px_rgba(34,211,238,0.8)] 
          transition-all duration-300">
            Get Started
          </button>
        </Link>
      </nav>
    </header>
  );
}
