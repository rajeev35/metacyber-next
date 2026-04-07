'use client';

import Image from 'next/image';
import Button from '../ui/Button';
import GlassCard from '../ui/GlassCard';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-96 h-96 bg-primary-container/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-secondary-container/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-block px-4 py-1 rounded-full bg-surface-container-high text-primary-fixed-dim text-xs font-label font-semibold tracking-widest uppercase mb-6 border border-outline-variant/30">
            The Future of Digital Defense
          </span>

          <h1 className="text-5xl md:text-7xl font-headline font-bold leading-tight mb-6">
            Secure &amp; Scale Your <span className="gradient-text">Digital Business</span> with Metacyber
          </h1>

          <p className="text-lg text-on-surface-variant mb-10 max-w-xl leading-relaxed">
            We build powerful websites, apps, and AI-driven solutions protected by elite-grade cybersecurity frameworks.
            Innovation meets ironclad protection.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className=" bg-cyan-400 text-black glass-card neon-glow px-8 py-4 rounded-xl font-headline font-bold text-lg">
              Get Started
            </button>
            <button className="glass-card neon-glow px-8 py-4 rounded-xl font-headline font-bold text-lg">
              Book Free Consultation
            </button>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="glass-card p-4 rounded-3xl relative overflow-hidden group">
            <Image
              alt="Futuristic cyber security interface"
              className="rounded-2xl w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu2Gjl5B9S6rkXeUNu1D3mMVc6WesiS0gfxCWasewctEVIIsEJE3YxLXxBN7Jla7H25UoFPJDjrrzSfQczizyhV3qbmBwna2FTl8Z5nDC2TbEw2Vqs3_WHiTN3gm6__ZWyLDsz4OQjc_yeAoi65kAiFahhyeL2O6HRRvNNwwD-LtThGYLQyWuyuW9yBR0BN_W4JKTQ56bFA27UQ5u7MALUDNcmTRoqBJOGVCIYK5kV0KOF6qO1EcUXJ-FwgleUgUqYjD34Meyw6Jcq"
              width={600}
              height={400}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-40"></div>
          </div>

          <GlassCard className="absolute -bottom-6 -left-6 p-6 rounded-2xl shadow-2xl w-auto">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
                  security
                </span>
              </div>
              <div>
                <div className="text-xs font-label text-on-surface-variant uppercase tracking-widest">System Status</div>
                <div className="text-cyan-400 text-primary-container font-bold">Encrypted &amp; Online</div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
