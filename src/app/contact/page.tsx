'use client';

import Image from 'next/image';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <>
      {/* Header Section */}
      <section className="relative pt-32 pb-24 overflow-hidden px-8">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-secondary-container/10 blur-[120px] -z-10"></div>
        <div className="absolute bottom-0 left-[-5%] w-[400px] h-[400px] rounded-full bg-primary-container/5 blur-[100px] -z-10"></div>

        <div className="max-w-7xl mx-auto px-8">
          <header className="mb-20 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container/10 border border-primary-container/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary-container font-label">
                Secure Channel Established
              </span>
            </div>

            <h1 className="font-headline text-5xl md:text-7xl font-bold text-on-surface tracking-tighter leading-none mb-6">
              Let's Build the <span className="gradient-text">Future</span> Together
            </h1>

            <p className="max-w-2xl text-on-surface-variant text-lg leading-relaxed font-body">
              Connect with our sentinel team to architect the next generation of secure intelligence systems. Our encryption protocols
              ensure your vision remains impenetrable.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Form Section */}
            <section className="lg:col-span-7">
              <div className="glass-effect rounded-xl p-8 md:p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/5 rounded-full blur-3xl"></div>

                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-[10px] font-bold tracking-widest uppercase text-on-surface-variant font-label ml-1">
                        Identity / Name
                      </label>
                      <input
                        className="w-full bg-surface-container-lowest border border-outline-variant/15 rounded-lg px-4 py-4 text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container/30 transition-all"
                        placeholder="John Doe"
                        type="text"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-[10px] font-bold tracking-widest uppercase text-on-surface-variant font-label ml-1">
                        Signal / Email
                      </label>
                      <input
                        className="w-full bg-surface-container-lowest border border-outline-variant/15 rounded-lg px-4 py-4 text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container/30 transition-all"
                        placeholder="john@metacyber.io"
                        type="email"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[10px] font-bold tracking-widest uppercase text-on-surface-variant font-label ml-1">
                      Project Classification
                    </label>
                    <select className="w-full bg-surface-container-lowest border border-outline-variant/15 rounded-lg px-4 py-4 text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container/30 transition-all appearance-none">
                      <option>Quantum Security Audit</option>
                      <option>AI Neural Architecture</option>
                      <option>Blockchain Integrity</option>
                      <option>Managed Threat Detection</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[10px] font-bold tracking-widest uppercase text-on-surface-variant font-label ml-1">
                      Objective / Message
                    </label>
                    <textarea
                      className="w-full bg-surface-container-lowest border border-outline-variant/15 rounded-lg px-4 py-4 text-on-surface focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container/30 transition-all resize-none"
                      placeholder="Describe your mission parameters..."
                      rows={5}
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-5 rounded-lg bg-gradient-to-r from-primary to-primary-container text-on-primary-fixed font-headline font-extrabold tracking-widest uppercase shadow-[0_0_20px_rgba(0,245,255,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </section>

            {/* Contact Info Section */}
            <aside className="lg:col-span-5 space-y-8">
              <GlassCard className="rounded-xl p-8 border border-outline-variant/5">
                <h3 className="font-headline text-xl font-bold mb-8 text-on-surface tracking-tight">Direct Terminals</h3>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-container">
                      <span className="material-symbols-outlined">alternate_email</span>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant font-label mb-1">Encrypted Mail</p>
                      <p className="text-on-surface font-semibold">intelligence@metacyber.io</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-container">
                      <span className="material-symbols-outlined">call</span>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant font-label mb-1">Secure Line</p>
                      <p className="text-on-surface font-semibold">+1 (888) SENTINEL</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-container">
                      <span className="material-symbols-outlined">location_on</span>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant font-label mb-1">Nexus Command</p>
                      <p className="text-on-surface font-semibold">Neo-Tokyo District 7, 404 Void Way</p>
                    </div>
                  </div>
                </div>
              </GlassCard>

              {/* Stylized Dark Map */}
              <div className="rounded-xl overflow-hidden h-64 relative border border-outline-variant/10 shadow-2xl group">
                <Image
                  alt="Map"
                  className="w-full h-full object-cover filter grayscale contrast-125 brightness-50 group-hover:scale-110 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBOGZyJ7ccbwBh68dWuUMBlDyybdULH6NdHRrwD5IZzpYWrTpX7EgtvjABrpEJr8uFS2wqPabbxHZdTzOtRatgUwJFXVgBgr0htL8EFvmGiYUSM7ZWWPkl3-0RgjqjrjypfsuOBNw9XhGJwaU3aM68qigUG52fLSGPuAMWDoubXnQNw77HS3u_mJMSsV1PzjD2UKSFKX0V8DcBlc3me_7ySxYPSVtIEwNf3zW3FwGODMUahVUIFLFjdPC9FDZDmh_TtqO9GaHI5rSM"
                  width={400}
                  height={300}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary-container blur-xl opacity-40 animate-pulse"></div>
                    <span className="material-symbols-outlined text-primary-container text-4xl relative z-10">share_location</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-primary-container bg-surface/80 backdrop-blur px-2 py-1 rounded">
                    Tokyo Operations
                  </span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl font-bold text-on-surface tracking-tight mb-4">Frequency Intelligence</h2>
          <p className="text-on-surface-variant">Common inquiries from our global security network.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              q: 'What is the typical deployment timeline?',
              a: 'Most sentinel protocols are established within 4-6 solar weeks, depending on the complexity of your existing infrastructure\'s neural mesh.',
            },
            {
              q: 'How is data integrity maintained?',
              a: 'We utilize quantum-resistant ledger technology combined with zero-knowledge proofs to ensure that your mission data remains strictly within your control.',
            },
            {
              q: 'Do you offer 24/7 active surveillance?',
              a: 'Our AI guardians operate on a continuous loop, providing sub-millisecond response times to any detected threat vectors across all global nodes.',
            },
            {
              q: 'Can we integrate with legacy systems?',
              a: 'Metacyber specializes in bridging the gap between archaic silicon structures and modern neural processing units via secure adapter layers.',
            },
          ].map((faq, i) => (
            <GlassCard key={i} className="rounded-xl p-8 border border-outline-variant/5 hover:border-primary-container/20 transition-all">
              <h4 className="font-headline text-lg font-bold text-primary-fixed mb-3">{faq.q}</h4>
              <p className="text-on-surface-variant leading-relaxed">{faq.a}</p>
            </GlassCard>
          ))}
        </div>
      </section>
    </>
  );
}
