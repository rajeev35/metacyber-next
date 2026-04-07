import Image from 'next/image';
import Button from '@/components/ui/Button';
import GlassCard from '@/components/ui/GlassCard';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[716px] flex items-center justify-center overflow-hidden px-8 py-24 pt-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-secondary-container/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary-container/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 max-w-5xl text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] uppercase bg-surface-container-high text-primary-fixed-dim rounded-full shadow-[0_0_15px_rgba(0,220,229,0.2)]">
            The Sentinel Prism
          </span>

          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight mb-8 text-on-surface">
            Protecting and Powering the <span className="gradient-text">Future of Digital Business</span>
          </h1>

          <p className="text-lg md:text-xl text-on-surface-variant max-w-3xl mx-auto mb-10 leading-relaxed font-body">
            We transcend traditional security boundaries, merging impenetrable cybersecurity architectures with next-generation AI
            intelligence to secure the assets of tomorrow.
          </p>

          <Button size="lg">View Our Impact</Button>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 md:order-1">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary-container/20 to-secondary-container/20 rounded-[2rem] blur-xl"></div>
            <Image
              alt="Our Origins"
              className="relative rounded-[2rem] object-cover w-full h-[500px] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIaKXKbjn3r4IKQvRGNDGRH4UJTxENPdM2TzzCI7l08m6RSD03zn8ENjvLxdipkS7Bz201EMUHT5jKEI-MghnOQBYaFXLbaMqxId3bLTasH0LihhOKfNLd-4x28lNRZ8mowvIUPmPLXTf5QDM1u0jG4jMnTzwGEJ4lLRC2fpintm0Ngxgwn9DQqDgsp8uFUR08-cFKzIN270XFywrRXtvviQrWH3SJLUCVMoO-kBO00wCTR9XGovK5_EAgKR74TZKhBXdtivQBVcnI"
              width={500}
              height={500}
            />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="font-headline text-4xl font-bold mb-6 text-on-surface">Our Story</h2>

            <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed font-body">
              <p>
                Metacyber wasn't born in a typical boardroom. It emerged from the deep-tech laboratories where the first generation
                of quantum-resistant algorithms met the neural networks of tomorrow.
              </p>

              <p>
                Starting as a collaborative hub for cybersecurity renegades and AI researchers, we realized that the digital landscape
                was evolving faster than the defenses meant to protect it. We decided to bridge that gap.
              </p>

              <p>
                Today, Metacyber stands as a global sentinel, providing the intelligence and the armor that modern enterprises need to
                thrive in a hyper-connected world.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-6">
              <div>
                <p className="text-3xl font-bold text-primary-container font-headline">500+</p>
                <p className="text-xs uppercase tracking-widest text-on-surface-variant font-label">Threats Neutralized</p>
              </div>
              <div className="w-px h-10 bg-outline-variant/30"></div>
              <div>
                <p className="text-3xl font-bold text-secondary-fixed-dim font-headline">24/7</p>
                <p className="text-xs uppercase tracking-widest text-on-surface-variant font-label">Global Surveillance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-surface-container-lowest/50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16 text-center">
            <h2 className="font-headline text-4xl font-bold mb-4">The Pillars of Intelligence</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">
              Our guiding principles aren't just words—they are programmed into every line of code we write and every strategy we deploy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
            {/* Innovation */}
            <GlassCard className="md:col-span-4 rounded-xl flex flex-col justify-between group hover:bg-surface-container-high transition-all">
              <div>
                <span className="material-symbols-outlined text-primary-container text-4xl mb-6">psychology</span>
                <h3 className="text-2xl font-bold mb-4 font-headline">Innovation</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Pioneering the unknown. We don't just follow trends; we define the future of proactive defense.
                </p>
              </div>
              <div className="mt-4 text-xs tracking-widest text-primary-fixed-dim opacity-0 group-hover:opacity-100 transition-opacity uppercase font-label">
                Priority 01
              </div>
            </GlassCard>

            {/* Security */}
            <GlassCard className="md:col-span-8 rounded-xl relative overflow-hidden group hover:bg-surface-container-high transition-all p-8">
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <span className="material-symbols-outlined text-primary-container text-4xl mb-6">verified_user</span>
                  <h3 className="text-4xl font-bold mb-4 font-headline">Security</h3>
                  <p className="text-on-surface-variant text-xl max-w-md leading-relaxed">
                    Impenetrable. Resilience is built into our DNA, ensuring your data remains your most private asset.
                  </p>
                </div>
                <div className="flex gap-2">
                  <div className="h-1 w-12 bg-primary-container rounded-full"></div>
                  <div className="h-1 w-4 bg-outline-variant rounded-full"></div>
                  <div className="h-1 w-4 bg-outline-variant rounded-full"></div>
                </div>
              </div>
              <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-[12rem]">shield</span>
              </div>
            </GlassCard>

            {/* Excellence */}
            <GlassCard className="md:col-span-7 rounded-xl flex flex-col justify-center group hover:bg-surface-container-high transition-all p-8">
              <div className="flex items-start gap-6">
                <span className="material-symbols-outlined text-secondary-container text-4xl mt-1">auto_awesome</span>
                <div>
                  <h3 className="text-2xl font-bold mb-2 font-headline">Excellence</h3>
                  <p className="text-on-surface-variant leading-relaxed">Precision in execution. Our standards are calibrated to the highest degree of technical mastery.</p>
                </div>
              </div>
            </GlassCard>

            {/* Client Success */}
            <GlassCard className="md:col-span-5 rounded-xl flex items-center group hover:bg-surface-container-high transition-all p-8">
              <div className="w-full">
                <h3 className="text-2xl font-bold mb-4 font-headline">Client Success</h3>
                <div className="flex -space-x-4 mb-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-surface-container-highest"></div>
                  ))}
                  <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-background bg-primary-container text-on-primary-container text-[10px] font-bold">
                    +1k
                  </div>
                </div>
                <p className="text-on-surface-variant leading-relaxed">Your growth is our victory. We scale as you scale.</p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <h2 className="font-headline text-4xl font-bold mb-4">The Architects of Security</h2>
          <p className="text-on-surface-variant max-w-2xl">Meet the visionary minds leading the charge into the digital frontier.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: 'Dr. Elias Vance', role: 'Chief Intelligence Architect', bio: 'Ex-NSA, Neural-Net pioneer.' },
            { name: 'Sarah Thorne', role: 'Director of Cyber Defense', bio: '15+ years in Cryptography.' },
            { name: 'Marcus Chen', role: 'Systems Optimization Lead', bio: 'Quantum Systems Expert.' },
          ].map((member) => (
            <div key={member.name} className="group relative">
              <div className="aspect-[4/5] rounded-xl overflow-hidden mb-6 bg-surface-container-low">
                <div className="w-full h-full bg-gradient-to-br from-primary-container/30 to-secondary-container/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl text-on-surface-variant opacity-30">person</span>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                <GlassCard className="rounded-xl p-6">
                  <h4 className="font-headline text-xl font-bold">{member.name}</h4>
                  <p className="text-primary-container text-sm font-label uppercase tracking-widest mb-2">{member.role}</p>
                  <p className="text-on-surface-variant text-xs font-body">{member.bio}</p>
                </GlassCard>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-primary-container/5 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
          <h2 className="font-headline text-5xl font-bold mb-8">Ready to Transcend?</h2>
          <p className="text-xl text-on-surface-variant mb-12 font-body">
            Your digital evolution starts with a single layer of impenetrable security. Join the ecosystem of the future.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg">Join the Future of Tech</Button>
            <button className="px-10 py-5 bg-surface-container-low border border-outline-variant/30 text-on-surface rounded-xl font-bold text-lg hover:bg-surface-container-high transition-all">
              Speak to an Expert
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
