'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full py-16 border-t border-outline-variant/20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto px-8 mb-8">
        <div className="md:col-span-1">
          <span className="text-xl font-bold text-on-surface mb-4 block font-headline">Metacyber</span>
          <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
            The world's most advanced digital agency combining elite cybersecurity with cutting-edge AI engineering.
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-on-surface-variant/60 hover:text-primary cursor-pointer transition-colors">
              public
            </span>
            <span className="material-symbols-outlined text-on-surface-variant/60 hover:text-primary cursor-pointer transition-colors">
              hub
            </span>
            <span className="material-symbols-outlined text-on-surface-variant/60 hover:text-primary cursor-pointer transition-colors">
              terminal
            </span>
          </div>
        </div>

        <div>
          <h4 className="text-on-surface font-bold mb-6 font-headline">Solutions</h4>
          <ul className="space-y-4">
            <li>
              <Link href="#" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                Web Systems
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                AI Core
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                Cyber Shield
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                Mobile Platforms
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-on-surface font-bold mb-6 font-headline">Company</h4>
          <ul className="space-y-4">
            <li>
              <Link href="#" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                Security Research
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-on-surface font-bold mb-6 font-headline">Newsletter</h4>
          <p className="text-sm text-on-surface-variant mb-4">Stay updated with the latest in cyber-tech.</p>
          <div className="relative">
            <input
              className="w-full bg-surface-container-low border border-outline-variant/50 rounded-lg px-4 py-3 text-sm focus:border-primary focus:ring-0 transition-colors text-on-surface placeholder:text-on-surface-variant/40"
              placeholder="Email address"
              type="email"
            />
            <button className="absolute right-2 top-2 p-1.5 bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-sm">send</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 pt-8 border-t border-outline-variant/10 text-center">
        <p className="text-sm text-on-surface-variant/60">© 2024 Metacyber. The Sentinel Prism Intelligence.</p>
      </div>
    </footer>
  );
}
